export class StorageHelper {
  
  static get(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
  
  static set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  static append(key: string, value: any): any {
    let entities = StorageHelper.get(key);
    entities = entities || [];
    entities.push(value);
    StorageHelper.set(key, entities);
    return entities;
  }
  
}
