const rowElements = document.querySelectorAll(".row");
rowElements.forEach(function(rowElement) {
    rowElement.addEventListener("mouseover", function() {
        const src_1 = this.querySelector("img").dataset.srcV1;
        this.querySelector("img").setAttribute("src", src_1);
    });
    rowElement.addEventListener("mouseout", function() {
        const src_2 = this.querySelector("img").dataset.srcV2;
        this.querySelector("img").setAttribute("src", src_2);
    });
});
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");
let a = 1;
plus.addEventListener("click", () => {
    a++;
    a = a < 10 ? "" + a : a;
    num.innerText = a;
});
minus.addEventListener("click", () => {
    if (a > 1) {
        a--;
        a = a < 10 ? "" + a : a;
        num.innerText = a;
    }
});
const getElements = document.querySelectorAll(".mall_li");
const getImage = document.querySelector(".img");
getElements.forEach(function(element) {
    element.addEventListener("click", function() {
        const changeImage = element.querySelector('img').getAttribute('src');
        getImage.querySelector('img').setAttribute("src", changeImage);
    });
});