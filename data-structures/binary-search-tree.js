function Node(values) {
    if(values === undefined) {
        this.right = null;
        this.left = null;
        this.key = null;
        this.data = null;
    } else {
        this.right = values.right === undefined ? null : values.right;
        this.left = values.left === undefined ? null : values.left;
        this.key = values.key === undefined ? null : values.key;
        this.data = values.data === undefined ? null : values.data;
    }
}

function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.insert = function(key, node) {    
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
        return node;
    }
    
    if(key < node.key) {
        if(node.left === null) {
            node.left = new Node();
        }
        this.insert(key, node.left);
    }
    else if(key > node.key) {
        if(node.right === null) {
            node.right = new Node();
        }
        this.insert(key, node.right);
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

