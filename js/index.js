window.onload= function(){
    var endload= setInterval(() => {
        try{
            endloading();
            clearInterval(endload)
        }
        catch(e){}
    }, 1000);
}
function windowsize(){}
