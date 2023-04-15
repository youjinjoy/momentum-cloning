const loginForm=document.getElementById("login-form");
const loginInput=loginForm.querySelector("input");
const loginButton=loginForm.querySelector("button");

const greeting=document.getElementById("greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function paintGreetings(username){
    greeting.innerText=`Hello, ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const typedUsername=loginInput.value;
    localStorage.setItem(USERNAME_KEY,typedUsername);

    paintGreetings(typedUsername);
}
const savedUsername=localStorage.getItem(USERNAME_KEY);
if (savedUsername===null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else{
    // hide the form
    paintGreetings(savedUsername);
}