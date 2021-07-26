$(document).ready(function() {
    $("#do-toggle").click(function(){
       $("#design").toggle();
    });
});

$(document).ready(function() {
    $("#what-toggle").click(function(){
       $("#product").toggle();
    });
});

$(document).ready(function() {
    $("#we-toggle").click(function(){
       $("#development").toggle();
    });
});

function formValidation() {
    let name=document.forms["form"]["name"].value;
    let email=document.forms["form"]["email"].value;
    let message=document.forms["form"]["message"].value;

    if(name=="" || email=="" || message==""){
        alert("Fill all fields");
    }else{
        alert(`name:${name}\n email address: ${email}\n We thank you for reaching out to Delani Studios. Your message has been received. We will get back to you, be sure to reach out any time. \n received by Liz Irungu`);
    }
}