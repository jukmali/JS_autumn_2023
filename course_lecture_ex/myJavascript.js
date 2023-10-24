var x = document.getElementById('myFieldset');
x.style.display="none";


function myFirstFunction(number){
    for(var i=0; i < number ; i++){
        console.log(i);
    }

    return 10;

}

function buttonFunction(){
    alert('This is event listener function');
    var element = document.getElementById("demo");
    element.innerHTML="This is new text";
}

function validateForm(){
    var fname = document.forms["myForm"]["fname"].value;
    var lname = document.forms.myForm.lname.value;

    if(fname==null || fname=="" || fname.length<3){
        document.forms.myForm.fname.style.borderColor = "red";
        document.getElementById('feedback').innerHTML="<b>*Fill in properly</b>";
        return false;
    }


}

function showExtraFields(){
    var y= document.getElementById('myFieldset');
    y.style.display="block";
}