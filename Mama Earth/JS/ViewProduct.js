let product = JSON.parse(localStorage.getItem("MEdb"));
console.log(product);

var image = document.createElement("img");
    image.src= product.img;
    document.querySelector("#mainImg").append(image);

document.querySelector("#prodName").textContent=product.name
document.querySelector("#nameOfPro").textContent=product.name
document.querySelector("#ratingOfproduct").textContent=product.rating
document.querySelector(".ratingOfproduct").textContent=product.rating
let rndmNum = Math.floor(Math.random()*115+105);
document.querySelector("#reviewMath").textContent = rndmNum
document.querySelector(".reviewMath").textContent = rndmNum
document.querySelector("#priceVie").textContent=`₹ ${product.price}`
document.querySelector(".priceVie").textContent=`₹ ${product.price}`
document.querySelector("#productDes").textContent=product.des

let {img1,img2,img3,img4} = product.subimg


let image1 = document.createElement("div");
        image1.addEventListener("click",function(){
            image.src= img1;
        })
let image11 = document.createElement("img")
            image11.src = img1
        image1.append(image11)
let image2 = document.createElement("div");
        image2.addEventListener("click",function(){
            image.src= img2;
        })
        let image22 = document.createElement("img")
        image22.src = img2
        image2.append(image22)
let image3 = document.createElement("div");
        image3.addEventListener("click",function(){
            image.src= img3;
        })
let image33 = document.createElement("img")
        image33.src = img3
        image3.append(image33)
let image4 = document.createElement("div");
        image4.addEventListener("click",function(){
            image.src= img4;
        })
let image44 = document.createElement("img")
        image44.src = img4
        image4.append(image44)
document.querySelector("#subImgs").append(image1,image2,image3,image4)

let cartArr = JSON.parse(localStorage.getItem("cartDB")) || [];

function addCart(){

        let butn = document.querySelector(".butn")
        butn.textContent="ADDING..."
        setTimeout(function(){
                alert("Product has been added to cart")
                console.log("cliked")
                butn.textContent="ADD TO CART"
                cartArr.push(product)
                localStorage.setItem("cartDB", JSON.stringify(cartArr))
        },1000);


                
}