let m = 10;
let n = 5;
let A = [m * n]; //Mảng chứa toàn bộ chỉ số quà
let B = [m * n]; //Mảng chứa điều kiện
let C = [1, 2, 3, 4] //Mảng chứa chỉ số phần quà
let D = [38, 4, 2, 6] //Mảng chứa số lượng của chỉ số phần quà
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
      // alert("Bạn đã nhận được 1 cục kẹo");
      // visibility: visible;
      notice(1);
      document.querySelectorAll(".box")[i].style.visibility = "hidden";
    }
    if (A[i] == 2) {
      // alert("Bạn đã nhận được 2 cục kẹo");
      notice(2);
      document.querySelectorAll(".box")[i].style.visibility = "hidden";
    }
    if (A[i] == 3) {
      notice(3);
      // alert("Bạn đã nhận được 3 cục kẹo");
      document.querySelectorAll(".box")[i].style.visibility = "hidden"
    }
    if (A[i] == 4) {
      notice(4);
      // alert("Bạn đã nhận được 1 lượt mở ô miễn phí");
      document.querySelectorAll(".box")[i].style.visibility = "hidden"
    }
  }
}

function notice(a) {
  document.querySelector(".-notice").style.display = "flex";
  if (a >= 1 && a <= 3) {
    document.querySelector(".img").style.backgroundImage = `url("https://horeco.vn/wp-content/uploads/2021/11/keo-alpenliebe-huong-dau-kem-goi-34-vien_2.jpg")`
    document.querySelector(".content2").innerHTML = `${a} cục kẹo`
  } else {
    document.querySelector(".img").style.backgroundImage = `url("Artboard.png")`
    document.querySelector(".content2").innerHTML = `1 lượt mở miễn phí`
  }
}

document.querySelector(".received").onclick = () => {
  document.querySelector(".-notice").style.display = "none";
}