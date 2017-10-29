var ct = 0
function Add(){
	var item = document.getElementById("input_task").value
	var text = document.createTextNode(item)
	var uL = document.createElement("ul")
	uL.setAttribute("id","element"+(ct++))
	uL.setAttribute("onclick","del(this)")

	uL.appendChild(text)
	document.getElementById("list").appendChild(uL)
}

function del(link){
	element = document.getElementById(link.id);
	element.parentNode.removeChild(element);
}