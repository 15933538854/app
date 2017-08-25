var len = $('.lunbo ul li').length;
var dex = $('.lunbo ul li').index();
$('.lunbot').eq(0).show();
$('.lunbo ul li').eq(0).show();
$('.lunbo ol li').eq(dex).addClass('active');

function run() {

    timer = setInterval(function() {
        $('.lunbo ul li').eq(dex).hide();
        $('.lunbo ol li').eq(dex).removeClass('active');
        $('.lunbot').eq(dex).hide();
        dex++;
        if (dex >= len) {
            dex = 0;
        }
        $('.lunbo ul li').eq(dex).show();


        $('.lunbo ol li').eq(dex).addClass('active');
        $('.lunbot').eq(dex).show();
        console.log(dex);
    }, 3000)
}

run();
$('.lunbo').mouseover(function() {


    clearInterval(timer)
}).mouseout(function() {
    run();


})


$('.lunbo ol li').mouseover(function() {
    // 鼠标移动到数字li之前,让数字的背景色消失
    $('ol li').eq(dex).removeClass('active');
    $('.lunbo ul li').eq(dex).hide();
    $('.lunbot').eq(dex).hide();
    // 移动到指定数字的位置(移到3位置,ul定位到-3*200)
    // 获取到当前的索引值
    dex = $(this).index();

    // 鼠标移动到数字li上,改变背景色
    $('ol li').eq(dex).addClass('active');
    $('.lunbo ul li').eq(dex).show();
    $('.lunbot').eq(dex).show();


})