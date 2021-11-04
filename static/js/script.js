function newItem() {


  //1. Adding a new item to the list of items:
  let list = $('<li></li>');
  let inputValue = $('#input').val()
  list.append(inputValue);

  if (inputValue === '') {
    alert('You must write something')
  } else {
    $('#list').append(list)
  }

  //2. Crossing out an item from the list of items:

  list.on('dblclick', function crossOut() {
    list.toggleClass('strike');
  });

  //3(i). Adding the delete button "X":
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  list.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  function deleteListItem() {
    list.addClass("delete")
  }
  // 4. Reordering the items:
  $('#list').sortable();
}