const rowElements = document.querySelectorAll(".row");
rowElements.forEach(function(rowElement) {
    rowElement.addEventListener("mouseover", function() {
        const src_1 = this.querySelector('img').dataset.srcV1;
        this.querySelector('img').setAttribute('src', src_1);
    });
    rowElement.addEventListener("mouseout", function() {
        const src_2 = this.querySelector('img').dataset.srcV2;
        this.querySelector('img').setAttribute('src', src_2);
    });
})

function icoṇ̣̣̣() {
    document.querySelector(".shopping").classList.toggle("active");
}

function iconsearch() {
    document.querySelector(".search").classList.toggle("active");
}
var slide_index = 1;
slideDisplay(slide_index);

function nextSlide() {
    slideDisplay(slide_index += 1);
}

function slideDisplay(n) {
    var slides = document.getElementsByClassName("showSlider");
    if (n > slides.length) {
        slide_index = 1;
    } else if (n < 1) {
        slide_index = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}