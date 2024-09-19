const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const boxBottom = box.getBoundingClientRect().bottom;

        // Within the window
        if (boxTop < (window.innerHeight - 5*16) && boxBottom > 8) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}