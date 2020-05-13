let oneMeterPrice = 1000;
const minFlatArea = 40;
const maxFlatArea = 100;
const name = prompt('What is your name?');
const flatArea = prompt('What is the area of your future flat?');
const stateDiscount = confirm('Have you got a state discount?');
const numberFlatSquare = Number.parseInt(flatArea);
const hasAvailableFlat = flatArea >= minFlatArea && flatArea <= maxFlatArea;

if(hasAvailableFlat && stateDiscount) {
  oneMeterPrice = 800;
  console.log(`${name}, yo have a state discount, and now one meter price = ${oneMeterPrice}`);
}else if(hasAvailableFlat && !stateDiscount){
  console.log(`${name}, unfortunately, but you dont have state discount, that\`s why one Meter Price still = ${oneMeterPrice}$`);
}else {
  console.log(`${name}, unfortunately, but we dont have appropriate flat for you`);
}

if(hasAvailableFlat) {
  console.log(`${name}, you can buy ${flatArea}m flat for the ${numberFlatSquare * oneMeterPrice}$`);
}