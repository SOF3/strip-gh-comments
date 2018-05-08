(function(document: Document){
	function ltrim(string: string): string{
		while(string.charAt(0) === " " || string.charAt(0) === "\t"){
			string = string.substr(1)
		}
		return string
	}

	const lines = document.getElementsByClassName("pl-s1")
	iterate_lines:
		for(let i = 0; i < lines.length; ++i){
			const line = lines[i] as HTMLSpanElement
			const comments = line.getElementsByClassName("pl-c") as NodeListOf<HTMLSpanElement>
			const original = line.innerText
			for(let j = 0; j < comments.length; ++j){
				const comment = comments[j] as HTMLSpanElement
				comment.style.display = "none"
			}
			if(ltrim(original).length > 0 && ltrim(line.innerText).length === 0){
				let node: Element = line
				while(!(node instanceof HTMLTableRowElement)){
					node = node.parentElement
					if(node == null){
						continue iterate_lines
					}
				}
				node.remove()
				--i
			}
		}
})(document)
