// rotate hero section flowers on load
const petals = document.querySelectorAll(".petal");
let angle = 0;

function rotateFlowers() {
  angle++;

  petals.forEach((petal, index) => {
    const individualAngle = angle + index * 45; // Adjust each petal's rotation
    petal.style.transform = `rotate(${individualAngle}deg)`;
  });

  //   requestAnimationFrame(rotateFlowers);
}

const intervalId = setInterval(rotateFlowers, 16);
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);

// window.addEventListener("load", rotateFlowers);

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mousedown", startDrag);

  function startDrag(event) {
    const block = event.target;
    let offsetX = event.clientX - block.offsetLeft;
    let offsetY = event.clientY - block.offsetTop;

    // Mouse move listener
    function moveBlock(e) {
      block.style.left = `${e.clientX - offsetX}px`;
      block.style.top = `${e.clientY - offsetY}px`;
    }

    // Remove listeners on mouseup
    function stopDrag() {
      document.removeEventListener("mousemove", moveBlock);
      document.removeEventListener("mouseup", stopDrag);
    }

    // Attach mousemove and mouseup to the document
    document.addEventListener("mousemove", moveBlock);
    document.addEventListener("mouseup", stopDrag);
  }
});
