const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var iR1 = parseInt(nums[0]);
    var iS = parseInt(nums[1]);
    /*Solve the test case and output the answer*/
    var iTotal = iS * 2;
    var iR2 = iTotal - iR1;
    
    console.log(iR2);
});