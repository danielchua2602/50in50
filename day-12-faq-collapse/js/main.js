const faqButton = document.querySelectorAll('.faq-btn');
const faqContainer = document.querySelector('.faq-container');

faqButton.forEach((button) => {
  button.addEventListener('click', () => {
    const faqDiv = button.parentElement;
    faqDiv.classList.toggle('active');
  });
});