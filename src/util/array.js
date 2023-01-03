export const uniqify = (list) => {
    const map = {};
    for (let item in list) {
        map[item] = true;
    }

    return Object.keys(map);
};
