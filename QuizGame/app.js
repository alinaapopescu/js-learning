const correctAnswers = ['A', 'A', 'B', 'A'];
const form = document.querySelector('.quiz-form');
// console.log(form);
const result = document.querySelector('.result');
// console.log(result);

form.addEventListener('submit', e => {
  e.preventDefault();


  let score = 0;
  const userAnwers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  //check answer
  userAnwers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  })

  // console.log(score);

  // show result on page
  scrollTo(0, 0);

  result.classList.remove('d-none');

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

});

// let i = 0;
// const timer = setInterval(() => {
//   i++;
//   if (i === 5) {
//     console.log('score');
//     clearInterval(timer);
//   }
// }, 1000);





