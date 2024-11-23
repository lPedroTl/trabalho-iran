document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (name && email && phone) {
        addContactToTable(name, email, phone);
        clearForm();
    } else {
        alert('Preencha todos os campos!');
    }
});

function addContactToTable(name, email, phone) {
    const tableBody = document.querySelector('#contactTable tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td><button onclick="deleteRow(this)">Excluir</button></td>
    `;

    tableBody.appendChild(row);
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}

function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
