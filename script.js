// calculATEor script

const display = document.getElementById("res");
function append(inp){
    display.value += inp;
}
function deleteLast(){
    display.value = display.value.slice(0, -1);
}
function clearCE(){
    display.value = "";
}
function calc(){
    display.value = eval(display.value.replace('÷', '/'));
}