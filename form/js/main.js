(function() {
	var data;
	var type = $("#type").children("div").attr("id");
	var count = 0;

	$.getJSON("curriculum/" + type + ".json", function(d) {
		data = d;
		$("#form").empty();

		//set data
		for(var i in data.children) {
			$("#form").append("<div id = " + i +"></div>");
			$("#form").children("#" + i).append("<h3>" + data.children[i].name + "</h3>");
			$("#form").children("#" + i).append("<table></table>");

			$("#form").children("#" + i).children("table").append(
				"<tr>"
				+ "<td>志願序</td>"
				+ "<td>課程名稱</td>"
				+ "</tr>");

			for(var j in data.children[i].children) {
				$("#form").children("#" + i).children("table").append(
					"<tr>"
					+ "<td><input type = \"text\" name = \"" + i + "_" + j + "\"></input></td>"
					+ "<td>" + data.children[i].children[j] + "</td>"
					+ "</tr>");
			}

			$("#form").children("#" + i).append("<input type = \"button\" value = \"下一個\" id = \"next\"></input>");
			$("#form").children("#" + i).on("click", function() { return (count < data.children.length - 2) ? next() : end(); });
		}

		//hide table
		for(var i in data.children) {
			$("#form").children("#" + i).hide();
		}

		//show first
		$("#form").children("#" + count).show();
	});

	function next() {
		$("#form").children("#" + count).hide();
		count++;
		$("#form").children("#" + count).show();
	}

	function end() {
		$("#form").children("#" + count).hide();
		count++;
		$("#form").children("#" + count).children("#next").remove();
		$("#form").children("#" + count).show();
		$("#form").children("#" + count).append("<input type = \"submit\" value = \"送出\"></input>");
	}
})();
