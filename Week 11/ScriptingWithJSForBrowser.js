//this method add items to the to do list when the add to to do list button is clicked
document.getElementById("Button").onclick = function()
{
    //first, I create the li element I will add
    var elListitem = document.createElement('li');
    elListitem.setAttribute('id', 'ListItem');

    //then get the text from the textbox that will be on the list item
    var elTextForListItem = document.getElementById("AddToToDo").value;

    //now I apply the text to the list item
    var eltextnode = document.createTextNode(elTextForListItem);
    elListitem.appendChild(eltextnode);

    //append the list item to the list
    document.getElementById("ListToAddTo").appendChild(elListitem);

    //reset the textbox to be empty
   document.getElementById("AddToToDo").value = null;

   //set the focus on the textbox so the user can type their next item right away
   document.getElementById("AddToToDo").focus();
}

//this method clears the list at the click of the clear list button
document.getElementById("clear").onclick = function()
{
    var ListToClear = document.getElementById('ListToAddTo');
    ListToClear.innerHTML = "";
}

//this mehtod crosses out the list items on click
document.addEventListener('click', function(event)
{
    //check to see if the click element is a list item
    if(event.target.id === 'ListItem')
    {
        //change the id to something unique and easy to targer in js
        event.target.id = 'Target';

        //create a variable that allows us to change the targeted elements style and change it
        var CrossThrough = document.getElementById('Target');
        CrossThrough.style.textDecoration = 'line-through';

        //reset the id to the default so the next clicked list item doesn't send the code into panic mode
        event.target.id = 'ListItem';
    }
}, false)