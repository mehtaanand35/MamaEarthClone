function countdown(){
    var now = new Date();
    var eventDate  = new Date(2022, 01, 02);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime-currentTime;

    var s = Math.floor(remTime/1000);
    var m = Math.floor(s/60);
    var h = Math.floor(m/60);
    var d = Math.floor(h/24);

    h%=24;
    m%=60;
    s%=60;

    h=(h<10)?+h:h;
    m=(h<10)?+m:m;
    s=(h<10)?+s:s;

    document.getElementById("days").textContent=d;
    document.getElementById("days").innerText=d;

    document.getElementById("hours").textContent=h;
    document.getElementById("minutes").textContent=m;
    document.getElementById("seconds").textContent=s;

    setTimeout(countdown, 1000);
}
countdown();

let product1= [
   {
      "id": "28",
      "name": "CoCo Body Lotion With Coffee and Cocoa for Intense Moisturization - 400ml",
      "img": "https://honasa-mamaearth-production.imgix.net/c/o/coco_body_lotion_1.jpg?auto=format&fit=crop&w=332&auto=compress",
      "subimg": {
        "img1": "https://honasa-mamaearth-production.imgix.net/c/o/coco_body_lotion_3.jpg?auto=format&fit=crop&w=332&auto=compress",
        "img2": "https://honasa-mamaearth-production.imgix.net/c/o/coco_body_lotion_4.jpg?auto=format&fit=crop&w=332&auto=compress",
        "img3": "https://honasa-mamaearth-production.imgix.net/c/o/coco_body_lotion_5.jpg?auto=format&fit=crop&w=332&auto=compress",
        "img4": "https://honasa-mamaearth-production.imgix.net/c/o/coco_body_lotion_6.jpg?auto=format&fit=crop&w=332&auto=compress"
      },
      "des": "Wake up and smell the coffee - literally! If your skin is parched and needs that extra boost of intense moisturization, CoCo Body Lotion is what you need. Enriched with the natural goodness of Coffee and Cocoa, the body lotion is as indulgent as it is nourishing. And it smells absolutely delicious. This is, quite literally, food for your skin.      Coffee adds richness while Cocoa Butter, Shea Butter, and Olive Oil provide nourishment and moisture. At the same time, the lotion is extremely lightweight, absorbs quickly and doesn’t feel greasy. Make dry, dehydrated, and flaky skin a thing of the past.     Our CoCo Body Lotion is excellent for dry skin and is free of Parabens, Silicones, Sulfates, Phthalates, and Artificial Colors.",
      "price": "399.00",
      "rating": "4.8"
    },
    {
      "id": "1",
      "name": "Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl, 150ml",
      "img": "https://honasa-mamaearth-production.imgix.net/o/n/onion_oil_5__1.jpg?auto=format&fit=crop&w=638&auto=compress",
      "subimg": {
        "img1": "https://honasa-mamaearth-production.imgix.net/3/_/3_6.jpg?auto=format&fit=crop&w=638&auto=compress",
        "img2": "https://honasa-mamaearth-production.imgix.net/5/_/5_3.jpg?auto=format&fit=crop&w=638&auto=compress",
        "img3": "https://honasa-mamaearth-production.imgix.net/6/_/6_3.jpg?auto=format&fit=crop&w=638&auto=compress",
        "img4": "https://honasa-mamaearth-production.imgix.net/o/n/onion_oil_4__1.jpg?auto=format&fit=crop&w=638&auto=compress"
      },
      "des": "Introducing your favorite Mamaearth Onion Oil with a new & improved formula for even stronger, smoother, and shinier hair. With an improved lightweight and non-sticky formulation and oh-so-good fragrance, it's time to welcome stronger and healthier hair with the time-tested goodness of Onion.",
      "price": "399.00",
      "rating": "4.8"
    },
    {
      "id": "2",
      "name": "Onion Shampoo with Onion and Plant Keratin for Hair Fall Control - 250ml",
      "img": "https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-shampoo-250ml-with-ingredient_2.jpg?auto=format&fit=crop&w=638&auto=compress",
      "subimg": {
        "img1": "https://honasa-mamaearth-production.imgix.net/o/n/onion-shampoo_3_1__4.jpg?auto=format&fit=crop&w=638&auto=compress",
        "img2": "https://honasa-mamaearth-production.imgix.net/o/n/onion-shampoo_4_4.jpg?auto=format&fit=crop&w=638&auto=compress",
        "img3": "https://honasa-mamaearth-production.imgix.net/o/n/onion-shampoo_6_4.jpg?auto=format&fit=crop&w=638&auto=compress",
        "img4": "https://honasa-mamaearth-production.imgix.net/o/n/onion-shampoo_7_2.jpg?auto=format&fit=crop&w=638&auto=compress"
      },
      "des": "Introducing new & improved Mamaearth Onion Shampoo for even stronger, smoother, and cleaner hair. The new formula improves deep cleansing action by providing 22% more foam without any sulfates or toxins. With up to 8 times more detangling action and 4 times more conditioning effect, it’s time to welcome healthier hair with the time-tested goodness of Onion.",
      "price": "349.00",
      "rating": "4"
    }
]
append(product1)


function append(data){

document.querySelector("#product1").innerHTML='';
console.log(data)
data.forEach((elem) => {



    let div = document.createElement("div");
        div.addEventListener("click",function(){
         
        })
    let img1 = document.createElement("img");
        img1.src = elem.img
        img1.alt ="Wrong URL"
    let name1 = document.createElement("p");
        name1.innerText = elem.name
        name1.style.fontSize="14px"
    let p = document.createElement("h4");
        p.innerText=`${elem.rating} ☆`
        p.style.background="green";
        p.style.color="white";
        p.style.width="25%";
        p.style.borderRadius="5px";
        p.style.margin="auto";
    let h4 = document.createElement("h4");
        h4.innerText=`₹ ${elem.price}`
    let div2 = document.createElement("div");
    div2.append(p)
    let butn = document.createElement("button");
    butn.textContent="ADD TO CART"
    butn.addEventListener("click",function(){
        butn.textContent="ADDING..."
        setTimeout(function(){
            alert("Product has been added to cart")
            console.log("cliked")
            butn.textContent="ADD TO CART"
        },2000)
        
    })
    div.append(img1,name1,div2,h4,butn);
    document.querySelector("#product1").append(div)
});
}

