const profileBtn = document.querySelector('li.profile');
const login = document.querySelector('section.loginForm');
const appinit = document.querySelector('.appInit');

class public_class_load_profileSettings {
    constructor() {

    }

    public_method_loadForm() {
        login.style.display = 'block';
        appinit.style.display = 'none';
    }
}

const loadProfileSettings = new public_class_load_profileSettings();
profileBtn.addEventListener('click', loadProfileSettings.public_method_loadForm, false);