function Stack(array){
    this.array = [];
    if(array) this.array = array;
 }

Stack.prototype.getBuffer = function(){
    return this.array.slice();
 }

//check if stack is empty
Stack.prototype.isEmpty = function(){
    return this.array.length == 0;
}

//Adding to the stack
Stack.prototype.push = function(value){
    return this.array.push(value);
}

//Removing from the  stack
Stack.prototype.pop = function(){
    return this.array.pop();
}

//getting the last added value from the stack
Stack.prototype.peek = function(){
    return this.array[this.array.length-1];
 }

//check matching parantheses if they are valid
function isParanthesisValid(validationString){
    var stack = new Stack()

    for (let i = 0; i < validationString.length; i++) {
        let currentPosition = validationString.charAt(i);
        if (currentPosition == "(" ) {
            stack.push(currentPosition)
        }else if (currentPosition == ")" ) {
            if (stack.isEmpty()) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.isEmpty();
}


//descending a sorted stack
function sortableStack(size){
    this.size = size;
    this.mainStack = new Stack();
    this.sortedStack = new Stack();

//lets initailize the stack with some random int values
    for (let i = 0; i < this.size; i++) {
        this.mainStack.push(Math.floor(Math.random() * 11));
    }
}

sortableStack.prototype.sortStackDescending = function(){
    while (! this.mainStack.isEmpty()) {
        let temp = this.mainStack.pop();
        while (! this.sortedStack.isEmpty() && this.sortedStack.peek() <= temp) {
            this.mainStack.push(this.sortedStack.pop());
        }
        this.sortedStack.push(temp); // push the sorted value into the sorted stack array
    }
}
