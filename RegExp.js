function panggilRegexp() {
 let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";

 let a = (str.match(/c/g));
 let b = (str.match(/C/g));
 let result1 = a.concat(b);
 console.log(result1);

let c = (str.match(/k/g));
let d = (str.match(/K/g));
let result2 = c.concat(d);
console.log(result2);

let e = (str.match(/l/g));
let f = (str.match(/L/g));
let result3 = e.concat(f);
console.log(result3);
}

panggilRegexp()
