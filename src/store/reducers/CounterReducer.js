// Here we have to create a counter reducer

let intialState = {
    count: 0
}

export const counterReducer = (state = intialState , {type}) => {
    switch(type) {
        case 'inc':
            return  {...state , count: state.count + 1 }
        case 'dec':
            return {...state , count: state.count - 1 }
        default: 
            return state 
    }
}