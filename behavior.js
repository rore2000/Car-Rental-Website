const name = document.carForm.name;
const phone_number = document.carForm.phone_number;

function nameField_changeColor() {
      name.style.backgroundColor = "lightgreen";

    }

function phone_numberField_changeColor() {
     phone_number.style.backgroundColor = "lightgreen";
   }

function removeName(){
  name.style.backgroundColor = "";
}

function removePhone_number(){
  phone_number.style.backgroundColor = "";
}

function resetForm(){
  //alert('is it work ?????')

  document.carForm.name.style.borderColor = "black";
  document.carForm.phone_number.style.borderColor = "black";
  document.getElementById("nameError").style.visibility = "hidden";
  document.getElementById("phoneNumError").style.visibility = "hidden";
  document.getElementById("ageError").style.visibility = "hidden";
  document.getElementById("carError").style.visibility = "hidden";


  //document.getElementById("name").style.backgroundColor = "";
  //document.carForm.phone_number.style.borderColor = "black";


}


function validateInpute(){
  var validation= true;

  /* validate name */
  var nameValue = name.value;
  if(nameValue == ""){
    document.getElementById("nameError").style.visibility = "visible";
    document.getElementById("nameError").innerHTML="Name should not be empty";
    document.getElementById("nameError").style.color="red";
    document.carForm.name.style.borderColor = "red";
    validation = false;
  }
  else{
  localStorage.setItem("name",nameValue);
  document.carForm.name.style.borderColor = "";
  document.getElementById("nameError").style.visibility = "hidden";
}

  /* validate phone number */
  var phone = phone_number.value;
  if(phone.length>10 || phone.length<10 ) {
  document.getElementById("phoneNumError").style.visibility = "visible";
  document.getElementById("phoneNumError").innerHTML= "Phone number must be 10 digits";
  document.getElementById("phoneNumError").style.color="red";
  document.carForm.phone_number.style.borderColor = "red";
  validation = false;
}



/* validate age */
var selected = false;
var age = document.carForm.age_range;
for(var i=0; i<age.length;i++){
  //console.log("check? ");
  //console.log(age.value);
if(age[i].checked){
selected = true;
}
}
if(selected == false){
document.getElementById("ageError").style.visibility = "visible";
document.getElementById("ageError").innerHTML= "You have to choose an age range";
document.getElementById("ageError").style.color="red";
validation= false;
}


/* validate car */
var car = document.carForm.car
var count=0;
var carList =[];

for(var j=0 ; j< car.length;j++){
  if(car[j].checked){
    console.log("in loop cars? ");
    console.log(car[j].value)
    carList.push(car[j].value)
    count=count+1;
}
}

console.log("carslist? ");
console.log(carList);
localStorage.setItem("carList", carList);

if(count>3){
document.getElementById("carError").style.visibility = "visible";
document.getElementById("carError").innerHTML="You have to choose at most 3 cars";
document.getElementById("carError").style.color="red";
validation=false;
}
else if(count<1){
document.getElementById("carError").style.visibility = "visible";
document.getElementById("carError").innerHTML="You have to choose at least one car";
document.getElementById("carError").style.color="red";
validation=false;
}


return validation;
} // enf fun



    name.addEventListener("keyup", nameField_changeColor);
    phone_number.addEventListener("keyup", phone_numberField_changeColor);
