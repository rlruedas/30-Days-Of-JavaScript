// this is your main.js script

//Exercise Level 1

let challenge = '30 Days of Javascript'
let string = "Facebook, Google, Microsoft, Apply, IBM, Oracle, Amazon"
let position = 'You cannot end a sentence with because because because is a conjunction'
let challengeWSpaces = '   30 Days of Javascript   '
let pattern = /a/g;
let stringConc = '30 Days of'

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0,2));
console.log(challenge.substring(3, challenge.length ));
console.log(challenge.includes('script'));
console.log(challenge.split());
console.log(challenge.split(" "));
console.log(string.split(','));
console.log(challenge.replace('Javascript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));
console.log(position.indexOf('because'));
console.log(position.lastIndexOf('because'));
console.log(position.search('because'));
console.log(challengeWSpaces, " ", challengeWSpaces.trim());
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('Javascript'));
console.log(challenge.match(pattern));
console.log(stringConc.concat('Javascript'))
console.log(challenge.repeat(2))

// Exercise Level 2

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another")
console.log(`"Love is not patronizing and charity isn't about pity, it about love. Charity and love are the same -- with charity you give love, so don't juve give money but reach out your hand instead."`)
console.log(typeof parseInt('10') == typeof 10);
console.log(Math.ceil(parseFloat('9.8')) == 10);

let python = 'python', jargon = 'jargon';

console.log(python.includes('on'));
console.log(jargon.includes('on'));

let sentence = 'I hope this course is not full of jargon';

console.log(sentence.includes(jargon));
console.log(Math.floor(Math.random() * 101));
console.log(Math.floor((Math.random() * (100 - 50 + 1) + 50)))
console.log(Math.floor(Math.random() * 256));

let word = 'Javascript'
let random = Math.floor(Math.random() * 11);

console.log(word[random]);

let escapeString = "1 1 1 1 1\n2 1 \
2 4 8\n3 3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125"

console.log(escapeString)

let sent = 'You cannot end a sentence with because because because is a conjunction'
let sub = 'because because because'

console.log(sent.substring(sent.indexOf('because'), sent.lastIndexOf('is')))

// Exercise Level 3

let _sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love'
let lowercase = _sentence.toLowerCase();
let wordMatch = lowercase.match(/love/g)

console.log(wordMatch.length)

let _wordMatch = sent.match(/because/g);

console.log(_wordMatch.length)

const sentences = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const rplcd = sentences.replace(/[;@&\/\\#,+()$~%.'":*?<>{}]/g,'');

let words = rplcd.match(/\w+/g);

let occurances = {}

for (let word of words){
    if(occurances[word]){
        occurances[word]++;
    }else {
        occurances[word] = 1;
    }
}

console.log(occurances)

let paragraph = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000, euro online courses per month';

let salary = paragraph.match(/\d+/g);


console.log(Number(salary[0]) + Number(salary[1]) + Number(salary[2]));



