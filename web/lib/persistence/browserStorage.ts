export type StorageOperationResult<T = undefined> =
  | { ok: true; value: T }
  | { ok: false; reason: "storage-unavailable" };

export interface StorageAdapter {
  getItem(key: string): StorageOperationResult<string | null>;
  setItem(key: string, value: string): StorageOperationResult;
  removeItem(key: string): StorageOperationResult;
}

type StorageProvider = () => Pick<Storage, "getItem" | "setItem" | "removeItem">;

function success(): StorageOperationResult {
  return { ok: true, value: undefined };
}

function unavailable<T>(): StorageOperationResult<T> {
  return { ok: false, reason: "storage-unavailable" };
}

export function createBrowserStorage(
  getStorage: StorageProvider = () => window.localStorage,
): StorageAdapter {
  return {
    getItem(key) {
      try {
        return { ok: true, value: getStorage().getItem(key) };
      } catch {
        return unavailable();
      }
    },
    setItem(key, value) {
      try {
        getStorage().setItem(key, value);
        return success();
      } catch {
        return unavailable();
      }
    },
    removeItem(key) {
      try {
        getStorage().removeItem(key);
        return success();
      } catch {
        return unavailable();
      }
    },
  };
}
