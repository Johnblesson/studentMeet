const STUDENTS_API = 'http://localhost:5001/students';

fetch(STUDENTS_API)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((studentData) => {
    let data1 = "";
    studentData.forEach((student) => {
      data1= `
        <div class="user">
        <img src=${student.image} alt=${student.username}><br>
        <p>${student.username}</p><br>
        <p>${student.email}</p>
        </div>`;
    });
    // Append the generated HTML to an element with a specific ID or class in your HTML.
    document.getElementById("usersContainer").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });

