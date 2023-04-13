const toDoForm=document.querySelector("#todo-form");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.querySelector("#todo-list");

let toDos=[];
const TODOS_KEY="todos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(){
    const li=event.target.parentElement;
    li.remove();

    toDos=toDos.filter(toDo=> toDo.id!==parseInt(li.id));
    // toDo.id는 number, li.id는 문자열임에 주의!
    saveToDos();
    // toDos DB에서 todo를 지운 뒤에 saveToDos를 한번 더 불러야 함을 잊지 말기!
}

function paintToDo(newToDo){

    const li=document.createElement("li");
    li.id=newToDo.id;
    const span=document.createElement("span");
    span.innerText=newToDo.text;

    const button=document.createElement("button");
    button.innerText="X";
    
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);

    button.addEventListener("click",deleteToDo);

    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value="";

    // toDos.push(newToDo);
    // 이제는 text 대신 object를 push하고 싶다!
    const newToDoObj={
        text:newToDo,
        id:  Date.now()
    }
    toDos.push(newToDoObj);

    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos=localStorage.getItem(TODOS_KEY);


if(savedToDos){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
    // forEach 함수는 이 paintToDo를 parsedToDos 배열의 요소마다 실행한다.
    // forEach는 각각의 item을 준다. 이제는 item이 object가 되는 것임. 
}