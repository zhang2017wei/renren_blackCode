function Selector() {
    this.init();
}

Selector.prototype = {
    init: function() {
        this.bindEvents();
    },
    addMask: function(target) {
        var mask = this.mask = document.createElement('div');
        mask.className = 'plugin-mask';
        mask.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            z-index: 9999;
            pointer-events: none;
            background-color: rgba(0, 255, 255, 0.5);
        `;
        target.appendChild(mask);
        if (window.getComputedStyle(target).position === 'static') {
            target.style.position = 'relative';
        }
    },
    removeMask(target) {
        var mask = target.getElementsByClassName('plugin-mask')[0];
        if (mask) {
            mask.parentNode.removeChild(mask);
        }
    },
    removeAllMask() {
        var masks = document.getElementsByClassName('plugin-mask');
        for (let i = 0; i < masks.length; i++) {
            masks[i].parentNode.removeChild(masks[i]);
        }
    },
    bindEvents: function() {
        document.body.addEventListener('mouseover', (e) => this.handleMouseOver(e));
        document.body.addEventListener('mouseout', (e) => this.handleMouseOut(e));
    },
    handleMouseOver(e) {
        console.log('mouse enter');
        let target = e.target;
        if (target.getElementsByClassName('plugin-mask').length === 0) {
            this.removeAllMask();
            this.addMask(e.target);
        }
        e.stopPropagation();
    },
    handleMouseOut(e) {
        this.removeMask(e.target);
        e.stopPropagation();
    }
}

var selector = new Selector();