
// FROM 
// https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array 
const randomWord = () => randomWords[Math.floor(Math.random() * randomWords.length)];

function generateMessage(messageLength) {
        let message = "" 
	for (let i=0; i<messageLength; i++)
		{

		    message += randomWord()		
		}
	return message 
}

