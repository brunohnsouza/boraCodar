import elements from "./elements.js";

export const calculator = {
    currentOperation: "",
    mathOperationsSignal: ["*", "/", "+", "-"],
    mathOperationsNames: ["multiplication", "divide", "sum", "minus", "clear", "clear-all", "clear-current" ,"equal"],
    
    addDigit(digit) {
        if(digit === "." && elements.currentOperationText.innerText.includes(".")) return;

        elements.equalSignal.classList.add("d-none");
        this.currentOperation = digit;
        this.updateDisplay();
    },

    processOperation(operationButton) {
        const operationButtonClassList = operationButton.classList;

        let operationSignal;
        let operationValue;
        const previous = +elements.previousOperationText.innerText.split(" ")[0];
        const current = +elements.currentOperationText.innerText;

        if (elements.currentOperationText.innerText === "" && operationButton.innerText !== "C") {
            if (elements.previousOperationText.innerText !== "") { this.changeOperation(operationButtonClassList); }
            return;
        }

        if (operationButtonClassList.contains(this.mathOperationsNames[2]) && elements.currentOperationText.innerText !== ".") {
            operationValue = previous + current;
            operationSignal = this.mathOperationsSignal[2];
            this.updateDisplay(operationValue, operationSignal, current, previous);

        } else if(operationButtonClassList.contains(this.mathOperationsNames[1]) && elements.currentOperationText.innerText !== ".") {
            if (current === 0 && previous !== 0) return;

            operationValue = previous / current;
            operationSignal = this.mathOperationsSignal[1];
            this.updateDisplay(operationValue, operationSignal, current, previous);

        } else if(operationButtonClassList.contains(this.mathOperationsNames[0]) && elements.currentOperationText.innerText !== ".") {
            operationValue = previous * current;
            operationSignal = this.mathOperationsSignal[0];
            this.updateDisplay(operationValue, operationSignal, current, previous);
            
        } else if(operationButtonClassList.contains(this.mathOperationsNames[3]) && elements.currentOperationText.innerText !== ".") {
            operationValue = previous - current;
            operationSignal = this.mathOperationsSignal[3];
            this.updateDisplay(operationValue, operationSignal, current, previous);
            
        } else if(operationButtonClassList.contains(this.mathOperationsNames[4]) && elements.currentOperationText.innerText !== ".") {
            this.processClearOperator();
        } else if(operationButtonClassList.contains(this.mathOperationsNames[6]) && elements.currentOperationText.innerText !== ".") {
            this.processClearCurrentOperation();
        } else if(operationButtonClassList.contains(this.mathOperationsNames[5]) && elements.currentOperationText.innerText !== ".") {
            this.processClearAllOperation();
        } else {              
            operationSignal = elements.previousOperationText.innerText.split(" ")[1];
            this.processEqualOperator(operationValue, operationSignal, previous, current);
            
        }
    },

    updateDisplay(
        operationValue = null,
        operation = null,
        current = null,
        previous = null
    ) {
        if (operationValue === null) {
            elements.currentOperationText.innerText += this.currentOperation;

        } else {
            if (previous === 0) operationValue = current;

            elements.equalSignal.classList.add("d-none");
            elements.previousOperationText.innerText = `${operationValue} ${operation}`;
            elements.currentOperationText.innerText = "";

        }
    },

    changeOperation(operation) {
        const mathOperationsNames = this.mathOperationsNames;

        mathOperationsNames.forEach((mathOperation) => {
            if(!operation.contains(mathOperation)) return;
        })

        if (operation.contains(this.mathOperationsNames[2])) {
            elements.previousOperationText.innerText = 
                elements.previousOperationText.innerText.slice(0, -1) + this.mathOperationsSignal[2];
            
        } else if(operation.contains(this.mathOperationsNames[1])) {
            elements.previousOperationText.innerText = 
                elements.previousOperationText.innerText.slice(0, -1) + this.mathOperationsSignal[1];
            
        } else if(operation.contains(this.mathOperationsNames[0])) {
            elements.previousOperationText.innerText = 
                elements.previousOperationText.innerText.slice(0, -1) + this.mathOperationsSignal[0];
            
        } else if(operation.contains(this.mathOperationsNames[3])) {
            elements.previousOperationText.innerText = 
                elements.previousOperationText.innerText.slice(0, -1) + this.mathOperationsSignal[3];
            
        }
    },

    processClearOperator() {
        elements.currentOperationText.innerText = 
            elements.currentOperationText.innerText.slice(0, -1);

        elements.equalSignal.classList.add("d-none");
    },

    processClearCurrentOperation() {
        elements.currentOperationText.innerText = "";
        elements.equalSignal.classList.add("d-none");
    },

    processClearAllOperation() {
        elements.currentOperationText.innerText = "";
        elements.equalSignal.classList.add("d-none");
        elements.previousOperationText.innerText = "";
    },

    processEqualOperator(
        operationValue = null, 
        operationSignal = null, 
        previous = null, 
        current = null
    ) {
        switch (operationSignal) {
            case this.mathOperationsSignal[0]:
                operationValue = previous * current;
                elements.previousOperationText.innerText = "";
                elements.equalSignal.classList.remove("d-none");
                elements.currentOperationText.innerText = operationValue;
                break;

            case this.mathOperationsSignal[1]:
                if (current === 0 && previous !== 0) return;

                operationValue = previous / current;
                elements.previousOperationText.innerText = "";
                elements.equalSignal.classList.remove("d-none");
                elements.currentOperationText.innerText = operationValue;
                break;
                
            case this.mathOperationsSignal[2]:
                operationValue = previous + current;
                elements.previousOperationText.innerText = "";
                elements.equalSignal.classList.remove("d-none");
                elements.currentOperationText.innerText = operationValue;
                break;

            case this.mathOperationsSignal[3]:
                operationValue = previous - current;
                elements.previousOperationText.innerText = "";
                elements.equalSignal.classList.remove("d-none");
                elements.currentOperationText.innerText = operationValue;
                break;
            default:
                break;
        }
    },

    start(buttons) {
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                !button.classList.contains("operation") ? calculator.addDigit(button.innerText) : calculator.processOperation(button);
            })
        })
    },
}
