// detail.js
var $sttutgart = [
  ["sttutgart_1.jpeg", "Sttutgart 1일차", "https://youtu.be/kAQgNThkRRk"],
  ["sttutgart_2.jpeg", "Sttutgart 2일차", "https://youtu.be/lODxmvZU4YU"],
  ["sttutgart_3.jpeg", "Sttutgart 3일차", "https://youtu.be/GY9QmB9Adlw"],
  ["sttutgart_4.jpeg", "Sttutgart 4일차", "https://youtu.be/ojwRrabY0CQ"],
  ["sttutgart_5.jpeg", "Sttutgart 9일차", "https://youtu.be/pSEILCzi25U"],
  ["sttutgart_6.jpeg", "Sttutgart 10일차", "https://youtu.be/5cQCU7WsXY0"],
  ["sttutgart_7.jpeg", "Sttutgart 11일차", "https://youtu.be/a6QY-KGhFSI"],
  ["sttutgart_8.jpeg", "Sttutgart 21일차", "https://youtu.be/szv0UsRoago"],
  ["sttutgart_9.jpeg", "Sttutgart 22일차", "https://youtu.be/nqaM2Q8eIf8"],
  ["sttutgart_10.jpeg", "Sttutgart 23일차", "https://youtu.be/bkL9T5LITfM"],
];
var $wien = [
  ["wien_1.jpeg", "Wien 5일차", "https://youtu.be/vzar46uXxuo"],
  ["wien_2.jpeg", "Wien 6일차", "https://youtu.be/mk0c5SSQZ6M"],
  ["wien_3.jpeg", "Wien 7일차", "https://youtu.be/UsZnyBuu6xA"],
  ["wien_4.jpeg", "Wien 8일차", "https://youtu.be/KH82VqRocd0"],
];
var $milano = [
  ["milano_1.jpeg", "Milano 12일차", "https://youtu.be/4F5C64Eq0Ww"],
  ["milano_2.jpeg", "Milano 13일차", "https://youtu.be/d8yLq5ZXQ-M"],
  ["milano_3.jpeg", "Milano 14일차", "https://youtu.be/u5Dxb0vVEfU"],
];
var $firenze = [
  ["firenze_1.jpeg", "firenze 15일차", "https://youtu.be/9eR1yxhUwZs"],
  ["firenze_2.jpeg", "firenze 16일차", "https://youtu.be/SdThKkuFwOg"],
];
var $rome = [
  ["rome_1.jpeg", "rome 17일차", "https://youtu.be/XdXPXhs0WjI"],
  ["rome_2.jpeg", "rome 18일차", "https://youtu.be/aQbLtwUTW5M"],
  ["rome_3.jpeg", "rome 19일차", "https://youtu.be/99dVljF1THY"],
  ["rome_4.jpeg", "rome 20일차", "https://youtu.be/dwyHt24fUY4"],
];

var $hash = location.hash;
var $hash_txt = $hash.replace("#", "");
var $divide_arr = $hash_txt.split("_");

var $country = $divide_arr[0];
var $index = $divide_arr[1];

// 선택자 구성
var $detailBg = document.querySelector("#cont .wrap .ad_img");
var $detailTitle = document.querySelector("#cont .wrap h3");
var $detailText = document.querySelector("#cont .wrap a");

console.log($detailText);

if ($country == "sttutgart") {
  $detailBg.style.backgroundImage = `url(./img/${$sttutgart[$index - 1][0]})`;
  $detailTitle.textContent = $sttutgart[$index - 1][1];
  $detailText.innerHTML = $sttutgart[$index - 1][2];
  $detailText.href = $sttutgart[$index - 1][2];
}
if ($country == "wien") {
  $detailBg.style.backgroundImage = `url(./img/${$wien[$index - 1][0]})`;
  $detailTitle.textContent = $wien[$index - 1][1];
  $detailText.innerHTML = $wien[$index - 1][2];
  $detailText.href = $wien[$index - 1][2];
}
if ($country == "milano") {
  $detailBg.style.backgroundImage = `url(./img/${$milano[$index - 1][0]})`;
  $detailTitle.textContent = $milano[$index - 1][1];
  $detailText.innerHTML = $milano[$index - 1][2];
  $detailText.href = $milano[$index - 1][2];
}
if ($country == "firenze") {
  $detailBg.style.backgroundImage = `url(./img/${$firenze[$index - 1][0]})`;
  $detailTitle.textContent = $firenze[$index - 1][1];
  $detailText.innerHTML = $firenze[$index - 1][2];
  $detailText.href = $firenze[$index - 1][2];
}
if ($country == "rome") {
  $detailBg.style.backgroundImage = `url(./img/${$rome[$index - 1][0]})`;
  $detailTitle.textContent = $rome[$index - 1][1];
  $detailText.innerHTML = $rome[$index - 1][2];
  $detailText.href = $rome[$index - 1][2];
}
