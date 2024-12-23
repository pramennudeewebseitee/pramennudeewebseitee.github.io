// TEATRO //
const expandirCheckbox = document.getElementById("expandirBtn");
const reproductorColumna = document.getElementById("playerCol");
const chatColumna = document.getElementById("chatCol");

// FunciÃ³n para expandir o retraer las columnas segÃºn el estado del checkbox
function expandirColumnas() {
    const estaExpandido = expandirCheckbox.checked;

    // Cambiar las clases de las columnas segÃºn el estado del checkbox
    if (estaExpandido) {
        // Expandir las columnas
        reproductorColumna.classList.remove("col-lg-9");
        reproductorColumna.classList.add("col-lg-12");
        chatColumna.classList.remove("col-lg-3");
        chatColumna.classList.add("col-lg-12");
    } else {
        // Retraer las columnas
        reproductorColumna.classList.remove("col-lg-12");
        reproductorColumna.classList.add("col-lg-9");
        chatColumna.classList.remove("col-lg-12");
        chatColumna.classList.add("col-lg-3");
    }

    // Guardar el estado del checkbox en LocalStorage
    localStorage.setItem("columnasExpandidas", estaExpandido);
}

// Verificar si el usuario ya ha hecho una elecciÃ³n anteriormente
const estaExpandido = JSON.parse(localStorage.getItem("columnasExpandidas"));
if (estaExpandido) {
    // Si las columnas estaban expandidas, marcar el checkbox como seleccionado y expandir las columnas
    expandirCheckbox.checked = true;
    expandirColumnas();
}

// Agrega un evento de cambio al checkbox para llamar a la funciÃ³n cuando se cambia su estado
expandirCheckbox.addEventListener("change", expandirColumnas);


// CHAT //
const getMode = window.localStorage.getItem('mode');
const twitchChat = document.getElementById('twitch-chat-embed');
const telegramPost = document.getElementById('telegram-post');
const themeSwitch = document.querySelector('[data-bs-toggle="mode"]');
const checkbox = themeSwitch.querySelector('.form-check-input');
const hostName = window.location.hostname;

// FunciÃ³n para cambiar el modo del chat de Twitch
function toggleChatMode() {
    const isDarkMode = checkbox.checked;
    const chatMode = isDarkMode ? 'darkpopout' : '';
    twitchChat.src = `https://www.twitch.tv/embed/iraffletv/chat?parent=127.0.0.1&parent=${hostName}&parent=localhost&${chatMode}`;

    // Guardar la preferencia del usuario en localStorage
    window.localStorage.setItem('chatMode', chatMode);
}

// Configurar el evento clic para cambiar el modo del chat de Twitch
themeSwitch.addEventListener('click', toggleChatMode);

// Cargar el chat con la preferencia del usuario desde localStorage
if (getMode == "dark") {
    twitchChat.src = `https://www.twitch.tv/embed/iraffletv/chat?parent=127.0.0.1&parent=${hostName}&darkpopout`;
} else {
    // Si no hay preferencia guardada, cargar el chat con el modo predeterminado
    toggleChatMode();
}
