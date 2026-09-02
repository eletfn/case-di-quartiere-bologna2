document.addEventListener('DOMContentLoaded', function () {
  // Menu mobile (navbar)
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Tabs (usate in sparql.html)
  var tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-tab');
      document.querySelectorAll('.tab-btn').forEach(function (b) {
        b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
      });
      document.querySelectorAll('.tab-panel').forEach(function (p) {
        p.classList.toggle('active', p.id === target);
      });
    });
  });
});

// Cartoline del team: flip anche al tocco (mobile) e da tastiera
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.team-flip-card').forEach(function (card) {
    card.addEventListener('click', function () {
      card.classList.toggle('flipped');
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });
  });
});
