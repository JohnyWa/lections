async function userLoader(callback) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
  let users = await response.json();

  callback(users);
}

function usersLoaded(userData) {
  const usersContainerRef = document.querySelector('#users-container');
  const userHtml = userData.map(item => htmlConstructor(item));

  usersContainerRef.append(...userHtml);
}

function htmlConstructor({ name, email, phone, username, website}) {
  const userBox = document.createElement('div');
  userBox.classList.add('user-container');

  const userName = document.createElement('h3');
  userName.textContent = `User name: ${name}(${username})`;

  const userEmail = document.createElement('div');
  userEmail.textContent = `Email: ${email}`;

  const userPhone = document.createElement('div');
  userPhone.textContent = `Phone: ${phone}`;

  const userWebsite = document.createElement('div');
  userWebsite.textContent = `Website: ${website}`;


  userBox.append(userName, userEmail, userPhone);
  return userBox;
}

userLoader(usersLoaded);