const username = document.querySelector('#username')
const feedback = document.querySelector('.feedback');

const form = document.querySelector('.signup-form');
const usernamePattern = /^[a-z$]{6,12}$/;
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
  e.preventDefault(); // Nu isi mai da refresh
  //console.log(username.value);
  console.log(form.username.value);

  // validation
  const username = form.username.value;


  if(usernamePattern.test(username)) {
    //feedback good info
    feedback.textContent = 'that username is valid'
  } else {
    //feedback help info
    feedback.textContent = 'the name must contain letters only & be between 6 and 12 characters long'
  }
})

// live feedback

form.username.addEventListener('keyup', e => {
  // console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    // console.log('passed');
    username.setAttribute('class', 'success');
  } else {
    console.log('failed');
    username.setAttribute('class', 'error');
  }
})






// testing RegEx
// const username = 'aliutz';
// const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);   // true / false
// console.log(result);


// if (result ){
//   console.log("regex test passed");
// } else {
//   console.log("regex test faile :(");
// }

// let result = username.search(pattern); // aici iti da raspuns numeric, indexi pe unde ijncep => recomandat test