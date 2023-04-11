const screen = document.querySelector(".screen");
const btn = document.querySelectorAll(".btn");

btn.forEach((button) => {
  button.addEventListener("click", () => {
    Pressbtn = button.textContent;

    if (button.id === "c") {
      screen.textContent = "0";
      return;
    }

    if (button.id === "borrar") {
      if (screen.textContent.length === 1) {
        screen.textContent = "0";
      } else {
        screen.textContent = screen.textContent.slice(0, -1);
      }
      return;
    }

    if (button.id === "igual") {
      try {
        screen.textContent = eval(screen.textContent);
      } catch {
        screen.textContent = "ERROR!";
      }
      return;
    }

    if (screen.textContent === "0" || screen.textContent === "ERROR!") {
      screen.textContent = Pressbtn;
    } else {
      screen.textContent += Pressbtn;
    }
  });
});


const checkbox = document.querySelector('.checkbox');

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});
