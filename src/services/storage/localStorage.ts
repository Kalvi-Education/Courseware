import { StorageService } from "./storage";

export interface IStorage {
  id: string;
}

class LocalStorage extends StorageService {
  id = "localStorage";

  constructor() {
    super();
  }

  set(key: string, value: any[]): void {
    localStorage.setItem(key, JSON.stringify(value));
    super.set(key, value);
  }

  get(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
}

export const localStorageService = new LocalStorage();
