let x = "12";
let type = typeof(x);
switch (type) {
    case "number":
        console.log('X - число');
        break;
    case "string":
        console.log('X - строка');
        break;
    case "boolean":
        console.log('Х - булево значение');
        break;
 
    default:
        console.log('Тип Х не определён');
}