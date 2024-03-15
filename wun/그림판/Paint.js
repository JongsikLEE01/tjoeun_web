// dom 초기화
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

const colorBtns = document.querySelectorAll(".pallet button");
const eraserBtn = document.querySelector("#eraser");
const downloadBtn = document.querySelector("#download");

// 그리기 설정
let isDrawing = false;
let isErasing = false;

ctx.lineWidth = 5+"px";
ctx.strokeStyle = "red";

//이벤트 리스너
function startDrawing(e){
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

function stopDrawing(){
    isDrawing = false;
    ctx.closePath();
}

function drawing(e){
    if(!isDrawing) return;
    if(isErasing){
        //지우개 모드
        ctx.clearRect(e.offsetX,e.offsetY, 20,20);
    }else{
        //그리기 모드
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
}

function startEraser(e){
    isErasing = true;
    colorBtns.forEach((button) => button.classList.remove("selected"));
    e.currentTarget.classList.add("selected");
}

function changColor(e){
    ctx.strokeStyle = e.currentTarget.dataset.color;
    
    //선택한 색상 활성화
    colorBtns.forEach((button) => {
        if(button === e.currentTarget){
            button.classList.add("selected");
        }else{
            button.classList.remove("selected");
        }
    });
}

//이벤트 연결
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", drawing);
colorBtns.forEach(button => button.addEventListener("click", changColor));
eraserBtn.addEventListener("click", startEraser);