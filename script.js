// Smooth scroll to sections
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Handle registration form
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let college = document.getElementById("college").value;

  // Save to local storage
  let students = JSON.parse(localStorage.getItem("students")) || [];
  students.push({ name, email, college });
  localStorage.setItem("students", JSON.stringify(students));

  // Clear form
  document.getElementById("registrationForm").reset();
  document.getElementById("formMessage").innerText = "✅ Registration successful!";
});

// Show registered students (Admin)
function showRegistrations() {
  let students = JSON.parse(localStorage.getItem("students")) || [];
  let tableBody = document.querySelector("#studentTable tbody");
  tableBody.innerHTML = "";

  students.forEach(student => {
    let row = `<tr>
      <td>${student.name}</td>
      <td>${student.email}</td>
      <td>${student.college}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}
