function idenity<T>(valor: T): T {
    return valor;
}

console.log(idenity<string>("Mi nombre es Kira Yoshikage, tengo"));

console.log(idenity<Number>(33));

console.log(idenity<string>("años y mi sueño es vivir tranquilo"));