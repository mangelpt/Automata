const fin = "Input  Accepted";
const rej = "Input  Rejected: ";
const err = "Input  Rejected Invalid Character: ";

var listDiv = null;

const automata = {
    q0: {
        0: "q0",
        1: "q1",
        isAccept: true,
    },
    q1: {
        0: "q2",
        1: "q1",
        isAccept: true,
    },
    q2: {
        0: "q2",
        1: "q2",
        isAccept: false,
    },

    startState: "q0",
    vocabulary: "01",
};

function getNextState(currentState, input) {
    if (automata.vocabulary.includes(input)) {
        return automata[currentState][input];
    } else {
        return err + input;
    }
}

function validateInput(inputString, currentState) {
    drawTransition(
        "Current State is: " +
        currentState +
        ", Remaining Input Stream: " +
        inputString
    );

    if (inputString.length > 0) {
        const nextState = getNextState(currentState, inputString[0]);
        if (nextState.indexOf(err) !== -1) {
            return nextState;
        } else {
            return validateInput(inputString.slice(1), nextState);
        }
    } else if (automata[currentState].isAccept === true) {
        return fin;
    } else {
        return rej + "stream ended at " + currentState;
    }
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
    const output = validateInput(input.trim(), automata.startState);
    const text = document.createTextNode(output);
    const resultsNode = document.getElementById("results");
    resultsNode.innerHTML = "";
    resultsNode.appendChild(text);
}