var product2=[{
    "id": "4",
    "name": "Anti-Hair Fall Spa Kit",
    "img": "https://honasa-mamaearth-production.imgix.net/a/n/anti_hair_fall_spa_kit_1.jpg?auto=format&fit=crop&w=751&auto=compress",
    "subimg": {
      "img1": "https://honasa-mamaearth-production.imgix.net/a/n/anti_hair_fall_spa_kit_4.jpg?auto=format&fit=crop&w=751&auto=compress",
      "img2": "https://honasa-mamaearth-production.imgix.net/a/n/anti_hair_fall_spa_kit_5.jpg?auto=format&fit=crop&w=751&auto=compress",
      "img3": "https://honasa-mamaearth-production.imgix.net/a/n/anti_hair_fall_spa_kit_6.jpg?auto=format&fit=crop&w=751&auto=compress",
      "img4": "https://honasa-mamaearth-production.imgix.net/a/n/anti_hair_fall_spa_kit_7.jpg?auto=format&fit=crop&w=751&auto=compress"
    },
    "des": "A little hair fall is normal, but too much shedding can be a cause of concern. It’s time never to let hair fall bother you again with Mamaearth Anti-Hair Fall Spa Range. Follow the three-step routine and let the natural goodness of Onion help you beat hair fall and get flawless hair. Experience the natural richness of Onion and Redensyl as they nourish, replenish, and strengthen your hair by repairing its natural structure. The goodness of Plant Keratin and its 18 amino acids help protect hair follicles. It takes control of your hair fall and makes them soft. Almond Oil and Coconut give the ultimate spa experience that’s bound to mesmerize you. The goodness of natural ingredients untangle hair and make them softer, smoother, and shinier while reducing hair fall.",
    "price": "768.00",
    "rating": "4.8"
  },
  {
    "id": "5",
    "name": "Ubtan Body Wash With Turmeric and Saffron for Glowing Skin - 300 ml",
    "img": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-body-wash-1_c7usn1sqjckdbdg5.jpg?auto=format&fit=crop&w=640&auto=compress",
    "subimg": {
      "img1": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-body-wash-4_alkykacspzc4llyf.jpg?auto=format&fit=crop&w=640&auto=compress",
      "img2": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-body-wash-5_bsr3clvyqscj0jfa.jpg?auto=format&fit=crop&w=640&auto=compress",
      "img3": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-body-wash-6_dkjd4ldaerler02z.jpg?auto=format&fit=crop&w=640&auto=compress",
      "img4": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-body-wash-7_2lpxpdfnjwfcs7js.jpg?auto=format&fit=crop&w=640&auto=compress"
    },
    "des": "Wash your way to glowing skin with the goodness of traditional ingredients like Turmeric and Saffron. Say hello to Mamaearth Ubtan Body Wash. Hit the refresh button every morning and get glowing skin with Mamaearth Ubtan Body Wash! The blend of Turmeric and Saffron deeply cleanses and repairs sun damage while Walnut Beads gently exfoliate, removing impurities. Together, they leave your skin feeling cleansed, soft and supple! And because of our no toxins and no harmful chemicals philosophy, you won’t find any Silicones, Parabens, Mineral Oil & Dyes",
    "price": "299.00",
    "rating": "5.0"
  },
  {
    "id": "6",
    "name": "Natural Nourishing Bathing Soaps - 5x75g",
    "img": "https://honasa-mamaearth-production.imgix.net/a/l/all-range-1.jpg?auto=format&fit=crop&w=640&auto=compress",
    "subimg": {
      "img1": "https://honasa-mamaearth-production.imgix.net/a/l/all-range-3.jpg?auto=format&fit=crop&w=640&auto=compress",
      "img2": "https://honasa-mamaearth-production.imgix.net/a/l/all-range-5_1.jpg?auto=format&fit=crop&w=640&auto=compress",
      "img3": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-soap-7_2.jpg?auto=format&fit=crop&w=640&auto=compress",
      "img4": "https://honasa-mamaearth-production.imgix.net/a/l/all-range-2.jpg?auto=format&fit=crop&w=640&auto=compress"
    },
    "des": "Time to hit the refresh button naturally, with Sulfate-Free Plant-Powered Natural Nourishing Bathing Soaps. Cleanse your skin deeply but gently with the goodness of natural ingredients. Crafted with Ubtan, Vitamin C, Charcoal, Tea Tree and CoCo - this assorted pack of 5 natural and Sulfate-Free bathing soaps give you the ultimate bathing experience for soft and supple skin. Indulge in nature’s goodness and make your bathing ritual a sensorial experience with Mamaearth Natural Nourishing Bathing Soaps. With 76% Total Fatty Matter, our soaps are highly moisturizing and will leave your skin oh so smooth and nourished. And because of our no toxins and no harmful chemicals philosophy, you won’t find any Silicones, Parabens, and Mineral Oil",
    "price": "299.00",
    "rating": "4.9"
  }]
  append1(product2)


function append1(data){

document.querySelector("#product2").innerHTML='';
console.log(data)
data.forEach((elem) => {



    let div = document.createElement("div");
        div.addEventListener("click",function(){
         
        })
    let img1 = document.createElement("img");
        img1.src = elem.img
        img1.alt ="Wrong URL"
    let name1 = document.createElement("p");
        name1.innerText = elem.name
        name1.style.fontSize="14px"
    let p = document.createElement("h4");
        p.innerText=`${elem.rating} ☆`
        p.style.background="green";
        p.style.color="white";
        p.style.width="25%";
        p.style.borderRadius="5px";
        p.style.margin="auto";
    let h4 = document.createElement("h4");
        h4.innerText=`₹ ${elem.price}`
    let div2 = document.createElement("div");
    div2.append(p)
    let butn = document.createElement("button");
    butn.textContent="ADD TO CART"
    butn.addEventListener("click",function(){
        butn.textContent="ADDING..."
        setTimeout(function(){
            alert("Product has been added to cart")
            console.log("cliked")
            butn.textContent="ADD TO CART"
        },2000)
        
    })
    div.append(img1,name1,div2,h4,butn);
    document.querySelector("#product2").append(div)
});
}

var product3 = [
    {
        "id": "7",
        "name": "Onion Beard Oil with Onion & Redensyl For Beard Growth – 30 ml",
        "img": "https://honasa-mamaearth-production.imgix.net/o/n/onion-beard-oil.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/o/n/onion-beard-oil_3.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/o/n/onion-beard-oil_4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/o/n/onion-beard-oil_5.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/p/r/promises_8.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "Beard Goals here we come! Crafted with the natural goodness of Onion and Redensyl, Mamaearth Onion Beard Oil is all you need for growing your beard and grooming it to perfection. A time-tested natural ingredient, Onion is rich in Sulphur that increases blood supply to the hair follicles, which leads to healthier beard growth. The Redensyl present in the oil improves hair density, thickness, strength and the Argan Oil combined with Vitamin E keeps it nourished, giving you a softer and smoother beard. Along with being super effective, our Beard Oil is also non-sticky and quick-absorbing leaving you with a beard that grows without the grease. The best part is that the Onion Beard Oil is Made Safe Certified, thus it is extremely safe and free of toxins, Silicones, Parabens and other harmful chemicals. That’s not all! The Onion Beard Oil comes with a specially crafted wooden comb to stimulate blood flow and distribute the beard oil evenly.",
        "price": "499.00",
        "rating": "3.5"
      },
      {
        "id": "8",
        "name": "Onion Scalp Serum with Onion and Niacinamide for Healthy Hair Growth - 50ml",
        "img": "https://honasa-mamaearth-production.imgix.net/o/n/onion-scalp-serum_1_1_zju6uipdbbg8rfif.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/o/n/onion-scalp-serum_4_1_tv7xeuw3gbq3jyk8.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/o/n/onion-scalp-serum_5_1_syzwmoqhswasabbv.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/o/n/onion-scalp-serum_7_1_aisdurovfaam113g.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/o/n/onion-scalp-serum_8_1_bkr8swnmphb7pyjn.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "The road to healthy and strong hair begins with taking good care of the scalp. You are in luck! Our Onion Scalp Serum for hair growth will put life and bounce back into your locks and stop premature hair fall. Say goodbye to weak hair with Mamaearth Onion Scalp Serum. Onions are an excellent source of natural sulfur that is known to prevent breakage, split-ends, and thinning. This nourishing and hydrating formulation of Red Onion, Vitamin B, Pea Sprout, and Aloe Vera will give you healthier, shinier and thicker hair. It works by nourishing the scalp, stimulating blood circulation, and accelerating healthy hair growth. Pea Sprout being an antioxidant, promotes hair growth while strengthening the hair follicles. The Onion Scalp Serum is water-soluble and deeply absorbs into the scalp without making it feel oily or greasy. It is free of harmful chemicals and toxins such as Silicones, Parabens, Mineral Oil and Dye ",
        "price": "599.00",
        "rating": "5.0"
      },
      {
        "id": "9",
        "name": "Onion Conditioner for Hair Growth and Hair Fall Control with Onion and Coconut, 400ml",
        "img": "https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-conditioner-400ml-with-ingredient_4.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/o/n/onion-conditioner_4_3.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/o/n/onion-conditioner_6_3.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/o/n/onion-conditioner_7_3.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/o/n/onion-conditioner_5_3.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "Introducing new & improved Mamaearth Onion Conditioner for even stronger, smoother, and shinier hair. It’s time to welcome healthier hair with the time-tested goodness of Onion. Onion, rich in Sulphur, potassium & antioxidants, reduces hair fall & accelerates hair growth. Coconut has nourishing properties and it penetrates deep into the follicles to promote hair growth & scalp health. The natural goodness of Sweet Almond Oil nourishes and strengthens the hair and is optimal for controlling hair fall. And because of our no toxins and no harmful chemicals philosophy, you won’t find any Silicones, Parabens, mineral oil & dyes in our Onion Hair Conditione",
        "price": "559.00",
        "rating": "4.5"
      }
]

