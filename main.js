$(function () { 

 $(".tags > *").click((event) => {
  event.preventDefault()
  const tag = event?.target?.innerText;
  $(".date").show();
  $(` .tags:not(:contains(${tag}))`).parent().hide()
 })
})