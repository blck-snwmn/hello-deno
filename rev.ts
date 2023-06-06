const input  = Deno.args[0];
if (!input) {
    console.error("Error: No input file");
    Deno.exit(1);
}
const output = input.split("").reverse().join("");
console.log(output);