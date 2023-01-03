// warning: this function mutate original object
export const omitFields = (object, fieldsToOmit = []) => {
    for (let field of fieldsToOmit) {
        delete object[field];
    }
};
