var t1="JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.";
var t2="Hypertext Markup Language is the standard markup language for creating web pages and web applications. With Cascading Style Sheets and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.";
var t3="Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.";
var t4="Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people.";
var t5="GitHub is a web-based hosting service for version control using git. It is mostly used for computer code. It offers all of the distributed version control and source code management functionality of Git as well as adding its own features.";
var text=[t1,t2,t3,t4,t5]; //contains the text to be typed

var f=0;//flag for timer()
//function to start the timer
     function timer()       
     {
       if(!f)
        document.addEventListener("keypress",displayTime());//starts the timer on keypress
        f=1;
     }
var time=1;
var myVar;

      function displayTime()
      {
       myVar=setInterval(myTimer, 1000);

       function myTimer()
       {    
       document.getElementById("sec").innerHTML = time;
       time++;
    
       }
      }
var b;//to store random no. generated

//text for the test is selected
var textToType = function(){
    
    b=Math.floor(Math.random()*(5));
    document.getElementById("totype").innerHTML = text[b];
}

window.onload=textToType();

//function to calculate sped after the test
var speedCalc=function(){
    clearInterval(myVar)
    var no=text[b].length;
    var speed=no/time;
    speed=speed.toFixed(2);
    document.getElementById("ts").innerHTML=speed;
    document.getElementById("speed").style.display='block';

}


var c=0; //stores index value
var t=0;//flag
var d=text[b];//the text to be typed

//checks character by character
document.addEventListener('keypress',check=function(e){
     if(c<text[b].length)                     //loop continues until the end of the para.
      {
        var char=String.fromCharCode(e.charCode);
        console.log(char);
        if(char==d[c]) //checking each character
          {
           c++;
           document.getElementById("totype").innerHTML=d.substring(c,d.length);
           document.getElementById("totype").style.color="black";
           }  //if true the character dissappears
        else
          document.getElementById("totype").style.color="red";
      }
      else{t=1;
        speedCalc();  //flag is set to 1 if the user has finished typing and speedCalc is called
   }
});


