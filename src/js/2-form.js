const formData = {
    email: "",
    message: "", 
}

const feedbackForm = document.querySelector('.feedback-form');

const localStorageKey = "feedback-form-state";

feedbackForm.addEventListener("input", (event) => {
    const target = event.target;
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        const savedData = {};
        feedbackForm.querySelectorAll("input, textarea").forEach(input => {
            savedData[input.name] = input.value.trim();
        });
        localStorage.setItem(localStorageKey, JSON.stringify(savedData));
    }
});

const savedData = JSON.parse(localStorage.getItem(localStorageKey));
if (savedData) {
    feedbackForm.querySelectorAll("input, textarea").forEach(input => {
        const fieldName = input.name;
        if (savedData[fieldName]) {
            input.value = savedData[fieldName];
        }
    });
}

feedbackForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    let filledForm = true;

    feedbackForm.querySelectorAll("input, textarea").forEach(input => {
        const trimmedInput = input.value.trim();
        if (trimmedInput === "") {
            filledForm = false;
            alert("Fill please all fields");
        return;
        }
    });

    const elements = event.currentTarget.elements;
    const formData = {
        email: elements.email.value,
        message: elements.message.value
    };
    console.log(formData);

    localStorage.removeItem(localStorageKey);
    feedbackForm.reset(); 
}
