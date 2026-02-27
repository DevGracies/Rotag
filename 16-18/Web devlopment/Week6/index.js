const questions = document.querySelectorAll(".faq-question");
questions.forEach(q => {
  q.addEventListener("click"), ()  => {
    q.nextElementSibling.classList.toggle("open");
  };
})

