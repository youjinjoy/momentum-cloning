const clock=document.querySelector("h2#clock");

// interval: 매번 일어나야 ㅏ는 무언가. 매 2초면 그것이 인터벌.
function sayHello(){
    console.log("Hello");
    // 매 5초마다 확인해야 하는 경우
}
setInterval(sayHello,5000);
// 2개의 argument (실행하고자 하는 funciton, 몇 ms 간격 호출인지)


// timeout: functio을 즉시가 아닌 일정 시간이 흐른 후에 한 번 호출하는 것
setTimeout(sayHello, 5000);

// // 시간 보여주기
// // Date object
// new Date();
// // 오늘 날짜를 가져옴
// const date= new Date();
// date.getDate();// 오늘의 '일'을 가져옴
// date.getDay();// 오늘의 '요일'을 가져옴 (일요일은 0)
// date.getFullYear();// 오늘의 '년'을 가져옴
// date.getHours();
// date.getMinutes();
// date.getSeconds();

// // 매 초마다 호출하기
// new Date().getHours()
// new Date().getMinutes()
// new Date().getSeconds()

function getClock(){
    const date=new Date();
    const hours= String(date.getHours()).padStart(2,"0");
    const minutes= String(date.getMinutes()).padStart(2,"0");
    const seconds= String(date.getSeconds()).padStart(2,"0");

    clock.innerText=`${hours}:${minutes}:${seconds}`;
// clock.innerText=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// date.getHourse()에는 .padStart()를 쓸수 없다 왜냐하면 getHours()는 number 이기 때문
// 숫자를 문자로 바꿔주기 String
}
getClock();
// 처음에 1초 있다가 실행되니까 이를 막기 위함
setInterval(getClock,1000);
// 매 초마다 새로운 Date Objec를 만들고 있다. 
// padStart()
// // string에 쓸 수 있는 함수. (n개의 길이, n개의 길이가 아니면 앞 쪽에 x 추가)
// padEnd()
// 뒤 쪽에 x 추가