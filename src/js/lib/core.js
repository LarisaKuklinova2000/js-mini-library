const qs = function(selector) {
    return new qs.prototype.init(selector);
};

qs.prototype.init = function(selector) {
    if (!selector) {
        return this; // {} 
    }

    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector))
    this.length = document.querySelectorAll(selector).length;
    return this;
}

qs.prototype.init.prototype = qs.prototype;
window.qs = qs;

export default qs;

