var data = [{
		id: 1,
		title: "LeetCode-001 两数之和",
		content: "给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。",
		avatar: "./img/avatar.jpg",
		username: "小马",
		time: "2022-05-22",
		num: "59",
		sign: "学习笔记",
		img: "./img/leetCode.jfif"
	},
	{
		id: 2,
		title: "关于MySQL面试100个常见问题",
		content: "本文主要受众为开发人员,所以不涉及到MySQL的服务部署等操作",
		avatar: "./img/avatar.jpg",
		username: "小灰",
		time: "2021-02-22",
		num: "1550",
		sign: "面试整理",
		img: "./img/mysql.jpeg"
	},
	{
		id: 3,
		title: "Linux系统使用Yum命令安装Java环境",
		content: "Linux上安装软件，可以用yum非常方便，不需要下载解压，也不需要配置环境变量,一个指令就能完成",
		avatar: "./img/avatar.jpg",
		username: "小马",
		time: "2022-02-22",
		num: "163",
		sign: "教程",
		img: "./img/linux.jpeg"
	},
	{
		id: 4,
		title: "SpringBoot项目部署云服务器详细步骤",
		content: "此篇文章将详细介绍如何将自己的SpringBoot项目部署到各大互联网公司提供的在线云解决方案,并且能从外网直接访问",
		avatar: "./img/avatar.jpg",
		username: "小马",
		time: "2022-05-22",
		num: "59",
		sign: "教程",
		img: "./img/spring.jpeg"
	},
	{
		id: 5,
		title: "Git以及Github使用指南",
		content: "GitHub于2008年4月10日正式上线，除了Git代码仓库托管及基本的Web管理界面以外，还提供了订阅、讨论组、文本渲染、在线文件编辑器、协作图谱（报表）、代码片段分享（Gist）等功能",
		avatar: "./img/avatar.jpg",
		username: "小马",
		time: "2022-05-22",
		num: "59",
		sign: "教程",
		img: "./img/git.jpeg"
	}
]


// 根据下标获取数据
function getContentList(i) {
	return '<div class="content_list">' +
		'<div class="item">' +
		'<h3><a onclick="getDetails(' + data[i].id + ')">' + data[i].title + '</a></h3>' +
		'<p><a onclick="getDetails(' + data[i].id + ')">' + data[i].content + '</a></p>' +
		'<img src="' + data[i].avatar + '" alt="图片被偷了" class="head_photo">' +
		'<div class="author_name" onclick="authorInfo('+data[i].id+')">' + data[i].username + '</div>' +
		'<div class="date"><i class="glyphicon glyphicon-calendar"></i>' + data[i].time + '</div>' +
		'<div class="count"><i class="glyphicon glyphicon-eye-open"></i>' + data[i].num + '</div>' +
		'<div class="classfy">' + data[i].sign + '</div>' +
		'</div>' +
		'<div class="img"><img src="' + data[i].img + '" alt="图片被偷了" onclick="getDetails(' + data[i].id + ')"></div>' +
		'<div class="item_line"></div>' +
		'</div>'
}


function indexPage(dom) {
	modifyNav(dom)
	var str1 = ""
	var str2 = ""
	var str3 =
		'<div class="row">' +
		'					<div class="col-md-9">' +
		'						<div class="content">' +
		'							<!-- 头 -->' +
		'							<div class="content_header">' +
		'								<div>' +
		'									<i class="glyphicon glyphicon-th-list"></i>' +
		'									博客列表' +
		'								</div>' +
		'								<div>' +
		'									共<span id="tatal">0</span>篇' +
		'								</div>' +
		'							</div>' +
		'							<!-- 内容 -->' +
		'							<div id="content_box">' +
		'								' +
		'							</div>' +
		'						</div>' +
		'					</div>' +
		'					<div class="col-md-3">' +
		'						<div class="content">' +
		'							<div class="content_header">' +
		'								<div>' +
		'									<i class="glyphicon glyphicon-th-list"></i>' +
		'									博客分类' +
		'								</div>' +
		'								<div>' +
		'									<a href="">更多<i class="glyphicon glyphicon-menu-right"></i></a>' +
		'								</div>' +
		'							</div>' +
		'							<div class="content_box">' +
		'								<ul>' +
		'									<li>教程<span>3<i></i></span></li>' +
		'									<li>学习笔记<span>1<i></i></span></li>' +
		'									<li>面试整理<span>1<i></i></span></li>' +
		'									<li>程序人生<span>0<i></i></span></li>' +
		'									<li>踩坑记录<span>0<i></i></span></li>' +
		'								</ul>' +
		'							</div>' +
		'						</div>' +
		'						<div class="content">' +
		'							<div class="content_header">' +
		'								<div>' +
		'									<i class="glyphicon glyphicon-th-list"></i>' +
		'									博客标签' +
		'								</div>' +
		'								<div>' +
		'									<a href="">更多<i class="glyphicon glyphicon-menu-right"></i></a>' +
		'								</div>' +
		'							</div>' +
		'							<div class="content_box">' +
		'								<ul class="right-ul2">' +
		'									<li><span>HTML<i></i></span></li>' +
		'									<li><span>css<i></i></span></li>' +
		'									<li><span>js<i></i></span></li>' +
		'									<li><span>Liux2<i></i></span></li>' +
		'									<li><span>Liux2<i></i></span></li>' +
		'									<li><span>js<i></i></span></li>' +
		'									<li><span>js<i></i></span></li>' +
		'									<li><span>js<i></i></span></li>' +
		'								</ul>' +
		'							</div>' +
		'						</div>' +
		'						<div class="content">' +
		'							<div class="content_header">' +
		'								<div>' +
		'									<i class="glyphicon glyphicon-bookmark"></i>' +
		'									博客推荐' +
		'								</div>' +
		'								<div></div>' +
		'							</div>' +
		'							<div class="content_box" id="content_box2">' +
		'								<ul id="blogRec">' +
		'									<li>教程</li>' +
		'									<li>学习笔记</li>' +
		'									<li>面试整理</li>' +
		'									<li>程序人生</li>' +
		'									<li>踩坑记录</li>' +
		'								</ul>' +
		'							</div>' +
		'						</div>' +
		'					</div>' +
		'				</div>'
		
	for (var i = 0; i < data.length; i++) {
		str1 += getContentList(i)
		str2 += '<li>' + data[i].title + '</li>'
	}
	
	$("#content").html(str3)
	$("#content_box").html(str1)
	$("#tatal").html(data.length)
	$("#blogRec").html(str2)
}

function modifyNav(dom) {
	var id = dom.id
	$("#" + id).addClass("menuSlected").siblings().removeClass("menuSlected")
}

// 开始点击首页
window.onload = function(){
	$("#li1").click()
}
