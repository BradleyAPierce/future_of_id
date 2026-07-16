export type RevisionIdentityFactory = () => string;

function bytesToHex(bytes: Uint8Array) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export const createRevisionIdentity: RevisionIdentityFactory = () => {
  if (typeof crypto === "undefined") {
    throw new Error("Secure revision identity generation is unavailable.");
  }

  if (typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return bytesToHex(bytes);
};
