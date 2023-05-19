let time1= document.getElementById("id1");
let but = document.getElementById("id2");


const time_run= setInterval(timer, 1000)

function timer(){
  let date= new Date();
time1.innerHTML=date.toLocaleTimeString();
}

function freeze_time(){
  clearInterval(time_run);
}

