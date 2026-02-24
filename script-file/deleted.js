document.addEventListener("click", function (event) {
  
  if (event.target.closest(".deleted-btn")) {

    const card = event.target.closest(".job-card");

    card.remove(); 
    countSet()
  }
});



