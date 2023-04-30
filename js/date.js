const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
const today=document.querySelector("h3#date");

function getDate(){
    const date=new Date();
    const month= String(date.getMonth()).padStart(2,"0");
    const dates= String(date.getDate()).padStart(2,"0");
    const dayOfWeek = weekdays[date.getDay()];

    today.innerText=`${month}/${dates} (${dayOfWeek})`;
}
getDate();