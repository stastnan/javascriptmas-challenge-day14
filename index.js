const elf = document.getElementById("elf");
const btn = document.getElementById("btn");
btn.addEventListener("click", duplicateElf);

function duplicateElf() {
  const hangout = document.getElementsByClassName("elf-hangout-zone")[0];

  const elves = document.getElementsByClassName("elf");

  if (elves.length < 100) {
    const joiningElf = elf.cloneNode(true);
    joiningElf.setAttribute("id", "");
    hangout.appendChild(joiningElf);
  }
}

//   Challenge:
//     - Write a function to duplicate the elf when the button is clicked.
//     - See index.css for optional styling challenges.

// Stretch goals:
//   - Write a function to give the elves some tools, or a cup of tea!
//   - Limit the total number of elves to 100.
