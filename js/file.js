//博客归档页

function file(dom) {
	modifyNav(dom)
	// $("#test>a").css("background-color","none")
	// $("#qqq").css("background-color","rgba(255,255,255,.15)")
	//先把标题加载出来
	var title='<div class="row">'+
			'<div class="col-md-10 col-md-offset-1" style="margin-top: 40px;">'+
				'<div class="content">'+
					'<div class="file_head">'+
						'<div><i></i>博客归档</div>'+
						'<div>共<span id="total">' +'&nbsp;'+data.length+ '&nbsp;'+'</span>篇结果</div>'+
					'</div>'+
			   '</div>'+
			'</div>'+
		'</div>'
	$("#content").html(title)
	// //创建时间数组，开始截取时间
	// var years=[]
	// for (var i = 0; i < data.length; i++) {
	// 	//截取data里面数据的时间
	// 	var year = data[i].time.substr(0, 4);
	// 	var flag=true;
	// 	for(var j=0;j<years.length;j++){
	// 		if(years[j]==year){
	// 			flag=false;
	// 		}
	// 	}
	// 	if(flag){
	// 		//push尾部添加元素
	// 		//给years时间数组添加多一个数组元素
	// 		years.push(year)
	// 	}
	// }
	
	// //对时间进行排序
	// years.sort()
	var yearsArr=[2021,2022]
	var datas=[
		{id:1,title:"LeetCode-001 两数之和",content:"给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。",avatar:"./images/avatar.jpg",username:"小马",time:"2022-05-22",num:"59",sign:"学习笔记",img:"./images/about.jpeg",year:"2022"},
		{id:2,title:"关于MySQL面试100个常见问题",content:"本文主要受众为开发人员,所以不涉及到MySQL的服务部署等操作",avatar:"./images/avatar.png",username:"小灰",time:"2021-02-22",num:"1550",sign:"面试整理",img:"./images/about.jpeg",year:"2021"},
		{id:3,title:"Linux系统使用Yum命令安装Java环境",content:"Linux上安装软件，可以用yum非常方便，不需要下载解压，也不需要配置环境变量,一个指令就能完成",avatar:"./images/avatar.jpg",username:"小马",time:"2022-02-22",num:"163",sign:"教程",img:"./images/about.jpeg",year:"2022"},
		{id:4,title:"SpringBoot项目部署云服务器详细步骤",content:"此篇文章将详细介绍如何将自己的SpringBoot项目部署到各大互联网公司提供的在线云解决方案,并且能从外网直接访问",avatar:"./images/avatar.jpg",username:"小马",time:"2022-05-22",num:"59",sign:"教程",img:"./images/about.jpeg",year:"2022"},
		{id:4,title:"SpringBoot项目部署云服务器详细步骤",content:"此篇文章将详细介绍如何将自己的SpringBoot项目部署到各大互联网公司提供的在线云解决方案,并且能从外网直接访问",avatar:"./images/avatar.jpg",username:"小马",time:"2022-05-22",num:"59",sign:"教程",img:"./images/about.jpeg",year:"2022"},
		{id:5,title:"Git以及Github使用指南",content:"GitHub于2008年4月10日正式上线，除了Git代码仓库托管及基本的Web管理界面以外，还提供了订阅、讨论组、文本渲染、在线文件编辑器、协作图谱（报表）、代码片段分享（Gist）等功能",avatar:"./images/avatar.jpg",username:"小马",time:"2022-05-22",num:"59",sign:"教程",img:"./images/about.jpeg",year:"2022"}
	]
	//开始加载页面下半部分
	var str='<div class="file_box">'
	for(var j=0;j<yearsArr.length;j++){
		str+='<div class="file_list" style="text-align:center">'+
		     '<h3>'+yearsArr[j]+'年</h3>'+
		     '<div class="file_item">'
		//与时间数组中数据匹配，把匹配的内容数据过滤出来
		for(var i=0;i<datas.length;i++){
			// if(years[j]==data[i].time.substr(0,4)){
				if(yearsArr[j]==datas[i].year){
				str += '<ul class="file_content">'+
				'<li onclick="details('+datas[i].id+')">'+
						'<h4>'+datas[i].title+'</h4>'+
						'<div class="time"><i class="glyphicon glyphicon-calendar"></i>'+datas[i].time+'</div>'+
						'<div class="num"><i class="glyphicon glyphicon-eye-open"></i>'+datas[i].num+'</div>'+
						'<span><i></i>原创</span>'+
						'</li>'+
						'</ul>'		
			}
			
		}
		str+='</div>'+
		     '</div>'
		     
	}
	str+='</div>'
	$(".content").append(str)
}




									
								
							
						
						
						
						
					