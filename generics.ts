// const cars: string[] = ['Ford'];
// const cars2: Array<string> = ['Ford'];

// const promise: Promise<string> = new Promise((resolve):void => {
//     setTimeout(() => resolve('Promise resolve'), 2000);
// });

// promise.then(data => {
//     console.log(data);
// });

// function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
//     return Object.assign({}, a, b);
// }

// const merged = mergeObjects({ name: 'Pavel' }, { age: 25 });
// const merged1 = mergeObjects({ name1: 'Pavel' }, { age1: 25 });

// const merged2 = mergeObjects('aaa', 'bbb');
// console.log(merged2);

// interface ILength {
//     length: number
// }

// function withCount<T extends ILength>(value: T): { value: T, count: string } {
//     return {
//         value,
//         count: `Тута ${value.length} символов`,
//     }
// }

// console.log(withCount('Аллоха'));
// console.log(withCount(['Аллоха']));
// const obj = {
//     length:2
// }
// console.log(withCount(obj));

// type valueOf<T> = T[keyof T];

// function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R): valueOf<T> {
//     return obj[key];
// }

// const person = { name: 'Pavel', age: 25, job: 'Frontend' };

// console.log(getObjectValue(person, 'age'));
// console.log(getObjectValue(person, 'job'));

// class Collection<T extends string | number | boolean> {
//     constructor(private _items: T[] = []) { }

//     add(item: T): void {
//         this._items.push(item);
//     }

//     remove(item: T): void {
//         this._items = this._items.filter(i => i != item);
//     }

//     get items(): T[] {
//         return this._items;
//     }
// }

// const strings = new Collection<string>(['1', '2']);
// strings.add('name');
// strings.remove('2');

// const obj = new Collection([{a: 2}, {b: 2}]);
// obj.add({c: 3});
// obj.remove({b: 2});

// console.log(obj);

// interface Car {
//     model: string;
//     year: number
// }

// function createValidateCar(model: string, year: number): Car {
//     const car: Partial<Car> = {};

//     if (model.length > 4) {
//         car.model = model;
//     }

//     if (year > 2000) {
//         car.year = year;
//     }

//     return car as Car;
// }

// console.log(createValidateCar('asdss', 2002))

// const cars : Readonly<string[]> = ['Ford', 'Car'];

// cars.shift()

// const car: Readonly<Car> = {
//     "model": "asdss",
//     "year": 2002
// }

// car.model = '123';
