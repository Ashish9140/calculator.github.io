let input="";

let btn1=document.getElementById("btn1").addEventListener("click",func1);
function func1(){
    input+="1";
    displayInput();
    funcEqual();
}

let btn2=document.getElementById("btn2").addEventListener("click",func2);
function func2(){
    input+="2";
    displayInput();
    funcEqual();
}

let btn3=document.getElementById("btn3").addEventListener("click",func3);
function func3(){
    input+="3";
    displayInput();
    funcEqual();
}

let btn4=document.getElementById("btn4").addEventListener("click",func4);
function func4(){
    input+="4";
    displayInput();
    funcEqual();
}

let btn5=document.getElementById("btn5").addEventListener("click",func5);
function func5(){
    input+="5";
    displayInput();
    funcEqual();
}

let btn6=document.getElementById("btn6").addEventListener("click",func6);
function func6(){
    input+="6";
    displayInput();
    funcEqual();
}

let btn7=document.getElementById("btn7").addEventListener("click",func7);
function func7(){
    input+="7";
    displayInput();
    funcEqual();
}

let btn8=document.getElementById("btn8").addEventListener("click",func8);
function func8(){
    input+="8";
    displayInput();
    funcEqual();
}

let btn9=document.getElementById("btn9").addEventListener("click",func9);
function func9(){
    input+="9";
    displayInput();
    funcEqual();
}

let btn0=document.getElementById("btn0").addEventListener("click",func0);
function func0(){
    input+="0";
    displayInput();
    funcEqual();
}

let btnDot=document.getElementById("btn.").addEventListener("click",funcDot);
function funcDot(){
    input+=".";
    displayInput();
    funcEqual();
}

let btnAdd=document.getElementById("btn+").addEventListener("click",funcAdd);
function funcAdd(){
    input+="+";
    displayInput();
    funcEqual();
}

let btnSub=document.getElementById("btn-").addEventListener("click",futnSub);
function futnSub(){
    input+="-";
    displayInput();
    funcEqual();
}

let btnMulti=document.getElementById("btn*").addEventListener("click",futnMulti);
function futnMulti(){
    input+="*";
    displayInput();
    funcEqual();
}

let btnDevide=document.getElementById("btn/").addEventListener("click",futnDevide);
function futnDevide(){
    input+="/";
    displayInput();
    funcEqual();
}

function displayInput(){
    let inputArea=document.querySelector(".input");
    inputArea.innerText=input;
}

let btnx=document.getElementById("btnx").addEventListener("click",funcx);
function funcx(){
    input=input.slice(0,-1);
    displayInput();
    funcEqual();
}

let btnC=document.getElementById("btnC").addEventListener("click",funcC);
function funcC(){
    input="";
    document.querySelector(".answer").innerText="";
    ansWer=0;
    displayInput();
    funcEqual();
}

let btnEqual=document.getElementById("btn=").addEventListener("click",funcEqual);
function funcEqual(){
    let ans=document.querySelector(".answer");
    ans.innerHTML=eval(input);
    if(input=="")
    {
        ans.innerHTML="";
    }
}