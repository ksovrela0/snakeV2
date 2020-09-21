let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");


let box = 20;
let score = 0;
let foodImg = new Image();
foodImg.src= "img/food.png";


let snake = [];

snake[0] = {
    x: 13 * box,
    y: 12 * box
};

let food = {
    x: Math.floor(Math.random() * 26 + 1) * box,
    y: Math.floor(Math.random() * 25 + 1) * box,
};

let dir;
document.addEventListener("keydown",direction);
function direction(event){
    if(event.keyCode == 37 && dir != 'right'){
        dir = 'left';
    }
    else if(event.keyCode == 38 && dir != 'down'){
        dir = 'up';
    }
    else if(event.keyCode == 39 && dir != 'left'){
        dir = 'right';
    }
    else if(event.keyCode == 40 && dir != 'up'){
        dir = 'down';
    }
}

function drawGame(){
    ctx.clearRect(0, 0, 520, 520); 
    for(let i = 0; i < snake.length;i++){
        if(i == 0){
            ctx.fillStyle = "green";
        }
        else{
            ctx.fillStyle = "red";
        }
        
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }
    ctx.drawImage(foodImg,food.x,food.y);

    ctx.fillStyle = "red";
    ctx.font = "50px Arial";
    ctx.fillText(score,box * 2,box * 2);

    

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(snakeX == food.x && snakeY == food.y){
        score++;
        food = {
            x: Math.floor(Math.random() * 26 + 1) * box,
            y: Math.floor(Math.random() * 25 + 1) * box,
        };
    }
    else{
        snake.pop();
    }

    
    
    if(dir == 'left') snakeX -= box;
    if(dir == 'right') snakeX += box;
    if(dir == 'up') snakeY -= box;
    if(dir == 'down') snakeY += box;

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    snake.unshift(newHead);
}

let game = setInterval(drawGame,50);