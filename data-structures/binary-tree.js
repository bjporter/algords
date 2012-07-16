//Node class
function Node(values) {
    if(values === undefined) {
        this.right = null;
        this.left = null;
        this.data = null;
    } else {
        this.right = values.right;
        this.left = values.left;
        this.data = values.data;
    }
}

