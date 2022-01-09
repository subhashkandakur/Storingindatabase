const product =[];

module.exports = class Booking{
    constructor(t){
        this.Name=t;
    }

    save(){
        product.push(this)
    }

   static fetchALL(){
       return product;
   }


}

