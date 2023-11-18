const list = document.querySelectorAll('.list')

function activlink(){
    list.forEach((item) => 
        item.classList.remove('activ1'));
        this.classList.add('activ1');
}
list.forEach((item) => 
item.addEventListener('click', activlink))

////////////////////////////////////////////////////


function rain() {
    let could = document.querySelector('.fq-could');
    let e = document.createElement('div');
    let left = Math.floor(Math.random() * 340);
    let width = Math.floor(Math.random() * 5);
    let height = Math.floor(Math.random() * 50);
    let duration = Math.floor(Math.random() * 0.5);


    e.classList.add('drop')
    could.appendChild(e);
    e.style.left= left + 'px';
    e.style.width= 0.5+width + 'px';
    e.style.height= 0.5+height + 'px';
    e.style.animationDirection= 1+duration+'s';

    setTimeout(function(){
        could.removeChild(e)

    },2000)
}
setInterval(function(){
    rain()

},20 )


///////////////////////////////////////////////////////

const rating1 = document.getElementsByClassName('rating1')[0];
const block = document.getElementsByClassName('block');


for (let i = 0 ; i<100 ; i++ ){
    
    rating1.innerHTML += "<div class='block'></div>";
    block[i].style.transform = "rotate("+ 3.6 * i +"deg)" ;
    block[i].style.animationDelay = `${i/40}s`
}

const counter = document.querySelector('.counter1')
counter.innerText = 0;

const target = +counter.getAttribute('data-target');

const NumbreCounter = () => {
    const Value  = +counter.innerText;
    if(Value < target){
        counter.innerText = Math.ceil(Value + 1);
        setTimeout ( () => {
            NumbreCounter()
        },0
        )
    }
} 
NumbreCounter ()
// card 3

const rating3 = document.getElementsByClassName('rating3')[0];
const block3 = document.getElementsByClassName('block3');


for (let i = 0 ; i<100 ; i++ ){
    
    rating3.innerHTML += "<div class='block3'></div>";
    block3[i].style.transform = "rotate("+ 3.6 * i +"deg)" ;
    block3[i].style.animationDelay = `${i/30}s`
}

const counter3 = document.querySelector('.counter3')
counter3.innerText = 0;

const target3 = +counter3.getAttribute('data-target3');

const NumbreCounter3 = () => {
    const Value3  = +counter3.innerText;
    if(Value3 < target3){
        counter3.innerText = Math.ceil(Value3 + 1);
        setTimeout( () => {
            NumbreCounter3()
        },18
        )
    }
} 
NumbreCounter3()
// card 2
const rating2 = document.getElementsByClassName('rating2')[0];
const block2 = document.getElementsByClassName('block2');


for (let i = 0 ; i<100 ; i++ ){
    
    rating2.innerHTML += "<div class='block2'></div>";
    block2[i].style.transform = "rotate("+ 3.6 * i +"deg)" ;
    block2[i].style.animationDelay = `${i/30}s`
}

const counter2 = document.querySelector('.counter2')
counter2.innerText = 0;

const target2 = +counter2.getAttribute('data-target2');

const NumbreCounter2 = () => {
    const Value2  = +counter2.innerText;
    if(Value2 < target2){
        counter2.innerText = Math.ceil(Value2 + 1);
        setTimeout( () => {
            NumbreCounter2()
        },18
        )
    }
} 
NumbreCounter2()
// card 4
const rating4 = document.getElementsByClassName('rating4')[0];
const block4 = document.getElementsByClassName('block4');


for (let i = 0 ; i<100 ; i++ ){
    
    rating4.innerHTML += "<div class='block4'></div>";
    block4[i].style.transform = "rotate("+ 3.6 * i +"deg)" ;
    block4[i].style.animationDelay = `${i/30}s`
}

const counter4 = document.querySelector('.counter4')
counter4.innerText = 0;

const target4 = +counter4.getAttribute('data-target4');

const NumbreCounter4 = () => {
    const Value4  = +counter4.innerText;
    if(Value4 < target4){
        counter4.innerText = Math.ceil(Value4 + 1);
        setTimeout( () => {
            NumbreCounter4()
        },18
        )
    }
} 
NumbreCounter4()
// card 5
const rating5 = document.getElementsByClassName('rating5')[0];
const block5 = document.getElementsByClassName('block5');


for (let i = 0 ; i<100 ; i++ ){
    
    rating5.innerHTML += "<div class='block5'></div>";
    block5[i].style.transform = "rotate("+ 3.6 * i +"deg)" ;
    block5[i].style.animationDelay = `${i/30}s`
}

const counter5 = document.querySelector('.counter5')
counter5.innerText = 0;

const target5 = +counter5.getAttribute('data-target5');

const NumbreCounter5 = () => {
    const Value5  = +counter5.innerText;
    if(Value5 < target5){
        counter5.innerText = Math.ceil(Value5 + 1);
        setTimeout( () => {
            NumbreCounter5()
        },18
        )
    }
} 
NumbreCounter5()
// card 6
const rating6 = document.getElementsByClassName('rating6')[0];
const block6 = document.getElementsByClassName('block6');


for (let i = 0 ; i<100 ; i++ ){
    
    rating6.innerHTML += "<div class='block6'></div>";
    block6[i].style.transform = "rotate("+ 3.6 * i +"deg)" ;
    block6[i].style.animationDelay = `${i/30}s`
}

const counter6 = document.querySelector('.counter6')
counter6.innerText = 0;

const target6 = +counter6.getAttribute('data-target6');

const NumbreCounter6 = () => {
    const Value6  = +counter6.innerText;
    if(Value6 < target6){
        counter6.innerText = Math.ceil(Value6 + 1);
        setTimeout( () => {
            NumbreCounter6()
        },18
        )
    }
} 
NumbreCounter6()

document.querySelector('body').addEventListener('mousemove' , eyeball );
function eyeball(){
    const eye = document.querySelectorAll('.eye');
    eye.forEach(function(eye){
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(event.clientX - x , event.clientY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate("+ rot + "deg)" ;
    }
    )
}
