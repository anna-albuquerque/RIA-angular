export class Owner {
    name: string;
    age: number; // Atributo numérico
    isActive: boolean; // Atributo booleano
    
    constructor(name: string, age: number, isActive: boolean) {
        this.name = name;
        this.age = age;
        this.isActive = isActive;
    }
}