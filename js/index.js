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


const items = document.querySelectorAll('li');

function update() {
    const center = window.innerHeight / 2;

    items.forEach(item => {
        const rect = item.getBoundingClientRect();

        if (rect.top < center) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', update);
update();