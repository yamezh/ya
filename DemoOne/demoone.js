/**
 * Created by Administrator on 2017/3/1.
 */
window.addEventListener('load', function () {
    var box = document.getElementById('box');
    box.addEventListener('click', toBlue, false);
},false);


function toRed() {
    this.className = 'red';
    this.removeEventListener('click', toRed, false);
    this.addEventListener('click', toBlue, false);
}

function toBlue() {
    this.className = 'blue';
    this.removeEventListener('click', toBlue, false);
    this.addEventListener('click', toRed, false);
}