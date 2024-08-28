// ------------------------------------ Terminal 
window.onload = function () {
  const command = document.querySelector(".command");
  const text = `> load profile -firstName "Harsh" -lastName "Sharma"`;
  let index = 0;

  function typeCommand() {
    if (index < text.length) {
      command.textContent += text.charAt(index);
      index++;
      setTimeout(typeCommand, 30); // Adjust speed as needed
    }
  }
  typeCommand();
};

setInterval(
  () => {
    document.getElementById("ter").style.display = 'none';
    document.getElementById("portfolio").style.display = 'block';
  }, 3000
  
);

// ------------------------------------ Terminal

