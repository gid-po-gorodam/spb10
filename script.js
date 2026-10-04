// Сайт работает без сторонних библиотек.

document.addEventListener('DOMContentLoaded', function () {
  const quiz = document.getElementById('spb-quiz');
  if (!quiz) return;

  const result = document.getElementById('quiz-result');
  const questions = Array.from(quiz.querySelectorAll('.quiz-question'));

  function checkQuiz() {
    // Для каждого вопроса достаточно выбрать хотя бы один вариант.
    // При этом внутри одного вопроса можно отметить несколько вариантов.
    const completed = questions.every(function (question) {
      return question.querySelectorAll('input[type="checkbox"]:checked').length > 0;
    });

    result.classList.toggle('visible', completed);
  }

  quiz.addEventListener('change', checkQuiz);
});
