window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("preloader").classList.add("hidden");
  }, 500);
});

function go_sgse() {
  try {
    window.location.href = "https://sgse.pages.dev/main";
  } catch (error) {
    showErrorMessage("Bir hata oluştu! . '" + error.name + "'");
  }
}

function go_sgse_business() {
  try {
    window.location.href = "https://sgse-isletme.pages.dev";
  } catch (error) {
    showErrorMessage("Bir hata oluştu! . '" + error.name + "'");
  }
}

function showErrorMessage(message) {
  let errorBox = document.getElementById("errorBox");
  let errorText = document.getElementById("errorText");

  errorText.innerHTML = message;
  errorBox.style.display = "block";

  setTimeout(() => {
    errorBox.style.opacity = "1";
    errorBox.style.transform = "translateY(0)";
  }, 10);

  setTimeout(() => {
    closeError();
  }, 3000);
}

function closeError() {
  let errorBox = document.getElementById("errorBox");
  errorBox.style.opacity = "0";
  errorBox.style.transform = "translateY(-10px)";

  setTimeout(() => {
    errorBox.style.display = "none";
  }, 500);
}

const savedTheme = localStorage.getItem("site-theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}
