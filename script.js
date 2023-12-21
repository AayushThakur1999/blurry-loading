const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let load = 0;

let clr = setInterval(blurring, 20);

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(clr);
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0); // mapping min and max values of load to the opacity range([0-1])
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; // mapping min and max values of load to blur's range([30 - 0])

    // this function maps the range(minimum and maximum values) of an input to the 
    // output range and gives the mapped value of the output range with respect to the current input value.
    // Here num is the current input value. 
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) / (in_max - in_min)) * (out_max - out_min) + out_min;
}