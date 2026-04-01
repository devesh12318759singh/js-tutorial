const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros =  ["superman","flash" , "batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);

const both_heros = marvel_heros.concat(dc_heros);
console.log(both_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const diff_arr = [1,2,3,[5,6,7],6,[2,4,[5,9]]]
const orig_arr = diff_arr.flat(Infinity);
console.log(orig_arr);


console.log(Array.isArray("Devesh"));
console.log(Array.from("Devesh"));
console.log(Array.from({name: "Devesh"})); //Confused