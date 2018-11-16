const polyfill = entries => (
    Array
    .from(entries)
    .reduce((acc, curr) => ({
        ...acc,
        [curr[0]]: curr[1]
    }), {})
);

export default (() => {
    if (!Object.fromEntries) {
        console.log('polyfilling Object.fromEntries');
        Object.fromEntries = polyfill;
    }
})();