console.log(typeof 100);
// output: "number" - числа в JavaScript, которые могут быть целыми или дробными

console.log('Min_value_number:', Number.MIN_VALUE);
console.log('Max_value_number:', Number.MAX_VALUE);

console.log('Min_safe_integer:', Number.MIN_SAFE_INTEGER); 
console.log('Max_safe_integer:', Number.MAX_SAFE_INTEGER); 

//   Для получения минимального и максимального значения числового типа переменных
//   в пределах +/- Infinity, используем константы Number.MAX_VALUE и Number.MIN_VALUE. 
//   А используя константы Number.MAX_SAFE_INTEGER и Number.MIN_SAFE_INTEGER можно узнать 
//   безопасный диапазон числовых переменных Number. За пределами этого диапазона операции 
//   с целыми числами будут небезопасными, и возвращать приближённые значения (т.к. специального типа для целых чисел в js нет).

console.log(typeof 23n);
// output: "bigInt" - очень большие числа. Для определения числа как значения типа BigInt в конце числа добавляется суффикс n

console.log(typeof 'Hello, my friend');
// output: "string" - строки: для их определения применяются кавычки

console.log(typeof Symbol());
// output: "sumbol" - представляет уникальное значение, которое часто применяется для обращения к свойствам сложных объектов

console.log(typeof undeclaredVariable);
// output: "undefined" - указывает, что значение не определено или не установлено.

console.log(typeof null);
// output: "object" - так определено с рождения JavaScript

console.log(typeof {});
// output: "object" - объявляются сложные объекты при помощи фигурных скобок {...}

console.log(typeof Math.sin);
// output: "function" - тип данных : функция

console.log(typeof true);
// output: "boolean" - булевый тип представляет логическую сущность и имеет два значения: true (истина) и false (ложь)
