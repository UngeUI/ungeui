class EventBus {
    constructor() {
        this.cache = {}
    }
    on(eventName, fn) {
        if (this.cache[eventName]) {
            this.cache[eventName].push(fn)
        } else {
            this.cache[eventName] = [fn]
        }
    }
    emit(eventName, data) {
        for (let fn of this.cache[eventName]) {
            fn(data)
        }
    }
    off(eventName, fn) {
        if (!this.cache[eventName]) {
            return
        }
        let targetIndex = this.cache[eventName].findIndex(item => item == fn)
        if (targetIndex != -1) {
            this.cache[eventName].splice(targetIndex, 1)
        }
    }
}

export default EventBus