window.onload = cardDetail();
function cardDetail() {
  document.getElementById("card").innerHTML = null;
  document.getElementById("upi").innerHTML = null;
  document.getElementById("cash").innerHTML = null;

  let h3 = document.createElement("h3");
  h3.innerHTML = "Enter Credit/Debit Card Detail";
  h3.style.paddingLeft = "5%";

  let input1 = document.createElement("input");
  input1.placeholder = "Enter Card Number";
  input1.style.width = "91%";
  input1.style.height = "30px";
  input1.style.marginBottom = "5%";
  input1.style.marginLeft = "5%";
  input1.style.border = "1px solid #00afef";

  let input2 = document.createElement("input");
  input2.placeholder = "Expiry Date";
  input2.style.width = "43%";
  input2.style.height = "30px";
  input2.style.marginRight = "1%";
  input2.style.marginBottom = "5%";
  input2.style.marginLeft = "5%";

  let input3 = document.createElement("input");
  input3.placeholder = "CVV";
  input3.style.width = "43%";
  input3.style.height = "30px";
  input3.style.marginBottom = "5%";

  let btn = document.createElement("button");
  btn.innerHTML = "POCEED TO PAY";
  btn.style.backgroundColor = "#80d7f7";
  btn.style.border = "none";
  btn.style.width = "50%";
  btn.style.height = "50px";
  btn.style.fontSize = "16px";
  btn.style.fontWeight = "bold";
  btn.style.color = "white";
  btn.style.marginLeft = "5%";
  btn.onclick = function () {
    alert("ORDER PLACED");
  };
  document.getElementById("card").append(h3, input1, input2, input3, btn);
}
function upi() {
  document.getElementById("card").innerHTML = null;
  document.getElementById("upi").innerHTML = null;
  document.getElementById("cash").innerHTML = null;

  let h3 = document.createElement("h3");
  h3.innerHTML = "Add a New UPI";
  h3.style.paddingLeft = "5%";

  let p = document.createElement("p");
  p.innerHTML = "UPI ID / VPA";
  p.style.color = "grey";
  p.style.paddingLeft = "5%";

  let input = document.createElement("input");
  input.placeholder = "e.g anand@upi";
  input.style.width = "91%";
  input.style.height = "30px";
  input.style.border = "1px solid #00afef";
  input.style.marginLeft = "5%";

  let btn = document.createElement("button");
  btn.innerHTML = "POCEED TO PAY";
  btn.style.backgroundColor = "#80d7f7";
  btn.style.border = "none";
  btn.style.width = "50%";
  btn.style.height = "50px";
  btn.style.fontSize = "16px";
  btn.style.fontWeight = "bold";
  btn.style.color = "white";
  btn.style.marginLeft = "5%";

  document.getElementById("upi").append(h3, p, input, btn);
}
function cod() {
  document.getElementById("card").innerHTML = null;
  document.getElementById("upi").innerHTML = null;
  document.getElementById("cash").innerHTML = null;

  let p = document.createElement("h3");
  p.innerHTML = "Cash on Delivery";
  p.style.paddingLeft = "5%";

  let btn = document.createElement("button");
  btn.innerHTML = "PLACE ORDER";
  btn.style.backgroundColor = "#80d7f7";
  btn.style.border = "none";
  btn.style.width = "50%";
  btn.style.height = "50px";
  btn.style.fontSize = "16px";
  btn.style.fontWeight = "bold";
  btn.style.color = "white";
  btn.style.marginLeft = "5%";

  document.getElementById("cash").append(p, btn);
}
