class EventEmitter {
  listeners = {}; // key-value pair

  addListener(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
  }

  on(eventName, fn) {
    this.addListener(eventName, fn);
  }

  removeListener(eventName, fn) {
    const eventListenersList = this.listeners[eventName];
    if (!eventListenersList) return this;

    for (let i = 0; i <= eventListenersList.length; i++) {
      if (eventListenersList[i]?.toString() === fn?.toString()) {
        eventListenersList.splice(i, 1);
        break;
      }
    }
    return this;
  }

  off(eventName, fn) {
    this.removeListener(eventName, fn);
  }

  once(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    const callOnce = (...args) => {
      fn(...args);
      this.off(eventName, callOnce);
    };

    this.listeners[eventName].push(callOnce);
  }

  emit(eventName, ...args) {
    const eventsList = this.listeners[eventName] || [];

    eventsList.forEach((event) => {
      event(...args);
    });

    return true;
  }

  listenerCount(eventName) {
    const events = this.listeners[eventName] || [];
    return events.length;
  }

  rawListeners(eventName) {
    return this.listeners[eventName];
  }
}

module.exports = EventEmitter;
