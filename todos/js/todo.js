console.log('to-dos');
// console.log(88);
showList();
let btn = document.getElementById('button');
// console.log(btn);
btn.addEventListener('click', function () {
    let addTxt = document.getElementById('text');
    let listVal = localStorage.getItem('list');
    if (listVal == null) {
        listObj = [];
    }
    else {
        listObj = JSON.parse(listVal);
    }
    listObj.push(addTxt.value);
    localStorage.setItem('list', JSON.stringify(listObj));
    addTxt.value = "";
    // console.log(listObj);
    showList();
})

function showList() {
    let listVal = localStorage.getItem('list');
    if (listVal == null) {
        listObj = [];
    }
    else {
        listObj = JSON.parse(listVal);
    }
    let html = "";
    listObj.forEach(function (element,index) {
        html += `
        <div  id = ${index}  ondblclick = "removeLine(this.id)" onclick = "markCompleted(this.id)" style = "background:#007bff; color:white" class="alert alert-warning alert-dismissible fade show" role="alert">
        <p>${element}</p>
        <button id = ${index} onclick = "deleteList(this.id)" type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        `
});
let elem = document.getElementById('item');
    if (listObj.length != 0) {
        elem.innerHTML = html;
    }
    else{
        elem.innerHTML = 'Add your to do list';
    }
}

function deleteList(value){
    let listVal = localStorage.getItem('list');
    if (listVal == null) {
        listObj = [];
    }
    else {
        listObj = JSON.parse(listVal);
    }
    listObj.splice(value,1);
    localStorage.setItem('list', JSON.stringify(listObj));
    showList();

}
function markCompleted(val){
    let elem = document.getElementById(val);
    
    elem.setAttribute("style","text-decoration:line-through; background:#007bff; color:white");
    
}
function removeLine(num){
    let elem = document.getElementById(num);
    elem.removeAttribute("style");
    elem.setAttribute("style"," background:#007bff; color:white");
}






