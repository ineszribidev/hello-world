import React from "react";

const HelloWorld = () => {
  function sayHello() {
    alert("Hello, you are in th World of Ines!");
  }

  return <button onClick={sayHello}>Click me!</button>;
};

export default HelloWorld;
