var bgtext = document.getElementById('bgtext');
var prevDiv = document.getElementById('preview');
var c1 = document.getElementById('choice1');
var c2 = document.getElementById('choice2');
var c3 = document.getElementById('choice3');
var menu = document.getElementById('menu');
var picc = document.getElementById('picChooser')

var numUse = 0;
var numSelectUse = 0;

document.getElementById("select").selectedIndex = "-1";

bgtext.addEventListener('keyup', function(ev){
    //console.log(ev.keyCode)
    if (ev.keyCode == 13) // reads key release from input, 13 is enter
        {
            //console.log(c1.checked, c2.checked, c3.checked);
            
            if (c1.checked)  // essentially == true
                {
                //document.body.style.backgroundColor = bgtext.value;
                    if(bgtext.value == 'bird')
                        {
                            document.body.style.backgroundImage = 'url(imgs/1.jpg)';
                        }
                    else if(bgtext.value == 'grass')
                        {
                            document.body.style.backgroundImage = 'url(imgs/2.jpg)';
                        }
                    else if(bgtext.value == 'dog')
                        {
                            document.body.style.backgroundImage = 'url(imgs/3.jpg)';
                        }
                    
                    else {
                        document.body.style.backgroundColor = bgtext.value;
                    }
                }
            
            else if (c2.checked)
                {
                    if(bgtext.value == 'bird')
                        {
                            prevDiv.style.backgroundImage = 'url(imgs/1.jpg)';
                        }
                    else if(bgtext.value == 'grass')
                        {
                            prevDiv.style.backgroundImage = 'url(imgs/2.jpg)';
                        }
                    else if(bgtext.value == 'dog')
                        {
                            prevDiv.style.backgroundImage = 'url(imgs/3.jpg)';
                        }
                    
                    else {
                        prevDiv.style.backgroundColor = bgtext.value;
                        }
                    //prevDiv.style.backgroundColor = bgtext.value;
                   // prevDiv.backgroundImage = 'url('+bgtext.value+')';
                }
            else if (c3.checked)
                {
                    if(bgtext.value == 'bird')
                        {
                            menu.style.backgroundImage = 'url(imgs/1.jpg)';
                        }
                    else if(bgtext.value == 'grass')
                        {
                            menu.style.backgroundImage = 'url(imgs/2.jpg)';
                        }
                    else if(bgtext.value == 'dog')
                        {
                            menu.style.backgroundImage = 'url(imgs/3.jpg)';
                        }
                    
                    else {
                        menu.style.backgroundColor = bgtext.value;
                        }
                    //menu.style.backgroundColor = bgtext.value;
                }
            else
                {
                    alert('Choose an option!');
                }

            bgtext.value = '';
            numUse++;
            console.log(numUse);
            if (numUse > 5){
                alert('You\'ve reached the limit. Please pay to use more!')
                document.getElementById('display').innerHTML = 'You\'ve reached the limit. Please pay to use more!';
            }
        }
});

picc.addEventListener('change', function(){
    /* if for alert */
    var picnum = parseInt(picc.value);
    
    if(picnum > 3){
        picc.value = 1
    }
    
    if(picnum < 1){
        picc.value = 3
    }
    prevDiv.style.backgroundImage = 'url(imgs/'+picc.value+'.jpg)'
});


document.getElementById('select').addEventListener('change', function(){
   
            if (c1.checked)  // essentially == true
                {
                //document.body.style.backgroundColor = bgtext.value;
                    if(document.getElementById("select").selectedIndex == 0)
                        {
                            document.body.style.backgroundImage = 'url(imgs/1.jpg)';
                        }
                    else if(document.getElementById("select").selectedIndex == 1)
                        {
                            document.body.style.backgroundImage = 'url(imgs/2.jpg)';
                        }
                    else if(document.getElementById("select").selectedIndex == 2)
                        {
                            document.body.style.backgroundImage = 'url(imgs/3.jpg)';
                        }
                }
            
            else if (c2.checked)
                {
                    console.log(document.getElementById("select").selectedIndex);
                    if(document.getElementById("select").selectedIndex == 0)
                        {
                            console.log('why doesnt it work2')
                            prevDiv.style.backgroundImage = 'url(imgs/1.jpg)';
                        }
                    else if(document.getElementById("select").selectedIndex == 1)
                        {
                            prevDiv.style.backgroundImage = 'url(imgs/2.jpg)';
                        }
                    else if(document.getElementById("select").selectedIndex = 2)
                        {
                            console.log('why doesnt it work')
                            prevDiv.style.backgroundImage = 'url(imgs/3.jpg)';
                        }

                }
            else if (c3.checked)
                {
                    if(document.getElementById("select").selectedIndex == 0)
                        {
                            menu.style.backgroundImage = 'url(imgs/1.jpg)';
                            console.log(menu.style.backgroundImage);
                        }
                    else if(document.getElementById("select").selectedIndex == 1)
                        {
                            menu.style.backgroundImage = 'url(imgs/2.jpg)';
                        }
                    else if(document.getElementById("select").selectedIndex == 2)
                        {
                            menu.style.backgroundImage = 'url(imgs/3.jpg)';
                        }     

                }
            else
                {
                    alert('Choose an option!');
                }
            document.getElementById("select").selectedIndex = "-1";
            numSelectUse++;
            if (numSelectUse > 8){
                alert('You\'ve reached the limit. Please pay to use more!')
                document.getElementById('display').innerHTML = 'You\'ve reached the limit. Please pay to use more!';
            }
        
});