append2(product3)


function append2(data){

document.querySelector("#product3").innerHTML='';
console.log(data)
data.forEach((elem) => {



    let div = document.createElement("div");
        div.addEventListener("click",function(){
         
        })
    let img1 = document.createElement("img");
        img1.src = elem.img
        img1.alt ="Wrong URL"
    let name1 = document.createElement("p");
        name1.innerText = elem.name
        name1.style.fontSize="14px"
    let p = document.createElement("h4");
        p.innerText=`${elem.rating} ☆`
        p.style.background="green";
        p.style.color="white";
        p.style.width="25%";
        p.style.borderRadius="5px";
        p.style.margin="auto";
    let h4 = document.createElement("h4");
        h4.innerText=`₹ ${elem.price}`
    let div2 = document.createElement("div");
    div2.append(p)
    let butn = document.createElement("button");
    butn.textContent="ADD TO CART"
    butn.addEventListener("click",function(){
        butn.textContent="ADDING..."
        setTimeout(function(){
            alert("Product has been added to cart")
            console.log("cliked")
            butn.textContent="ADD TO CART"
        },2000)
        
    })
    div.append(img1,name1,div2,h4,butn);
    document.querySelector("#product3").append(div)
});
}

var product4 = [
    {
        "id": "10",
        "name": "Vitamin C Face Wash with Vitamin C and Turmeric for Skin Illumination - 100ml",
        "img": "https://honasa-mamaearth-production.imgix.net/v/i/vitamin_c_face_wash_1.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/v/i/vitamin_c_face_wash_2.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/v/i/vitamin_c_face_wash_3.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/v/i/vitamin_c_face_wash_4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/v/i/vitamin_c_face_wash_5.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "The first step in a skincare routine, cleansing or washing your face helps in eliminating excess oil, dirt, and lethargy. Mamaearth Vitamin C Face Wash with the goodness of Vitamin C and Turmeric has brightening properties to give your skin a natural glow. It also helps in skin repair by boosting collagen production and blood circulation, leaving the skin radiant and healthy. Perfect for daily use, this face wash suits all skin types, retains moisture, controls excess oil, and fights free radical damage. Dermatologically tested, this Vitamin C Face Wash has no harmful chemicals and is free of Toxins, Parabens, and Mineral",
        "price": "249.00",
        "rating": "4.8"
      },
      {
        "id": "11",
        "name": "Vitamin C Face Mask With Vitamin C and Kaolin Clay for Skin Illumination - 100 g",
        "img": "https://honasa-mamaearth-production.imgix.net/v/i/vit_c_face_mask.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/v/i/vitamin_c_face_mask_3.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/v/i/vitamin_c_face_mask_4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/v/i/vitamin_c_face_mask_5.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/v/i/vitamin_c_face_mask_6.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "We all dream of bright and spotless skin. But the hustle of daily life often takes a toll on our skin’s health. Dirt, pollution, UV rays, and extreme weather conditions damage the skin while stealing its natural glow. Mamaearth Vitamin C Face Mask will help bring back that radiance! Power-packed with the goodness of Vitamin C and Kaolin Clay, it will make your skin bright, healthy, and spotless. The product is dermatologically tested and is suitable for all skin types. It contains no Parabens, harmful chemicals, toxins, or mineral oils and is 100% safe to add to your skincare regimen.",
        "price": "499.00",
        "rating": "4.8"
      },
      {
        "id": "12",
        "name": "Vitamin C Face Toner with Vitamin C and Cucumber for Pore Tightening, 200 ml",
        "img": "https://honasa-mamaearth-production.imgix.net/v/i/vitamin_c_face_toner_1.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/v/i/vitamin_c_face_toner_3.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/v/i/vitamin_c_face_toner_4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/v/i/vitamin_c_face_toner_5.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/v/i/vitamin_c_face_toner_6.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "The second step in a skincare routine, toning helps clean leftover impurities and excess oil from the face. Regular application of toner helps tighten and cleanse pores from within while protecting the skin from acne and breakouts. Mamaearth Vitamin C face toner has a unique alcohol-free formula and comes loaded with the goodness of Aloe Vera, Cucumber, Witch Hazel, and many other hardworking ingredients. Vitamin C in this toner supports the production of healthy collagen that brightens the complexion and boosts skin’s firmness. Witch Hazel reduces inflammation, tightens skin pores, and soothes acne-prone sensitive skin. The alcohol-free formula of this toner helps balance the pH level of your skin. Cucumber, a trusted skincare ingredient, offers hydration, reduces inflammation, and calms irritated skin. Mamaearth Vitamin C Face Toner is suitable for all skin types & free of alcohol & harmful toxins such as Parabens, Mineral Oil, Silicones",
        "price": "399.00",
        "rating": "4.9"
      }
]

append3(product4)


function append3(data){

document.querySelector("#product4").innerHTML='';
console.log(data)
data.forEach((elem) => {



    let div = document.createElement("div");
        div.addEventListener("click",function(){
         
        })
    let img1 = document.createElement("img");
        img1.src = elem.img
        img1.alt ="Wrong URL"
    let name1 = document.createElement("p");
        name1.innerText = elem.name
        name1.style.fontSize="14px"
    let p = document.createElement("h4");
        p.innerText=`${elem.rating} ☆`
        p.style.background="green";
        p.style.color="white";
        p.style.width="25%";
        p.style.borderRadius="5px";
        p.style.margin="auto";
    let h4 = document.createElement("h4");
        h4.innerText=`₹ ${elem.price}`
    let div2 = document.createElement("div");
    div2.append(p)
    let butn = document.createElement("button");
    butn.textContent="ADD TO CART"
    butn.addEventListener("click",function(){
        butn.textContent="ADDING..."
        setTimeout(function(){
            alert("Product has been added to cart")
            console.log("cliked")
            butn.textContent="ADD TO CART"
        },2000)
        
    })
    div.append(img1,name1,div2,h4,butn);
    document.querySelector("#product4").append(div)
});
}

var product5 = [
    {
        "id": "13",
        "name": "Ubtan Foaming Face Wash with Turmeric and Saffron for Tan Removal - 150ml",
        "img": "https://honasa-mamaearth-production.imgix.net/2/_/2_4.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan_foaming_face_wash_4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan_foaming_face_wash_5.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan_foaming_face_wash_6.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan_foaming_face_wash_7.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "Gentle clouds of frothy foams infused with the goodness of Turmeric & Saffron - that’s Mamaearth Ubtan Foaming Face Wash for you.  It’s time to remove tan with the time-tested and traditional goodness of Turmeric & Saffron! Mamaearth Ubtan Foaming Face Wash is crafted with the healing goodness of Turmeric and skin brightening properties of Saffron. Together, they gently cleanse, remove tan, exfoliate, and soothe irritation caused by free radicals.  This amazing face wash comes with an in-built silicone brush for easy application. It’s soft silicone bristles enable deep-cleansing on the surface and clear out pores effectively by exfoliating gently. Just pump, gently massage and rinse-off! And because of our no toxins and no harmful chemicals philosophy, you won’t find any Silicones, Parabens, Mineral Oil & Dyes in me.",
        "price": "399.00",
        "rating": "4.9"
      },
      {
        "id": "14",
        "name": "Ubtan Face Mask with Saffron and Turmeric for Skin Brightening and Tan Removal - 100g",
        "img": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan_face_mask_1.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-mask-4_1.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-mask-5_1.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-mask-6_1.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-mask-7_1.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "Indulge in the age-old tradition of Ubtan and let it rejuvenate your face for a fresh, bright, flawless look. The goodness of Ubtan comprises Turmeric and Saffron – both ingredients that are revered for their benefits in imparting glowing skin and tan removal. Saffron clears spots and helps in tan removal, while the antioxidant properties of turmeric protect the skin cells from free radical damage while keeping it healthy. Apricot Oil and Cucumber present in the Ubtan Face Mask help exfoliate, soothe and reduce tan for a glowing look.  Mamaearth Ubtan Face Mask is suitable for all skin types and is free of Parabens, Silicones, Sulfates, Phthalates, and Artificial Color",
        "price": "499.00",
        "rating": "4.8"
      },
      {
        "id": "15",
        "name": "Ubtan Oil-Free Face Moisturizer with Turmeric & Saffron for Skin Brightening – 80 ml",
        "img": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-oil-free-moisturizer1.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-oil-free-moisturizer3.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-oil-free-moisturizer4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-oil-free-moisturizer5.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan_oil_free_moisturizer6.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "Glow without the grease! Treat your skin to the traditional goodness of Turmeric and Saffron with Mamaearth Ubtan Oil-Free Face Moisturizer that brightens without being sticky. The hydrating formula keeps the skin soft and plump all day long while the traditional goodness of Ubtan protects you, naturally. Crafted especially for Indian weather, Mamaearth Ubtan Oil-Free Face Moisturizer is extremely lightweight and gets absorbed into the skin in no time, leaving behind a non-greasy and matte finish. And because of our no toxins and no harmful chemicals philosophy, you won’t find any Silicones, Parabens, Mineral Oil & Dyes in our Ubtan Oil-Free Face Moisturizer. ",
        "price": "299.00",
        "rating": "5.0"
      }
]

