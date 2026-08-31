(() => {
  const dialog = document.querySelector('.explain-dialog');
  const closeDialog = () => dialog?.close();

  document.querySelector('[data-action="explain"]')?.addEventListener('click', () => dialog?.showModal());
  document.querySelectorAll('[data-action="close"]').forEach((button) => button.addEventListener('click', closeDialog));
  dialog?.addEventListener('click', (event) => {
    if (event.target === dialog) closeDialog();
  });

  const showToast = (message) => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.textContent = message;
    document.body.append(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 250);
    }, 3500);
  };

  document.querySelector('[data-action="connect"]')?.addEventListener('click', () => showToast('Conexão disponível no produto: dispositivo elegível, consentimento e leitura inicial serão confirmados neste fluxo.'));
  document.querySelector('[data-action="plan"]')?.addEventListener('click', () => showToast('Edição do plano é o próximo fluxo do MVP; este conceito ainda não grava alterações.'));

  const menuButton = document.querySelector('[data-action="menu"]');
  const mobileMenu = document.querySelector('#mobile-menu');
  menuButton?.addEventListener('click', () => {
    const isOpen = !mobileMenu.hidden;
    mobileMenu.hidden = isOpen;
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir navegação' : 'Fechar navegação');
    if (!isOpen) mobileMenu.querySelector('a')?.focus();
  });
  mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    mobileMenu.hidden = true;
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir navegação');
  }));
})();
