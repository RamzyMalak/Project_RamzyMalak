function gettimedetails() {
  "use strict";
  var countDiv=document.getElementById('clock'),
      now=new Date(),
      hours=now.getHours(),
      minute=now.getMinutes(),
      seconds=now.getSeconds();
countDiv.textContent=hours+":"+minute+":"+seconds;
}
window.onload=function () {setInterval(gettimedetails,500);};
