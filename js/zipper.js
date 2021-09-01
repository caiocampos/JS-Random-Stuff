export class Zipper {
    constructor(value, up, left, right) {
        this.val = value || 0;
        this.upNode = up || null;
        this.leftNode = left || null;
        this.rightNode = right || null;
    }

    static fromTree(tree, up) {
        if (!tree) {
            return null;
        }
        return new Zipper(tree.value, up)
            .setLeft(tree.left)
            .setRight(tree.right);
    }

    toTree() {
        return !this.upNode ? this.asObject() : this.upNode.toTree();
    }

    asObject() {
        const value = this.val;
        const left = !this.leftNode ? null : this.leftNode.asObject();
        const right = !this.rightNode ? null : this.rightNode.asObject();
        return {
            value,
            left,
            right
        };
    }

    left() {
        return this.leftNode;
    }

    right() {
        return this.rightNode;
    }

    up() {
        return this.upNode;
    }

    value() {
        return this.val;
    }

    setLeft(node) {
        this.leftNode = Zipper.fromTree(node, this) || null;
        return this;
    }

    setRight(node) {
        this.rightNode = Zipper.fromTree(node, this) || null;
        return this;
    }

    setValue(value) {
        this.val = value;
        return this;
    }
}
