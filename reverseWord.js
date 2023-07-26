const str = 'I love Bangladesh'
// I evol hsedalgnaB

function reverseWord(data){
    const dataAsArray = data.split(' ');
    const result = dataAsArray.map(d => {
        return d.split('').reverse().join('');
    });
    return result.join(' ');
}

console.log(reverseWord(str));