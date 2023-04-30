const weather=document.querySelector("#info #weather");
const city=document.querySelector("#info #loca");
const temp=document.querySelector("#info #temp");

const images=[
    "0.jpg",
    "1.jpg",
    "2.jpg",
];
// 랜덤 사진
const chosenImage=images[Math.floor(Math.random()*images.length)];
const backgroundImage=document.createElement("img");
backgroundImage.src=`image/${chosenImage}`

backgroundImage.classList.add("background-image");

document.body.appendChild(backgroundImage);