/**
 * @yamezh
 * @2017-3-14
 * Created by Administrator on 2017/3/14.
 */


function time() {
    //获取当前时间
    var mydate = new Date();                           //获取当前时间对象
    var oHours = mydate.getHours();                    //获取当前时针
    var oMinutes = mydate.getMinutes();                //获取当前分钟
    var oSeconds = mydate.getSeconds();               //获取当前秒钟
    //改变时间显示
    $('#hours').text(oHours);
    $('#minutes').text(oMinutes);
    $('#seconds').text(mydate.getSeconds());
}
setInterval("time()", 1000);

/*
function month() {
    var idate = new Date();
    var iMonth = idate.getMonth();
    if(iMonth < 9){
        iMonth = '0' + (iMonth + 1)
    } else {
        iMonth = iMonth + 1;
    }
    return $('#month').text(iMonth);
}
*/


$(function () {
    var idate = new Date();
    var iWeek = idate.getDay();
    var iMonth = idate.getMonth();
    var iDay = idate.getDate();
    var iYear = idate.getFullYear();

    switch (iWeek){
        case 0:
            $('#week').text('周日');
            break;
        case 1:
            $('#week').text('周一');
            break;
        case 2:
            $('#week').text('周二');
            break;
        case 3:
            $('#week').text('周三');
            break;
        case 4:
            $('#week').text('周四');
            break;
        case 5:
            $('#week').text('周五');
            break;
        case 6:
            $('#week').text('周六');
            break;
    }

    if(iMonth < 9){
        iMonth = '0' + (iMonth + 1);
        $('#month').text(iMonth);
    } else {
        iMonth = iMonth + 1;
        $('#month').text(iMonth);
    }

    $('#day').text(iDay);

    $('#year').text(iYear);

});


function findWeather() {
    var cityUrl = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js';
    $.getScript(cityUrl, function(script, textStatus, jqXHR) {
        var citytq = remote_ip_info.city ;// 获取城市
        var url = "http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&city=" + citytq + "&day=0&dfc=3";
        $.ajax({
            url : url,
            dataType : "script",
            scriptCharset : "gbk",
            success : function(data) {
                var _w = window.SWther.w[citytq][0];
                var _f= _w.f1+"_0.png";
                if(new Date().getHours() > 17){
                    _f= _w.f2+"_1.png";
                }

                var tq =_w.s1;

                $('#weather').text(tq);
            }
        });
    });
}
findWeather();


