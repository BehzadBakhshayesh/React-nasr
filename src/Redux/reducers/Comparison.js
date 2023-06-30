
export function comparison (state=[], action){
    switch (action.type){
        case 'COMPARISON' : return [...new Map([...state, action.payload].map(item => [item?.id, item])).values()]
        default : return state
    }
}


