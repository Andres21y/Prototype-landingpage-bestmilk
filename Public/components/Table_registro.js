export function renderRecords() {
  const data = [
    { id: '001', nombre: 'Bella', raza: 'Holstein', edad: '3 años', estado: 'Saludable', fecha: '15/12/2024' },
    { id: '002', nombre: 'Toro Max', raza: 'Angus', edad: '5 años', estado: 'Saludable', fecha: '14/12/2024' },
    { id: '003', nombre: 'Luna', raza: 'Jersey', edad: '2 años', estado: 'Tratamiento', fecha: '13/12/2024' }
  ];

  const container = document.createElement('div');
  container.className = 'row dashsection active';
  container.id = 'table_registro';

  const col = document.createElement('div');
  col.className = 'col s12';

  const tableContainer = document.createElement('div');
  tableContainer.className = 'table-container';

  const title = document.createElement('h5');
  title.innerHTML = '<i class="material-icons orange-text">view_comfy</i> Lista de Ganados';

  const table = document.createElement('table');
  table.className = 'striped responsive-table';

  const thead = document.createElement('thead');
  thead.innerHTML = `
    <tr>
      <th>ID</th>
      <th>Nombre/Etiqueta</th>
      <th>Raza</th>
      <th>Edad</th>
      <th>Estado</th>
      <th>Fecha Registro</th>
    </tr>
  `;

  const tbody = document.createElement('tbody');
  data.forEach(animal => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${animal.id}</td>
      <td>${animal.nombre}</td>
      <td>${animal.raza}</td>
      <td>${animal.edad}</td>
      <td><span class="chip ${animal.estado === 'Saludable' ? 'green' : 'orange'} white-text">${animal.estado}</span></td>
      <td>${animal.fecha}</td>
    `;
    tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  tableContainer.appendChild(title);
  tableContainer.appendChild(table);
  col.appendChild(tableContainer);
  container.appendChild(col);

  return container;
}