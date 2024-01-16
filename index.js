const mytext=document.getElementById("mytext");
const mySubmit=document.getElementById("mySubmit");
const resultElement=document.getElementById("resultElement");
let age;

mySubmit.onclick=function(){
    age=mytext.value;
    age=Number(age);

    if(age>=100){
        resultElement.textContent=`You are TOO OLD to enter this site`;
    
    }
    else if(age == 0){
        resultElement.textContent=`You can't enter,you are just born`;
    }
    else if( age >= 18){
        resultElement.textContent=`You are OLD enough to enter this site`;
    }
    else if (age <= 0){
        resultElement.textContent=`Your age can't be below 0`;
    }
    else{
        resultElement.textContent=`You must be 18+ to enter this site`;
    }
}
