// Sample course data, replace with your actual courses
const coursesData = [
    { grade: "9th", course: "Mathematics" },
    { grade: "10th", course: "Science" },
    { grade: "11th", course: "Computer Science" },
    // Add more courses as needed
];

// Function to display courses
function displayCourses() {
    const coursesContainer = document.querySelector(".courses");

    // Clear existing courses
    coursesContainer.innerHTML = "";

    // Display courses
    coursesData.forEach(course => {
        const courseItem = document.createElement("div");
        courseItem.classList.add("course-item");
        courseItem.textContent = `${course.grade} Grade - ${course.course}`;
        coursesContainer.appendChild(courseItem);
    });
}

// Initial courses display
displayCourses();
