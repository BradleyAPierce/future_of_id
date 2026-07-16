export interface StoreEvents {
  subscribe(
    storageKey: string,
    sameTabEventName: string,
    onStoreChange: () => void,
  ): () => void;
  emit(sameTabEventName: string): boolean;
}

type EventTargetProvider = () => Window;

export function createBrowserStoreEvents(
  getTarget: EventTargetProvider = () => window,
): StoreEvents {
  return {
    subscribe(storageKey, sameTabEventName, onStoreChange) {
      let target: Window;

      try {
        target = getTarget();
      } catch {
        return () => {};
      }

      const handleStorage = (event: StorageEvent) => {
        if (event.key === storageKey) {
          onStoreChange();
        }
      };

      const handleSameTabChange = () => onStoreChange();

      try {
        target.addEventListener("storage", handleStorage);
        target.addEventListener(sameTabEventName, handleSameTabChange);
      } catch {
        return () => {};
      }

      return () => {
        try {
          target.removeEventListener("storage", handleStorage);
          target.removeEventListener(sameTabEventName, handleSameTabChange);
        } catch {
          // Subscription cleanup must never break the learner experience.
        }
      };
    },
    emit(sameTabEventName) {
      try {
        getTarget().dispatchEvent(new Event(sameTabEventName));
        return true;
      } catch {
        return false;
      }
    },
  };
}
