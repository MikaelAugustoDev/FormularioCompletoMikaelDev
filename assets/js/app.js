// $(document).ready(function () {
//     $("#arcade").click(function () {
//         $("#arcade").css("border", "2px solid rgb(151, 56, 223)");
//     });
// });

// index 1
$(document).ready(function () {
    $("#stepTo2").click(function () {
        // console.log("test");
        $(".nCheckEmpty").css("display", "none");
        $(".eaCheckEmpty").css("display", "none");
        $(".pnCheckEmpty").css("display", "none");
        $("#name").css("border", "2px solid var(--Lightgray)");
        $("#email").css("border", "2px solid var(--Lightgray)");
        $("#number").css("border", "2px solid var(--Lightgray)");

        // input check
        // if ($.trim($('input[name="name"]').val()).length == 0) {
        //     console.log("test name");
        //     $(".nCheckEmpty").css("display", "block");
        //     $("#name").css("border", "2px solid red");
        // } else if ($.trim($('input[name="email"]').val()).length == 0) {
        //     console.log("test email");
        //     $(".eaCheckEmpty").css("display", "block");
        //     $("#email").css("border", "2px solid red");
        // } else if ($.trim($('input[name="number"]').val()).length == 0) {
        //     console.log("test pnumber");
        //     $(".pnCheckEmpty").css("display", "block");
        //     $("#number").css("border", "2px solid red");
        // } else {
        //     console.log("test next");
        //     alert("now you are hacked! ;)");
        //     window.location.href = "index2.html";
        // }
    });
});

$(document).ready(function () {
    // Select the input element and bind the blur event to it
    $("#name").on("blur", function () {
        // Get the value of the input
        var inputValue = $(this).val();
        // Check if the input value matches the format of a name
        if (/^[a-zA-Z ]+$/.test(inputValue)) {
            console.log("Input is a name.");
            $(".nCheckEmpty").css("display", "none");
            $("#name").css("border", "2px solid var(--Lightgray)"); // border: 1px solid var(--Lightgray);
        } else {
            console.log("Input is not a name.");
            $(".nCheckEmpty").css("display", "block");
            $("#name").css("border", "2px solid red");
        }
    });
});

$(document).ready(function () {
    // Select the input element and bind the blur event to it
    $("#email").on("blur", function () {
        // Get the value of the input
        var inputValue = $(this).val();
        // Check if the input value matches the format of a name
        if (
            /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
                inputValue
            )
        ) {
            console.log("Input is a email.");
            $(".eaCheckEmpty").css("display", "none");
            $("#email").css("border", "2px solid var(--Lightgray)");
        } else {
            console.log("Input is not a email.");
            $(".eaCheckEmpty").css("display", "block");
            $("#email").css("border", "2px solid red");
        }
    });
});

$(document).ready(function () {
    // Select the input element and bind the blur event to it
    $("#number").on("blur", function () {
        // Get the value of the input
        var inputValue = $(this).val();
        // Check if the input value matches the format of a name
        if (/^\+?[0-9]+$/.test(inputValue)) {
            console.log("Input is a number.");
            $(".pnCheckEmpty").css("display", "none");
            $("#number").css("border", "2px solid var(--Lightgray)");
        } else {
            console.log("Input is not a number.");
            $(".pnCheckEmpty").css("display", "block");
            $("#number").css("border", "2px solid red");
        }
    });
});
//

///
// $(document).ready(function () {
//     // hide all the error messages initially
//     // $(".nCheckEmpty").hide();
//     // $(".eaCheckEmpty").hide();
//     // $(".pnCheckEmpty").hide();

//     $("#stepTo2").click(function () {
//         // check if the name field is not empty
//         // if ($("#name").val() === "") {
//         //     $(".nCheckEmpty").show();
//         //     return false;
//         // } else {
//         //     $(".nCheckEmpty").hide();
//         // }

