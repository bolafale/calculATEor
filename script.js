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
    try{
        display.value = eval(display.value.replace('÷', '/').replace("×", '*'));
    } catch(error){
        alert("Error :((((((");
        display.value = "";
    }
}