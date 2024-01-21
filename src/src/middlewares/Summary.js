export default summary = store => next => action => {
    console.log('action', action)
    next(action);
}