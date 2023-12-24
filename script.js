
let counter = 1;
function insertListItem(content) {

  // Create a new list item
  var newListItem = document.createElement('li');
  newListItem.id = `post-${counter}`

  // Set the content of the new list item
  newListItem.innerHTML = content;

  // Create a delete button
  var deleteButton = document.createElement('button');
  deleteButton.id = `btd-${counter}`;
  deleteButton.textContent = 'Delete';

  // Append the delete button to the list item


  // Get the ordered list element by its ID
  var orderedList = document.getElementById('ka');

  // Append the new list item to the ordered list
  if (orderedList) {
    orderedList.appendChild(newListItem);
    orderedList.appendChild(deleteButton);
  } else {
    console.error("Ordered list element not found.");
  }

}

let added = document.getElementById("add")

added.onclick = function (event) {

  event.preventDefault();
  let task = document.getElementById("txt1")


  let task_text = task.value.trim();



  if (task.value !== 0) {
    insertListItem(task_text)

  }
  task.value = "";

  let deletebtn = document.getElementById(`btd-${counter}`)

  deletebtn.onclick = function (e) {

    e.preventDefault();
    let id_post_to_delet = "post-" + e.target.id.split("-")[1];
    let post_delet = document.getElementById(id_post_to_delet);
    post_delet.remove();

    let id_butn_delet = document.getElementById(e.target.id)
    id_butn_delet.remove();

  }
  counter++;


}