//         // check if the name field is not empty and if the value is a valid name
//         if ($("#name").val() === "" || !isValidName($("#name").val())) {
//             $(".nCheckEmpty").show();
//             return false;
//         } else {
//             $(".nCheckEmpty").hide();
//         }

//         // check if the email field is not empty and if the value is a valid email
//         if (
//             $("#email").val() === "" ||
//             !isValidEmailAddress($("#email").val())
//         ) {
//             $(".eaCheckEmpty").show();
//             return false;
//         } else {
//             $(".eaCheckEmpty").hide();
//         }

//         // check if the phone number field is not empty and if the value is a valid phone number
//         if (
//             $("#number").val() === "" ||
//             !isValidPhoneNumber($("#number").val())
//         ) {
//             $(".pnCheckEmpty").show();
//             return false;
//         } else {
//             $(".pnCheckEmpty").hide();
//             alert("now you are hacked! ;)");
//             window.location.href = "index2.html";
//         }

//         // if all the fields are valid, then submit the form or do your desired action here
//         // ...
//     });

//     function isValidName(name) {
//         // your name validation code here
//         var pattern = /^[a-zA-Z ]+$/;
//         return pattern.test(name);
//     }

//     function isValidEmailAddress(email) {
//         // your email validation code here
//         var pattern =
//             /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
//         return pattern.test(email);
//     }

//     function isValidPhoneNumber(phoneNumber) {
//         // your phone number validation code here
//         var pattern = /^\+?[0-9]+$/;
//         return pattern.test(phoneNumber);
//     }
// });

// perfect !
$(document).ready(function () {
    // hide all the error messages initially
    // $(".error").hide();

    $("#stepTo2").click(function () {
        let isFormValid = true;

        // check if the name field is not empty and if the value is a valid name
        if ($("#name").val() === "" || !isValidName($("#name").val())) {
            $(".nCheckEmpty").show();
            isFormValid = false;
        }

        // check if the email field is not empty and if the value is a valid email
        if (
            $("#email").val() === "" ||
            !isValidEmailAddress($("#email").val())
        ) {
            $(".eaCheckEmpty").show();
            isFormValid = false;
        }

        // check if the phone number field is not empty and if the value is a valid phone number
        if (
            $("#number").val() === "" ||
            !isValidPhoneNumber($("#number").val())
        ) {
            $(".pnCheckEmpty").show();
            isFormValid = false;
        }

        if (isFormValid) {
            // hide all error messages
            $(".error").hide();
            window.location.href = "index2.html";
        }
    });

    function isValidName(name) {
        // your name validation code here
        var pattern = /^[a-zA-Z ]+$/;
        return pattern.test(name);
    }

    function isValidEmailAddress(email) {
        // your email validation code here
        var pattern =
            /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return pattern.test(email);
    }

    function isValidPhoneNumber(phoneNumber) {
        // your phone number validation code here
        var pattern = /^\+?[0-9]+$/;
        return pattern.test(phoneNumber);
    }
});

///

var selectedPrice;

$(document).ready(function () {
    $("#arcade").click(function () {
        $("#arcade").css("border", "2px solid rgb(151, 56, 223)");
        $("#advanced").css("border", "2px solid hsl(231, 11%, 63%)");
        $("#pro").css("border", "2px solid hsl(231, 11%, 63%)");
        selectedPrice = $(".arcadePrice").text();
        console.log(selectedPrice);

        localStorage.setItem("selectedPrice", selectedPrice);
    });
});

$(document).ready(function () {
    $("#advanced").click(function () {
        $("#advanced").css("border", "2px solid rgb(151, 56, 223)");
        $("#arcade").css("border", "2px solid hsl(231, 11%, 63%)");
        $("#pro").css("border", "2px solid hsl(231, 11%, 63%)");
        selectedPrice = $(".advancedPrice").text();
        console.log(selectedPrice);

        localStorage.setItem("selectedPrice", selectedPrice);
    });
});

