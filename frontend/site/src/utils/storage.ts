import AsyncStorage from '@react-native-community/async-storage';

export async function exists(key: string): Promise<boolean> {
  return (await AsyncStorage.getItem(key)) !== undefined;
}

export async function set(key: string, value: string) {
  return AsyncStorage.setItem(key, value);
}

export async function setObject(key: string, value: object) {
  const str = JSON.stringify(value, null, 4);
  return AsyncStorage.setItem(key, str);
}

export async function remove(key) {
  return AsyncStorage.removeItem(key);
}

export async function get(key): Promise<string> {
  return AsyncStorage.getItem(key);
}

export async function getObject<T>(key): Promise<T> {
  const value = await AsyncStorage.getItem(key);
  if (value === undefined) {
    throw new Error(`No value for key=${key}`);
  }
  return JSON.parse(value) as T;
}

export async function clear() {
  return AsyncStorage.clear();
}
