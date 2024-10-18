function iden<t>(arg: t):t{
    return arg;
}
const num = iden<number>(200);
const str = iden<string>("Uday");
console.log(num);
console.log(str);