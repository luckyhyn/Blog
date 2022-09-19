function about(dom){
	modifyNav(dom)
	
	$("#content").html(
		'<div class="author_box">'+
			'<div class="author_info_header">'+
				'<div class="author_picture">'+
					'<img src="./img/avatar.jpg" alt="">'+
				'</div>'+
				'<div class="author_info_header_top_l">'+
					'<div class="header_top_l_center_t">'+
						'<p class="author_name">小马</p>'+
						'<p><i class="glyphicon glyphicon-time"></i>码龄2年</p>'+
						'<p>3434 总访问量</p>'+
						'<p>4 原创</p>'+
						'<p>234 排名</p>'+
						'<p>23 粉丝</p>'+
						'<p>1 铁粉</p>'+
						'<div>'+
							'<input type="button" value="关注">'+
						'</div>'+
					'</div>'+
				'</div>'+
				'<div class="author_info_header_top_r"></div>'+
				'<div class="author_info_header_bottom"></div>'+
			'</div>'+
			'<div class="author_content">'+
				'<div class="author_left">'+
					'<div class="author_influence">'+
						'<div class="influence_img">'+
							'<img src="./img/degrad.png" alt="">'+
							'<div>'+
								'<i>0</i>'+
								'<a>领奖<i class="glyphicon glyphicon-chevron-right"></i> </a>'+
							'</div>'+
						'</div>'+
						'<div class="author_marknum">'+
							'<p>总分<span>0</span>当月<span>0</span></p>'+
						'</div>'+
					'</div>'+
					'<div class="author_achive">'+
						'<div class="author_achive_head">个人成就</div>'+
						'<div class="achivelist">'+
							'<ul>'+
								'<li><img src="img/dianzan.png" alt="">获得<span>0</span>点赞</li>'+
								'<li><img src="img/pinlun.png" alt="">内容获得<span>0</span>次评论</li>'+
								'<li><img src="img/shoucang.png" alt="">获得<span>0</span>收藏</li>'+
							'</ul>'+
						'</div>'+
					'</div>'+
					'<div class="author_interest">'+
						'<div>兴趣领域</div>'+
						'<ul>'+
							'<li>运动</li>'+
							'<li>编程</li>'+
							'<li>写作</li>'+
						'</ul>'+
					'</div>'+
					'<div class="self_introduce">'+
						'<div>关于作者</div>'+
						'<p>小马，一个独立开发者，折腾在 0 和 1 世界的大叔；一个终身学习者，誓将学习无限循环. 希望结识可以共同成长的小伙伴.</p>'+
						'<p>热爱编程，喜欢折腾，正在探索高效学习编程技术的方法...</p>'+
					'</div>'+
				'</div>'+
				'<div class="author_right">'+
					'<div class="author_navlist">'+
						'<ul>'+
							'<li><a href="">最近</a></li>'+
							'<li><a href="">文章</a></li>'+
							'<li><a href="">资源</a></li>'+
							'<li><a href="">帖子</a></li>'+
							'<li><a href="">视频</a></li>'+
							'<li><a href="">收藏</a></li>'+
							'<li><a href="">课程</a></li>'+
						'</ul>'+
					'</div>'+
					'<div class="author_mainContent">'+
						'<div class="author_content_list">'+
							'<div class="author_item">'+
								'<h3><a href="">LeetCode-001两数之和</a></h3>'+
								'<p><a href="">给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标</a></p>'+
								'<div>'+
									'<div class="author_item_img"><img src="./img/avatar.jpg" alt=""></div>'+
									'<div class="author_item_name">小马</div>'+
									'<div class="author_item_time"><i class="glyphicon glyphicon-calendar"></i>2022-05-22</div>'+
									'<div class="author_item_num"><i class="glyphicon glyphicon-eye-open"></i>59</div>'+
									'<div class="author_item_sign">学习笔记</div>'+
								'</div>'+
							'</div>'+
							'<div class="author_img"><img src="./img/about.jpeg" alt="" width="100"></div>'+
							'<div class="author_item_line"></div>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>'
	)
}
function authorInfo(mes){
	about();
	console.log(mes)
	var author_artical=""
	var authorName=""
	for(var i=0;i<data.length;i++){
		if(mes==data[i].id){
			authorName=data[i].username;
			console.log(data[i].id)
				author_artical += '<div class="author_content_list">'+
					'<div class="author_item">'+
						'<h3><a href="">'+data[i].title+'</a></h3>'+
						'<p><a href="">'+data[i].content+'</a></p>'+
						'<div>'+
							'<div class="author_item_img"><img src="'+data[i].avatar+'" alt=""></div>'+
							'<div class="author_item_name">'+data[i].username+'</div>'+
							'<div class="author_item_time"><i class="glyphicon glyphicon-calendar"></i>'+data[i].time+'</div>'+
							'<div class="author_item_num"><i class="glyphicon glyphicon-eye-open"></i>'+data[i].num+'</div>'+
							'<div class="author_item_sign">'+data[i].sign+'</div>'+
						'</div>'+
					'</div>'+
					'<div class="author_img"><img src="'+data[i].img+'" alt="" width="100"></div>'+
					'<div class="author_item_line"></div>'+
				'</div>'
		}
	}
	$(".author_mainContent").html(author_artical);
	$(".author_name").html(authorName);
	console.log(author_artical)
}