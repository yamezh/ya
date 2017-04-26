/**
 * Created by Administrator on 2017/3/7.
 */
//jquery倒计时按钮常用于验证码倒计
function buttonCountdown($el, msNum, timeFormat) {
    var text = $el.data("text") || $el.text();
    timer = 0;
    $el.prop("disabled", true).addClass("disabled").on("bc.clear", function () {
        clearTime();
    });
    
    (function countdown() {
        var time = showTime(msNum)[timeFormat];
        $el.text(time + '后失效');
        if(msNum <= 0) {
            msNum = 0;
            clearTime();
        } else {
            msNum -= 1000;
            timer = setTimeout(arguments.callee, 1000);
        }
    })();
    
    function clearTime() {
        clearTimeout(timer);
        $el.prop("disabled", false).removeClass("disabled").text(text);
    }

    
    function showTime(ms) {
        var d = Math.floor(ms / 1000 / 60 / 60 / 24),
            h = Math.floor(ms / 1000 / 60 / 60 % 24),
            m = Math.floor(ms / 1000 / 60 % 60),
            s = Math.floor(ms / 1000 % 60),
            ss = Math.floor(ms / 1000);

        return {
            d: d + "天",
            h: h + "小时",
            m: m + "分",
            ss: ss + "秒",
            "d:h:m:s": d + "天" + h + "小时" + m + "分" + s + "秒",
            "h:m:s": h + "小时" + m + "分" + s + "秒",
            "m:s": m + "分" + s + "秒"
        };
    }
    return this;
}


$("#text1").on("click", function () {
    buttonCountdown($(this), 1000 * 60 * 3, "ss");
});

$("#text2").on("click", function () {
   buttonCountdown($(this), 1000 * 60 * 3, "m:s");
});

$("#text3").on("click", function () {
   buttonCountdown($(this), 1000 * 60 * 3, "h:m:s");
});

$("#text4").on("click", function () {
   buttonCountdown($(this), 1000 * 60 * 3, "d:h:m:s");
});

$("#test1-clear").on("click", function () {
   $("#text1").trigger("bc.clear");
});


