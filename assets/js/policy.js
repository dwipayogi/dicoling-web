(function () {
  var KEY = "@dicoling_policy_lang";
  var btnID = document.getElementById("tab-id");
  var btnEN = document.getElementById("tab-en");
  var secID = document.getElementById("lang-id");
  var secEN = document.getElementById("lang-en");
  if (!btnID || !btnEN || !secID || !secEN) return;

  function setLang(lang, persist) {
    var isID = lang !== "en";
    btnID.setAttribute("aria-selected", isID ? "true" : "false");
    btnEN.setAttribute("aria-selected", isID ? "false" : "true");
    secID.hidden = !isID;
    secEN.hidden = isID;
    document.documentElement.setAttribute("lang", isID ? "id" : "en");
    if (persist) {
      try { localStorage.setItem(KEY, isID ? "id" : "en"); } catch (e) {}
    }
    var hash = isID ? "#id" : "#en";
    if (window.location.hash !== hash) {
      history.replaceState(null, "", hash);
    }
  }

  btnID.addEventListener("click", function () { setLang("id", true); });
  btnEN.addEventListener("click", function () { setLang("en", true); });

  var initial = "id";
  if (window.location.hash === "#en") {
    initial = "en";
  } else {
    try {
      var saved = localStorage.getItem(KEY);
      if (saved === "en" || saved === "id") initial = saved;
    } catch (e) {}
  }
  setLang(initial, false);
})();
