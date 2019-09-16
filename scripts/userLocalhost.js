var submit = document.querySelector('#submit');
var uploadBtn = document.querySelector("input[type='file']");

export class userDatabase {
    constructor() {
        this.photo = document.querySelector('input[type="file"]');
        this.image = document.querySelector('#img');
        this.fullname = document.querySelector('#fullname').value;
        this.matricNo = document.querySelector('#matricNo').value;
        this.faculty = document.querySelector('#faculty').value;
        this.department = document.querySelector('#department').value;
        this.password = document.querySelector('#password').value;
    }

    public_class_userLocalStorage() {
        try {
            if (document.querySelector('#fullname').value === '') {
                var nameVerify = document.querySelector('ul.messages>li:nth-child(1)');
                nameVerify.style.backgroundImage = 'url(./assets/icons/049-cancel.png)';
                nameVerify.style.opacity = 1;
            }

            if (document.querySelector('#fullname').value !== '') {
                var nameVerify = document.querySelector('ul.messages>li:nth-child(1)');
                nameVerify.style.backgroundImage = 'url(./assets/icons/039-checked.png)';
                nameVerify.style.opacity = 1;
            }

            if (document.querySelector('#matricNo').value === '' || document.querySelector('#matricNo').value === isNaN) {
                var matricVerify = document.querySelector('ul.messages>li:nth-child(2)');
                matricVerify.style.backgroundImage = "url(./assets/icons/049-cancel.png)";
                matricVerify.style.opacity = 1;
            }

            if (document.querySelector('#matricNo').value !== '') {
                var matricVerify = document.querySelector('ul.messages>li:nth-child(2)');
                matricVerify.style.backgroundImage = "url(./assets/icons/039-checked.png)";
                matricVerify.style.opacity = 1;
            }

            if (document.querySelector('#faculty').value == '') {
                var facultyVerify = document.querySelector('ul.messages>li:nth-child(3)');
                facultyVerify.style.backgroundImage = "url(./assets/icons/049-cancel.png)";
                facultyVerify.style.opacity = 1;
            }

            if (document.querySelector('#faculty').value !== '') {
                var facultyVerify = document.querySelector('ul.messages>li:nth-child(3)');
                facultyVerify.style.backgroundImage = "url(./assets/icons/039-checked.png)";
                facultyVerify.style.opacity = 1;
            }

            if (document.querySelector('#department').value == '') {
                var departmentVerify = document.querySelector('ul.messages>li:nth-child(4)');
                departmentVerify.style.backgroundImage = "url(./assets/icons/049-cancel.png)";
                departmentVerify.style.opacity = 1;
            }

            if (document.querySelector('#department').value !== '') {
                var departmentVerify = document.querySelector('ul.messages>li:nth-child(4)');
                departmentVerify.style.backgroundImage = "url(./assets/icons/039-checked.png)";
                departmentVerify.style.opacity = 1;
            }

            if (document.querySelector('#password').value == '') {
                var passwordVerify = document.querySelector('ul.messages>li:nth-child(5)');
                passwordVerify.style.backgroundImage = "url(./assets/icons/049-cancel.png)";
                passwordVerify.style.opacity = 1;
            }

            if (document.querySelector('#password').value !== '') {
                var passwordVerify = document.querySelector('ul.messages>li:nth-child(5)');
                passwordVerify.style.backgroundImage = "url(./assets/icons/039-checked.png)";
                passwordVerify.style.opacity = 1;
            }


        } catch (err) {
            console.log(err);
        }
    }

    public_class_studentProfile_database() {
        localStorage.setItem("fullname", document.querySelector('#fullname').value);
        localStorage.setItem("matricNo", document.querySelector('#matricNo').value);
        localStorage.setItem("faculty", document.querySelector('#faculty').value);
        localStorage.setItem("department", document.querySelector('#department').value);
        localStorage.setItem("password", document.querySelector('#password').value);
        document.querySelector(".studentName").innerHTML = localStorage.fullname;
        document.querySelector(".studentMatricNo").innerHTML = "Matric number: " + localStorage.matricNo;
        // document.querySelector(".studentPicture").style.backgroundImage = localStorage.photoURL;
    }

    public_class_uploadPhoto(event) {
        try {
            let input = event.target;
            let filereader = new FileReader();
            var photo = document.querySelector('#img');
            var photoShow = document.querySelector('header.picture');
            var photoShow2 = document.querySelector('header.picture2');
            filereader.onload = function() {
                var imageURL = filereader.result;
                console.log(imageURL);
                localStorage.setItem('photoURL', imageURL);
                alert(localStorage.getItem("photoURL"));
                photo.src = imageURL;

                photoShow.style.backgroundImage = 'url(' + imageURL + ')';
                photoShow.style.backgroundRepeat = 'no-repeat';
                photoShow.style.objectFit = 'cover';
                photoShow.style.backgroundSize = 'cover';
                photo.style.objectFit = "cover";

                photoShow2.style.backgroundImage = 'url(' + imageURL + ')';
                photoShow2.style.backgroundRepeat = 'no-repeat';
                photoShow2.style.objectFit = 'cover';
                photoShow2.style.backgroundSize = 'cover';

                document.querySelector("header.studentPicture").style.backgroundImage = 'url(' + imageURL + ')';

            };
            filereader.readAsDataURL(input.files[0]);
        } catch (err) {
            alert(err);
        }

    }

    public_class_semesterChoice() {
        let semesterSection = document.querySelector('section.body');
        let loginSection = document.querySelector('.loginForm');

        // student details display areas
        let nameDisplay = document.querySelector("#nameDisplay");
        let matricDisplay = document.querySelector("#matricDisplay");
        let photoDisplay = document.querySelector("#photoDisplay");
        document.querySelector("header.fullname").innerHTML = localStorage.fullname;
        document.querySelector("header.matricNo").innerHTML = "matric number: " + localStorage.getItem('matricNo');

        document.querySelector("header.fullname2").innerHTML = localStorage.fullname;
        document.querySelector("header.matricNo2").innerHTML = "matric number: " + localStorage.getItem('matricNo');


        nameDisplay.innerHTML = localStorage.fullname;
        matricDisplay.innerHTML = "matric number: " + localStorage.getItem('matricNo');
        photoDisplay.style.backgroundImage = 'url(' + localStorage.photoURL + ')';

        console.log(localStorage.photoURL);
        // semesterSection.style.transitionDelay = '2s';
        semesterSection.style.display = 'block';
        loginSection.style.display = 'none';

    }

    // public_class_signInValidation_method() {

    // }

}

var userLocalhost = new userDatabase();
// window.addEventListener('load', userLocalhost.public_class_studentProfile_database, false); this line was for testing...
uploadBtn.addEventListener('change', userLocalhost.public_class_uploadPhoto, false);
submit.addEventListener('click', () => {
    userLocalhost.public_class_userLocalStorage();
    userLocalhost.public_class_studentProfile_database();

    var name = document.querySelector('#fullname');
    var matric = document.querySelector('#matricNo');
    var faculty = document.querySelector('#faculty');
    var department = document.querySelector('#department');
    var password = document.querySelector('#password');
    if (name.value !== '' && matric.value !== '' && faculty.value !== '' && department.value !== '' && password.value !== '') {
        userLocalhost.public_class_semesterChoice();
    }
}, false);