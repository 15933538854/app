var a = document.querySelectorAll('.lunbo li');

var len = a.length;

var index = 0;
a[index].style.display = 'block';
var timer = setInterval(function() {
    a[index].style.display = 'none';
    index++;
    if (index > len - 1) {
        index = 0
    }
    a[index].style.display = 'block';
}, 4000)

var inp = document.querySelector('.input-one input');
var b = document.querySelector('.xiala');
console.log(b)
inp.onfocus = function() {
    b.style.display = "block";
    this.value = "";

}
inp.onblur = function() {
    b.style.display = "none";
    this.value = "请输入区域、商圈或小区名开始找房";
}

$(function() {
    var dex = $('.nav-h li').index()
    dex.click(function() {




    })
})