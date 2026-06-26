const API_BASE = 'https://api.delirius.store/download';

function showResult(elementId, message, type) {
    const resultDiv = document.getElementById(elementId);
    resultDiv.innerHTML = message;
    resultDiv.classList.add('show', type);
    resultDiv.classList.remove(
        type === 'success' ? 'error loading' : 
        type === 'error' ? 'success loading' : 
        'success error'
    );
}

function downloadYoutube() {
    const url = document.getElementById('yt-url').value;
    const format = document.getElementById('yt-format').value;
    const resultId = 'yt-result';

    if (!url) {
        showResult(resultId, '❌ Ingresa una URL', 'error');
        return;
    }

    showResult(resultId, '<div class="loader"></div> Descargando...', 'loading');

    let endpoint = format === 'mp3' ? 'ytmp3' : 'ytmp4';
    let apiUrl = `${API_BASE}/${endpoint}?url=${encodeURIComponent(url)}`;
    
    if (format !== 'mp3') {
        const formatMap = { 'mp4-360': '360p', 'mp4-720': '720p', 'mp4-1080': '1080p' };
        apiUrl += `&format=${formatMap[format]}`;
    }

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success' || data.url) {
                const downloadUrl = data.url || data.download_url;
                showResult(resultId, 
                    `✅ Listo<br><a href="${downloadUrl}" class="download-link" target="_blank">📥 Descargar</a>`, 
                    'success');
            } else {
                showResult(resultId, '❌ Error: ' + (data.message || 'Fallo'), 'error');
            }
        })
        .catch(err => showResult(resultId, '❌ Error: ' + err.message, 'error'));
}

function downloadTiktok() {
    const url = document.getElementById('tt-url').value;
    const resultId = 'tt-result';

    if (!url) {
        showResult(resultId, '❌ Ingresa una URL', 'error');
        return;
    }

    showResult(resultId, '<div class="loader"></div> Descargando...', 'loading');

    fetch(`${API_BASE}/tiktok?url=${encodeURIComponent(url)}`)
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success' || data.url) {
                const downloadUrl = data.url || data.download_url;
                showResult(resultId, 
                    `✅ Listo<br><a href="${downloadUrl}" class="download-link" target="_blank">📥 Descargar</a>`, 
                    'success');
            } else {
                showResult(resultId, '❌ Error: ' + (data.message || 'Fallo'), 'error');
            }
        })
        .catch(err => showResult(resultId, '❌ Error: ' + err.message, 'error'));
}

function downloadInstagram() {
    const url = document.getElementById('ig-url').value;
    const resultId = 'ig-result';

    if (!url) {
        showResult(resultId, '❌ Ingresa una URL', 'error');
        return;
    }

    showResult(resultId, '<div class="loader"></div> Descargando...', 'loading');

    fetch(`${API_BASE}/instagram?url=${encodeURIComponent(url)}`)
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success' || data.url) {
                const downloadUrl = data.url || data.download_url;
                showResult(resultId, 
                    `✅ Listo<br><a href="${downloadUrl}" class="download-link" target="_blank">📥 Descargar</a>`, 
                    'success');
            } else {
                showResult(resultId, '❌ Error: ' + (data.message || 'Fallo'), 'error');
            }
        })
        .catch(err => showResult(resultId, '❌ Error: ' + err.message, 'error'));
}

function downloadTwitter() {
    const url = document.getElementById('tw-url').value;
    const resultId = 'tw-result';

    if (!url) {
        showResult(resultId, '❌ Ingresa una URL', 'error');
        return;
    }

    showResult(resultId, '<div class="loader"></div> Descargando...', 'loading');

    fetch(`${API_BASE}/twitterdl?url=${encodeURIComponent(url)}`)
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success' || data.url) {
                const downloadUrl = data.url || data.download_url;
                showResult(resultId, 
                    `✅ Listo<br><a href="${downloadUrl}" class="download-link" target="_blank">📥 Descargar</a>`, 
                    'success');
            } else {
                showResult(resultId, '❌ Error: ' + (data.message || 'Fallo'), 'error');
            }
        })
        .catch(err => showResult(resultId, '❌ Error: ' + err.message, 'error'));
}

function downloadFacebook() {
    const url = document.getElementById('fb-url').value;
    const resultId = 'fb-result';

    if (!url) {
        showResult(resultId, '❌ Ingresa una URL', 'error');
        return;
    }

    showResult(resultId, '<div class="loader"></div> Descargando...', 'loading');

    fetch(`${API_BASE}/facebook?url=${encodeURIComponent(url)}`)
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success' || data.url) {
                const downloadUrl = data.url || data.download_url;
                showResult(resultId, 
                    `✅ Listo<br><a href="${downloadUrl}" class="download-link" target="_blank">📥 Descargar</a>`, 
                    'success');
            } else {
                showResult(resultId, '❌ Error: ' + (data.message || 'Fallo'), 'error');
            }
        })
        .catch(err => showResult(resultId, '❌ Error: ' + err.message, 'error'));
}

function downloadXvideos() {
    const url = document.getElementById('xv-url').value;
    const resultId = 'xv-result';

    if (!url) {
        showResult(resultId, '❌ Ingresa una URL', 'error');
        return;
    }

    showResult(resultId, '<div class="loader"></div> Descargando...', 'loading');

    fetch(`${API_BASE}/xvideos?url=${encodeURIComponent(url)}`)
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success' || data.url) {
                const downloadUrl = data.url || data.download_url;
                showResult(resultId, 
                    `✅ Listo<br><a href="${downloadUrl}" class="download-link" target="_blank">📥 Descargar</a>`, 
                    'success');
            } else {
                showResult(resultId, '❌ Error: ' + (data.message || 'Fallo'), 'error');
            }
        })
        .catch(err => showResult(resultId, '❌ Error: ' + err.message, 'error'));
}

function downloadPinterest() {
    const url = document.getElementById('pin-url').value;
    const resultId = 'pin-result';

    if (!url) {
        showResult(resultId, '❌ Ingresa una URL', 'error');
        return;
    }

    showResult(resultId, '<div class="loader"></div> Descargando...', 'loading');

    fetch(`${API_BASE}/pinterestdl?url=${encodeURIComponent(url)}`)
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success' || data.url) {
                const downloadUrl = data.url || data.download_url;
                showResult(resultId, 
                    `✅ Listo<br><a href="${downloadUrl}" class="download-link" target="_blank">📥 Descargar</a>`, 
                    'success');
            } else {
                showResult(resultId, '❌ Error: ' + (data.message || 'Fallo'), 'error');
            }
        })
        .catch(err => showResult(resultId, '❌ Error: ' + err.message, 'error'));
}

// Permitir Enter en inputs
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const activeElement = document.activeElement;
        if (activeElement.id === 'yt-url') downloadYoutube();
        else if (activeElement.id === 'tt-url') downloadTiktok();
        else if (activeElement.id === 'ig-url') downloadInstagram();
        else if (activeElement.id === 'tw-url') downloadTwitter();
        else if (activeElement.id === 'fb-url') downloadFacebook();
        else if (activeElement.id === 'xv-url') downloadXvideos();
        else if (activeElement.id === 'pin-url') downloadPinterest();
    }
});
