// Сайт работает без сторонних библиотек.

document.addEventListener('DOMContentLoaded', function () {
  const quiz = document.getElementById('spb-quiz');
  if (!quiz) return;

  const result = document.getElementById('quiz-result');
  const questions = Array.from(quiz.querySelectorAll('.quiz-question'));

  function checkQuiz() {
    const completed = questions.every(function (question) {
      return question.querySelector('input:checked');
    });

    result.classList.toggle('visible', completed);
  }

  quiz.addEventListener('change', checkQuiz);

;
});
