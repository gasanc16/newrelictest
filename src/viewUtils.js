let viewUtils = {
    getElementById: function(selector) {
        return document.getElementById(selector);
    },

    getElementsByClass: function(selector) {
        return document.getElementsByClassName(selector);
    },

    createElement: function(element) {
        return document.createElement(element);
    },

    addClassToElement: function(element, className) {
        element.classList.add(className);
    },

    removeClassFromElement: function(element, className) {
        element.classList.remove(className);
    }
};

module.exports = viewUtils;