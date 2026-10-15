const modulo = document.getElementById('modulo');
if (modulo) {
  const esito = document.getElementById('esito');
  modulo.addEventListener('submit', async e => {
    e.preventDefault();
    if (modulo.action.includes('INSERISCI')) {
      esito.textContent = "Modulo non ancora attivo: manca l'ID di Formspree in chi-sono.html.";
      return;
    }
    const bottone = modulo.querySelector('button[type="submit"]');
    bottone.disabled = true;
    esito.textContent = 'Invio in corso…';
    try {
      const r = await fetch(modulo.action, { method: 'POST', body: new FormData(modulo), headers: { Accept: 'application/json' } });
      if (!r.ok) throw new Error();
      modulo.reset();
      esito.textContent = 'Messaggio inviato, grazie! Ti risponderò al più presto.';
    } catch {
      esito.textContent = "Qualcosa è andato storto. Riprova, oppure scrivimi direttamente via email.";
    }
    bottone.disabled = false;
  });
}
