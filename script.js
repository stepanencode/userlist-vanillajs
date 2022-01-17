let userData = [
  {
    id: 1,
    name: "Иванов Иван Иванович",
    email: "ivanov@ivan.ivan",
    phone: "+70000000000",
  },
  {
    id: 2,
    name: "Петров Петр Петрович",
    email: "petrov@petr.petr",
    phone: "+70000000001",
  },
  {
    id: 3,
    name: "Сидоров Сергей Сергеевич",
    email: "sidorov@sidor.sidor",
    phone: "+70000000002",
  },
]

const getUserData = () => {
  return userData
};

const users = getUserData();


// const createUserList = () => {
//   users.map((user) => {
//     let listItem = document.createElement('li');
//     let name = document.createElement('p');
//     let email = document.createElement('a');
//     let phone = document.createElement('a');
//     name.textContent = user.name;
//     email.textContent = user.email;
//     email.setAttribute("href", "mailto:" + email);
//     phone.textContent = user.phone;
//     phone.setAttribute("href", "tel:" + phone);
//     document.getElementById('list').append(listItem);
//     listItem.append(name);
//     listItem.append(email);
//     listItem.append(phone);
//   })
// };

const createUserList = () => {
  let fragment = document.createDocumentFragment();
  users.map((user) => {
    let listItem = document.createElement('li');

    let name = document.createElement('p');
    name.textContent = user.name;
    listItem.append(name);

    let email = document.createElement('a');
    email.textContent = user.email;
    email.setAttribute("href", "mailto:" + email);
    listItem.append(email);

    let phone = document.createElement('a');
    phone.textContent = user.phone;
    phone.setAttribute("href", "tel:" + phone);
    listItem.append(phone);

    fragment.appendChild(listItem);
  })
  document.getElementById('list').appendChild(fragment);
};

const createUserTable = () => {
  let fragment = document.createDocumentFragment();
  users.map((user) => {
    let tableRow = document.createElement('tr');

    let name = document.createElement('th');
    name.textContent = user.name;
    name.setAttribute('scope', 'row');
    tableRow.append(name);

    let tdEmail = document.createElement('td');
    let email = document.createElement('a');
    email.textContent = user.email;
    email.setAttribute("href", "mailto:" + email);
    tableRow.append(tdEmail);
    tdEmail.append(email);

    let tdPhone = document.createElement('td');
    let phone = document.createElement('a');
    phone.textContent = user.phone;
    phone.setAttribute("href", "tel:" + phone);
    tableRow.append(tdPhone);
    tdPhone.append(phone);

    fragment.appendChild(tableRow);
  })
  document.getElementById('tbody').appendChild(fragment);
};

function displayTiles(e) {
  document.getElementById('list').style.display = 'flex';
  document.getElementById('table').style.display = 'none';
}

function displayList(e) {
  document.getElementById('list').style.display = 'none';
  document.getElementById('table').style.display = 'table';
}

document.addEventListener("DOMContentLoaded", function (e) {
  createUserList();
  createUserTable();
  const tilesButton = document.getElementById('tilesButton');
  const listButton = document.getElementById('listButton');
  tilesButton.addEventListener("click", displayTiles);
  listButton.addEventListener("click", displayList);
})
