Typing = function(target, settings){

    var settings = settings || {},
        start = settings.start || null,
        stop = settings.stop || null,
        delay = settings.delay || 400;

    var $elem = (typeof target === 'string') ? document.getElementById(target) : target,
        typing = false,
        delayedCallback;

    function startTyping(event){
        if(!typing){
            typing = true;

            if(settings.start){
                settings.start(event, $elem);
            }
        }
    }

    function stopTyping(event, odelay){
        if(typing){
            clearTimeout(delayedCallback);

            delayedCallback = setTimeout(function(){
                typing = false;

                if(settings.stop){
                    settings.stop(event, $elem);
                }
            }, odelay >= 0 ? odelay : delay);
        }
    }
    
    addEvent($elem, 'keypress', startTyping);
    
    addEvent($elem, 'keydown', function(event){
        if(event.keyCode === 8 || event.keyCode === 46){
            startTyping(event);
        }
    });
    
    addEvent($elem, 'keyup', stopTyping);
    
    addEvent($elem, 'blur', function(event){
        stopTyping(event, 0);
    });

};

/* helper function for attach event listener to html element */
function addEvent(el, evnt, funct){
    if(el.attachEvent){
        return el.attachEvent('on'+evnt, funct);
    }else{
        return el.addEventListener(evnt, funct, false);
    }
}
