/**
 *          [=====] <--- in
 *      [=====]
 *      [=====]
 *      [=====]     
 *      [=====]
 *      [=====] 
 *          [=====] --> First In First Out
 */



class QueueList {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    process() {
        this.items.shift();
    }

    print() {
        console.log(this.items);
    }
}

let ql = new QueueList;
ql.add('book 1')
ql.add('book 2')
ql.add('book 3');

ql.process();

ql.print();