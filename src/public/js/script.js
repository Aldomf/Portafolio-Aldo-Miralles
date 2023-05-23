// function to make interactive the nav bar
let isNavVisible = false;
let nav = document.getElementById("nav");

function showHideNav() {
    if (isNavVisible) {
        nav.classList = "";
        isNavVisible = false;
    } else {
        nav.classList = "responsive";
        isNavVisible = true;
    }
}
// function to hide nav after interaction
function hideNave() {
    nav.classList = "";
    isNavVisible = false;
}

let responsiveNav = document.getElementById("responsive-nav");
responsiveNav.addEventListener("click", showHideNav);


// function to make interactive the skill bars
function skillAnimation() {
    let skills = document.getElementById("skills");
    let skillDistance = window.innerHeight - skills.getBoundingClientRect().top;
    if (skillDistance >= 300) {
        let progress = document.getElementsByClassName("progress");
        progress[0].classList.add("htmlcss");
        progress[1].classList.add("javascript");
        progress[2].classList.add("react");
        progress[3].classList.add("figma");
        progress[4].classList.add("nodejs");
        progress[5].classList.add("communication");
        progress[6].classList.add("teamwork");
        progress[7].classList.add("creativity");
        progress[8].classList.add("devotion");
        progress[9].classList.add("project");
    }
}

window.onscroll = () => skillAnimation();


