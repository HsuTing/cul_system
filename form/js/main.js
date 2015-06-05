(function() {
	var data;
	var type = $("#type").children("div").attr("id");
	var count = 0;
	var showInfo;
	var alertText = [];

	$.getJSON("../curriculum/" + type + ".json", function(d) {
		data = d;
		$("#form").empty();
		$("body").prepend("<div class = 'tip'></div>");
		$(".tip").hide();

		//set data
		for(var i in data.children) {
			$("#form").append("<div id = " + i +"></div>");
			$("#form").children("#" + i)
			    .append("<h3>" + data.children[i].name + "</h3>")
			    .append("<h6>請填入 1 ~ " + data.children[i].children.length + "</h6>")
			    .append("<table></table><br><br>");
			alertText.push("請填入 1 ~ " + data.children[i].children.length + ", 感謝您的配合");

			$("#form").children("#" + i)
			  .children("table")
			    .append(
					"<tr>"
					+ "<td>志願序</td>"
					+ "<td>課程名稱</td>"
					+ "</tr>"
			    );

			for(var j in data.children[i].children) {
				$("#form").children("#" + i)
				  .children("table")
				    .append(
						"<tr>"
						+ "<td>"
						+ "<input type = 'text' name = '" + i + "_" + j + "' autocomplete = 'off' maxlength = '1' class = 'checkbox' id = 'check_" + i + "_" + j + "'>"
						+ "</td>"
						+ "<td class = 'info' id = '" + i + "_" + j + "'>" + data.children[i].children[j].name + "</td>"
						+ "</tr>"
				    )
				    .append(
						"<tr>"
						+ "<td colspan = '2' class = 'information' id = 'information_" + i + "_" + j + "'>"
						+ "</td>"
						+ "</tr>"
					);

				$("#" + i + "_" + j)
				    .on("click", function() { return showInformation( $(this).attr("id") ); })
				    .on("mousemove", function() { moveTip( $(this).attr("id") ); return showTip(); })
				    .on("mouseout", function() { return hideTip(); });
			}

			$("#form").children("#" + i)
			    .append("<input type = 'button' value = '下一個' id = 'next'>");
			$("#form").children("#" + i)
			  .children("#next")
			    .on("click", function() { return check() ? ((count < data.children.length - 2) ? next() : end()) : alert(alertText[count]); });
		}

		//hide table
		for(var i in data.children) {
			$("#form").children("#" + i)
			    .hide();
		}

		//show first
		$("#form").children("#" + count)
		    .show();

		reset();
	});

	function check() {
		var checkCount = 0;
		var tempNum = [];
		for(var j in data.children[count].children) {
			tempNum.push(0);
		}

		for(var j in data.children[count].children) {
			if( $("#check_" + count + "_" + j).val() > 0 && 
				$("#check_" + count + "_" + j).val() <= data.children[count].children.length ) {
				tempNum[ $("#check_" + count + "_" + j).val() - 1] = 1;
			}
		}

		for(var j in data.children[count].children) {
			if(tempNum[j] == 1) {
				checkCount = checkCount + tempNum[j];
			}
		}

		if(checkCount == data.children[count].children.length) {
			return true;
		}
		else {
			return false;
		}
	}

	function next() {
		$(".information").empty();
		$("#form").children("#" + count)
		   .hide();
		count++;
		$("#form").children("#" + count)
		    .show();
		reset();
	}

	function end() {
		$(".information").empty();
		$("#form").children("#" + count)
		    .hide();
		count++;
		$("#form").children("#" + count).children("#next")
		    .remove();
		$("#form").children("#" + count)
		    .show();
		$("#form").children("#" + count)
		    .append("<input type = 'submit' value = '送出' id = 'next'>")

		$("#form").children("#" + count)
		  .children("#next")
		    .on("click", function() { if(!check()) { alert(alertText[count]); } return check(); });
		reset();
	}

	function reset() {
		var height = $("#main").height();
		$("#main").css("marginTop", -1 * (height + 20) / 2);
	}

	function showInformation(info) {
		if(showInfo != info) {
			var i = info[0];
			var j = info[2];

			$(".information").empty();
			$("#information_" + info)
			    .append("<h3>" + data.children[i].children[j].name + "&nbsp;&nbsp;課程資訊</h3>")
				.append("<h4>" + data.children[i].children[j].information + "</h4><br><br>");

			$("#information_" + info).show();

			var tempbody = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			tempbody.animate({
				scrollTop: $("#information_" + info).offset().top / 2
			}, 1000);
			showInfo = info;
		}
		else {
			$(".information").empty();
			showInfo = "";
		}
	}

	function moveTip(info) {
		var i = info[0];
		var j = info[2];

		$(".tip").empty();
		$(".tip").append("<h4>" + data.children[i].children[j].name + "&nbsp;&nbsp;課程資訊</h4>")
		    .append("<h4 style = 'color:gray'>" + data.children[i].children[j].information + "</h4>");
		$(".tip").css("width", $("#main").width() / 2);
	}

	function showTip() {
		var tx = event.pageX + 20;
		var ty = event.pageY - 10;

		if(ty + $(".tip").height() > $(window).height() - 50) {
			ty = $(window).height() - $(".tip").height() - 50;
		}

		$(".tip").css({
			top: ty + "px",
			left: tx + "px",
			zIndex: 2
		});
		$(".tip").show();
	}

	function hideTip() {
		$(".tip").hide();
	}
})();
