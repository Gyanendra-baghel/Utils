const undoStack = [];
const redoStack = [];

function performAction(action) {
    undoStack.push(action);
    // Perform Action here

    // Clear the redo Stack
    redoStack.length = 0;
}

function undo() {
    const action = undoStack.pop();
    if (action) {
        redoStack.push(action);
        // Action Here
    }
}
function redo() {
    const action = redoSatck.pop();
    if (action) {
        undoStack.push(action);
        // Action Here
    }
}