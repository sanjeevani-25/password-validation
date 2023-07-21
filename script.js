const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const reqList = document.querySelectorAll(".requirement-list li");

const req = [
    { regex: /.{8,}/, index: 0 },
    { regex: /[0-9]/, index: 1 },
    { regex: /[a-z]/, index: 2 },
    { regex: /[A-Z]/, index: 3 },
    { regex: /[^A-Za-z0-9]/, index: 4 },
]

passwordInput.addEventListener("keyup", (e) => {
    req.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const reqItem = reqList[item.index];

        if (isValid) {
            reqItem.firstElementChild.className = "fa-solid fa-check";
            reqItem.classList.add("valid");
        }
        else {
            reqItem.firstElementChild.className = "fa-solid fa-circle";
            reqItem.classList.remove("valid");
        }
    })
})

eyeIcon.addEventListener("click", () => {

    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    eyeIcon.className = eyeIcon.classList.contains("fa-eye") ? `fa-solid fa-eye-slash` : `fa-solid fa-eye`;
});