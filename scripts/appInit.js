var loader = () => {
    try {
        setInterval(() => {
            var svgPicker = document.querySelector('svg');
            var loading = document.querySelector('.loading');
            var body = document.querySelector('body');
            var appinit = document.querySelector('section.appInit');
            var semesterSection = document.querySelector('#chooseSemester');
            body.style.backgroundColor = 'none';
            semesterSection.style.display = 'none';
            svgPicker.style.opacity = 0;
            svgPicker.style.display = 'none';
            loading.style.opacity = 0;
            appinit.style.display = 'block';

        }, 5000);
    } catch (err) {
        console.log(err);
    }

};

window.addEventListener('load', loader, false);