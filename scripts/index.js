"use strict"

const newCourseButton = document.getElementById("newCourse");

window.onload = () =>{
    getAllCourses();
    
    newCourseButton.addEventListener("click", handleNewCourseButtonClick);
}

const handleNewCourseButtonClick = () =>{
    window.location.href = "new-courses.html";

}


const getAllCourses = () =>{
    fetch("http://localhost:8081/api/courses")
        .then(res => res.json())
        .then(data =>{
            loopThroughCourses(data);
        })
}

const loopThroughCourses = (courses) =>{
    courses.forEach(course => {
        displaySingleCourse(course);
    });
}


const displaySingleCourse = (course) => {
    const cardContainer = document.getElementById("cardContainer");

    const card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";
    card.style.marginBottom = "20px";

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = `${course.dept} ${course.courseNum}: ${course.courseName}`;

    const instructor = document.createElement("p");
    instructor.classList.add("card-text");
    instructor.textContent = `Instructor: ${course.instructor}`;

    const startDate = document.createElement("p");
    startDate.classList.add("card-text");
    startDate.textContent = `Start Date: ${course.startDate}`;

    const numDays = document.createElement("p");
    numDays.classList.add("card-text");
    numDays.textContent = `Number of Days: ${course.numDays}`;

    const seeDetails = document.createElement("a");
    seeDetails.classList.add("card-link");
    seeDetails.textContent = "See Details";
    seeDetails.href = `details.html?courseid=${course.id}`;
    seeDetails.target = "_blank";

    cardBody.appendChild(title);
    cardBody.appendChild(instructor);
    cardBody.appendChild(startDate);
    cardBody.appendChild(numDays);
    cardBody.appendChild(seeDetails);

    card.appendChild(cardBody);
    cardContainer.appendChild(card);
};