document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("Btn");
  
    startBtn.addEventListener("click", function() {
      // Rediriger vers la page du jeu
      window.location.href = "niv.html";
    });

    const startBtnfac = document.getElementById("startBtnfac");
  
    startBtnfac.addEventListener("click", function() {
      // Rediriger vers la page du jeu niveau facile
      window.location.href = "facile.html";
    });

    const startBtndif = document.getElementById("startBtndif");
  
    startBtndif.addEventListener("click", function() {
      // Rediriger vers la page du jeu niveau difficile
      window.location.href = "index.html";
    });
  });
  