append4(product5)


function append4(data){

document.querySelector("#product5").innerHTML='';
console.log(data)
data.forEach((elem) => {



    let div = document.createElement("div");
        div.addEventListener("click",function(){
         
        })
    let img1 = document.createElement("img");
        img1.src = elem.img
        img1.alt ="Wrong URL"
    let name1 = document.createElement("p");
        name1.innerText = elem.name
        name1.style.fontSize="14px"
    let p = document.createElement("h4");
        p.innerText=`${elem.rating} ☆`
        p.style.background="green";
        p.style.color="white";
        p.style.width="25%";
        p.style.borderRadius="5px";
        p.style.margin="auto";
    let h4 = document.createElement("h4");
        h4.innerText=`₹ ${elem.price}`
    let div2 = document.createElement("div");
    div2.append(p)
    let butn = document.createElement("button");
    butn.textContent="ADD TO CART"
    butn.addEventListener("click",function(){
        butn.textContent="ADDING..."
        setTimeout(function(){
            alert("Product has been added to cart")
            console.log("cliked")
            butn.textContent="ADD TO CART"
        },2000)
        
    })
    div.append(img1,name1,div2,h4,butn);
    document.querySelector("#product5").append(div)
});
}

var product6 = [
    {
        "id": "16",
        "name": "Rose Body Lotion with Rose Water and Milk For Deep Hydration - 400ml",
        "img": "https://honasa-mamaearth-production.imgix.net/r/o/rose_body_lotion_1.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/r/o/rose_body_lotion_3.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/r/o/rose_body_lotion_4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/r/o/rose_body_lotion_5.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/r/o/rose_body_lotion_6.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "Score a perfect ten when it comes to hydrated skin with your newest #skincrush - Rose Body Lotion. A delicious smelling, super light but hydrating body lotion, it’s a sensorial treat for your skin.   The Rose Body Lotion is crafted with the fresh goodness of Rose Water and Milk. Rose Water, packed with antioxidants, soothes the skin while Milk locks in the moisture that Shea Butter and Olive Oil provide. It will make your skin soft, supple and hydrated. With this body lotion, make dryness a thing of the past and flaunt moisturized skin that gleams.  Mamaearth Rose Body Lotion is suitable for oily skin & free of alcohol & harmful toxins such as Parabens, Mineral Oil, Silicones, etc",
        "price": "399.00",
        "rating": "4.9"
      },
      {
        "id": "17",
        "name": "CoCo Nourishing Cold Cream With Coffee & Vitamin E For Rich Moisturization - 200 g",
        "img": "https://honasa-mamaearth-production.imgix.net/c/o/coco-cold-cream-1.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/c/o/coco-cold-cream-3.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/c/o/coco-cold-cream-4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/c/o/coco-cold-cream-5.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/p/r/promises_5.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "Everything gets better with coffee! We’ve brewed up India’s 1st Made Safe Certified CoCo Nourishing Cold Cream with the goodness of Coffee and Vitamin E. It’s a cream that moisturizes your skin deeply and is extremely indulgent thanks to the natural goodness of coffee. Crafted with emollients like Coconut Oil and Almond Oil, the Cold Cream will keep your skin buttery soft and seal in moisture, especially in the dry winter months. We know what you’re thinking, will it be greasy? No, not at all. It’s absolutely lightweight and absorbs into your skin instantly as you massage it gently on your face and body. It’s non-sticky and keeps your skin nourished without feeling heavy. And because of our no toxins and no harmful chemicals philosophy, you won’t find any Silicones, Parabens, mineral oil & dyes in our CoCo Nourishing Cold Cream",
        "price": "299.00",
        "rating": "4.8"
      },
      {
        "id": "18",
        "name": "Ubtan Nourishing Cold Cream with Turmeric & Saffron for Glowing Moisturization – 200 g",
        "img": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-cold-cream-1.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-cold-cream-3.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-cold-cream-4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-cold-cream-5.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/p/r/promises_6.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "Dry & dehydrated skin looks dull and feels uncomfortable. We’re here to change that. It’s time to nourish and glow naturally with the traditional goodness of Turmeric and Saffron. Mamaearth Ubtan Nourishing Cold Cream is India’s first Made Safe Certified cold cream, which means it’s absolutely safe and contains no toxins. It envelopes your skin with intense moisturization and leaves it radiant. Crafted with the natural goodness of Turmeric, Saffron, Sandalwood and Almond Oil, the Cold Cream deeply moisturizes, fights free radical damage and can be used on both face and body. And here’s what’s brilliant - unlike other cold creams that feel sticky, Mamaearth Ubtan Cold Cream is lightweight and has a non-sticky formula that absorbs into the skin leaving no heavy residue. And because of our no toxins and no harmful chemicals philosophy, you won’t find any Silicones, Parabens, mineral oil & dyes in our Cold Cream",
        "price": "299.00",
        "rating": "4.9"
      }
]

append5(product6)


function append5(data){

document.querySelector("#product6").innerHTML='';
console.log(data)
data.forEach((elem) => {



    let div = document.createElement("div");
        div.addEventListener("click",function(){
         
        })
    let img1 = document.createElement("img");
        img1.src = elem.img
        img1.alt ="Wrong URL"
    let name1 = document.createElement("p");
        name1.innerText = elem.name
        name1.style.fontSize="14px"
    let p = document.createElement("h4");
        p.innerText=`${elem.rating} ☆`
        p.style.background="green";
        p.style.color="white";
        p.style.width="25%";
        p.style.borderRadius="5px";
        p.style.margin="auto";
    let h4 = document.createElement("h4");
        h4.innerText=`₹ ${elem.price}`
    let div2 = document.createElement("div");
    div2.append(p)
    let butn = document.createElement("button");
    butn.textContent="ADD TO CART"
    butn.addEventListener("click",function(){
        butn.textContent="ADDING..."
        setTimeout(function(){
            alert("Product has been added to cart")
            console.log("cliked")
            butn.textContent="ADD TO CART"
        },2000)
        
    })
    div.append(img1,name1,div2,h4,butn);
    document.querySelector("#product6").append(div)
});
}

