var btnplus = document.getElementsByClassName("plus");
var qtn = document.getElementsByClassName("qte");
var btnminus = document.querySelectorAll(".minus");
var heart = document.querySelectorAll(".fa-heart");
var trash = document.querySelectorAll(".fa-trash-o");
for (let i = 0; i < btnplus.length; i++) {
  btnplus[i].addEventListener("click", function () {
    return qtn[i].innerHTML++;
  });
}
for (let i = 0; i < btnplus.length; i++) {
  btnminus[i].addEventListener("click", function () {
    if (qtn[i].innerHTML > 0) {
      return qtn[i].innerHTML--;
    }
  });
}

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    if (heart[i].style.color == "red") {
      heart[i].style.color = "white";
    } else {
      heart[i].style.color = "red";
    }
  });
}
for (let i = 0; i <= trash.length; i++) {
  trash[i].addEventListener("click", function () {
    trash[i].parentElement.parentElement.remove();
  });
}
