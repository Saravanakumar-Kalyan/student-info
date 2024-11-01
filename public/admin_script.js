document.addEventListener("DOMContentLoaded", function () {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    window.location.href = "login.html";
  }


  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document
        .getElementById("studentTable")
        .getElementsByTagName("tbody")[0];
        data.forEach((student) => {
          const row = tableBody.insertRow();
          const cell1 = row.insertCell(0);
          const cell2 = row.insertCell(1);
          const cell3 = row.insertCell(2);
          const cell4 = row.insertCell(3);
          const cell5 = row.insertCell(4);
          const cell6 = row.insertCell(5);
          const cell7 = row.insertCell(6);
      
          cell1.textContent = student.name;
          cell2.textContent = student.rollNo;
          cell3.textContent = student.regNo;
          cell4.textContent = student.course;
          cell5.textContent = student.semester;
          cell6.textContent = student.phone;
          cell7.textContent = student.email;
      });      
    })
    .catch((error) => {
      console.error("Error fetching data from JSON file:", error);
      alert("Error loading student information.");
    });
});
