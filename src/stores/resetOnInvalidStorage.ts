import type { PersistStorage, StorageValue } from "zustand/middleware";

// Saved data is disposable in this alpha. Only invalid data is discarded.
export function resetOnInvalidStorage<T>(
  storage: PersistStorage<T>,
  version: number,
  isValid: (value: unknown) => value is T,
): PersistStorage<T> {
  function discard(name: string) {
    try {
      const removal = storage.removeItem(name);
      if (removal instanceof Promise) void removal.catch(() => {});
    } catch {
      // Storage can be unavailable; defaults still allow the app to start.
    }
    return null;
  }

  return {
    getItem(name) {
      const inspect = (saved: StorageValue<T> | null) => {
        if (saved === null) return null;
        return saved.version === version && isValid(saved.state)
          ? saved : discard(name);
      };
      const onReadError = (error: unknown) => {
        // Malformed JSON is invalid data; a failed storage read is not.
        return error instanceof SyntaxError ? discard(name) : null;
      };
      try {
        const saved = storage.getItem(name);
        return saved instanceof Promise
          ? saved.then(inspect).catch(onReadError)
          : inspect(saved);
      } catch (error) {
        return onReadError(error);
      }
    },
    setItem: (name, value) => storage.setItem(name, value),
    removeItem: (name) => storage.removeItem(name),
  };
}
