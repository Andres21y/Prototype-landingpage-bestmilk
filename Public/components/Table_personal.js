export function renderPeople() {

  const data = [
    { id: '001', nombre: 'Pepito', apellido: 'Holstein', edad: '34 años', status: 'admin', fecha: '15/12/2024' },
    { id: '002', nombre: 'Pedro', apellido: 'Picapiedra', edad: '52 años', status: 'admin', fecha: '14/12/2024' },
    { id: '003', nombre: 'Pablo', apellido: 'Rocadura', edad: '29 años', status: 'admin', fecha: '13/12/2024' }
  ];

  const container = document.createElement('div');
  container.className = 'row dashsection active';
  container.id = 'table_personal';

  const col = document.createElement('div');
  col.className = 'col s12';

  const tableContainer = document.createElement('div');
  tableContainer.className = 'table-container';


  
  const title = document.createElement('h5');
  title.innerHTML = '<i class="material-icons orange-text">group</i> Personal <button> holis</button>';

  const table = document.createElement('table');
  table.className = 'striped responsive-table  highlight';

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
  data.forEach(personal => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${personal.id}</td>
      <td>${personal.nombre}</td>
      <td>${personal.apellido}</td>
      <td>${personal.edad}</td>
      <td><span class="chip ${personal.status === 'admin' ? 'green' : 'orange'} white-text">${personal.status}</span></td>
      <td>${personal.fecha}</td>
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