canvas document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
mouseEvent="empty";

var last_position_of_x, last_position_of_y;
var color="Purple";
var width_of_line="4";

canvas.addEventListner("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouseEvent="mouseDown"
}

canvas.addEventListner("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUp"
}

canvas.addEventListner("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseLeave"
}

canvas.addEventListner("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_x=e.clientX - canvas.offsetLeft;
    current_y=e.clientY - canvas.offsetTop;

    if (mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("Last Position of X and Y coordinate= ");
        console.log("x= "+last_position_of_x + "   y= "+last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("Current postition of X and Y coordinates");
        console.log("x= "+current_x+ "  y= "+current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();

    }
    last_position_of_x=current_x;
    last_position_of_y=current_y;
}
