const triggerButton = document.querySelector(".profile__button");
const inputs = document.querySelectorAll(".profile__input");

triggerButton.addEventListener('click' , () => {
    inputs.forEach((input , i) => {
        const outputValue = document.createElement('p')
        outputValue.style.fontSize = '26px'
        triggerButton.style.display = 'none'
        outputValue.textContent = input.value;
        input.parentNode.replaceChild(outputValue, input);
      });
})
