let map = new Map();
map.set("name", "John");
map.set("age", "6");
map.set("dateBirth", "15.12.2002");
map.set("city", "London");
for (let prop of map.keys()){
console.log (`Ключ - ${prop}, Значение - ${map.get(prop)}`)
}