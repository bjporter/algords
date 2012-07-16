/*

Binary Search Tree (recursive, no duplicates)

*/


function Node(values) {
    if(values === undefined) {
        this.right = null;
        this.left = null;
        this.key = null;
        this.data = null;
        this.parent = null;
    } else {
        this.right = values.right === undefined ? null : values.right;
        this.left = values.left === undefined ? null : values.left;
        this.key = values.key === undefined ? null : values.key;
        this.data = values.data === undefined ? null : values.data;
        this.parent = values.parent === undefined ? null : values.parent;
    }
}

function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.insert = function(key, node, parent) {    
    //Tree is empty, insert the first node
    if(this.root === null) {
        this.root = new Node({ key : key });
        return this.root;
    } 
    
    //node not given, so assume node is root
    if(this.root !== null && node === undefined)  {
        node = this.root;   
    }    
    
    if(node.key === null) {
        node.key = key;
        node.parent = parent;
        return node;
    }
    
    if(key < node.key) {
        if(node.left === null) {
            node.left = new Node();
        }
        this.insert(key, node.left, node);
    }
    else if(key > node.key) {
        if(node.right === null) {
            node.right = new Node();
        }
        this.insert(key, node.right, node);
    }
};

BinarySearchTree.prototype.search = function(key, node) {
    if(this.root === null)
        return null;
    
    if(node === undefined)
        node = this.root;
        
    if(node.key === key)
        return node;
        
    if(node.left !== null)
        return this.search(key, node.left);
    
    if(node.right !== null)
        return this.search(key, node.right);

    else return null;
};

BinarySearchTree.prototype.size = function(node) {
    if(this.root === null)
        return 0;
    
    if(this.root !== null && node === undefined)
        node = this.root;   
    
    if(node === null) 
        return 0;
    
    return this.size(node.right) + this.size(node.left) + 1;
};

BinarySearchTree.prototype.test = function(node) {
    node.left =null;
    node.right=null;
    node = new Node();
    node =null;
    
    return node;
};

BinarySearchTree.prototype.remove = function(node) {
    //CASE: There are no nodes
    if(this.root === null)
        return null;    
    
    //CASE: There are no children
    if(node.right === null && node.left === null) {
        console.log('remove value');
        
        if(node.parent.left === node)
            node.parent.left = null;
            
        if(node.parent.right === node)
            node.parent.right = null;
    } 
    //CASE: There is one child
    else if(node.right === null && node.left !== null) {
        node.key = node.left.key;
        node.data = node.left.data;
        node.left = null;
    }
    else if(node.left === null && node.right !== null) {
        node.key = node.right.key;
        node.data = node.right.data;
        node.right = null;    
    }
    else {
        //CASE: There are 2 children   
        var min = this.findMin(node.right);
        
        node.key = min.key;
        node.data = min.data;

        this.remove(min);
    }
    
    return node;
};

BinarySearchTree.prototype.findMin = function(node) {
    if(node.left === null)
        return node;
    
    return this.findMin(node.left);
};




