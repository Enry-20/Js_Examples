class Product {
    constructor(name, price, year){
        this.name=name;
        this.price=price;
        this.year=year;
    }
}

class UI {
    addProduct(){
        const listProduct= document.getElementById("product-list")
        const element=document.createElement("div")
        element.innerHTML= 
        "<div class='card text-center mb-4'><div class='card-body'><strong>Product</strong> ${product.name}</div><div>"
        ;


    }
    deleteProduct(){

    }
    message(){

    }
}

//Events
document.getElementById("product-form").addEventListener("submit", function(e){
   const name= document.getElementById("name").value
   const price= document.getElementById("price").value
   const year= document.getElementById("year").value
   e.preventDefault();
   const product= new Product(name, price, year)
})
