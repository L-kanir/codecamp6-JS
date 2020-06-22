//ข้อ 1
//function method(n) {
//let string = "";

//for (let i = 0; i < n; ++i) {
//string = string + "*";
//}
//console.log(string);
//return string;
//}
//method(2);
//method(3);
//method(4);

//ข้อ 2
//function method(n) {
//let string = "";
//for (let i = 0; i < n; ++i) {
//for (let a = 0; a < n; ++a) {
//string = string + "*";
//}
//string = string + "\n";
//}
//console.log(string);
//return string;
//}
//method(2);
//method(3);
//method(4);

//ข้อ 3
//function method(n) {
//let string = "";
//for (let i = 1; i <= n; ++i) {
//for (let a = 1; a <= n; ++a) {
//string = string + a;
//}
//string = string + "\n";
//}
//console.log(string);
//return string;
//}
//method(2);
//method(3);
//method(4);

//ข้อ 4
//function method(n) {
//let string = "";
//for (let i = 1; i <= n; ++i) {
//for (let a = 1; a <= n; ++a) {
//string = string + i;
//}
//string = string + "\n";
//}
//console.log(string);
//return string;
//}
//method(2);
//method(3);
//method(4);

//ข้อ 5
//function method(n) {
//let string = "";
//for (let i = 0; i < n; ++i) {
//for (let a = 0; a < n; ++a) {
//string = string + (n - i);
//}
//string = string + "\n";
//}
//console.log(string);
//return string;
//}
//method(2);
//method(3);
//method(4);

//ข้อ 6
//function method(n) {
//let string = "";
//let num = 1;
//for (let i = 1; i <= n; ++i) {
//for (let a = 1; a <= n; ++a) {
//string = string + num;
//num++;
//}
//string = string + "\n"; //แถว
//}
//console.log(string);
//return string;
//}
//method(2);
//method(3);
//method(4);

//ข้อ 6
//function method(n) {
//let totalRow = "";
//num = 1;
//for (let row = 1; row <= n; ++row) {
//for (let column = 1; column <= n; ++column) {
//totalRow = totalRow + num;
//num++;
//}
//totalRow = totalRow + "\n";
//}
//console.log(totalRow);
//return totalRow;
//}
//method(2);
//method(3);
//method(4);

//ข้อ 7
//function method(n) {
//let totalRow = "";
//num = n * n;
//for (let row = 1; row <= n; ++row) {
//for (let column = 1; column <= n; ++column) {
//totalRow = totalRow + num;
//num--;
//}
//totalRow = totalRow + "\n";
//}
//console.log(totalRow);
//return totalRow;
//}
//method(2);
//method(3);
//method(4);

//ข้อ 8
//function method(n) {
//let totalRow = "";
//num = "0";

//for (let row = 1; row <= n; ++row) {
//for (let column = n; column <= n; ++column) {
//totalRow = totalRow + num * 2;
//num++;
//}
//totalRow = totalRow + "\n";
//}
//console.log(totalRow);
//return totalRow;
//}
//method(2);
//method(3);
//method(4);

//ข้อ 9
//function method(n) {
//let totalRow = "";
//num = "1";

//for (let row = 1; row <= n; ++row) {
//for (let column = n; column <= n; ++column) {
//totalRow = totalRow + num * 2;
//num++;
//}
//totalRow = totalRow + "\n";
//}
//console.log(totalRow);
//return totalRow;
//}
//method(2);
//method(3);
//method(4);

//ข้อ 10
//function method(n) {
//for (let row = 1; row <= n; ++row) {
//let totalRow = "";
//for (let column = 1; column <= n; ++column) {
//totalRow = totalRow + row * column;
//}
//console.log(totalRow);
//}
//}
//method(2);
//method(3);
//method(4);

// ข้อ 11
// function method(n) {
//     for (let row = 1; row <= n; ++row) {
//         let totalRow = "";
//         for (let column = 1; column <= n; ++column) {
//             if (row == column) {
//                 totalRow = totalRow + "_";
//             } else {
//                 totalRow = totalRow + "*";
//             }
//         }
//         console.log(totalRow);
//     }
// }
// method(2);
// method(3);
// method(4);

//ข้อ 12
// function method(n) {
//   for (let row = 1; row <= n; ++row) {
//     let totalRow = "";
//     for (let column = 1; column <= n; ++column) {
//       if (row == n + 1 - column) {
//         totalRow = totalRow + "_";
//       } else {
//         totalRow = totalRow + "*";
//       }
//     }
//     console.log(totalRow);
//   }
// }
// method(2);
// method(3);
// method(4);

//ข้อ 13
// function method(n) {
//   for (let row = 1; row <= n; ++row) {
//     let totalRow = "";
//     for (let column = 1; column <= n; ++column) {
//       if (column <= row) {
//         totalRow = totalRow + "*";
//       } else {
//         totalRow = totalRow + "_";
//       }
//     }
//     console.log(totalRow);
//   }
// }
// method(2);
// method(3);
// method(4);

//ข้อ 14
// function method(n) {
//   for (let row = 1; row <= n; ++row) {
//     let totalRow = "";
//     for (let column = 1; column <= n; ++column) {
//       if (row <= n - column + 1) {
//         totalRow = totalRow + "*";
//       } else {
//         totalRow = totalRow + "_";
//       }
//     }
//     console.log(totalRow);
//   }
// }
// method(2);
// method(3);
// method(4);

//ข้อ 15
// function method(n) {
//   for (let row = 1; row <= n * 2 - 1; ++row) {
//     let totalRow = "";
//     for (let column = 1; column <= n; ++column) {
//       if (row > n) {
//         if (row - n <= n - column) {
//           totalRow = totalRow + "*";
//         } else {
//           totalRow = totalRow + "_";
//         }
//       } else {
//         if (column <= row) {
//           totalRow = totalRow + "*";
//         } else {
//           totalRow = totalRow + "_";
//         }
//       }
//     }
//     console.log(totalRow);
//   }
// }
// method(2);
// method(3);
// method(4);

//ข้อ 17
// function method(n) {
//   for (let row = 1; row <= n; ++row) {
//     let totalRow = "";
//     for (let column = 1; column <= n; ++column) {
//       if (row >= n - column + 1) {
//         totalRow = totalRow + "*";
//       } else {
//         totalRow = totalRow + "_";
//       }
//     }
//     console.log(totalRow);
//   }
// }
// method(2);
// method(3);
// method(4);

//ข้อ 18
// function method(n) {
//   for (let row = 1; row <= n; ++row) {
//     let totalRow = "";
//     for (let column = 1; column <= n; ++column) {
//       if (row <= column) {
//         totalRow = totalRow + "*";
//       } else {
//         totalRow = totalRow + "_";
//       }
//     }
//     console.log(totalRow);
//   }
// }
// method(2);
// method(3);
// method(4);

//ข้อ 19
// function method(n) {
//   for (let row = 1; row <= n * 2 - 1; ++row) {
//     let totalRow = "";
//     for (let column = 1; column <= n; ++column) {
//       if (row > n) {
//         if (row < n + column) {
//           totalRow = totalRow + "*";
//         } else {
//           totalRow = totalRow + "_";
//         }
//       } else {
//         if (row >= n - column + 1) {
//           totalRow = totalRow + "*";
//         } else {
//           totalRow = totalRow + "_";
//         }
//       }
//     }
//     console.log(totalRow);
//   }
// }
// method(2);
// method(3);
// method(4);
