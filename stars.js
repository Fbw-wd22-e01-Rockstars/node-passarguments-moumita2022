function stars (numStars, numLines) {
if(numStars === undefined){
    numStars = 10;
}
if(numLines === undefined){
    numLines = "hi";
}

const star = "*".repeat(numStars);
console.log(star);
console.log(numLines);
console.log(numStars);
}

export default stars;