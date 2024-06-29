console.log("Exercise: 4 (sugerencia filter() e includes())");


let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

const commonCourses = student1Courses.filter(course => student2Courses.includes(course));

console.log(`Common courses: ${commonCourses}`);
