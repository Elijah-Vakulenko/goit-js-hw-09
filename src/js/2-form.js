
// Використовуй метод делегування для відстеження змін у формі через подію input. Зберігай актуальні дані з полів email та message у formData та записуй цей об’єкт у локальне сховище. Використовуй ключ "feedback-form-state" для зберігання даних у сховищі.
// При завантаженні сторінки перевір, чи є дані у локальному сховищі. Якщо так, використовуй їх для заповнення форми та об'єкта formData. Якщо ні, залиш поля форми порожніми.
// Якщо всі поля заповнені, виведи у консоль об’єкт formData з актуальними значеннями, очисти локальне сховище, об’єкт formData і поля форми.

// При введенні даних у будь-який елемент форми вони записуються у локальне сховище під ключем "feedback-form-state", збережені дані не містять пробіли по краях
// Введення даних в одне поле форми не видаляє дані в сховищі для іншого
// При оновленні сторінки дані з локального сховища підставляються в елементи форми, у полях форми відсутні undefined
// Під час сабміту форми, якщо обидва елементи форми заповнені, виводиться у консоль об'єкт з полями email, message та їхніми поточними значеннями, а також очищаються сховище і поля форми
// Якщо після сабміту форми ввести в будь-який елемент форми дані, то в локальному сховищі не з’являються дані від попереднього сабміта


const formData = {
    email: "",
    message: "", 
}

const feedbackForm = document.querySelector('.feedback-form');

const inputs = document.querySelectorAll("input, textarea");

// const btn = document.querySelector("button");

const localStorageKey = "feedback-form-state";

inputs.forEach(input => {
    input.addEventListener("input", (event) => {
        localStorage.setItem(localStorageKey, event.target.value);
    });
});



feedbackForm.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
    
    event.preventDefault();

    let filledForm = true;

    inputs.forEach(input => {
        const trimmedInput = input.value.trim();
        if (trimmedInput === "") {
            filledForm = false;
            alert("Fill please all fields");
        } 
    })

    const elements = event.currentTarget.elements;
    
    const loginInfo = {};
    loginInfo.email = elements.email.value;
    loginInfo.message = elements.message.value;
    console.log(loginInfo);

    localStorage.removeItem(localStorageKey);
    feedbackForm.reset();
}