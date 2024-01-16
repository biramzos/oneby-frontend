export class SimpleObject {
    id: number;
    name:string;

    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }
}

export class SimpleStringObject {
    id: string;
    name: string;

    constructor(id:string, name:string){
        this.id = id;
        this.name = name;
    }
}

export class LocalizedSimpleObject {
    id: number;
    nameKZ:string;
    nameRU:string;
    nameEN:string;

    constructor(id:number, nameKZ:string, nameRU:string, nameEN:string){
        this.id = id;
        this.nameKZ = nameKZ;
        this.nameRU = nameRU;
        this.nameEN = nameEN;
    }
}

export class LocalizedSimpleStringObject {
    id: string;
    nameKZ:string;
    nameRU:string;
    nameEN:string;

    constructor(id:string, nameKZ:string, nameRU:string, nameEN:string){
        this.id = id;
        this.nameKZ = nameKZ;
        this.nameRU = nameRU;
        this.nameEN = nameEN;
    }
}