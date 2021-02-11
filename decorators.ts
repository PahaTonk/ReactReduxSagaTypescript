// function Log(constructor: Function) {
// console.log(constructor)
// }
// function Log2(target: any, propName: string | Symbol) {
// console.log(target, propName)
// }
// function Log3(target: any, propName: string | Symbol, descriptioe: PropertyDescriptor) {
//     console.log(target, propName, descriptioe)
// }

// @Log
// class Component {

//     @Log2
//     private name: string

//     @Log3
//     get componentName(): string {
//         return `name: ${this.name}`
//     }

//     constructor(name: string) {
//         this.name = name
//     }

//     @Log3
//     logName(): void {
//         console.log(`name: ${this.name}`)
//     }
// }

// interface IComponentDecorator {
//     selector: string;
//     template: string;
// }

// function Component(config: IComponentDecorator) {
//     return function
//         <T extends { new(...args: any[]): object }>
//         (Constructor: T) {
//         return class extends Constructor {
//             constructor(...args: any[]) {
//                 super(...args);

//                 const el = document.querySelector(config.selector)!;
//                 el.innerHTML = config.template;
//             }
//         }
//     }
// }

// function Bind(_: any, _2: any, descriptior: PropertyDescriptor): PropertyDescriptor {
//     const original = descriptior.value;

//     return {
//         configurable: true,
//         enumerable: false,
//         get() {
//             return original.bind(this)
//         }
//     }
// }

// @Component({
//     selector: '#card',
//     template: `
//         <div class="card>Card Component</div>
//     `
// })
// class CardComponent {

//     constructor(public name: string) { }

//     @Bind
//     logName(): void {
//         console.log(`name: ${this.name}`)
//     }
// }

// const card: CardComponent = new CardComponent('Card Component');

// const btn = document.querySelector('#button')!;

// btn.addEventListener('click', card.logName);
