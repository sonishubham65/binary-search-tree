/**
 * @description: Class for creating a new Node for every element.
 * @param: data
 */
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 * @description: Class for creating a new BST.
 */
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
/**
 * @description: Self invoking function.
 */
(async () => {
    try {
        let bst = new BST();
        await bst.insert(8);
        await bst.insert(3);
        await bst.insert(10);
        await bst.insert(1);
        await bst.insert(6);
        await bst.insert(4);
        await bst.insert(7);
        await bst.insert(14);
        await bst.insert(13);
        console.log(JSON.stringify(bst));
    } catch (e) {
        console.log(e);
    }
})();