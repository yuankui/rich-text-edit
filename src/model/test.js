class MyNumber {
    constructor(n) {
        this.n = n;
    }

    valueOf() {
        return this.n;
    }
}

class CallableNumber extends Function {
    constructor (x) {
        super();
        this.x = x;
        const proxy = new Proxy(this, {
            apply: function(target, thisArg, argumentsList) {
                return add(target.x, ...argumentsList);
            },
            valueOf: function (target) {
                return target.valueOf();
            }
        });

        proxy.bind(proxy);
        return proxy;
    }

    valueOf() {
        return this.x;
    }
}

const add = (...args) => {
    let sum = args.reduce((a, b) => a + b, 0);
    if (this.valueOf() instanceof Number) {
        sum =  (this.valueOf() + sum);
    }

    return new CallableNumber(new MyNumber(sum));
}

add.bind(null);

const a = [
    add(1, 2, 3),
    add(1, 2)(3),
    add(1)(2, 3),
]


console.log(a);