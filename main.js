canvas = document.getElementById("myCanvas");
color = "green";
width = 4;
var screenWidth = screen.width;
var NewWidth = screen.width - 70;
var newHight = screen.height -300;
var current_x , current_y, last_x, last_y
var mouseEvent= ""
var can =canvas.getContext("2d")
if(screenWidth < 992){
    document.getElementById('myCanvas').width = NewWidth;
    document.getElementById('myCanvas').height = newHight;
     document.body.style.overflow= " hidden";
}
canvas.addEventListener("touchstart" , Touchstart )
function Touchstart (e) {
    color = document.getElementById("color").value
    width = document.getElementById("width").value
    last_x = e.touches[0].clientX - canvas.offsetLeft
    last_y = e.touches[0].clientY - canvas.offsetTop
    mouseEvent = "Touchstart"
    console.log(mouseEvent);
}
canvas.addEventListener("touchmove", TouchMove)
function TouchMove (e){
mouseEvent = "TouchMove";
console.log (mouseEvent);
current_x = e.touches[0].clientX - canvas.offsetLeft;
current_y = e.touches[0].clientY - canvas.offsetTop;
can.beginPath();
can.strokeStyle = color;
can.lineWidth = width;
can.moveTo(last_x ,last_y);
can.lineTo(current_x ,current_y);
can.stroke();
last_x = current_x;
last_y = current_y;
}


canvas.addEventListener("mouseup" , MouseUp)
function MouseUp (e) {
mouseEvent = "MouseUp";
console.log(mouseEvent);
}
canvas.addEventListener("mouseleave" , MouseLeave);
function MouseLeave (e) {
    mouseEvent = "MouseLeave";
    console.log(mouseEvent);
}
canvas.addEventListener("mousemove" , MouseMove);
function MouseMove (e) {
    console.log(mouseEvent)
    current_x = e.clientX-canvas.offsetLeft;
    current_y = e.clientY-canvas.offsetTop;
 if(mouseEvent=="mousedown"){
    can.beginPath();
    can.strokeStyle = color;
    can.lineWidth = width;
    can.moveTo(last_x, last_y);
    can.lineTo(current_x, current_y);
    can.stroke();
 }   
 last_x = current_x;
 last_y = current_y;
}
canvas.addEventListener("mousedown",draw);
function  draw(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouseEvent = "mousedown"
    console.log(mouseEvent)
}
function erase() {
    can.clearRect(0 , 0 , canvas.width , canvas.height);
} 
