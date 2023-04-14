const API_KEY="ff0481bd3a3b9c4720532c0efc1e47e2";

function onGeoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    // console.log(position); 로 coords 안에 latitude, longtitude 속성 있는 것 확인
    // event와 같이 브라우저에서 더 주는 정보를 인수로 받은 것.

    // 이 latitude와 longtitude를 장소로 바꿔줄 서비스를 이용해야 함.
    // openweathermap.org 에서 API(다른 서버와 이야기할 수 있는 방법)
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    // 이제 fetch를 이용해서 url을 얻을 것임.
    fetch(url).then(response => response.json()).then(data => {
        const weather=document.querySelector("#weather span:first-child");
        const city=document.querySelector("#weather span:nth-child(2)");
        // weather,city Container는 span에 날씨,지역을 줄 것이다.
    
        weather.innerText=`${data.weather[0].main} / ${data.main.temp}°C`;
        city.innerText=data.name;

    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

// user의 geolocation을 주는 함수. 아래와 같이 하면 브라우저에서 위치 좌표를 준다!
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
// 2개의 인수 필요. getCurrentPosition(모든 게 잘 됐을 때 실행될 함수, 에러가 발생했을 때 실행될 함수)