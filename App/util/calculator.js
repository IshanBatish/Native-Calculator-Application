//Defining InitialState
export const initialState = {
    currentValue: "0",
    operator: null,
    previousValue: null,
}; 

//Handler 
export const handleNumber = (value, state)=> {
    if (state.currentValue === "0"){
        return {currentValue: `${value}` };
    }

    return{
        currentValue: `${state.currentValue}${value}`
    };
};

export const handleEqual = state => {

    //All Defined Operators and Value are stored as a State
    const { currentValue,previousValue,operator} = state;

    //Defining Second Input 
    const current = parseFloat(currentValue);
    
    //Defining First Input
    const previous = parseFloat(previousValue);
    
    
    //Defining Reset 
    const resetState = {
        operator: null,
        previousValue: null,
    };


    //Defining Divide Operator
    if (operator == "/"){
        return {
            currentValue: previous / current,
            //Plus the Initial State of the Calculator for Reset
            ...resetState
        };
    }

    //Defining Multiplication Operator
    if (operator === "*"){
        return{
            currentValue: previous * current,
            ...resetState
        };
    }
    //Defining Addition Operator
    if (operator === "+"){
        return{
            currentValue: previous + current,
            ...resetState
            };
    }

    //Defining Subtraction Operator
    if (operator === "-"){
        return{
            currentValue: previous + current,
            ...resetState
        };
    }

    //Setting State
    return state;
};


//
const calculator =(type,value,state) => {
    switch(type){
        //User Pressing any Number Key
        case "number":
            return handleNumber(value,state);
        
        //User Pressing any operator Key
        case "operator":
            return {
                operator: value,
                previousValue: state.currentValue,
                currentValue: "0"
            };

        //User pressing equal key
        case "equal": 
            return handleEqual(state);
        //User Pressing Clear Key
        case "clear":
            return initialState;
        //User Pressing Positive Negative Integers
        case "posneg":
            return {
                currentValue: `${parseFloat(state.currentValue) * -1}`
              };
        //User Pressing Percentage Key
        case "percentage":
            return {
                currentValue: `${parseFloat(state.currentValue) * 0.01}`
            };
        default:
            return state;
    }
};


export default calculator;