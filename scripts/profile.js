const profileBtn = document.querySelector('li.profile');
const login = document.querySelector('section.loginForm');
const appinit = document.querySelector('.appInit');
const loginToAppinitBtn = document.querySelector('button.fromlogin');

class public_class_load_profileSettings {
    constructor() {
        // this.testBackFromLogin = btn
    }

    public_method_loadForm() {
        login.style.display = 'block';
        appinit.style.display = 'none';
    }

    public_class_backbtntoappinit() {
        login.style.display = "none";
        appinit.style.display = 'block';
    }
}

const loadProfileSettings = new public_class_load_profileSettings();
profileBtn.addEventListener('click', loadProfileSettings.public_method_loadForm, false);
loginToAppinitBtn.addEventListener('click', loadProfileSettings.public_class_backbtntoappinit, false);