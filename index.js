
var input1 = document.getElementById("value");
var list = document.getElementById("list");

function add() {
    const itemHtml = `
        <div class="block"> 
            <h1>${input1.value}</h1>
            <button onClick="delval(this)">Delete</button>
            <button onClick="edit(this)">Edit</button>
        </div>`;
    
    // Add the new item to the list
    list.innerHTML += itemHtml;

    // Animate the newly added item
    const newItem = list.lastElementChild;
    setTimeout(() => newItem.classList.add('added'), 10); // Add class with slight delay

    // Clear the input field
    input1.value = "";
}

function delval(ele) {
    var item = ele.parentElement;
    item.classList.add('deleted');
    setTimeout(() => item.remove(), 300); // Remove after fade-out animation
}

function edit(ele) {
    var block = ele.parentElement;
    var heading = block.querySelector('h1');

    if (ele.textContent === 'Edit') {
        ele.textContent = 'Save';
        heading.innerHTML = `<input type="text" value="${heading.textContent}">`;
    } else {
        ele.textContent = 'Edit';
        var input = heading.querySelector('input');
        heading.innerHTML = input.value;
    }
    console.log(heading.textContent);
}

document.getElementById('value').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        add();
    }
});
var logout = document.getElementById('logout')
 function showAlert() {
    alert('succesful logout!');
}

