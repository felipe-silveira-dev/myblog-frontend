export const checkStorage = () => {
    try {
      return Boolean(window.localStorage);
    } catch {
      return false;
    }
  }