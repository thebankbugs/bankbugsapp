const messages = [

    "Initializing TheBankBugs...",

    "Loading Trading Academy...",

    "Preparing Starter Dashboard...",

    "Loading Elite Experience...",

    "Syncing Platform...",

    "Ready..."

];

const loadingText = document.getElementById("loading-text");

let index = 0;

const interval = setInterval(() => {

    index++;

    if(index < messages.length){

        loadingText.textContent = messages[index];

    }

},500);

setTimeout(()=>{

    clearInterval(interval);

    document.body.style.opacity="0";

    document.body.style.transition="opacity .6s";

    setTimeout(()=>{

        window.location.href="pages/welcome.html";

    },600);

},3500);
