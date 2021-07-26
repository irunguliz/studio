$(document).ready(function () {
    $("#do-toggle").click(function () {
        $("#design").toggle();
    });
    $("#what-toggle").click(function () {
        $("#product").toggle();
    });

    $("#we-toggle").click(function () {
        $("#development").toggle();
    });
    //hovering effect
    $(".image1").mouseover(function () {
        $(".portfolio1").show();
        $(".image1").css("opacity", "0.5");
    });

    $(".image1").mouseout(function () {
        $(".portfolio1").hide();
        $(".image1").css("opacity", "1");
    });

    $(".image2").mouseover(function () {
        $(".portfolio2").show();
        $(".image2").css("opacity", "0.5");
    });

    $(".image2").mouseout(function () {
        $(".portfolio2").hide();
        $(".image2").css("opacity", "1");
    });

    $(".image3").mouseover(function () {
        $(".portfolio3").show();
        $(".image3").css("opacity", "0.5");
    });

    $(".image3").mouseout(function () {
        $(".portfolio3").hide();
        $(".image3").css("opacity", "1");
    });

    $(".image4").mouseover(function () {
        $(".portfolio4").show();
        $(".image4").css("opacity", "0.5");
    });

    $(".image4").mouseout(function () {
        $(".portfolio4").hide();
        $(".image4").css("opacity", "1");
    });

    $(".image5").mouseover(function () {
        $(".portfolio5").show();
        $(".image5").css("opacity", "0.5");
    });

    $(".image5").mouseout(function () {
        $(".portfolio5").hide();
        $(".image5").css("opacity", "1");
    });

    $(".image6").mouseover(function () {
        $(".portfolio6").show();
        $(".image6").css("opacity", "0.5");
    });

    $(".image6").mouseout(function () {
        $(".portfolio6").hide();
        $(".image6").css("opacity", "1");
    });

    $(".image7").mouseover(function () {
        $(".portfolio7").show();
        $(".image7").css("opacity", "0.5");
    });

    $(".image7").mouseout(function () {
        $(".portfolio7").hide();
        $(".image7").css("opacity", "1");
    });

    $(".image8").mouseover(function () {
        $(".portfolio8").show();
        $(".image8").css("opacity", "0.5");
    });

    $(".image8").mouseout(function () {
        $(".portfolio8").hide();
        $(".image8").css("opacity", "1");
    });
});

function formValidation() {
    let name = document.forms["form"]["name"].value;
    let email = document.forms["form"]["email"].value;
    let message = document.forms["form"]["message"].value;

    if (name == "" || email == "" || message == "") {
        alert("Fill all fields");
    } else {
        alert(`name:${name}\n email address: ${email}\n We thank you for reaching out to Delani Studios. Your message has been received. We will get back to you, be sure to reach out any time. \n received by Liz Irungu`);
    }
}