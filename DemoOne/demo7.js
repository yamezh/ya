/**
 * Created by Administrator on 2017/3/16.
 */

window.onload = function () {
  var TipBox = document.getElementById('rightAd');
  var CloseBtn = document.getElementById('closeBtn');
  var Play = document.getElementById('play');
    CloseBtn.onclick = function () {
      //TipBox.style.display = 'none';
        TipBox.className = 'hide';
        CloseBtn.style.display = 'none';
    };

    Play.onmouseover = function () {
        TipBox.style.display = 'block';
        CloseBtn.style.display = 'block';
    };


}
