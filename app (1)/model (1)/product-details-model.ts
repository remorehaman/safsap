export class ProductDetailsModel {

    public id:number
    public title:string;
    public quantity:number;
    public price:number;
    public descprition:string;
    public image:string[];
    public category : string;
    public symbol : string


    constructor(productId, productTitle,productQuantity,productPrice,productDesc,productImg,productCategory,productSymbol){
        this.id = productId;
        this.title = productTitle;
        this.quantity = productQuantity;
        this.price = productPrice;
        this.descprition = productDesc;
        this.image = productImg;
        this.category = productCategory;
        this.symbol = productSymbol;
    }

}


