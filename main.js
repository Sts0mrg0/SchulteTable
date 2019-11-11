$(document).ready(function() {

  let set = new Set();


restartTable();
checkBlock();



function restartTable() {

  set.clear();

  set.add("1");

  $(".block").animate({
      opacity: 1,
    }, 1000);

  let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

  function mixArr(arr) {
    let result =  arr.sort(function() {
      return Math.random() - 0.5;
    })
    return result;
  }

  let mixedArr = mixArr(arr);

  let counter = 1;
  for (let i of mixedArr) {
    console.log(i);
    $(".b" + counter).html(i);
    counter += 1;
  }
}

$(".mix").click(function() { restartTable() });

function checkBlock() {

  $(".block").click(function() {

  let clicked = $(this).html();

  if (set.has(clicked)) {
    $(this).html(" ");
    $(this).animate({
        opacity: 0.3,
      }, 500);
    set.add(String(+clicked + 1));
  }

  if (set.has("26")) {
    alert("Поздравляю!");
    // restartTable();
    }

  });
}


});
