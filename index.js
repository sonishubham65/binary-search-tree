/**
 * @description: Function for creating a new Node for every element.
 * @param: data
 */
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(data) {
        return new Promise(async (resolve, reject) => {
            let newNode = new Node(data);
            if (this.root == null) {
                this.root = newNode;
            } else {
                this.insertNode(this.root, newNode);
            }
            resolve();
        })
    }
    insertNode(node, newNode) {
        return new Promise(async (resolve, reject) => {
            if (node.data > newNode.data) {
                if (node.left == null) {
                    node.left = newNode;
                } else {
                    await this.insertNode(node.left, newNode);
                }
            } else {
                if (node.right == null) {
                    node.right = newNode;
                } else {
                    await this.insertNode(node.right, newNode);
                }
            }
            resolve();
        })
    }
}
(async () => {
    let bst = new BST();
    await bst.insert(50);
    await bst.insert(20);
    await bst.insert(10);
    await bst.insert(40);
    await bst.insert(30);
    console.log(JSON.stringify(bst));
})();
