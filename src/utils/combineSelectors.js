const passStateToSelector = (selector, reducerKey) => {
    return (state, ...rest) => selector(state[reducerKey], ...rest);
};

const passStateToSelectors = (selectors, reducerKey) => {
    const copy = { ...selectors };
    for (let key in copy) {
        copy[key] = passStateToSelector(copy[key], reducerKey);
    }
    return copy;
};

const combineSelectors = selectors => {
    const copy = { ...selectors };
    for (let key in copy) {
        copy[key] = passStateToSelectors(copy[key], key);
    }
    return copy;
};

export default combineSelectors;