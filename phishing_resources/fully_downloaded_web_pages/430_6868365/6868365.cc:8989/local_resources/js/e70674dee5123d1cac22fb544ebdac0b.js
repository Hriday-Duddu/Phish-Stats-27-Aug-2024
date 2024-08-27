(function (c, m, r, t) {
    var o = function (t, i) {
        this.$element = t, this.defaults = {
            type: 1,
            mode: "fixed",
            vOffset: 5,
            vSpace: 5,
            explain: "向右滑动完成验证",
            tipSuccess: "验证成功",
            tipFail: "验证失败",
            tipFail: "验证失败",
            refreshTip: "刷新验证",
            zoomRatio: 0.5,
            imgSize: {width: "290px", height: "180px"},
            blockSize: {width: "40px", height: "40px"},
            barSize: {width: "290px", height: "180px"},
            circleRadius: "0px",
            yHeight: 150,
            backImg: "",
            sliderImg: "",
            randomKey: "",
            ready: function () {
            },
            checkCode: function () {
            },
            success: function () {
            },
            error: function () {
            }
        }, this.options = c.extend({}, this.defaults, i)
    };
    o.prototype = {
        init: function () {
            var i = this;
            this.loadDom();
            i.refresh();
            this.$element[0].onselectstart = r.body.ondrag = function () {
                return false
            };
            if (this.options.mode == "pop") {
                this.$element.on("mouseover", function (t) {
                    i.showImg()
                });
                this.$element.on("mouseout", function (t) {
                    i.hideImg()
                });
                this.htmlDoms.out_panel.on("mouseover", function (t) {
                    i.showImg()
                });
                this.htmlDoms.out_panel.on("mouseout", function (t) {
                    i.hideImg()
                })
            }
            this.htmlDoms.move_block.on("touchstart", function (t) {
                i.start(t)
            });
            this.htmlDoms.move_block.on("mousedown", function (t) {
                i.start(t)
            });
            m.addEventListener("touchmove", function (t) {
                i.move(t)
            });
            m.addEventListener("mousemove", function (t) {
                i.move(t)
            });
            m.addEventListener("touchend", function () {
                i.end()
            });
            m.addEventListener("mouseup", function () {
                i.end()
            });
            i.$element.find(".slider-refresh").on("click", function () {
                i.refresh()
            })
        }, loadDom: function () {
            this.status = false;
            this.isEnd = false;
            this.setSize = this.resetSize(this);
            this.x = 0;
            this.y = 0;
            var t = "";
            var i = "";
            this.lengthPercent = (parseInt(this.setSize.img_width) - parseInt(this.setSize.block_width) - parseInt(this.setSize.circle_radius) - parseInt(this.setSize.circle_radius) * .8) / (parseInt(this.setSize.img_width) - parseInt(this.setSize.bar_height));
            if (this.options.type != 1) {
                    t += '<div class="slider-div"><div class="verify-refresh" style="z-index:3;text-align: right;"><span class="slider-refresh icon-refresh-word">'+this.options.refreshTip+'</span><i class="iconfont slider-refresh icon-refresh"></i></div><div class="verify-img-out"><div class="verify-img-panel"><img class="verify-sub-block" style="left:0; position:absolute;z-index: 11;" /><img class="verify-img-canvas" width="' + this.setSize.img_width + '" height="' + this.setSize.img_height + '" /></div></div>';
                i = ''
            }
            t += i + '<div class="verify-bar-area-div" style="height: 50px;position: relative;display: flex; align-items: center; justify-content: center;"><div class="verify-bar-area" style="height: 40px;line-height: 40px;"><span  class="verify-msg" style="font-size: 18px;">' + this.options.explain + '</span></div><div class="verify-left-bar"><div class="verify-move-bg"></div><span  class="verify-msg" style="color: rgb(0, 0, 0);"></span><div  class="verify-move-block" ><img class="verify-move-block-img" src=""> <!--<i  class="verify-icon iconfont icon-right" style="color: rgb(0, 0, 0);"></i>--></div></div></div></div>';
            this.$element.append(t);
            this.htmlDoms = {
                sub_block: this.$element.find(".verify-sub-block"),
                out_panel: this.$element.find(".verify-img-out"),
                img_panel: this.$element.find(".verify-img-panel"),
                img_canvas: this.$element.find(".verify-img-canvas"),
                bar_area: this.$element.find(".verify-bar-area"),
                bar_area_div: this.$element.find(".verify-bar-area-div"),
                move_bg: this.$element.find(".verify-move-bg"),
                move_block: this.$element.find(".verify-move-block"),
                left_bar: this.$element.find(".verify-left-bar"),
                msg: this.$element.find(".verify-msg"),
                icon: this.$element.find(".verify-icon"),
                refresh: this.$element.find(".verify-refresh")
            };
            this.$element.css("position", "relative");
            this.$element.find('.verify-bar-area-slider-tip').remove();
            if (this.options.mode == "pop") {
                this.htmlDoms.out_panel.css({display: "none", position: "absolute", bottom: "42px"});
                this.htmlDoms.sub_block.css({display: "none"})
            } else {
                this.htmlDoms.out_panel.css({position: "relative"})
            }
        }, start: function (t) {
            if (this.isEnd == false) {
                this.htmlDoms.msg.text("");
                this.htmlDoms.move_block.find("img").removeClass();
                this.htmlDoms.move_block.find("img").addClass("verify-move-block-img-slide");//滑动式
                this.htmlDoms.move_block.css("background-color", "#40AAFF");
                this.htmlDoms.left_bar.css("border-color", "#337AB7");
                this.htmlDoms.icon.css("color", "#fff");
                this.htmlDoms.move_bg.css({"background-color": "#C4E4FE", "border-color": "#40AAFF",  "border-width": '2px'})
                t.stopPropagation();
                this.status = true
            }
        }, move: function (t) {
            if (this.status && this.isEnd == false) {
                if (this.options.mode == "pop") {
                    this.showImg()
                }
                if (!t.touches) {
                    var i = t.clientX
                } else {
                    var i = t.touches[0].pageX
                }
                var s = o.prototype.getLeft(this.htmlDoms.bar_area[0]);//滑块长度
                var e = i - s;

                //debugger

                if (this.options.type != 1) {
                    //- parseInt(this.setSize.bar_height)
                    //- parseInt(this.setSize.bar_height)
                    if (e >= this.htmlDoms.bar_area[0].offsetWidth   + parseInt(parseInt(this.setSize.block_width) / 2) - 20) {
                        e = this.htmlDoms.bar_area[0].offsetWidth  + parseInt(parseInt(this.setSize.block_width) / 2) - 20
                    }
                } else {
                    if (e >= this.htmlDoms.bar_area[0].offsetWidth - parseInt(parseInt(this.setSize.bar_height) / 2) + 3) {
                        this.$element.find(".verify-msg:eq(1)").text("松开验证");
                        e = this.htmlDoms.bar_area[0].offsetWidth - parseInt(parseInt(this.setSize.bar_height) / 2) + 3
                    } else {
                        this.$element.find(".verify-msg:eq(1)").text("")
                    }
                }
                if (e <= parseInt(parseInt(this.setSize.block_width) / 2)) {
                    e = parseInt(parseInt(this.setSize.block_width) / 2)
                }
                var move_left = 0;
                var sub_block_left = 0;
                move_left = e - parseInt(parseInt(this.setSize.block_width) / 2) * this.lengthPercent;
                if(move_left <= 0){
                    move_left = 0;
                }
                sub_block_left = move_left*((this.htmlDoms.bar_area[0].offsetWidth)/(this.htmlDoms.bar_area[0].offsetWidth  + parseInt(parseInt(this.setSize.block_width) / 2) - 35))
                this.htmlDoms.move_block.css("left", move_left + "px");
                this.htmlDoms.move_bg.css("width", move_left + 30 + "px")
                this.htmlDoms.sub_block.css("left", sub_block_left  + "px")

            }
        }, end: function () {
            var t = this;
            if (this.status && this.isEnd == false) {
                if (this.options.type != 1) {
                    var i = this.options.checkCode(parseInt(parseInt(this.htmlDoms.sub_block.css("left"))/this.options.zoomRatio));
                    if (i == "success") {
                        //debugger
                        var style = 'bottom: 45px;position:absolute;background: #42D15A;;width:'+(parseInt(this.options.imgSize.width)+2) + 'px;';
                        var tip = "<div class=\"verify-bar-area verify-bar-area-slider-tip\" style=\""+style+"\"><span class=\"verify-msg\">"+this.options.tipSuccess+"</span></div>";
                        this.htmlDoms.move_block.find("img").removeClass();
                        this.htmlDoms.move_block.find("img").addClass("verify-move-block-img-right");//成功时
                        this.htmlDoms.move_block.css("background-color", "#FF4D4D");
                        this.htmlDoms.move_bg.css({"background-color": "#D6FFDD", "border-color": "#8FFFA2"})
                        this.htmlDoms.left_bar.css({"border-color": "#5cb85c"});
                        this.htmlDoms.icon.css("color", "#fff");
                        this.htmlDoms.icon.removeClass("icon-right");
                        this.htmlDoms.icon.addClass("icon-check");
                        this.$element.find(".verify-left-bar").before(tip);
                        //this.htmlDoms.refresh.hide();
                        this.isEnd = true;
                        this.options.success(this)
                    } else {
                        var style = 'bottom: 45px;position:absolute;background: #FF4D4D;width:'+(parseInt(this.options.imgSize.width)+2) + 'px;';
                        var tip = "<div class=\"verify-bar-area verify-bar-area-slider-tip\" style=\""+style+"\"><span class=\"verify-msg\" style='float: left;margin-left: 15px;color: white;'>"+this.options.tipFail+"</span></div>";
                        this.htmlDoms.move_bg.css({"background-color": "#FFDEDE", "border-color": "#FF7474"})
                        this.htmlDoms.move_block.find("img").removeClass();
                        this.htmlDoms.move_block.find("img").addClass("verify-move-block-img-wrong");//成功时
                        this.htmlDoms.move_block.css("background-color", "#d9534f");
                        this.htmlDoms.left_bar.css("border-color", "#d9534f");
                        this.htmlDoms.icon.css("color", "#fff");
                        this.htmlDoms.icon.removeClass("icon-right");
                        this.htmlDoms.icon.addClass("icon-close");
                        this.$element.find(".verify-left-bar").before(tip);
                        setTimeout(function () {
                            t.refresh()
                        }, 600);
                        this.options.error(this)
                    }
                } else {
                    if (parseInt(this.htmlDoms.move_block.css("left")) >= parseInt(this.setSize.bar_width) - parseInt(this.setSize.bar_height) - parseInt(this.options.vOffset)) {
                        this.htmlDoms.move_block.css("background-color", "rgba(66,209,90,1)");
                        this.htmlDoms.left_bar.css({
                            color: "#4cae4c",
                            "border-color": "#5cb85c",
                            "background-color": "#fff"
                        });
                        this.htmlDoms.icon.css("color", "#fff");
                        this.htmlDoms.icon.removeClass("icon-right");
                        this.htmlDoms.icon.addClass("icon-check");
                        this.htmlDoms.refresh.hide();
                        this.$element.find(".verify-msg:eq(1)").text("验证成功");
                        this.isEnd = true;
                        this.options.success(this)
                    } else {
                        this.$element.find(".verify-msg:eq(1)").text("");
                        this.htmlDoms.move_block.css("background-color", "#d9534f");
                        this.htmlDoms.left_bar.css("border-color", "#d9534f");
                        this.htmlDoms.icon.css("color", "#fff");
                        this.htmlDoms.icon.removeClass("icon-right");
                        this.htmlDoms.icon.addClass("icon-close");
                        this.htmlDoms.move_bg.css({"background-color": "#FFDEDE", "border-color": "#FF7474"})
                        this.isEnd = true;
                        setTimeout(function () {
                            t.$element.find(".verify-msg:eq(1)").text("");
                            t.refresh();
                            t.isEnd = false
                        }, 600);
                        this.options.error(this)
                    }
                }
                this.status = false
            }
        }, showImg: function () {
            this.htmlDoms.out_panel.css({display: "block"});
            this.htmlDoms.sub_block.css({display: "block"})
        }, hideImg: function () {
            this.htmlDoms.out_panel.css({display: "none"});
            this.htmlDoms.sub_block.css({display: "none"})
        }, resetSize: function (t) {
            var i, s, e, o, h, n, r;
            var a = t.$element.parent().width() || c(m).width();
            var l = t.$element.parent().height() || c(m).height();
            if (t.options.imgSize.width.indexOf("%") != -1) {
                i = parseInt(t.options.imgSize.width) / 100 * a + "px"
            } else {
                i = t.options.imgSize.width
            }
            if (t.options.imgSize.height.indexOf("%") != -1) {
                s = parseInt(t.options.imgSize.height) / 100 * l + "px"
            } else {
                s = t.options.imgSize.height
            }
            if (t.options.barSize.width.indexOf("%") != -1) {
                e = parseInt(t.options.barSize.width) / 100 * a + "px"
            } else {
                e = t.options.barSize.width
            }
            if (t.options.barSize.height.indexOf("%") != -1) {
                o = parseInt(t.options.barSize.height) / 100 * l + "px"
            } else {
                o = t.options.barSize.height
            }
            if (t.options.blockSize) {
                if (t.options.blockSize.width.indexOf("%") != -1) {
                    h = parseInt(t.options.blockSize.width) / 100 * a + "px"
                } else {
                    h = t.options.blockSize.width
                }
                if (t.options.blockSize.height.indexOf("%") != -1) {
                    n = parseInt(t.options.blockSize.height) / 100 * l + "px"
                } else {
                    n = t.options.blockSize.height
                }
            }
            if (t.options.circleRadius) {
                if (t.options.circleRadius.indexOf("%") != -1) {
                    r = parseInt(t.options.circleRadius) / 100 * l + "px"
                } else {
                    r = t.options.circleRadius
                }
            }
            return {
                img_width: i,
                img_height: s,
                bar_width: e,
                bar_height: o,
                block_width: h,
                block_height: n,
                circle_radius: r
            }
        }, randSet: function () {
            this.y = this.options.yHeight;
            if (this.options.mode == "pop") {
                this.htmlDoms.sub_block.css({top: "-" + (parseInt(this.setSize.img_height) + this.options.vSpace + parseInt(this.setSize.circle_radius) + parseInt(this.setSize.circle_radius) * .8 - this.y - 2) + "px"})
            } else {
                this.htmlDoms.sub_block.css({top: this.y - (parseInt(this.setSize.circle_radius) + parseInt(this.setSize.circle_radius) * .8) + "px"})
            }
        }, refresh: function () {
            var t = this;
            this.options.ready();
            this.htmlDoms.refresh.show();
            this.$element.find(".verify-msg:eq(1)").text("");
            this.$element.find(".verify-msg:eq(1)").css("color", "#000");
            this.htmlDoms.move_block.animate({left: "0px"}, "fast");
            // this.htmlDoms.left_bar.animate({width: parseInt(this.setSize.bar_height)}, "fast");
            this.htmlDoms.left_bar.css({"border-color": "#ddd"});
            this.htmlDoms.move_block.css("background-color", "#fff");
            this.htmlDoms.move_block.find("img").removeClass();
            this.htmlDoms.move_block.find("img").addClass("verify-move-block-img-arrow");
            this.htmlDoms.icon.css("color", "#000");
            this.htmlDoms.icon.removeClass("icon-close");
            this.htmlDoms.icon.addClass("icon-right");
            this.$element.find(".verify-msg:eq(0)").text(this.options.explain);
            this.$element.find('.verify-bar-area-slider-tip').remove();
            this.randSet();
            t.showImages();
            this.isEnd = false;
            this.htmlDoms.sub_block.css("left", "0px")
            this.htmlDoms.move_bg.css({"background-color": "rgba(236,236,236,1)", "border-color": "rgba(226,226,226,1)", width: '40px', "border-width": '1px'})
        }, showImages: function () {
            this.setSize = this.resetSize(this);
            this.htmlDoms.out_panel.css("height", parseInt(this.setSize.img_height) + this.options.vSpace + "px");
            this.htmlDoms.img_panel.css({width: this.setSize.img_width, height: this.setSize.img_height});
            this.htmlDoms.refresh.css({width: this.setSize.img_width});
            this.htmlDoms.bar_area.css({
                width: this.setSize.bar_width,
                height: this.setSize.bar_height,
                "line-height": this.setSize.bar_height
            });
            this.htmlDoms.bar_area_div.css({
                width: this.setSize.bar_width,
            });
            // this.htmlDoms.move_block.css({width: this.setSize.bar_height, height: this.setSize.bar_height});
            // this.htmlDoms.left_bar.css({width: this.setSize.bar_height, height: this.setSize.bar_height});
            this.htmlDoms.sub_block.css({width: this.options.blockSize.width, height: this.options.blockSize.height});
            this.htmlDoms.img_canvas.css({width: this.options.imgSize.width, height: this.options.imgSize.height});
            this.htmlDoms.img_canvas.attr("src", "data:image/png;base64," + this.options.backImg);
            this.htmlDoms.sub_block.attr("src", "data:image/png;base64," + this.options.sliderImg)
        }, getLeft: function (t) {
            var i = c(t).offset().left;
            return i
        }
    };
    var e = function (t, i) {
        this.$element = t, this.defaults = {
            mode: "fixed",
            defaultNum: 4,
            checkNum: 2,
            vSpace: 5,
            tipStr: ['请','依序','点击文字：'],
            tip: "请依序点击文字",
            tipSuccess: "验证成功",
            tipFail: "验证失败",
            tipSureButton: "确认",
            refreshTip: "刷新验证",
            zoomRatio: 0.5,
            imgSize: {width: "500px", height: "300px"},
            barSize: {width: "500px", height: "34px"},
            backImg: "",
            randomKey: "",
            fontPos: [],
            wordXYMap:null,
            ready: function () {
            },
            checkCode: function () {
            },
            success: function () {
            },
            error: function () {
            }
        }, this.options = c.extend({}, this.defaults, i)
    };
    e.prototype = {
        init: function () {
            var i = this;
            i.loadDom();
            i.refresh();
            this.$element[0].onselectstart = r.body.ondrag = function () {
                return false
            };
            if (this.options.mode == "pop") {
                this.$element.on("mouseover", function (t) {
                    i.showImg()
                });
                this.$element.on("mouseout", function (t) {
                    i.hideImg()
                });
                this.htmlDoms.out_panel.on("mouseover", function (t) {
                    i.showImg()
                });
                this.htmlDoms.out_panel.on("mouseout", function (t) {
                    i.hideImg()
                })
            }
            i.$element.find(".verify-bar-area-sure").on("click", function (t) {
                    if (i.num > i.options.checkNum) {
                        //i.num = i.createPoint(i.getMousePos(this, t));
                        setTimeout(function () {
                            var t = i.options.checkCode(i.checkPosArr);
                            if (t == "success") {
                                var style = 'bottom: 45px;position:absolute;background: #42D15A;;width:'+(parseInt(i.options.imgSize.width)+2) + 'px;';
                                var tip = "<div class=\"verify-bar-area verify-bar-area-slider-tip\" style=\""+style+"\"><span class=\"verify-msg\">"+i.options.tipSuccess+"</span></div>";
                                //i.$element.find(".verify-bar-area").css({color: "#4cae4c", "border-color": "#5cb85c"});
                                //i.$element.find(".verify-msg").text(i.options.tipSuccess);
                                //i.$element.find(".verify-refresh").hide();
                                i.$element.find(".verify-img-panel").unbind("click");
                                i.$element.find(".verify-bar-area").before(tip);
                                i.options.success(i)
                            } else {
                                var style = 'bottom: 45px;position:absolute;background: #FF4D4D;width:'+(parseInt(i.options.imgSize.width)+2) + 'px;';
                                var tip = "<div class=\"verify-bar-area verify-bar-area-slider-tip\" style=\""+style+"\"><span class=\"verify-msg\" style='float: left;margin-left: 15px;color: white;'>"+i.options.tipFail+"</span></div>";
                                i.options.error(i);
                                i.$element.find(".verify-bar-area").css({color: "#d9534f"});
                                //i.$element.find(".verify-msg").text(i.options.tipFail);
                                i.$element.find(".verify-bar-area").before(tip);
                                setTimeout(function () {
                                    //i.$element.find(".verify-bar-area").css({color: "#000", "border-color": "#ddd"});
                                    i.refresh()
                                }, 600)
                            }
                        }, 600)
                    }else if(i.num < i.options.checkNum+1){
                        var style = 'bottom: 46px;position:absolute;background: #FF4D4D;width:'+(parseInt(i.options.imgSize.width)+2) + 'px;';
                        var tip = "<div class=\"verify-bar-area verify-bar-area-slider-tip\" style=\""+style+"\"><span class=\"verify-msg\" style='float: left;margin-left: 15px;color: white;'>"+i.options.tip+"</span></div>";
                        i.options.error(i);
                        //i.$element.find(".verify-bar-area").css({color: "#d9534f", "border-color": "#d9534f"});
                        //i.$element.find(".verify-msg").text(i.options.tipFail);
                        i.$element.find(".verify-bar-area").before(tip);
                        setTimeout(function () {
                            i.$element.find('.verify-bar-area-slider-tip').remove();
                        }, 600);
                    }
                });
            i.$element.find(".verify-img-panel img").on("click", function (t) {
                var x = i.getMousePos(this, t).x;
                var y = i.getMousePos(this, t).y;
                var pos = {};
                pos.x=x/i.options.zoomRatio;
                pos.y=y/i.options.zoomRatio;
                i.checkPosArr.push(pos);
                if (i.num == i.options.checkNum) {
                    i.num = i.createPoint(i.getMousePos(this, t));
                    /*setTimeout(function () {
                        var t = i.options.checkCode(i.checkPosArr);
                        if (t == "success") {
                            var style = 'bottom: 46px;position:absolute;background: #42D15A;;width:'+(parseInt(i.options.imgSize.width)+2) + 'px;';
                            var tip = "<div class=\"verify-bar-area verify-bar-area-slider-tip\" style=\""+style+"\"><span class=\"verify-msg\">"+i.options.tipSuccess+"</span></div>";
                            i.$element.find(".verify-bar-area").css({color: "#4cae4c", "border-color": "#5cb85c"});
                            //i.$element.find(".verify-msg").text(i.options.tipSuccess);
                            //i.$element.find(".verify-refresh").hide();
                            i.$element.find(".verify-img-panel").unbind("click");
                            i.$element.find(".verify-bar-area").before(tip);
                            i.options.success(i)
                        } else {
                            var style = 'bottom: 46px;position:absolute;background: #FF4D4D;width:'+(parseInt(i.options.imgSize.width)+2) + 'px;';
                            var tip = "<div class=\"verify-bar-area verify-bar-area-slider-tip\" style=\""+style+"\"><span class=\"verify-msg\" style='float: left;margin-left: 15px;color: white;'>"+i.options.tipFail+"</span></div>";
                            i.options.error(i);
                            i.$element.find(".verify-bar-area").css({color: "#d9534f", "border-color": "#d9534f"});
                            //i.$element.find(".verify-msg").text(i.options.tipFail);
                            i.$element.find(".verify-bar-area").before(tip);
                            setTimeout(function () {
                                i.$element.find(".verify-bar-area").css({color: "#000", "border-color": "#ddd"});
                                i.refresh()
                            }, 600)
                        }
                    }, 600)*/
                }
                if (i.num < i.options.checkNum) {
                    i.num = i.createPoint(i.getMousePos(this, t))
                }
            });
            i.$element.find(".verify-refresh").on("click", function () {
                i.refresh()
            })
        }, loadDom: function () {
            this.fontPos = [];
            this.checkPosArr = [];
            this.num = 1;
            var t = "";
            this.setSize = o.prototype.resetSize(this);
            t += '<div class="word-div"><div class="word-verify-refresh"><div class="word-verify-refresh-tip"><span class="word-tip">'+this.options.tipStr+'<span class="click-word-tip"></span></span></div><div class="verify-refresh"><span class="word-refresh icon-refresh-word">'+this.options.refreshTip+'</span><i class="iconfont slider-refresh icon-refresh"></i></div></div><div class="verify-img-out"><div class="verify-img-panel"><em class="temp-word-pos" style="display:none;position: absolute;width: 0px;height: 0px;background: red;"></em><img class="verify-img-canvas" width="' + this.setSize.img_width + '" height="' + this.setSize.img_height + '"/></div></div><div class="verify-bar-area verify-bar-area-sure"><span  class="verify-msg-sure">'+this.options.tipSureButton+'</span></div></div>';
            this.$element.append(t);
            this.htmlDoms = {
                out_panel: this.$element.find(".verify-img-out"),
                img_panel: this.$element.find(".verify-img-panel"),
                img_canvas: this.$element.find(".verify-img-canvas"),
                bar_area: this.$element.find(".verify-bar-area"),
                temp_word_pos: this.$element.find(".temp-word-pos"),
                msg: this.$element.find(".verify-msg"),
                verify_msg_sure:this.$element.find(".verify-msg-sure"),
                verify_refresh: this.$element.find(".verify-refresh"),
                word_verify_refresh: this.$element.find(".word-verify-refresh"),
                click_word_tip: this.$element.find(".click-word-tip")
            };
            this.$element.css("position", "relative");
            if (this.options.mode == "pop") {
                this.htmlDoms.out_panel.css({display: "none", position: "absolute", bottom: "42px"})
            } else {
                this.htmlDoms.out_panel.css({position: "relative"})
            }
        }, getMousePos: function (t, i) {
            var s = i || m.event;
            var e = r.documentElement.scrollLeft || r.body.scrollLeft;
            var o = r.documentElement.scrollTop || r.body.scrollTop;
            var h = s.clientX - (c(t).offset().left - c(m).scrollLeft());
            var n = s.clientY - (c(t).offset().top - c(m).scrollTop());
            return {x: h, y: n}
        }, createPoint: function (t) {
            //background-color:#1abd6c;color:#fff;width:30px;height:30px;text-align:center;line-height:30px;border-radius: 50%;
            this.htmlDoms.img_panel.append('<div class="point-area" style="z-index:9999;position:absolute;top:' + parseInt(t.y - 10) + "px;left:" + parseInt(t.x - 10) + 'px;"><span class="point-area-num">' + this.num + "</span></div>");
            return ++this.num
        }, showImg: function () {
            this.htmlDoms.out_panel.css({display: "block"})
        }, hideImg: function () {
            this.htmlDoms.out_panel.css({display: "none"})
        }, refresh: function () {
            var t = this;
            this.$element.find(".point-area").remove();
            this.fontPos = [];
            this.checkPosArr = [];
            this.num = 1;
            t.options.ready();
            //设置字体位置
            /*if(typeof (t.options.wordXYMap) != "undefined" && t.options.wordXYMap != null){
                for (var k in t.options.wordXYMap){
                    var wordXY = t.options.wordXYMap[k];
                    for (var x in wordXY){
                        var y = t.options.wordXYMap[k][x];
                        t.$element.find(".temp-word-pos").css({width:(x+'px'),height:(y+'px')});
                    }
                }
            }*/

            //t.$element.find(".verify-bar-area").css({color: "#000", "border-color": "#ddd"});
            t.$element.find(".verify-msg").text("验证失败");
            t.$element.find(".verify-refresh").show();
            t.$element.find('.verify-bar-area-slider-tip').remove();
            t.showImages()
        }, showImages: function () {
            this.setSize = o.prototype.resetSize(this);
            this.htmlDoms.out_panel.css("height", parseInt(this.setSize.img_height) + this.options.vSpace + "px");
            this.htmlDoms.img_panel.css({
                width: this.setSize.img_width,
                height: this.setSize.img_height,
                "background-size": this.setSize.img_width + " " + this.setSize.img_height,
                "margin-bottom": this.options.vSpace + "px"
            });
            this.htmlDoms.word_verify_refresh.css({
                width: this.setSize.img_width
            });
            this.htmlDoms.bar_area.css({
                width: this.options.barSize.width,
                height: this.setSize.bar_height,
                "line-height": this.setSize.bar_height
            });
            this.htmlDoms.img_canvas.css({width: this.options.imgSize.width, height: this.options.imgSize.height});
            this.htmlDoms.img_canvas.attr("src", "data:image/png;base64," + this.options.backImg);
            var t = "";
            for (var i = 0; i < this.options.fontPos.length; i++) {
                t += this.options.fontPos[i] + ","
            }

            this.htmlDoms.click_word_tip.text(t.substring(0, t.length - 1))
            this.htmlDoms.msg.text(this.options.tipStr + "【" + t.substring(0, t.length - 1) + "】")
        }
    };
    c.fn.gbSlideValidation = function (t, i) {
        var s = new o(this, t);
        s.init()
    };
    c.fn.gbPointsValidation = function (t, i) {
        var s = new e(this, t);
        s.init()
    }
})(jQuery, window, document);