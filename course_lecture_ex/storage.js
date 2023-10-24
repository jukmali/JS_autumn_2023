
if(localStorage.getItem("nameList") == null){
    var names = [];
    localStorage.setItem('nameList', JSON.stringify(names));
}

function saveData() {
    names = JSON.parse(localStorage.getItem('nameList'));

    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;

    // Create JSON object
    var fullName = {
        fname: firstName,
        lname: lastName,
    } 

    // Save it to list
    names.push(fullName);

    // Save list to localStorage
    localStorage.setItem('nameList', JSON.stringify(names));

    showData();
}

function saveData(){
    names = JSON.parse(localStorage.getItem("nameList"));

    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
	//Create JSON object
	var fullName = {
		fname: firstName,
		lname: lastName,
	}
	
	// Save name to list
	names.push(fullName);
	
	// Save list to localStorage
    localStorage.setItem('nameList', JSON.stringify(names));
	showData();
}

function showData(){
	
	var allNames = localStorage.getItem('nameList');
	var jsonNames = JSON.parse(allNames);
	
	var table = "<table border='1'><tr><th>Nro</th><th>Fname</th><th>Lname</th></tr>";
	
	for(i=0;  i < jsonNames.length ; i++){
		
		table += "<tr><td><i>"+ i + "</i></td><td><i>" + jsonNames[i].fname + 
		"</i></td><td><i>" + jsonNames[i].lname + "</i></td></tr>";
		
	}
	var place = document.getElementById("storage_place");	
	place.innerHTML = table; 
} 

function deleteData(){
    var delNum=document.getElementById("delNumber").value;
    console.log(delNum);

    var myNames = localStorage.getItem('nameList');
    var jsonNames = JSON.parse(myNames);
    jsonNames.splice(delNum,1);

    localStorage.setItem('nameList', JSON.stringify(jsonNames));
    showData();

}