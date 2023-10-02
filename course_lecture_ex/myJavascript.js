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