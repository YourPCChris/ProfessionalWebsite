
function toggleDiv(ProjectNum){
	var x = document.getElementById("ProjectDesc" + ProjectNum);
	
	if (x.style.display == "none"){
		x.style.display = "inherit";
	}
	else{
		x.style.display = "none";
	}
}

function toggleUniProject(ProjectNum){
	var x = document.getElementById("UniProjectDesc" + ProjectNum);
	
	if (x.style.display == "none"){
		x.style.display = "inherit";
	}
	else{
		x.style.display = "none";
	}
}