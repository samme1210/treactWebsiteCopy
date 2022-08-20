document.querySelectorAll(".question__button").forEach(button => {
    button.addEventListener("click", () => {
        const questionContent = button.nextElementSibling;

        button.classList.toggle('question__button--active');

        if (button.classList.contains('question__button--active')) {
            questionContent.style.maxHeight = questionContent.scrollHeight + 'px';

        } else {
            questionContent.style.maxHeight = 0;
        }
    });
});

function toggleClass() {
    var elem = document.getElementById("chevron180");
    elem.classList.toggle("rotate-180");
}


