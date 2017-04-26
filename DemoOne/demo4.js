/**
 * Created by Administrator on 2017/3/15.
 */

function createXHR() {
    if(typeof XMLHttpRequestUpload != 'undefined') {
        return new XMLHttpRequest();
    } else if(typeof ActiveXObject != 'undefined') {
        var version = [
            'MSXML2.XMLHttp.6.0',
            'MSXML2.XMLHttp.3.0',
            'MSXML2.XMLHttp'
        ];
        for(var i = 0; version.length; i++) {
            try{
                return new ActiveXObject(version[i]);
            } catch (e) {
                //跳过
            }
        }
    } else {
        throw new Error('您的系统或浏览器不支持XHR对象');
    }
}

var xhr = createXHR();
xhr.open('get','demo4.php', false);