function upperName(name) {
  return name.toUpperCase();
}

const lowerName = function(name) {
  return name.toLoweCase();
};

const upperNameWithArrow = name => name.toUpperCase();
const countLetters = word => word.length;

console.log(countLetters("roiiiiiii"));

class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = "active";
  }
  addActiveEvent() {
    this.menuElement.addEventListener("click", event => {
      console.log(this);
      event.target.classList.add(this.activeClass);
    });
  }
}

const menu = new Menu(".principal");
menu.addActiveEvent();

//duvida diferença entre função e método :/
//quando usar o modo 1 e quando usar o modo 2
