function handleMouseMove(event) {
  const { clientX, clientY } = event;

  console.log(clientX, clientY);
}

document.documentElement.addEventListener("mousemove", handleMouseMove);
