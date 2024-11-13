const uploadForm = document.getElementById("uploadForm");
const fileInput = document.getElementById("fileInput");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");
const popupClose = document.getElementById("popupClose");

uploadForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append("file", file);

        try {
            // const response = await fetch("URL_DA_API_AQUI", {
            //     method: "POST",
            //     body: formData
            // });
            // const result = await response.json();
            showPopup(`{
  "id": 12345,
  "name": "Mesa de Escritório",
  "description": "Mesa de escritório moderna com espaço para computador e gavetas.",
  "dimensions": {
    "width": 120,
    "height": 75,
    "depth": 60
  },
  "materials": [
    "Madeira",
    "Metal"
  ],
  "color": "Cinza",
  "weight": 23.5,
  "price": 450.99,
  "in_stock": true,
  "tags": [
    "escritório",
    "móveis",
    "moderno"
  ]
}
`);
        } catch (error) {
            showPopup(`Erro ao enviar o arquivo: ${error.message}`);
        }
    }
});

function showPopup(message) {
    popupMessage.textContent = message;
    popup.style.display = "flex";
}

popupClose.addEventListener("click", () => {
    popup.style.display = "none";
});