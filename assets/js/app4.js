$(document).ready(function () {
    var selectedPrice = localStorage.getItem("selectedPrice");
    // do something with the value of selectedPrice
    // $(".p3Index4").text(selectedPrice);
    if (selectedPrice === "$90/ano") {
        $(".p1Index4").text("Intermediario (Anual)");
        $(".p3Index4").text(selectedPrice);
        $("#arcade").css("border", "2px solid rgb(151, 56, 223)");
        $("#advanced").css("border", "2px solid hsl(231, 11%, 63%)");
        $("#pro").css("border", "2px solid hsl(231, 11%, 63%)");
    } else if (selectedPrice === "$120/ano") {
        $(".p1Index4").text("Avançado (Anual)");
        $(".p3Index4").text(selectedPrice);
        $("#advanced").css("border", "2px solid rgb(151, 56, 223)");
        $("#arcade").css("border", "2px solid hsl(231, 11%, 63%)");
        $("#pro").css("border", "2px solid hsl(231, 11%, 63%)"); // do something else
    } else if (selectedPrice === "$150/ano") {
        $(".p1Index4").text("Pro (Anual)");
        $(".p3Index4").text(selectedPrice);
        $("#pro").css("border", "2px solid rgb(151, 56, 223)");
        $("#arcade").css("border", "2px solid hsl(231, 11%, 63%)");
        $("#advanced").css("border", "2px solid hsl(231, 11%, 63%)"); // do something else
    }

    // mêsnthly
    else if (selectedPrice === "$9/mês") {
        $(".p1Index4").text("intermediario (Mensal)");
        $(".p3Index4").text(selectedPrice);
        $("#arcade").css("border", "2px solid rgb(151, 56, 223)");
        $("#advanced").css("border", "2px solid hsl(231, 11%, 63%)");
        $("#pro").css("border", "2px solid hsl(231, 11%, 63%)");
    } else if (selectedPrice === "$12/mês") {
        $(".p1Index4").text("Avançado (Mensal)");
        $(".p3Index4").text(selectedPrice);
        $("#advanced").css("border", "2px solid rgb(151, 56, 223)");
        $("#arcade").css("border", "2px solid hsl(231, 11%, 63%)");
        $("#pro").css("border", "2px solid hsl(231, 11%, 63%)"); // do something else
    } else if (selectedPrice === "$15/mês") {
        $(".p1Index4").text("Pro (Mensal)");
        $(".p3Index4").text(selectedPrice);
        $("#pro").css("border", "2px solid rgb(151, 56, 223)");
        $("#arcade").css("border", "2px solid hsl(231, 11%, 63%)");
        $("#advanced").css("border", "2px solid hsl(231, 11%, 63%)"); // do something else
    }
});

// $(document).ready(function () {
//     var selectedPrice = localStorage.getItem("selectedPrice");
//     var checkboxState = localStorage.getItem("checkboxState");
//     if (selectedPrice === "$90/ano") {
//         if (checkboxState === "checked") {
//             $("#p1Index4").text("Arcade (Yearly)");
//             $("#p3Index4").text(selectedPrice); // do something// do something
//         }
//     }
// });

$(document).ready(function () {
    var checkboxState = localStorage.getItem("checkboxState");
    var num0 = $("#p3Index4").text().match(/\d+/);
    var num1 = $("#p5Index4").text().match(/\d+/);
    var num2 = $("#p6Index4").text().match(/\d+/);
    var num3 = $("#p7Index4").text().match(/\d+/);
    var totalResult =
        (num0 ? parseInt(num0[0]) : 0) +
        (num1 ? parseInt(num1[0]) : 0) +
        (num2 ? parseInt(num2[0]) : 0) +
        (num3 ? parseInt(num3[0]) : 0);
    console.log(totalResult);
    if (checkboxState === "checked") {
        $(".totalText").text("Total (por ano)");
        $(".totalNumber").text("+$" + totalResult + "/ano");
    } else {
        $(".totalText").text("Total (por mês)");
        $(".totalNumber").text("+$" + totalResult + "/mês");
    }
});
