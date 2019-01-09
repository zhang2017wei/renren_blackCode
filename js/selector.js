function Selector(onClick, onStop) {
    this.onClick = onClick;
    this.onStop = onStop;
    this.init();
}

Selector.prototype = {
    init: function() {
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.cancelEvent = this.cancelEvent.bind(this);
    },
    start: function() {
        this.bindEvents();
    },
    stop: function() {
        this.unbindEvents();
        if (this.mask) {
            this.mask.parentNode.removeChild(this.mask);
            this.mask = null;
        }
        if (this.onStop) {
            this.onStop();
        }
    },
    pause: function() {
        this.unbindEvents();
    },
    setMask: function(target) {
        this.target = target;
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
        let offset = target.getBoundingClientRect();
        mask.style.left = offset.left + 'px';
        mask.style.top = offset.top + 'px';
        mask.style.height = offset.height + 'px';
        mask.style.width = offset.width + 'px';
        mask.innerHTML = '<span>' + target.tagName + '</span>';
    },
    bindEvents: function() {
        document.addEventListener('mouseover', this.handleMouseOver);
        document.addEventListener('mouseout', this.handleMouseOut);
        document.addEventListener('mousedown', this.handleMouseDown, true);
        document.addEventListener('mouseup', this.cancelEvent, true);
        document.addEventListener('click', this.cancelEvent, true);
    },
    unbindEvents: function() {
        document.removeEventListener('mouseover', this.handleMouseOver);
        document.removeEventListener('mouseout', this.handleMouseOut);
        document.removeEventListener('mousedown', this.handleMouseDown, true);
        document.removeEventListener('mouseup', this.cancelEvent, true);
        document.removeEventListener('click', this.cancelEvent, true);
    },
    handleMouseOver(e) {
        this.setMask(e.target);
        e.stopPropagation();
    },
    handleMouseOut(e) {
        e.stopPropagation();
    },
    handleMouseDown(e) {
        if (this.onClick) {
            this.onClick({
                selector: this.getSelector(this.target),
                type: this.target.tagName.toLowerCase()
            });
            setTimeout( ()=>this.pause(),200)
        }
        this.cancelEvent(e);
    },
    handleKeyDown(e) {
    },
    cancelEvent(e) {
        e.preventDefault();
        e.stopPropagation();
    },
    getSelector(elem) {
        let arr = [];
        let parent = elem;
        while (parent && parent.tagName && parent.tagName.toLowerCase() !== 'body') {
            arr.push(_getSelector(parent));
            parent = parent.parentNode;
        }

        if (parent && parent.tagName) {
            arr.push(_getSelector(parent));
        }

        function _getSelector(e) {
            let str = e.tagName;
            let cls = [].slice.call(e.classList);
            if (cls && cls.length) {
                str += '.' + cls.join('.');
            }
            if (e.id) {
                str += '#' + e.id;
            }
            return str;
        }

        return arr.reverse().join('>');
    }
}

// var selector = new Selector((e) => console.log(e));