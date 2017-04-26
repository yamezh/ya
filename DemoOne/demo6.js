/**
 * Created by Administrator on 2017/3/15.
 */
/**
 * Created by Administrator on 2017/3/15.
 */

($(function () {
    $('button').live('click', function(e) {
        e.preventDefault();
        var modalLocation = $(this).attr('data-reveal-id');
        $('#'+modalLocation).reveal($(this).data());
    });
}));