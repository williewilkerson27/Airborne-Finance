export function quotes(state = {
    author: '',
    quote: '',
}, action) {
    switch (action.type) {
        case "SAVE_QUOTE":
            return action.quote
        default: 
            return state;
    }
}