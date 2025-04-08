// Here is task one:

// Todo List App

// Goal: Simple to-do app with in-memory task storage.
// Each task should have an: id, title, completed

// Features:

// Add task
// Mark task as done/undone
// Filter task according to:  completed | pending tasks
// Delete task


let toDoApp = [{
    title: "Cooking",
    id: 1,
    status:"Done"
}]

function addTask(title, status){
    let id = toDoApp.length +1
    let toDo = {
        title: title,
        id: id,
        status: status
    }

    toDoApp.push(toDo)

}

addTask("Working", "Undone")
addTask("Dancing", "Done")
addTask("schooling","undone")

addTask("blockfuse", "Undone")
addTask("assignment", "Done")
addTask("sleeping","undone")


addTask("sickness", "Undone")
addTask("prayer", "Done")
addTask("skills","undone")


console.log("",toDoApp);

function markTask(){
    let completed = []
    let pending = []

    for(let i in toDoApp){
        if(toDoApp[i].status == "Done"){
            completed.push(toDoApp[i])
        }else{
            pending.push(toDoApp[i])
        }
    }

    console.log("COMPLETED", completed );
    console.log("PENDING", pending);
    
}

markTask()



function deleteTask(){
    return toDoApp.filter(toDoApp => toDoApp.id !== 9)
   
    
}



console.log("AFTER DELETING", deleteTask(toDoApp));