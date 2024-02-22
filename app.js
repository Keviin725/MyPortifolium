(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

/**window.onload = function() {
    const icon = document.querySelector('.software-detail');
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
  
    icon.style.position = 'relative';
    icon.style.left = Math.random() * windowWidth + 'px';
    icon.style.top = Math.random() * windowHeight + 'px';
  };

  function moveIcons() {
    const icons = document.querySelectorAll('.software-detail');
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
  
    icons.forEach(icon => {
      icon.style.position = 'relative';
      icon.style.left = Math.random() * windowWidth + 'px';
      icon.style.top = Math.random() * windowHeight + 'px';
    });
  }
  
  // Move os ícones para novas posições a cada 5 segundos
  setInterval(moveIcons, 5000); */