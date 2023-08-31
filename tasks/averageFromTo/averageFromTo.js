function averageFromTo() {
    let n = Number(prompt("Enter N: "));
    let arr = [];

    for(let i=1; i <= n; i++){
        if(i%2!==0){
            arr.push(i);
        };
    };

    return (arr.reduce((curr, prev) => curr + prev))/arr.length;
}

module.exports = averageFromTo;