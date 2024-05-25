document.getElementsByClassName("button")
.addEventListener("click", function login(){
 const username = document.getElementById("username").value;
 const password = document.getElementById("password").value;
 if( username == "admin" && password == "password" ){
    document.getElementById("message").innerText="login secssesful";
   
   }
 else { document.getElementById("message-error").innerText="Invalid username or password";
 
       }
     
   
});