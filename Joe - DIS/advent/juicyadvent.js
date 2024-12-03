const doors = document.querySelectorAll(".door");
const adventDates = [
  new Date("2024-12-01"), // 1. Advent
  new Date("2024-12-08"), // 2. Advent
  new Date("2024-12-15"), // 3. Advent
  new Date("2024-12-22")  // 4. Advent
];
const today = new Date();

// Tilføj klik-hændelse til hver låge
doors.forEach((door, index) => {
  door.addEventListener("click", () => {
    const doorNumber = index + 1;
    if (today >= adventDates[index]) {
      if (!door.classList.contains("open")) {
        door.classList.add("open");
      } else {
        alert("Denne låge er allerede åbnet!");
      }
    } else {
      alert("Du kan kun åbne denne låge på " + adventDates[index].toLocaleDateString());
    }
  });
});