let day = 31;

try{
    if(day > 31){
        throw new RangeError('Day cannot be greater than 31');
    }
    if(day < 1){
        throw 'invalid day';
    }
} catch (err) {
    if(err === 'invalid day'){
        console.log(`Variable has invalid value: ${day}`);
    }
    else{
        console.log(`${err.name} Exception: ${err.message}`);
    }
}