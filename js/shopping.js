// shopping.js
// This script calculates an order total.


// Exercise: 3
function calculate() {
    'use strict';

    // For storing the order total:
    var total;

    // Get references to the form values:
    var quantity = document.getElementById('quantity').value ; // add value

    var price =  document.getElementById('price').value ;
    var tax =  document.getElementById('tax').value ; // add value
    var discount =  document.getElementById('discount').value ; //add value
	var shipping = document.getElementById('shipping').value; // add shipping

    // Add validation here later!

    // Calculate the initial total:
    total = quantity * price;
    console.log("total before tax: " + total);

    // Make the tax rate easier to use:
    tax = tax / 100;
    tax = tax + 1;

    // Factor in the tax:
    total = total * tax;
    console.log("total after tax: " + total);

    // Factor in the discount:
	if (quantity > 100){
		total = total - (2*discount);
	} else {
		
		total = total - discount;
	}
	total = total + (1.0*shipping);
    console.log("total after discount: " + total);

    // Format the total to two decimal places:
    total = total.toFixed(2);

    // Display the total:
    document.getElementById('total').value = total;

    // Return false to prevent submission:
    return false;

} // End of calculate() function.



// exercise 2: Calculate membership
			
//check
// if years are bigger than 2 extra infomation given
function amount_years(){
    var years = document.getElementById('years').value;
    if(years >= 5){
                    
        document.getElementById('span_discount').textContent = "Extra discount 20% + 5€ discount as a long member customer"; 
    } else if (years > 2){
        document.getElementById('span_discount').textContent = "Extra discount 20%";
    } else {
        document.getElementById('span_discount').textContent = "";
    }
                   
}
           
// Membership calculation
function calculateMembership(){
           
    var memSum = 0;
    if(document.forms.theForm.type.value == null || document.forms.theForm.type.value == ""){
        return false;
    } else if (document.forms.theForm.type.value == "basic"){
        memSum += 10;
    } else if (document.forms.theForm.type.value == "premium"){
        memSum += 15;
    } else if (document.forms.theForm.type.value == "gold"){
        memSum += 20;
    } else if (document.forms.theForm.type.value == "platinum"){
        memSum += 25;
    }
    // Multiplied with years
    memSum *= document.forms.theForm.years.value;
               
    // If years are more than 2 20% discount
    if(document.forms.theForm.years.value > 2){
        memSum *= 0.8;
               }
    // If years are more than 5 then -5€ discount
    if(document.forms.theForm.years.value >= 5){
        memSum -= 5;
    // alert("Extra discount: 5€ ");
    }
        document.forms.theForm.cost.value = memSum;
               
    return false;
}
// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
// Exercise: 2 using eventListener
function init() {
    'use strict';

    // Add an event listener to the form:
   
    var theForm = document.getElementById('theForm');
    theForm.addEventListener("submit",function(e){
        if(!calculateMembership()){
            // Prevent to upload the page 
            e.preventDefault();
        }
    });
}

// End of init() function.

// Assign an event listener to the window's load event:
window.onload = init;
