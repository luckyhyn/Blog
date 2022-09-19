function search() {
	var value = $("#blog").val()
	if (value == "") {
		alert("请输入搜索的值")
	}
	
	
	var str3 = ""		//页面框架
	var searchResult = ""		//内容
	var counter = 0		//计数器

	for (var i = 0; i < data.length; i++) {
		if (value == data[i].id) {
			// 添加内容
			searchResult += getContentList(i)
			counter++
		}
	}
	str3 += '<div class="row">' +
		'<div class="col-md-10 col-md-offset-1">' +
		'<div class="content">' +
		'<!-- 头 -->' +
		'<div class="content_header">' +
		'<div>' +
		'<i class="glyphicon glyphicon-th-list"></i>' +
		'搜索结果' +
		'</div>' +
		'<div>' +
		'共<span id="tatal">' + counter + '</span>篇' +
		'</div>' +
		'</div>' +
		'<!-- 内容 -->' +
		'<div id="content_box">'
	str3 +=
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>' +

	$("#content").html(str3)
	$("#content_box").html(searchResult)
	$("#total").html(counter)
}
