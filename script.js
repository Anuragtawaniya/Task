let x = document.querySelector(".menu");
let icon = document.getElementById("menu-btn");

function myfunc() {
  if (x.style.width === "0%") {
    x.style.width = "60%";
    icon.setAttribute("name","close-outline")
    
  } else {
    x.style.width = "0%";
    icon.setAttribute("name","menu-outline")
  }
}

let exCounter = document.querySelector(".ac-exp");
let job = document.querySelector(".ac-job");
let count = 1;
setInterval(()=>{
 if(count<=10){
  count++;
  exCounter.innerHTML = count+"+";

 }
},100)

