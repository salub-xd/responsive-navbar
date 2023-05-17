console.log("Navbar");

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropdownMenu = document.querySelector(".dropdown_menu");

toggleBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("open");
    let isOpen = dropdownMenu.classList.contains("open");
    toggleBtnIcon.classList = isOpen
        ? ` fa-solid fa-xmark`
        : `fa fa-bars aria-hidden="true"`;
});