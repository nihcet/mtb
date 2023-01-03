export const keyCamelizer = (records = []) => {
    if (records.length == 0) return [];

    const keyMap = {};
    for (let key of Object.keys(records[0])) {
        keyMap[key] = snakeToCamelCase(key);
    }

    return records.map((record) => {
        const camelizedRecord = {};
        for (let [key, camelizedKey] of Object.entries(keyMap)) {
            camelizedRecord[camelizedKey] = record[key];
        }

        return camelizedRecord;
    });
};

const snakeToCamelCase = (s) => s.replace(/(_[a-z])/g, c => c[1].toUpperCase());

export const createQuertParamStringFromList = (params = []) => wrapAllWithQuotes(params).join(', ');

const wrapAllWithQuotes = (s) => s.map((_s) => `'${s}'`);
