export default function getAllChildren(children) {
    return children.flatMap(item => {
        if (Array.isArray(item.children)) {
            return item.children
        } else {
            return item
        }
    })
}