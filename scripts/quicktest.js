var quicktestbtn = document.querySelector('.quicktest');
class loadSemester {
    constructor() {

    }

    public_optionsemester() {
        let loadSemester = document.querySelector('section.semester');
        var appinit = document.querySelector('.appInit');
        loadSemester.style.display = 'block';
        loadSemester.style.zIndex = 2;
        appinit.style.display = 'none';
    }
}

let semester_loader = new loadSemester();

quicktestbtn.addEventListener('click', semester_loader.public_optionsemester, false);