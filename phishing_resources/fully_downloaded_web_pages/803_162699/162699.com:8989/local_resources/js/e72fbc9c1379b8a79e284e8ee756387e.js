/*!
 * Lazy Load - JavaScript plugin for lazy loading images
 *
 * Copyright (c) 2007-2019 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   https://appelsiini.net/projects/lazyload
 *
 * Version: 2.0.0-rc.2
 *
 */
// var timestamp = Math.floor(Date.now() / 1000)
// // 宣告重取ws加密的时戳 temp_timestamp
// var temp_timestamp = ''
// var newTimestamp = ''
// if(sessionStorage.getItem("cdn_timestamp")) {
//     // 1.取得刷新的时戳 2.判断当前时戳是否大于刷新时戳
//     temp_timestamp = sessionStorage.getItem("cdn_timestamp")
//     if(timestamp > temp_timestamp) {
//         sessionStorage.setItem("cdn_timestamp", (parseInt(timestamp) + 170));
//         newTimestamp = timestamp //
//     } else {
//         newTimestamp = temp_timestamp - 170 // 使用刷新前的当前时戳
//     }
// } else {
//     // 设置会重取ws加密的时戳
//     sessionStorage.setItem("cdn_timestamp", (parseInt(timestamp) + 170));
//     temp_timestamp = sessionStorage.getItem("cdn_timestamp")
// }

