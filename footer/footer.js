const telefonoToggle = document.getElementById('telefono-toggle');
const numeroTelefono = document.getElementById('numero-telefono');

if (telefonoToggle && numeroTelefono) {
    telefonoToggle.addEventListener('click', () => {
        const mostraNumero = numeroTelefono.hidden;

        numeroTelefono.hidden = !mostraNumero;
        telefonoToggle.setAttribute('aria-expanded', String(mostraNumero));
        telefonoToggle.setAttribute(
            'aria-label',
            mostraNumero ? 'Nascondi il numero di telefono' : 'Mostra il numero di telefono'
        );
    });
}
