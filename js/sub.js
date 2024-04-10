// sub.js

var $hash = location.hash;
var $hash_txt = $hash.replace("#", "");

// 배너 이미지 교체
var $main = document.querySelector("main");
// 페이지 타이틀 교체
var $title = document.querySelector("#cont .wrap .title h3");
// 내부 이미지 담을 공간
var $contCover = document.querySelector("#cont .wrap .cont");
var $contGroup = "";

var hash_apply = function () {
  $main.style.backgroundImage = `url(./img/${$hash_txt}_banner.jpeg)`;
  $title.textContent = $hash_txt;

  var arr_length = "";
  if ($hash_txt == "sttutgart") arr_length = 10;
  else if ($hash_txt == "wien" || $hash_txt == "rome") arr_length = 4;
  else if ($hash_txt == "milano") arr_length = 3;
  else if ($hash_txt == "firenze") arr_length = 2;

  var $contGroup = "";
  for (i = 0; i < arr_length; i++) {
    $contGroup += `<div style="background-image:url(./img/${$hash_txt}_${
      i + 1
    }.jpeg)" onclick="location.href='./detail.html#${$hash_txt}_${
      i + 1
    }'"></div>`;
  }
  $contCover.innerHTML = $contGroup;
};
hash_apply();

// sub.html 페이지에서 상단의 메뉴를 클릭했을 때
var $list = document.querySelectorAll("header .wrap nav ul li");

for (const v of $list) {
  v.addEventListener("click", function () {
    $hash_txt = v.getAttribute("rel");

    hash_apply();
  });
}
