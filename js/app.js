document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-dialog]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var dialog = document.getElementById(btn.getAttribute('data-dialog'));
      if (dialog) dialog.showModal();
    });
  });

  document.querySelectorAll('.about-dialog').forEach(function (dialog) {
    dialog.querySelectorAll('[data-close]').forEach(function (btn) {
      btn.addEventListener('click', function () { dialog.close(); });
    });
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) dialog.close();
    });
  });
});
