/**
 * Created by Tiger Liu on 2018/9/7.
 */
//�ֲ�ͼ��������
    //1.�����Ҫ��¼��������banner(�����¼�ֻ����dom��,����ֻ����dom��ʽ���Ԫ��)
var wjsBanner = document.querySelector('.carousel-inner');
//var carousel_inner=$(".carousel-inner")[0];
//console.log(carousel_inner);
//console.log(wjsBanner);
//2.��õ�ǰ�ֲ�ͼ
var banner = $('.carousel');

var startX, endX;
wjsBanner.addEventListener("touchstart",function(e){
    startX = e.targetTouches[0].clientX;
});
wjsBanner.addEventListener("touchend",function(e){
    endX = e.changedTouches[0].clientX;
    if(endX - startX > 0){
        //��һ��
       banner.carousel('prev');
    }else if(endX - startX < 0){
        //��һ��
        banner.carousel('next');
    }
});

/*��ʼ��*/
$('[data-toggle="tooltip"]').tooltip();

/*ʵ�ֻ���*/
var ul = $('.wjs_product .nav-tabs');
var lis = ul.find('li');
var totalWidth = 0;//�ܿ��
lis.each(function(index,value){
    totalWidth = totalWidth + $(value).outerWidth(true);
});
ul.width(totalWidth);
/*ʹ�ò����ɻ���*/
var myScroll = new IScroll('.tabs_parent',{
    /*����ˮƽ������������ֱ����*/
    scrollX: true, scrollY: false
});














