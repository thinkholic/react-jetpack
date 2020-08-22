export const set = (key, value) => window.sessionStorage.setItem(key, value);
export const get = (key) => window.sessionStorage.getItem(key);
export const remove = (key) => window.sessionStorage.removeItem(key);
export const clear = () => window.sessionStorage.clear();