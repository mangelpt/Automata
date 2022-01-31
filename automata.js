let listDiv = null;

const automata = {
    state: ["X", "Y", "Z"],
    transitions: [2, 6, 4],
    currentState: "",
    set setState(value) {
        this.currentState = this.state[value];
    }
};

function getNextState(input) {
    if (automata.transitions.includes(+input)) {
        if (automata.transitions[0] === +input) {
            automata.setState = 1;
        }
        if (automata.transitions[1] === +input) {
            automata.setState = 2;
        }
        if (automata.transitions[2] === +input) {
            automata.setState = 2;
        }
    } else {
        return "invalid input";
    }
}

function validateInput(input) {
    const state = getNextState(input);
    const currentState = automata.currentState;
    drawState(currentState);
    if (state) {
        return state
    }
    return "";
}

function drawState(output) {
    const state = document.getElementById("state");
    state.value = output;
}

function beginValidation() {
    const input = document.getElementById("streamInput").value;
    const output = validateInput(input.trim());
    const resultsNode = document.getElementById("results");
    resultsNode.innerHTML = output;
}
