export class LocalizedSimpleObject {
  id: number;
  nameKK:string;
  nameRU:string;
  nameEN:string;

  constructor(id:number, nameKK:string, nameRU:string, nameEN:string){
    this.id = id;
    this.nameKK = nameKK;
    this.nameRU = nameRU;
    this.nameEN = nameEN;
  }
}
