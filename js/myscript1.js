$(function(){
	$(".conditions-select").hide()
	$(".conditions").addClass("marTop12")
	$(".conditions li").click(function(){
		$(".conditions-select").show()
		$(".conditions").removeClass("marTop12")
		
		$(this).parents("dl").css("display","none")
		var content = $(this).text()
		var title = $(this).parents("dl:first").find("dt").text()
		var result = "<li>" + title + "<span class='font14 color-098400'>" + content + " <span class='font18 color-098400'>×</span> " + "</span>" + "</li>"
		$(".conditions-select ul").append(result)
	})
		
	$(".conditions-select li").live("click",function(){
		var sib_num = $(this).siblings().length
		if(sib_num == 0) {
			location.reload('goods-list.html') 
		}
		$(this).remove()
	})
	
//	$(".conditions-select li").click(function(){
//		alert("222")
//	})
	
	$("#hide").hide()
	$(".hide-area").hide()
	$("#show").click(function(){
		$(this).hide()
		$("#hide").show()
		$(".hide-area").show()
	})
	$("#hide").click(function(){
		$(this).hide()
		$("#show").show()
		$(".hide-area").hide()
	})
	
	$(".cell-style").click(function(){
		$(this).addClass("border-f00").siblings().removeClass("border-f00")
	})
	
//	$(".condition-vary>li").click(function(){
//		$(this).addClass("condition-vary-active").siblings().removeClass("condition-vary-active")
//	})
	$(".content-down-condition>li").click(function(){
		$(this).addClass("content-down-condition-active").siblings().removeClass("content-down-condition-active")
	})
})
