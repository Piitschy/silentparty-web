function loadGAonConsent(){
    var gascript = document.createElement("script");
    gascript.async = true;
    gascript.src = "https://www.googletagmanager.com/gtag/js?id=G-BNKHEWJ34M";
    document.getElementsByTagName("head")[0].appendChild(gascript, document.getElementsByTagName("head")[0]);   
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-BNKHEWJ34M');
  }
  if (document.cookie.split(';').filter(function(item) {
      return item.indexOf('cookieconsent_status=allow') >= 0
  }).length) {
      loadGAonConsent();
  }
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#000000",
        "text": "#ffffff"
      },
      "button": {
        "background": "#ffffff",
        "text": "#000000"
      }
    },
    "theme": "edgeless",
    "type": "opt-in",
    "content": {
      "message": "Wir benutzen Kekse. \nDon't judge us - Kekse sind nice! Für mehr Infos schaue in das ",
      "dismiss": "Nope",
      "allow": "Cool",
      "link": "Rezept. (Datenschutzerklärung)",
      "href": "./impressum.html"
    },
      onStatusChange: function(status, chosenBefore) {
      var type = this.options.type;
      var didConsent = this.hasConsented();
      if (type == 'opt-in' && didConsent) {
      // enable cookies
      loadGAonConsent();
      }
      }
    });