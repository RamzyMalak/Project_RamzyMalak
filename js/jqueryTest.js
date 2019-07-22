$(document).ready(function()
{
          $(".Toolbar").animate(
            {
            top:'0px'
            }
            ,1000);

          $(".One").animate({top:'200px',width:'200px',height:'200px;',},2000);
          $(".One").animate({left:'600px',width:'450px',height:'260px',},2000);


          $(".Services").click(function(){$(".hideli").toggle(500);});
          /*$(".Services").dblclick(function()
                  {
                                $(".hideli").hide(1000);
                  });
          */


         $(".depart").click(function(){$(".hideli2").toggle(500);});
        /*  $(".depart").dblclick(function()
                  {
                                $(".hideli2").hide(1000);
          });
        */

         $(".Buttonsearch").click(function(){$(".ResultSearch").show(2000);});

         $(".btn1").click(function() {
           $(".AbouteFci1").hide(2000);
           $(".AbouteFci2").show(2000);
         }
           );


         $(".btn2").click(function() {
           $(".AbouteFci2").hide(2000);
           $(".AbouteFci3").show(2000);
         }
           );


         $(".btn3").click(function() {
           $(".AbouteFci3").hide(2000);
           $(".AbouteFci1").show(2000);
         }
          );
});




function gettimedetails() {
  "use strict";
  var countDiv=document.getElementById('clock'),
      now=new Date(),
      hours=now.getHours(),
      minute=now.getMinutes(),
      seconds=now.getSeconds();
countDiv.textContent=hours+":"+minute+":"+seconds;
}
window.onload=function () {
  "use strict";
  setInterval(gettimedetails,500);
};



var i=0,
   arrphoto=[
     "images/1 (1).png",
     "images/1 (2).png",
     "images/1 (3).jpg",
     "images/1 (3).png",
     "images/1 (4).jpg",
     "images/1 (6).jpg",
     "images/1 (9).jpg",
     "images/1 (10).jpg",
     "images/1 (11).jpg"
   ] ;
(function changeimg() {
       "use strict";
		document.getElementById("img").src=arrphoto[i];
	    setTimeout(changeimg, 1000);
	    if(i<arrphoto.length-1)
	   {
	    i++;
	    if(i==arrphoto.length)
	    	{i=0;}
	   }
}());


/*
(function Change()
{
	var i=0,
   paths=[
     "1 (1).png",
     "1 (2).png",
     "1 (3).jpg",
     "1 (3).png",
     "1 (4).jpg",
     "1 (6).jpg",
     "1 (9).jpg",
     "1 (10).jpg",
     "1 (11).jpg"
   ] ;

		document.getElementById("m").src=paths[i];
	    setTimeout(changeimg, 1000);
	    if(i<paths.length)
	   {
	    i++;
	    if(i==paths.length)
	    	{i=0;}
	  }
}());

*/

/*
var i=0,
text=document.getElementById('test').getAttribute('data-text');
window.onload=function() {
var typewriter=setInterval(function(){
document.getElementById('test').textContent += text[i];
i=i+1;
if(i>text.length-1)
{
clearInterval(typewriter);
}
},200);


};
*/
