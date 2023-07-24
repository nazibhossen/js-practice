const first = [1, 2, 3]
const second = [4, 5, 6]

const combine = first.concat.second //this can only concatenate two existing array 
//But ->
const spread = [...first,...second]
//In this spread mathod we can concatenate 2 existing value and add more value. Like
const spread2 = ['a',...first,'b',...second,'c']

console.log(spread2)