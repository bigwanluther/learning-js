// Here is task one:

// Todo List App

// Goal: Simple to-do app with in-memory task storage.
// Each task should have an: id, title, completed

// Features:

// Add task
// Mark task as done/undone
// Filter task according to:  completed | pending tasks
// Delete task


// let toDoApp = [{
//     title: "Cooking",
//     id: 1,
//     status:"Done"
// }]

// function addTask(title, status){
//     let id = toDoApp.length +1
//     let toDo = {
//         title: title,
//         id: id,
//         status: status
//     }

//     toDoApp.push(toDo)

// }

// addTask("Working", "Undone")
// addTask("Dancing", "Done")
// addTask("schooling","undone")

// addTask("blockfuse", "Undone")
// addTask("assignment", "Done")
// addTask("sleeping","undone")


// addTask("sickness", "Undone")
// addTask("prayer", "Done")
// addTask("skills","undone")


// console.log("",toDoApp);

// function markTask(){
//     let completed = []
//     let pending = []

//     for(let i in toDoApp){
//         if(toDoApp[i].status == "Done"){
//             completed.push(toDoApp[i])
//         }else{
//             pending.push(toDoApp[i])
//         }
//     }

//     console.log("COMPLETED", completed );
//     console.log("PENDING", pending);
    
// }

// markTask()



// function deleteTask(){
//     return toDoApp.filter(toDoApp => toDoApp.id !== 9)
   
    
// }



// console.log("AFTER DELETING", deleteTask(toDoApp));




// let num = [1,2,4,6,7,8,8,0,9];
// let target = 9;

// function addNumbers() {
//     for (let i = 0; i < num.length; i++) {
//         for (let j = i + 1; j < num.length; j++) {
//             if (num[i] + num[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return []; 
// }

// console.log(addNumbers());

// Adashe System

let members = [];

// Add a new member
function addMember(name, amount) {
  members.push({ name, amount });
}

// Get all members
function getAllMembers() {
  return members;
}

// Get a single member by name
function getMember(name) {
  return members.find(member => member.name === name);
}

// Withdraw amount from a member
function withdraw(name, amount) {
  const member = getMember(name);
  if (member && member.amount >= amount) {
    member.amount -= amount;
    console.log(`${amount} withdrawn from ${name}.`);
    return true;
  } else {
    console.log(`Withdrawal failed: insufficient funds or member not found.`);
    return false;
  }
}

// Remove a member
function removeMember(name) {
  members = members.filter(member => member.name !== name);
  console.log(`${name} removed from members.`);
}

// Example usage:
addMember("Alice", 500);
addMember("Bob", 300);

console.log("All members:", getAllMembers());

withdraw("Alice", 100);

console.log("Alice's new balance:", getMember("Alice"));

removeMember("Bob");

console.log("All members after removal:", getAllMembers());
