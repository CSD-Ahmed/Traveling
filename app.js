document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get values from the form fields
    const whereTo = document.getElementById("whereTo").value;
    const howMany = document.getElementById("howMany").value;
    const arrivals = document.getElementById("arrivals").value;
    const leaving = document.getElementById("leaving").value;
    const details = document.getElementById("details").value;

    // Save the data (you can save it to localStorage, a server, etc.)
    const bookingData = {
      whereTo: whereTo,
      howMany: howMany,
      arrivals: arrivals,
      leaving: leaving,
      details: details,
    };

    // Save the booking data to localStorage
    localStorage.setItem("bookingData", JSON.stringify(bookingData));

    // Retrieve and display the saved data
    const retrievedData = JSON.parse(localStorage.getItem("bookingData"));
    console.log("Retrieved Booking Data:", retrievedData);

    // Show a confirmation message
    alert("Booking successful!");
  });
