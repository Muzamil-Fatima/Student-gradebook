console.log(" Student Gradebook Application");

const students = [];

// Function to add a student
function addStudent(name, marks) {
    students.push({ name, marks });
    console.log(`Student ${name} added successfully!`);
}

// Function to calculate grade based on average
function calculateGrade(average) {
    if (average >= 90) return "A";
    else if (average >= 75) return "B";
    else if (average >= 50) return "C";
    else return "F";
}

// Function to display all students with grades
function showGradebook() {
    console.log("\n Student Gradebook:");
    students.forEach((student, index) => {
        const total = student.marks.reduce((sum, m) => sum + m, 0);
        const average = total / student.marks.length;
        const grade = calculateGrade(average);

        console.log(
            `${index + 1}. ${student.name} | Marks: [${student.marks.join(", ")}] | Avg: ${average.toFixed(2)} | Grade: ${grade}`
        );
    });
}

//  Adding some students
addStudent("Muzamil", [90, 85, 88]);
addStudent("Fatima", [70, 65, 72]);

// Show the gradebook
showGradebook();
