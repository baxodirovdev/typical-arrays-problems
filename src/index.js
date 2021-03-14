exports.min = function min(array) {
    if (array && array.length !== 0) {
        let min = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (array && array.length !== 0) {
        let max = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (array && array.length !== 0) {
        let avg = 0;
        for (let i = 0; i < array.length; i++) {
            avg += array[i];
        }
        let res = avg / array.length;
        return res;
    } else {
        return 0;
    }
};
