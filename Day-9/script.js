const container = document.querySelector(".info-panel");
const booked = document.querySelector(".bookedTxt");
const remaining = document.querySelector(".remainingTxt");

var bkdSeats = 0;
var remSeats = 36;

document.addEventListener("click", (evnt) => {
  if (evnt.target.classList.contains("seat")) {
    evnt.target.classList.toggle("occupied");

    if (evnt.target.classList.contains("occupied")) {
      bkdSeats += 1;
      remSeats -= 1;
    } else {
      bkdSeats -= 1;
      remSeats += 1;
    }

    booked.innerHTML = `Booked: ${bkdSeats}`;
    remaining.innerHTML = `Remaining: ${remSeats}`;
  }
});

// To be added: Color change of boxes on click.
