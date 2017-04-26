/**
 * Created by Administrator on 2017/3/15.
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

    //天气预报
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
                var img = "<img width='80px' height='80px' src='http://i2.sinaimg.cn/dy/main/weather/weatherplugin/wthIco/20_20/" +_f
                    + "' />";
                $('#city').text(citytq);
                $('#img').html(img);
                $('#weath').text(_w.s1);
                $('#temperature').text(_w.t1 + "℃～" + _w.t2 + "℃ ");
                $('#wind').text(_w.d1 + _w.p1 + "级");
            }
        });
    });

});

//jQuery弹出层
$.fn.extend({

    OpenDiv: function () {
        var sWidth, sHeight;
        sWidth = window.screen.availWidth;
        if(window.screen.availHeight > document.body.scrollHeight) {
            sHeight = window.screen.availHeight;
        } else {
            sHeight = document.body.scrollHeight + 20;
        }
        var maskObj = document.createElement("div");            //创建一个div盒子
        maskObj.setAttribute('id', 'BigDiv');                     //给这个div盒子命令id=BigDiv
        maskObj.style.position = "absolute";                     //BigDiv盒子的定位是absolute绝对定位
        maskObj.style.top = "0";                                    //到顶部的距离为0
        maskObj.style.left = "0";                                    //到左边的距离为0
        maskObj.style.background = "#dddddd";                      //背景颜色
        maskObj.style.filter = "Alpha(opacity=70);";                //设置ie滤镜
        maskObj.style.opacity = "0.7";                                  //设置div元素的不透明度
        maskObj.style.width = sWidth + "px";                            //maskObj的长度为屏幕的宽度
        maskObj.style.height = sHeight + "px";                           //maskobj的长度为屏幕的长度
        maskObj.style.zIndex = "10000";
        $("body").attr("scroll", "no");                                    //body不滑动
        document.body.appendChild(maskObj);                                  //把maskObj添加进body
        $("#BigDiv").data("divbox_selectlist", $("select:visible"));
        $("select:visible").hide();
        $("#BigDiv").attr("divbox_scrolltop", $.ScrollPosition().Top);
        $("#BigDiv").attr("divbox_scrollleft", $.ScrollPosition().Left);
        $("#BigDiv").attr("htmloverflow", $("html").css("overflow"));
        $("html").css("overflow", "hidden");
        window.scrollTo($("#BigDiv").attr("divbox_scrollleft"), $("#BigDiv").attr("divbox_scrolltop"));
        var MyDiv_w = this.width();
        var MyDiv_h = this.height();
        MyDiv_w = parseInt(MyDiv_w);                             //MyDiv_w的宽转换为数字类型
        MyDiv_h = parseInt(MyDiv_h);                             //MyDiv_w 的高转换为数字类型
        var width = $.PageSize().Width;
        var height = $.PageSize().Height;
        var left = $.ScrollPosition().Left;
        var top = $.ScrollPosition().Top;
        var Div_topposition = top + (height / 2) - (MyDiv_h / 2);
        var Div_leftposition = left + (width / 2) - (MyDiv_w / 2);
        this.css("position", "absolute");
        this.css("z-index", "10001");
        this.css("background", "#dddddd");
        this.css("left", Div_leftposition + "px");
        this.css("top", Div_topposition + "px");
        this.css("box-shadow", "2px 2px 5px #000");
        if ($.browser.mozilla)
        {
            this.show();
            return;
        }
        this.fadeIn("fast");

    }
    , CloseDiv: function()
    {

        if ($.browser.mozilla)
        {
            this.hide();

        } else
        {
            this.fadeOut("fast");

        } $("html").css("overflow", $("#BigDiv").attr("htmloverflow"));
        window.scrollTo($("#BigDiv").attr("divbox_scrollleft"), $("#BigDiv").attr("divbox_scrolltop"));
        $("#BigDiv").data("divbox_selectlist").show();
        $("#BigDiv").remove();

    }

});
$.extend(
    {
        PageSize:function ()
        {
            var width=0;
            var height=0;
            width=window.innerWidth!=null?window.innerWidth:document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:document.body!=null?document.body.clientWidth:null;
            height=window.innerHeight!=null?window.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:document.body!=null?document.body.clientHeight:null;
            return {Width:width,Height:height};
        }
        ,ScrollPosition:function ()
    {
        var top=0,left=0;
        if($.browser.mozilla)
        {
            top=window.pageYOffset;
            left=window.pageXOffset;

        }
        else if($.browser.msie)
        {
            top=document.documentElement.scrollTop;
            left=document.documentElement.scrollLeft;

        }
        else if(document.body)
        {
            top=document.body.scrollTop;
            left=document.body.scrollLeft;
        }
        return {Top:top,Left:left};

    }

});

//生成二维码
$(function () {

    jQuery('#sidebar').qrcode({
        width : 300,
        height : 300,
        text : "http://weibo.com/u/5107711629?topnav=1&wvr=6&topsug=1"
    });
});