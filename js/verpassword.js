const password = document.getElementById("password");
const toggle_password = document.getElementById("toggle_password");

toggle_password.addEventListener("click", () => {
    const type = password.type === "password" ? "text" : "password";
    password.type = type;
    toggle_password.classList.toggle("fa-eye")
    toggle_password.classList.toggle("fa-eye-slash")
})