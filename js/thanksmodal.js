const selectForm = document.querySelectorAll(".select"),
      modalTitle = document.querySelector(".text__title"),
      modal = document.querySelector(".thanksmodal"),
      triggerBtn = document.querySelector(".take__button"),
      statusIcon = document.querySelector(".thanksmodal__check"),
      modalText = document.querySelector(".text__descr");

triggerBtn.addEventListener("click", (e) => {
      modalTitle.innerText = "";
      modal.style.opacity = "0";
      selectForm.forEach((select) => {
          if (select.value === "") {
              e.preventDefault();
              modalTitle.innerText = "You haven't filled out the form";
              modalText.innerText = "Please, fill all fields";
              modal.style.opacity = "1";
              statusIcon.src = "../images/X.svg";
                      setTimeout(() => {
                        modal.style.opacity = "0"; 
                      }, 2000);
          } else {
              statusIcon.src = "../images/Check.svg";
              modalTitle.innerText = "Form submitted successfully!";
              modal.style.opacity = "1";
              setTimeout(() => {
                modal.style.opacity = "0"; 
              }, 2000);
            }
  });
});
