var firstOne = document.querySelector('button.firstOne');
var secondOne = document.querySelector('button.secondOne');
var courses = document.querySelector('section[id*="firstSemester"]');
var courses2 = document.querySelector('section.courses2');

var semBtn = document.querySelector('section.body');


firstOne.addEventListener('click', () => {
    courses.style.display = "block";
    courses2.style.display = "none";
    semBtn.style.display = "none";
}, false);



secondOne.addEventListener('click', () => {
    courses.style.display = "none";
    courses2.style.display = "block";
    semBtn.style.display = "none";
}, false);