$(document).ready(function () {
    $("#pro").click(function () {
        $("#pro").css("border", "2px solid rgb(151, 56, 223)");
        $("#arcade").css("border", "2px solid hsl(231, 11%, 63%)");
        $("#advanced").css("border", "2px solid hsl(231, 11%, 63%)");
        selectedPrice = $(".proPrice").text();
        console.log(selectedPrice);

        localStorage.setItem("selectedPrice", selectedPrice);
    });
});

//THIS IS JQUERY div id = link anchor hrrf function
$(document).ready(function () {
    $("#index1, #stepBackTo1").click(function () {
        window.location.href = "index1.html";
    });

    $("#index2, #step3To2, .p2Index4").click(function () {
        window.location.href = "index2.html";
    });

    $("#index3, #stepTo3, #stepTo3").click(function () {
        window.location.href = "index3.html";
    });

    $("#index4, #stepTo4").click(function () {
        window.location.href = "index4.html";
    });

    $("#confirm").click(function () {
        window.location.href = "index5.html";
    });
});
//end

$(document).ready(function () {
    const image = $("#tImgX");

    function updateImageSource() {
        if ($(window).width() <= 830) {
            image.attr("src", "assets/images/bg-sidebar-mobile.svg");
        } else {
            image.attr("src", "assets/images/bg-sidebar-desktop.svg");
            $(".menuBox").removeClass("open");
        }
    }

    $(window).resize(updateImageSource);

    updateImageSource();
});

// index 2
//toggle switch
// $(document).ready(function () {
//     $("input#checkbox").prop("checked", false); //initial state every refresh
//     $("input#checkbox").click(function () {
//         if ($(this).is(":checked")) {
//             $(".p2").css("color", "hsl(213, 96%, 18%)");
//             $(".p1").css("color", "hsl(231, 11%, 63%)");
//             $(".free2mnths").css("display", "block");
//             $("#spanMths").text("$90/ano");
//         } else {
//             $(".p2").css("color", "hsl(231, 11%, 63%)");
//             $(".p1").css("color", "hsl(213, 96%, 18%)");
//             $(".free2mnths").css("display", "none");
//             $("#spanMths").text("$9/mo");
//         }
//     });
// });

