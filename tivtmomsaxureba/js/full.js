const products_to_add=document.getElementById("taro_products_to_add");
let db=[
    ["ჰეად ენდ შოლდერსი","12.4","./images/pc1.png",2555],
    ["ნივეა","112.4","./images/pc1.png",2],
    ["აჰავა","122.4","./images/pc1.png",27],
    ["მესაუდა","42.4","./images/pc1.png",28],
    ["ჰეად ენდ შოლდერსი","12.4","./images/pc1.png",29],
    ["ნივეა","112.4","./images/pc1.png",30],
    ["აჰავა","122.4","./images/pc1.png",31],
    ["მესაუდა","42.4","./images/pc1.png",32],
    ["ჰეად ენდ შოლდერსი","12.4","./images/pc1.png",33],
    ["ნივეა","112.4","./images/pc1.png",34],
    ["აჰავა","122.4","./images/pc1.png",35],
    ["მესაუდა","42.4","./images/pc1.png",36],

]
let cardToAdd;
function available(name,price,sour) {
  cardToAdd=document.createElement("div");
    let cardImgToAdd=document.createElement("div");
    let cardNameToAdd=document.createElement("div");
    let cardPriceToAdd=document.createElement("div");
    let damateba=document.createElement("div");
    let span=document.createElement("span")
   

    cardImgToAdd.setAttribute("class","card-img-to-add");
    cardNameToAdd.setAttribute("class","card-name-to-add");
    cardPriceToAdd.setAttribute("class","card-price-to-add");
    cardToAdd.setAttribute("class","card-to-add")
    damateba.setAttribute("class","damateba")
    cardNameToAdd.innerText=name;
    cardPriceToAdd.innerText=price +" ₾ ";
    damateba.innerHTML="დამატება";
    let img = document.createElement("img");
    img.src = sour;
    products_to_add.append(cardToAdd)    
    cardToAdd.append(cardImgToAdd)
    cardToAdd.append(cardNameToAdd)
    cardToAdd.append(cardPriceToAdd)
    cardToAdd.append(damateba)
    cardImgToAdd.append(img)
    span.innerText="150.25 ₾"
    cardPriceToAdd.append(span)
 

}
for (let i=0; i<10; i++){
  available (db[i][0],db[i][1],db[i][2]);
  cardToAdd.setAttribute("id",db[i][3])
}


const prod=[];
$(".card-to-add").on("click", function(){
    // If the id is not already in the array, add it. If it is, remove it
    if (prod.indexOf(this.id) === -1 ) {
        prod.push(this.id); 
    let empy=document.querySelector(".taro-product-empty");
    console.log (empy)
    let imgWrap=document.createElement("div")
    let name=document.createElement("div")
    let img = document.createElement("img")
    img.src=db[0][2]
    let price=document.createElement("div")
    if(this.id==db[0][3]){
        price.innerText=db[0][1]
    }
    empy.append(imgWrap)
    empy.append(name)
    empy.append(price);
    imgWrap.append(img)
    
    
       console.log(this)
    } else { 
        prod.splice(prod.indexOf(this.id),1); } 
        console.log(prod,"prod")

    });

    


    const deleted_products=document.getElementById("deleted_products")
    function addCard(name,price,sour){
        let card=document.createElement("div")
        let cardHeader=document.createElement("div")
        let cardImg=document.createElement("div")
        let cardName=document.createElement("div")
        let cardPrice=document.createElement("div")
        let img = document.createElement("img");
        img.src = sour;
        card.setAttribute("class","card-to-add");
        cardHeader.setAttribute("class","card-header-to-add");
        cardImg.setAttribute("class","card-img-to-add");
        cardName.setAttribute("class","card-name-to-add");
        cardPrice.setAttribute("class","card-price-to-add");
        cardName.innerText=name;
        cardPrice.innerText=price;
        img.src=sour;
    
        deleted_products.append(card)
        card.append(cardHeader)
        card.append(cardImg)

        card.append(cardName)
        card.append(cardPrice)
        cardImg.append(img)






    }
    for(let i=0; i<10; i++){
        addCard(db[i][0],db[i][1],db[i][2])
    }

