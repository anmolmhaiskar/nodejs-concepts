const buffer = new Buffer.from("Anmol M");

console.log(buffer); // <Buffer 41 6e 6d 6f 6c 20 4d> (hexadecimal representation of "Anmol")

console.log(buffer.toJSON()); // { type: 'Buffer', data: [ 65, 110, 109, 111, 108,  32,  77 ] } (binary representation of "Anmol")

console.log(buffer.toString()); // Anmol M

buffer.write("Bs");

console.log(buffer.toString()); // Bsmol M (overwrites first two characters)

buffer.write("Anmol Mhaiskar");

console.log(buffer.toString()); // Anmol M (buffer size is limited at the start of the code here i.e. Buffer.from() and it does not get extended even we write it with long string)