// maintain the state of the CSS of the checkbox after a page refresh
$(document).ready(function () {
    var checkboxState = localStorage.getItem("checkboxState");
    var selectedPrice = localStorage.getItem("selectedPrice");

    if (checkboxState === "checked") {
        $("input#checkbox").prop("checked", true);
        $(".p2").css("color", "hsl(213, 96%, 18%)");
        $(".p1").css("color", "hsl(231, 11%, 63%)");
        $(".free2mnths").css("display", "block");
        $("#spanMths").text("$90/ano"); // changes the elementstext value
        $("#spanMths2").text("$120/ano");
        $("#spanMths3").text("$150/ano");

        // step 3 id="addOndate1"
        $("#addOndate1").text("+$10/ano");
        $("#addOndate2").text("+$20/ano");
        $("#addOndate3").text("+$20/ano");

        if (selectedPrice === "$90/ano") {
            selectedPrice = $(".arcadePrice").text();
            $(".p1Index4").text("Arcade (Yearly)");
            $(".p3Index4").text(selectedPrice);
            console.log(selectedPrice);
        } else if (selectedPrice === "$120/ano") {
            selectedPrice = $(".advancedPrice").text();
            $(".p1Index4").text("Advanced (Yearly)");
            $(".p3Index4").text(selectedPrice);
            console.log(selectedPrice);
        } else if (selectedPrice === "$150/ano") {
            selectedPrice = $(".proPrice").text();
            $(".p1Index4").text("Pro (Yearly)");
            $(".p3Index4").text(selectedPrice);
            console.log(selectedPrice);
        }
    } else {
        $("input#checkbox").prop("checked", false);
        $(".p2").css("color", "hsl(231, 11%, 63%)");
        $(".p1").css("color", "hsl(213, 96%, 18%)");
        $(".free2mnths").css("display", "none");
        $("#spanMths").text("$9/mês");
        $("#spanMths2").text("$12/mês");
        $("#spanMths3").text("$15/mês");

        if (selectedPrice === "$90/ano") {
            selectedPrice = $(".arcadePrice").text();
            $(".p1Index4").text("Arcade (Monthly)");
            $(".p3Index4").text(selectedPrice);
            console.log(selectedPrice);
        } else if (selectedPrice === "$120/ano") {
            selectedPrice = $(".advancedPrice").text();
            $(".p1Index4").text("Advanced (Monthly)");
            $(".p3Index4").text(selectedPrice);
            console.log(selectedPrice);
        } else if (selectedPrice === "$150/ano") {
            selectedPrice = $(".proPrice").text();
            $(".p1Index4").text("Pro (Monthly)");
            $(".p3Index4").text(selectedPrice);
            console.log(selectedPrice);
        }
    }

    $("input#checkbox").click(function () {
        var selectedPrice = localStorage.getItem("selectedPrice");

        if ($(this).is(":checked")) {
            // console.log(selectedPrice);
            $(".p2").css("color", "hsl(213, 96%, 18%)");
            $(".p1").css("color", "hsl(231, 11%, 63%)");
            localStorage.setItem("checkboxState", "checked");
            $(".free2mnths").css("display", "block");
            $("#spanMths").text("$90/ano");
            $("#spanMths2").text("$120/ano");
            $("#spanMths3").text("$150/ano");

            if (selectedPrice === "$9/mês") {
                selectedPrice = $(".arcadePrice").text();
                $(".p1Index4").text("Arcade (Yearly)");
                $(".p3Index4").text("$90/ano");
                console.log("$90/ano");
                localStorage.setItem("selectedPrice", selectedPrice);
            } else if (selectedPrice === "$12/mês") {
                selectedPrice = $(".advancedPrice").text();
                $(".p1Index4").text("Advanced (Yearly)");
                $(".p3Index4").text(selectedPrice);
                console.log(selectedPrice);
                localStorage.setItem("selectedPrice", selectedPrice);
            } else if (selectedPrice === "$15/mês") {
                selectedPrice = $(".proPrice").text();
                $(".p1Index4").text("Pro (Yearly)");
                $(".p3Index4").text(selectedPrice);
                console.log(selectedPrice);
                localStorage.setItem("selectedPrice", selectedPrice);
            }
        } else {
            // console.log(selectedPrice);
            $(".p2").css("color", "hsl(231, 11%, 63%)");
            $(".p1").css("color", "hsl(213, 96%, 18%)");
            localStorage.setItem("checkboxState", "unchecked");
            $(".free2mnths").css("display", "none");
            $("#spanMths").text("$9/mês");
            $("#spanMths2").text("$12/mês");
            $("#spanMths3").text("$15/mês");

            if (selectedPrice === "$90/ano") {
                selectedPrice = $(".arcadePrice").text();
                $(".p1Index4").text("Arcade (Monthly)");
                $(".p3Index4").text("$9/mês");
                console.log("$9/moX");
                localStorage.setItem("selectedPrice", selectedPrice);
            } else if (selectedPrice === "$120/ano") {
                selectedPrice = $(".advancedPrice").text();
                $(".p1Index4").text("Advanced (Monthly)");
                $(".p3Index4").text(selectedPrice);
                console.log(selectedPrice);
                localStorage.setItem("selectedPrice", selectedPrice);
            } else if (selectedPrice === "$150/ano") {
                selectedPrice = $(".proPrice").text();
                $(".p1Index4").text("Pro (Monthly)");
                $(".p3Index4").text(selectedPrice);
                console.log(selectedPrice);
                localStorage.setItem("selectedPrice", selectedPrice);
            }
        }
    });
});

