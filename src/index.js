module.exports = function reverse (n) {
    let num= Math.abs(n);
    num = String(num);
	return num.split("").reverse().join("");
}
