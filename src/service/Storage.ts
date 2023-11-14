import { checkStorage } from '../helper/Storage';

interface IStorage {
  setItem: (key: string, value: string) => void;
  getItem: (key: string) => string | null;
  removeItem: (key: string) => void;
}

class StorageService {
  constructor(private local: IStorage) { }

  public getLocal(key: string) {
    return this.local.getItem(key);
  }

  public setLocal(key: string, value: string) {
    this.local.setItem(key, value);
  }

  public removeLocal(key: string) {
    this.local.removeItem(key);
  }
}

const localData: IStorage = {
  getItem: (key) => (checkStorage() ? localStorage.getItem(key) : null),
  removeItem: (key) => (checkStorage() ? localStorage.removeItem(key) : null),
  setItem: (key, value) => (checkStorage() ? localStorage.setItem(key, value) : null),
}

export const storageService = new StorageService(localData);