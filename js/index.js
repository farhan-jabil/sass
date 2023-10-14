

var serviceHeader = document.getElementById("services-cards");
var serviceBtns = serviceHeader.getElementsByClassName("services-cards-button");
for (var i = 0; i < serviceBtns.length; i++) {
    serviceBtns[i].addEventListener("mouseover", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

var pricingHeader1 = document.getElementById("pills-monthly");
var pricingBtns1 = pricingHeader1.getElementsByClassName("tab-items-monthly");
for (var i = 0; i < pricingBtns1.length; i++) {
    pricingBtns1[i].addEventListener("mouseover", function () {
        var current = document.getElementsByClassName("activeee");
        current[0].className = current[0].className.replace(" activeee", "");
        this.className += " activeee";
    });
}

var pricingHeader2 = document.getElementById("pills-yearly");
var pricingBtns2 = pricingHeader2.getElementsByClassName("tab-items-yearly");
for (var i = 0; i < pricingBtns2.length; i++) {
    pricingBtns2[i].addEventListener("mouseover", function () {
        var current = document.getElementsByClassName("activeeee");
        current[0].className = current[0].className.replace(" activeeee", "");
        this.className += " activeeee";
    });
}


