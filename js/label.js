function label(dom) {
	modifyNav(dom)
	// 开头、结尾
	var str =
		'<div class="blog_label">' +
		'				<!-- 头部 -->' +
		'				<div class="label_header">' +
		'					<div>' +
		'						<h3>标签</h3>' +
		'						<div>' +
		'							共<span id="label_count"></span>个' +
		'						</div>' +
		'					</div>' +
		'					<div class="list" id="list">' +
		'					</div>' +
		'				</div>' +
		'				<div class="label_content">' +
		'					<div id="content_box">' +
		'					</div>' +
		'				</div>' +
		'			</div>'
	$("#content").html(str)


	// 获取标签Set集合
	var labelSet = new Set()
	for (var i = 0; i < data.length; i++) {
		labelSet.add(data[i].sign)
	}
	
	// 使用Set集合创建标签一个数组
	var labels = Array.from(labelSet.values())
	var labelData = []
	
	for (var i = 0; i < labels.length; i++) {
		// 向对象数组中添加数据
		labelData.push({sign:labels[i],count:getLabelCount(labels[i])})
	}
	
	
	// 输出标签数量
	$("#label_count").html(labelData.length)

	var strLabel = ""
	for (var i = 0; i < labelData.length; i++) {
		// 添加标签
		strLabel +=
			'<span onclick="content(' + "'" + labelData[i].sign + "'" + ','+ "'" +'#tag' + i + "'" + ')" id="tag'+i+'">'
			+ labelData[i].sign + 
			'<i></i><span>' + labelData[i].count + '</span></span>'
	}
	$("#list").html(strLabel)
	// 默认选中第一个
	$("#list span:first").click()
}


function getLabelCount(sign){
	var count = 0
	for (var i = 0; i < data.length; i++) {
		if(data[i].sign == sign){
			count++
		}
	}
	return count
}

function content(msg,id) {
	var strContent = ""
	// 输出内容
	for (var i = 0; i < data.length; i++) {
		if (data[i].sign == msg) {
			strContent += getContentList(i)
		}
	}
	
	// 选中修改样式
	$(id).addClass("span_active").siblings("span").removeClass("span_active")
	$(id).children("i").addClass("i_active").parent().siblings("span").children("i").removeClass("i_active")
	
	// 改内容
	$("#content_box").html(strContent)
}
