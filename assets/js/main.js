/* Page interactions: accordion, tab/chip groups, quantity steppers, copy-to-clipboard. */
(function () {
  document.querySelectorAll(".accordion__head").forEach(function (head) {
    head.addEventListener("click", function () {
      head.parentElement.classList.toggle("is-open");
    });
  });

  // Any container with [data-toggle-group] gets single-select .is-active children.
  document.querySelectorAll("[data-toggle-group]").forEach(function (group) {
    var items = group.querySelectorAll(".tabs__item, .chip");
    items.forEach(function (item) {
      item.addEventListener("click", function () {
        items.forEach(function (i) { i.classList.remove("is-active"); });
        item.classList.add("is-active");
      });
    });
  });

  document.querySelectorAll(".qty").forEach(function (qty) {
    var out = qty.querySelector("span");
    var min = parseInt(qty.getAttribute("data-min") || "0", 10);
    qty.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;
      var val = parseInt(out.textContent, 10) + (btn.getAttribute("data-qty") === "+" ? 1 : -1);
      out.textContent = Math.max(min, val);
    });
  });

  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var label = btn.textContent;
      if (navigator.clipboard) navigator.clipboard.writeText(btn.getAttribute("data-copy"));
      btn.textContent = "Copied!";
      setTimeout(function () { btn.textContent = label; }, 1500);
    });
  });

  // Sign in / sign up switch
  var authTabs = document.querySelectorAll("[data-auth]");
  authTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var mode = tab.getAttribute("data-auth");
      document.querySelectorAll("[data-auth-show]").forEach(function (el) {
        el.classList.toggle("is-hidden", el.getAttribute("data-auth-show") !== mode);
      });
    });
  });
})();
