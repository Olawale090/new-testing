class marker {
    constructor() {
        // this.options = document.querySelectorAll('.mio');
        // this.counter = 0;
    }

    markOptions() {
        try {
            var optional = document.querySelectorAll('.mio').checked;
            var counter = 0;

            // alert(`total number of correct options is ${optional.length}`);

            for (var k = 0; k <= 49; k++) {
                if (optional[k] == true) {
                    counter++;
                    console.log(counter);
                } else {
                    alert('nothing selected');
                }
            }

        } catch (err) {
            alert(err);
        }

    }
}


const markPaper = new marker();
var submit = document.querySelector('.mthSubmit');
submit.addEventListener('click', markPaper.markOptions(), false);