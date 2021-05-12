let counter =mdocument.querySelector('h1');
let count = 1;

setInterval(()=>{
    count.innerText = count;
    count++

    // if(count > 5) location.replace('https://indiazakat.com/campaign/2126/')
},1000)