
(function(){
	$.ajax({
		url: "https://api.mlab.com/api/1/databases/rgssscriptdb/collections/RGSS?apiKey=qM3OEKu940uEvjoC96BVHKw4FiicBwqB",
		type: "GET",
		data: {},
		datatype: "json",
		success: (rows) => {
			var content = document.getElementById("content");
			for (var i = 0 ; i < rows.length ; ++i) {
				// create a div to put the infomation of script.
				var row = document.createElement("div");
				row.classList.add("row");
				// add the correspond category class to row.
				row.classList.add(rows[i].type);
				// create title.
				var title = document.createElement("h4");
				title.innerHTML = rows[i].name;
				// create version.
				var version = document.createElement("p");
				version.innerHTML = rows[i].version;
				// create file type.
				var file = document.createElement("p");
				file.innerHTML = rows[i].file;
				// create link.
				var link = document.createElement("a");
				link.innerHTML = "Download";
				link.href = rows[i].link;
				// add all element to the row div.
				row.appendChild(title);
				row.appendChild(version);
				row.appendChild(link);
				content.appendChild(row);
			}
		}
	})
})();
