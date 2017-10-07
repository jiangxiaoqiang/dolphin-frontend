
const Utils ={
    getToArray(imt, paramter) {
        return this.getToJS(imt, paramter, []);
    },
    getToObject(imt, paramter) {
        return this.getToJS(imt, paramter, {});
    },
    getToJS(imt, paramter, deft = {}) {
        const imtObj = imt.get(paramter);
        return imtObj ? imtObj.toJS() : deft;
    }
}

export default Utils;