var  product7 = [
    {
        "id": "19",
        "name": "Mamaearth Rose Tinted 100% Natural Lip Balm With Rose Oil and Castor Oil - 2 g",
        "img": "https://honasa-mamaearth-production.imgix.net/r/o/rose-lip-balm_1_1.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/r/o/rose-lip-balm-4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/4/_/4_4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/p/r/promises_1_1.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/r/o/rose-lip-balm_2.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "When a gorgeous rosy tint meets the goodness of Castor Oil and Rose Oil, you get to experience our newest launch. Mamaearth Rose Tinted 100% Natural Lip Balm gives your lips 12-hour moisturization in an easy twist-up packaging - it’s hygienic and hassle-free! What’s more, it’s India’s 1st Made Safe Certified lip balm which means it’s toxin-free and gives your lips the care they deserve from dawn to dusk. Crafted with nourishing ingredients like Rose Oil, Shea Butter, and Coconut Oil, Mamaearth Rose Tinted 100% Natural Lip Balm gives you long-lasting moisturization and that natural rosy tint. It’s the perfect combination of care and color. And because of our no toxins, no harmful chemicals philosophy, you won't find any Silicones, Parabens, Mineral Oil, Preservatives, and Dyes in our Rose Tinted 100% Natural Lip Balm. ",
        "price": "299.00",
        "rating": "4.8"
      },
      {
        "id": "20",
        "name": "Mamaearth Vitamin C Tinted 100% Natural Lip Balm with Vitamin C & Honey - 2 g",
        "img": "https://honasa-mamaearth-production.imgix.net/v/i/vitamin-c-lip-balm_1_1.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/3/_/3_4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/4/_/4_6.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/p/r/promises_3.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/2/_/2_7.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "A drizzle of Vitamin C and Honey; a dash of goodness; a swipe of a beautiful orange hue and 12-hour moisturization. Say Bonjour to Mamaearth Vitamin C Tinted 100% Natural Lip Balm that is crafted from all-natural ingredients. As India’s 1st Made Safe Certified lip balm, it contains no toxins and is super gentle, ensuring you’re well cared for. But is it effective you say? Mamaearth Tinted Lip Balm keeps your lips moisturized for 12 hours from dawn to dusk. It’s your BFF - giving you that gorgeous color and equal care. And the application is as fun! No messy jars that you need to dip your fingers in. Just open, rotate and glide it on for those naturally radiant and soft lips. And because of our no toxins, no harmful chemicals philosophy, you won't find any Silicones, Parabens, Mineral Oil, Preservatives, and Dyes in our Vitamin C Tinted 100% Natural Lip Balm.",
        "price": "299.00",
        "rating": "4.8"
      },
      {
        "id": "21",
        "name": "Ubtan Tinted 100% Natural Lip Balm with Turmeric & Saffron - 2 g",
        "img": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-lip-balm_1_1.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/2/_/2_6.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/3/_/3_3.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/4/_/4_5.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/p/r/promises_2.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "The goodness of Ubtan - rich in Turmeric & Saffron - now infused in your new favorite all-day lip balm! Yes, you heard that right. Mamaearth Ubtan Tinted 100% Natural Lip Balm will give your lips long-lasting moisturization from dusk to dawn with a natural sheen. With the traditional goodness of Turmeric & Saffron and the hydrating benefits of Shea Butter & Coconut Oil, this nourishing lip balm moisturizes for 12 hours. And as India’s 1st Made Safe Certified lip balm, it contains no toxins or harmful chemicals and is excellent for all skin types, including sensitive and pigmented lips. Just twist and glide it on and get intense nourishment in one swipe. And because of our no toxins, no harmful chemicals philosophy, you won't find any Silicones, Parabens, Mineral Oil, Preservatives, and Dyes in our Ubtan Tinted 100% Natural Lip Balm. ",
        "price": "299.00",
        "rating": "4.8"
      }
]

append6(product7)


function append6(data){

document.querySelector("#product7").innerHTML='';
console.log(data)
data.forEach((elem) => {



    let div = document.createElement("div");
        div.addEventListener("click",function(){
         
        })
    let img1 = document.createElement("img");
        img1.src = elem.img
        img1.alt ="Wrong URL"
    let name1 = document.createElement("p");
        name1.innerText = elem.name
        name1.style.fontSize="14px"
    let p = document.createElement("h4");
        p.innerText=`${elem.rating} ☆`
        p.style.background="green";
        p.style.color="white";
        p.style.width="25%";
        p.style.borderRadius="5px";
        p.style.margin="auto";
    let h4 = document.createElement("h4");
        h4.innerText=`₹ ${elem.price}`
    let div2 = document.createElement("div");
    div2.append(p)
    let butn = document.createElement("button");
    butn.textContent="ADD TO CART"
    butn.addEventListener("click",function(){
        butn.textContent="ADDING..."
        setTimeout(function(){
            alert("Product has been added to cart")
            console.log("cliked")
            butn.textContent="ADD TO CART"
        },2000)
        
    })
    div.append(img1,name1,div2,h4,butn);
    document.querySelector("#product7").append(div)
});
}

var product8 = [
    {
        "id": "22",
        "name": "Tea Tree Shampoo for Dandruff Free Hair - 250ml",
        "img": "https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_shampoo_1.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_shampoo_3.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_shampoo_4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_shampoo_5.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_shampoo_6.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "Stimulate and renew your hair with an outlandish mix of Tea Tree and Ginger Oil that helps in reducing itch & irritation while contributing to the health and cleanliness of the scalp and soothing dryness and itchiness. Mamaearth Tea Tree Shampoo is made using natural ingredients and makes sure that dandruff and excess oil is gently worked on & removed. It helps soothe irritating, oily, and flaky scalp by controlling dandruff; thus, giving you an itch-free healthy scalp and nourished hair. Vitamin E present in this dandruff shampoo helps maintain hair growth while promoting blood circulation, preventing breakage and deeply moisturizing hair. Safe for colored & chemically treated hair, this shampoo is free of harmful chemicals & toxins such as Silicones, Parabens, Mineral Oil, & Dye",
        "price": "349.00",
        "rating": "4.8"
      },
      {
        "id": "23",
        "name": "BhringAmla Hair Oil with Bhringraj and Amla for Intense Hair Treatment - 250ml",
        "img": "https://honasa-mamaearth-production.imgix.net/b/h/bhringamla_oil_2.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/b/h/bhringamla_oil_4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/b/h/bhringamla_oil_5.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/b/h/bhringamla_oil_6.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/b/h/bhringamla_oil_7.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "An Ayurvedic recipe passed down generations, BhringAmla Oil is a blend of 15 medicinal herbs (Jadi Buti), including Bhringraj Oil and Amla Oil that keep hair strong & scalp healthy. Often called a miraculous elixir for the hair, this 100% natural formula controls hair loss, prevents premature graying, and reduces dandruff. Mamaearth BhringAmla Oil is prepared with the traditional ‘Kshirpak Vidhi’ – an ancient and esoteric Ayurveda process. ‘Kshira’ or milk is combined with different herbs in a process that requires patience and precision. The secret to healthy, voluminous, and smooth hair is bottled inside Mamaearth Bring Amla Hair Oil. Suitable for all hair types, our BhringAmla Hair Oil has no harmful chemicals and is free of Toxins, Parabens, and Mineral Oil ",
        "price": "499.00",
        "rating": "4.8"
      },
      {
        "id": "24",
        "name": "Rice Water Shampoo With Rice Water and Keratin For Damage Repair - 250ml",
        "img": "https://honasa-mamaearth-production.imgix.net/r/i/rice-shampoo-with-ingredient_1_1_.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/r/i/rice-hair-shampoo-4_1_1_.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/r/i/rice-hair-shampoo-5_1.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/r/i/rice-hair-shampoo-6_2.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/r/i/rice-hair-shampoo-7_1.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "It’s time to repair hair damage with the time-tested East Asian tradition of Fermented Rice Water. Wash away hair woes with the natural goodness of Fermented Rice Water & put a full stop to detereorating hair quality. Mamaearth Rice Water Shampoo with Fermented Rice Water, Keratin & Wheat Protein improves your hair texture by adding elasticity, increasing volume, and giving it a healthier appearance, while also shielding it from further damage. Rich in vitamins and minerals, Fermented Rice Water is a revered East Asian ingredient that strengthens roots and repairs damaged hair. High in protein, Keratin improves hair texture, adds elasticity, and increases volume. And because of our no toxins and no harmful chemicals philosophy, you won’t find any Silicones, Parabens, Mineral Oil & Dyes in our Rice Water Shampoo.",
        "price": "349.00",
        "rating": "4.8"
      }
]

append7(product8)


