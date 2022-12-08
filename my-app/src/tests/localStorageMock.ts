const localStorageMock = (function () {
  let store: Record<string, string> = {};

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key: string) {
      delete store[key];
    },

    keys() {
      return Object.keys(store).length;
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

export const setLocalStorage = (id: string, data: string) => {
  window.localStorage.setItem(id, data);
};

test('mock localStorage', () => {
  const key = 'search';
  const data = 'input';
  setLocalStorage(key, data);
  expect(localStorage.getItem(key)).toEqual(data);
});

test('clear localStorage', () => {
  expect(localStorage.keys()).toBe(1);
  localStorage.clear();
  expect(localStorage.keys()).toBeNull;
});

test('add to localStorage', () => {
  const key = ['1', '2'];
  const data = 'input';
  key.forEach((k) => setLocalStorage(k, data));
  expect(localStorage.keys()).toBe(2);
});
