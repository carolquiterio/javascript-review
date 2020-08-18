//tudo é objeto

const menu = {
  class: ".principal",
  ativar() {
    const menuElement = document.querySelector(this.class);
    console.log(menuElement);
  }
};

menu.ativar();

["10", "20", "30"].map(Number);
"JavaScript".toUpperCase();

const body = document.querySelector("body");
body.classList.add("js");
