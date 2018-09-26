function random(min, max)
{
    if (Number.isInteger(min) && Number.isInteger(max)) 
    {
        const ranNumber =  Math.round(Math.random() * (max - min) + min);
        return ranNumber;
    } 
    else
    {
       return ("Number is not valid!");
    }
}

module.exports.random = random;

function minFromArray(array) {
    let min =array[0];
    for (let i = 1; i < array.length; i++) 
    {
        if(array[i] < min)
        {
            min = array[i];
        } 
    }
    return min
}

function minIntegerFromArray(array) 
{
    if (Array.isArray(array) && array.length > 5)
    {
        var onlyNumbers = array.filter(Number.isInteger);
        if(onlyNumbers.length < 1){
            return 'No numbers in array'
        } 
        return minFromArray(onlyNumbers);
    }else
    {
        return 'Array is not valid!'
    }
}

module.exports.minIntegerFromArray = minIntegerFromArray

function minIntegerFromString(string) 
{
    if (typeof(string) && string.length > 10)
    {
        let onlyNumbers = string.match(/[0-9]+/g)
        
        if (onlyNumbers == null) {
            return 'No numbers in string!';
        }
        onlyNumbers = onlyNumbers.map(a => a/1)
        return minFromArray(onlyNumbers);
    }
}

module.exports.minIntegerFromString = minIntegerFromString;

function concatStringsByLength(arrayOfStrings, type) 
{
    if(type !== 1 && type !== 0){
        return 'Type is not valid'
    }
    if(!Array.isArray(arrayOfStrings)){
        return 'First argument must be array'
    }
    arrayOfStrings.sort()
    let concated = ''
    if(type === 0){
        for (let index = 0; index < arrayOfStrings.length; index++) {
            const element = arrayOfStrings[index];
            concated += element
        }
    }else{
        for (let index = arrayOfStrings.length-1; index > 0; index--) {
            const element = arrayOfStrings[index];
            concated += element
        }
    }
    return concated;
}

module.exports.concatStringsByLength = concatStringsByLength;