const quicktestbtn = document.querySelector('.quicktest');
const backbtn = document.querySelector('.backtoappinit');
const coursesbackbtn = document.querySelector('.fromcourses');
const loadSemester = document.querySelector('section.semester');
const appinit = document.querySelector('.appInit');
const first_semester_courses = document.querySelector('section.courses');

class public_class_quicktest_module {
    constructor() {
        // this.loadSemester = document.querySelector('section.semester');
        // this.appinit = document.querySelector('.appInit');
    }

    public_optionsemester() {
        loadSemester.style.display = 'block';
        loadSemester.style.zIndex = 2;
        appinit.style.display = 'none';
    }

    public_back_to_appInit() {
        appinit.style.display = 'block';
        loadSemester.style.display = 'none';
        loadSemester.style.zIndex = 0;
    }

    public_method_from_courses_to_appInit() {
        appinit.style.display = 'none';
        loadSemester.style.display = 'block';
        loadSemester.style.transitionDelay = '2s';
        loadSemester.style.zIndex = 0;
        first_semester_courses.style.display = 'none';
    }
}

const semester_loader = new public_class_quicktest_module();

quicktestbtn.addEventListener('click', semester_loader.public_optionsemester, false);
backbtn.addEventListener('click', semester_loader.public_back_to_appInit, false);
coursesbackbtn.addEventListener('click', semester_loader.public_method_from_courses_to_appInit, false);