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
            const response = await fetch("http://localhost:8000/upload-file/", {
                method: "POST",
                body: formData
            });
            const result = await response.json();
            showPopup(showPopup(JSON.stringify(result)));
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