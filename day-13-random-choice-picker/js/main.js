const tagsContainer = document.querySelector('#tags');
const textarea = document.querySelector('#textarea');

// Focus on the textarea by default
textarea.focus();

// Listen for a keyup event on the textarea
textarea.addEventListener('keyup', (e) => {
    createTag(e.target.value);

    if (e.key === 'Enter') {
        // Clear textarea after pressing enter
        setTimeout(() => {
            e.target.value = '';
        }, 10);

        randomSelect();
    }
  }
);

function createTag (input) {
    const tags = input.split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim());
    
    tagsContainer.innerHTML = '';

    // e.g [ 'tag1', 'tag2', 'tag3' ]
    tags.forEach(tagText => {
        const tag = document.createElement('span');
        tag.classList.add('tag');
        tag.innerText = tagText;
        tagsContainer.appendChild(tag);
    });
}

function randomSelect() {
    const times = 30;

    // Randomly select a tag, highlight it, and unhighlight it after 100ms
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unhighlightTag(randomTag);
        }, 100);
    }, 100);

    // Clear interval after times * 100ms
    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);
        
    }, times * 100);
}

function pickRandomTag() {
    // Randomly select a tag using the node list of tag from tags
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight');
}

