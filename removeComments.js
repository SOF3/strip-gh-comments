(function(document){
	function ltrim(string){
		while(string.charAt(0) === " " || string.charAt(0) === "\t"){
			string = string.substr(1);
		}
		return string;
	}

	var lines = document.getElementsByClassName("pl-s1");
	iterate_lines: for(var i = 0; i < lines.length; ++i){
		var line = lines[i];
		var comments = line.getElementsByClassName("pl-c");
		var original = line.innerText;
		for(var j = 0; j < comments.length; ++j){
			var comment = comments[j];
			comment.style.display = "none";
		}
		if(ltrim(original).length > 0 && ltrim(line.innerText).length === 0){
			var node = line;
			while(!(node instanceof HTMLTableRowElement)){
				node = node.parentElement;
				if(node == null){
					continue iterate_lines;
				}
			}
			node.remove();
			--i
		}
	}
})(document);
