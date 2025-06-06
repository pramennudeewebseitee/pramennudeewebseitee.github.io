let bloqueoUS = true;
let bloquearDominio = false;
let bloquearDominioyservidores = false;
let publicidad = false;

// Histats.com  START  (aync)
  var _Hasync= _Hasync|| [];
_Hasync.push(['Histats.start', '1,4955206,4,15,170,40,00000001']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function() {
var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
hs.src = ('//s10.histats.com/js15_as.js');
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();
//Histats.com  END 

if (bloqueoUS) {

    fetch("https://directory.cookieyes.com/api/v1/ip")
        .then(response => response.json())
        .then(data => {
            // console.log("Country: ", data.country);
            // if (data.country === "US" || data.country === "AR") {
            if (data.country === "US") {
                console.log("Acceso denegado, hable con el administrador");
                // Borra todo el contenido de la página
                document.body.innerHTML = "";

                // Evita que el usuario use el botón "Atrás"
                history.pushState(null, null, location.href);

                // Redirige a una página en blanco
                window.location.href = "about:blank";

                // Intenta cerrar la pestaña (solo funciona si fue abierta con window.open())
                window.close();
                setTimeout(() => { window.close(); }, 1000);

                // Limpia la consola para dificultar inspección

                // Evita que el usuario edite la página con DevTools
                console.clear();
                setInterval(() => {
                    document.body.innerHTML = "";
                    console.clear();
                }, 100); // Se ejecuta cada 100ms para reforzar el bloqueo
            }
        })
        .catch(error => console.error("Error:", error));
}


if (bloquearDominio) {
    if (window.top !== window.self) {
        const iframeReferrer = document.referrer;
        const allowedDomains = [
            "https://sopracan-28-04-flotodsplaaerbloeer.blogspot.com/p/prueba-de-saturacion.html",
            "https://sopracan-28-04-flotodsplaaerbloeer.blogspot.com/p/prueba-de-saturacion.html",
            "https://sopracan-28-04-flotodsplaaerbloeer.blogspot.com/p/prueba-de-saturacion.html",
            // "https://sopracan-28-04-flotodsplaaerbloeer.blogspot.com/p/prueba-de-saturacion.html",
            "http://127.0.0.1:5500",
            "http://127.0.0.1:5501"
        ];

        // alert(iframeReferrer);

        if (!iframeReferrer || !allowedDomains.some(domain => iframeReferrer.startsWith(domain))) {
            // console.warn("Acceso denegado desde un origen no autorizado:", iframeReferrer);

            // Codificar la URL del sitio que intentó usar el iframe
            const referrerEncoded = encodeURIComponent(iframeReferrer || "desconocido");

            // Redirigir con el parámetro para que Histats lo registre
            if (referrerEncoded !== "desconocido") {
                // accesoPermitido = false;
                alert("Para continuar viendo ingrese a https://sopracan-28-04-flotodsplaaerbloeer.blogspot.com");
                window.top.location.href = `https://sopracan-28-04-flotodsplaaerbloeer.blogspot.com/?acceso=${referrerEncoded}`;
                // window.top.location = window.self.location.href;
                // window.close();
                // window.location.href = "about:blank"; // Alternativa si el cierre falla
            }
        } else {
            console.log("Iframe cargado desde un origen autorizado:", iframeReferrer);
        }
    } else {
        console.log("La página no está dentro de un iframe. Acceso permitido.");
    }

}


if (bloquearDominioyservidores) {
    const allowedDomains = [
        "https://sopracan-28-04-flotodsplaaerbloeer.blogspot.com/p/prueba-de-saturacion.html",
        "https://sopracan-28-04-flotodsplaaerbloeer.blogspot.com/p/prueba-de-saturacion.html",
        "https://sopracan-28-04-flotodsplaaerbloeer.blogspot.com/p/prueba-de-saturacion.html",
        // "https://sopracan-28-04-flotodsplaaerbloeer.blogspot.com/p/prueba-de-saturacion.html",
        "http://127.0.0.1:5500",
        "http://127.0.0.1:5501"
    ];

    const currentPath = window.location.pathname;
    const iframeReferrer = document.referrer;

    // alert(currentPath+"   y   "+iframeReferrer);

    // --- Protección 1: Bloquear iframes externos ---
    if (window.top !== window.self) {
        console.log("Detectado acceso desde iframe.");

        if (!iframeReferrer || !allowedDomains.some(domain => iframeReferrer.startsWith(domain))) {
            const referrerEncoded = encodeURIComponent(iframeReferrer || "desconocido");
            // alert("Acceso no permitido desde iframe externo. Redirigiendo...");
            if(referrerEncoded !== "desconocido") window.top.location.href = `https://sopracan-28-04-flotodsplaaerbloeer.blogspot.com/?acceso=${referrerEncoded}`;
        } else {
            console.log("Iframe permitido desde dominio autorizado:", iframeReferrer);
        }
    }

    // --- Protección 2: Bloquear cualquier acceso directo a /servidores/ ---
    if (currentPath.includes('/prueba-de-saturacion/')) {
        console.log("Detectado acceso a /prueba-de-saturacion/");

        if (!iframeReferrer || !allowedDomains.some(domain => iframeReferrer.startsWith(domain))) {
            const referrerEncoded = encodeURIComponent(iframeReferrer || "desconocido");
            alert("currentPath: "+currentPath+"\nreferrerEncoded: "+referrerEncoded+"\niframeReferrer: "+iframeReferrer+"\nwindow.top: "+window.top.location +"\nwindow.self: "+window.self.location);
            // alert("Acceso no permitido directo a servidores. Redirigiendo...");
            if(referrerEncoded !== "desconocido") window.location.href = `https://sopracan-28-04-flotodsplaaerbloeer.blogspot.com/?acceso=Servidores`;
        } else {
            console.log("Acceso a /prueba-de-saturacion/ permitido desde dominio autorizado:", iframeReferrer);
        }

    }

    console.log("Acceso permitido, sin restricciones.");
}



if (publicidad) {
    var uid = '484351';
    var wid = '734958';
    var pop_fback = 'up';
    var pop_tag = document.createElement('script'); pop_tag.src = '//cdn.popcash.net/show.js'; document.body.appendChild(pop_tag);
    pop_tag.onerror = function () { pop_tag = document.createElement('script'); pop_tag.src = '//cdn2.popcash.net/show.js'; document.body.appendChild(pop_tag) };
}
