let cartArr = JSON.parse(localStorage.getItem("cartDB"));

console.log(cartArr)

DisplayCart(cartArr)

function DisplayCart(){

    var GrndTotal = 0;
    document.querySelector("#productDetail").innerText = null;

    document.querySelector("#cartCount").innerText = ` ( ${cartArr.length} Items )  `
    cartArr.forEach((elem,indx) => {

        let main = document.createElement("div");

        let submain1 = document.createElement("div");
         let image = document.createElement("img")
             image.src = elem.img
             submain1.append(image)

        let submain2 = document.createElement("div");
         let div1 = document.createElement("div");
           let nameP = document.createElement("p");
             nameP.innerText = elem.name
             div1.append(nameP)

        let div2 = document.createElement("div");
          let priceP = document.createElement("p");
          priceP.innerText = ` ₹ ${elem.price}`
          let strikeP = document.createElement("p");
            strikeP.innerText =`₹ ${Math.floor(Math.random()*500+500)}` 
            strikeP.style.textDecoration="line-through"
            strikeP.style.color="grey"
          let disP = document.createElement("p");
              disP.innerText =` (${Math.floor(Math.random()*15+10)} % off) `
              disP.style.color="red"
            div2.style.fontSize="15px"
            div2.style.fontFamily="Arial"
            div2.append(priceP,strikeP,disP)

        let div3 = document.createElement("div");
          let inputDiv = document.createElement("div");
             let input = document.createElement("input");
          let deleteDiv = document.createElement("div");
          let ptag = document.createElement("button")
             ptag.innerText = "Remove"
             ptag.addEventListener("click",function(){
               
                remove(indx);
             })
             deleteDiv.append(ptag) 
             inputDiv.append(input);
            div3.append(inputDiv,deleteDiv)
        submain2.append(div1,div2,div3);

        main.append(submain1,submain2);
        document.querySelector("#productDetail").append(main)
        GrndTotal += Number(elem.price);

    });

    console.log(GrndTotal);
    document.querySelector("#totalPri").innerText=`(₹${GrndTotal})`
    document.querySelector("#gt").innerText=`₹ ${GrndTotal}`
    document.querySelector("#it").innerText=` ${GrndTotal}`
    document.querySelector("#ot").innerText=` ${GrndTotal}`
}

function remove(indx){

    document.querySelector("#productDetail").innerText = null;
    cartArr.splice(indx,1);
    localStorage.setItem("cartDB", JSON.stringify(cartArr))
    DisplayCart(cartArr)
    
}