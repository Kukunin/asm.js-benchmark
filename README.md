# asm.js-benchmark
Benchmark tests for ASM.js, based on the SHA-256 algorithm

## Test overview

Rehash SHA-256 initial hash (`6a09e667bb67ae853c6ef372a54ff53a510e527f9b05688c1f83d9ab5be0cd19`) 6,291,455 times.

Result hash should be `5eca0739c21c4bdfef5db791abb2b78aac2fa5396ed741372c14826928b260e9`.

Time is primary value of this benchmark. The lower is better.

## Vanilla JS test

[CryptoJS](http://code.google.com/p/crypto-js/) uses for SHA-256 implementation on Javascript. Test code is:

```javascript
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
```

### Node

Specially for Node.js, two files concat to one:

    cd vanilla-test
    cat cryptojs/sha256.js sha256-run.js > sha256.node.js
    for i in {1..5}; do sudo chrt -f 99 node sha256.node.js; done


## ASM.js test

[sha2.c](https://github.com/Kukunin/asm.js-benchmark/blob/master/asm.js-test/sha2.c) contains the SHA-256 implementation on the C language. It compiles with `GCC`, `Clang` and `Emscripten` compilers for comparison.

### GCC

    cd asm.js-test
    gcc sha2.c -O3 --std=c99 -o sha2.gcc
    for i in {1..5}; do sudo chrt -f 99 ./sha2.gcc; done

### Clang

    cd asm.js-test
    clang sha2.c -O3 -o sha2.clang
    for i in {1..5}; do sudo chrt -f 99 ./sha2.clang; done

### Emscripten

    cd asm.js-test
    emcc sha2.c -O3 --closure 1 --memory-init-file 0 -s ASM_JS=1 -o sha2.asm.js
    for i in {1..5}; do sudo chrt -f 99 node sha2.asm.js; done
