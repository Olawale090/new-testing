class marker {
    constructor() {
        // this.options = document.querySelectorAll('.mio');
        // this.counter = 0;

        // this.examscore = document.querySelector('.examScore');
    }

    markOptions() {
        try {
            var optional = document.querySelectorAll('.mio');
            var counter = 0;

            alert(`total number of correct options is ${optional.length}`);

            for (var k = 0; k <= 49; k++) {
                if (optional[k].checked == true) {
                    counter++;

                } else {
                    console.log('nothing selected');
                }
            }

            alert(counter);

            // this.examscore.textContent = counter;

        } catch (err) {
            alert(err);
        }

    }

}


const markPaper = new marker();
var submit = document.querySelector('.mthSubmit');
submit.addEventListener('click', () => markPaper.markOptions(), false);