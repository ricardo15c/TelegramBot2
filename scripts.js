document.addEventListener("DOMContentLoaded", function() {
    const userId = obtenerUserIdTelegram();
    document.getElementById("userId").innerText = userId;
    showSection('juego');
});

let farmeoRate = 0.0001;
let farmProgress = 0;
let interval;
let farmStartTime;

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function iniciarFarmeo() {
    const btnFarmeo = document.getElementById('btnFarmeo');
    const claimBtn = document.getElementById('claimFarm');

    btnFarmeo.disabled = true; // Desactiva el botón al iniciar el farmeo
    farmStartTime = Date.now();
    interval = setInterval(() => {
        farmProgress += farmeoRate;
        document.getElementById('progressBar').innerHTML = `<div style="width: ${(farmProgress / 2) * 100}%;"></div>`;
        if (Date.now() - farmStartTime >= 3600000) { // 1 hora
            claimBtn.disabled = false;
        }
        if (Date.now() - farmStartTime >= 7200000) { // 2 horas
            clearInterval(interval);
            btnFarmeo.disabled = false;
        }
    }, 1000);
}

function reclamarFarmeo() {
    const claimBtn = document.getElementById('claimFarm');
    claimBtn.disabled = true; // Desactiva el botón de reclamar
    let balance = parseFloat(document.getElementById('balance').innerText);
    balance += farmProgress;
    document.getElementById('balance').innerText = balance.toFixed(6);
    farmProgress = 0;
    iniciarFarmeo();
}

function copiarLink() {
    const copyText = document.getElementById('referLink');
    copyText.select();
    document.execCommand('copy');
    alert('Link copiado al portapapeles');
}

function compartirEnTelegram() {
    const link = document.getElementById('referLink').value;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
}

function reclamarReferidos() {
    // Implementar lógica para reclamar 10% de ganancias de referidos
}

function obtenerUserIdTelegram() {
    // Lógica para obtener ID de usuario de Telegram usando la API de Telegram
    return '123456789'; // Placeholder de ejemplo
}

// Lógica para añadir tareas dinámicas y mostrar tareas completadas
