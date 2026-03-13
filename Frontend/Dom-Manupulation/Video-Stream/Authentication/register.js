
document.getElementById("register-form").addEventListener("submit", (e)=>{
    e.preventDefault(); 
    console.log("live app");
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
     console.log("name:",name,"email:",email);
    // const password=document.getElementById("password").value;
   try{
    const response= fetch("http://localhost:3000/users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({name,email})
    });
    console.log(response)
    if(response.ok){
        alert("Registration successful! Please login.");
        window.location.href="login.html";
    }
}catch(err){
    console.log(err);
}
})