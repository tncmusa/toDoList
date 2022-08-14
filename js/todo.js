$(document).ready(function(){
    $('.toast').toast();
});

let listArray = [];
if(typeof localStorage.getItem("list") !== 'undefined')
{
    let listStorage = JSON.parse(localStorage.getItem("list"));
    if(Array.isArray(listStorage)) //check if localstorage list is array
    {   
        listArray = listStorage;
    }
}

//load list
function loadLocalStorage()
{
    let ulElement = document.querySelector("#list");
    for(let i = 0; i < listArray.length; i ++)
    {
        let listText = listArray[i];
        let newLiElement = document.createElement("li");
        newLiElement.onclick = deleteElement;
        newLiElement.innerText = listText;
        ulElement.appendChild(newLiElement);
    }
}

loadLocalStorage();

function newElement()
{
    let inputText = document.querySelector("#task").value;
    if(!inputText.length)
    {
        return $('#liveToast2').toast('show')
    }
    let ulElement = document.querySelector("#list");
    let newLiElement = document.createElement("li");
    newLiElement.onclick = deleteElement;
    newLiElement.innerText = inputText;
    ulElement.appendChild(newLiElement);
    if(inputText == null) console.log("inputtext null");
    if(listArray == null) console.log("listarray null");
    listArray.push(inputText);
    localStorage.setItem("list", JSON.stringify(listArray));
    $('#liveToast').toast('show')

}

function deleteElement(e)
{
    let element = e.target;
    let index = listArray.indexOf(element.innerText);
    listArray.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(listArray));
    element.remove();
}