function append7(data){

document.querySelector("#product8").innerHTML='';
console.log(data)
data.forEach((elem) => {



    let div = document.createElement("div");
        div.addEventListener("click",function(){
         
        })
    let img1 = document.createElement("img");
        img1.src = elem.img
        img1.alt ="Wrong URL"
    let name1 = document.createElement("p");
        name1.innerText = elem.name
        name1.style.fontSize="14px"
    let p = document.createElement("h4");
        p.innerText=`${elem.rating} ☆`
        p.style.background="green";
        p.style.color="white";
        p.style.width="25%";
        p.style.borderRadius="5px";
        p.style.margin="auto";
    let h4 = document.createElement("h4");
        h4.innerText=`₹ ${elem.price}`
    let div2 = document.createElement("div");
    div2.append(p)
    let butn = document.createElement("button");
    butn.textContent="ADD TO CART"
    butn.addEventListener("click",function(){
        butn.textContent="ADDING..."
        setTimeout(function(){
            alert("Product has been added to cart")
            console.log("cliked")
            butn.textContent="ADD TO CART"
        },2000)
        
    })
    div.append(img1,name1,div2,h4,butn);
    document.querySelector("#product8").append(div)
});
}


var product9 =[
    {
        "id": "25",
        "name": "Tea Tree Foaming Face Wash with Tea Tree and Salicylic Acid for Acne and Pimples - 150ml",
        "img": "https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-foaming-face-wash-with-ingredients_85zdnmuke0xpfych.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_face_serum_6_1_qjtl8y5hdm5psrru.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-foaming-face-wash_4_mdw3q8bytdmtefft.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-foaming-face-wash_5_tf3nblbqj7jnuvgt.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-foaming-face-wash_7_4itel6zdwbmgdhhv.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "Acne-prone skin needs tender loving care. Say hello to your new BFF - Mamaearth Tea Tree Foaming Face Wash crafted with the antibacterial goodness of Tea Tree & acne-fighting benefits of Salicylic Acid. Together they clear pore congestion, fight bacteria, and control excess oil secretion. Acne and pimples won’t stand a chance.  Gentle and effective, this extremely hardworking face wash comes with an in-built silicone brush for easy application. It’s gentle and at the same time enables deep penetration of the product for effective cleansing. Just pump, massage and wash!  Dermatologically tested, the Tea Tree Foaming Face Wash has no harmful chemicals and is free of Toxins, Parabens, and Mineral Oils.",
        "price": "399.00",
        "rating": "4.8"
      },
      {
        "id": "26",
        "name": "Charcoal Facewash for oil control, 100ml",
        "img": "https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash-1.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash-4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash-5.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash-6.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash-7.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "Mamaearth SLS & Paraben free Charcoal Face Wash is your solution for healthy and glowing skin. Activated Charcoal gently draws out dirt, impurities, microparticles, & makeup – leaving skin clean and fresh. Clay deeply penetrates within the pores while removing excess oil from the skin. All this, without irritating or over-drying the skin. Coffee vitalizes the skin by removing dead skin cells and gives the face a glow. This charcoal oil control face wash is dermatologically tested and pH balanced, this face wash takes gentle care of your skin. It leaves your skin feeling soft and smooth as it does not contain any harmful chemicals like SLS, Sulfates, Phthalates or, Artificial Fragranc",
        "price": "249.00",
        "rating": "4.8"
      },
      {
        "id": "27",
        "name": "Aloe Vera Gel with Pure Aloe Vera and Vitamin E for Skin and Hair - 300ml",
        "img": "https://honasa-mamaearth-production.imgix.net/a/l/aloe_vera_gel_1.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/a/l/aloe_vera_gel_3.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/a/l/aloe_vera_gel_4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/a/l/aloe_vera_gel_5.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/a/l/aloe_vera_gel_6.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "Over the years, Aloe Vera has been a household name when it comes to soothing inflammation and hair woes. Aloe Vera has stood the test of time and is still used in various skin and hair care products. We at Mamaearth have taken the cue and bring to you Aloe Vera Gel that works like magic for both your skin and hair. It penetrates your skin and scalp to nourish & moisturize from deep within. The antibacterial properties present in both Aloe Vera and Vitamin E prevent itchy scalp and irritated skin. Regular application will promote even skin tone, fight breakouts, and prevent wrinkles on your skin. Regular use of aloe vera for hair will keep them shiny, strong, moisturized, and make the scalp healthy and happy. Suitable for all skin and hair types, this Aloe Vera Gel has no harmful chemicals and is free of Toxins, Parabens, and Mineral Oil ",
        "price": "299.00",
        "rating": "4.8"
      }
]

append8(product9)


function append8(data){

document.querySelector("#product9").innerHTML='';
console.log(data)
data.forEach((elem) => {



    let div = document.createElement("div");
        div.addEventListener("click",function(){
         
        })
    let img1 = document.createElement("img");
        img1.src = elem.img
        img1.alt ="Wrong URL"
    let name1 = document.createElement("p");
        name1.innerText = elem.name
        name1.style.fontSize="14px"
    let p = document.createElement("h4");
        p.innerText=`${elem.rating} ☆`
        p.style.background="green";
        p.style.color="white";
        p.style.width="25%";
        p.style.borderRadius="5px";
        p.style.margin="auto";
    let h4 = document.createElement("h4");
        h4.innerText=`₹ ${elem.price}`
    let div2 = document.createElement("div");
    div2.append(p)
    let butn = document.createElement("button");
    butn.textContent="ADD TO CART"
    butn.addEventListener("click",function(){
        butn.textContent="ADDING..."
        setTimeout(function(){
            alert("Product has been added to cart")
            console.log("cliked")
            butn.textContent="ADD TO CART"
        },2000)
        
    })
    div.append(img1,name1,div2,h4,butn);
    document.querySelector("#product9").append(div)
});
}

var product10 =[
    {
        "id": "28",
        "name": "CoCo Body Lotion With Coffee and Cocoa for Intense Moisturization - 400ml",
        "img": "https://honasa-mamaearth-production.imgix.net/c/o/coco_body_lotion_1.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/c/o/coco_body_lotion_3.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/c/o/coco_body_lotion_4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/c/o/coco_body_lotion_5.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/c/o/coco_body_lotion_6.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "Wake up and smell the coffee - literally! If your skin is parched and needs that extra boost of intense moisturization, CoCo Body Lotion is what you need. Enriched with the natural goodness of Coffee and Cocoa, the body lotion is as indulgent as it is nourishing. And it smells absolutely delicious. This is, quite literally, food for your skin.      Coffee adds richness while Cocoa Butter, Shea Butter, and Olive Oil provide nourishment and moisture. At the same time, the lotion is extremely lightweight, absorbs quickly and doesn’t feel greasy. Make dry, dehydrated, and flaky skin a thing of the past.     Our CoCo Body Lotion is excellent for dry skin and is free of Parabens, Silicones, Sulfates, Phthalates, and Artificial Colors.",
        "price": "399.00",
        "rating": "4.8"
      },
      {
        "id": "29",
        "name": "Natural Nourishing Bathing Soaps - 5x75g",
        "img": "https://honasa-mamaearth-production.imgix.net/a/l/all-range-1.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/a/l/all-range-3.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/a/l/all-range-5_1.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-soap-7_2.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/a/l/all-range-2.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "Time to hit the refresh button naturally, with Sulfate-Free Plant-Powered Natural Nourishing Bathing Soaps. Cleanse your skin deeply but gently with the goodness of natural ingredients. Crafted with Ubtan, Vitamin C, Charcoal, Tea Tree and CoCo - this assorted pack of 5 natural and Sulfate-Free bathing soaps give you the ultimate bathing experience for soft and supple skin. Indulge in nature’s goodness and make your bathing ritual a sensorial experience with Mamaearth Natural Nourishing Bathing Soaps. With 76% Total Fatty Matter, our soaps are highly moisturizing and will leave your skin oh so smooth and nourished. And because of our no toxins and no harmful chemicals philosophy, you won’t find any Silicones, Parabens, and Mineral Oil in our Natural Nourishing Bathing Soaps",
        "price": "299.00",
        "rating": "4.9"
      },
      {
        "id": "30",
        "name": "Ubtan Nourishing Hair Removal Kit With Turmeric & Saffron for Hair Removal & Growth Reduction - 100+50 g",
        "img": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-hair-removal-kit.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/h/a/hair-removal-kit-4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/h/a/hair-removal-kit-5.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-cleansing-milk-6_1.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/h/a/hair-removal-kit-7.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "The at-home hair removal solution you’ve been looking for is here. Mamaearth Ubtan Nourishing Hair Removal Kit is India’s first Made Safe certified cream to get rid of unwanted hair. Crafted with the goodness of natural ingredients like Turmeric and Saffron, the Ubtan Hair Removal Kit is pain-free and won’t leave you worrying about hot wax burns or razor cuts. Thanks to no toxins in the cream, you also don’t have to worry about allergic reactions or skin darkening. And it’s super quick - cream on, hair gone in just 8 minutes! The Ubtan Nourishing Hair Removal Kit isn’t just a cream - it’s a complete kit that removes hair and delays hair growth. It contains a Hair Removal Cream, a Hair Vanish Gel that slows down hair growth, and a wooden spatula for easy application and removal. Enriched with nourishing ingredients like Aloe Vera and Vitamin E, the Hair Removal Kit hydrates and calms the skin, making the whole experience comfortable and hassle-free. It’s painless, smells amazing and is super gentle especially for sensitive skin and bikini line. Get ready to experience the goodness inside as the Ubtan Nourishing Hair Removal Kit contains no Silicones, Parabens, Mineral Oil & Dye",
        "price": "449.00",
        "rating": "5.0"
      }
]

