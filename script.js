// --- 1. Generar Nubes ---
const nubesContenedor = document.getElementById('nubes-contenedor');

function crearNubes() {
    const numNubes = 8;
    for (let i = 0; i < numNubes; i++) {
        const nube = document.createElement('div');
        nube.className = 'nube';
        nube.innerHTML = '☁️';
        
        nube.style.top = `${Math.random() * 60}%`;
        nube.style.left = `${Math.random() * 100}%`;
        nube.style.fontSize = `${40 + Math.random() * 60}px`;
        
        // Velocidad aleatoria de movimiento
        const duracion = 20 + Math.random() * 40;
        nube.style.animationDuration = `${duracion}s`;
        nube.style.animationDelay = `-${Math.random() * duracion}s`;
        
        nubesContenedor.appendChild(nube);
    }
}

// --- 2. Generar el Jardín Lleno de Flores ---
const jardinContenedor = document.getElementById('jardin-contenedor');

function plantarJardin() {
    const numFlores = 150; // ¡Muchísimas flores!
    const tiposFlores = ['🌷', '🌻', '🌼', '🌸', '🌹', '🌺', '💐'];

    for (let i = 0; i < numFlores; i++) {
        const flor = document.createElement('span');
        flor.className = 'flor';
        flor.innerHTML = tiposFlores[Math.floor(Math.random() * tiposFlores.length)];
        
        // Posiciones aleatorias en el prado
        const posX = Math.random() * 95;
        const posY = Math.random() * 90;

        flor.style.left = `${posX}%`;
        flor.style.top = `${posY}%`;
        
        // Tamaño aleatorio para que se vea natural
        flor.style.fontSize = `${20 + Math.random() * 25}px`;
        
        // Retraso para que vayan brotando poco a poco
        flor.style.animationDelay = `${Math.random() * 3}s`;
        
        // Rotación aleatoria para que no todas estén derechas
        const rotacion = (Math.random() * 40) - 20;
        flor.style.transform = `rotate(${rotacion}deg)`;

        jardinContenedor.appendChild(flor);
    }
}

// Ejecutar funciones
crearNubes();
plantarJardin();

// --- 3. Control de Música ---
const musica = document.getElementById('musicaFondo');
const btn = document.getElementById('btnMusica');

btn.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        btn.innerHTML = "⏸️ Pausar Música";
    } else {
        musica.pause();
        btn.innerHTML = "🎵 Reproducir Música";
    }
});