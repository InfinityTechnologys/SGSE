function return_menu_func() {
  window.location.href = "main.html";
}

const savedTheme = localStorage.getItem("site-theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
} else {
  document.documentElement.setAttribute("data-theme", "light");
}