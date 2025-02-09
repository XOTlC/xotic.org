export class StorageHelper {
    get(key: string) {
        const value = localStorage.getItem(key);

        return value ? JSON.parse(value) : null;
    }

    set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }

    clear() {
        localStorage.clear();
    }

    keys() {
        return Object.keys(localStorage);
    }

    values() {
        return Object.values(localStorage);
    }

    length() {
        return localStorage.length;
    }
}

export const storage = new StorageHelper();
