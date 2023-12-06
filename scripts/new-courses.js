"use strict"

const newCourseForm = document.getElementById("newCourseForm");

window.onload = () =>{
    newCourseForm.onsubmit = postNewCourse;
}

const newCourse = {
    dept: document.getElementById('dept').value,
    courseNum: document.getElementById('courseNum').value,
    courseName: document.getElementById('courseName').value,
    instructor: document.getElementById('instructor').value,
    startDate: document.getElementById('startDate').value,
    numDays: document.getElementById('numDays').value
};



const postNewCourse = () =>{
    fetch("http://localhost:8081/api/courses", {
        method: "POST",
        body: JSON.stringify({
            dept: document.getElementById('dept').value,
            courseNum: document.getElementById('courseNum').value,
            courseName: document.getElementById('courseName').value,
            instructor: document.getElementById('instructor').value,
            startDate: document.getElementById('startDate').value,
            numDays: document.getElementById('numDays').value
        }), 
        headers: {"Content-type":
        "application/json; charset=UTF-8"} 
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            // window.location.href = "index.html";
        })
        .catch(err => { 
            console.log(err)
        });
}