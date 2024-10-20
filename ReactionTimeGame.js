const btn = document.getElementById('btn')
const red = document.getElementById('red')
const green = document.getElementById('green')
const message = document.getElementById('message')
let TimeOut = null;
let startTime = 0;

function startGame(){
    btn.style.display='none'
    red.style.display='block';
    message.textContent=''

    let autometicTime = Math.floor(Math.random()*5000)+1000;
    //console.log(autometicTime)

    TimeOut = setTimeout(()=>{
        red.style.display='none';
        green.style.display='block';
        startTime = new Date().getTime()
       // console.log(startTime)
    },autometicTime)

}

const reset = () =>{
    red.style.display='none'
    green.style.display='none'
    clearTimeout(TimeOut)
}


function handleRedClick(){
    message.textContent='you Clicked too early!'

      setTimeout(()=>{
      message.remove()
      btn.style.display='block'
    },2000)

    reset()
}


function handleGreenClick(){
    let newTime = new Date().getTime() - startTime
    message.textContent = `you clicked in ${newTime} miliseconds`;

    setTimeout(()=>{
        message.remove()
        btn.style.display='block'
    },2000)

    reset()
}