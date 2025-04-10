const canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 400;

let draw = canvas.getContext("2d");
draw.fillStyle = "#fbf2d5";
draw.fillRect(0, 0, canvas.width, canvas.height);

let draw_color = "black";
let draw_width = "2";
let is_drawing = false;

function changeColor(element)
{
    draw_color = element.style.backgroundColor;
}

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", drawingCanvas, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", drawingCanvas, false);

canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

let save_button = document.getElementById("save");

save_button.addEventListener("click", saveClick, false)

function start(event)
{
    is_drawing = true;
    draw.beginPath();
    draw.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    event.preventDefault();
}

function drawingCanvas(event)
{
    if(is_drawing)
    {
        draw.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        draw.strokeStyle = draw_color;
        draw.lineWidth = draw_width;

        draw.lineCap = "round";
        draw.lineJoin = "round";

        draw.stroke();
    }

    event.preventDefault();
}

function stop(event)
{
    if(is_drawing)
    {
        draw.stroke();
        draw.closePath();
        is_drawing = false;
    }

    event.preventDefault();
}

function clearClick()
{
    draw.clearRect(0, 0, canvas.width, canvas.height);
    draw.fillStyle = "#fbf2d5";
    draw.fillRect(0, 0, canvas.width, canvas.height);

}

function saveClick()
{
    /* const dataCanvas = canvas.toDataURL("image/png");
    imgConverted.src = dataCanvas; */

    if(window.navigator.msSaveBlob)
    {
        window.navigator.msSaveBlob(canvas.msToBlob(), "canvas-image.png");
    }

    else
    {
        const a = document.createElement("a");

        document.body.appendChild(a);
        a.href = canvas.toDataURL();
        a.download = "canvas-image.png";
        a.click();
        document.body.removeChild(a);
    }
}