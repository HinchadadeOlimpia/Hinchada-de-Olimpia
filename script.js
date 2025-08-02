fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById('canticos-container');
    data.canticos.forEach(cantico => {
      const div = document.createElement('div');
      div.className = 'cantico';
      div.innerHTML = `
        <h2>${cantico.titulo}</h2>
        <p>${cantico.letra}</p>
        <p class="categoria">Categoría: ${cantico.categoria}</p>
      `;
      contenedor.appendChild(div);
    });
  });
