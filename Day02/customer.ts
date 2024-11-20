class Customer {
    private _cId: number;
    private _cName: string;
    private _cAddress: string;

    constructor(cId: number, cName: string, cAddress: string) {
        this._cId = cId;
        this._cName = cName;
        this._cAddress = cAddress;
    }

    print(): void {
        console.log(this._cId, ":", this._cName,":", this._cAddress);
    }

    get cId(): number {
        return this._cId;
    }

    set cId(value: number) {
        this._cId = value;
    }

    get cName(): string {
        return this._cName;
    }

    set cName(value: string) {
        this._cName = value;
    }

    get cAddress(): string {
        return this._cAddress;
    }

    set cAddress(value: string) {
        this._cAddress = value;
    }
}

const customer1 = new Customer(1, "Saminda", "Panadura");

customer1.print();




class Animal{
    
    constructor(feed : string , animalType : string){

    }

}

class cat extends Animal{
    constructor(feed : string , animalType : string){

        super(feed,animalType)
    }
}

class dog extends Animal{
    constructor(feed : string , animalType : string) {
        super(feed,animalType)
    }
}