//
$("input#checkbox").click(function () {
    var selectedPrice = localStorage.getItem("selectedPrice");

    if (!$(this).is(":checked")) {
        // console.log(selectedPrice)
        if (selectedPrice === "$90/ano") {
            selectedPrice = $(".arcadePrice").text();
            $(".p1Index4").text("Arcade (Yearly)");
            $(".p3Index4").text("$9/mês");
            console.log("$9/moY");
            localStorage.setItem("selectedPrice", selectedPrice);
        } else if (selectedPrice === "$120/ano") {
            selectedPrice = $(".advancedPrice").text();
            $(".p1Index4").text("Advanced (Yearly)");
            $(".p3Index4").text("$12/mês");
            console.log("$12/moY");
            localStorage.setItem("selectedPrice", selectedPrice);
        } else if (selectedPrice === "$150/ano") {
            selectedPrice = $(".proPrice").text();
            $(".p1Index4").text("Pro (Yearly)");
            $(".p3Index4").text("$15/mês");
            console.log("$15/moY");
            localStorage.setItem("selectedPrice", selectedPrice);
        }
    } else {
        // console.log(selectedPrice);
        if (selectedPrice === "$9/mês") {
            selectedPrice = $(".arcadePrice").text();
            $(".p1Index4").text("Arcade (Monthly)");
            $(".p3Index4").text("$90/ano");
            console.log("$90/anoY");
            localStorage.setItem("selectedPrice", selectedPrice);
        } else if (selectedPrice === "$12/mês") {
            selectedPrice = $(".advancedPrice").text();
            $(".p1Index4").text("Advanced (Monthly)");
            $(".p3Index4").text("$120/ano");
            console.log("$120/anoY");
            localStorage.setItem("selectedPrice", selectedPrice);
        } else if (selectedPrice === "$15/mês") {
            selectedPrice = $(".proPrice").text();
            $(".p1Index4").text("Pro (Monthly)");
            $(".p3Index4").text("$150/ano");
            console.log("$150/anoY");
            localStorage.setItem("selectedPrice", selectedPrice);
        }
    }
});

// $("input#checkbox").click(function () {
//     var selectedPrice = localStorage.getItem("selectedPrice");

//     if (!$(this).is(":checked")) {
//         // console.log(selectedPrice)
//         if (selectedPrice === "$120/ano") {
//             selectedPrice = $(".advancedPrice").text();
//             $(".p1Index4").text("Advanced (Yearly)");
//             $(".p3Index4").text("$12/mo");
//             console.log("$12/moY");
//             localStorage.setItem("selectedPrice", selectedPrice);
//         }
//     } else {
//         // console.log(selectedPrice);
//         if (selectedPrice === "$12/mo") {
//             selectedPrice = $(".advancedPrice").text();
//             $(".p1Index4").text("Advanced (Monthly)");
//             $(".p3Index4").text("$120/ano");
//             console.log("$120/anoY");
//             localStorage.setItem("selectedPrice", selectedPrice);
//         }
//     }
// });

// index 3 onlineService
$(document).ready(function () {
    var onlineService = localStorage.getItem("onlineService");
    var checkboxState = localStorage.getItem("checkboxState");

    if (onlineService === "checked") {
        $("#onlineService").prop("checked", true);
        localStorage.setItem("onlineService", "checked");
        $(".p5Index4").css("display", "block");
        if (checkboxState === "checked") {
            $("#p5Index4").text("+$10/ano");
        } else {
            $("#p5Index4").text("+$1/mês");
        }
    } else {
        $("#onlineService").prop("checked", false);
        localStorage.setItem("onlineService", "unchecked");
        $(".p5Index4").css("display", "none");
    }

    $("#onlineService").click(function () {
        var checkboxState = localStorage.getItem("checkboxState");
        if ($(this).is(":checked")) {
            $(".p5Index4").css("display", "block");
            localStorage.setItem("onlineService", "checked");
            if (checkboxState === "checked") {
                $("#p5Index4").text("+$10/ano");
            } else {
                $("#p5Index4").text("+$1/mês");
            }
        } else {
            localStorage.setItem("onlineService", "unchecked");
            $(".p5Index4").css("display", "none");
        }
    });
});

