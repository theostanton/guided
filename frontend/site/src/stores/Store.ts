export abstract class Store<T> {
  abstract hydrate(initialData: T | undefined):void;
}
