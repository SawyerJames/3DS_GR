//------------------------------主函数：组件搭建---------------------------//
;$(function(){
	var h5 = new H5();
	//注册一个方法
	h5.whenAddPage = function(){
		this.addComponent('footer',{
			bg : 'img/footer.png',
			css : {
				opacity : 0,
				left : 0,
				bottom : -20,
				width : '100%',
				height : '20px',
				zIndex : 999,
			},
			animateIn : {
				opacity : 1,
				bottom : '-1px',
			},
			animateOut : {
				opacity : 0,
				bottom : '-20px',
			}
		})
	}

	//json获取远端数据-->>进行页面加载
	$.getJSON('data.json',function(json){
		$.each(json,function(i,item){
			if (item.isPage) {
				h5.addPage(item.name,item.text);
			}
			else{
				h5.addComponent(item.name,item.cfg);
			}
		});
		h5.loader([
			'img/tail_back.png',
			'img/tail_share.png',
			'img/tail_logo.png',
			'img/tail_slogan.png',
			'img/face_logo.png',
			'img/face_slogan.png',
			'img/face_img_left.png',
			'img/face_img_right.png',
			'img/description_bg.png',
			'img/p1_people.png'
		]);
	});
});