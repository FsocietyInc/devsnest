const welcome = {
  name: "Prasad",
  greet: function (a, b) {
    console.log("Hello " + this.name);
    console.log(a * b);
  },
};
const goodbye = {
  name: "Dev",
};
welcome.greet.call(goodbye, 5, 9);
welcome.greet.apply(welcome, [7, 3]);
const details = welcome.greet.bind(goodbye, 5, 3);
details();
