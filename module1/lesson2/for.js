// const number = 20;
//
// for(let i = 0; i < number; i += 1) {
//   if(i === 13) {
//     console.log('Не люблю 13');
//     continue;
//   }
//
//   console.log(i)
// }

const descContainerRef = document.getElementById('desc-container');
const descWidth = prompt("Вкажіть ширину дошки");
const numDescWidth = Number(descWidth);

let descHtml = '';

if(!Number.isNaN(numDescWidth)) {
  const blocksCount = Math.pow(numDescWidth, 2);
  let ident = 0;
  let j = 1;
  for (let i = 1; i <= blocksCount; i++){
    const blockClasses = `block ${j % 2 === ident ? 'black': 'white'}`;
    j++;
    descHtml += `<div class="${blockClasses}"></div>`;

    if (i % numDescWidth === 0) {
      j = 1;
      ident = ident === 1 ? 0 : 1;
      descHtml += '<div class="separator"></div>';
    }
  }
}else {
  descHtml += '<h1>Введіть будь ласка коректне число!</h1>';
}



descContainerRef.innerHTML = descHtml;



