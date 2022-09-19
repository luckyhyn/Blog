function sort(dom) {
	// modifyNav(dom)
// 	var str2 =
// 		'<div class="row">' +
// 		'	<div class="col-md-12">' +
// 		'		<div style="width: 80%;height: auto; margin: 10px auto;border-radius: 5px; border: 1px solid #c0c0c0;">' +
// 		'			<div style="width: 100%;height: 60px;margin: 5px auto; border-bottom: 1px solid #c0c0c0; ">' +
// 		'				<span style="display: inline-block; height: 60px;line-height: 60px;width: 10%;text-align: center;color: #00b5ad;font-weight: 800;">标签分类</span>' +
// 		'				<span style="display: inline-block;float: right;height: 60px;line-height: 60px;margin-right: 20px;">共&nbsp;<span style="font-size: 25px;color: #F37325;" id="tag_count">5</span>&nbsp;个标签</span>' +
// 		'			</div>' +
// 		'				<div style="width: 90%;height: auto; margin: 25px 7% 25px 3%;">' +
// 		'					<ul class="sort_tag" id="tag_details">	' +
// 		'					</ul>' +
// 		'				</div>' +
// 		'			</div>' +
// 		'			<div id="content_box" style="width: 80%;height: auto;border-radius: 5px;margin-top: 10px;margin: 10px auto; border: 1px solid #c0c0c0; border-top:2px solid #08B6AF;">' +
// 		'		</div>' +
// 		'	</div>' +
// 		'</div>'

// 	$("#content").html(str2)
	
	
	
// 	//统计标签个数
// 	// 获取标签Set集合
// 		var labelSet = new Set()
// 		for (var i = 0; i < data.length; i++) {
// 			labelSet.add(data[i].sign)
// 		}
		
// 		// 使用Set集合创建标签一个数组
// 		var labels = Array.from(labelSet.values())
// 		var tag = []
		
// 		for (var i = 0; i < labels.length; i++) {
// 			// 向对象数组中添加数据
// 			tag.push({sign:labels[i],count:getLabelCount(labels[i])})
// 		}
// 	//显示标签
// 	var str = ""
// 	for (var i = 0; i < tag.length; i++) {
// 		str += "<li onclick=\""+"show("+"'"+tag[i].sign+"'"+")\">"+tag[i].sign + "<span>" + tag[i].count +
// 			"<i></i></span></li>"
// 	}	
// 	$("#tag_details").html(str);
// 	//默认显示内容为第一个标签内容
// 	str = ""
// 	//没有数据要显示的内容
// 	var strnull = '<div class="tag_prompt" >' +
// 		'<span>对不起还没有数据！</span>' +
// 		'</div>'
// 	//遍历取值
// 	for (var i = 0; i < data.length; i++) {
// 		if (data[i].sign == tag[0].id) {
// 			str += '<div class="content_list">' +
// 				'<div class="item">' +
// 				'<h3><a onclick="details(' + data[i].id + ')">' + data[i].title + '</h3>' +
// 				'<p><a>' + data[i].content + '</a></p>' +
// 				'<div>' +
// 				'<div class="item_img"><img src="' + data[i].avatar + '" alt=""></div>' +
// 				'<div class="item_name">' + data[i].username + '</div>' +
// 				'<div class="item_time"><i class="glyphicon glyphicon-calendar"></i>' + data[i].time + '</div>' +
// 				'<div class="item_num"><i class="glyphicon glyphicon-eye-open"></i>' + data[i].num + '</div>' +
// 				'<div class="item_sign">' + data[i].sign + '</div>' +
// 				'</div>' +
// 				'</div>' +
// 				'<div class="img"><img src="' + data[i].img + '" alt="" width="100"></div>' +
// 				'<div class="item_line"></div>' +
// 				'</div>'
// 		}
// 	}
// 	var strnull = '<div class="tag_prompt" >' +
// 		'<span>对不起还没有数据！</span>' +
// 		'</div>'
// 	$("#content_box").html(str)
// 	if (str.length == 0) {
// 		$("#content_box").html(strnull)
// 	}
// }

// //显示数据函数
// var show = function(sign) {
// 	str = ""
// 	for (var i = 0; i < data.length; i++) {
// 		if (data[i].sign == sign) {
// 			str += getContentList(i)
// 		}
// 	}
// 	$("#content_box").html(str)
// 	if (str.length == 0) {
// 		$("#content_box").html(strnull)
// 	}
label(dom)
}
