
console.log("hello")
var addBtn = document.getElementById('add');
var input = document.getElementById('text');
let ul = document.getElementById('list-items')
addBtn.addEventListener('click',(e)=>{
 console.log(input.value);
 if(!input.value){
    alert('Please Fill the Task.')
 }
 else{
    li = ul.appendChild(document.createElement('li'));
    li.classList.add("list")
    li.textContent =  input.value;
    input.value = '';
   localStorage.setItem('input.value', 'li');
    let deleteBtn= document.createElement('button');
ul.appendChild(deleteBtn);
 deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.addEventListener('click',function () {
            deleteBtn.previousElementSibling.remove();
            deleteBtn.remove();
            deleteBtn.classList.add('button');
            console.log('deleted')
        })
 }

})