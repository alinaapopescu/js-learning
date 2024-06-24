// object literals


/// practic daca pui this intr-o arrow function o sa fie this global, trebuie sa fie functie normala (regular) ca sa se refere la obiect

// let blogs = [
//   {
//     title : 'why mac ',
//     likes: 30
//   },
//   {
//     title : '10 things to make during summer',
//     likes: 100
//   },

// ]


// console.log(blogs);


let user = {
  name: 'alina',
  age: 30,
  email: 'alinaelena1347@gmail.com',
  blogs:  [
    {
      title : 'why mac ',
      likes: 30
    },
    {
      title : '10 things to make during summer',
      likes: 100
    },
  
  ],
  login: function() {
    console.log('user is logged in');
  },
  logout: function() {
    console.log('user is logged out');
  },
  logBlocs: () => {
    // this.blogs.forEach(blog =>{
    //   console.log(blog);
    // })
    // console.log(t)
  }
};

user.logBlocs();

// console.log(this)

// console.log(user);
// user.login();
// user.logout();

// console.log(user[key]);