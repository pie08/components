const blob = document.querySelector(".blob");

window.onmousemove = (e) => {
  const { clientX, clientY } = e;
  // blob.style.top = `${clientY}px`;
  // blob.style.left = `${clientX}px`;
  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};
