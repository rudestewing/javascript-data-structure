class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

/**
 * 
 *  [   / ] --> [   / ] --> [   / ] --> [   / ] --> 
 *   node        node        node        node
 * 
 */

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(item) {
        let newNode = new ListNode(item, this.head);
        this.head = newNode;
        this.size += 1; 
    }

    insertLast(item) {
        let newNode = new ListNode(item); // buat node baru
        let current;

        if(!this.head) { // if empty, make head
            this.head = newNode;
        } else { // if not, insert another one
            current = this.head; // set head yang ada menjadi current
            while(current.next) { // selama current next tidak kosong 
                current = current.next; // set current menjadi next yang ada didalem current tersebut
            }
            current.next = newNode; // apabila while sudah selesai, set next current menjadi new node
        }

        this.size += 1;
    }

    insertAtIndex(item, index) {
        if(index < 0 || index > this.size) {
            return;
        }

        if(index == 0) {
            let newNode = new ListNode(item, this.head);
            this.head = newNode;
        } else {
            let node = new ListNode(item);
            let current = this.head;
            let previous;

            let counter = 0;
            while(counter < index) {
                previous = current;
                current = current.next;
                counter++;
            }
            previous.next = node;
            node.next = current;
        }

        this.size++;
    }

    getAtIndex(index) {
        if(index > this.size) {
            return null;
        }

        let counter = 0;
        let current = this.head;

        while(counter < index) {
            current = current.next;
            counter++;
        }

        return current.data;
    }

    removeAtIndex(index) {
        if(index < 0 || index > this.size ) {
            return;
        }

        let current = this.head;
        let previous;
        
        previous = current;
        current = current.next;

        let counter = 0;
        while(counter < index) {
            previous = current;
            current = current.next;
            counter++;
        }

        previous.next = current.next;
        this.size -= 1;
    }

    clearList() {
        this.head = null;
        this.size = 0;
    }

    print() {
        let current = this.head;
        let items = [];

        while(current != null) {
            items.push(current.data);
            current = current.next;
        }

        console.log(items);
    }
}


let ll = new LinkedList();

ll.insertLast('kucing');
ll.insertLast('anjing');
ll.insertLast('jerapah');

ll.insertAtIndex('kepiting', 1);

ll.print();