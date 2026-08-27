 // Lógica de cambio de tema
        const botonTema = document.getElementById('btn-tema');

        botonTema.addEventListener('click', () => {
            document.body.classList.toggle('modo-claro');

            if (document.body.classList.contains('modo-claro')) {
                botonTema.textContent = '☀️ Modo Claro';
            } else {
                botonTema.textContent = '🌙 Modo Oscuro';
            }
        });

        // Lógica para copiar el número de contacto
        const botonCopiar = document.getElementById('btn-copiar');
        botonCopiar.addEventListener('click', () => {

        const numero = '+52 123 456 7890';
        navigator.clipboard.writeText(numero).then(() => {
        botonCopiar.textContent = '✅ ¡Número copiado!';
        setTimeout(() => {
            botonCopiar.textContent = '📋 Copiar Número';
            }, 2000);
        });
    });

        const botonArriba = document.getElementById('btn-arriba');
        botonArriba.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

        // Lógica para el contador de visitas usando localStorage
        let visitas = localStorage.getItem('contador_visitas') || 0;
        visitas++;
        localStorage.setItem('contador_visitas', visitas);
        document.getElementById('contador-visitas').textContent = `Has visitado esta tarjeta ${visitas} ${visitas === 1 ? 'vez' : 'veces'}.`;