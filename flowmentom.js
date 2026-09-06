

<script>
(function () {

  var lightCss    = "https://dashboard-code.netlify.app/flowmentum_light.css";
  var darkCss     = "https://dashboard-code.netlify.app/flowmentum_dark.css";
  var fallbackCss = "https://dashboard-code.netlify.app/flowmentum_old_code.css";

  var linkId           = "styleSheet";   
  var toggleId         = "tooglecss";
  var welcomeId        = "welcome1012";
  var hideCssId        = "customHideCss";
  var toggleLocationId = "3a9v3A7wnkDKSxPPwwzh";

  // Strict check: URL mein location path verify karna
  function isTargetLocation() {
    return window.location.pathname.includes("/location/" + toggleLocationId);
  }

  function injectCss() {
    var stylesheet = document.getElementById(linkId);
    if (!stylesheet) {
      stylesheet = document.createElement("link");
      stylesheet.id = linkId;
      stylesheet.rel = "stylesheet";
      document.head.appendChild(stylesheet);
    }

    if (isTargetLocation()) {
      // Direct load light CSS for target location
      if (stylesheet.getAttribute("href") !== lightCss && stylesheet.getAttribute("href") !== darkCss) {
        stylesheet.setAttribute("href", lightCss);
      }

      // Inject custom hide CSS ONLY for target
      if (!document.getElementById(hideCssId)) {
        var style = document.createElement("style");
        style.id = hideCssId;
        style.innerHTML = `
          #tb_payment-integrations,
          #tb_payment-settings,
          #tb_gift-cards,
          #tb_payments-coupons,
          #tb_payments-products,
          #tb_payment-transactions-new,
          #tb_payment-links,
          #tb_payment-subscriptions,
          #tb_payment-orders-new,
          #tb_payment-invoices {
            display: none !important;
          }
        `;
        document.head.appendChild(style);
      }
    } else {
      // FORCE RESET for all other sub-accounts and agency level
      if (stylesheet.getAttribute("href") !== fallbackCss) {
        stylesheet.setAttribute("href", fallbackCss);
      }

      // Strictly remove injected hide CSS
      var existingStyle = document.getElementById(hideCssId);
      if (existingStyle) {
        existingStyle.parentNode.removeChild(existingStyle);
      }
    }
  }

  function applyUi() {
    var isTarget = isTargetLocation();

    // 1. Manage Stylesheets first
    injectCss();

    var existingToggle  = document.getElementById(toggleId);
    var existingWelcome = document.getElementById(welcomeId);

    if (isTarget) {
      // Toggle Switcher
      if (!existingToggle) {
        var toggleDiv = document.createElement("div");
        toggleDiv.id = toggleId;
        toggleDiv.innerHTML = `
          <label class="switch">
            <input type="checkbox" id="toggleCheckbox" onclick="toggleStylesheet()" />
            <span class="slider round"></span>
          </label>
        `;
        document.body.appendChild(toggleDiv);
      }

      // Welcome Banner
      if (!existingWelcome) {
        var welcomeDiv = document.createElement("div");
        welcomeDiv.id = welcomeId;
        welcomeDiv.innerHTML = `
          <div class="main_container1012">
            <div class="inside_container1012">
              <div class="left_side1012">
                <h2 class="helloow1012">Hey {{user.name}} 👋</h2>
                <h4 class="dashboard101224">
                  Relationship Performance Management dashboard.
                </h4>
              </div>
            </div>
          </div>
        `;
        document.body.appendChild(welcomeDiv);
      }

      // Redirect Logic
      if (window.location.pathname.includes("/payments/invoices")) {
        try {
          window.location.href = `/v2/location/${toggleLocationId}/payments/proposals-estimates`;
        } catch (e) {
          console.warn("Redirect failed: ", e);
        }
      }

    } else {
      // IMMEDIATE CLEANUP on switching away from target location
      if (existingToggle) existingToggle.parentNode.removeChild(existingToggle);
      if (existingWelcome) existingWelcome.parentNode.removeChild(existingWelcome);
    }
  }

  window.toggleStylesheet = function () {
    var stylesheet = document.getElementById(linkId);
    if (!stylesheet) return;

    if (isTargetLocation()) {
      var currentHref = stylesheet.getAttribute("href");
      stylesheet.setAttribute("href", currentHref.includes(lightCss) ? darkCss : lightCss);
    }
  };

  // Initial Run
  applyUi();

  // Route change listener (SPA Navigation detection)
  let lastUrl = location.href;
  new MutationObserver(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      // Slight timeout to let GHL update URL path in SPA route transition
      setTimeout(applyUi, 100);
    }
  }).observe(document.body, { childList: true, subtree: true });

})();
</script> 



/* toggle style */
#tooglecss {
    position: absolute !important;
    right: 370px !important;
    top: 19px !important;
    z-index: 9999 !important; 
    display: none;
  }

  body:has(#location-dashboard) #tooglecss {
    display: block !important;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 80px !important;
    height: 42px !important; 
    right: 73px !important;
    top: -12px !important;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0; 
    right: 0;
    bottom: 0;
    background: #1a142d;
    border: 1px solid #1a142d !important;

    -webkit-transition: .4s;
    transition: .4s;
  }



  input:checked+.slider:before {
    -webkit-transform: translateX(25px);
    -ms-transform: translateX(25px);
    transform: translateX(32px);
    background-color: #FFF;
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .slider:after {
    position: absolute;
    content: "";
    height: 30px;
    width: 30px;
    right: 5px;
    bottom: 6px;
    background-image: url('https://storage.googleapis.com/msgsndr/MLvKvVyGos8j4OV4y4Zt/media/68c1afc944a663d0d2109728.svg');
    background-size: cover;

  }

  input:checked+.slider:after {

    background-image: url('https://storage.googleapis.com/msgsndr/MLvKvVyGos8j4OV4y4Zt/media/68c1aff1353d1388bef7c8dd.svg') !important;
    right: 43px;

  }

  .slider:before {
    position: absolute;
    content: "";
    height: 35px;
    width: 35px;
    left: 6px;
    bottom: 4px;
    background-image: url('https://storage.googleapis.com/msgsndr/MLvKvVyGos8j4OV4y4Zt/media/68c1afcb83b9825ad294cde1.svg');
    background-size: cover;

  }

  input:checked+.slider {
    background: #fff;
    border: 1px solid #ddd !important;
  }

  input:checked+.slider:before {

    background-image: url('https://storage.googleapis.com/msgsndr/MLvKvVyGos8j4OV4y4Zt/media/68c1afcd6880bfaabdd0cac0.svg');

  }
