var str = ""; 

function one(){
    result = document.getElementById("res");
    txt = result.textContent;
    result.textContent = txt + 1;
    str += "1";
}
function zero(){
    result = document.getElementById("res");
    txt = result.textContent;
    result.textContent = txt + 0;
    str += "0";
}
function clr(){
    result = document.getElementById("res");
    result.textContent =  "";
    total = 0;
    numbers = [];
    num = 0;
    operators = [];
    str = "";

}

function sum(){
    result = document.getElementById("res");
    txt = result.textContent;
    result.textContent =  txt + "+";
    str += " + ";
}

function sub(){
    result = document.getElementById("res");
    txt = result.textContent;
    result.textContent =  txt + "-";
    str += " - ";
}

function mul(){
    result = document.getElementById("res");
    txt = result.textContent;
    result.textContent =  txt + "*";
    str += " * ";
}

function div(){
    result = document.getElementById("res");
    txt = result.textContent;
    result.textContent =  txt + "/";
    str += " / "
}
var num = 0;
var numbers = [];
var operators = [];
function eql(){
    res = document.getElementById("res");
    console.log(str);
    bin = str.split(" ");
    for(i = 0; i < bin.length; i++){
        if(i % 2 == 0){
            numbers.push(parseInt(bin[i], 2));
        }else{
            operators.push(bin[i]);
        }
    }
    var x = 0;
    var total = numbers[0];
    for(i = 1; i < numbers.length; i++ ){
        if(operators[x] == '*'){
            total = total * numbers[i];
        }else if(operators[x] == '/'){
            total = total / numbers[i];
        }else if(operators[x] == '+'){
            total += numbers[i];
        }else if(operators[x] == '-'){
            total -= numbers[i];
        }
        x++;
    }
    res.textContent = Math.floor(total).toString(2);
}
