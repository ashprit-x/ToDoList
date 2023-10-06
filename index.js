let input = document.querySelector('.entered-list');
let addTask = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

input.addEventListener('keyup', () => {
    if(input.value !== ""){
        addTask.classList.add('active');
    }
});


addTask.addEventListener('click', () => {
    if(input.value !== ""){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <div class="item">
            <p>${input.value}</p>
            <i class="fa-regular fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i> 
        </div>
        `
        tasks.appendChild(newItem);

        

        input.value = '';

    }
    else{
        alert('Please enter a task.');
    }
});

input.addEventListener('keypress', (e) => {
    if(e.key=="Enter"){
        if(input.value !== ""){
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.innerHTML = `
            <div class="item">
                <p>${input.value}</p>
                <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i> 
            </div>
            `
            tasks.appendChild(newItem);


            input.value = '';

    
        }
        else{
            alert('Please enter a task.');
        }
    }
});

tasks.addEventListener('click', (e) => {
    if(e.target instanceof HTMLParagraphElement){
        e.target.classList.toggle('completed');
    }

});

tasks.addEventListener('click', (e) =>{
    if(e.target.classList.contains("fa-trash")){
        e.target.parentElement.remove();
    }
});

tasks.addEventListener('click', (e) =>{
    if(e.target.classList.contains("fa-pen-to-square")){
        

        e.target.parentElement.children[0].innerHTML = changed;
    }
})




