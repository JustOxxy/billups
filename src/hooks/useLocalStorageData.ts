import { useEffect, useState } from 'react';

interface UseLocalStorageDataResult<T> {
  data: T;
  clear: () => void;
  update: (data: T) => void;
}

export const useLocalStorageData = <T>(key: string, defaultValue: T): UseLocalStorageDataResult<T> => {
  const [data, setData] = useState<T>(defaultValue);

  useEffect(() => {
    const storageData = localStorage.getItem(key);
    if (!storageData) return;

    setData(JSON.parse(storageData));
  }, [key]);

  const clear = () => {
    localStorage.removeItem(key);
    setData(defaultValue);
  };

  const update = (newData: T) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  return {
    data,
    clear,
    update,
  };
};