// index 3 LargerStorage
$(document).ready(function () {
    var largerStorage = localStorage.getItem("largerStorage");
    var checkboxState = localStorage.getItem("checkboxState");

    if (largerStorage === "checked") {
        $("#largerStorage").prop("checked", true);
        localStorage.setItem("largerStorage", "checked");
        $(".p6Index4").css("display", "block");
        if (checkboxState === "checked") {
            $("#p6Index4").text("+$20/ano");
        } else {
            $("#p6Index4").text("+$2/mês");
        }
    } else {
        $("#largerStorage").prop("checked", false);
        localStorage.setItem("largerStorage", "unchecked");
        $(".p6Index4").css("display", "none");
    }

    $("#largerStorage").click(function () {
        var checkboxState = localStorage.getItem("checkboxState");
        if ($(this).is(":checked")) {
            $(".p6Index4").css("display", "block");
            localStorage.setItem("largerStorage", "checked");
            if (checkboxState === "checked") {
                $("#p6Index4").text("+$20/ano");
            } else {
                $("#p6Index4").text("+$2/mês");
            }
        } else {
            localStorage.setItem("largerStorage", "unchecked");
            $(".p6Index4").css("display", "none");
        }
    });
});

// index 3 customizableProfile
$(document).ready(function () {
    var customizableProfile = localStorage.getItem("customizableProfile");
    var checkboxState = localStorage.getItem("checkboxState");

    if (customizableProfile === "checked") {
        $("#customizableProfile").prop("checked", true);
        localStorage.setItem("customizableProfile", "checked");
        $(".p7Index4").css("display", "block");
        if (checkboxState === "checked") {
            $("#p7Index4").text("+$20/ano");
        } else {
            $("#p7Index4").text("+$2/mês");
        }
    } else {
        $("#customizableProfile").prop("checked", false);
        localStorage.setItem("customizableProfile", "unchecked");
        $(".p7Index4").css("display", "none");
    }

    $("#customizableProfile").click(function () {
        var checkboxState = localStorage.getItem("checkboxState");
        if ($(this).is(":checked")) {
            $(".p7Index4").css("display", "block");
            localStorage.setItem("customizableProfile", "checked");
            if (checkboxState === "checked") {
                $("#p7Index4").text("+$20/ano");
            } else {
                $("#p7Index4").text("+$2/mês");
            }
        } else {
            localStorage.setItem("customizableProfile", "unchecked");
            $(".p7Index4").css("display", "none");
        }
    });
});

//global next buttons
// const elementToMove = document.getElementById("element-to-move");
// const targetContainer = document.getElementById("target-container");

// function moveElement() {
//     targetContainer.appendChild(elementToMove);
// }

// if (window.matchMedia("(max-width: 830px)").matches) {
//     moveElement();
// }

// window.addEventListener("resize", function () {
//     if (window.matchMedia("(max-width: 830px)").matches) {
//         moveElement();
//     }
// });

// const elementToMove = document.getElementById("element-to-move");
// const targetContainer = document.getElementById("target-container");

// function moveElement() {
//     targetContainer.appendChild(elementToMove);
//     targetContainer.offsetHeight; // Forces the page to update
// }

// if (window.matchMedia("(max-width: 830px)").matches) {
//     moveElement();
// }

// window.addEventListener("resize", function () {
//     if (window.matchMedia("(max-width: 830px)").matches) {
//         moveElement();
//     }
// });

let mudarCor = document.getElementsByClassName('mudarcor')
let box = document.getElementsByClassName('addOnBox1');

box[0].addEventListener('change', () => {
    box[0].classList.toggle('mudarcor')
});

box[1].addEventListener('change', () => {
    box[1].classList.toggle('mudarcor')
});

box[2].addEventListener('change', () => {
    box[2].classList.toggle('mudarcor')
});