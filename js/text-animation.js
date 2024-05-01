//Text-animation

+ function(t, e, i) {
    function n(e, i) {
        this.$element = t(e), this.options = i, this._init()
    }

    function s(e) {
        return this.each(function() {
            var i = t(this),
                s = i.data("plugin_" + a),
                o = t.extend({}, l, i.data(), "object" == typeof e && e);
            s || i.data("plugin_" + a, s = new n(this, o)), "string" == typeof e && s[e]()
        })
    }
    var a = "cycleText",
        l = {
            separator: "|",
            animation: "flipInX",
            interval: 3e3
        };
    n.prototype = {
        _init: function() {
            var e = this;
            this.originalText = this.$element.text(), this.textArray = this.originalText.split(this.options.separator), this.$element.empty(), t.each(this.textArray, function() {
                e.$element.append('<span class="cycleText animated ' + e.options.animation + '" style="display: none;">' + this + "</span>")
            }), this.resume()
        },
        resume: function() {
            if (!this._interval) {
                var t = this,
                    e = 0;
                this.$element.find("span.cycleText").hide(), this.$element.find("span.cycleText:eq(0)").css("display", "inline-block"), this._interval = setInterval(function() {
                    e++, e %= t.textArray.length, t.$element.find("span.cycleText").hide(), t.$element.find("span.cycleText:eq(" + e + ")").css("display", "inline-block")
                }, this.options.interval)
            }
        },
        pause: function() {
            this._interval && (this._interval = clearInterval(this._interval))
        }
    }, t.fn[a] = s, t.fn[a].Constructor = n
}(jQuery, window, document);