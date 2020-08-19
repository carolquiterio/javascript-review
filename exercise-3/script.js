//destructing
function handleMouseMove({ clientX, clientY }) {
  console.log(clientX, clientY);
}

const frutas = ["Banana", "Uva"];

const [frutaUm, frutaDois] = frutas;
//console.log(frutaUm, frutaDois);

const useState = [
  "blue",
  function(color) {
    useState[0] = color;
  }
];

const [color, setColor] = useState;

//setColor("red");

//document.documentElement.addEventListener("mousemove", handleMouseMove);
