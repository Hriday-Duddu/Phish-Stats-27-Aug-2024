/**
 *  浮動 (預設右上 top:150)
 *  @example   $("#id").Float();
 * @param obj : {topSide:150,bottomSide:'auto',floatRight:0|1,side:5,close:selector}
 */
$.fn.Float = function (obj) {
    var el = this; // 当前元素

    var lock = {
        topSide: 150,
        bottomSide: 'auto',
        floatRight: 1,
        side: 5, // 左右共用
        close: null, // 关闭浮动图,清空监听定时器
        // timer: 0, // 定时器ID

        init: function () {
            var locker = this; // 当前Float实例
            var ua = navigator.userAgent;
            el.css({'position': 'absolute',}); // 初始化样式

            if (ua.toLowerCase().indexOf('360se') > -1) {
                this.isBlock = true;
            } else if (ua.toLowerCase().indexOf("theworld") > 0) {
                this.isBlock = true;
            } else if (ua.toLowerCase().indexOf("msie 7") > 0) {
                this.side = 0;
            }
            this.floatRight === 1 ? el.css('right', this.side) : el.css('left', this.side);
            this.timer = setInterval(function () {
                locker.lock.call(locker);
            }, 20);

            if (!!this.close) {
                this.closeFloat();
            }
        },
        lockTop: function (el, position, page, scroll, icon) {
            var now = parseInt(el.css('top'));
            var scrollEnd = scroll.top + icon.topSide;  // 剩余总距离
            var side = this._computed(scrollEnd, now);
            if (side && (side + position.height) <= page.height) {
                el.css('top', side);
            }
        },
        lockLeft: function (el, position, page, scroll, icon) {
            var now = parseInt(el.css('left'));
            var scrollEnd = scroll.left + icon.side;
            var side = this._computed(scrollEnd, now);
            if (side && (side + position.width) <= page.width) {
                el.css('left', side);
            }
        },
        lockRight: function (el, position, page, scroll, icon, win) {
            var now = parseInt(el.css('right'));
            var scrollEnd = page.width - (scroll.left + win.width) + icon.side;
            scrollEnd -= this.pageOffset().width;
            var side = this._computed(scrollEnd, now);
            if (side && (side + position.width) <= page.width) {
                el.css('right', side);
            }
        },
        lockBottom: function (el, position, page, scroll, icon, win) {
            var now = parseInt(el.css('bottom'));
            var scrollEnd = page.height - (scroll.top + win.height) + icon.bottomSide;
            scrollEnd -= this.pageOffset().height;
            var side = this._computed(scrollEnd, now);
            if (side && (side + position.height) <= page.height) {
                el.css('bottom', side);
            }
        },
        _computed: function (scrollEnd, now, icon) {
            if (scrollEnd === now) return false; // 浮动图位移结束
            var offset = (scrollEnd - now) / 20; // 每次(20ms)移动的像素;
            if (this.isBlock) offset = (scrollEnd - now); // 稀奇古怪的浏览器只好舍弃浮动效果
            offset = offset < 0 ? Math.floor(offset) : Math.ceil(offset); // 处理x/20导致的误差; 右和下边缘仍然会有1px的误差
            return now + offset;
        },
        lock: function () {
            var position = this.currentPosition(el); // 当前元素: top, left, width, height;
            var scroll = this.scrollPosition(); // 滚动距离: top, left;
            var page = this.pageDimension(); // 页面大小: width, height;
            var win = this.windowDimension(true); // 视口大小: width, height;
            var icon = this;
            if (this.bottomSide !== 'auto') {
                this.lockBottom(el, position, page, scroll, icon, win);
            } else {
                this.lockTop(el, position, page, scroll, icon);
            }
            if (this.floatRight === 1) {
                this.lockRight(el, position, page, scroll, icon, win);
            } else {
                this.lockLeft(el, position, page, scroll, icon);
            }
            if (this.isBlock) {
                if (this.lastTop !== parseInt(el.css('top'))) {
                    el.css('visibility', "hidden");
                    this.lastTop = parseInt(el.css('top'));
                } else {
                    el.css('visibility', "visible");
                }
            }
        },
        // 当前元素: top, left, width, height;
        currentPosition: function (el) {
            return {
                top: el.offset().top,
                left: el.offset().left,
                width: el.outerWidth(),
                height: el.outerHeight()
            };
        },
        // 视口大小: width, height; @ isContent 真实内容区的宽高:不包括滚动条
        windowDimension: function (isContent) {
            if (!isContent) {
                if ((typeof innerWidth !== "undefined" && innerWidth !== 0) && (typeof innerHeight !== "undefined" && innerHeight !== 0)) {
                    return {
                        width: innerWidth,
                        height: innerHeight
                    };
                }
            }
            return { // 真实内容区的宽高:不包括滚动条
                width: Math.min(document.body.clientWidth, document.documentElement.clientWidth),
                height: Math.min(document.body.clientHeight, document.documentElement.clientHeight)
            };
        },
        // 滚动距离: top, left;
        scrollPosition: function () {
            return {
                top: Math.max(document.body.scrollTop, document.documentElement.scrollTop),
                left: Math.max(document.body.scrollLeft, document.documentElement.scrollLeft)
            };
        },
        // 页面大小: width, height;
        pageDimension: function () {
            return {
                width: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                height: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            };
        },
        // [页面可滚动区域] 与 [html,body最大宽高] 的差值; 正常应该为0,否则说明页面的构建有问题;
        pageOffset: function () {
            return {
                width: this.pageDimension().width - Math.max(document.body.offsetWidth, document.documentElement.offsetWidth),
                height: this.pageDimension().height - Math.max(document.body.offsetHeight, document.documentElement.offsetHeight),
            }
        },
        // 隐藏浮动图-清除定时器
        closeFloat: function () {
            var locker = this;
            el.find(this.close).on('click', function () {
                clearInterval(locker.timer);
            })
        }
    };
    if (obj) $.extend(lock, obj);
    lock.init();
};