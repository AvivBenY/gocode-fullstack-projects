const input = document.querySelector(".searched");
const ulEl = document.querySelector(".searchList")

const defaultArr = ["banana","apple","potato","orange"]

displayList(defaultArr);
input.addEventListener('input', function (e) {
    isInclude(defaultArr, e.target.value);
});
function displayList(arr) {
    ulEl.innerHTML="";
    if (arr.length === 0) {
        const liEl = document.createElement("li");
        liEl.classList.add("not-found");
        liEl.textContent = "Not results found!";
        ulEl.append(liEl);
    }
    for (let i = 0; i < arr.length; i++) {
        const liEl = document.createElement("li");
        liEl.textContent = arr[i];
        ulEl.append(liEl);
    }
}

function isInclude(arr, str) {
    if(str ===""){
        displayList(defaultArr);
    }
    else{
        const filteredArr = arr.filter(function (word) {
        return word.startsWith(str);
    });
    console.log(str);
    displayList(filteredArr);
}}
