export function receiveNewsAction(state, action) {
    state.articles = action.articles;
    return state;
}
