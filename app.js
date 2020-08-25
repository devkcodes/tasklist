const form=document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//function for all event listeners

loadListeners();

function loadListeners()
{
    

    form.addEventListener('submit', addTask);

    taskList.addEventListener('click',removeTasks);

    clearBtn.addEventListener('click',clearTasks);
    
    filter.addEventListener('keyup',filterTasks);
}

//--------------------------------------------------------

//add task

function addTask(e){
    if(taskInput.value!=''){
    alert('please enter something ');
    }

    const li=document.createElement('li');

li.className='collection-item';

li.appendChild(document.createTextNode(taskInput.value));

const link = document.createElement('a');

link.className = 'delete-item secondary-content';

link.innerHTML ='<i class="fa fa-remove"></i>';

li.appendChild(link);

taskList.appendChild(li);

li.style.backgroundColor="#000";

li.style.color="#fff";

storeTask(taskInput.value);

taskInput.value='';

    
    e.preventDefault();
}
//------------------------------------------------------------

//store task
function storeTask(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }
else{
    tasks=JSON.parse(localStorage.getItem('tasks'));
}
tasks.push(task);

localStorage.setItem('tasks',JSON.stringify(tasks));
}
//-----------------------------------------------------

//remove tasks

function removeTasks(e){
 if(e.target.parentElement.classList.contains('delete-item')){
     e.target.parentElement.parentElement.remove();
 }   
}
//-----------------------------------------------------------------

//clear tasks

function clearTasks(e){
    taskList.innerHTML='';
}
//--------------------------------------------------------------

//filter tasks

function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item= task.firstChild.textContent;  
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display='block';
           } else {
           task.style.display ='none';
           }
    });
}
//---------------------------------------------------------------



