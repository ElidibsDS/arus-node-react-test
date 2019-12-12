import React from 'react'

class Node {
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    };
};

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    addToHead(data) {
        const newNode = new Node(data, this.head, null);

        if (this.head) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        };
        this.size++;
    };

    addToTail(data) {
        const newNode = new Node(data, null, this.tail);

        if (this.tail) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.tail = newNode;
            this.head = newNode;
        };
        this.size++;
    };

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return null
        };

        const newNode = new Node(data, null, null);
        let current = this.head;
        let previous;

        if (index === 0) {
            newNode.next = current;
            current.prev = newNode;
            this.head = newNode;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };

            newNode.next = current;
            newNode.prev = previous;
            current.prev = newNode;
            previous.next = newNode;
        };
        this.size++;
    };

    removeFromHead() {
        if (!this.head) {
            return null
        };

        const valueToReturn = this.head.data;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        };
        this.size--;
        return valueToReturn;
    }

    removeFromTail() {
        if (!this.tail) {
            return null
        };

        const valueToReturn = this.tail.data;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        };
        this.size--;
        return valueToReturn;
    };

    removeData(data) {
        let current = this.head;
        let previous = null;

        while (current !== null) {
            if (current.data === data) {
                if (!previous) {
                    this.removeFromHead();
                } else if (!current.next) {
                    this.removeFromTail();
                } else {
                    previous.next = current.next;
                    current.next.prev = previous;
                };
                this.size--;
                return current.data;
            };
            previous = current;
            current = current.next;
        };
        return null;
    }

    print() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' <-> ';
            current = current.next;
        };

        return result += ' Null ';
    };

    reversePrint() {
        let current = this.tail;
        let result = '';
        while (current) {
            result += current.data + ' <-> ';
            current = current.next;
        };

        return result += ' Null ';
    };

    getSize() {
        return this.size;
    };

    isEmpty() {
        return this.size === 0;
    };
}

export default class DoubleLinkedListComp extends React.Component {
    constructor(props) {
        super(props);
        //Init List
        var doubleLinkedList = new DoubleLinkedList();
        doubleLinkedList.addToHead('Mauricio');
        doubleLinkedList.addToHead('Andres');
        doubleLinkedList.addToHead('Michela');
        doubleLinkedList.addToHead('Juan');
        doubleLinkedList.addToHead('Sergio');

        this.state = { list: doubleLinkedList, value: '' };

        this.Insert = this.Insert.bind(this);
        this.OnChangeHandle = this.OnChangeHandle.bind(this);
    }

    Insert() {
        this.state.list.insertAt(this.state.value, 2);
        this.setState({ ...this.state, list: this.state.list })
    }

    OnChangeHandle(event) {
        this.setState({
            ...this.state,
            value: event.target.value
        })
    }

    render() {
        return (
            <section>
                <p>Lista de nombres doblemente enlazada, la persona se colará en la tercera posicion</p>
                <input type="text" onChange={this.OnChangeHandle} />
                <button onClick={this.Insert}>Insertar</button>
                <p>{this.state.list.print()}</p>
            </section>
        )
    }
}