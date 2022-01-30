let listDiv = null;

const automata = {
    X: 2,
    Y: 6,
    Z: 4,

    startState: 2,
    AcceptedState: 6,
};

function getNextState(input) {
    if (automata.X === +input) {
        return automata.Y
    }
    if (automata.Y === +input) {
        return automata.Z
    }
    if (automata.Z === +input) {
        return automata.Z
    } else {
        return "invalid input";
    }

}

function validateInput(input, currentState) {
    const state = getNextState(input);
    console.log(state)
    drawTransition("State: " + state);
    if (state === automata.AcceptedState) {
        return "Accepted"
    }
    return "";
}

function drawTransition(output) {
    const node = document.createElement("li");
    listDiv.appendChild(node);
    const text = document.createTextNode(output);
    node.appendChild(text);
}

function beginValidation() {
    const input = document.getElementById("streamInput").value;
    listDiv = document.getElementById("transitionList");
    listDiv.innerHTML = "";
    const output = validateInput(input.trim());
    const text = document.createTextNode(output);
    const resultsNode = document.getElementById("results");
    resultsNode.innerHTML = "";
    resultsNode.appendChild(text);
}
