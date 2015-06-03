(function() {
	var data;
	var type = $("#type").children("div").attr("id");
	var count = 0;

	$.getJSON("../curriculum/" + type + ".json", function(d) {
		data = d;

		//change name
		for(var i in data.children) {
			$("#form").children("#" + i)
			  .children("h3")
			   .html(data.children[i].name);

			for(var j in data.children[i].children) {
				$("#" + i + "_" + j)
				   .html(data.children[i].children[j]);
			}
		}
	});
})();
