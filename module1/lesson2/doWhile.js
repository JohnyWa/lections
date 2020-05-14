let total = 0;
let userInfoResult;

do {
  const userInfo = prompt('enter the number plz.');
  if(userInfo === null) {
    break;
  }

  userInfoResult = Number(userInfo);

  if(!Number.isNaN(userInfoResult)) {
    total += userInfoResult;
  }


}while(true);

console.log('total: ', total);