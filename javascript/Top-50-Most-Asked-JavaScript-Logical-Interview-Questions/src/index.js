const questions = require("./questions");

const startFrom = questions.length-1;

questions
    .filter((_, idx) => idx >= startFrom)
    .forEach((q, idx) => {
        console.log('\n\n=================');
        console.log(`Running question no: ${startFrom + idx+1}`);
        q();
    });
