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
    cardImgToAdd.setAttribute("class","card-img-to-add");
    cardNameToAdd.setAttribute("class","card-name-to-add");
    cardPriceToAdd.setAttribute("class","card-price-to-add");
    cardToAdd.setAttribute("class","card-to-add")
    damateba.setAttribute("class","damateba")
    cardNameToAdd.innerText=name;
    cardPriceToAdd.innerText=price;
    damateba.innerHTML="დამატება";
    let img = document.createElement("img");
    img.src = sour;
    products_to_add.append(cardToAdd)    
    cardToAdd.append(cardImgToAdd)
    cardToAdd.append(cardNameToAdd)
    cardToAdd.append(cardPriceToAdd)
    cardToAdd.append(damateba)
    cardImgToAdd.append(img)
 

}
for (let i=0; i<10; i++){
  available (db[i][0],db[i][1],db[i][2]);
  cardToAdd.setAttribute("id",db[i][3])
}

console.log("asdsd")
