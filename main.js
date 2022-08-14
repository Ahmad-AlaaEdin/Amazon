
var objPeople = [
{
username: 'admin',
email:'admin',
password: 'admin'
}
];

function registerUser() {


var newUserName = document.getElementById("name").value;
var newEmail= document.getElementById("email").value;
var newPassword = document.getElementById("pass").value;
var rePassword = document.getElementById("repass").value;
var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 
                                    
var regName = /^[a-zA-Z ]{2,30}$/;  
if(newPassword!=rePassword){
   alert("Passwords do not match");
   
}else{
    if(newPassword==""||newPassword.length < 6){
alert("Minimum 6 characters required");
    }else{

        if(newEmail== "" || !regEmail.test(newEmail)){
alert("Please enter a valid e-mail address");
        }else{
            if(newUserName==""||!regName.test(newUserName)){
                alert("Please Enter Valid Name")
            }else{
                var newUser = {
                    username: newUserName,
                    password: newPassword,
                    email:newEmail
                    };
                  var found=false;
                    for(var i = 0; i < objPeople.length; i++) {
                  
                    if(newEmail == objPeople[i].email) {
                     found=true;
                        
                       
                        break;
                   
                    }
                    }
                    if(found){
    alert('Email Is Used');
                    }else{
     objPeople.push(newUser);
                    console.log(objPeople);
                    document.getElementById("myform").reset();
            }
            
               
        }
        
    }
   
      
        
}

}}
