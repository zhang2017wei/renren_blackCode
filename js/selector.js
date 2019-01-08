function Selector() {
    this.init();
}

Selector.prototype = {
    init: function() {
        this.bindEvents();
    },
    setMask: function(target) {
        var mask = this.mask;        
        if (!mask) {
            mask = this.mask = document.createElement('div');
            mask.className = 'plugin-mask';
            mask.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                height: 0;
                width: 0;
                z-index: 9999;
                pointer-events: none;
                background-color: rgba(0, 255, 255, 0.5);
            `;
            document.body.appendChild(mask);
        }
        let offset = $(target).offset();
        mask.style.left = offset.left + 'px';
        mask.style.top = offset.top + 'px';
        mask.style.height = $(target).outerHeight() + 'px';
        mask.style.width = $(target).outerWidth() + 'px';
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
        let target = e.target;
        if (target.getElementsByClassName('plugin-mask').length === 0) {
            this.setMask(e.target);
        }
        e.stopPropagation();
    },
    handleMouseOut(e) {
        e.stopPropagation();
    }
}

var selector = new Selector();