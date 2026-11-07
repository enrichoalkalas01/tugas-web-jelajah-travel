/*
 * Shared layout templates: header, banner, footer, legal side nav.
 * Rendered with innerHTML (not fetch) so pages also work when opened via file://.
 *
 * Usage in a page:
 *   <body data-page="home">
 *     <div id="site-header"></div>
 *     <section class="banner" data-image="..." data-eyebrow="..." data-title="..." data-subtitle="..."></section>
 *     ...
 *     <div id="site-footer"></div>
 *     <script src="assets/js/layout.js"></script>
 *
 * Pages inside a subfolder set <body data-root="../"> so shared links still resolve.
 */
(function () {
  var NAV = [
    { key: "home", label: "Home", href: "index.html" },
    { key: "destinations", label: "Destinations", href: "destinations.html" },
    { key: "tickets", label: "Tickets", href: "tickets.html" },
    { key: "bookings", label: "My Bookings", href: "dashboard/index.html", badge: 1 },
    { key: "about", label: "About Us", href: "about.html" }
  ];

  var FOOTER = [
    {
      title: "JELAJAH.ID",
      links: [
        ["About", "about.html"],
        ["Contact Us", "contact.html"],
        ["Travel Blog", "blog.html"],
        ["Privacy & Policy", "privacy-policy.html"]
      ]
    },
    {
      title: "Travellers",
      links: [
        ["My Bookings", "dashboard/index.html"],
        ["FAQs", "faqs.html"],
        ["Refund Policy", "refund-policy.html"],
        ["Terms & Conditions", "terms-conditions.html"]
      ]
    },
    {
      title: "Top Destinations",
      links: [
        ["Nusa Penida", "destination-detail.html?d=nusa-penida-kelingking"],
        ["Raja Ampat", "destination-detail.html?d=raja-ampat"],
        ["Mount Bromo", "destination-detail.html?d=mount-bromo"],
        ["Mount Rinjani", "destination-detail.html?d=mount-rinjani"]
      ]
    }
  ];

  var LEGAL = [
    { key: "privacy", label: "Privacy Policy", href: "privacy-policy.html" },
    { key: "terms", label: "Terms & Conditions", href: "terms-conditions.html" },
    { key: "refund", label: "Refund Policy", href: "refund-policy.html" }
  ];

  var page = document.body.getAttribute("data-page") || "";
  var root = document.body.getAttribute("data-root") || "";

  function renderHeader() {
    var el = document.getElementById("site-header");
    if (!el) return;

    var items = NAV.map(function (n) {
      var badge = n.badge ? ' <span class="badge-count">' + n.badge + "</span>" : "";
      var active = n.key === page ? " is-active" : "";
      return '<li><a class="nav__link' + active + '" href="' + root + n.href + '">' + n.label + badge + "</a></li>";
    }).join("");

    el.outerHTML =
      '<header class="site-header">' +
        '<div class="container">' +
          '<a class="logo" href="' + root + 'index.html">JELAJAH.ID</a>' +
          '<button class="nav__toggle" aria-label="Open menu">&#9776;</button>' +
          '<nav class="nav">' +
            '<ul class="nav__menu">' + items + "</ul>" +
            '<a class="btn btn--ghost-white" href="' + root + 'sign-in.html">Sign In</a>' +
          "</nav>" +
        "</div>" +
      "</header>";

    var toggle = document.querySelector(".nav__toggle");
    var nav = document.querySelector(".nav");
    toggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
    });
  }

  function renderBanner() {
    var el = document.querySelector(".banner[data-title]");
    if (!el) return;

    var d = el.dataset;
    var extra = el.innerHTML;
    if (d.image) el.style.backgroundImage = "url('" + d.image + "')";

    el.innerHTML =
      '<div class="container">' +
        (d.eyebrow ? '<p class="banner__eyebrow">' + d.eyebrow + "</p>" : "") +
        '<h1 class="banner__title">' + d.title + "</h1>" +
        (d.subtitle ? '<p class="banner__subtitle">' + d.subtitle + "</p>" : "") +
        extra +
      "</div>";
  }

  function renderFooter() {
    var el = document.getElementById("site-footer");
    if (!el) return;

    var cols = FOOTER.map(function (col) {
      var links = col.links.map(function (l) {
        return '<li><a href="' + root + l[1] + '">' + l[0] + "</a></li>";
      }).join("");
      return '<div><h4 class="footer__title">' + col.title + '</h4><ul class="footer__links">' + links + "</ul></div>";
    }).join("");

    el.outerHTML =
      '<footer class="site-footer">' +
        '<div class="container">' +
          '<div class="footer__grid">' +
            cols +
            "<div>" +
              '<h4 class="footer__title">Join the adventure</h4>' +
              '<p class="footer__text">Members get exclusive access to ticket promos, holiday deals and travel ideas</p>' +
              '<form class="subscribe" onsubmit="event.preventDefault(); this.reset();">' +
                '<input type="email" placeholder="&#9993;&nbsp; Email" required>' +
                '<button class="btn btn--primary" type="submit">Join us</button>' +
              "</form>" +
            "</div>" +
          "</div>" +
          '<p class="footer__copy">All rights reserved. &copy; Jelajah.id 2026</p>' +
        "</div>" +
      "</footer>";
  }

  function renderLegalNav() {
    var el = document.querySelector("[data-legal-nav]");
    if (!el) return;

    var current = el.getAttribute("data-legal-nav");
    var links = LEGAL.map(function (l) {
      var active = l.key === current ? ' class="is-active"' : "";
      return '<a href="' + root + l.href + '"' + active + ">" + l.label + "</a>";
    }).join("");

    el.classList.add("card", "side-nav");
    el.innerHTML = '<p class="side-nav__title">Legal</p>' + links;
  }

  renderHeader();
  renderBanner();
  renderLegalNav();
  renderFooter();
})();