append9(product10)


function append9(data){

document.querySelector("#product10").innerHTML='';
console.log(data)
data.forEach((elem) => {



    let div = document.createElement("div");
        div.addEventListener("click",function(){
         
        })
    let img1 = document.createElement("img");
        img1.src = elem.img
        img1.alt ="Wrong URL"
    let name1 = document.createElement("p");
        name1.innerText = elem.name
        name1.style.fontSize="14px"
    let p = document.createElement("h4");
        p.innerText=`${elem.rating} ☆`
        p.style.background="green";
        p.style.color="white";
        p.style.width="25%";
        p.style.borderRadius="5px";
        p.style.margin="auto";
    let h4 = document.createElement("h4");
        h4.innerText=`₹ ${elem.price}`
    let div2 = document.createElement("div");
    div2.append(p)
    let butn = document.createElement("button");
    butn.textContent="ADD TO CART"
    butn.addEventListener("click",function(){
        butn.textContent="ADDING..."
        setTimeout(function(){
            alert("Product has been added to cart")
            console.log("cliked")
            butn.textContent="ADD TO CART"
        },2000)
        
    })
    div.append(img1,name1,div2,h4,butn);
    document.querySelector("#product10").append(div)
});
}

var product11 = [
    {
        "id": "22",
        "name": "Tea Tree Shampoo for Dandruff Free Hair - 250ml",
        "img": "https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_shampoo_1.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_shampoo_3.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_shampoo_4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_shampoo_5.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_shampoo_6.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "Stimulate and renew your hair with an outlandish mix of Tea Tree and Ginger Oil that helps in reducing itch & irritation while contributing to the health and cleanliness of the scalp and soothing dryness and itchiness. Mamaearth Tea Tree Shampoo is made using natural ingredients and makes sure that dandruff and excess oil is gently worked on & removed. It helps soothe irritating, oily, and flaky scalp by controlling dandruff; thus, giving you an itch-free healthy scalp and nourished hair. Vitamin E present in this dandruff shampoo helps maintain hair growth while promoting blood circulation, preventing breakage and deeply moisturizing hair. Safe for colored & chemically treated hair, this shampoo is free of harmful chemicals & toxins such as Silicones, Parabens, Mineral Oil, & Dye",
        "price": "349.00",
        "rating": "4.8"
      },
      {
        "id": "23",
        "name": "BhringAmla Hair Oil with Bhringraj and Amla for Intense Hair Treatment - 250ml",
        "img": "https://honasa-mamaearth-production.imgix.net/b/h/bhringamla_oil_2.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/b/h/bhringamla_oil_4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/b/h/bhringamla_oil_5.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/b/h/bhringamla_oil_6.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/b/h/bhringamla_oil_7.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "An Ayurvedic recipe passed down generations, BhringAmla Oil is a blend of 15 medicinal herbs (Jadi Buti), including Bhringraj Oil and Amla Oil that keep hair strong & scalp healthy. Often called a miraculous elixir for the hair, this 100% natural formula controls hair loss, prevents premature graying, and reduces dandruff. Mamaearth BhringAmla Oil is prepared with the traditional ‘Kshirpak Vidhi’ – an ancient and esoteric Ayurveda process. ‘Kshira’ or milk is combined with different herbs in a process that requires patience and precision. The secret to healthy, voluminous, and smooth hair is bottled inside Mamaearth Bring Amla Hair Oil. Suitable for all hair types, our BhringAmla Hair Oil has no harmful chemicals and is free of Toxins, Parabens, and Mineral Oil ",
        "price": "499.00",
        "rating": "4.8"
      },
      {
        "id": "24",
        "name": "Rice Water Shampoo With Rice Water and Keratin For Damage Repair - 250ml",
        "img": "https://honasa-mamaearth-production.imgix.net/r/i/rice-shampoo-with-ingredient_1_1_.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/r/i/rice-hair-shampoo-4_1_1_.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/r/i/rice-hair-shampoo-5_1.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/r/i/rice-hair-shampoo-6_2.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/r/i/rice-hair-shampoo-7_1.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "It’s time to repair hair damage with the time-tested East Asian tradition of Fermented Rice Water. Wash away hair woes with the natural goodness of Fermented Rice Water & put a full stop to detereorating hair quality. Mamaearth Rice Water Shampoo with Fermented Rice Water, Keratin & Wheat Protein improves your hair texture by adding elasticity, increasing volume, and giving it a healthier appearance, while also shielding it from further damage. Rich in vitamins and minerals, Fermented Rice Water is a revered East Asian ingredient that strengthens roots and repairs damaged hair. High in protein, Keratin improves hair texture, adds elasticity, and increases volume. And because of our no toxins and no harmful chemicals philosophy, you won’t find any Silicones, Parabens, Mineral Oil & Dyes in our Rice Water Shampoo.",
        "price": "349.00",
        "rating": "4.8"
      }
]


append10(product11)


function append10(data){

document.querySelector("#product11").innerHTML='';
console.log(data)
data.forEach((elem) => {



    let div = document.createElement("div");
        div.addEventListener("click",function(){
         
        })
    let img1 = document.createElement("img");
        img1.src = elem.img
        img1.alt ="Wrong URL"
    let name1 = document.createElement("p");
        name1.innerText = elem.name
        name1.style.fontSize="14px"
    let p = document.createElement("h4");
        p.innerText=`${elem.rating} ☆`
        p.style.background="green";
        p.style.color="white";
        p.style.width="25%";
        p.style.borderRadius="5px";
        p.style.margin="auto";
    let h4 = document.createElement("h4");
        h4.innerText=`₹ ${elem.price}`
    let div2 = document.createElement("div");
    div2.append(p)
    let butn = document.createElement("button");
    butn.textContent="ADD TO CART"
    butn.addEventListener("click",function(){
        butn.textContent="ADDING..."
        setTimeout(function(){
            alert("Product has been added to cart")
            console.log("cliked")
            butn.textContent="ADD TO CART"
        },2000)
        
    })
    div.append(img1,name1,div2,h4,butn);
    document.querySelector("#product11").append(div)
});
}

