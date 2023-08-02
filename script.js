// for date,year
var now = new Date();
var year = now.getFullYear(year)
document.getElementById("year").innerText = year

// clear output
function clearOutput(){
    document.getElementById('output').innerHTML=""
}
//output function
const showOutput = (output) =>{
    document.getElementById('output').innerHTML=output;
}
// show toastify
const showToastify=(msg,color)=>{
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background:color, //"linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}
// function for field value using id
function fieldValue(id){
    return document.getElementById(id).value
}
//----------------------------------------------------------------------------//       
var users=[];
function User(firstName,lastName,email,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.dob=dob;
    
    // this.calculateAge = function(){                    (we can use this method but also use prototype which is below)
    
    // }
    }
    User.prototype.calculateAge = function () {
        let dob = new Date(this.dob); 
        let currentDate=new Date(); 
        //calculate month difference from current date in time  
        var month_diff = currentDate.getTime() - dob.getTime();  
          
        //convert the calculated difference in date format  
        var age_dt = new Date(month_diff);   
          
        //extract year from date      
        var year = age_dt.getFullYear();  
          
        //now calculate the age of the user  
        var age = Math.abs(year - 1970);  
          return age;
    }

//don't select the future date               from: https://stackoverflow.com/questions/32378590/set-date-input-fields-max-date-to-today
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("dateOfBirth").setAttribute("max", today);   
//-----------------------------------------------------------------------//
//show user in console
function handleSubmit(){
    event.preventDefault(); // no refresh & no submit
var firstName=fieldValue("firstName");
var lastName=fieldValue("lastName");
var email=fieldValue("email");
var dob= fieldValue("dateOfBirth");

 firstName=firstName.trim();
 lastName=lastName.trim();
 email=email.trim();

if ( firstName.length < 3) {
    // console.log(firstName);
    showToastify("Please enter your name correctly.","linear-gradient(to right, pink, red)");
    return;
}

let emailFormat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  //from https://www.w3resource.com/javascript/form/email-validation.php
if (!emailFormat.test(email)){
    showToastify("Please enter your email correctly.","linear-gradient(to right, pink, red)");
    return;
}
if (!dob){
    showToastify("Please enter your date of birth.","linear-gradient(to right, pink, red)");
    return;
}
// let user={firstName,lastName,email,dob}            (it is simple object ,but we can use constructor for it) 
// let user={firstName,lastName,email,dob , calculateAge:function(){             (it is a method means use a function in a object is calles mathod)

// }
// }    
var user= new User(firstName,lastName,email,dob);        //constructor

user.id = Math.random().toString(36).slice(2);
user.dateCreated = new Date().getTime();
user.status= "Active";
user.role = "student";
users.push(user)
console.log(users)
// console.log(user)
showToastify("A new user has been added","linear-gradient(to right, aqua, #38ef7d")
showTable()

}

// SHOW TABLE IN OUT PUT
function showTable(){
    
    if(!users.length){
        showToastify("There is no single user available." ,"linear-gradient(to right, pink, red)");
    return;
    }

    let tabStringCode= '<div class="table-responsive"><table class="table">';
let tableHead='<thead><tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Email</th><th scope="col">Date of Birth</th><th scope="col">Age</th></tr></thead>';
let tabEndCode='</table></div>';

let tableBody="";
for(let i=0;i<users.length;i++){
tableBody +='<tr><th scope="row">'+(i+1)+ '</th><td>'+(users[i].firstName)+'</td><td>'+(users[i].lastName)+'</td><td>'+(users[i].email)+'</td><td>'+(users[i].dob)+'</td><td>'+(users[i].calculateAge())+'</td><tr>'
}
let table=tabStringCode+tableHead+'<tbody>'+tableBody+'</tbody>'+tabEndCode;
showOutput(table)
}

// ADD/PRINT USERS IN CONSOLE
function printUsers(){
    
    if(!users.length){
        showToastify("There is no single user available." ,"linear-gradient(to right, pink, red)")
        return;
    }
    for(let i=0;i<users.length;i++){
        let user=users[i];
        console.log(user)
    }
    showToastify("Successfully printed in console","linear-gradient(to right, aqua, #38ef7d")
}
 