const products=document.getElementById("product-wrapper");
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
let card;
function addCard(name,price,sour) {
     card= document.createElement("div");
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
    card.setAttribute("id",db[i][3])
}



let ids = [];
let selectetCard;
$(".product-card").on("click", function(){
  // If the id is not already in the array, add it. If it is, remove it
  if (ids.indexOf(this.id) === -1 ) {
      ids.push(this.id);
       selectetCard=document.getElementById(this.id);  
      selectetCard.setAttribute("class","cardActive")
    selectetCard.firstChild.style.backgroundImage ="url('./images/Checkbox_Checked@3x.png')"
    } else { 
        ids.splice(ids.indexOf(this.id),1); 
        selectetCard=document.getElementById(this.id);  
        selectetCard.setAttribute("class","product-card")
        selectetCard.firstChild.style.backgroundImage ="none";

    }
      
  
  
  
  console.log(ids)
});
