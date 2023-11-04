let user = prompt("Choose 'quit', 'delete', 'add', 'list'");

const list = [];

while (user !== "quit" && user !== "q") {
    if (user === "list") {
        console.log("*".repeat(10));
        if (list.length > 0) {
            for (let i = 0; i < list.length; i++) {
                console.log(`${i + 1}: ${list[i]}`);
            }
        } else {
            console.log("The list is empty.");
        }
        console.log("*".repeat(10));
    } else if (user === "add") {
        const newTodo = prompt("What do you want to add?");
        list.push(newTodo);
        console.log(`${newTodo} is added to the list!`);
    } else if (user === "delete") {
        let index = parseInt(prompt("Enter the number of the item to delete: "));
        if (index < 0 || index > list.length) {
            while (index < 0 || index > list.length) {
                index = parseInt(prompt("Invalid input. Please enter a valid item number to delete: "));
            }
            list.splice(index-1, 1);
            console.log("Item deleted from the list.");
        } else {
            console.log("Invalid input. Item not deleted.");
        }
    }
    if ((user !== "quit" && user !== "q") && user !== "list" && user !== "add" && user !== "delete") {
        user = prompt(" You type wrong type again! Chose'quit','delete','add','list'");
    } else {
        user = prompt("Chose'quit','delete','add','list'");
    }
        
}
console.log("Quit The App");
