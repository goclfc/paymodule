const products=document.getElementById("product-wrapper");
let db=[
    ["ჰეად ენდ შოლდერსი","12.4","./images/pc1.png"],
    ["ნივეა","112.4"],
    ["აჰავა","122.4"],
    ["მესაუდა","42.4"],
    ["ჰეად ენდ შოლდერსი","12.4"],
    ["ნივეა","112.4"],
    ["აჰავა","122.4"],
    ["მესაუდა","42.4"],
    ["ჰეად ენდ შოლდერსი","12.4"],
    ["ნივეა","112.4"],
    ["აჰავა","122.4"],
    ["მესაუდა","42.4"],

]
let card= document.createElement("div")
function addCard(name,price,sour) {
    let card= document.createElement("div");
    let cardHeader=document.createElement("div");
    let cardImg=document.createElement("div");
    let cardName=document.createElement("div");
    let cardPrice=document.createElement("div");
    cardHeader.setAttribute("class","card-header");
    cardImg.setAttribute("class","card-img");
    cardName.setAttribute("class","card-name");
    cardPrice.setAttribute("class","card-price");
    card.setAttribute("class","product-card")
    cardName.innerText=name;
    cardPrice.innerText=price;
    let img = document.createElement("img");
    img.src = sour;
    
   
    products.append(card)
    card.append(cardHeader)
    card.append(cardImg)
    card.append(cardName)
    card.append(cardPrice)
    cardImg.append(img)
    

}
for (let i=0; i<db.length; i++){
    addCard(db[i][0],db[i][1],db[i][2]);
}

