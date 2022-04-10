const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var iOne = parseInt(nums[0]);
    /*Solve the test case and output the answer*/
    var iRemain = iOne % 2;
    var sPrint = "";
    if(iRemain == 1)
    {
        sPrint = "Alice";
    }
    else
    {
        sPrint = "Bob"
    }
    console.log(sPrint);
});