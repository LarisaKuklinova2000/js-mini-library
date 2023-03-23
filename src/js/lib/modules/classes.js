import qs from "../core";

qs.prototype.addClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {

        if (!this[i].classList) {
            continue
        }

        this[i].classList.add(...classNames);
    }

    return this
}

qs.prototype.removeClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {

        if (!this[i].classList) {
            continue
        }

        this[i].classList.remove(...classNames);
    }

    return this
}

qs.prototype.toggleClass = function(className) {
    for (let i = 0; i < this.length; i++) {

        if (!this[i].classList) {
            continue
        }

        this[i].classList.toggle(className);
    }

    return this
}