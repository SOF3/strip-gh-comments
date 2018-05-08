(function(document: Document){
	let extensions: HTMLInputElement
	let incl_excl: HTMLSelectElement
	let comments: HTMLInputElement
	let flags: HTMLInputElement

	document.addEventListener("DOMContentLoaded", (): void =>{
		extensions = document.getElementById("extensions") as HTMLInputElement
		incl_excl = document.getElementById("incl_excl") as HTMLSelectElement
		comments = document.getElementById("comments") as HTMLInputElement
		flags = document.getElementById("flags") as HTMLInputElement

		console.log("chrome")
		chrome.storage.sync.get({
			extensions: "",
			incl_excl: "exclude",
			comments: "",
			flags: "gu",
		}, (items: {
			extensions: string
			incl_excl: "include" | "exclude"
			comments: string
			flags: string
		}) =>{
			console.log(items)
			extensions.value = items.extensions
			incl_excl.value = items.incl_excl
			comments.value = items.comments
			flags.value = items.flags
		})
	})

	document.getElementById("save").addEventListener("click", (): void =>{
		chrome.storage.sync.set({
			extensions: extensions.value,
			incl_excl: incl_excl.value,
			comments: comments.value,
			flags: flags.value,
		})
	})
})(document)
