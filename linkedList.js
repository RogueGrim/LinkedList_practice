class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{

    constructor(){
        this.head = null
    }

    append(value){
        let newNode = new Node(value)

        if(!this.head){
            this.head = newNode
            return
        }

        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }

    prepend(value){
        let newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }

    printList(){
        let current = this.head
        let result = ''
        while(current){
            result+=current.value+'->'
            current=current.next
        }
        console.log(result+'null')
    }

    size(){
        let current = this.head
        let count = 0
        while(current){
            count++
            current = current.next
        }
        console.log(count)
    }

    Head(){
        let current = this.head
        console.log(current.value)
    }

    Tail(){
        let current = this.head
        while(current.next){
            current = current.next
        }
        console.log(current.value)
    }

    at(index){
        let current = this.head
        let count = 0
        while(count!= index){
            current = current.next
            count++
        }
        console.log(`The Value at ${index} is ${current.value}`)
    }

    pop(){
        let current = this.head
        while(current.next.next){
            current = current.next
        }
        current.next = null
    }

    contains(value){
        let current = this.head
        while(current){
            if(current.value == value){
                return console.log('true')
            }
            current = current.next
        }
        return console.log('false')
    }

    find(value){
        let current = this.head
        let index = 0
        while(current){
            if(current.value == value){
                return console.log(`The index of Value ${value} is ${index}`)
            }
            current =current.next
            index++
        }
        return console.log('Value Does not Exist')
    }

    insertAt(value,index){
        let current =  this.head
        let currIndex = 0
        let newNode =  new Node(value)

        if(index == 0){
            newNode.next = this.head
            this.head = newNode
            return
        }

        while(current && currIndex < index-1){
            currIndex++
            current = current.next
        }

        if(!current){
            console.log('Out of Bounds')
            return
        }
        newNode.next = current.next
        current.next = newNode

    }

    removeAt(index){
        let current = this.head
        let currIndex = 0

        if(index == 0){
            this.head = this.head.next
            return
        }

        while(currIndex != index){
            current = current.next
            currIndex++
        }

        if(!current.next){
            console.log('Out of Bounds')
            return
        }
        
        current.next = current.next.next

        
    }

    
}

let list = new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.prepend(5)
list.removeAt(2)
list.printList()