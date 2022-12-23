export function sumTotal(array: any[], key:string) {
    var total = 0;
    array.map((i) => {
        if (i[key]) {
            total += Number(i[key])
        }
    });
    return total;
}