var product12 =[
    {
        "id": "22",
        "name": "Tea Tree Shampoo for Dandruff Free Hair - 250ml",
        "img": "https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_shampoo_1.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_shampoo_3.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_shampoo_4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_shampoo_5.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_shampoo_6.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "Stimulate and renew your hair with an outlandish mix of Tea Tree and Ginger Oil that helps in reducing itch & irritation while contributing to the health and cleanliness of the scalp and soothing dryness and itchiness. Mamaearth Tea Tree Shampoo is made using natural ingredients and makes sure that dandruff and excess oil is gently worked on & removed. It helps soothe irritating, oily, and flaky scalp by controlling dandruff; thus, giving you an itch-free healthy scalp and nourished hair. Vitamin E present in this dandruff shampoo helps maintain hair growth while promoting blood circulation, preventing breakage and deeply moisturizing hair. Safe for colored & chemically treated hair, this shampoo is free of harmful chemicals & toxins such as Silicones, Parabens, Mineral Oil, & Dye",
        "price": "349.00",
        "rating": "4.8"
      },
      {
        "id": "23",
        "name": "BhringAmla Hair Oil with Bhringraj and Amla for Intense Hair Treatment - 250ml",
        "img": "https://honasa-mamaearth-production.imgix.net/b/h/bhringamla_oil_2.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/b/h/bhringamla_oil_4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/b/h/bhringamla_oil_5.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/b/h/bhringamla_oil_6.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/b/h/bhringamla_oil_7.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "An Ayurvedic recipe passed down generations, BhringAmla Oil is a blend of 15 medicinal herbs (Jadi Buti), including Bhringraj Oil and Amla Oil that keep hair strong & scalp healthy. Often called a miraculous elixir for the hair, this 100% natural formula controls hair loss, prevents premature graying, and reduces dandruff. Mamaearth BhringAmla Oil is prepared with the traditional ‘Kshirpak Vidhi’ – an ancient and esoteric Ayurveda process. ‘Kshira’ or milk is combined with different herbs in a process that requires patience and precision. The secret to healthy, voluminous, and smooth hair is bottled inside Mamaearth Bring Amla Hair Oil. Suitable for all hair types, our BhringAmla Hair Oil has no harmful chemicals and is free of Toxins, Parabens, and Mineral Oil ",
        "price": "499.00",
        "rating": "4.8"
      },
      {
        "id": "24",
        "name": "Rice Water Shampoo With Rice Water and Keratin For Damage Repair - 250ml",
        "img": "https://honasa-mamaearth-production.imgix.net/r/i/rice-shampoo-with-ingredient_1_1_.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/r/i/rice-hair-shampoo-4_1_1_.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/r/i/rice-hair-shampoo-5_1.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/r/i/rice-hair-shampoo-6_2.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/r/i/rice-hair-shampoo-7_1.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "It’s time to repair hair damage with the time-tested East Asian tradition of Fermented Rice Water. Wash away hair woes with the natural goodness of Fermented Rice Water & put a full stop to detereorating hair quality. Mamaearth Rice Water Shampoo with Fermented Rice Water, Keratin & Wheat Protein improves your hair texture by adding elasticity, increasing volume, and giving it a healthier appearance, while also shielding it from further damage. Rich in vitamins and minerals, Fermented Rice Water is a revered East Asian ingredient that strengthens roots and repairs damaged hair. High in protein, Keratin improves hair texture, adds elasticity, and increases volume. And because of our no toxins and no harmful chemicals philosophy, you won’t find any Silicones, Parabens, Mineral Oil & Dyes in our Rice Water Shampoo.",
        "price": "349.00",
        "rating": "4.8"
      }
]

append11(product12)


function append11(data){

document.querySelector("#product12").innerHTML='';
console.log(data)
data.forEach((elem) => {



    let div = document.createElement("div");
        div.addEventListener("click",function(){
         
        })
    let img1 = document.createElement("img");
        img1.src = elem.img
        img1.alt ="Wrong URL"
    let name1 = document.createElement("p");
        name1.innerText = elem.name
        name1.style.fontSize="14px"
    let p = document.createElement("h4");
        p.innerText=`${elem.rating} ☆`
        p.style.background="green";
        p.style.color="white";
        p.style.width="25%";
        p.style.borderRadius="5px";
        p.style.margin="auto";
    let h4 = document.createElement("h4");
        h4.innerText=`₹ ${elem.price}`
    let div2 = document.createElement("div");
    div2.append(p)
    let butn = document.createElement("button");
    butn.textContent="ADD TO CART"
    butn.addEventListener("click",function(){
        butn.textContent="ADDING..."
        setTimeout(function(){
            alert("Product has been added to cart")
            console.log("cliked")
            butn.textContent="ADD TO CART"
        },2000)
        
    })
    div.append(img1,name1,div2,h4,butn);
    document.querySelector("#product12").append(div)
});
}

var product13=[
    {
        "id": "25",
        "name": "Tea Tree Foaming Face Wash with Tea Tree and Salicylic Acid for Acne and Pimples - 150ml",
        "img": "https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-foaming-face-wash-with-ingredients_85zdnmuke0xpfych.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_face_serum_6_1_qjtl8y5hdm5psrru.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-foaming-face-wash_4_mdw3q8bytdmtefft.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-foaming-face-wash_5_tf3nblbqj7jnuvgt.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-foaming-face-wash_7_4itel6zdwbmgdhhv.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "Acne-prone skin needs tender loving care. Say hello to your new BFF - Mamaearth Tea Tree Foaming Face Wash crafted with the antibacterial goodness of Tea Tree & acne-fighting benefits of Salicylic Acid. Together they clear pore congestion, fight bacteria, and control excess oil secretion. Acne and pimples won’t stand a chance.  Gentle and effective, this extremely hardworking face wash comes with an in-built silicone brush for easy application. It’s gentle and at the same time enables deep penetration of the product for effective cleansing. Just pump, massage and wash!  Dermatologically tested, the Tea Tree Foaming Face Wash has no harmful chemicals and is free of Toxins, Parabens, and Mineral Oils.",
        "price": "399.00",
        "rating": "4.8"
      },
      {
        "id": "26",
        "name": "Charcoal Facewash for oil control, 100ml",
        "img": "https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash-1.jpg?auto=format&fit=crop&w=332&auto=compress",
        "subimg": {
          "img1": "https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash-4.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img2": "https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash-5.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img3": "https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash-6.jpg?auto=format&fit=crop&w=332&auto=compress",
          "img4": "https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash-7.jpg?auto=format&fit=crop&w=332&auto=compress"
        },
        "des": "Mamaearth SLS & Paraben free Charcoal Face Wash is your solution for healthy and glowing skin. Activated Charcoal gently draws out dirt, impurities, microparticles, & makeup – leaving skin clean and fresh. Clay deeply penetrates within the pores while removing excess oil from the skin. All this, without irritating or over-drying the skin. Coffee vitalizes the skin by removing dead skin cells and gives the face a glow. This charcoal oil control face wash is dermatologically tested and pH balanced, this face wash takes gentle care of your skin. It leaves your skin feeling soft and smooth as it does not contain any harmful chemicals like SLS, Sulfates, Phthalates or, Artificial Fragranc",
        "price": "249.00",
        "rating": "4.8"
      }
]

append12(product13)


function append12(data){

document.querySelector("#product13").innerHTML='';
console.log(data)
data.forEach((elem) => {



    let div = document.createElement("div");
        div.addEventListener("click",function(){
         
        })
    let img1 = document.createElement("img");
        img1.src = elem.img
        img1.alt ="Wrong URL"
    let name1 = document.createElement("p");
        name1.innerText = elem.name
        name1.style.fontSize="14px"
    let p = document.createElement("h4");
        p.innerText=`${elem.rating} ☆`
        p.style.background="green";
        p.style.color="white";
        p.style.width="25%";
        p.style.borderRadius="5px";
        p.style.margin="auto";
    let h4 = document.createElement("h4");
        h4.innerText=`₹ ${elem.price}`
    let div2 = document.createElement("div");
    div2.append(p)
    let butn = document.createElement("button");
    butn.textContent="ADD TO CART"
    butn.addEventListener("click",function(){
        butn.textContent="ADDING..."
        setTimeout(function(){
            alert("Product has been added to cart")
            console.log("cliked")
            butn.textContent="ADD TO CART"
        },2000)
        
    })
    div.append(img1,name1,div2,h4,butn);
    document.querySelector("#product13").append(div)
});
}