var browserName = (function(agent) {           
    switch (true) {
        case agent.indexOf("edge") > -1:
            return "MS Edge";

        case agent.indexOf("edg/") > -1:
            return "Edge (chromium based)";

        case agent.indexOf("opr") > -1 && !!window.opr:
            return "Opera";

        case agent.indexOf("chrome") > -1 && !!window.chrome:
            return "Chrome";

        case agent.indexOf("trident") > -1:
            return "MS IE";

        case agent.indexOf("firefox") > -1:
            return "Mozilla Firefox";

        case agent.indexOf("Safari") > -1:
            return "Safari";

        default: return "outro";
    }
})(window.navigator.userAgent.toLowerCase());

document.querySelector("h2").innerText="Você esta usando o navegador " + browserName; 
