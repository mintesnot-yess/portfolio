var currentIndex = 0;
let skillsDiv = document.querySelectorAll(".text section ul li");
let bar = document.getElementById("bar");
skillsDiv[currentIndex].style.height = "40px";
// for each skill 
setInterval(() => {
    skillsDiv[currentIndex].style.height = "0px";
    currentIndex = (currentIndex + 1) % skillsDiv.length;
    skillsDiv[currentIndex].style.height = "40px";

}, 3000);

bar.addEventListener("click", () => {
    let nav = document.querySelector("nav ul");
    if (nav.style.height == "200px") {
        nav.style.height = 0;
        bar.classList.add("fa-bars")
        bar.classList.remove("fa-times")

    } else {
        nav.style.height = "200px";
        bar.classList.add("fa-times")
        bar.classList.remove("fa-bars")


    }
}

)

let ProImages = document.querySelectorAll(".project img");
// foreach all images
ProImages.forEach((image) => {

    image.addEventListener("load", () => {
        image.style.display = "block";
        image.style.animation = ' left-to-right-animation 1s ease-in-out';


    })
})


// page is loadig show loadging page
