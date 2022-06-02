const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((title) => {
    //iterate over arrary
    //at each index split sentence into array of words
    //now it will be an array of arrays
    const wordsArrays = title.split(" ");
    console.log(wordsArrays);
    return (
      wordsArrays
        .map((word) => {
          // iterate over each sentence/array of words and
          // capitalize each first letter of word and concatenate the rest of the word
          //return word[0].toUpperCase() + word.substring(1);
          return `${word[0].toUpperCase()}${word.substring(1)}`;
        })
        // convert array of words back to a string
        .join(" ")
    );
  });
};
 