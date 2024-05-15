// При загрузке страницы...
window.onload = function () {
  // Проверяем, есть ли сохраненные значения флажков в localStorage.
  // Если они есть, обновляем состояние флажков на странице.
  if (localStorage.getItem("toggles") !== null) {
    var savedToggles = JSON.parse(localStorage.getItem("toggles"));
    for (var i = 0; i < savedToggles.length; i++) {
      var toggle = document.getElementById("toggle" + i);
      toggle.checked = savedToggles[i];
    }
  }
};
// При каждом щелчке по флажку сохраняем состояние всех флажков в localStorage.
function saveToggle() {
  var toggles = [];
  var checkboxes = document.getElementsByTagName("input");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].type === "checkbox") {
      toggles.push(checkboxes[i].checked);
    }
  }
  localStorage.setItem("toggles", JSON.stringify(toggles));
}
