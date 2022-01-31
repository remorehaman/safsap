export class FoodDetails {
    public id:number;
    public name : string;
    public price : number;
    public desc : string;
    public image : string[];
    public orderQuantity : number;


    constructor(id,name,price,desc,image,order){
        this.id = id;
        this.name = name;
        this.price = price;
        this.desc = desc;
        this.image = image;
        this.orderQuantity = order;

    }
    
}
