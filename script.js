
  const toggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  function valor(){
    alert('Valor de cada espetinho é: R$ 7,00')
  }
