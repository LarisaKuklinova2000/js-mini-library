import qs from "../core";

qs.prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
}

qs.prototype.eq = function(i) {
    const swap = this[i],
          objLength = Object.keys(this).length;

    for (let i = 0; i < objLength; i++) {
        delete this[i]
    }

    this[0] = swap;
    this.length = 1;

    return this;
}