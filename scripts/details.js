"use strict"


window.onload = () =>{
    const urlParams = new URLSearchParams(location.search);
    let id;
    
    if (urlParams.has("courseid")) {
        id = urlParams.get("courseid");
        console.log(id);
        fetch(`http://localhost:8081/api/courses/${id}`)
            .then(res => res.json())
            .then(course => {
                console.log(course);
    
                const courseDetailsDiv = document.getElementById('courseDetails');
                let content = '<p><strong>Course ID:</strong> ' + course.id + '</p>';
                content += '<p><strong>Department:</strong> ' + course.dept + '</p>';
                content += '<p><strong>Course Number:</strong> ' + course.courseNum + '</p>';
                content += '<p><strong>Course Name:</strong> ' + course.courseName + '</p>';
                content += '<p><strong>Instructor:</strong> ' + course.instructor + '</p>';
                content += '<p><strong>Start Date:</strong> ' + course.startDate + '</p>';
                content += '<p><strong>Number of Days:</strong> ' + course.numDays + '</p>';
    
                courseDetailsDiv.innerHTML = content;
            })
    }
}