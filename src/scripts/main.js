'use strict';

const table = document.getElementsByTagName('table')[0];

table.addEventListener('click', function (e) {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const tbody = document.querySelector('tbody');

  const rows = Array.from(tbody.getElementsByTagName('tr')).filter(
    (row) => !row.querySelector('th'),
  );

  const i = Array.from(e.target.parentElement.cells).indexOf(e.target);

  const sortedRows = rows.sort((x, y) => {
    if (!isNaN(x.cells[i].textContent) && !isNaN(y.cells[i].textContent)) {
      return parseFloat(x.cells[i].textContent) - parseFloat(y.cells[i].textContent);
    }

    return x.cells[i].textContent.localeCompare(y.cells[i].textContent);
  });

  tbody.innerHTML = '';
  tbody.append(...sortedRows);

  console.log(rows[rows.length - 1])
});