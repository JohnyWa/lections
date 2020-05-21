//TODO: Guard Clause

// function getInsuranceAmount(status) {
//   let amount;
//   if (!status.hasInsurance()){
//     amount = 1;
//   } else {
//     if (status.isTotaled()){
//       amount = 10000;
//     } else {
//       if (status.isDented()){
//         amount = 160;
//         if (status.isBigDent()){
//           amount = 270;
//         }
//       }
//     }
//   }
//   return amount;
// }
// function getInsuranceAmount(status) {
//   if (!status.hasInsurance()){
//     return 1;
//   }
//   if (status.isTotaled()){
//     return 10000;
//   }
//   if (status.isDented() && status.isBigDent()){
//     return 270;
//   }
//   if (status.isDented()){
//     return 160;
//   }
//   return 0;
// }