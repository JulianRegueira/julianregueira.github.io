document.getElementById('uploadForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  
  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    fetch('https://tu-backend-url.com/upload', { // Enlazaremos esto más tarde
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('Archivo subido con éxito:', data);
      // Aquí mostraremos los datos visualizados más adelante
    })
    .catch(error => {
      console.error('Error al subir el archivo:', error);
    });
  } else {
    alert('Por favor selecciona un archivo.');
  }
});
