const inputElements = document.querySelectorAll('.form-control input');

// Add event listeners to each input element
inputElements.forEach((inputElement) => {
    const labelElement = document.querySelector(`label[for="${inputElement.id}"]`);
  inputElement.addEventListener('focus', () => {
    labelElement.classList.add('shift-up');
  });

  inputElement.addEventListener('blur', () => {
    if (inputElement.value === '') {
      labelElement.classList.remove('shift-up');
    }
  });
});