const progress = document.querySelector('#progress');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const resetBtn = document.querySelector('#reset');
const progressCircles = document.querySelectorAll('.circle');

let currentActive = 1;

nextBtn.addEventListener('click', () => {
    currentActive++;

    if (currentActive == progressCircles.length){
        // Disable nextBtn
        nextBtn.disabled = true;
        currentActive = progressCircles.length;
    }

    if (currentActive > 1){ 
        prevBtn.disabled = false;
    }

    updateProgress();
})

prevBtn.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }
    if (currentActive == 1) {
        prevBtn.disabled = true;
    }

    if (currentActive < progressCircles.length){
        // Enable nextBtn
        nextBtn.disabled = false;
    }

    updateProgress();
})

resetBtn.addEventListener('click', () => {
    currentActive = 1;

    nextBtn.disabled = false;
    prevBtn.disabled = true;

    updateProgress();
})

function updateProgress() {
    progressCircles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        }
        else {
            circle.classList.remove('active');
        }
    })

    const activeCircles = document.querySelectorAll('.active');
    
    progress.style.width = (((activeCircles.length - 1) / (progressCircles.length - 1)) * 100) + '%';
}

