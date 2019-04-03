$(".changing").click(function(){
    var clickItem = $(this).html()
    clickItem=clickItem.toLowerCase()
    $(".section").hide()
    $(`.${clickItem}`).show()
})

$( document ).ready(function() {
    $(".section").hide()
    $(".home").show()
  });