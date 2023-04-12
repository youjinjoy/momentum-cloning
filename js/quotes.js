const quotes = [
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    },
    {
      quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
      author: "Thomas A. Edison"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
      author: "Christian D. Larson"
    },
    {
      quote: "You are never too old to set another goal or to dream a new dream.",
      author: "C.S. Lewis"
    },
    {
      quote: "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama"
    }
  ];

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

// array에 접근
// Math module 사용
// Math.random() 0부터 1 사이의 랜덤한 값을 줌

// Math.floor(Math.random()*10);

// 소수점을 가진 flaot은 필요 없다.
// round(): 반올림.
// ceil(): 숫자를 천장까지 올려준다.
// floor(): 숫자를 바닥까지 내려준다.

// quotes 배열에 접근하기
todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];
// array의 길이 array.length

quote.innerText=todaysQuote.quote;
// quote 요소의 텍스트를 todaysQuote의 quote 속성값으로 설정합니다.
author.innerText=todaysQuote.author;
//  author 요소의 텍스트를 todaysQuote의 author 속성값으로 설정합니다.
