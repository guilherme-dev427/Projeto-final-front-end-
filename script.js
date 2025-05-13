function toggleContraste() {
    const contrasteAtivo = localStorage.getItem("contrasteAtivo") === "true";

    if (contrasteAtivo) {
        document.body.style.filter = "none";
        document.body.style.backgroundColor = "black";
        localStorage.setItem("contrasteAtivo", "false");
    } else {
        document.body.style.filter = "invert(1) hue-rotate(180deg)";
        document.body.style.backgroundColor = "white";
        localStorage.setItem("contrasteAtivo", "true");
    }
}

window.addEventListener("load", function () {
    const contrasteAtivo = localStorage.getItem("contrasteAtivo") === "true";
    if (contrasteAtivo) {
        document.body.style.filter = "invert(1) hue-rotate(180deg)";
        document.body.style.backgroundColor = "black";
    } else {
        document.body.style.filter = "none";
        document.body.style.backgroundColor = "black";
    }
});

function previewImage(event) {
  const preview = document.getElementById('preview');
  const placeholder = document.getElementById('placeholder');

  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.src = e.target.result;
      preview.style.display = 'block';
      placeholder.style.display = 'none';
    }
    reader.readAsDataURL(file);
  }
}
  document.querySelector('.fa-user').addEventListener('click', function() {
        window.location.href = 'perfil.html';
    });

    const toggleButton = document.querySelector('.toggle-button');
    const teamList = document.getElementById('teamList');

    toggleButton.addEventListener('click', () => {
      teamList.style.display = teamList.style.display === 'block' ? 'none' : 'block';
    });
