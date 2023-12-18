let m = 10;
let n = 5;
let A = [m * n]; //Mảng chứa toàn bộ chỉ số quà
let B = [m * n]; //Mảng chứa điều kiện
let C = [1, 2, 3, 4] //Mảng chứa chỉ số phần quà
let D = [35, 7, 2, 6] //Mảng chứa số lượng của chỉ số phần quà
for (let i in B) {
  B[i] = 1;
}
for (let i in C) {
  for (let j = 0; j < D[i]; j++) {
    let cond;
    do {
      cond = Math.floor(Math.random() * 50);
    } while (B[cond] == 0);
    A[cond] = C[i];
    B[cond] = 0;
  }
}

// Set sự kiện cho ô
for (let i in A) {
  document.querySelectorAll(".box")[i].onclick = () => {
    if (A[i] == 1) {
      alert("Bạn đã nhận được 1 cục kẹo");
      // visibility: visible;
      document.querySelectorAll(".box")[i].style.visibility = "hidden";
    }
    if (A[i] == 2) {
      alert("Bạn đã nhận được 2 cục kẹo");
      document.querySelectorAll(".box")[i].style.visibility = "hidden";
    }
    if (A[i] == 3) {
      alert("Bạn đã nhận được 3 cục kẹo");
      document.querySelectorAll(".box")[i].style.visibility = "hidden"
    }
    if (A[i] == 4) {
      alert("Bạn đã nhận được 1 lượt mở ô miễn phí");
      document.querySelectorAll(".box")[i].style.visibility = "hidden"
    }
  }
}