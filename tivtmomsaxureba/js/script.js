const products=document.getElementById("product-wrapper");

let card= document.createElement("div")
function addCard(name,price) {
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
    img.src = "./images/pc1.png";
    
   
    products.append(card)
    card.append(cardHeader)
    card.append(cardImg)
    card.append(cardName)
    card.append(cardPrice)
    cardImg.append(img)
    

}
addCard("წამლის დასახელება","125.65 ₾");
{/* <div class="product-card"> 
            <div class="card-header"> </div>
            <div class="card-img" > <img src="./images/pc1.png"  alt="product"> </div>  
            <div class="card-name"> წამლის დასახელება  </div> 
            <div class="card-price">   125.65 ₾ </div>
          </div> */}