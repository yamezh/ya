/**
 * Created by Administrator on 2017/3/6.
 */
/**
* @yamezh
 * 时间倒计时
*
function times() {
    var times = new Date();
    //var localedata = times.toLocaleDateString();          //获取当前日期 格式为yy-mm-dd
    var year = times.getFullYear();                         //获取当前年份
    var month = (times.getMonth() + 1);                    //获取当前月份
    var date = times.getDate();                       //获取当前几日
    //var day = times.getDay();                          //获得当前星期几
    //var time = times.getTime();                    // 获取当前时间从1970年开始从毫秒
    var hours = times.getHours();                    //获取当前时钟
    var minutes = times.getMinutes();                //获取当前分钟
    var seconds = times.getSeconds();                 //获取当前秒针数
    var days;


    //计算剩下多少天
    if(year % 4 == 0 && (year % 100) != 0 || (year % 400 == 0)){           //如果当前年份能被4整除并且不能被100整除
                                                                   // ,或者能被400整数的是闰年
        switch (month){
            case 1:
                days = 31 - date + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31;
                break;
            case 2:
                days = 31 + 29 - date + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31;
                break;
            case 3:
                days = 31 + 29 + 31 - date + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31;
                break;
            case 4:
                days = 31 + 29 + 31 + 30 - date + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31;
                break;
            case 5:
                days = 31 + 29 + 31 + 30 + 31 - date + 30 + 31 + 31 + 30 + 31 + 30 + 31;
                break;
            case 6:
                days = 31 + 29 + 31 + 30 + 31 + 30 - date + 31 + 31 + 30 + 31 + 30 + 31;
                break;
            case 7:
                days = 31 + 29 + 31 + 30 + 31 + 30 + 31 - date + 31 + 30 + 31 + 30 + 31;
                break;
            case 8:
                days = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 - date + 30 + 31 + 30 + 31;
                break;
            case 9:
                days = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 - date + 31 + 30 + 31;
                break;
            case 10:
                days = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 - date + 30 + 31;
                break;
            case 11:
                days = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 - date + 31;
                break;
            case 12:
                days = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 - date;
                break;
        }
    } else {
        switch (month){
            case 1:
                days = 31 - date + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31;
                break;
            case 2:
                days = 31 + 28 - date + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31;
                break;
            case 3:
                days = 31 + 28 + 31 - date + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31;
                break;
            case 4:
                days = 31 + 28 + 31 + 30 - date + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31;
                break;
            case 5:
                days = 31 + 28 + 31 + 30 + 31 - date + 30 + 31 + 31 + 30 + 31 + 30 + 31;
                break;
            case 6:
                days = 31 + 28 + 31 + 30 + 31 + 30 - date + 31 + 31 + 30 + 31 + 30 + 31;
                break;
            case 7:
                days = 31 + 28 + 31 + 30 + 31 + 30 + 31 - date + 31 + 30 + 31 + 30 + 31;
                break;
            case 8:
                days = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 - date + 30 + 31 + 30 + 31;
                break;
            case 9:
                days = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 - date + 31 + 30 + 31;
                break;
            case 10:
                days = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 - date + 30 + 31;
                break;
            case 11:
                days = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 - date + 31;
                break;
            case 12:
                days = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 - date;
                break;
        }
    }

    //var mon = ((days - 1) * 24) + (24 - hours);               //剩下多少小时
    //var min = ((mon - 1) * 60) + (60 - minutes );             //剩下多少分钟
    //var second = ((min - 1) * 60) + (60 - seconds);          //剩下多少秒
    //alert(year + '年还剩下' + '还剩下' + (days - 1) +'天' +'还剩下'+ mon + '时'+ '还剩下' + min +'分' + '还剩下' + second + '秒');

    alert(year + '年还剩下' + '还剩下' + (days - 1) +'天'+ (24 - hours) + '小时' + ( 60 - minutes) + '分' + (60 - seconds) + '秒');

}
times();
*/


/**
 *@yamezh
 * 不同时间段显示不同问候语

window.onload = function () {
    var mydate = new Date();
    var hour = mydate.getHours();
    if(0 < hour && hour < 7) {
        alert("夜猫子，要注意身体哦! ");
    } else if(7 <= hour && hour < 12) {
        alert("今天的阳光真灿烂啊，你那个朋友呢?" );
    } else if( 12 <= hour && hour < 14) {
        alert("午休时间。您要保持睡眠哦!");
    } else if(14 <= hour && hour < 18) {
        alert("祝您下午工作愉快! ");
    } else if(18 <= hour && hour < 22){
        alert("您又来了，可别和MM聊太久哦!");
    } else if(22 <= hour && hour < 24) {
        alert("您应该休息了!");
    }
}
*/

/*
*@yamezh
*页面每秒自动刷新显示背景图片
*
    window.onload = function () {
    image = new Array(4); //定义image为图片数量的数组　　
    image [0] = 'images/1.png'; //背景图象的路径　　
    image [1] = 'images/2.png';
    image [2] = 'images/3.png';
    image [3] = 'images/4.png';
    image [4] = 'images/5.png';
    number = Math.floor(Math.random() * image.length);
    document.write("<BODY BACKGROUND=" + image[number] + ">");
}
function myrefresh(){
    window.location.reload();
}
setTimeout('myrefresh()',1000); //指定1秒刷新一次
*/