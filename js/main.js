const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const images = document.querySelectorAll(".gallery-img");
let currentIndex;

images.forEach((img, index) => {
    img.onclick = function() {
        modal.style.display = "block";
        modal.style.alignContent = "center";
        modalImg.src = this.src;
        currentIndex = index;
    }
});

function sortSelection(filter) {
    images.forEach((img) => {
        const type = img.className.split(" ");
        const imgName = type[1];
        if (filter === "*") {
            $("." + imgName).show();
            $(".view-more").hide();
        } else if (imgName === filter) {
            $("." + imgName).show();
            $(".view-more").show();
        } else {
            $("." + imgName).hide();
        }
    })
};

const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    modal.style.display = "none";
}

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

prevBtn.onclick = function() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    modalImg.src = images[currentIndex].src;
}

nextBtn.onclick = function() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    modalImg.src = images[currentIndex].src;
}
