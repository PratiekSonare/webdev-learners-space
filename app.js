document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const quizData = [
      {
        question: 'Who is the cover star of FIFA 21?',
        choices: ['Lionel Messi', 'Cristiano Ronaldo', 'Kylian Mbappé', 'Neymar Jr'],
        correct: 'Kylian Mbappé'
      },
      {
        question: 'Which team won the FIFA eWorld Cup in 2019?',
        choices: ['FaZe Clan', 'Complexity Gaming', 'Fnatic', 'Fnatic'],
        correct: 'Complexity Gaming'
      }
      // Add more questions as needed
    ];
  
    quizData.forEach((quiz, index) => {
      const quizElement = document.createElement('div');
      quizElement.className = 'quiz';
  
      const questionElement = document.createElement('h3');
      questionElement.textContent = `${index + 1}. ${quiz.question}`;
      quizElement.appendChild(questionElement);
  
      quiz.choices.forEach(choice => {
        const label = document.createElement('label');
        label.textContent = choice;
  
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `quiz-${index}`;
        input.value = choice;
  
        label.insertBefore(input, label.firstChild);
        quizElement.appendChild(label);
      });
  
      quizContainer.appendChild(quizElement);
    });
  
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Quiz';
    quizContainer.appendChild(submitButton);
  
    submitButton.addEventListener('click', () => {
      let score = 0;
  
      quizData.forEach((quiz, index) => {
        const selected = document.querySelector(`input[name="quiz-${index}"]:checked`);
        if (selected && selected.value === quiz.correct) {
          score += 1;
        }
      });
  
      alert(`You scored ${score} out of ${quizData.length}`);
    });
  });
  