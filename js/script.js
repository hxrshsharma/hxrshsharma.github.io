// ------------------------------------ Terminal
window.onload = function () {
  const command = document.querySelector(".command");
  const command2 = document.querySelector(".command2");

  const text = `> load profile -firstName "Harsh" -lastName "Sharma"`;
  const text2 = `> Loading...`;
  let index = 0;
  let i = 0;

  function typeCommand() {
    if (index < text.length) {
      command.textContent += text.charAt(index);
      index++;
      setTimeout(typeCommand, 30);
      // Adjust speed as needed
    }
  }
  typeCommand();

  function typeCommand2() {
    if (i < text2.length) {
      command2.textContent += text2.charAt(i);
      i++;
      setTimeout(typeCommand2, 45);
      // Adjust speed as needed
    }
  }
  setTimeout(typeCommand2, 2500);
};

setInterval(() => {
  ``;
  document.getElementById("ter").style.display = "none";
  document.getElementById("portfolio").style.display = "block";
}, 4000);

// ------------------------------------ Terminal

// ------------------------------------ Movable DIV

canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 20;

var the_moving_div = "";
var the_last_mouse_position = { x: 0, y: 0 };

function onMouseDown(e) {
  let target = e.target;
  while (target && !target.classList.contains("elem")) {
    target = target.parentElement;
  }
  if (!target) return;

  e.preventDefault();
  the_moving_div = target.id; // remember which div has been selected
  the_last_mouse_position.x = e.clientX; // remember where the mouse was when it was clicked
  the_last_mouse_position.y = e.clientY;
  // target.style.border = "2px solid blue"; // highlight the border of the div

  var divs = document.getElementsByClassName("elem");
  target.style.zIndex = divs.length;
  var i = 1;
  for (elem of divs) if (elem.id != the_moving_div) elem.style.zIndex = i++;
}

function onMouseMove(e) {
  if (!the_moving_div) return;

  var moving_div = document.getElementById(the_moving_div);
  var dx = e.clientX - the_last_mouse_position.x;
  var dy = e.clientY - the_last_mouse_position.y;

  moving_div.style.left = moving_div.offsetLeft + dx + "px";
  moving_div.style.top = moving_div.offsetTop + dy + "px";

  the_last_mouse_position.x = e.clientX;
  the_last_mouse_position.y = e.clientY;
}

function onMouseUp(e) {
  if (!the_moving_div) return;

  var moving_div = document.getElementById(the_moving_div);
  moving_div.style.border = ""; // remove the border highlight
  the_moving_div = "";
}

divs = document.getElementsByClassName("elem");
for (elem of divs) elem.onmousedown = onMouseDown;

document.onmousemove = onMouseMove;
document.onmouseup = onMouseUp;

// ------------------------------------ Movable DIV Recieving Data
const bars = document.querySelectorAll(".bar");

function randomizeBars() {
  bars.forEach((bar) => {
    let randomHeight = Math.floor(Math.random() * 100) + 20; // Random height between 20px and 120px
    bar.style.height = `${randomHeight}px`;
  });
}

// Update bar heights every 200ms to simulate randomness
setInterval(randomizeBars, 200);

// ------------------------------------ Movable DIV Server Log

const logOutput = document.getElementById("logOutput");
const maxLogEntries = 7;

function generateRandomIP() {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join(
    "."
  );
}

function createLogEntries() {
  const entries = Array.from(
    { length: 100 },
    () => `> DECRYPTING ${generateRandomIP()}...`
  );
  

  entries.forEach((entry, index) => {
    setTimeout(() => {
      // Remove first entry if max log entries reached
       if (logOutput.children.length > maxLogEntries) {
         logOutput.children[0].remove();
      }
      

      const line = document.createElement("div");
      line.className = "log-line";

      const typing = document.createElement("span");
      typing.className = "typing";

      typeText(typing, entry, 0, () => {
        if (index < entries.length - 1) {
          typing.style.animation = "none";
          typing.after(document.createTextNode("\u00A0"));
        }
      });

      line.appendChild(typing);
      logOutput.appendChild(line);

      // Auto-scroll
      logOutput.scrollTop = logOutput.scrollHeight;
    }, index * 1500);
  });
}

function typeText(element, text, position, callback) {
  if (position < text.length) {
    element.textContent += text.charAt(position);
    setTimeout(
      () => typeText(element, text, position + 1, callback),
      Math.random() * 50 + 30
    );
  } else {
    setTimeout(callback, 500);
  }
}

setTimeout(createLogEntries, 1000);
