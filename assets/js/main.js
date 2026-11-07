/* Page interactions: accordion, tab/chip groups, quantity steppers, copy, filters, remove buttons. */
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

  // Status chips: show only items whose data-status contains the chosen filter.
  document.querySelectorAll("[data-status-tabs]").forEach(function (group) {
    var chips = group.querySelectorAll("[data-filter]");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var f = chip.getAttribute("data-filter");
        chips.forEach(function (c) { c.classList.toggle("is-active", c === chip); });
        document.querySelectorAll("[data-status]").forEach(function (el) {
          var match = f === "all" || el.getAttribute("data-status").split(" ").indexOf(f) > -1;
          el.classList.toggle("is-hidden", !match);
        });
      });
    });
  });

  // Admin filter bar: search text + every select (except "All ...") must appear in the row.
  document.querySelectorAll("[data-table-filter]").forEach(function (form) {
    var rows = document.querySelectorAll(".table tbody tr");
    function apply() {
      var terms = [];
      form.querySelectorAll("input[type=search], select").forEach(function (f) {
        var v = f.value.trim().toLowerCase();
        if (v && v.indexOf("all ") !== 0) terms.push(v);
      });
      rows.forEach(function (row) {
        var text = row.textContent.toLowerCase();
        row.classList.toggle("is-hidden", !terms.every(function (t) { return text.indexOf(t) > -1; }));
      });
    }
    form.addEventListener("input", apply);
    form.addEventListener("submit", function (e) { e.preventDefault(); apply(); });
  });

  document.querySelectorAll("[data-remove]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(btn.getAttribute("data-remove") || "tr");
      if (item && confirm("Remove this item?")) item.remove();
    });
  });

  document.querySelectorAll("[data-mark-read]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var badge = btn.closest("details").querySelector("[data-new]");
      if (badge) badge.remove();
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
