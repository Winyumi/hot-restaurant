// Add event listener fot make rez button

const handleButtonSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('http://localhost:3000/reservation');
    const myJson = await res.json();
  } catch (err) {
    if (err) throw err;
  }
}

document.getElementById('makeReservation').addEventListener('click', handleButtonSubmit);