window.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("reviewtext");
    const output = document.getElementById("reviewoutput");

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && input.value.trim() !== "") {
            const newReview = document.createElement("p");
            newReview.textContent = input.value;
            output.appendChild(newReview);
            input.value = "";
        }
    }); 
})

function handleLoginForm(event) {
    event.preventDefault();
    window.location.href = "dashboard.html";
}

function handleSignupForm(event) {
    event.preventDefault();
    window.location.href = "emptydash.html";
}

window.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openpopup");
    const closeBtn = document.getElementById("closepopup");
    const popup = document.getElementById("popup");
    openBtn.addEventListener("click", () => {
        popup.classList.add("open");
        openBtn.style.display = 'none';
    });
    closeBtn.addEventListener("click", () => {
        popup.classList.remove("open");
    });
});
