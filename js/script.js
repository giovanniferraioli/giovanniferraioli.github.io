const scheda = document.getElementById('scheda');
if (scheda) {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const { slug, nome, desc } = card.dataset;
      document.getElementById('scheda-img').innerHTML = card.querySelector('.ph').outerHTML;
      document.getElementById('scheda-titolo').textContent = nome;
      document.getElementById('scheda-desc').textContent = desc;
      document.getElementById('scheda-link').href = slug + '.html';
      scheda.showModal();
    });
  });
  scheda.querySelector('.chiudi').addEventListener('click', () => scheda.close());
  scheda.addEventListener('click', e => { if (e.target === scheda) scheda.close(); });
}
