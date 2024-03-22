const buttons = document.getElementsByClassName("sidebar-dropdown-btn");

Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => {
        const dropdown = button.querySelector(".sidebar-dropdown");

        if (dropdown.style.maxHeight) 
            dropdown.style.maxHeight = null;
        else 
            dropdown.style.maxHeight = dropdown.scrollHeight + "px";
    });
});
