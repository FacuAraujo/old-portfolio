'use strict'

var i = 0;
var m = 0;
var text = 'web developer';
var text2 = 'front end developer';
var textDOM = document.querySelector('.header h2');


function typing() {
    if(text === textDOM.innerHTML || text2 === textDOM.innerHTML){
        setTimeout( () => {
            textDOM.innerHTML = "";
            if(m === text2.length){
                i = 0;
            }
            typing();
        }, 2000);

    } else if(i<text.length){
        textDOM.innerHTML += text.charAt(i);        
        i++;
        setTimeout(typing,300);
        
        m = 0;

    } else if(m<text2.length){
        textDOM.innerHTML += text2.charAt(m);        
        m++;                
        setTimeout(typing,300);        
    } 
}

typing();