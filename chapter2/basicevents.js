// create new li element

const ul = document.querySelector('ul');
console.log(ul.innerHTML);



// ADD THINGS
const button = document.querySelector('button');
button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  // ul.append(li); // buttom
  ul.prepend(li); // top
});




// items.forEach(item => {
//   item.addEventListener('click', e =>{
//     console.log(e);
//     console.log(e.target);
//     console.log(item)
//   })
// })


const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', e =>{
    // e.target.style.textDecoration = 'line-through';
    console.log('event in li');
    e.stopPropagation(); // 
    e.target.remove();
  })
})

ul.addEventListener('click', e =>{
  console.log('event in ul');
})