/**
 * Created by Tiger Liu on 2018/9/7.
 */
//轮播图滑动操作
    //1.获得需要纪录起点结束的banner(滑动事件只能用dom绑定,这里只能用dom方式获得元素)
var wjsBanner = document.querySelector('.carousel-inner');
//var carousel_inner=$(".carousel-inner")[0];
//console.log(carousel_inner);
//console.log(wjsBanner);
//2.获得当前轮播图
var banner = $('.carousel');

var startX, endX;
wjsBanner.addEventListener("touchstart",function(e){
    startX = e.targetTouches[0].clientX;
});
wjsBanner.addEventListener("touchend",function(e){
    endX = e.changedTouches[0].clientX;
    if(endX - startX > 0){
        //上一张
       banner.carousel('prev');
    }else if(endX - startX < 0){
        //下一张
        banner.carousel('next');
    }
});

/*初始化*/
$('[data-toggle="tooltip"]').tooltip();

/*实现滑动*/
var ul = $('.wjs_product .nav-tabs');
var lis = ul.find('li');
var totalWidth = 0;//总宽度
lis.each(function(index,value){
    totalWidth = totalWidth + $(value).outerWidth(true);
});
ul.width(totalWidth);
/*使用插件完成滑动*/
var myScroll = new IScroll('.tabs_parent',{
    /*设置水平滑动，不允许垂直滑动*/
    scrollX: true, scrollY: false
});














