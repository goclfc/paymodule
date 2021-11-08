const products_to_add=document.getElementById("taro_products_to_add");
const taro=document.getElementById("parent")
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
const dataBase=[
    {id:2555,prodName:"ჰეად ენდ შოლდერსი", price:"12.50", sourse:"./images/pc1.png" },
    {id:2556,prodName:"ჰეად1", price:"12.50", sourse:"./images/pc1.png" },
    {id:2557,prodName:"ჰეად2 ენდ შოლდერსი2", price:"14.50", sourse:"./images/pc1.png" },
   {id:2558, prodName:"ჰეად3 ენდ შოლდერსი", price:"11.50", sourse:"./images/pc1.png" },
   {id:2559, prodName:"ჰეად4 ენდ შოლდერსი", price:"152.50", sourse:"./images/pc1.png" },
    {id:2560,prodName:"ჰეად5 ენდ შოლდერსი", price:"12.5", sourse:"./images/pc1.png" },
]
console.log(dataBase)

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
for (let i=0; i<dataBase.length; i++){
  available (dataBase[i].prodName,dataBase[i].price,dataBase[i].sourse);
  cardToAdd.setAttribute("id",dataBase[i].id)
}
let newArray=[{id:2555,prodName:"ჰეად ენდ შოლდერსი", price:"12.50", sourse:"./images/pc1.png" },
{id:2556,prodName:"ჰეად1", price:"12.50", sourse:"./images/pc1.png" },
{id:2557,prodName:"ჰეად2 ენდ შოლდერსი2", price:"14.50", sourse:"./images/pc1.png" },
{id:2558, prodName:"ჰეად3 ენდ შოლდერსი", price:"11.50", sourse:"./images/pc1.png" },
{id:2559, prodName:"ჰეად4 ენდ შოლდერსი", price:"152.50", sourse:"./images/pc1.png" },];
function add_card_to_taro(name,price,source,mater) {
    let newCard=document.createElement('div')
    let newCardImg=document.createElement('div')
    let newCardName=document.createElement('div')
    let newCardPrice=document.createElement('div')
    let newDiv=document.createElement("div")
    let newImg = document.createElement("img");
    newImg.src = source
    newCardName.innerText=name;
    newCardPrice.innerText=price;
    newCard.setAttribute("class","prod-to-add")
    newCard.setAttribute("id",mater)
    newCardImg.setAttribute("class","prod-img-to-add")
    newCardName.setAttribute("class","prod-name-to-add")
    newCardPrice.setAttribute("class","prod-price-to-add")

    taroProducst.append(newCard);
    newCard.append(newCardImg)
    newCard.append(newCardName)
    newCard.append(newCardPrice)
    newCardImg.append(newImg)
}
let taroProducst=document.getElementById("taro_products")
function emptyCard(){
    let emptyCard=document.createElement("div")
    let emptyText=document.createElement("span")
    emptyCard.setAttribute("class","taro-product-empty")
    emptyText.innerText="ადგილი თავისუფალია"
    taroProducst.append(emptyCard)
    emptyCard.append(emptyText)
}

const prod=[];
for (let v=0; v<newArray.length; v++){
    add_card_to_taro(newArray[v].prodName,newArray[v].price, newArray[v].sourse ,newArray[v].id)
}
for (let i=0; i<10-newArray.length; i++){
    emptyCard()
}
$(".card-to-add").on("click", function(){
    // If the id is not already in the array, add it. If it is, remove it
    if (prod.indexOf(this.id) === -1 ) {
        prod.push(this.id); 
        
           
        } else { 
        console.log("meored dachera")} 
        console.log(prod,"prod")
        if(prod.length>0){
            let aray=[]
            for (let l=0;l<newArray.length;l++){
                aray.push(newArray[l].id)
            }
            for(let i=0; i<prod.length;i++){
                for(let j=0; j<dataBase.length; j++){
                    if(prod[i]==(dataBase[j].id)){
                        if(aray.indexOf(dataBase[j].id) === -1) {
                            console.log(aray.indexOf(dataBase[j].id),"index")
                                 newArray.push(dataBase[j])
                         } 
                }
                }
          
            }
         }
         taroProducst.remove()
         let newDiv=document.createElement("div")
         newDiv.setAttribute("id","taro_products")
         taro.append(newDiv)
         for(let k=0;k<newArray.length; k++){
            
            add_card_to_taro(newArray[k].prodName,newArray[k].price, newArray[k].sourse,newArray[k].id)
            
         }
         for (let g=0; g<10-newArray.length; g++){
            emptyCard()
        }
       
         function emptyCard(){
            let emptyCard=document.createElement("div")
            let emptyText=document.createElement("span")
            emptyCard.setAttribute("class","taro-product-empty")
            emptyText.innerText="ადგილი თავისუფალია"
            newDiv.append(emptyCard)
            emptyCard.append(emptyText)
        }
        
    
    

         function add_card_to_taro(name,price,source,mater) {
             let newCard=document.createElement('div')
             let newCardImg=document.createElement('div')
             let newCardName=document.createElement('div')
             let newCardPrice=document.createElement('div')
             let newImg = document.createElement("img");
             newImg.src = source
             newCardName.innerText=name;
             newCardPrice.innerText=price;
             newCard.setAttribute("class","prod-to-add")
             newCard.setAttribute("id",mater)
             newCardImg.setAttribute("class","prod-img-to-add")
             newCardName.setAttribute("class","prod-name-to-add")
             newCardPrice.setAttribute("class","prod-price-to-add")
     
             newDiv.append(newCard);
             newCard.append(newCardImg)
             newCard.append(newCardName)
             newCard.append(newCardPrice)
             newCardImg.append(newImg)
         }
      
         console.log(newArray,"new array")
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


 
