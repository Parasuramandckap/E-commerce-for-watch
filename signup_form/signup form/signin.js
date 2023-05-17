let signupBtn = document.querySelector("#SignUp")
let username = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let conformPassword = document.querySelector("#confirm_password")
let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const usernameVal =  username.value.trim()
    const emailVal = email.value.trim()
    const passwordval = password.value.trim()
    const confirm_passwordval =  conformPassword.value.trim()
    console.log(typeof passwordval)
        let array = [];
        if(usernameVal === ""){
            seterror(username,"username required")
        }
        else if(usernameVal.length < 3){
            seterror(username,"altleast 3 character")
        }
        else{
            setSuccess(username,"sccess")
            array.push(usernameVal)
        }
        //email
        if(emailVal === ""){
            seterror(email,"email is requied")
        }else if(!validEmail(emailVal)){
            seterror(email,"enter vaild email")
        }
        else{
            setSuccess(email,"vaild email")
            array.push(emailVal)

        }
        //password
        if(passwordval === ""){
            seterror(password,"password is requird")
        }else if(passwordval.charAt(0).match("@","_","-","#")){
            seterror(password,"No caps in first")
        }
        else if(passwordval.length < 8){
            seterror(password,"password atleast 8 char")
        }
        else if(passwordval.charAt(0) !== passwordval.charAt(0).toUpperCase()){
            seterror(password,"password first letter uppercase")
        }
        else if(!passwordval.match("@","_","-","#")){
            seterror(password,"passwor should be one special char")
        }else if(!passwordval.match(1,2,3,4,5,6,7,8,9,0)){
            seterror(password,"passwor should have one number")
        }
        else{
            setSuccess(password,"password success")            
            array.push(passwordval)
        }
        //conform passowrd
        if(confirm_passwordval !== passwordval){
            seterror(conformPassword,"password does not match match")
        }else if(confirm_passwordval === ""){
            seterror(conformPassword,"conform password required")
        }
        else{
            setSuccess(conformPassword,"password success")
            array.push(confirm_passwordval)
        }
        
        if(array.length === 4){
            /*
            fetch("http://localhost:3000/users",{
                method:"POST",
                body:JSON.stringify({
                    "username":array[0],
                    "email":array[1],
                    "password":array[2],
                    "conform_password":array[3]
                }),
                headers:{
                    'Content-type': 'application/json',
                }
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
            */
            let localStrogae =  window.localStorage
            localStrogae.setItem("email",array[1])
            localStrogae.setItem("password",array[2])

        }
})

function seterror(element,message){
    let aaa = element.nextElementSibling
    aaa.innerText = message
    aaa.style.display = "block"
    aaa.style.color = "red"
    // aaa.style = 'margin-bottom=10px'
    element.style.border = "1.5px solid red"
}
function setSuccess(element,message){
    let aaa = element.nextElementSibling
    aaa.innerText = message
    aaa.style.display = "none"
    element.style.border = "1.5px solid #10CED8"
    // console.log(aaa)
}

const validEmail = (email) =>{
    return email.toLowerCase().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
}
/*
    let usernameAlert = document.querySelector(".username")
    let emailAlert = document.querySelector(".email")
    let passowrdAlert = document.querySelector(".password")
    let conformPasswordalert = document.querySelector(".confirm_password")
    let allInput = document.querySelectorAll("input")

    for (let  i= 0;  i< allInput.length; i++) {
        allInput[i].addEventListener("keyup",(e)=>{
            if(e.target.matches("#username")){
                usernameAlert.style.display = "none"
            }
            else if(e.target.matches("#email")){
                emailAlert.style.display = "none"
            }
            else if(e.target.matches("#password")){
                passowrdAlert.style.display = "none"
            }
            else if(e.target.matches("#confirm_password")){
                conformPasswordalert.style.display = "none"
            }
        })
    }
*/
