function H5_loading(images,firstPage){
	//loading函数 使用图片加载量来判定载入进入
	var id = this.id;
	if (this._images === undefined) { //第一次进入
		this._images = ( images || [] ).length; //取出数组长度
		this._loaded = 0;
		window[id] = this; //把当前对象存储在全局对象window中，用来进行某个图片加载完成后的回调
		for (s in images){
			var item = images[s];
			var img = new Image;  //创建图片对象
			img.onload = function(){
				window[id].loader();  //第二次以后载入，从此进入
			}
			img.src = item;
		}
		$('#rate').text('0%');
		return this;
	}
	else{
		this._loaded ++;  //计数器
		$('#rate').text(((this._loaded / this._images * 100)>>0)+'%');
		if (this._loaded < this._images) {
			return this;
		}
	window[id] = null;
	}

	//重写H5的fullpage，实现fullpage功能
	this.el.fullpage({
		'sectionsColor':['#000000'],
		onLeave:function(index,nextIndex,direction){
			$(this).find('.h5_component').trigger('onLeave');
		},
		afterLoad:function(anchorLink,index){
			$(this).find('.h5_component').trigger('afterLoad');
		},
	});
	this.page[0].find('.h5_component').trigger('afterLoad');
	this.el.show();
	//$.fn 指jq的命名空间，加上fn上的方法及属性，会对每一个jq实例有效。
	//eg. $.fn.abc(); -->之后可以使用$('#div').abc();
	if (firstPage) {
		$.fn.fullpage.moveTo(firstPage);
	}

	//各类注册按钮事件
	$('.backBtn').on('click',function(){
		$.fn.fullpage.moveTo(1)
	});
}