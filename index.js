const growButton = document.getElementById('clickButton2');
const clicktext = document.getElementById('score');
const mushroom = document.getElementById('mushroom');
const startButton = document.getElementById('clickButton');
const explotion = document.getElementById('explotion');
const winner = document.getElementById('winimg');
const myprogress = document.getElementById('myProgress');
const givetime = document.getElementById('give');
const lose = document.getElementById('lose');

const maxHeigth = 390;
const maxWhidth= 246;
let width = 100;
let height = 100;
let i = 0;  
let score = 0;
let timeLeft = 10;
let timer;
let click = 0; //41
console.log('timeleft al inicio  ' +  timeLeft);

document.addEventListener('DOMContentLoaded', () =>  {             // webloader
        growButton.style.display = 'none';
        mushroom.style.display = 'none';
        startButton.style.display = 'block';
        start();
});


                                                                 
const mushroomGrow =()=>{                                            // grow 
   
    growButton.addEventListener('click',()=>{
        height+=2;
        width+=1;
        click+=1;
        mushroom.style.width = width + 'px';
        mushroom.style.height = height + 'px';
        clicktext.innerText = click;
        counterset(click,timeLeft );
        console.log(height+ "and" + width + 'click' + click );
        explotionShow(width, maxWhidth, height,maxHeigth);
       
    });
}
mushroomGrow();




const explotionShow = ()=>{                                         //explotion 145 click
    if(width === maxWhidth || height === maxHeigth){
        mushroom.style.display = 'none';
        explotion.style.display = 'block';
        winner.style.display = 'block';
        myprogress.style.display = 'block';
        growButton.style.display = 'none';
        startButton.style.display = 'block';
        myprogress.style.display = 'block';
        lose.style.display ='none';
        move(); 
         setTimeout(()=>{window.location.reload();} ,6000);
    }

   
}

const counterset = ()=>{                                            //time gift
    console.log('timeleft en descuento ' + timeLeft);
    
    if(click === 41){
        timeLeft = timeLeft + 10;
        givetime.innerText = 0;
        givetime.innerText = timeLeft;
        console.log('suma 7  ' + timeLeft);
    }else if(click === 80){
        timeLeft = timeLeft + 6;
        givetime.innerText = 0;
        givetime.innerText = timeLeft;
        console.log('suma 5  ' + timeLeft);
    }else if(click === 130){
        timeLeft = timeLeft + 4;
        givetime.innerText = 0;
        givetime.innerText = timeLeft;
        console.log('suma 3  ' + timeLeft);
    }
}



function startClock() {                                             //clock
    if(!timer){ 
        
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft -- ;
                console.log('timer' + timeLeft);
                document.getElementById("time").textContent = timeLeft;
            } else {
                clearInterval(timer);
                growButton.style.display = 'none';
                lose.style.display ='block'
                setTimeout(()=>{window.location.reload();} ,6000);
            }
        }, 1000);
    }
 
}


                                                                    
const start = ()=>{                                                 //start game
    startButton.addEventListener('click',()=>{
        growButton.style.display = 'block';
        mushroom.style.display = 'block';
        startButton.style.display = 'none';
       
        startClock();
       
    });
}




                                                        

function move() {                                                    //loader
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var duration = 6000; 
        var stepTime = duration / 100; 
        
        var id = setInterval(frame, stepTime); 

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0; 
            } else {
                width++; 
                elem.style.width = width + "%";
            }
        }
    }
}



start();