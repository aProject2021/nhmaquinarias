
  const toggleBtn = document.getElementById('menu-toggle');
  const navbarMenu = document.getElementById('navbar-menu');
  const submenuToggle = document.querySelector('.has-submenu');

  toggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
  });

  submenuToggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      submenuToggle.classList.toggle('open');
    }
  });
  function toggleSubmenu(event) {
    event.preventDefault();
    const parent = event.target.closest('.has-submenu');
    parent.classList.toggle('open');
  }