import React, { useState, useEffect } from 'react';
import '../Styles/buttonCreate.css';
import '../Styles/buttonDelete.css';

function Image() {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const imagenesGuardadas = JSON.parse(localStorage.getItem('imagenes'));
    if (imagenesGuardadas) {
      setImagenes(imagenesGuardadas);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('imagenes', JSON.stringify(imagenes));
  }, [imagenes]);

  const handleAgregarImagen = (event) => {
    const archivos = Array.from(event.target.files);
    archivos.forEach((archivo) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const urlImagen = e.target.result;
        setImagenes((prevImagenes) => [...prevImagenes, urlImagen]);
      };
      reader.readAsDataURL(archivo);
    });
  };

  const handleEliminarImagen = (indice) => {
    const nuevasImagenes = [...imagenes];
    nuevasImagenes.splice(indice, 1);
    setImagenes(nuevasImagenes);
  };

  return (
    <main className="main-container">
      <div className="grid-container">
        {imagenes.map((imagen, indice) => (
          <div key={indice} className="grid-item">
            <img src={imagen} alt={`Imagen ${indice + 1}`} />
            <button onClick={() => handleEliminarImagen(indice)} className="delete">Eliminar imagen</button>
          </div>
        ))}
        {!imagenes.length && <p>No hay imágenes seleccionadas</p>}
      </div>
      <div className="input-container">
        <label htmlFor="fileInput" className="fileInputButton">Agregar</label>
        <input id="fileInput" type="file" multiple onChange={handleAgregarImagen} style={{ display: 'none' }} />
      </div>
    </main>
  );
}

export default Image;