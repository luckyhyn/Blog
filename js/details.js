function getDetails(msg) {
	console.log(1)
	var str = ""
	for (var i = 0; i < data.length; i++) {
		if (msg == data[i].id) {
			str +=
				'<div class="details">' +
				'<div class="details_header">' +
				'<img src="' + data[i].avatar + '" alt="图片被偷了" class="head_photo">' +
				'<div class="author_name">' + data[i].username + '</div>' +
				'<div class="date"><i class="glyphicon glyphicon-calendar"></i>' + data[i].time + '</div>' +
				'<div class="count"><i class="glyphicon glyphicon-eye-open"></i>' + data[i].num + '</div>' +
				'</div>' +
				'<div class="bigImg">' +
				'<img src="' + data[i].img + '" alt="图片被偷走了">' +
				'</div>' +
				'<div class="details_content">' +
				'<div class="title">' +
				'<h3>' + data[i].title + '</h3>' +
				'</div>' +
				'<div class="text">' +
				'给定一个整数数组 nums 和一个目标值 target，' +
				'请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。' +
				'</div>' +
				'<h3>题目描述</h3>' +
				'<div class="title_describe">' +
				'给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。' +
				'你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。' +
				'</div>' +
				'<h3>示例:</h3>' +
				'<div class="example">' +
				'给定 nums = [2, 7, 11, 15], target = 9<br />' +
				'因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]' +
				'</div>' +
				'<h3>代码实现</h3>' +
				'<pre>' +
				'<code>' +
				'// 1. Two Sum// https://leetcode.com/problems/two-sum/description///时间复杂度：O(n)// 空间复杂度：O(n)class Solu' +
				'tion {public int[] twoSum(int[] nums, int target){int l = nums.length;int[] ans=new int[2];int i,j;}}' +
				'</code>' +
				'</pre>' + 
				'<div class="content_label">' +
				'<span><i></i>leetCode</span>' +
				'<span><i></i>数据结构与算法</span>' +
				'</div>' +
				'<div class="support">' +
				'赞赏' +
				'</div>' +
				'</div>' +
				'<div class="about">' +
				'<ul>' +
				'<li>作者:小马<a href="">联系作者</a></li>' +
				'<li>发表时间:' + data[i].time + ' 15:05:06</li>' +
				'</ul>' +
				'<div class="about_img">' +
				'<img src="./img/wechatPay.jpg" alt="图片被偷了">' +
				'</div>' +
				'</div>' +

				'<div class="comment">' +
				'<h4>评论</h4>' +
				'<textarea placeholder="请输入评论信息"></textarea>' +
				'<div class="input_box">' +
				'<div class="user_input">' +
				'<i class="glyphicon glyphicon-user"></i>' +
				'<input type="text" placeholder="姓名">' +
				'</div>' +
				'<div class="user_input">' +
				'<i class="glyphicon glyphicon-envelope"></i>' +
				'<input type="text" placeholder="邮箱">' +
				'</div>' +
				'</div>' +
				'<div class="comment_button">' +
				'<button><i class="glyphicon glyphicon-pencil"></i>评论</button>' +
				'</div>' +
				'</div>' +
				'</div>'
		}
	}
	
	$("#content").html(str)
}
