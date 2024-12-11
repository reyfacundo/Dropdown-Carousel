document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".modal-outer").classList.toggle("hidden");
});
document.querySelector(".modal-outer").addEventListener("click", (e) => {
    console.log(e.target);
    if (
        e.target.classList.contains("modal-outer") ||
        e.target.classList.contains("close-dropdown")
    ) {
        document.querySelector(".modal-outer").classList.toggle("hidden");
    }
});
