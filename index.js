

var display = document.getElementById('display');
var bgIn = document.getElementById('bgtext');
var menu = document.getElementById('menu');

var ir = document.getElementById('red');
var ig = document.getElementById('green');
var ib = document.getElementById('blue');

var rr = document.getElementById('rred');
var rg = document.getElementById('rgreen');
var rb = document.getElementById('rblue');

var cIn = document.getElementById('colorinp');

var curElement = display;


menu.addEventListener('click', function(){
    //console.log(curElement);
    curElement = menu;
    
})

display.addEventListener('click', function(){
    curElement = display;
})

bgIn.addEventListener('click', function(){
    curElement = bgIn;
})


document.getElementById('change').addEventListener('click',  
                                                 function(){
    console.log(bgIn.value);
    
    // bgIn.value -> return 'blue'
    
    //display.style.backgroundColor = 'blue';
    curElement.style.backgroundColor = bgIn.value;
    bgIn.value = '';
 });

ir.addEventListener('change', function(){
    curElement.style.backgroundColor = "rgb("+ir.value+", "+ig.value+", "+ib.value+")";
    rr.value = r.value;
});
ig.addEventListener('change', function(){
    curElement.style.backgroundColor = "rgb("+ir.value+", "+ig.value+", "+ib.value+")";
    rg.value = ig.value;
});
ib.addEventListener('change', function(){
    curElement.style.backgroundColor = "rgb("+ir.value+", "+ig.value+", "+ib.value+")";
    rb.value = ib.value;
});


rr.addEventListener('change', function(){

    curElement.style.backgroundColor = "rgb("+rr.value+", "+rg.value+", "+rb.value+")";
    ir.value = rr.value;
    
});
rg.addEventListener('change', function(){
    curElement.style.backgroundColor = "rgb("+rr.value+", "+rg.value+", "+rb.value+")";
    ig.value = rg.value;
});
rb.addEventListener('change', function(){
    curElement.style.backgroundColor = "rgb("+rr.value+", "+rg.value+", "+rb.value+")";
    ib.value = rb.value;
});

cIn.addEventListener('change', function(){
    curElement.style.backgroundColor = cIn.value;
})