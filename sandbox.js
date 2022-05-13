// base priceing
let itemList = {
  peakmilk: 850,
  danomilk: 570,
  goodmama: 920,
  bournvita: 1650,
  sharwarma: 1000,
  smallchops: 650,
  basmati: 6020,
  poundoflour: 2820,
  paintingbrush: 300,
  spaghetti: 400,
  nivea: 1200,
  slippers: 1000,
};
// base quantity
let peakmilk_q = 0;
let danomilk_q = 0;
let goodmama_q = 0;
let spaghetti_q = 0;
let bournvita_q = 0;
let sharwarma_q = 0;
let smallchops_q = 0;
let basmati_q = 0;
let poundoflour_q = 0;
let paintingbrush_q = 0;
let nivea_q = 0;
let slippers_q = 0;

// billupdateee
let peakmilkbill = "";
let danomilkbill = "";
let goodmamabill = "";
let spaghettibill = "";
let bournvitabill = "";
let sharwarmabill = "";
let smallchopsbill = "";
let basmatibill = "";
let poundoflourbill = "";
let paintingbrushbill = "";
let niveabill = "";
let slippersbill = "";

const email = document.querySelector("#email");
const para = document.querySelector(".fullname");
const datestamp = document.querySelector(".todaydate");

// name functionality
document.querySelector("#fullname").addEventListener("keyup", function () {
  document.querySelector(".fullname").innerText = this.value;
});

// email functionality
document.querySelector("#email").addEventListener("keyup", function () {
  document.querySelector(".email").innerText = this.value;
});

const now = new Date();
// date functionality
datestamp.innerText = now.toDateString();

// items-listingsand tally
let arrList = [];
let valList = [];
let obj1 = {};
let obj2 = [];

addItem = (id) => {
  console.log(id);

  let itemName = id;

  var vals = document.getElementById(id).value;


  if (arrList.includes(itemName)) {
    console.log("yes");
    let quantityClass = "quantity_" + itemName;
    let valueClass = "value_" + itemName;

    let valueChange = vals * itemList[itemName];

    let getQuantity = document.getElementsByClassName(quantityClass);
    getQuantity[0].innerText = vals;
    document.getElementsByClassName(valueClass)[0].innerText = valueChange;
    //valList.push(valueChange);
   
    let sum = 0;
    for (let index = 0; index < obj2.length; index++) {
      if (obj2[index].itemName == itemName) {
        obj2[index].value = valueChange;
        
      }
      sum += parseInt(obj2[index].value);
    }
    
    document.getElementsByClassName("totalamt")[0].innerText = sum;
    //console.log("sum change ", sum);
    
  } else {
    peakmilk_q = vals;
    peakmilkbill = `<tr><td>${itemName.toUpperCase()}</td><td class='quantity_${itemName}'>${peakmilk_q} </td><td class='value_${itemName}'> ${
      vals * itemList[itemName]
    }</td></tr>`;

    $("#myTable").find("tbody").append(peakmilkbill);
    arrList.push(itemName);
    let valueTemp = vals * itemList[itemName];
    let obj = { itemName: itemName, value: valueTemp };
    valList.push(valueTemp);
    obj2.push(obj);
    ///console.log("obj2", obj2);
    //console.log(valList);
    let sum = 0;
    //console.log("sum 1", sum);
    for (let index = 0; index < valList.length; index++) {
      //console.log("arrList ", valList[index]);
      console.log("sum 2", sum);
      sum += parseInt(valList[index]);
    }


    document.getElementsByClassName("totalamt")[0].innerText = sum.toLocaleString('en');
    //console.log("sum 3", sum);
    //console.log(total);
  }

  
};
addItems = (name) => {
  //console.log(id);
  //let spliVal = id.split("#");
  //console.log(spliVal)
  console.log("call this");

  if (this.value == "" || this.value == 0 || this.value === undefined) {
    peakmilkbill = "";
    peakmilk_q = 0;
    showBill();
  } else {
    console.log("inside else");
    // let myTable = document.querySelector("#myTable #bill");
    // for (let i = 0; i < 4; i++) {
    //   let val = $("<tr><td>{}</td></tr>");
    // }
    peakmilk_q = this.value;
    peakmilkbill =
      "<tr><td>Peak milk</td><td>₦ " +
      peakmilk_p +
      "</td><td>" +
      peakmilk_q +
      "</td><td>" +
      peakmilk_p +
      "x" +
      peakmilk_q +
      " = " +
      peakmilk_p * peakmilk_q +
      "</td></tr>";
    document.querySelector("#bill").innerHTML = peakmilkbill;
    showBill();
  }
};
// document.querySelector("#peakmilk").addEventListener("keyup", function () {

// });



//buttons
const popup = document.querySelector('.successs');
const popupwrapper = document.querySelector(".popupwrapper");
const outputsect = document.querySelector('.outputsect');
const close = document.querySelector('.reset');
const fieldForm = document.querySelector('form');
 
popup.addEventListener('click', e => {
  e.preventDefault;
  popupwrapper.style.display = "block";
  outputsect.style.display = "block";
});

close.addEventListener('click', () => {
  fieldForm.reset();
  popupwrapper.style.display = "none";
  outputsect.style.display = "none";
});