$(document).ready(function(){
    $(".menu_submit").click(function() {      
        $(".menu").submit(function(event) {
        	if ($("input").val()) {
        		alert("The Book is sent to Your email!");
        	} else {
        		alert("You should fill all fields to get the Book");
        	}
        });
    });
});