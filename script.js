function getRandomNumber() {
    let RN = Math.floor(Math.random() * 100) + 1;
    return RN;
}
correctNumber = getRandomNumber();
function checkValue(){
//alert(correctNumber);  
var inputVal = document.getElementById("fname").value;
//alert(inputVal);
let no=parseInt(document.getElementById("no").innerHTML);
if(no>1){
    if(inputVal>correctNumber)
    {
        document.getElementById('guess').innerHTML="GUESSED NO IS BIG";
    }
    else{
        if(inputVal<correctNumber)
    {
        document.getElementById('guess').innerHTML="GUESSED NO IS SMALL";
    }
    else if(inputVal==correctNumber){
        window.location.href = 'index1.html';
    }
    }
    no=no-1;
}
else{
    window.location.href = 'index2.html';
}
document.getElementById("no").innerHTML=no;
console.log(no);
document.getElementById("fname").value="";
document.getElementById("fname").focus();
document.getElementById("fname").select();
}
function isNumeric(val) {
    return /^-?\d+$/.test(val);
}
function enterSubmit(e) {
        if (e.code === 'Enter')
        {
            console.log("it is correct");
            checkValue();
        }
    }); 
function checkalp(){
    
    let noInp=document.getElementById("fname");
    
    console.log("yes");
    var x=noInp.value;
if(!(isNumeric(x)) || parseInt(x)>100 || parseInt(x)<1){
    noInp.value="";
    console.log("NO");
}
}