(function (root, factory) {
    if (typeof exports === "object") {
        module.exports = factory(root);
    } else if (typeof define === "function" && define.amd) {
        define([], factory);
    } else {
        root.LazyLoad = factory(root);
    }
}) (typeof global !== "undefined" ? global : this.window || this.global, function (root) {

    "use strict";

    if (typeof define === "function" && define.amd){
        root = window;
    }

    const defaults = {
        // src: "data-src",

        src: "lazy-src",
        srcset: "lazy-style",
        selector: ".lazyload",
        root: null,
        rootMargin: "0px",
        threshold: 0
    };

    /**
    * Merge two or more objects. Returns a new object.
    * @private
    * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
    * @param {Object}   objects  The objects to merge together
    * @returns {Object}          Merged values of defaults and options
    */
    const extend = function ()  {

        let extended = {};
        let deep = false;
        let i = 0;
        let length = arguments.length;

        /* Check if a deep merge */
        if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
            deep = arguments[0];
            i++;
        }

        /* Merge the object into the extended object */
        let merge = function (obj) {
            for (let prop in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    /* If deep merge and property is an object, merge properties */
                    if (deep && Object.prototype.toString.call(obj[prop]) === "[object Object]") {
                        extended[prop] = extend(true, extended[prop], obj[prop]);
                    } else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };


        /* Loop through each object and conduct a merge */
        for (; i < length; i++) {
            let obj = arguments[i];
            merge(obj);
        }
        return extended;
    };

    function LazyLoad(images, options) {
        this.settings = extend(defaults, options || {});
        // this.images = images || document.querySelectorAll(this.settings.selector);
        this.images = document.querySelectorAll(this.settings.selector);
        this.observer = null;
        this.init();
    }

    LazyLoad.prototype = {
        init: function() {
            /* Without observers load everything and bail out early. */
            if (!root.IntersectionObserver) {
                this.loadImages();
                return;
            }

            let self = this;
            let observerConfig = {
                root: this.settings.root,
                rootMargin: this.settings.rootMargin,
                threshold: [this.settings.threshold]
            };

            this.observer = new IntersectionObserver(function(entries) {
                Array.prototype.forEach.call(entries, function (entry) {
                    if (entry.isIntersecting) {
                        self.observer.unobserve(entry.target);
                        // let src = entry.target.getAttribute(self.settings.src);
                        // let srcset = entry.target.getAttribute(self.settings.srcset);
                        let src = entry.target.getAttribute(self.settings.src);
                        let srcset = entry.target.getAttribute(self.settings.srcset);
                        var timestamp = Math.floor(Date.now() / 1000)

                        // 取的副檔名
                        function getFileExtension(filename) {
                            var filename = filename.replace('.base64', '')
                            return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;
                        }

                        if (src) {
                            if ($(entry.target).attr('lazy-src')) {
                                if(nonUseBase64) {
                                    entry.target.src = src;
                                } else {
                                    var ipos
                                    if(useBase64){
                                        var fileExtension = getFileExtension(src)
                                        $.ajax({
                                            type: "GET",
                                            url: src.indexOf('base64') === -1 ? src + '.base64' : src,
                                            cache: true,
                                            success: function(data) {
                                                if(data.slice(0, 5) === 'abcde') {
                                                    var imgdata = data.substr(5);
                                                    var base64Img = "data:image/" + fileExtension + ";base64,"+imgdata.replace(/\s+/g,"")
                                                    entry.target.src = base64Img;
                                                } else {
                                                    entry.target.src = src.replace(cdnUrl,'');
                                                }
                                                entry.target.style.width = ''
                                            },
                                            error:function (){
                                                entry.target.src = src.replace(cdnUrl,'');
                                            }
                                        })
                                    }else {
                                        if (src && src.indexOf('/ftl') > -1) {
                                            ipos = src.indexOf('/ftl')
                                        }
                                        if (src && src.indexOf('/fserver') > -1) {
                                            ipos = src.indexOf('/fserver')
                                        }
                                        var newUrl = 'gf0908' + src.substring(ipos) + timestamp
                                        var md5URL = md5(newUrl)
                                        entry.target.src = src + '?wsSecret=' + md5URL + '&wsTime=' + timestamp + '';
                                    }
                                }
                            } else {
                                entry.target.src = src;
                            }
                        }

                        if (srcset) {
                            if ($(entry.target).attr('lazy-style')) {
                                if(nonUseBase64) {
                                    entry.target.style.backgroundImage = "url(" + srcset + ")";
                                } else {
                                    var ipos
                                    if(useBase64){
                                        $.ajax({
                                            type: "GET",
                                            url: srcset.indexOf('base64') === -1 ? srcset + '.base64' : srcset,
                                            cache: true,
                                            success: function(data) {
                                                if(data.slice(0, 5) === 'abcde') {
                                                    var imgdata = data.substr(5);
                                                    var base64Img = "data:image/" + fileExtension + ";base64,"+imgdata.replace(/\s+/g,"")
                                                    entry.target.style.backgroundImage = "url(" + base64Img + ")";
                                                }else {
                                                    entry.target.style.backgroundImage = "url(" + srcset.replace(cdnUrl,'') + ")";
                                                }
                                            },
                                            error:function (){
                                                entry.target.style.backgroundImage = "url(" + srcset.replace(cdnUrl,'') + ")";
                                            }
                                        })
                                    }else {
                                        if (srcset && srcset.indexOf('/ftl') > -1) {
                                            ipos = srcset.indexOf('/ftl')
                                        }
                                        if (srcset && srcset.indexOf('/fserver') > -1) {
                                            ipos = srcset.indexOf('/fserver')
                                        }
                                        var newUrl = 'gf0908' + srcset.substring(ipos) + timestamp
                                        var md5URL = md5(newUrl)
                                        // entry.target.srcset = srcset;
                                        entry.target.style.backgroundImage = "url(" + srcset + '?wsSecret=' + md5URL + '&wsTime=' + timestamp + ")";
                                    }
                                }
                            } else {
                                entry.target.style.backgroundImage = "url(" + srcset + ")";
                            }
                        }
                    }
                });
            }, observerConfig);

            Array.prototype.forEach.call(this.images, function (image) {
                self.observer.observe(image);
            });
        },

        loadAndDestroy: function () {
            if (!this.settings) { return; }
            this.loadImages();
            this.destroy();
        },

        loadImages: function () {
            if (!this.settings) { return; }

            let self = this;
            Array.prototype.forEach.call(this.images, function (image) {
                let src = image.getAttribute(self.settings.src);
                let srcset = image.getAttribute(self.settings.style);
                if ("img" === image.tagName.toLowerCase()) {
                    if (src) {
                        image.src = src;
                    }
                    if (srcset) {
                        image.srcset = srcset;
                    }
                } else {
                    image.style.backgroundImage = "url('" + src + "')";
                }
            });
        },

        destroy: function () {
            if (!this.settings) { return; }
            this.observer.disconnect();
            this.settings = null;
        }

    };

    root.lazyload = function(images, options) {
        return new LazyLoad(images, options);
    };

    if (root.jQuery) {
        const $ = root.jQuery;
        $.fn.lazyload = function (options) {
            options = options || {};
            options.attribute = options.attribute || "lazy-src" || "lazy-style";

            new LazyLoad($.makeArray(this), options);

            return this;
        };
    }

    return LazyLoad;
});
