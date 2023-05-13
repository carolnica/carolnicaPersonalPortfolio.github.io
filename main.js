let seeAllBtn = document.getElementById("see-all");
let blackScreen = document.getElementById("black-screen");
let projectScreen = document.getElementById("project-screen");
let closeBtn = document.getElementById("close-screen");

seeAllBtn.onclick = () => {
    blackScreen.style.display = "block";
    projectScreen.style.display = "block";
    projectScreen.style.opacity = "1";
    closeBtn.style.display = "block";
    document.body.style.overflow = "hidden";
}

closeBtn.addEventListener("click", () => {
    window.location.reload();
})

