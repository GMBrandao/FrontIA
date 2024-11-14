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

            if(response.status == 200){
              x = JSON.parse(result)

              const prettyJson = JSON.stringify(x, null, 4); 

              showPopup(prettyJson, 0);
            }
            else{
              const x = result.detail;
              showPopup(`Erro\n${x}`, 1);
            }
        } catch (error) {
            showPopup(`Erro ao enviar o arquivo: ${error.message}`);
        }
    }
});

function showPopup(message, textAlign) {
  const stylePop = document.getElementById("popupContent");

  if(textAlign === 1) {
    stylePop.style.textAlign = "center";
  } 
  else
    stylePop.style.textAlign = "left";

  popupMessage.textContent = message;
  popup.style.display = "flex";
}

popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});