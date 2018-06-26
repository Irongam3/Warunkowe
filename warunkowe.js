var a = 67,
	b = 4,
    value = (a * a) - (2 * a * b) - (b * b);
console.log(value);
if (value > 0) {
	document.write('Wynik dodatni'); 
} else if (value < 0) {
	document.write('Wynik ujemny');
} else {
	document.write('Równy zero');
}