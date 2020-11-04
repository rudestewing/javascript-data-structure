/**
 *          [=====] --> Last In First Out
 *      [=====]
 *      [=====]
 *      [=====]     
 *      [=====]
 *      [=====] 
 */


class StackList {
    constructor() {
        this.items = [];
    }

    peek() {
        let item = this.items[this.items.length -1];
        console.log(item);
        return item;
    }

    add(item) {
        this.items.push(item);
    }

    pop() {
       this.items.pop(); 
    }

    print() {
        console.log(this.items);
    }
}

let sl = new StackList();

sl.add('kucing');
sl.add('anjing');

sl.peek();
sl.pop();

sl.print();