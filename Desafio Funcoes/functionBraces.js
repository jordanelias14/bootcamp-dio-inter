function braces(values) {
    let str = values;
    for (let i = 0; i <= str.length; i++) {
        if(str[i] == '{' && str[i+1] =='}'){
            return true;
        } else{
            return false;
        }
    }
}
console.log(braces(["{[]}", "{[}"]));
