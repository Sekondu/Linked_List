class nodes{
    constructor(value)
    {
        this.value=value;
        this.next=null;
    }
}
class linked_list
{
    constructor()
    {
        this.head=null;
        this.size=0;
    }
    gethead()
    {
        return this.head.value;
    }
    tail()
    {
        let current=this.head;
        while(current.next)
        {
            current=current.next;
        }
        return current.value;
    }
    at(index)
    {
        let current=this.head;
        while(index>0)
        {
            current=current.next;
            index--;
        }
        return current.value;
    }
    contains(data)
    {
        let current=this.head;
        while(current.next)
        {
            if(current.value===data)
            {
                return true;
            }
            current=current.next;
        }
        return false;
    }
    pop()
    {
        let current=this.head;
        let trail=current;
        while(current.next)
        {
            trail=current;
            current=current.next;
        }
        trail.next=null;
    }
    getsize()
    {
        let current=this.head;
        let amount=1;
        while(current.next)
        {
            amount++;
            current=current.next;
        }
        return amount;
    }
    find(data)
    {
        let current=this.head;
        let amount=0;
        while(current.next)
        {
            amount++;
            if(current.value===data)
            {
                return amount; 
            }
            current=current.next;
        }
        return null;
    }
    append(data)
    {
        let Node=new nodes(data);
        if(!this.head)
        {
            this.head=Node;
        }
        else
        {
            let current=this.head;
            while(current.next)
            {
                current=current.next;
            }
            current.next=Node;
        }
    }
    prepend(data)
    {
        let Node=new nodes(data);
        if(!this.head)
        {
            this.head=Node;
        }
        else{
            Node.next=this.head;
            this.head=Node;
        }
    }
    toString()
    {
        let current=this.head;
        let outString="";
        while(current.next)
        {
            outString+=`(${current.value}) -> `;
            current=current.next;
        }
        outString+=`(${current.value}) -> null`;
        console.log(outString);
    }
}
let list=new linked_list();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log("element at index 1 is " + list.at(1));
console.log("index of 7 is " + list.find(7));
console.log("head is " + list.gethead());
list.pop();
console.log(`size after popping is ${list.getsize()}`);
list.toString();