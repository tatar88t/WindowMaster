const clearState = (state) => {
    for (let prop of Object.keys(state)) {
        delete state[prop];
    }
}
export default clearState;