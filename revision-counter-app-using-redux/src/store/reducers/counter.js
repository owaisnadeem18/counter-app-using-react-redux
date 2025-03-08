
const intialValue = {
    count : 0
}

export const counterReducer = (state = intialValue , {type}) => {
    switch(type) {
        case "inc": 
            return {...state , count: state.count + 1}
        case "dec":
            return {...state , count:state.count - 1}
        default:
            return state
    }
    return state    
}
            
