import objTemplate from '../templates/obj.hbs';
import listTemplate from '../templates/list.hbs';
import mixedObjTemplate from '../templates/mixedObj.hbs';
import usersTemplate from '../templates/users.hbs';

// const listRef = document.getElementById('list-container');
const objRef = document.getElementById('obj-container');
//
// const testObj = {
//   firstName: 'Petr',
//   lastName: 'Junior'
// };
// const testArray = ['One', 'Two', 'Three', 'Four', 'Five'];
//
// const html = objTemplate(testObj);
// const listHtml = listTemplate(testArray);
//
// objRef.insertAdjacentHTML('beforeend', html);
// listRef.insertAdjacentHTML('beforeend', listHtml);

// const testData = {
//   isLight: false,
//   data: ['One', 'Two', 'Three', 'Four', 'Five'],
//   name: 'Petr'
// };
//
// const mixedHtml = mixedObjTemplate(testData);
//
// objRef.insertAdjacentHTML('beforeend', mixedHtml);

fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
  .then(response => response.json())
  .then(json => {
    const html = json.map(user => usersTemplate(user));
    console.log(html);
    objRef.insertAdjacentHTML('beforeend', html.join(''));
  });