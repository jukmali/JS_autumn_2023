
function loadJSONfile(){
//create AJAX object
var xmlhttp = new XMLHttpRequest();

// Spesify the data / url to be fetched
xmlhttp.open("GET","https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750", true);
xmlhttp.send();

xmlhttp.onreadystatechange = function(){

    if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
        //find myDiv and insert results there
        var jsonDoc = xmlhttp.responseText;
        //document.getElementById("myDiv").innerHTML = jsonDoc;

        var jsData = JSON.parse(jsonDoc);

        var txt = "<table border=1>";
        for(var i=0; i< jsData.Search.length; i++ ){
            
            txt += "<tr><td>" + jsData.Search[i].Title + "</td>" + 
            "<td> <img src='" + jsData.Search[i].Poster + "'></td></tr>";
        }
        txt += "</table>";
        // Show the contents in myDiv
        document.getElementById("myDiv").innerHTML= txt;
    }

}
}

function loadXMLcd(){
    console.log("Load XML");
    var xmlhttp= new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
    if(this.readyState == 4 && this.status == 200){

    var i;
    var xmlDoc = xmlhttp.responseXML;
    //document.getElementById('xml').innerHTML=xmlDoc;
    var table = "<table border='1'";
    table += "<tr><th>Artist</th><th>Title</th></tr>";

    var x = xmlDoc.getElementsByTagName("CD");

    for(i = 0 ; i < x.length ; i++){
        table += "<tr><td>" + 
        x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        "</td><td>" + 
        x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        "</td><tr>";
    }
    table += "</table>";
    document.getElementById("myDiv").innerHTML = table;
    }
    };
    xmlhttp.open("GET","https://www.w3schools.com/xml/cd_catalog.xml",true );
    xmlhttp.send();

}

    