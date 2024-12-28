const text = "hello there! i'm neha.";
const container = document.getElementById("text-container");
let index = 0;

function printLetter() {
  if (index < text.length) {
    container.textContent += text.charAt(index);
    index++;
    setTimeout(printLetter, 100); // Adjust the delay as needed
  }
}

printLetter();

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

// const projectCards = document.querySelectorAll(".project-card");

// projectCards.forEach((card) => {
//   card.addEventListener("mousedown", startDrag);

//   function startDrag(event) {
//     const block = event.target;
//     let offsetX = event.clientX - block.offsetLeft;
//     let offsetY = event.clientY - block.offsetTop;

//     Mouse move listener
//     function moveBlock(e) {
//       block.style.left = `${e.clientX - offsetX}px`;
//       block.style.top = `${e.clientY - offsetY}px`;
//     }

//     Remove listeners on mouseup
//     function stopDrag() {
//       document.removeEventListener("mousemove", moveBlock);
//       document.removeEventListener("mouseup", stopDrag);
//     }

//     // Attach mousemove and mouseup to the document
//     document.addEventListener("mousemove", moveBlock);
//     document.addEventListener("mouseup", stopDrag);
//   }
// });

// projects section
// document.addEventListener("DOMContentLoaded", () => {
//   const projectSection = document.querySelector("#projects");

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         projectSection.classList.add("visible");
//         observer.unobserve(entry.target);
//       }
//     });
//   });

//   observer.observe(projectSection);
// });

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll("#projects .card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the card is visible
    }
  );

  cards.forEach((card) => observer.observe(card));
});

// skills section

// document.addEventListener("DOMContentLoaded", () => {
//   const skills = document.querySelector("#skills");
//   const skillsContent = document.querySelector(".skills-content");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           if (entry.target === skills) {
//             skills.classList.add("visible");
//           }
//           if (entry.target === skillsContent) {
//             skillsContent.classList.add("visible");
//           }
//         }
//       });
//     },
//     {
//       threshold: 0.5,
//     }
//   );

//   observer.observe(skills);
//   observer.observe(skillsContent);
// });

// Function to detect when the section is in view and apply the "visible" class
// const skillsSection = document.querySelector("#skills");
// const skillsContent = document.querySelector(".skills-content");

// const onScroll = () => {

//   const rect = skillsSection.getBoundingClientRect();

//   if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//     skillsSection.classList.add("visible");
//     skillsContent.classList.add("visible");
//   }
// };

// window.addEventListener("scroll", onScroll);

window.addEventListener("scroll", function () {
  const skillsSection = document.querySelector("#skills");

  // Get position of the skills section relative to viewport
  const skillsTop = skillsSection.getBoundingClientRect().top;
  const skillsHeight = skillsSection.clientHeight;

  // Reveal skills section when it's within view
  if (skillsTop <= window.innerHeight && skillsTop + skillsHeight >= 0) {
    skillsSection.classList.add("visible");
  } else {
    skillsSection.classList.remove("visible");
  }
});

// display date on receipt
const currentDate = new Date();
const day = currentDate.toLocaleString("en-US", { weekday: "long" });
const month = currentDate.toLocaleString("en-US", { month: "long" });
const date = currentDate.getDate();
const year = currentDate.getFullYear();

document.getElementById(
  "datetime"
).innerHTML = `${day}, ${month}, ${date}, ${year}`;
