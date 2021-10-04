
function makeObjectDeepCopy(obj) {

    let copy, key, value;

    copy = Array.isArray(obj) ? [] : {};

    for (key in obj) {
        value = obj[key];
        copy[key] = (typeof value === 'object' && value !== null) ? makeObjectDeepCopy(value) : value;
    }

    return copy;
}




function selectFromInterval(arrOfNum, value1, value2) {

let start = (value1 < value2) ? value1 : value2,
    end = (value1 > value2) ? value1 : value2,
    error = new Error('Ошибка!');

    if (Array.isArray(arrOfNum) && Number.isInteger(value1) && Number.isInteger(value2)) {

        arrOfNum = arrOfNum.filter(item => {

            let interval = (item >= start && item <= end);

            if (Number.isInteger(item)) {
                return interval;
            } else {
                throw error;
            }        
        });
    
    } else {
        throw error;
    }
    return arrOfNum;
}




let myIterable = {
    [Symbol.iterator]() {     
        return {

        current: this.from,
        last: this.to,
        
        next () {              
            const validation = (!Number.isInteger(this.current) || !Number.isInteger(this.last)),
                    err = new Error('Ошибка!');
                
                if ( this.current <= this.last ) {
                    return {
                        value: !validation ? this.current++ : console.log(err),
                        done: !validation ? false : true
                    };
                } else if (( this.last < --this.current ) || validation) {
                    return {value: console.log(err), done: true};

                } else {
                    return {done: true};
                }  
        }
        };
    },
};
