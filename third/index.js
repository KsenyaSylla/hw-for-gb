const productNameInput = document.querySelector(".inputProductName");
const feedbackText = document.querySelector(".feedbackTextAdd");
const addFeedbackBtn = document.querySelector(".addFeedback");
const productList = document.querySelector(".productList");
let idToStorage = 0;
const separator = "|";

addFeedbackBtn.addEventListener("click", () => {
    localStorage.setItem(productNameInput.value + separator + idToStorage, feedbackText.value);
    const productNameLi = document.createElement("li");
    productNameLi.classList.add("productName");
    productNameLi.id = productNameInput.value;
    const feedbackList = document.createElement("ul");
    feedbackList.id = productNameInput.value;
    feedbackList.textContent = productNameInput.value;
    feedbackList.addEventListener("click", (e) => {
        const productName = e.target.textContent;
        const feedbacks = findAllFeedbackInStorage(productName);
        for (let key in feedbacks) {
            let feedback = feedbacks[key];
            generateFeedbackMarkup(feedback, key, e.target);
        }
    });
    productNameLi.insertAdjacentElement("beforeend", feedbackList);
    checkEl(productNameInput.value) ? console.log("Элемент существует") : productList.insertAdjacentElement("beforeend", productNameLi);
    idToStorage++;
});

function findAllFeedbackInStorage(productName) {
    let feedbacks = {};
    for (let i = 0; i < localStorage.length; i++) {
        let key = productName + separator + i;
        let feedback = localStorage.getItem(key);
        if (feedback !== null) {
            feedbacks[key] = feedback;
        }
    }
    return feedbacks;
};

function checkEl(id) {
    let exist = false;
    if (productList.children.length === 0) {
        exist = false;
        console.log("Список продуктов вообще пуст");
    } else if (document.querySelector(`#${id}`)) {
        exist = true;
    };
    return exist;
};

function generateFeedbackMarkup(feedback, key, el) {
    const feedbackText = document.createElement("li");
    feedbackText.textContent = feedback;
    const delButton = document.createElement("button");
    delButton.textContent = "Удалить отзыв";
    delButton.addEventListener("click", (e) => {
        localStorage.removeItem(key);
        feedbackText.remove();
    });
    feedbackText.insertAdjacentElement("beforeend", delButton);
    el.insertAdjacentElement("beforeend", feedbackText);
};