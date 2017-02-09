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
				bottom : '0px',
			},
			animateOut : {
				opacity : 0,
				bottom : '-20px',
			}
		})
	}
	// 添加组件页面
	h5.addPage('face')
			.addComponent('topic',{
				bg : 'img/face_logo.png',
				css : {opacity:0},
				animateIn : {
					width: '90%',
					height: '90%',
					left:'4%',
					top:'10%',
					opacity:1
				},
				animateOut : {
					top:0,
					opacity:0
				},
			})
			.addComponent('slogan',{
				center : true,
				bg : 'img/face_slogan.png',
				css : {
					opacity:0,
					top:'30%',
					width : '70%',
					height : '70%',
				},
				animateIn : {
					left:'16%',
					opacity:1
				},
				animateOut : {
					left:'0%',
					opacity:0
				},
				delay : 500,
			})
			.addComponent('face_img_left',{
				bg : 'img/face_img_left.png',
				css : {
					width : '55%',
					height : '55%',
					opacity:0,
					left:'-20%',
					bottom:'-50%'
				},
				animateIn : {
					left:0,
					bottom:'-14%',
					opacity:1
				},
				animateOut : {
					left:'-50%',
					bottom:'-50%',
					opacity:0
				},
				delay : 1000,
			})
			.addComponent('face_img_right',{
				bg : 'img/face_img_right.png',
				css : {
					width : '45%',
					height : '45%',
					opacity:0,
					right:'-50%',
					bottom:'-50%'
				},
				animateIn : {
					right:0,
					bottom:'-5%',
					opacity:1
				},
				animateOut : {
					right:'-50%',
					bottom:'-50%',
					opacity:0
				},
				delay : 1100,
			})
		.addPage('page_desc')
			.addComponent('caption',{
				text : '3DS 游戏市场'
			})
			.addComponent('text',{
				bg : 'img/text.png',
				css : {
					width : '80%',
					height : '80%',
					left : '10%',
					opacity : 0,
				},
				animateIn : {
					opacity:1,
					top:'18%'
				},
				animateOut : {
					opacity:0,
					top:'-10%'
				},
			})
			.addComponent('desc',{
				bg : 'img/description_bg.png',
				css : {
					width : '82%',
					height : '82%',
					opacity : 0,
					left : '5%',
					top : '0%',
					padding : '15px',
					color : '#fff',
					fontSize : '14px',
					lineHeight : '18px',
					textAlign : 'justify'
				},
				text : '3DS任天堂次时代掌机一经发售，便快速拢占市场。游戏支持不仅有第一方著名的马里奥，口袋妖怪，塞尔达等。更有诸多第三方游戏厂家支持。此次盘点为2016~17年度3DS游戏发售量，竭力为你呈现最直观的，3DS的游戏市场数据。',
				animateIn : {
					opacity:1,
					top : '32%',
				},
				animateOut : {
					opacity:0,
					top:'0%',
				},
				delay : 1000,
			})
			.addComponent('people',{
				bg : 'img/p1_people.png',
				css : {
					opacity : 0,
					bottom : '-77%',
					width : '100%',
					height : '100%',
				},
				animateIn : {
					opacity : 1,
					bottom : '-66%',
				},
				animateOut : {
					opacity : 0,
					bottom : '-77%',
				},
				delay : 500,
			})
		.addPage('page_1')
			.addComponent('caption',{text:'3DS全球销量排名'})//polyline
			.addComponent('polyline',{
				type : 'Polyline',
				width : 1000,
				height : 550,
				//data数据[项目，比例，颜色]
				data : [
					['No.1', .95,'#FFE801'],
					['No.2', .81],
					['No.3', .74],
					['No.4', .71],
					['No.5', .65],
					['No.6', .62],
					['No.7', .51],
					['No.8', .34],
					['No.9', .31],
					['No.10', .28],
				],
				css : {
					top :'0%',
					opacity : 0
				},
				animateIn:{
					top : '30%',
					opacity : 1
				},
				animateOut:{
					top : '0%',
					opacity : 0
				},
			})
		.addPage('page_1_dsc')
			.addComponent('caption',{text:'3DS全球销量排名'})
			.addComponent('msg',{
				text : [
						['No.1:', '口袋妖怪XY', '1430万'],
						['No.2:', '马里奥卡丁车', '1219万'],
						['No.3:', '口袋妖怪蓝宝石复刻', '1126万'],
						['No.4:', '超级马里奥3D大陆', '1079万'],
						['No.5:', '新超级马里奥兄弟2', '981万'],
						['No.6:', '动物之森：新叶', '908万'],
						['No.7:', '任天堂大乱斗3DS', '744万'],
						['No.8:', '朋友聚会生活', '513万'],
						['No.9:', '路易鬼屋：暗月', '458万'],
						['No.10:', '塞尔达传说：时之笛', '420万'],
						],
				css : {
					width:'80%',
					top : '20%',
					left : '10%',
					opacity : 0,
				},
				animateIn : {
					opacity : 1,
				},
				animateOut : {
					opacity : 0,
				}
			})
		.addPage('page_2')
			.addComponent('caption',{text:'玩家消费周期'})//pie
			.addComponent('pie',{
				type : 'Pie',
				width : 400,
				height : 400,
				//data数据[项目，比例，颜色]
				data : [
					['首周', .4,'#FCBCBC'],
					['第二周', .25,'#7BD7F9'],
					['第三周', .15, '#FF9881'],
					['第四周', .1,'#57D04E'],
					['第五周', .1,'#DCE382'],
					['其他',.1,'#E0E0E0'],
				],
				css : {
					top :'0%',
					opacity : 0,
				},
				animateIn:{
					top : '30%',
					opacity : 1
				},
				animateOut:{
					top : '0%',
					opacity : 0
				},
				center : true,
			})
			.addComponent('msg',{
				slogan : '玩家消费程度随周数逐渐降低',
				sloganClass : 'slogan_pie',
				css : {
					opacity : 0,
					bottom : 100,
					textAlign : 'center',
					width : '100%',
					color : '#F51111',
					fontSize : '20px',
				},
				animateIn : {
					opacity : 1,
				},
				animateOut : {
					opacity : 0,
				},
				delay : 1700
			})
		.addPage('page_3')
			.addComponent('caption',{text:'口袋妖怪历代销量'})//bar
			.addComponent('bar',{
				type : 'Bar',
				width : 550,
				height : 650,
				//data数据[项目，比例，颜色]
				data : [
					['红/蓝宝石', .62,'16.4m','#0052FF'],
					['火红/叶绿', .5,'12m'],
					['绿宝石', .25 ,'6.3m'],
					['珍珠/钻石', .62,'16.5m','#FB059F'],
					['白金', .27,'7.6m'],
					['心金/魂银', .53,'12.7m'],
					['黑/白', .57,'15.6m'],
					['黑2/白2', .35,'8.5m'], 
					['XY', .62,'17.4m' ,'#FF2E00'],
					['红/蓝宝石复刻', .49,'11.9m']
				],
				css : {
					top :0,
					opacity : 0
				},
				animateIn:{
					top : '20%',
					opacity : 1
				},
				animateOut:{
					top : 0,
					opacity : 0
				},
				center : true,
			})
			.addComponent('msg',{
				slogan :'口袋妖怪XY荣居榜首！',
				sloganClass : 'slogan_bar',
				css : {
					opacity : 0,
					bottom : 100,
					textAlign : 'center',
					width : '100%',
					color : '#F51111',
					fontSize : '20px',
				},
				animateIn : {
					opacity : 1,
				},
				animateOut : {
					opacity : 0,
				},
				delay : 1500
			})
		.addPage('page_4')
			.addComponent('caption',{text:'首周!Fami通评分'})//radar
			.addComponent('Radar',{
				type : 'radar',
				width : 500,
				height : 500,
				//data数据[项目，比例，颜色]
				data : [
					['口袋妖怪XY', .65,'#c3e5ff'],
					['跳出!动物之森', .65,'#c3e5ff'],
					['怪物猎人4', .55, '#c3e5ff'],
					['妖怪手表2', .35,'#c3e5ff'],
					['口袋妖怪复刻', .45,'#c3e5ff'],
				],
				css : {
					bottom :0,
					opacity : 0
				},
				animateIn:{
					top : '24%',
					opacity : 1
				},
				animateOut:{
					bottom : 0,
					opacity : 0
				},
				center : true,
			})
			.addComponent('msg',{
				slogan :'口袋妖怪XY获得39分！',
				sloganClass : 'slogan_radar',
				css : {
					opacity : 0,
					bottom : 100,
					textAlign : 'center',
					width : '100%',
					color : '#F51111',
					fontSize : '20px',
				},
				animateIn : {
					opacity : 1,
				},
				animateOut : {
					opacity : 0,
				},
				delay : 2000
			})
		.addPage('page_5')
			.addComponent('caption',{text:'国际游戏销售比例'})//point
			.addComponent('point',{
				type : 'Point',
				width : 250,
				height : 250,
				//data数据[项目，比例，颜色，X偏移，Y偏移]
				data : [
					['日本', .3, '#FC7C7C'],
					['欧洲', .2, '#A3F6F5', '70%', '-70%'],
					['北美', .1, '#13DB64','-40%', '-50%'],
					['中国港台', .15, '#D5E86D','-55%', '90%'],
					['其他', .25, '#FF7CDB', '75%', '110%']
				],
				css : {
					bottom : 0,
					opacity : 0
				},
				animateIn:{
					bottom : '40%',
					opacity : 1
				},
				animateOut:{
					bottom : 0,
					opacity : 0
				},
				center : true,
			})
		.addPage('tail')
			.addComponent('tail_logo',{
				bg : 'img/tail_logo.png',
				css : {
					width : '70%',
					height : '70%',
					opacity : 0,
					left :'17%',
					top : '50%',
				},
				animateIn : {
					opacity : 1,
					top : '30%',
				},
				animateOut : {
					opacity : 0,
					top : '100%',
				},
			})
			.addComponent('slogan',{
				bg : 'img/tail_slogan.png',
				css : {
					width : '50%',
					height : '50%',					
					opacity : 0,
					top : '45%',
					left : 0,
				},
				animateIn : {
					opacity : 1,
					left : '26%',
				},
				animateOut : {
					opacity : 0,
					left : '0',
				},
				delay : 500,
			})
			.addComponent('tail_share',{
				bg : 'img/tail_share.png',
				css : {
					width : '25%',
					height : '25%',
					opacity : 0,
					top : '100%',
				},
				animateIn : {
					opacity : 1,
					top : 0,
					right : '1%',
				},
				animateOut : {
					opacity : 0,
					top : '100%',
					right : '100%',
				},
				delay : 800,
			})
			.addComponent('tail_back',{
				bg : 'img/tail_back.png',
				css : {
					width : '10%',
					height : '10%',
					opacity : 0,
					left: '45%',
					top : '5%',
				},
				animateIn : {
					opacity : 1,
					top : '0',
				},
				animateOut : {
					opacity : 0,
					top : '5%',
				},
				class: 'backBtn',
				onclick : {
					function(){
						$.fn.fullpage.moveTo(1);
					}
				}
			})
		.loader(9
			['img/tail_back.png',
				'img/tail_share.png',
				'img/tail_logo.png',
				'img/tail_slogan.png',
				'img/face_logo.png',
				'img/face_slogan.png',
				'img/face_img_left.png',
				'img/face_img_right.png',
				'img/description_bg.png',
				'img/p1_people.png']
				);
	// $.getJSON('data.json',function(json){
	// 	$.each(json,function(i,item){
	// 		if (item.isPage) {
	// 			h5.addPage(item.name,item.text);
	// 		}
	// 		else{
	// 			h5.addComponent(item.name,item.cfg);
	// 		}
	// 	});
	// 	h5.loader([
	// 		'img/tail_back.png',
	// 		'img/tail_share.png',
	// 		'img/tail_logo.png',
	// 		'img/tail_slogan.png',
	// 		'img/face_logo.png',
	// 		'img/face_slogan.png',
	// 		'img/face_img_left.png',
	// 		'img/face_img_right.png',
	// 		'img/description_bg.png',
	// 		'img/p1_people.png'
	// 	]);
	// });
});