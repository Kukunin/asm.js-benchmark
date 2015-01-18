var sha256 = CryptoJS.algo.SHA256.create();
sha256.reset();
var hash = sha256._hash;

var time1 = Date.now();
for(var i = 0; i < 0x5fffff; i++) {
	sha256.reset();
	var hash = sha256.finalize(hash);
}
var diff = Date.now() - time1;
console.log("Diff: ", diff);
console.log(hash.toString());
