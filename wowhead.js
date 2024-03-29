window.WH = new function() {
    this.REMOTE = !("." + location.hostname).endsWith(".wowhead.com") &&
        location.hostname !== "wh-site" || location.pathname ===
        "/widgets/power/demo.html";
    this.STATIC_URL = "https://wow.zamimg.com";
    this.staticUrl = this.STATIC_URL;
    this.PageMeta = {}
};
WH.dataEnv = {
    MAIN: 1,
    PTR: 2,
    BETA: 3,
    CLASSIC: 4,
    TBC: 5
};
WH.dataEnvKey = {
    1: "live",
    2: "ptr",
    3: "beta",
    4: "classic",
    5: "tbc"
};
WH.dataEnvTerm = {
    1: "live",
    2: "ptr",
    3: "beta",
    4: "classic",
    5: "burningCrusade"
};
WH.dataTree = {
    RETAIL: 1,
    CLASSIC: 4,
    TBC: 5
};
WH.dataTreeTerm = {
    1: "retail",
    4: "classic",
    5: "burningCrusade"
};
WH.dataEnvToTree = {};
WH.dataEnvToTree[WH.dataEnv.MAIN] = WH.dataTree.RETAIL;
WH.dataEnvToTree[WH.dataEnv.PTR] = WH.dataTree.RETAIL;
WH.dataEnvToTree[WH.dataEnv.BETA] = WH.dataTree.RETAIL;
WH.dataEnvToTree[WH.dataEnv.CLASSIC] = WH.dataTree.CLASSIC;
WH.dataEnvToTree[WH.dataEnv.TBC] = WH.dataTree.TBC;
WH.dataTreeToRoot = {};
WH.dataTreeToRoot[WH.dataTree.RETAIL] = WH.dataEnv.MAIN;
WH.dataTreeToRoot[WH.dataTree.CLASSIC] = WH.dataEnv.CLASSIC;
WH.dataTreeToRoot[WH.dataTree.TBC] = WH.dataEnv.TBC;
WH.BETA_DOMAIN = "shadowlands";
WH.EFFECT_SCALING_CLASS_1 = -1;
WH.EFFECT_SCALING_CLASS_2 = -2;
WH.EFFECT_SCALING_CLASS_3 = -3;
WH.EFFECT_SCALING_CLASS_4 = -4;
WH.EFFECT_SCALING_CLASS_5 = -5;
WH.EFFECT_SCALING_CLASS_6 = -6;
WH.EFFECT_SCALING_CLASS_7 = -7;
WH.EFFECT_SCALING_CLASS_8 = -8;
WH.EFFECT_SCALING_CLASS_9 = -9;
WH.Timewalking = new function() {
    const e = this;
    this.MODE_TBC = 1;
    this.MODE_WOTLK = 2;
    this.MODE_CATA = 3;
    this.MODE_MISTS = 4;
    this.MODE_WOD = 5;
    const t = [{
        id: e.MODE_TBC,
        charLevel: 30,
        gearIlvl: 35,
        stringId: "twtbc",
        termAbbrev: "theburningcrusade_short"
    }, {
        id: e.MODE_WOTLK,
        charLevel: 30,
        gearIlvl: 35,
        stringId: "twwotlk",
        termAbbrev: "wrathofthelichking_abbrev"
    }, {
        id: e.MODE_CATA,
        charLevel: 35,
        gearIlvl: 40,
        stringId: "twcata",
        termAbbrev: "cataclysm_abbrev"
    }, {
        id: e.MODE_MISTS,
        charLevel: 35,
        gearIlvl: 40,
        stringId: "twmists",
        termAbbrev: "mistsofpandaria_abbrev"
    }, {
        id: e.MODE_WOD,
        charLevel: 40,
        gearIlvl: 45,
        stringId: "twwod",
        termAbbrev: "warlordsofdraenor_abbrev"
    }];
    this.getConfigs = function() {
        return t
    };
    this.getCharLevelFromIlvl = function(t) {
        for (let a of e.getConfigs()) {
            if (a.gearIlvl === t) {
                return a.charLevel
            }
        }
        return null
    };
    this.getGearIlvlByStringId = function(t) {
        for (let a of e.getConfigs()) {
            if (a.stringId === t) {
                return a.gearIlvl
            }
        }
        return null
    }
};
WH.Types = new function() {
    const e = this;
    this.NPC = 1;
    this.OBJECT = 2;
    this.ITEM = 3;
    this.ITEM_SET = 4;
    this.QUEST = 5;
    this.SPELL = 6;
    this.ZONE = 7;
    this.FACTION = 8;
    this.PET = 9;
    this.ACHIEVEMENT = 10;
    this.TITLE = 11;
    this.EVENT = 12;
    this.CLASS = 13;
    this.RACE = 14;
    this.SKILL = 15;
    this.CURRENCY = 17;
    this.PROJECT = 18;
    this.SOUND = 19;
    this.BUILDING = 20;
    this.FOLLOWER = 21;
    this.MISSION_ABILITY = 22;
    this.MISSION = 23;
    this.SHIP = 25;
    this.THREAT = 26;
    this.RESOURCE = 27;
    this.CHAMPION = 28;
    this.ICON = 29;
    this.ORDER_ADVANCEMENT = 30;
    this.FOLLOWER_A = 31;
    this.FOLLOWER_H = 32;
    this.SHIP_A = 33;
    this.SHIP_H = 34;
    this.CHAMPION_A = 35;
    this.CHAMPION_H = 36;
    this.TRANSMOG_ITEM = 37;
    this.BFA_CHAMPION = 38;
    this.BFA_CHAMPION_A = 39;
    this.AFFIX = 40;
    this.BFA_CHAMPION_H = 41;
    this.AZERITE_ESSENCE_POWER = 42;
    this.AZERITE_ESSENCE = 43;
    this.STORYLINE = 44;
    this.ADVENTURE_COMBATANT_ABILITY = 46;
    this.ENCOUNTER = 47;
    this.COVENANT = 48;
    this.SOULBIND = 49;
    this.PET_ABILITY = 200;
    this.SCREENSHOT = 91;
    this.GUIDE_IMAGE = 98;
    this.GUIDE = 100;
    this.TRANSMOG_SET = 101;
    this.OUTFIT = 110;
    this.GEAR_SET = 111;
    this.LISTVIEW = 158;
    this.SURVEY_COVENANTS = 161;
    this.NEWS_POST = 162;
    const t = [this.NPC, this.OBJECT, this.ITEM, this.ITEM_SET, this.QUEST,
        this.SPELL, this.ZONE, this.FACTION, this.PET, this.ACHIEVEMENT,
        this.TITLE, this.EVENT, this.CLASS, this.RACE, this.SKILL, this
        .CURRENCY, this.SOUND, this.BUILDING, this.FOLLOWER, this
        .MISSION_ABILITY, this.MISSION, this.SHIP, this.THREAT, this
        .RESOURCE, this.CHAMPION, this.ICON, this.ORDER_ADVANCEMENT,
        this.BFA_CHAMPION, this.AFFIX, this.AZERITE_ESSENCE_POWER, this
        .AZERITE_ESSENCE, this.STORYLINE, this
        .ADVENTURE_COMBATANT_ABILITY, this.PET_ABILITY
    ];
    const a = function() {
        let t = {};
        t[WH.dataTree.RETAIL] = [e.ACHIEVEMENT, e
            .ADVENTURE_COMBATANT_ABILITY, e.AFFIX, e
            .AZERITE_ESSENCE, e.AZERITE_ESSENCE_POWER, e
            .BFA_CHAMPION, e.BUILDING, e.CHAMPION, e.CLASS, e
            .CURRENCY, e.EVENT, e.FACTION, e.FOLLOWER, e.GUIDE, e
            .GUIDE_IMAGE, e.ICON, e.ITEM, e.ITEM_SET, e.LISTVIEW, e
            .MISSION, e.MISSION_ABILITY, e.NPC, e.OBJECT, e
            .ORDER_ADVANCEMENT, e.OUTFIT, e.PET, e.PET_ABILITY, e
            .QUEST, e.RACE, e.RESOURCE, e.SCREENSHOT, e.SHIP, e
            .SKILL, e.SOUND, e.SPELL, e.STORYLINE, e.THREAT, e
            .TITLE, e.TRANSMOG_SET, e.ZONE
        ];
        t[WH.dataTree.CLASSIC] = [e.CLASS, e.FACTION, e.GEAR_SET, e
            .GUIDE, e.GUIDE_IMAGE, e.ICON, e.ITEM, e.ITEM_SET, e
            .LISTVIEW, e.NPC, e.OBJECT, e.OUTFIT, e.PET, e.QUEST, e
            .RACE, e.RESOURCE, e.SCREENSHOT, e.SKILL, e.SOUND, e
            .SPELL, e.ZONE
        ];
        t[WH.dataTree.TBC] = [e.CLASS, e.FACTION, e.GUIDE, e
            .GUIDE_IMAGE, e.ICON, e.ITEM, e.ITEM_SET, e.LISTVIEW, e
            .NPC, e.OBJECT, e.OUTFIT, e.PET, e.QUEST, e.RACE, e
            .RESOURCE, e.SCREENSHOT, e.SKILL, e.SOUND, e.SPELL, e
            .ZONE
        ];
        return t
    }();
    const i = 0;
    const n = 1;
    const r = 2;
    const o = 3;
    const s = {
        typeNames: undefined
    };
    this.existsInDataEnv = function(e) {
        return a[WH.getDataTree()].includes(e)
    };
    this.getGameEntityTypes = function() {
        return t.slice()
    };
    this.getRequiredTrees = function(e) {
        let t = [];
        let i = false;
        for (let n in a) {
            if (!a.hasOwnProperty(n)) {
                continue
            }
            if (a[n].includes(e)) {
                t.push(parseInt(n))
            } else {
                i = true
            }
        }
        return i ? t : null
    };
    this.hasName = function(e) {
        return s.typeNames.hasOwnProperty(e)
    };
    this.getLowerPlural = function(e) {
        return l(e)[o]
    };
    this.getLowerSingular = function(e) {
        return l(e)[n]
    };
    this.getUpperPlural = function(e) {
        return l(e)[r]
    };
    this.getUpperSingular = function(e) {
        return l(e)[i]
    };

    function l(e) {
        if (s.typeNames === undefined) {
            s.typeNames = WH.getPageData("types.names") || {}
        }
        return s.typeNames[e] || Array(4).fill(WH.term("unknownType_format",
            e), 0, 4)
    }
};
WH.error = function(e) {
    console.error.apply(console.error, Array.prototype.slice.call(
        arguments));
    if (!e) {
        console.error(
            "The error message was empty, and thus will not be logged.");
        return
    }
    if (WH.Track) {
        WH.Track.nonInteractiveEvent.apply(WH.Track, ["Error"].concat(Array
            .prototype.slice.call(arguments)))
    }
};
WH.info = function(e) {
    console.info.apply(console.info, Array.prototype.slice.call(arguments))
};
WH.log = function(e) {
    console.log.apply(console.log, Array.prototype.slice.call(arguments))
};
WH.warn = function(e) {
    console.warn.apply(console.warn, Array.prototype.slice.call(arguments))
};
(function() {
    const e = {};
    WH.getPageData = function(t) {
        if (WH.REMOTE) {
            return undefined
        }
        if (e.hasOwnProperty(t)) {
            return e[t]
        }
        let a = document.querySelector(("script#data." + t).replace(
            /\./g, "\\."));
        if (a) {
            return JSON.parse(a.innerHTML)
        }
        return undefined
    };
    WH.setPageData = function(t, a) {
        if (e.hasOwnProperty(t)) {
            WH.warn("Duplicate data key", t)
        }
        e[t] = a
    }
})();
Object.assign(WH.PageMeta, WH.getPageData("pageMeta") || {});
WH.PageMeta.serverTime = WH.PageMeta.serverTime ? new Date(WH.PageMeta
    .serverTime) : new Date;
if (WH.PageMeta.staticUrl !== undefined) {
    WH.STATIC_URL = WH.PageMeta.staticUrl;
    WH.staticUrl = WH.PageMeta.staticUrl
}
WH.stringCompare = function(e, t) {
    if (e == t) return 0;
    if (e == null) return -1;
    if (t == null) return 1;
    var a = parseFloat(e);
    var i = parseFloat(t);
    if (!isNaN(a) && !isNaN(i) && a != i) {
        return a < i ? -1 : 1
    }
    if (typeof e == "string" && typeof t == "string") {
        return e.localeCompare(t, undefined, {
            numeric: true
        })
    }
    return e < t ? -1 : 1
};
WH.trim = function(e) {
    return e.replace(/(^\s*|\s*$)/g, "")
};
WH.rtrim = function(e, t) {
    let a = e.length;
    while (--a > 0 && e.charAt(a) === t) {}
    e = e.substring(0, a + 1);
    if (e === t) {
        e = ""
    }
    return e
};
WH.sprintf = function(e) {
    if (typeof e !== "string") {
        WH.error("No format passed to WH.sprintf.", e);
        return ""
    }
    for (var t = 1, a = arguments.length; t < a; ++t) {
        e = e.replace("$" + t, arguments[t])
    }
    return e
};
WH.sprintfGlobal = function(e) {
    for (var t = 1, a = arguments.length; t < a; ++t) {
        e = e.replace(new RegExp("\\$" + t, "g"), arguments[t])
    }
    return e
};
WH.stringReplace = function(e, t, a) {
    while (e.indexOf(t) != -1) {
        e = e.replace(t, a)
    }
    return e
};
WH.term = function(e) {
    if (!WH.TERMS) {
        return e
    }
    let t = [WH.TERMS[e]].concat(Array.prototype.slice.call(arguments, 1));
    return WH.Strings.sprintf.apply(null, t)
};
WH.wowTerm = function(e) {
    if (!WH.GlobalStrings) {
        return e
    }
    let t = [WH.GlobalStrings[e]].concat(Array.prototype.slice.call(
        arguments, 1));
    return WH.Strings.sprintf.apply(null, t)
};
WH.htmlEntities = function(e) {
    return e.replace(/[\u00A0-\u9999<>\&]/gim, (function(e) {
        return "&#" + e.charCodeAt(0) + ";"
    }))
};
WH.stub = function(e) {
    let t = e.split(".");
    let a = WH;
    for (let e = 0, i; i = t[e]; e++) {
        if (!a[i]) {
            a[i] = {}
        }
        a = a[i]
    }
};
WH.urlEncode = function(e) {
    e = encodeURIComponent(e);
    e = WH.stringReplace(e, "+", "%2B");
    return e
};
WH.urlEncodeHref = function(e) {
    e = encodeURIComponent(e);
    e = WH.stringReplace(e, "%20", "+");
    e = WH.stringReplace(e, "%3D", "=");
    return e
};
WH.numberFormat = function(e) {
    var t = ("" + parseFloat(e)).split(".");
    e = t[0];
    var a = t.length > 1 ? "." + t[1] : "";
    if (e.length <= 3) {
        return e + a
    }
    return WH.numberFormat(e.substr(0, e.length - 3)) + "," + e.substr(e
        .length - 3) + a
};
WH.numberLocaleFormat = function(e, t) {
    var a = "";
    if (typeof t == "number") {
        a = Locale.locales[t].name
    } else {
        if (typeof t == "string") {
            a = t
        } else {
            a = Locale.getName()
        }
    }
    if (a.length == 4) {
        a = a.substr(0, 2).toLowerCase() + "-" + a.substr(2).toUpperCase()
    }
    var i = "" + e;
    try {
        i = e.toLocaleString(a)
    } catch (t) {
        i = e.toLocaleString()
    }
    return i
};
WH.inArray = function(e, t, a, i) {
    if (e == null) {
        return -1
    }
    if (!Array.isArray(e)) {
        WH.error(
            "Tried looking for a value in a haystack which is not an array.",
            arguments);
        return -1
    }
    var n;
    if (a) {
        n = e.length;
        for (var r = i || 0; r < n; ++r) {
            if (a(e[r]) == t) {
                return r
            }
        }
        return -1
    }
    n = e.indexOf(t, i);
    if (n >= 0) {
        return n
    }
    n = e.length;
    for (var o = i || 0; o < n; ++o) {
        if (e[o] == t) {
            return o
        }
    }
    return -1
};
WH.isSet = function(e) {
    return typeof window[e] !== "undefined"
};
if (!WH.isSet("console")) {
    var console = {
        log: function() {}
    }
}
WH.arrayWalk = function(e, t, a) {
    for (var i = 0, n = e.length; i < n; ++i) {
        var r = t(e[i], a, e, i);
        if (r != null) {
            e[i] = r
        }
    }
};
WH.arrayApply = function(e, t, a) {
    for (var i = 0, n = e.length; i < n; ++i) {
        t(e[i], a, e, i)
    }
};
WH.arrayFilter = function(e, t) {
    var a = [];
    for (var i = 0, n = e.length; i < n; ++i) {
        if (t(e[i])) {
            a.push(e[i])
        }
    }
    return a
};
WH.arrayUnique = function(e) {
    var t = {};
    for (var a = e.length - 1; a >= 0; --a) {
        t[e[a]] = 1
    }
    var i = [];
    for (var n in t) {
        i.push(n)
    }
    return i
};
WH.closest = function(e, t) {
    while (e && e.nodeType === Node.ELEMENT_NODE) {
        if (e.matches(t)) {
            return e
        }
        e = e.parentNode
    }
    return undefined
};
WH.ge = function(e) {
    if (typeof e != "string") {
        return e
    }
    return document.getElementById(e)
};
WH.gE = function(e, t) {
    return e.getElementsByTagName(t)
};
WH.qs = function(e, t) {
    return (t || document).querySelector(e)
};
WH.qsa = function(e, t) {
    return (t || document).querySelectorAll(e)
};
WH.ce = function(e, t, a) {};
WH.ce = function(e) {
    return function(t, a, i) {
        var n = e(t);
        if (a) {
            WH.cOr(n, a)
        }
        if (i) {
            WH.ae(n, i)
        }
        if (n.tagName === "INPUT" && n.type === "range" && !WH
            .isRemote() && WH.DOM) {
            WH.DOM.styleRangeElement(n)
        }
        return n
    }
}(typeof document.createElementOriginal === "function" ? document
    .createElementOriginal.bind(document) : document.createElement.bind(
        document));
WH.de = function(e, t) {
    if (typeof e === "string") {
        e = (t || document).querySelector(e)
    }
    if (e && e.parentNode) {
        e.parentNode.removeChild(e)
    }
};
WH.ae = function(e, t) {
    if (Array.isArray(t)) {
        WH.arrayApply(t, e.appendChild.bind(e));
        return t
    } else {
        return e.appendChild(t)
    }
};
WH.aef = function(e, t) {
    return e.insertBefore(t, e.firstChild)
};
WH.ee = function(e, t) {
    if (!t) {
        t = 0
    }
    while (e.childNodes[t]) {
        e.removeChild(e.childNodes[t])
    }
};
WH.ct = function(e) {
    return document.createTextNode(e)
};
WH.st = function(e, t) {
    if (e.firstChild && e.firstChild.nodeType == 3) {
        e.firstChild.nodeValue = t
    } else {
        WH.aef(e, WH.ct(t))
    }
};
WH.noWrap = function(e) {
    e.style.whiteSpace = "nowrap"
};
WH.rf = function() {
    return false
};
WH.rfWithoutControlKey = function(e) {
    if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
        return
    }
    return false
};
WH.aE = function(e, t, a, i) {
    if (!e) {
        return
    }
    if (typeof e === "string") {
        e = document.querySelectorAll(e)
    } else if (e instanceof EventTarget) {
        e = [e]
    } else if (Array.isArray(e) || e instanceof NodeList) {} else {
        WH.warn("Unrecognized elements parameter", e);
        e = [e]
    }
    t = typeof t === "string" ? [t] : t;
    for (let n = 0; n < e.length; n++) {
        for (let r of t) {
            e[n].addEventListener(r, a, i || false)
        }
    }
};
WH.dE = function(e, t, a, i) {
    if (!e) {
        return
    }
    if (typeof e === "string") {
        e = document.querySelectorAll(e)
    } else if (e instanceof EventTarget) {
        e = [e]
    } else if (Array.isArray(e) || e instanceof NodeList) {} else {
        WH.warn("Unrecognized elements parameter", e);
        e = [e]
    }
    for (let n = 0; n < e.length; n++) {
        e[n].removeEventListener(t, a, i || false)
    }
};
WH.preventSelectStart = function(e) {
    e.dataset.preventSelectStart = "true"
};
WH.sp = function(e) {
    if (!e) {
        e = window.event
    }
    e.stopPropagation()
};
WH.setCookie = function(e, t, a, i, n, r) {
    var o = new Date;
    var s = e + "=" + encodeURI(a) + "; ";
    o.setDate(o.getDate() + t);
    s += "expires=" + o.toUTCString() + "; ";
    if (i) {
        s += "path=" + i + "; "
    }
    if (n) {
        s += "domain=" + n + "; "
    }
    if (r === true) {
        s += "secure;"
    }
    document.cookie = s;
    WH.getCookies(e);
    WH.getCookies.C[e] = a
};
WH.deleteCookie = function(e, t, a, i) {
    WH.setCookie(e, -1, "", t, a, i);
    WH.getCookies.C[e] = null
};
WH.getCookies = function(e) {
    if (WH.getCookies.I == null) {
        var t = decodeURI(document.cookie).split("; ");
        WH.getCookies.C = {};
        for (var a = 0, i = t.length; a < i; ++a) {
            var n = t[a].indexOf("="),
                r, o;
            if (n != -1) {
                r = t[a].substr(0, n);
                o = t[a].substr(n + 1)
            } else {
                r = t[a];
                o = ""
            }
            WH.getCookies.C[r] = o
        }
        WH.getCookies.I = 1
    }
    if (!e) {
        return WH.getCookies.C
    } else {
        return WH.getCookies.C[e]
    }
};
WH.dO = function(e) {
    return WH.cO({}, e)
};
WH.cO = function(e, t) {
    for (var a in t) {
        if (t[a] !== null && typeof t[a] == "object" && t[a].length) {
            e[a] = t[a].slice(0)
        } else {
            e[a] = t[a]
        }
    }
    return e
};
WH.cOr = function(e, t, a) {
    for (var i in t) {
        if (a && i.substr(0, a.length) == a) {
            continue
        }
        if (t[i] !== null && typeof t[i] == "object") {
            if (Array.isArray(t[i])) {
                e[i] = t[i].slice(0)
            } else {
                if (!e[i]) {
                    e[i] = {}
                }
                WH.cOr(e[i], t[i], a)
            }
        } else {
            e[i] = t[i]
        }
    }
    return e
};
WH.fround = function(e) {
    if (Math.fround) {
        return Math.fround(e)
    } else if (typeof Float32Array != "undefined" && Float32Array) {
        var t = new Float32Array(1);
        t[0] = +e;
        return t[0]
    } else {
        return e
    }
};
WH.displayBlock = function(e, t) {
    if (typeof e === "string") {
        e = (t || document).querySelector(e);
        if (!e) {
            return
        }
    }
    e.style.display = "block"
};
WH.displayDefault = function(e, t) {
    if (typeof e === "string") {
        e = (t || document).querySelector(e);
        if (!e) {
            return
        }
    }
    e.style.removeProperty("display")
};
WH.displayInline = function(e, t) {
    if (typeof e === "string") {
        e = (t || document).querySelector(e);
        if (!e) {
            return
        }
    }
    e.style.display = "inline"
};
WH.displayNone = function(e, t) {
    if (typeof e === "string") {
        e = (t || document).querySelector(e);
        if (!e) {
            return
        }
    }
    e.style.display = "none"
};
WH.setData = function(e, t, a, i) {
    let n;
    if (typeof e === "string") {
        n = (i || document).querySelectorAll(e)
    } else if (e) {
        if (e.dataset) {
            n = [e]
        } else if (e.length) {
            n = e
        } else {
            WH.error("Element not supported by WH.setData().", t, a, e, i);
            return
        }
    } else {
        WH.error("No element passed to WH.setData().", t, a, e, i);
        return
    }
    if (a == null) {
        for (let e = 0, a; a = n[e]; e++) {
            delete a.dataset[t]
        }
    } else {
        for (let e = 0, i; i = n[e]; e++) {
            i.dataset[t] = a
        }
    }
};
WH.getWindowSize = function() {
    return {
        w: window.innerWidth,
        h: window.innerHeight
    }
};
WH.getScroll = function() {
    return {
        x: window.scrollX,
        y: window.scrollY
    }
};
WH.getCursorPos = function(e) {
    return {
        x: e.pageX,
        y: e.pageY
    }
};
WH.ac = function(e, t) {
    let a = 0;
    let i = 0;
    while (e) {
        let t;
        if (e.style.transform && (t = e.style.transform.match(
                /scale\(([\d.]+)\)/i))) {
            a *= parseFloat(t[1]);
            i *= parseFloat(t[1])
        }
        a += e.offsetLeft;
        i += e.offsetTop;
        let n = e.parentNode;
        while (n && n !== e.offsetParent && n.offsetParent) {
            if (n.scrollLeft || n.scrollTop) {
                a -= n.scrollLeft | 0;
                i -= n.scrollTop | 0;
                break
            }
            n = n.parentNode
        }
        e = e.offsetParent
    }
    if (window.Lightbox && Lightbox.isVisible()) {
        t = true
    }
    if (t) {
        let e = WH.getScroll();
        a += e.x;
        i += e.y
    }
    let n = [a, i];
    n.x = a;
    n.y = i;
    return n
};
WH.getOffset = function(e, t) {
    let a = e.getBoundingClientRect();
    let i = {
        left: a.left,
        top: a.top
    };
    if (t !== true) {
        let e = WH.getScroll();
        i.left += e.x;
        i.top += e.y
    }
    return i
};
WH.scrollTo = function(e, t) {
    t = t || {};
    if (typeof e === "string") {
        let t = document.querySelector(e);
        if (!t) {
            WH.error("Could not select element to scroll to.", e);
            return
        }
        e = t
    }
    if (!e || e.nodeType !== Node.ELEMENT_NODE) {
        WH.error("Invalid target to scroll to.", e);
        return
    }
    if (t.asNeeded) {
        let a = e.getBoundingClientRect();
        let i = t.position === "center" ? 10 : 0;
        if (a.top >= i && a.top + a.height + i < window.innerHeight && a
            .left >= i && a.left + a.width + i < window.innerWidth) {
            return
        }
    }
    e.scrollIntoView({
        behavior: t.animated === false ? "auto" : "smooth",
        block: t.position || "start"
    })
};
WH.isElementFixedPosition = function(e) {
    while (e && e.nodeType === Node.ELEMENT_NODE) {
        if (getComputedStyle(e).getPropertyValue("position") === "fixed") {
            return true
        }
        e = e.parentNode
    }
    return false
};
WH.createReverseLookupJson = function(e) {
    var t = {};
    for (var a in e) {
        t[e[a]] = a
    }
    return t
};
WH.getLocaleFromDomain = function(e) {
    var t = WH.getLocaleFromDomain.L;
    if (e && typeof e == "string") {
        var a = e.split(".");
        return t[a[0]] || 0
    }
    return 0
};
WH.getLocaleFromDomain.L = {
    ko: 1,
    fr: 2,
    de: 3,
    cn: 4,
    es: 6,
    ru: 7,
    pt: 8,
    it: 9
};
WH.getDomainFromLocale = function(e) {
    var t;
    if (WH.getDomainFromLocale.L) {
        t = WH.getDomainFromLocale.L
    } else {
        t = WH.getDomainFromLocale.L = WH.createReverseLookupJson(WH
            .getLocaleFromDomain.L)
    }
    return t[e] ? t[e] : ""
};
WH.getTypeIdFromTypeString = function(e) {
    if (!WH.getTypeIdFromTypeString.lookup[e]) {
        WH.error("No type ID found for type string [" + e + "].");
        return -1
    }
    return WH.getTypeIdFromTypeString.lookup[e]
};
WH.getTypeIdFromTypeString.lookup = {
    mount: -1e3,
    recipe: -1001,
    "battle-pet": -1002,
    npc: 1,
    object: 2,
    item: 3,
    itemset: 4,
    "item-set": 4,
    quest: 5,
    spell: 6,
    zone: 7,
    faction: 8,
    pet: 9,
    achievement: 10,
    title: 11,
    event: 12,
    statistic: 16,
    currency: 17,
    building: 20,
    follower: 21,
    garrisonability: 22,
    missionability: 22,
    "mission-ability": 22,
    mission: 23,
    ship: 25,
    threat: 26,
    resource: 27,
    champion: 28,
    icon: 29,
    "order-advancement": 30,
    "bfa-champion": 38,
    affix: 40,
    "azerite-essence": 43,
    "azerite-essence-power": 42,
    storyline: WH.Types.STORYLINE,
    "adventure-combatant-ability": WH.Types.ADVENTURE_COMBATANT_ABILITY,
    guide: 100,
    "transmog-set": 101,
    outfit: 110,
    petability: 200,
    "pet-ability": 200
};
WH.fetch = function() {
    let e = function(e) {
        let t = [];
        for (let a in e) {
            if (e.hasOwnProperty(a)) {
                t.push(encodeURIComponent(a) + "=" + encodeURIComponent(
                    e[a]))
            }
        }
        return t.join("&")
    };
    let t = function(e) {
        if (e.contentType) {
            return e.contentType
        }
        if (typeof e.form === "object") {
            return "application/x-www-form-urlencoded"
        }
        if (e.hasOwnProperty("json")) {
            return "application/json"
        }
        if (typeof e.body === "string") {
            return "application/octet-stream"
        }
        return undefined
    };
    if (typeof window.fetch !== "function") {
        let a = function(e, t, a) {
            let i = this;
            let n = i.responseText;
            let r = (i.getResponseHeader("content-type") || "").indexOf(
                "application/json") === 0;
            let o = null;
            if (i.status < 200 || i.status > 399) {
                o = "Legacy WH.fetch call got a bad response code."
            } else if (r) {
                try {
                    n = JSON.parse(n)
                } catch (e) {
                    n = undefined;
                    o = "Could not process Legacy WH.fetch JSON response. " +
                        e.message
                }
            }
            if (o) {
                WH.error(o, e, i.status, i.responseText, i);
                if (t.error) {
                    t.error(n, i.status)
                }
            } else {
                if (t.success) {
                    t.success(n, i.status)
                }
            }
            if (t.complete) {
                t.complete(n, i.status)
            }
        };
        let i = function(e, t, a) {
            let i = this;
            let n = "Legacy WH.fetch call could not complete.";
            let r = i.responseText || undefined;
            WH.error(n, e, i.status, i.responseText, i);
            if (t.error) {
                t.error(r, i.status)
            }
            if (t.complete) {
                t.complete(r, i.status)
            }
        };
        return function(n, r) {
            r = r || {};
            if (r.query) {
                n += (n.indexOf("?") > -1 ? "&" : "?") + WH.Url
                    .buildQuery(r.query)
            }
            let o = r.method || "GET";
            if (r.hasOwnProperty("data") || typeof r.body ===
                "string") {
                o = r.method || "POST"
            }
            let s = new XMLHttpRequest;
            WH.aE(s, "load", a.bind(s, n, r));
            WH.aE(s, "error", i.bind(s, n, r));
            s.overrideMimeType("text/plain");
            s.open(o, n, true);
            let l = t(r);
            if (l) {
                s.setRequestHeader("Content-Type", l)
            }
            if (typeof r.form === "object") {
                s.send(e(r.form))
            } else if (r.hasOwnProperty("json")) {
                s.send(JSON.stringify(r.json))
            } else if (typeof r.body === "string") {
                s.send(r.body)
            } else {
                s.send()
            }
        }
    }
    let a = function(e, t, a, i) {
        if (!a.ok) {
            WH.error("WH.fetch call got a bad response code.", e, a
                .status, i, a);
            if (t.error) {
                t.error(i, a.status)
            }
        } else {
            if (t.success) {
                t.success(i, a.status)
            }
        }
        if (t.complete) {
            t.complete(i, a.status)
        }
    };
    let i = function(e, t, a, i) {
        let n =
            "Could not process WH.fetch response, callback errored. " +
            i.message;
        WH.error(n, e, a.status, "", a);
        if (t.error) {
            t.error(undefined, a.status)
        }
        if (t.complete) {
            t.complete(undefined, a.status)
        }
    };
    let n = function(e, t, n) {
        let r = (n.headers.get("content-type") || "").indexOf(
            "application/json") === 0;
        (r ? n.json() : n.text()).then(a.bind(null, e, t, n))["catch"](i
            .bind(null, e, t, n))
    };
    let r = function(e, t, a) {
        let i = "WH.fetch call could not complete. " + a.message;
        WH.error(i, e, 0, "", a);
        if (t.error) {
            t.error(undefined, 0, a.message)
        }
        if (t.complete) {
            t.complete(undefined, 0, a.message)
        }
    };
    return function(a, i) {
        i = i || {};
        if (i.query) {
            a += (a.indexOf("?") > -1 ? "&" : "?") + WH.Url.buildQuery(i
                .query)
        }
        let o = typeof i.cookies === "boolean" ? i.cookies : true;
        let s = {
            credentials: o ? "same-origin" : "omit",
            headers: new Headers,
            method: i.method || "GET",
            mode: i.mode || "same-origin"
        };
        let l = t(i);
        if (l) {
            s.headers.set("Content-Type", l)
        }
        if (typeof i.form === "object") {
            s.method = i.method || "POST";
            s.body = e(i.form)
        } else if (i.hasOwnProperty("json")) {
            s.method = i.method || "POST";
            s.body = JSON.stringify(i.json)
        } else if (typeof i.body === "string") {
            s.method = i.method || "POST";
            s.body = i.body
        }
        fetch(a, s).then(n.bind(null, a, i))["catch"](r.bind(null, a,
            i))
    }
}();
WH.ajaxIshRequest = function(e, t) {
    var a = document.getElementsByTagName("head")[0];
    if (e.substr(0, 5) === "http:" && location.protocol === "https:") {
        WH.error("Refused to AJAX-ish load URL.", e);
        return undefined
    }
    if (t) {
        var i = WH.ce("script", {
            type: "text/javascript",
            src: e
        });
        WH.ae(a, i);
        return i
    }
    var n = WH.getGets();
    if (n.refresh != null) {
        if (n.refresh.length) {
            e += "&refresh=" + n.refresh
        } else {
            e += "&refresh"
        }
    }
    if (n.locale != null) {
        e += "&locale=" + n.locale
    }
    if (n.ptr != null) {
        e += "&ptr"
    }
    var i = WH.ce("script", {
        type: "text/javascript",
        src: e,
        charset: "utf8"
    });
    WH.ae(a, i);
    return i
};
WH.xhrJsonRequest = function(e, t) {
    var a = new XMLHttpRequest;
    a.onload = function(e) {
        var a = e.target.response;
        switch (e.target.responseType) {
            case "json":
                break;
            case "":
            case "text":
                try {
                    a = JSON.parse(a)
                } catch (a) {
                    WH.error("Could not parse expected JSON response", e
                        .target);
                    return t()
                }
                break;
            default:
                WH.error("Unexpected response type from JSON request", e
                    .target);
                return t()
        }
        return t(a)
    };
    a.onerror = function() {
        return t()
    };
    a.open("GET", e, true);
    a.responseType = "json";
    a.send()
};
WH.getGets = function() {
    if (WH.getGets.C != null) {
        return WH.getGets.C
    }
    var e = WH.getQueryString();
    var t = WH.parseQueryString(e);
    WH.getGets.C = t;
    return t
};
WH.visitUrlWithPostData = function(e, t) {
    var a = WH.ce("form");
    a.action = e;
    a.method = "post";
    for (var i in t) {
        if (t.hasOwnProperty(i)) {
            var n = WH.ce("input");
            n.type = "hidden";
            n.name = i;
            n.value = t[i];
            WH.ae(a, n)
        }
    }
    WH.ae(document.body, a);
    a.submit()
};
WH.getQueryString = function() {
    var e = "";
    if (location.pathname) {
        e += location.pathname.substr(1)
    }
    if (location.search) {
        if (location.pathname) {
            e += "&"
        }
        e += location.search.substr(1)
    }
    return e
};
WH.parseQueryString = function(e) {
    e = decodeURIComponent(e).replace(/^\?+/, "");
    var t = e.split("&");
    var a = {};
    for (var i = 0, n = t.length; i < n; ++i) {
        WH.splitQueryParam(t[i], a)
    }
    return a
};
WH.splitQueryParam = function(e, t) {
    if (e === "") {
        return
    }
    var a = e.indexOf("=");
    var i;
    var n;
    if (a != -1) {
        i = e.substr(0, a);
        n = e.substr(a + 1)
    } else {
        i = e;
        n = ""
    }
    t[i] = n
};
WH.createRect = function(e, t, a, i) {
    return {
        l: e,
        t: t,
        r: e + a,
        b: t + i
    }
};
WH.intersectRect = function(e, t) {
    return !(e.l >= t.r || t.l >= e.r || e.t >= t.b || t.t >= e.b)
};
WH.getViewport = function() {
    var e = $(window);
    return new Rectangle(e.scrollLeft(), e.scrollTop(), e.width(), e
    .height())
};
WH.keyPressIsAlphaNumeric = function(e) {
    var t = document.all ? e.keycode : e.which;
    return t > 47 && t < 58 || t > 64 && t < 91 || t > 95 && t < 112 || t ==
        222 || t == 0
};
WH.isRemote = function() {
    return !WH.PageMeta.wowhead
};
WH.isDev = function() {
    return !!WH.PageMeta.dev
};
WH.getDataEnv = function() {
    return WH.PageMeta.hasOwnProperty("dataEnv") ? WH.PageMeta.dataEnv.env :
        WH.dataEnv.MAIN
};
WH.getDataEnvFromKey = function(e) {
    for (let t in WH.dataEnvKey) {
        if (WH.dataEnvKey[t] === e) {
            return parseInt(t)
        }
    }
    return undefined
};
WH.getDataEnvKey = function(e) {
    return WH.dataEnvKey[e || WH.getDataEnv()]
};
WH.getDataEnvSeoName = function(e) {
    e = e || WH.getDataEnv();
    return WH.TERMS[e === WH.dataEnv.TBC ? "tbcClassic" : WH.getDataEnvTerm(
        e)]
};
WH.getDataEnvTerm = function(e) {
    return WH.dataEnvTerm[e || WH.getDataEnv()]
};
WH.getDataTree = function(e) {
    if (e !== undefined) {
        return WH.dataEnvToTree[e]
    }
    return WH.PageMeta.hasOwnProperty("dataEnv") ? WH.PageMeta.dataEnv
        .tree : WH.dataTree.RETAIL
};
WH.getDataTreeKey = function(e) {
    return WH.getDataEnvKey(WH.dataTreeToRoot[e || WH.getDataTree()])
};
WH.getDataTreeTerm = function(e) {
    return WH.dataTreeTerm[e || WH.getDataTree()]
};
WH.getRootEnv = function(e) {
    return WH.dataTreeToRoot[WH.getDataTree(e || WH.getDataEnv())]
};
WH.getServerTime = function() {
    return WH.PageMeta.serverTime
};
WH.getDataBuild = function(e) {
    return WH.PageMeta.dataBuild && WH.PageMeta.dataBuild[e || WH
        .getDataEnv()] || "0"
};
WH.isBeta = function() {
    return WH.getDataEnv() === WH.dataEnv.BETA
};
WH.isBetaActive = function() {
    if (WH.PageMeta.hasOwnProperty("dataEnv")) {
        return WH.PageMeta.dataEnv.active.beta
    }
    return !!WH.REMOTE
};
WH.isClassicTree = function(e) {
    return WH.getDataTree(e) === WH.dataTree.CLASSIC
};
WH.isPtr = function() {
    return WH.getDataEnv() === WH.dataEnv.PTR
};
WH.isPtrActive = function() {
    if (WH.PageMeta.hasOwnProperty("dataEnv")) {
        return WH.PageMeta.dataEnv.active.ptr
    }
    return !!WH.REMOTE
};
WH.isRetailTree = function(e) {
    return WH.getDataTree(e) === WH.dataTree.RETAIL
};
WH.isTbcTree = function(e) {
    return WH.getDataTree(e) === WH.dataTree.TBC
};
WH.suppressExternalDebug = function() {
    return !!WH.PageMeta.suppressExternalDebug
};
WH.setupFooterMenus = function() {
    var e = {
        "footer-help-menu": mn_footer_help,
        "footer-tools-menu": mn_footer_tools,
        "footer-about-menu": mn_footer_about
    };
    for (var t in e) {
        if (!e.hasOwnProperty(t)) continue;
        var a = $("#" + t);
        if (a.length) {
            a.addClass("hassubmenu");
            Menu.add(a.get(0), e[t])
        }
    }
};
WH.getScreenshotUrl = function(e, t, a) {
    if (!t) {
        t = "normal"
    }
    a = a || {};
    var i = t == "normal" && typeof a.description == "string" && a
        .description ? "-" + WH.Strings.slug(a.description, true) : "";
    var n = {
        2: ".jpg",
        3: ".png",
        18: ".webp"
    };
    var r = n[a.imageType || 2] || n[2];
    return WH.staticUrl + "/uploads/screenshots/" + t + "/" + e + i + r
};
WH.maxLevel = WH.maxLevel || 60;
WH.maxSkill = WH.maxSkill || 900;
WH.convertRatingToPercent = function(e, t, a, i) {
    let n = (WH.convertRatingToPercent.LT || {})[t] || {};
    let r = WH.findSparseKey(n, e);
    let o = n[r] || 0;
    return o ? a / o : 0
};
WH.statToRating = {
    11: 0,
    12: 1,
    13: 2,
    14: 3,
    15: 4,
    16: 5,
    17: 6,
    18: 7,
    19: 8,
    20: 9,
    21: 10,
    25: 15,
    26: 15,
    27: 15,
    28: 17,
    29: 18,
    30: 19,
    31: 5,
    32: 8,
    34: 15,
    35: 15,
    36: 17,
    37: 23,
    44: 24,
    49: 25,
    57: 26,
    59: 11,
    60: 12,
    61: 13,
    62: 16,
    63: 20,
    64: 21,
    40: 29
};
WH.statToJson = {
    0: "mana",
    1: "health",
    3: "agi",
    4: "str",
    5: "int",
    6: "spi",
    7: "sta",
    8: "energy",
    9: "rage",
    10: "focus",
    13: "dodgertng",
    14: "parryrtng",
    15: "blockrtng",
    16: "mlehitrtng",
    17: "rgdhitrtng",
    18: "splhitrtng",
    19: "mlecritstrkrtng",
    20: "rgdcritstrkrtng",
    21: "splcritstrkrtng",
    22: "corruption",
    23: "corruptionres",
    24: "_splhitrtng",
    25: "_mlecritstrkrtng",
    26: "_rgdcritstrkrtng",
    27: "_splcritstrkrtng",
    28: "mlehastertng",
    29: "rgdhastertng",
    30: "splhastertng",
    31: "hitrtng",
    32: "critstrkrtng",
    33: "_hitrtng",
    34: "_critstrkrtng",
    35: "resirtng",
    36: "hastertng",
    37: "exprtng",
    38: "atkpwr",
    39: "rgdatkpwr",
    40: "versatility",
    41: "splheal",
    42: "spldmg",
    43: "manargn",
    44: "armorpenrtng",
    45: "splpwr",
    46: "healthrgn",
    47: "splpen",
    49: "mastrtng",
    50: "armorbonus",
    51: "firres",
    52: "frores",
    53: "holres",
    54: "shares",
    55: "natres",
    56: "arcres",
    57: "pvppower",
    58: "amplify",
    59: "multistrike",
    60: "readiness",
    61: "speedbonus",
    62: "lifesteal",
    63: "avoidance",
    64: "sturdiness",
    66: "cleave",
    71: "agistrint",
    72: "agistr",
    73: "agiint",
    74: "strint"
};
WH.jsonToStat = {};
for (var i in WH.statToJson) {
    WH.jsonToStat[WH.statToJson[i]] = i
}
WH.individualToGlobalStat = {
    16: 31,
    17: 31,
    18: 31,
    19: 32,
    20: 32,
    21: 32,
    24: 33,
    25: 34,
    26: 34,
    27: 34,
    28: 36,
    29: 36,
    30: 36
};
WH.convertScalingFactor = function(e, t, a, i, n) {
    var r = WH.convertScalingFactor.SV;
    var o = WH.convertScalingFactor.SD.stats;
    if (!r || !r[e]) {
        if (g_user.roles & U_GROUP_ADMIN) {
            alert("There are no item scaling values for level " + e)
        }
        return n ? {} : 0
    }
    const s = 10;
    var l = {},
        c = r[e],
        u = o[a];
    if (!u || !(i >= 0 && i < s)) {
        l.v = c[t]
    } else {
        let e = WH.findSparseKey(u, i);
        let a = WH.findSparseKey(u, i + s);
        l.n = WH.statToJson[u[e]];
        l.s = u[e];
        l.v = Math.floor(c[t] * u[a] / 1e4)
    }
    return n ? l : l.v
};
WH.getScalingDistributionCurve = function(e) {
    let t = ((WH.convertScalingFactor.SD || {}).curves || {})[e];
    return t ? {
        minLevel: t[0],
        maxLevel: t[1],
        curve: t[2]
    } : undefined
};
g_itemScalingCallbacks = [];
WH.getSpellScalingIndexFromScalingClass = function(e, t) {
    switch (e) {
        case WH.EFFECT_SCALING_CLASS_2:
            if (t == 463) {
                return 13
            }
            break;
        case WH.EFFECT_SCALING_CLASS_7:
            return 13;
        case WH.EFFECT_SCALING_CLASS_8:
        case WH.EFFECT_SCALING_CLASS_9:
            return 19
    }
    if (e < 0) {
        return Math.abs(e) + 12
    }
    return e
};
WH.effectAverage = function(e, t, a, i) {
    var n = WH.convertScalingSpell.RandPropPoints;
    var r = e["scalingClass"];
    if (e["effectScalingClass"] && e["effectScalingClass"][i] != 0) {
        r = e["effectScalingClass"][i]
    }
    var o = e["coefficient"][i];
    var s = 1;
    var l = 0;
    if (o != 0 && r != 0) {
        if (e["scalesWithItemLevel"]) {
            if (r == WH.EFFECT_SCALING_CLASS_8) {
                l = n[a][0]
            } else if (r == WH.EFFECT_SCALING_CLASS_9) {
                l = n[a][2]
            } else {
                l = n[a][1]
            }
        } else {
            let e = WH.getSpellScalingIndexFromScalingClass(r);
            l = WH.convertScalingSpell.SV[t][e - 1]
        }
        if (r == WH.EFFECT_SCALING_CLASS_7 && e["aura"] && e["aura"][i] ==
            4) {
            s = WH.getCombatRatingMult(a, 12)
        }
        return o * l * s
    }
    return e["effectBasePoints"][i]
};
WH.convertScalingSpell = function(e, t, a, i, n, r) {
    var o = WH.convertScalingSpell.SpellInformation;
    if (!o || !o[t]) {
        return e
    }
    a = a - 1;
    if (e.effects == undefined) e.effects = {};
    if (!e.effects.hasOwnProperty(a + 1)) {
        e.effects[a + 1] = {}
    }
    var s = o[t];
    var l = 0;
    var c = WH.effectAverage(s, n, r, a);
    if (s["deltaCoefficient"][a] != 0) {
        var u = s["deltaCoefficient"][a];
        var p = Math.ceil(c - c * u / 2);
        var f = Math.floor(c + c * u / 2);
        if (i == 0) {
            l = (p + f) / 2
        } else if (i == 1) {
            l = p
        } else if (i == 2) {
            l = f
        }
    } else if (s["coefficient"][a] != 0) {
        l = c
    } else {
        l = s["effectBasePoints"][a]
    }
    l = Math.abs(l);
    var d = "avg";
    switch (parseInt(i)) {
        case 0:
        case 3:
            d = "avg";
            break;
        case 1:
            d = "min";
            break;
        case 2:
            d = "max";
            break;
        case 4:
            d = "pts";
            break;
        default:
            d = "avg"
    }
    var g = 5;
    var m = g;
    if (window.g_pageInfo && window.g_pageInfo.type == WH.Types
        .AZERITE_ESSENCE_POWER) {
        m = WH.Wow.Item.INVENTORY_TYPE_NECK
    }
    if (s.scalesWithItemLevel && s.appliesRatingAura && s.appliesRatingAura[
            a]) {
        l *= WH.getCombatRatingMult(r, m)
    }
    e.effects[a + 1][d] = l;
    return e
};
WH.getDataSource = function() {
    if (WH.isSet("g_pageInfo")) {
        switch (g_pageInfo.type) {
            case WH.Types.ITEM:
                if (WH.isSet("g_items")) {
                    return g_items
                }
                break;
            case WH.Types.SPELL:
                if (WH.isSet("g_spells")) {
                    return g_spells
                }
                break;
            case WH.Types.AZERITE_ESSENCE_POWER:
                if (WH.isSet("g_azeriteEssencePowers")) {
                    return g_azeriteEssencePowers
                }
                break;
            case WH.Types.PET_ABILITY:
                if (WH.isSet("g_petabilities")) {
                    return g_petabilities
                }
                break
        }
    }
    return []
};
WH.setJsonItemLevel = function(e, t, a) {
    if (a && a.scalingcategory - 11 > 0) {
        var i = a.maxlvlscaling ? Math.min(t, a.maxlvlscaling) : t;
        var n = WH.getSpellScalingValue(a.scalingcategory, i);
        for (var r = 1; r < 3; ++r) {
            var o = a["itemenchspell" + r];
            var s = a["itemenchtype" + r];
            var l = WH.statToJson[o];
            if (s == 5 && e[l]) {
                var c = a["damage" + r];
                if (c) {
                    e[l] = Math.round(n * c)
                }
            }
        }
        if (a.allstats) {
            for (var u in e) {
                e[u] = Math.round(n * a["damage1"])
            }
        }
    }
    if (!e.scadist || !e.scaflags) {
        return
    }
    e.bonuses = e.bonuses || {};
    var p = e.scaflags & 255,
        f = e.scaflags >> 8 & 255,
        d = (e.scaflags & 1 << 16) != 0,
        g = (e.scaflags & 1 << 17) != 0,
        m = (e.scaflags & 1 << 18) != 0,
        h;
    switch (p) {
        case 5:
        case 1:
        case 7:
        case 17:
            h = 7;
            break;
        case 3:
        case 12:
            h = 8;
            break;
        case 16:
        case 11:
        case 14:
            h = 9;
            break;
        case 15:
            h = 10;
            break;
        case 23:
        case 21:
        case 22:
        case 13:
            h = 11;
            break;
        default:
            h = -1
    }
    if (h >= 0) {
        for (var r = 0; r < 10; ++r) {
            var W = WH.convertScalingFactor(t, h, e.scadist, r, 1);
            if (W.n) {
                e[W.n] = W.v
            }
            e.bonuses[W.s] = W.v
        }
    }
    if (m) {
        e.splpwr = e.bonuses[45] = WH.convertScalingFactor(t, 6)
    }
    if (d) {
        switch (p) {
            case 3:
                e.armor = WH.convertScalingFactor(t, 11 + f);
                break;
            case 5:
                e.armor = WH.convertScalingFactor(t, 15 + f);
                break;
            case 1:
                e.armor = WH.convertScalingFactor(t, 19 + f);
                break;
            case 7:
                e.armor = WH.convertScalingFactor(t, 23 + f);
                break;
            case 16:
                e.armor = WH.convertScalingFactor(t, 28);
                break;
            case 14:
                e.armor = WH.convertScalingFactor(t, 29);
                break;
            default:
                e.armor = 0
        }
    }
    if (g) {
        var H = e.mledps ? "mle" : "rgd",
            v;
        switch (p) {
            case 23:
            case 21:
            case 22:
            case 13:
                e.dps = e[H + "dps"] = WH.convertScalingFactor(t, m ? 2 :
                0);
                v = .3;
                break;
            case 17:
                e.dps = e[H + "dps"] = WH.convertScalingFactor(t, m ? 3 :
                1);
                v = .2;
                break;
            case 15:
                e.dps = e[H + "dps"] = WH.convertScalingFactor(t, f == 19 ?
                    5 : 4);
                v = .3;
                break;
            default:
                e.dps = e[H + "dps"] = 0;
                v = 0
        }
        e.dmgmin = e[H + "dmgmin"] = Math.floor(e.dps * e.speed * (1 - v));
        e.dmgmax = e[H + "dmgmax"] = Math.floor(e.dps * e.speed * (1 + v))
    }
};
WH.getContentTuningLevels = function(e) {
    let t = (WH.contentTuningLevels || {}).keys || {};
    let a = Object.keys(t).find((function(a) {
        return t[a].includes(e)
    }));
    if (a !== undefined) {
        return {
            minLevel: WH.contentTuningLevels.values[a][0],
            maxLevel: WH.contentTuningLevels.values[a][1]
        }
    }
};
WH.scaleItemEnchantment = function(e, t) {
    var a = e.enchantment;
    if (e.scalinginfo && e.scalinginfo.scalingcategory - 11 > 0) {
        var i = a.match(/\d+/g);
        if (i) {
            var n = parseInt(e.scalinginfo.maxlvlscaling) ? Math.min(t,
                parseInt(e.scalinginfo.maxlvlscaling)) : t;
            var r = WH.getSpellScalingValue(e.scalinginfo.scalingcategory,
                n);
            for (var o = 0; o < i.length; ++o) {
                var s = e.scalinginfo["damage" + (o + 1)];
                if (s) {
                    a = a.replace(i[o], Math.round(r * s))
                }
            }
        }
    }
    return a
};
WH.getItemRandPropPointsType = function(e) {
    var t = e.slotbak ? e.slotbak : e.slot;
    switch (t) {
        case 1:
        case 4:
        case 5:
        case 7:
        case 15:
        case 17:
        case 20:
        case 25:
            return 0;
        case 2:
        case 9:
        case 11:
        case 16:
            return 2;
        case 3:
        case 6:
        case 8:
        case 10:
        case 12:
            return 1;
        case 13:
        case 14:
        case 21:
        case 22:
        case 23:
            return 3;
        case 26:
            if (e.subclass == 19) {
                return 3
            }
            return 0;
        case 28:
            return 4;
            break;
        default:
            return -1
    }
};
WH.scaleItemLevel = function(e, t) {
    let a = e.level;
    let i = WH.curvePoints;
    if (!i) {
        return a
    }
    let n = null;
    let r = null;
    let o = null;
    if (e.scadist) {
        let t = WH.getScalingDistributionCurve(e.scadist);
        if (t && t.curve) {
            r = t.minLevel;
            o = t.maxLevel;
            n = t.curve
        }
    } else {
        if (e.contenttuning) {
            let t = WH.getContentTuningLevels(e.contenttuning);
            if (t) {
                r = t.minLevel;
                o = t.maxLevel
            }
        }
        n = e.playercurve
    }
    if (n) {
        let e = t ? t : WH.maxLevel;
        if (r && e < r) {
            e = r
        }
        if (o && e > o) {
            e = o
        }
        let s = i[n];
        if (s && s.length > 0) {
            let t = -1;
            for (let a in s) {
                let i = s[a];
                if (i[1] >= e) {
                    t = a;
                    break
                }
            }
            let i = s[t != -1 ? t : s.length - 1];
            let n = null;
            let r = 0;
            if (t > 0) {
                n = s[t - 1];
                let a = i[1] - n[1];
                if (a > 0) {
                    let t = e - n[1];
                    let o = t / a;
                    let s = i[2] - n[2];
                    let l = o * s;
                    r = n[2] + l
                }
            } else {
                r = i[2]
            }
            if (r > 0) {
                a = Math.round(r)
            }
        }
    }
    return a
};
WH.findSparseKey = function(e, t) {
    if (e.hasOwnProperty(t)) {
        return t.toString()
    }
    return Object.keys(e).reduce((function(e, a) {
        let i = parseInt(a);
        return i > t || parseInt(e) > i ? e : a
    }), "0")
};
WH.applyStatModifications = function(e, t, a, i, n, r, o, s) {
    const l = WH.Wow.Item;
    var c = {};
    if (e.hasOwnProperty("level")) {
        c = WH.dO(e)
    } else {
        WH.cOr(c, e, "__")
    }
    if (n && n.length) {
        var u = false;
        for (var p = 0; p < n.length; ++p) {
            var f = n[p];
            if (f > 0 && WH.isSet("g_itembonuses") && g_itembonuses[f]) {
                var d = g_itembonuses[f];
                for (var g = 0; g < d.length; ++g) {
                    var m = d[g];
                    switch (m[0]) {
                        case 11:
                        case 13:
                            if (u === false || m[2] < u) {
                                c.scadist = m[1];
                                c.scadistbonus = f;
                                c.scadistbonustype = m[0];
                                c.contenttuning = m[3];
                                c.playercurve = m[4];
                                u = m[2]
                            }
                            break;
                        default:
                            break
                    }
                }
            }
        }
    }
    c.level = WH.scaleItemLevel(c, r);
    if (a == "pvp" && e.pvpUpgrade) {
        c.level += e.pvpUpgrade
    }
    if (c.subitems && c.subitems[t]) {
        for (var h in c.subitems[t].jsonequip) {
            if (!c.hasOwnProperty(h)) {
                c[h] = 0
            }
            c[h] += c.subitems[t].jsonequip[h]
        }
    }
    c.extraStats = [];
    if (n && n.length) {
        if (e.statsInfo) {
            c.statsInfo = {};
            for (var p in e.statsInfo) {
                c.statsInfo[p] = {
                    alloc: parseInt(e.statsInfo[p].alloc),
                    qty: e.statsInfo[p].qty,
                    socketMult: e.statsInfo[p].socketMult
                }
            }
        }
        var W = [0, 0, 0, 0, 2147483647, 2147483647, 2147483647,
        2147483647];
        var H = c.scadistbonus ? false : 0;
        let t = [24, 25];
        let a = 0;
        for (var p = 0; p < n.length; ++p) {
            var f = n[p];
            if (f > 0 && WH.isSet("g_itembonuses") && g_itembonuses[f]) {
                var d = g_itembonuses[f];
                for (var g = 0; g < d.length; ++g) {
                    var m = d[g];
                    if (m[0] == 25) {
                        m[0] = 2;
                        let e = c.statsInfo[t[a]];
                        if (e && e.alloc) {
                            m[2] = e.alloc
                        } else {
                            m[2] = 0
                        }
                        a = Math.min(a + 1, t.length - 1)
                    }
                    switch (m[0]) {
                        case 1:
                            if (!c.scadistbonus) {
                                c.level += m[1];
                                H = false
                            }
                            break;
                        case 2:
                            if (c.statsInfo) {
                                if (c.statsInfo.hasOwnProperty(m[1])) {
                                    c.statsInfo[m[1]].alloc += m[2]
                                } else {
                                    c.extraStats.push(m[1]);
                                    c.statsInfo[m[1]] = {
                                        alloc: parseInt(m[2]),
                                        qty: 0,
                                        socketMult: 0
                                    }
                                }
                            }
                            break;
                        case 3:
                            c.quality = parseInt(m[1]);
                            break;
                        case 4:
                            var v = m[1];
                            var T = m[2];
                            var b = 4;
                            var y = 4;
                            do {
                                if (T <= W[b]) {
                                    var S = v;
                                    v = W[b - 4];
                                    W[b - 4] = S;
                                    var w = T;
                                    T = W[b];
                                    W[b] = w
                                }++b;
                                --y
                            } while (y);
                            break;
                        case 5:
                            c.nameSuffix = WH.Wow.Item.getNameDescription(m[
                                1]) || c.nameSuffix;
                            break;
                        case 6:
                            var E = c.nsockets ? c.nsockets : 0;
                            c.nsockets = E + m[1];
                            for (var _ = E; _ < E + m[1]; ++_) {
                                c["socket" + (_ + 1)] = m[2]
                            }
                            break;
                        case 7:
                            break;
                        case 8:
                            c.reqlevel += m[1];
                            break;
                        case 14:
                            if (H !== false) {
                                H = c.level
                            }
                            break;
                        case 16:
                            c.bond = parseInt(m[1]);
                            break;
                        case 35:
                            c.limitcategory = parseInt(m[1]);
                        default:
                            break
                    }
                }
            }
        }
        if (H) {
            c.level = H;
            c.previewLevel = H
        }
        c.namedesc = c.namedesc ? c.namedesc : "";
        for (var g = 0; g < 4; ++g) {
            let e = WH.Wow.Item.getNameDescription(W[g]);
            if (e) {
                c.namedesc += (!c.namedesc ? "" : " ") + e;
                if (!g) {
                    c.namedesccolor = WH.Wow.Item.getNameDescriptionColor(W[
                        g])
                }
            }
        }
    }(function() {
        if (!s || !s.length || !c.statsInfo) {
            return
        }
        for (let t, a = 0; t = WH.Wow.Item.Stat.CRAFTING_STAT_FROM[
            a]; a++) {
            let i = s[a];
            if (!i) {
                continue
            }
            if (!c.statsInfo[t]) {
                continue
            }
            if (c.statsInfo[i]) {
                c.statsInfo[i].alloc += e.statsInfo[t].alloc
            } else {
                c.statsInfo[i] = c.statsInfo[t];
                c.extraStats.push(i)
            }
            delete c.statsInfo[t]
        }
    })();
    if (e.statsInfo && e.level && WH.applyStatModifications.ScalingData &&
        WH.applyStatModifications.ScalingData.AL.length > 1) {
        let t = WH.applyStatModifications.ScalingData.armor.total;
        let n = WH.applyStatModifications.ScalingData.armor.shield;
        let r = WH.applyStatModifications.ScalingData.armor.quality;
        let s = WH.applyStatModifications.ScalingData.SV;
        let u = WH.applyStatModifications.ScalingData.AL;
        let f = WH.applyStatModifications.ScalingData.socketCost;
        c.level = i ? i : a && e.upgrades && e.upgrades[a - 1] ? c.level + e
            .upgrades[a - 1] : c.level;
        var I = c.level - e.level;
        var M = Math.pow(1.15, I / 15);
        var k = WH.getItemRandPropPointsType(c);
        let d;
        var x = [];
        for (d = c.level; d >= 0; d--) {
            if (s.hasOwnProperty(d)) {
                x = s[d];
                break
            }
        }
        let g = 0;
        if (k != -1) {
            let e = 0;
            switch (c.quality) {
                case 5:
                case 4:
                    e = 0;
                    break;
                case 7:
                case 3:
                    e = 1;
                    break;
                case 2:
                    e = 2;
                    break;
                default:
                    break
            }
            let t = WH.findSparseKey(x, e);
            let a = WH.findSparseKey(x[t] || {}, k);
            g = (x[t] || {})[a] || 0
        }
        let m = WH.findSparseKey(f, d);
        let h = f[m] || 0;
        for (var p in WH.statToJson) {
            var C = WH.statToJson[p];
            if (c[C] || c.statsInfo && c.statsInfo[p]) {
                var L = 0;
                var A = 0;
                if (c.statsInfo.hasOwnProperty(p)) {
                    L = parseFloat(c.statsInfo[p].socketMult);
                    A = parseInt(c.statsInfo[p].alloc)
                }
                var R = Math.round(L * h);
                if (A && (g > 0 || c.contenttuning > 0)) {
                    c[C] = A * 1e-4 * g - R
                } else {
                    c[C] = (c[C] + R) * M - R
                }
                if (C == "sta") {
                    c[C] = c[C] * WH.getStaminaRatingMult(c.level, c.slot ||
                        g_items[c.id].slot)
                } else if (o && WH.inArray(WH.applyStatModifications
                        .BASE_STATS, p) < 0) {
                    c[C] = c[C] * WH.getCombatRatingMult(c.level, c.slot ||
                        g_items[c.id].slot)
                } else if (C === "corruption" || C === "corruptionres") {
                    c[C] = A
                }
                switch (C) {
                    case "agistrint":
                        c["agi"] = c["str"] = c["int"] = c[C];
                        break;
                    case "agistr":
                        c["agi"] = c["str"] = c[C];
                        break;
                    case "agiint":
                        c["agi"] = c["int"] = c[C];
                        break;
                    case "strint":
                        c["str"] = c["int"] = c[C];
                        break;
                    default:
                        break
                }
            }
        }
        if (c["armor"]) {
            let e = c.quality === l.QUALITY_HEIRLOOM ? l.QUALITY_RARE : c
                .quality;
            let a = c.subclass === l.ARMOR_SUBCLASS_CLOAKS ? l
                .ARMOR_SUBCLASS_CLOTH : c.subclass;
            if (l.isBodyArmor(l.CLASS_ARMOR, a)) {
                let i = WH.findSparseKey(r, c.level);
                let n = WH.findSparseKey(r[i] || {}, e);
                let o = (r[i] || {})[n] || 0;
                let s = WH.findSparseKey(t, c.level);
                let l = WH.findSparseKey(t[s] || {}, a - 1);
                let p = (t[s] || {})[l] || 0;
                let f = u[c.slot][a - 1];
                c["armor"] = Math.floor(p * o * f + .5)
            }
            if (c.subclass === l.ARMOR_SUBCLASS_SHIELDS) {
                let t = WH.findSparseKey(n, c.level);
                let a = WH.findSparseKey(n[t] || {}, e);
                c["armor"] = Math.round((n[t] || {})[a] || 0)
            }
        }
        if (c["dps"]) {
            var P = ["dps", "mledps", "rgddps"];
            var N = ["dmgmin1", "mledmgmin", "rgddmgmin", "dmgmax1",
                "mledmgmax", "rgddmgmax"
            ];
            var O = WH.getEffectiveWeaponDamage(c, false);
            var B = WH.getEffectiveWeaponDamage(c, true);
            O = Math.floor(Math.max(1, O));
            B = Math.max(1, B);
            if (!WH.isRetailTree()) {
                O = c.damagemin || c.dmgmin1 || O;
                B = c.damagemax || c.dmgmax1 || B
            }
            var D = (O + B) / 2 / c.speed;
            var F = D >= 1e3 ? 0 : WH.isRetailTree() ? 1 : 2;
            D = parseFloat(D.toFixed(F));
            for (var p in P) {
                if (c[P[p]]) {
                    c[P[p]] = D
                }
            }
            for (var p in N) {
                if (c[N[p]]) {
                    if (N[p].indexOf("max") != -1) {
                        c[N[p]] = B
                    } else {
                        c[N[p]] = O
                    }
                }
            }
        }
    }
    return c
};
WH.applyStatModifications.BASE_STATS = [4, 3, 5, 71, 72, 73, 74, 7, 1, 0, 8, 9,
    2, 10
];
WH.getItemDamageValue = function(e, t, a) {
    let i = WH.applyStatModifications.ScalingData.DV;
    if (i && i[e]) {
        let n = 7 * a + t;
        return i[e][WH.findSparseKey(i[e], n)]
    }
    return 0
};
WH.getEffectiveWeaponDamage = function(e, t) {
    var a = e.level;
    var i = e.subclass;
    var n = e.quality;
    var r = e.slotbak ? e.slotbak : e.slot;
    var o = 0;
    var s = false;
    var l = e.flags2 & 512;
    if (e.classs != 2) {
        return 0
    }
    if (n > 7) {
        return 0
    }
    if (n == 7) {
        n = 3
    }
    if (r > 22) {
        if (r == 24) {
            o = 0;
            s = true
        }
        if (!s && (r <= 24 || r > 26)) {
            s = true
        }
    } else {
        if (r == 21 || r == 22 || r == 13) {
            if (!l) {
                o = WH.getItemDamageValue(a, n, 0)
            } else {
                o = WH.getItemDamageValue(a, n, 1)
            }
            s = true
        }
        if (!s && r != 15) {
            if (r != 17) {
                s = true
            } else {
                if (!l) {
                    o = WH.getItemDamageValue(a, n, 2)
                } else {
                    o = WH.getItemDamageValue(a, n, 3)
                }
                s = true
            }
        }
    }
    if (!s && i >= 2) {
        if (i == 2 || i == 3 || i == 18) {
            if (!l) {
                o = WH.getItemDamageValue(a, n, 2)
            } else {
                o = WH.getItemDamageValue(a, n, 3)
            }
            s = true
        }
        if (!s && i == 19) {
            o = WH.getItemDamageValue(a, n, 1)
        }
    }
    if (o > 0) {
        var c = e.dmgrange || 0;
        if (!t) {
            return o * e.speed * (1 - c / 2)
        } else {
            return Math.floor(o * e.speed * (1 + c / 2) + .5)
        }
    }
    return 0
};
WH.getJsonReforge = function(e, t) {
    if (!t) {
        if (!WH.reforgeStats) {
            return []
        }
        e.__reforge = {};
        e.__reforge.all = [];
        for (var t in WH.reforgeStats) {
            var a = WH.getJsonReforge(e, t);
            if (a.amount) {
                e.__reforge.all.push(a)
            }
        }
        return e.__reforge.all
    }
    if (!WH.reforgeStats || !WH.reforgeStats[t]) {
        return {}
    }
    e.__statidx = {};
    for (var i in e) {
        if (WH.individualToGlobalStat[WH.jsonToStat[i]]) {
            e.__statidx[WH.individualToGlobalStat[WH.jsonToStat[i]]] = e[i]
        } else {
            e.__statidx[WH.jsonToStat[i]] = e[i]
        }
    }
    if (!e.__reforge) {
        e.__reforge = {}
    }
    var a = e.__reforge[t] = WH.dO(WH.reforgeStats[t]);
    e.__reforge[t].amount = Math.floor(a.v * (e.__statidx[a.i1] && !e
        .__statidx[a.i2] ? e.__statidx[a.i1] : 0));
    return e.__reforge[t]
};
WH.getJsonItemEnchantMask = function(e) {
    if (e.classs == 2 && e.subclass == 19) {
        return 1 << 21 - 1
    }
    return 1 << e.slot - 1
};
WH.getArtifactKnowledgeMultiplier = function(e) {
    let t = WH.Tooltip.ARTIFACT_KNOWLEDGE_MULTIPLIERS || {};
    let a = WH.findSparseKey(t, e);
    return t[a] || 1
};
WH.getCurveValue = function(e, t) {
    var a;
    if (!WH.curvePoints || !(a = WH.curvePoints[e])) {
        return undefined
    }
    var i = a[0][1];
    var n = a[0][2];
    if (i > t) {
        return n
    }
    for (var r = 0, o; o = a[r]; r++) {
        if (t == o[1]) {
            return o[2]
        }
        if (t < o[1]) {
            return (o[2] - n) / (o[1] - i) * (t - i) + n
        }
        i = o[1];
        n = o[2]
    }
    return n
};
WH.setItemModifications = function(e, t, a, i, n, r, o) {
    if (!WH.isSet("g_items") || !g_items[t] || !g_items[t].jsonequip) {
        return e
    }
    if (!n) {
        n = WH.maxLevel
    }
    a = a ? a.split(":") : null;
    var s = g_items[t].bonusesData;
    var l = 0;
    var c = a ? a.indexOf("u") : -1;
    if (s && c != -1) {
        l = a[c + 1];
        a.splice(c, 1)
    }
    if (!r) {
        r = WH.Timewalking.getGearIlvlByStringId(i) || 0
    }
    i = !r ? i : null;
    var u = WH.applyStatModifications(g_items[t].jsonequip, 0, i, r, a, n,
        undefined, o);
    if (!u.name && g_items[t].hasOwnProperty("name_" + Locale.getName())) {
        u.name = g_items[t]["name_" + Locale.getName()];
        u.quality = g_items[t].quality
    }
    if (l) {
        var p = WH.bonusesBtnGetContextBonusId(a);
        var f = s[p].sub[l].sub;
        for (var d in f) {
            var g = WH.applyStatModifications(g_items[t].jsonequip, 0, i, r,
                [p, d]);
            for (var m in g.statsInfo) {
                var h = g[WH.statToJson[m]];
                if (u.statsInfo[m]) {
                    if (typeof u[WH.statToJson[m]] == "number" || !u[WH
                            .statToJson[m]]) {
                        var W = u[WH.statToJson[m]] ? u[WH.statToJson[m]] :
                            h;
                        u[WH.statToJson[m]] = {};
                        u[WH.statToJson[m]]["min"] = W;
                        u[WH.statToJson[m]]["max"] = W
                    }
                    var H = u[WH.statToJson[m]]["min"];
                    var v = u[WH.statToJson[m]]["max"];
                    if (h < H) {
                        u[WH.statToJson[m]]["min"] = h
                    } else if (h > v) {
                        u[WH.statToJson[m]]["max"] = h
                    }
                }
            }
        }
    }
    e = e.replace(/(<!--ilvl-->)\d+\+?/, (function(e, t) {
        return t + u.level + (u.previewLevel ? "+" : "")
    }));
    let T = false;
    let b = 1;
    let y = WH.maxLevel;
    if (u.scadist) {
        let e = WH.getScalingDistributionCurve(u.scadist);
        if (e && e.maxLevel) {
            T = true;
            b = e.minLevel || 1;
            y = e.maxLevel
        }
    } else if (u.contenttuning) {
        let e = WH.getContentTuningLevels(u.contenttuning);
        if (e) {
            T = true;
            b = e.minLevel;
            y = e.maxLevel
        }
    } else if (u.scadistbonus && u.scadistbonustype === 13 && u
        .playercurve) {
        let e = WH.curvePoints[u.playercurve];
        b = e[0][1];
        y = e[e.length - 1][1];
        T = true
    }
    if (T) {
        n = n && n <= y ? n : y;
        e = e.replace(/(<!--lvl-->)\d+/g, (function(e, t) {
            return t + (n && n <= y ? n : y)
        }));
        e = e.replace(/(<!--minlvl-->)\d+/, (function(e, t) {
            return t + b
        }));
        e = e.replace(/(<!--maxlvl-->)\d+/, (function(e, t) {
            return t + y
        }));
        let a = false;
        e = e.replace(/<!--i\?(\d+):(\d+):(\d+):(\d+)(?::(\d+):(\d+))?/, (
            function(e, t, i, r, o, s, l) {
                a = true;
                return "\x3c!--i?" + t + ":" + b + ":" + y + ":" +
                    n + ":" + (u.scadist || u.contenttuning) + ":" +
                    (l || 0)
            }));
        if (!a) {
            e += "\x3c!--i?" + t + ":" + b + ":" + y + ":" + n + ":" + (u
                .scadist || u.contenttuning) + ":0--\x3e"
        }
        e = e.replace(/(<!--huindex-->)\d+/, (function(e, t) {
            let a = 0;
            if (u.scadistbonus && u.heirloombonuses) {
                for (let e = 0, t; t = u.heirloombonuses[
                    e]; e++) {
                    if (parseInt(u.scadistbonus) === t) {
                        a = e + 1;
                        break
                    }
                }
            }
            return t + a
        }))
    } else {
        e = e.replace(/<!--i\?(\d+):(\d+):(\d+):(\d+)(?::(\d+):(\d+))?/, (
            function(e, t, a, i, r, o, s) {
                return "\x3c!--i?" + t + ":" + a + ":" + i + ":" + (
                    n ? n : i)
            }))
    }
    var S;
    if (S = WH.ge("sl" + t)) {
        S.style.display = T ? "" : "none"
    }
    e = e.replace(/(<!--pvpilvl-->)\d+/, (function(e, t) {
        return t + (u.level + (i != "pvp" ? u.pvpUpgrade : 0))
    }));
    e = e.replace(/(<!--ilvldelta-->)\d+/, (function(e, t) {
        var a = 1718;
        var i = Math.floor(WH.getCurveValue(a, u.level) || 2);
        return t + i
    }));
    e = e.replace(/(<!--rlvl-->)\d+/, (function(e, t) {
        return t + u.reqlevel
    }));
    e = e.replace(/(<!--uindex-->)\d+/, (function(e, t) {
        return i && i != "pvp" ? t + i : e
    }));
    var w = typeof u.dmgrange != "undefined" && u.dmgrange;
    var E = new RegExp("(\x3c!--dmg--\x3e)[\\d,]+" + (w ? "(\\D*?)[\\d,]+" :
        "") + "");
    e = e.replace(E, (function(e, t, a) {
        return t + WH.numberFormat(u.dmgmin1) + (w ? a + WH
            .numberFormat(u.dmgmax1) : "")
    }));
    e = e.replace(/(<!--dps-->\D*?)([\d,]+(?:\.\d+)?)/, (function(e, t) {
        var a = u.dps >= 1e3 ? 0 : WH.isRetailTree() ? 1 : 2;
        return t + (u.dps ? WH.numberFormat(u.dps.toFixed(a)) :
            "0")
    }));
    e = e.replace(/(<!--amr-->)\d+/, (function(e, t) {
        return t + u.armor
    }));
    var I = WH.getCombatRatingMult(u.level, g_items[t].slot);
    e = function(e) {
        let t = WH.ce("div", {
            innerHTML: e
        });
        WH.qsa("span", t).forEach((function(e) {
            let t;
            let a;
            let i;
            let n;
            e.childNodes.forEach((function(e) {
                if (e.nodeType === Node
                    .COMMENT_NODE) {
                    let r;
                    if (r = (e.nodeValue || "")
                        .match(/^stat(\d+)$/)) {
                        t = parseInt(r[1]);
                        i = e
                    }
                    if (r = (e.nodeValue || "")
                        .match(/^rtg(\d+)$/)) {
                        a = parseInt(r[1]);
                        n = e
                    }
                }
            }));
            if (t === undefined && a === undefined) {
                return
            }
            let r = false;
            if (a) {
                let e = u[WH.statToJson[a]] ? u[WH
                    .statToJson[a]] : 0;
                let t = e < 0 ? "-" : "+";
                if (e) {
                    let t = Math.round((l && e.min ? e.min :
                        e) * I);
                    let a = Math.round((l && e.max ? e.max :
                        e) * I);
                    e = WH.numberLocaleFormat(t != a ? t +
                        "-" + a : t)
                } else {
                    r = true;
                    e = 0
                }
                let i = n.previousSibling;
                if (i && i.nodeType === Node.TEXT_NODE) {
                    i.nodeValue = i.nodeValue.replace(
                        /[-+]$/, t)
                }
                let o = n.nextSibling;
                if (o && o.nodeType === Node.TEXT_NODE) {
                    o.nodeValue = o.nodeValue.replace(
                        /[-\d\.,]+/, e)
                }
            } else {
                let e = u[WH.statToJson[t]] ? u[WH
                    .statToJson[t]] : 0;
                if (e) {
                    let t = Math.round(l && e.min ? e.min :
                        e);
                    let a = Math.round(l && e.max ? e.max :
                        e);
                    e = (t > 0 ? "+" : "-") + WH
                        .numberLocaleFormat(t != a ? t +
                            "-" + a : t)
                } else {
                    r = true;
                    e = "+0"
                }
                let a = i.nextSibling;
                if (a && a.nodeType === Node.TEXT_NODE) {
                    a.nodeValue = a.nodeValue.replace(
                        /[-+][-\d\.,]+/, e)
                }
            }
            if (r) {
                WH.displayNone(e);
                let t = e.nextSibling;
                while (t) {
                    if (t.nodeType === Node.ELEMENT_NODE) {
                        if (t.nodeName.toLowerCase() ===
                            "br") {
                            t.parentNode.replaceChild(
                                document.createComment(
                                    "br"), t)
                        }
                        break
                    }
                    t = t.nextSibling
                }
            } else {
                WH.displayDefault(e)
            }
        }));
        return t.innerHTML
    }(e);
    if (u.extraStats && u.extraStats.length) {
        e = e.replace(/<!--re--><span[^<]*?<\/span>(<br \/>)?/, "");
        var M = WH.applyStatModifications.BASE_STATS;
        e = e.replace(/<!--ebstats-->/, (function(e) {
            var t = "";
            for (var a = 0; a < u.extraStats.length; ++a) {
                var i = u.extraStats[a];
                if (M.indexOf(i) == -1) {
                    continue
                }
                var n = "$1$2 " + (WH.statToJson && WH
                    .statToJson[i] && WH.Wow.Item.Stat
                    .jsonToName(WH.statToJson[i]) ||
                    "Unknown");
                var r = WH.statToJson && WH.statToJson[i] ? u[WH
                    .statToJson[i]] : 0;
                var o = Math.round((l && r.min ? r.min : r) *
                I);
                var s = Math.round((l && r.max ? r.max : r) *
                I);
                var c = WH.numberLocaleFormat(o != s ? o + "-" +
                    s : o);
                t += "<br /><span>\x3c!--stat" + i + "--\x3e" +
                    WH.sprintf(n, o < 0 ? "-" : "+", c) +
                    "</span>"
            }
            return t + e
        }));
        e = e.replace(/<!--egstats-->/, (function(e) {
            var t = "";
            for (var a = 0; a < u.extraStats.length; ++a) {
                var i = u.extraStats[a];
                if (M.indexOf(i) != -1) {
                    continue
                }
                var n = I;
                var r = "q2";
                switch (WH.statToJson[i]) {
                    case "corruption":
                        r = "stat-corruption";
                        n = 1;
                        break;
                    case "corruptionres":
                        r = "q6";
                        n = 1;
                        break
                }
                var o = "$1$2 " + (WH.statToJson && WH
                    .statToJson[i] && WH.Wow.Item.Stat
                    .jsonToName(WH.statToJson[i]) ||
                    "Unknown");
                var s = WH.statToJson && WH.statToJson[i] ? u[WH
                    .statToJson[i]] : 0;
                var c = Math.round((l && s.min ? s.min : s) *
                n);
                var p = Math.round((l && s.max ? s.max : s) *
                n);
                var f = WH.numberLocaleFormat(c != p ? c + "-" +
                    p : c);
                var d = WH.sprintf("\x3c!--rtg$1--\x3e$2", i,
                f);
                var g = "";
                if (WH.statToRating && WH.statToRating[i]) {
                    g = WH.sprintf(
                        "&nbsp;<small>(\x3c!--rtg%$1--\x3e0&nbsp;@&nbsp;L$2" +
                        WH.maxLevel + ")</small>", i, l ?
                        "" : "\x3c!--lvl--\x3e")
                }
                var m = "";
                if (i == 50) {
                    m = "\x3c!--stat%d--\x3e"
                }
                if (i == 64) {
                    o = o.substr(5);
                    g = ""
                }
                t += '<br /><span class="' + r + '">' + m + WH
                    .sprintf(o, c >= 0 ? "+" : "-", d) + g +
                    "</span>"
            }
            return t + e
        }))
    }
    e = e.replace(/(<!--nstart-->)(.*)(<!--nend-->)/, (function(e, t, a,
    i) {
        var n = u.quality;
        var r = u.name;
        var o = u.nameSuffix ? " " + u.nameSuffix : "";
        return t + WH.sprintf('<b class="q$1">$2</b>', n, r +
            o) + i
    }));
    e = e.replace(/(<!--ndstart-->)(.*)(<!--ndend-->)/, (function(e, t, a,
        i) {
        if (!u.namedesc) {
            return t + i
        }
        if (!u.namedesccolor) {
            return e
        }
        var n = parseInt(u.namedesccolor).toString(16);
        while (n.length < 6) {
            n = "0" + n
        }
        return t + WH.sprintf(
            '<br /><span style="color: $1">$2</span>', "#" +
            n, u.namedesc) + i
    }));
    var k = g_items[t].jsonequip.nsockets | 0;
    if (!k && u.nsockets || k && u.nsockets > k) {
        e = e.replace(/<!--ps-->(<br(?: \/)?>)?/, (function(e, t) {
            var a = "";
            for (var i = k; i < u.nsockets; ++i) {
                if (!u["socket" + (i + 1)]) {
                    continue
                }
                var n = u["socket" + (i + 1)];
                var r = "socket-unknown";
                var o = 81;
                var s = n;
                switch (n) {
                    case 1:
                        r = "socket-meta";
                        o = 81;
                        s = 1;
                        break;
                    case 2:
                        r = "socket-red";
                        o = 81;
                        s = 2;
                        break;
                    case 3:
                        r = "socket-yellow";
                        o = 81;
                        s = 3;
                        break;
                    case 4:
                        r = "socket-blue";
                        o = 81;
                        s = 4;
                        break;
                    case 5:
                        r = "socket-hydraulic";
                        o = 81;
                        s = 5;
                        break;
                    case 6:
                        r = "socket-cogwheel";
                        o = 81;
                        s = 6;
                        break;
                    case 7:
                        r = "socket-prismatic";
                        o = 81;
                        s = 9;
                        break;
                    case 8:
                        r = "socket-relic-iron";
                        o = 225;
                        s = 64;
                        break;
                    case 9:
                        r = "socket-relic-blood";
                        o = 225;
                        s = 128;
                        break;
                    case 10:
                        r = "socket-relic-shadow";
                        o = 225;
                        s = 256;
                        break;
                    case 11:
                        r = "socket-relic-fel";
                        o = 225;
                        s = 512;
                        break;
                    case 12:
                        r = "socket-relic-arcane";
                        o = 225;
                        s = 1024;
                        break;
                    case 13:
                        r = "socket-relic-frost";
                        o = 225;
                        s = 2048;
                        break;
                    case 14:
                        r = "socket-relic-fire";
                        o = 225;
                        s = 4096;
                        break;
                    case 15:
                        r = "socket-relic-water";
                        o = 225;
                        s = 8192;
                        break;
                    case 16:
                        r = "socket-relic-life";
                        o = 225;
                        s = 16384;
                        break;
                    case 17:
                        r = "socket-relic-storm";
                        o = 225;
                        s = 32768;
                        break;
                    case 18:
                        r = "socket-relic-holy";
                        o = 225;
                        s = 65536;
                        break;
                    case 19:
                        r = "socket-red";
                        o = 81;
                        s = 10;
                        break;
                    case 20:
                        r = "socket-yellow";
                        o = 81;
                        s = 11;
                        break;
                    case 21:
                        r = "socket-blue";
                        o = 81;
                        s = 12;
                        break;
                    case 22:
                        r = "socket-domination";
                        o = 81;
                        s = 13;
                        break;
                    default:
                        break
                }
                var l = WH.sprintf(
                    '<a href="/items/gems?filter=$1;$2;0" class="$3 q0">',
                    o, s, r);
                l += g_socket_names[n] ? g_socket_names[n] :
                    g_gem_types[n] ? WH.sprintf(WH.TERMS
                        .emptyrelicslot_format.replace("%s",
                            "$1"), g_gem_types[n]) :
                    "Unknown Socket";
                l += "</a>";
                a += "<br>" + l
            }
            return (k == 0 ? "<br>" : "") + a + "<br><br>"
        }))
    }
    if (a && WH.Tooltip.BONUS_ITEM_EFFECTS) {
        e = e.replace(/<!--itemEffects:(\d)-->/, (function(e, t) {
            let i = u.extraStats && u.extraStats.indexOf(
                parseInt(WH.jsonToStat.corruption)) >= 0;
            let n = "";
            for (let e, t = 0; e = a[t]; t++) {
                let t = WH.Tooltip.BONUS_ITEM_EFFECTS[e] || [];
                for (let e, a = 0; e = t[a]; a++) {
                    let t = WH.Tooltip.ITEM_EFFECT_TOOLTIP_HTML[
                        e];
                    if (t) {
                        if (i) {
                            t = t.replace(/\b(class=")q2\b/g,
                                "$1stat-corruption")
                        }
                        n += (n ? "<br>" : "") + t
                    }
                }
            }
            return n + (n && t ? "<br>" : "") + e
        }))
    }
    if (WH.applyStatModifications && WH.convertScalingSpell
        .SpellInformation) {
        var x;
        var C = {
            effects: {}
        };
        var L =
            /(<!--pts(\d):(\d):(\d+(?:\.\d+)?):(\d+)(:\d+(?:\.\d+)?)?(:crm)?-->(?:<!--rtg\d+-->)?)(\d+(?:\.\d+)?)(<!---->(%?))?/g;
        while ((x = L.exec(e)) !== null) {
            var A = x[2];
            var R = x[3];
            var P = x[5];
            if (P <= 0) {
                continue
            }
            C[P] = C[P] || {};
            let e = u.scadistbonus && u.scadistbonustype === 13 ? g_items[t]
                .level : u.level;
            WH.cO(C[P], WH.convertScalingSpell(C[P], P, A, R, n, e))
        }
        e = WH.adjustSpellPoints(e, C, u.level, g_items[t].jsonequip.slot)
    }
    let N = WH.Timewalking.getCharLevelFromIlvl(r) || 0;
    if (N) {
        e = e.replace(
            /<!--ee(\d+):(\d+):(\d+):(\d+):(\d+):(\d+)-->([^<]*)<\/span>/gi,
            (function(e, t, a, i, n, r, o, s) {
                var l = {
                    enchantment: s,
                    scalinginfo: {
                        scalingcategory: t,
                        minlvlscaling: a,
                        maxlvlscaling: i,
                        damage1: n / 1e3,
                        damage2: r / 1e3,
                        damage3: o / 1e3
                    }
                };
                var c = WH.scaleItemEnchantment(l, N);
                return "\x3c!--ee--\x3e" + c + "</span>"
            }))
    }
    e = e.replace(/(<!--rtg%(\d+)-->)([\.,0-9]+)%?/g, (function(t, a, i,
    r) {
        _ = e.match(new RegExp("\x3c!--rtg" + i +
            "--\x3e([\\d\\.,]+)(-[\\d\\.,]+)?"));
        if (!_) {
            return t
        }
        if (_[2]) {
            _[2] = _[2].replace(/\D/, "")
        }
        _[1] = _[1].replace(/\D/, "");
        var o = _[2] ? (Math.abs(parseInt(_[2])) + parseInt(_[
            1])) / 2 : _[1];
        return a + (_[2] ? "~" : "") + Math.round(WH
            .convertRatingToPercent(n ? n : WH.maxLevel, i,
                o) * 100) / 100 + (i != 49 ? "%" : "")
    }));
    e = e.replace(/<!--bo-->(<br(?: \/)?>)?/, (function(e, t) {
        let a = "";
        if (u.bond) {
            switch (u.bond) {
                case 1:
                    a = WH.GlobalStrings.ITEM_BIND_ON_PICKUP;
                    break;
                case 2:
                    a = WH.GlobalStrings.ITEM_BIND_ON_EQUIP;
                    break;
                case 3:
                    a = WH.GlobalStrings.ITEM_BIND_ON_USE;
                    break;
                case 4:
                case 5:
                    a = WH.GlobalStrings.ITEM_BIND_QUEST;
                    break;
                default:
                    a = WH.TERMS.unknownBindType_stc;
                    break
            }
        }
        if (a != "") {
            a = "<br />" + a
        }
        return "\x3c!--bo--\x3e" + a + t
    }));
    e = e.replace(/<!--bo-->/, (function(e) {
        if (!a) {
            return e
        }
        let t = WH.getPageData("wow.item.bonuses.upgrades") ||
            {};
        let i = "";
        a.some((function(e) {
            if (t[e]) {
                let a = WH.ce("div");
                WH.ae(a, WH.ce("br"));
                WH.ae(a, WH.ce("span", {
                    className: "q"
                }, WH.ct(WH.Strings
                    .sprintf(WH
                        .GlobalStrings
                        .ITEM_UPGRADE_TOOLTIP_FORMAT,
                        t[e][0], t[e][1]
                        ))));
                i = a.innerHTML;
                return true
            }
        }));
        return i + e
    }));
    e = e.replace(/<!--ue-->/, (function() {
        if (!u.limitcategory) {
            return ""
        }
        let e = "";
        let t = (WH.getPageData(
            "wow.item.bonusLimitCategoryNames") || {})[u
            .limitcategory];
        if (t) {
            let a = t.uniqueEquipped ? WH.GlobalStrings
                .ITEM_UNIQUE_EQUIPPABLE : WH.GlobalStrings
                .ITEM_UNIQUE;
            e = WH.Strings.escapeHtml(a + WH.TERMS.colon_punct +
                WH.Strings.sprintf(WH.TERMS.parens_format, t
                    .name, t.maxCount));
            e = "<br />" + e
        }
        return e
    }));
    (function() {
        var a = WH.ce("div");
        a.innerHTML = e;
        a.querySelectorAll('a[href*="/spell="]').forEach((function(e) {
            var t = e.dataset.wowhead || "";
            t = t.replace(/(^|&)i?lvl=\d+/g, "");
            if (n) {
                t += (t ? "&" : "") + "lvl=" + n
            }
            if (u.level) {
                t += (t ? "&" : "") + "ilvl=" + u.level
            }
            e.dataset.wowhead = t
        }));
        let i = WH.getPageData("item.sellprice." + t);
        let r = a.querySelector(".whtt-sellprice");
        if (i && r) {
            let e = r.firstChild;
            WH.ee(r);
            WH.ae(r, e);
            let t = i.itemLevel;
            let a = t[u.level] || t[Math.max.apply(null, Object.keys(
                t))];
            let n = i.quality[u.quality] || 0;
            let o = Math.floor(i.base * a * n);
            WH.ae(r, WH.Wow.buildMoney({
                copper: o
            }))
        }
        e = a.innerHTML
    })();
    return e
};
WH.setTooltipLevel = function(e, t, a) {
    var i = typeof e;
    if (i == "number") {
        var n = WH.getDataSource();
        if (n[e] && n[e][(a ? "buff_" : "tooltip_") + Locale.getName()]) {
            e = n[e][(a ? "buff_" : "tooltip_") + Locale.getName()]
        } else {
            return e
        }
    } else if (i != "string") {
        return e
    }
    e = e.replace(
        /<!--(gem|ee)(\d+):(\d+):(\d+):(\d+):(\d+):(\d+)-->([^<]*)<\/span>/gi,
        (function(e, a, i, n, r, o, s, l, c) {
            var u = {
                enchantment: c,
                scalinginfo: {
                    scalingcategory: i,
                    minlvlscaling: n,
                    maxlvlscaling: r,
                    damage1: o / 1e3,
                    damage2: s / 1e3,
                    damage3: l / 1e3
                }
            };
            var p = WH.scaleItemEnchantment(u, t);
            return "\x3c!--" + a + "--\x3e" + p + "</span>"
        }));
    var r = e.match(/<!--i?\?([0-9-:]*)-->/);
    var o;
    var s;
    if (r) {
        o = r[1].split(":").map(Number);
        t = Math.min(o[2], Math.max(o[1], t));
        s = o[4] || 0
    }
    if (s) {
        if (!e.match(/<!--pts\d:\d:\d+(?:\.\d+)?:\d+-->/g) && !(s < 0) && !
            a) {
            e = WH.setItemModifications(e, o[0], null, null, t);
            WH.updateItemStringLink.call(this)
        } else {
            if (s > 0) {
                if (!o[7] && WH.isSet("g_pageInfo") && g_pageInfo.type ==
                    3 && g_items[g_pageInfo.typeId] && g_items[g_pageInfo
                        .typeId].quality != 7) {
                    t = Math.min(g_items[g_pageInfo.typeId].reqlevel, t)
                }
                var l = {
                    scadist: s
                };
                e = e.replace(/<!--cast-->\d+\.\d+/, "\x3c!--cast--\x3e" + l
                    .cast);
                var c = /<!--pts([0-9-:]*)-->/g;
                var u = c.exec(e);
                l.effects = true;
                while (u != null) {
                    var p = u[1].split(":").map(Number);
                    var f = p[0];
                    var d = p[1];
                    var g = p[3];
                    if (g > 0) {
                        if (l[g] == undefined) {
                            l[g] = {};
                            l[g].effects = {}
                        }
                        WH.cO(l[g], WH.convertScalingSpell(l[g], g, f, d, t,
                            t))
                    }
                    u = c.exec(e)
                }
                if (l.effects) {
                    var m = 5;
                    var h = m;
                    if (window.g_pageInfo && window.g_pageInfo.type == WH
                        .Types.AZERITE_ESSENCE_POWER) {
                        h = WH.Wow.Item.INVENTORY_TYPE_NECK
                    }
                    e = WH.adjustSpellPoints(e, l, t, h);
                    if (this.modified) {
                        for (var W in this.modified[1]) {
                            var H = this.modified[1][W];
                            for (var v = 0; v < H.length; ++v) {
                                H[v][0] = WH.adjustSpellPoints(H[v][0], l,
                                    t, h);
                                H[v][1] = WH.adjustSpellPoints(H[v][1], l,
                                    t, h)
                            }
                        }
                    }
                }
            } else {
                var T = -s;
                var b = WH.getSpellScalingValue(T, t);
                for (var y = 0; y < 3; ++y) {
                    var S = o[5 + y] / 1e3;
                    e = e.replace(new RegExp("\x3c!--gem" + (y + 1) +
                            "--\x3e(.+?)<"), "\x3c!--gem" + (y + 1) +
                        "--\x3e" + Math.round(b * S) + "<")
                }
            }
        }
    }
    e = e.replace(
        /<!--ppl(\d+):(\d+):(\d+):(\d+):(\d+)(?::(1))?-->\s*\d+/gi, (
            function(e, a, i, n, r, o, s) {
                var l = s ? Math.ceil : Math.floor;
                return "\x3c!--ppl" + a + ":" + i + ":" + n + ":" + r +
                    ":" + o + "--\x3e" + l(parseInt(r) + (Math.min(Math
                        .max(t, i), n) - i) * o / 100)
            }));
    e = e.replace(/(<!--rtg%(\d+)-->)([\.0-9]+)%?/g, (function(a, i, n, r) {
        _ = e.match(new RegExp("\x3c!--rtg" + n +
            "--\x3e(\\d+)"));
        if (!_) {
            return a
        }
        return i + Math.round(WH.convertRatingToPercent(t, n, _[
            1]) * 100) / 100 + (n != 49 ? "%" : "")
    }));
    e = e.replace(/(<!--i?\?\d+:\d+:\d+:)\d+/g, "$1" + t);
    e = e.replace(/<!--lvl-->\d+/g, "\x3c!--lvl--\x3e" + t);
    return e
};
WH.getSpellScalingValue = function(e, t) {
    var a = WH.convertScalingSpell ? WH.convertScalingSpell.SV : null;
    if (!a) {
        return 0
    }
    return a[t][e - 1]
};
WH.adjustSpellPoints = function(e, t, a, i) {
    var n = 1;
    if (a && i) {
        n = WH.getCombatRatingMult(a, i)
    }
    for (var r = 1; r <= 20; ++r) {
        e = e.replace(new RegExp("\x3c!--pts" + r +
            ":0:0:(\\d+)(:\\d+(?:\\.\\d+)?)?(:crm)?--\x3e(\x3c!--rtg\\d+--\x3e)?(.+?)<",
            "g"), (function(e, a, i, o, s) {
            var l = t[a] && t[a].hasOwnProperty("effects") ? t[
                a].effects[r] : t.effects[r];
            if (!l) {
                return e
            }
            var c = Math.round(l.avg * (o ? n : 1));
            return "\x3c!--pts" + r + ":0:0:" + a + (i || "") +
                (o || "") + "--\x3e" + (s ? s : "") + c + "<"
        }));
        e = e.replace(new RegExp("\x3c!--pts" + r +
            ":1:0:(\\d+)(:\\d+(?:\\.\\d+)?)?(:crm)?--\x3e(\x3c!--rtg\\d+--\x3e)?(.+?)<",
            "g"), (function(e, a, i, o, s) {
            var l = t[a] && t[a].hasOwnProperty("effects") ? t[
                a].effects[r] : t.effects[r];
            if (!l) {
                return e
            }
            var c = Math.round(l.min * (o ? n : 1));
            return "\x3c!--pts" + r + ":1:0:" + a + (i || "") +
                (o || "") + "--\x3e" + (s ? s : "") + c + "<"
        }));
        e = e.replace(new RegExp("\x3c!--pts" + r +
            ":2:0:(\\d+)(:\\d+(?:\\.\\d+)?)?(:crm)?--\x3e(\x3c!--rtg\\d+--\x3e)?(.+?)<",
            "g"), (function(e, a, i, o, s) {
            var l = t[a] && t[a].hasOwnProperty("effects") ? t[
                a].effects[r] : t.effects[r];
            if (!l) {
                return e
            }
            var c = Math.round(l.max * (o ? n : 1));
            return "\x3c!--pts" + r + ":2:0:" + a + (i || "") +
                (o || "") + "--\x3e" + (s ? s : "") + c + "<"
        }));
        e = e.replace(new RegExp("\x3c!--pts" + r +
            ":3:(\\d+(?:\\.\\d+)?):(\\d+)(:\\d+(?:\\.\\d+)?)?(:crm)?--\x3e(\x3c!--rtg\\d+--\x3e)?(.+?)<",
            "g"), (function(e, a, i, o, s, l) {
            var c = t[i] && t[i].hasOwnProperty("effects") ? t[
                i].effects[r] : t.effects[r];
            if (!c) {
                return e
            }
            var u = Math.round(c.avg * a * (s ? n : 1));
            return "\x3c!--pts" + r + ":3:" + a + ":" + i + (
                o || "") + (s || "") + "--\x3e" + (l ? l :
                "") + u + "<"
        }));
        e = e.replace(new RegExp("\x3c!--pts" + r +
            ":4:0:(\\d+)(:\\d+(?:\\.\\d+)?)?(:crm)?--\x3e(\x3c!--rtg\\d+--\x3e)?(.+?)<",
            "g"), (function(e, a, i, o, s) {
            var l = t[a] && t[a].hasOwnProperty("effects") ? t[
                a].effects[r] : t.effects[r];
            if (!l) {
                return e
            }
            var c = Math.round(l.pts * (o ? n : 1));
            return "\x3c!--pts" + r + ":4:0:" + a + (i || "") +
                (o || "") + "--\x3e" + (s ? s : "") + c + "<"
        }))
    }
    return e
};
WH.getStaminaRatingMult = function(e, t) {
    if (!WH.staminaFactor) {
        return 1
    }
    let a = 0;
    switch (t) {
        case 2:
        case 11:
            a = 3;
            break;
        case 12:
            a = 2;
            break;
        case 13:
        case 14:
        case 15:
        case 17:
        case 21:
        case 22:
        case 23:
        case 25:
        case 26:
            a = 1;
            break
    }
    let i = WH.findSparseKey(WH.staminaFactor, e);
    let n = WH.findSparseKey(WH.staminaFactor[i] || {}, a);
    return (WH.staminaFactor[i] || {})[n] || 1
};
WH.getCombatRatingMult = function(e, t) {
    if (!WH.convertRatingToPercent.RM) {
        return 1
    }
    let a = 0;
    switch (t) {
        case 2:
        case 11:
            a = 3;
            break;
        case 12:
            a = 2;
            break;
        case 13:
        case 14:
        case 15:
        case 17:
        case 21:
        case 22:
        case 23:
        case 25:
        case 26:
            a = 1;
            break
    }
    let i = WH.findSparseKey(WH.convertRatingToPercent.RM, e);
    let n = WH.findSparseKey(WH.convertRatingToPercent.RM[i] || {}, a);
    return (WH.convertRatingToPercent.RM[i] || {})[n] || 1
};
WH.roundArtifactPower = function(e) {
    var t = 1;
    if (e > 50) {
        t = 5
    }
    if (e > 1e3) {
        t = 25
    }
    if (e > 5e3) {
        t = 50
    }
    return WH.roundHalfEven(e / t) * t
};
WH.roundHalfEven = function(e) {
    if (Math.floor(e * 1e5) % 1e5 == 5e4) {
        var t = Math.floor(e);
        return t + t % 2
    }
    return Math.round(e)
};
WH.setTooltipSpells = function(e, t, a, i) {
    t = t || [];
    a = a || {};
    if (!t.length) {
        t = [0]
    } else {
        let e = window.g_pageInfo ? g_pageInfo["typeId"] : null;
        if (e) {
            let a = t.indexOf(parseInt(e));
            if (a !== -1) {
                t[a] = 0
            }
        }
    }
    if (i === undefined) {
        var n = function(e) {
            var t = [];
            if (e.hasOwnProperty("data")) {
                t.push(e.data)
            }
            for (var a = 0; a < e.children.length; a++) {
                t = t.concat(n(e.children[a]))
            }
            return t
        };
        for (let e in a) {
            if (!a.hasOwnProperty(e)) {
                continue
            }
            if (a[e].length < 2) {
                continue
            }
            for (var r = 0; r < a[e].length; r++) {
                a[e][r] = {
                    data: a[e][r],
                    children: []
                };
                var o = 0;
                for (var s = 0; s <= 1; s++) {
                    var l = -1;
                    while ((l = a[e][r].data[s].indexOf("\x3c!--sp" + e +
                            "--\x3e", l + 1)) >= 0) {
                        o++
                    }
                }
                var c = r - o;
                if (c < 0) {
                    continue
                }
                while (o-- > 0) {
                    var u = a[e].splice(c, 1);
                    r--;
                    a[e][r].children.push(u[0])
                }
            }
            a[e] = n({
                children: a[e]
            })
        }
    }
    i = i || {};
    var p = function(e) {
        i[e] = (i[e] || 0) + 1;
        if (i[e] >= (a[e] || []).length) {
            i[e] = 0
        }
    };
    var f = [];
    var d = /<!--sp([0-9]+):[01]-->/g;
    var g;
    while (g = d.exec(e)) {
        var m = g[0];
        var h = g.index + m.length;
        var W = "\x3c!--sp" + g[1] + "--\x3e";
        var H = e.indexOf(W, h);
        if (H < 0) {
            WH.warn("Could not find closing end tag for tooltip spell.", W,
                e);
            return e
        }
        var v = new RegExp("\x3c!--sp" + g[1] + ":[01]--\x3e", "g");
        v.lastIndex = h;
        var T = v.exec(e);
        while (T && T.index < H) {
            H = e.indexOf(W, H + W.length);
            if (H < 0) {
                WH.warn("Could not find nested closing end tag for tooltip spell.",
                    W, e);
                return e
            }
            T = v.exec(e)
        }
        f.push(e.substring(g.index, H + W.length));
        d.lastIndex = H + W.length
    }
    var b = 0;
    var y = /^(<!--sp([0-9]+):[01]-->).*(<!--sp\2-->)$/;
    for (var S = 0; S < f.length; ++S) {
        var w = f[S].match(y)[2];
        var E = WH.inArray(t, parseInt(w)) >= 0 ? 1 : 0;
        if (a[w] == null) {
            continue
        }
        if (i[w] == null) {
            i[w] = 0
        }
        var _ = a[w][i[w]];
        if (_ == null || _[E] == null) {
            continue
        }
        p(w);
        if (E && (g = _[2].match(/^(!?)(\d+)$/))) {
            if (g[1]) {
                if (WH.inArray(t, parseInt(g[2])) >= 0) {
                    E = 0
                }
            } else {
                t.push(parseInt(g[2]))
            }
        }
        var I = _[E];
        I = WH.setTooltipSpells(I, t, a, i);
        var M = "\x3c!--sp" + w + ":" + E + "--\x3e" + I + "\x3c!--sp" + w +
            "--\x3e";
        e = e.substr(0, b) + e.substr(b).replace(f[S], M);
        b = e.indexOf(M, b) + M.length;
        if (E) {
            for (var k = S + 1; k < f.length; k++) {
                if (e.indexOf(f[k], b) !== b) {
                    break
                }
                g = f[k].match(y);
                M = g[1] + g[3];
                e = e.substr(0, b) + e.substr(b).replace(f[k], M);
                p(g[2]);
                b += M.length;
                S++
            }
        }
    }
    e = WH.Tooltip.evalFormulas(e);
    return e
};
WH.enhanceTooltip = function(e, t, a, i, n, r, o, s, l, c, u, p, f, d) {
    if ((!WH.applyStatModifications || !WH.applyStatModifications
            .ScalingData) && (d || s)) {
        g_itemScalingCallbacks.push(function(g) {
            return function() {
                var m = WH.enhanceTooltip.call(g, e, t, a, i, n,
                    r, o, s, l, c, u, p, f, d);
                WH.updateTooltip.call(g, m)
            }
        }(this));
        return WH.TERMS.loading_ellipsis
    }
    var g = typeof e,
        m, h;
    var W = WH.getDataSource();
    var H = WH.isSet("g_pageInfo") ? g_pageInfo.type : null;
    h = WH.isSet("g_pageInfo") ? g_pageInfo.typeId : null;
    this._knownSpells = r;
    if (g == "number") {
        h = e;
        var v = "tooltip_";
        if (n) v = "buff_";
        if (p) v = "tooltip_premium_";
        if (f) v = "text_";
        if (W[h] && W[h][v + Locale.getName()]) {
            e = W[h][v + Locale.getName()];
            m = W[h][(n ? "buff" : "") + "spells_" + Locale.getName()];
            this._rppmModList = W[h]["rppmmod"];
            if (m) {
                e = WH.setTooltipSpells(e, r, m)
            }
        } else {
            return e
        }
    } else if (g != "string") {
        return e
    }
    var T;
    if (a) {
        var b = WH.getGets();
        if (b.lvl) {
            e = WH.setTooltipLevel(e, b.lvl, n)
        }
        T = b.ilvl
    }
    let y = function() {
        let e = WH.parseQueryString(WH.getQueryString());
        if (!e["crafted-stats"]) {
            return []
        }
        return e["crafted-stats"].split(":").map((function(e) {
            return parseInt(e)
        })).filter((function(e) {
            return WH.Wow.Item.Stat.CRAFTING_STAT_TO
                .includes(e)
        }))
    };
    let S = y();
    if ((d || s || S.length) && h) {
        e = WH.setItemModifications(e, h, d, s, this._selectedLevel ? this
            ._selectedLevel : null, T, S)
    }
    if (t) {
        e = e.replace(/\(([^\)]*?<!--lvl-->[^\(]*?)\)/gi, (function(e, t) {
            return '(<a href="javascript:" onmousedown="return false" class="tip" style="color: white; cursor: pointer" onclick="WH.staticTooltipLevelClick(this, null, 0)" onmouseover="WH.Tooltip.showAtCursor(event, \'<span class=\\\'q2\\\'>\' + WH.TERMS.clicktochangelevel_stc + \'</span>\')" onmousemove="WH.Tooltip.cursorUpdate(event)" onmouseout="WH.Tooltip.hide()">' +
                t + "</a>)"
        }));
        if (e.indexOf("\x3c!--artpow:") > 0) {
            if (!this.hasOwnProperty("_knowledgeLevel")) {
                var w = /(&|\?)artk=(\d+)/.exec(location.href);
                if (w && parseInt(w[2]) <= g_artifact_knowledge_max_level) {
                    this._knowledgeLevel = parseInt(w[2])
                }
            }
            var E = this._knowledgeLevel ? parseInt(this._knowledgeLevel) :
                0;
            e = e.replace(/(<!--ndstart-->)?<!--ndend-->/i, (function(e,
            t) {
                return (t ? t + "<br />" : " ") +
                    '<a href="javascript:" onmousedown="return false" class="tip" style="color: white; cursor: pointer" onclick="WH.staticTooltipKnowledgeLevelClick(this, null, ' +
                    h +
                    ')" onmouseover="WH.Tooltip.showAtCursor(event, \'<span class=\\\'q2\\\'>\' + WH.TERMS.clicktochangelevel_stc + \'</span>\')" onmousemove="WH.Tooltip.cursorUpdate(event)" onmouseout="WH.Tooltip.hide()">' +
                    WH.sprintf(WH.TERMS.knowledge_format
                        .replace("%d", "$1"), E) + "</a>"
            }));
            e = e.replace(/(<!--artpow:(\d+)-->)[\d\.\,]+/, (function(e, t,
                a) {
                return t + WH.numberLocaleFormat(WH
                    .roundArtifactPower(parseInt(a) * WH
                        .getArtifactKnowledgeMultiplier(E)))
            }))
        }
    }
    if (i && Slider) {
        var _ = WH.groupSizeScalingShouldShow(h);
        if (n) {
            n.bufftip = this;
            if (_ && WH.isSet("g_difficulties") && g_difficulties[_]) {
                e = WH.groupSizeScalingOnChange.call(n, this,
                    g_difficulties[_].maxplayers, 1, true)
            }
        } else {
            var I = new RegExp("\x3c!--" + (H && H == 3 ? "i" : "") +
                "\\?(\\d+):(\\d+):(\\d+):(\\d+)");
            var M = e.match(I);
            if (typeof M == "undefined" && H == 3) {
                I = new RegExp("\x3c!--\\?(\\d+):(\\d+):(\\d+):(\\d+)");
                M = e.match(I)
            }
            if (!M && !WH.isRetailTree()) {
                I = new RegExp(
                    "\x3c!--ppl(\\d+):(\\d+):(\\d+):(\\d+):(\\d+)");
                var k = e.match(I);
                if (k) {
                    M = [null, null, k[2], WH.maxLevel, WH.maxLevel]
                }
            }
            if (_ && WH.isSet("g_difficulties") && g_difficulties[_]) {
                var x = WH.ce("label");
                x.innerHTML = WH.TERMS.difficulty + ": ";
                this._difficultyBtn = WH.ce("a");
                this._difficultyBtn.ttId = h;
                WH.difficultyBtnBuildMenu.call(this, h);
                Menu.add(this._difficultyBtn, this._difficultyBtn.menu);
                $("#dd" + h).append(x).append(this._difficultyBtn);
                WH.difficultyBtnOnChange.call(this, W[h].initial_dd || _, W[
                    h].initial_ddSize);
                e = WH.groupSizeScalingOnChange.call(this, this,
                    g_difficulties[_].maxplayers, 0, true)
            } else if (M) {
                if (M[2] != M[3]) {
                    this.slider = Slider.init(i, {
                        maxValue: parseInt(M[3]),
                        minValue: Math.max(parseInt(M[2]), 1),
                        onMove: WH.tooltipSliderMove.bind(this),
                        title: WH.GlobalStrings.LEVEL
                    });
                    Slider.setValue(this.slider, parseInt(M[4]));
                    this.slider.onmouseover = function(e) {
                        WH.Tooltip.showAtCursor(e, WH.TERMS
                            .dragtochangelevel_stc, 0, 0, "q2")
                    };
                    this.slider.onmousemove = WH.Tooltip.cursorUpdate;
                    this.slider.onmouseout = WH.Tooltip.hide;
                    WH.Tooltip.simple(Slider.getInput(this.slider), WH.TERMS
                        .clicktochangelevel_stc, "q2")
                }
            }
        }
    }
    if (o) {
        if (n && n.modified) {
            n.bufftip = this
        } else {
            var C = 0;
            for (var L in m) {
                if (m.hasOwnProperty(L) && g_spells.hasOwnProperty(L) && WH
                    .inArray(r, L) == -1) {
                    C++
                }
            }
            var A;
            for (var L in m) {
                if (!g_spells[L] || WH.inArray(r, L) != -1) {
                    continue
                }
                let e = WH.Gatherer.get(WH.Types.SPELL, L);
                let t = e["name_" + Locale.getName()];
                let a = e["rank_" + Locale.getName()] || "";
                let i = a ? WH.term("parens_format", t, a) : t;
                if (C < 4) {
                    var R = WH.ce("label");
                    var P = WH.ce("input", {
                        type: "checkbox",
                        dataset: {
                            spellId: L
                        }
                    });
                    WH.ae(R, P);
                    WH.aE(P, "click", WH.tooltipSpellsChange.bind(this));
                    WH.ae(R, WH.ce("a", {
                        dataset: {
                            wowhead: "spell=" + L + "&know=" + L
                        }
                    }, WH.ct(i)));
                    R.setAttribute("unselectable", "");
                    WH.ae(o, R);
                    WH.ae(o, WH.ce("br"))
                } else {
                    if (!A) {
                        A = WH.ce("select");
                        A.multiple = true;
                        A.size = 6;
                        WH.ae(o, A);
                        WH.aE(A, "change", WH.tooltipSpellsChange.bind(
                            this))
                    }
                    WH.ae(A, WH.ce("option", {
                        value: L
                    }, WH.ct(i)))
                }
            }
        }
        this.modified = [o, m, r];
        $(o).toggle(!$(o).is(":empty"))
    }
    if (u) {
        var k = e.match(/<!--rppm-->(\d+(?:\.\d+)?)<!--rppm-->/);
        if (k) {
            var N = $("#rppm" + h);
            if (this._rppmModList.hasOwnProperty(4)) {
                this._rppmModBase = parseFloat(k[1]);
                if (N.is(":empty")) {
                    this._rppmSpecModList = this._rppmModList[4];
                    this._rppmSpecModList.splice(0, 0, {
                        spec: -1,
                        modifiervalue: 0,
                        filename: ""
                    });
                    N.append(WH.getMajorHeading(WH.TERMS.realppmmodifiers,
                        2, 3));
                    for (var L in this._rppmSpecModList) {
                        var O = Icon.create(this._rppmSpecModList[L][
                            "filename"
                        ], 0, null);
                        O.style.display = "inline-block";
                        O.style.verticalAlign = "middle";
                        var B = $(
                            '<input name="rppmmod" type="radio" id="rppm-' +
                            L + '" />');
                        B.get(0).checked = this._rppmSpecModList[L][
                            "spec"] == -1;
                        N.append(B).append(this._rppmSpecModList[L][
                            "spec"] == -1 ? "" : O).append(
                            '<label for="rppm-' + L + '"> <a>' + (this
                                ._rppmSpecModList[L]["spec"] == -1 ? WH
                                .TERMS.none : WH.Wow.PlayerClass
                                .Specialization.getName(this
                                    ._rppmSpecModList[L]["spec"])) +
                            "</a></label>").append("<br />");
                        var D = this;
                        $("#rppm-" + L).change((function() {
                            WH.tooltipRPPMChange.call(this, D)
                        }))
                    }
                } else {
                    var F = this._rppmModBase;
                    var U = this._rppmSpecModList;
                    e = e.replace(
                        /<!--rppm-->(\[?)(\d+(?:\.\d+)?)([^<]*)<!--rppm-->/,
                        (function(e, t, a, i) {
                            return "\x3c!--rppm--\x3e" + t + (F * (
                                    1 + parseFloat(U[$(
                                                'input[name="rppmmod"]:checked',
                                                N).attr("id")
                                            .match(/\d+$/)[0]]
                                        .modifiervalue))).toFixed(
                                2) + i + "\x3c!--rppm--\x3e"
                        }))
                }
            }
            N.toggle(!N.is(":empty"));
            var q = "";
            if (this._rppmModList.hasOwnProperty(1)) {
                q += " + " + WH.Wow.Item.Stat.jsonToAbbr("hastertng")
            } else if (this._rppmModList.hasOwnProperty(2)) {
                q += " + " + WH.Wow.Item.Stat.jsonToAbbr("critstrkrtng")
            }
            if (g_pageInfo.type == 6 && this._rppmModList.hasOwnProperty(
                6)) {
                q += " + " + "Budget"
            }
            if (q.length > 0) {
                e = e.replace(
                    /<!--rppm-->\[?(\d+(?:\.\d+)?)([^<]*)<!--rppm-->/, (
                        function(e, t, a) {
                            return "\x3c!--rppm--\x3e[" + t + q + "]" +
                                a + "\x3c!--rppm--\x3e"
                        }))
            }
        }
    }
    if (c) {
        for (L = 1; L <= l; ++L) {
            $(c).append('<input type="checkbox" id="item-upgrade-' + L +
                '" />').append('<label for="item-upgrade-' + L +
                '"><a>' + WH.term("itemUpgrade_format", L) +
                "</a></label>").append("<br />");
            $("#item-upgrade-" + L).change(WH.upgradeItemTooltip.bind(this,
                c, L))
        }
        if (W[h] && W[h].hasOwnProperty("tooltip_" + Locale.getName() +
                "_pvp")) {
            $(c).append('<input type="checkbox" id="item-upgrade-pvp" />')
                .append('<label for="item-upgrade-pvp"><a>' + WH.TERMS
                    .pvpmode + "</a></label>").append("<br />");
            $("#item-upgrade-pvp").change(WH.upgradeItemTooltip.bind(this,
                c, "pvp"))
        }
        for (let e of WH.Timewalking.getConfigs()) {
            if (W[h] && W[h].hasOwnProperty("tooltip_" + Locale.getName() +
                    "_" + e.stringId)) {
                $(c).append('<input type="checkbox" id="item-upgrade-' + e
                    .stringId + '">').append(
                    '<label for="item-upgrade-' + e.stringId + '"><a>' +
                    WH.TERMS.timewalking + WH.TERMS.wordspace_punct + WH
                    .TERMS[e.termAbbrev] + "</a></label>").append(
                    "<br>");
                $("#item-upgrade-" + e.stringId).change(WH
                    .upgradeItemTooltip.bind(this, c, e.stringId))
            }
        }
        $(c).toggle(!$(c).is(":empty"))
    }
    if (H == 3) {
        var j = $("#cs" + h);
        if (j && WH.Wow.Item.tooltipHasSpecStats(e)) {
            if (!this._classSpecBtn) {
                var z = WH.ce("label");
                z.innerHTML = WH.TERMS.showingtooltipfor_stc + " ";
                this._classSpecBtn = WH.ce("a");
                this._classSpecBtn.ttId = h;
                WH.classSpecBtnBuildMenu.call(this, W[h].hasOwnProperty(
                    "validMenuSpecs") ? W[h].validMenuSpecs : false);
                Menu.add(this._classSpecBtn, this._classSpecBtn.menu);
                j.append(z).append(this._classSpecBtn).show()
            }
            var G = WH.LocalStorage.get("tooltips_class:spec");
            G = G ? G.split(":") : null;
            var V = /(&|\?)class=(\d+)/.exec(location.href);
            if (V) {
                G = [V[2], 0]
            }
            var J = /(&|\?)spec=(\d+)/.exec(location.href);
            var K, Y;
            if (J) {
                K = J[2];
                Y = WH.Wow.PlayerClass.getBySpec(K);
                if (Y) {
                    G = [Y, K]
                }
            }
            if (G && G.length == 2) {
                e = WH.classSpecBtnOnChange.call(this, G[0], G[1], e, true)
            } else {
                $(this._classSpecBtn).text(WH.isRetailTree() ? WH.TERMS
                    .chooseaspec_stc : WH.TERMS.chooseAClass_stc)
            }
        }
    }
    if (W[h] && WH.bonusesBtnShouldShow(W[h].bonusesData)) {
        var Q = $("#bs" + h);
        if (Q && !this._bonusesBtn) {
            var Z = WH.ce("label");
            Z.innerHTML = WH.TERMS.itembonuses + ": ";
            this._bonusesBtn = WH.ce("a");
            this._bonusesBtn.ttId = h;
            this._bonusesBtn.menu = WH.bonusesBtnBuildMenu.call(this, W[h]);
            Menu.add(this._bonusesBtn, this._bonusesBtn.menu);
            $(this._bonusesBtn).text(WH.TERMS.selectbonus_stc);
            Q.append(Z).append(this._bonusesBtn).show();
            if (d !== "") {
                WH.bonusesBtnOnChange.call(this, d, true)
            }
        }
    }(function() {
        let e = WH.ge("craftedStatsSelector" + h);
        if (!W[h] || !e || e.dataset.initialized) {
            return
        }
        const t = this;
        let a = 0;
        let i;
        let n = function(e) {
            let t = y();
            let i = t.indexOf(e);
            if (i >= 0) {
                t.splice(i, 1)
            } else {
                t.push(e);
                t = t.slice(-1 * a)
            }
            WH.Url.replacePageQuery((function(e) {
                if (t.length) {
                    e["crafted-stats"] = t.join(":")
                } else {
                    delete e["crafted-stats"]
                }
            }));
            r();
            if (W[h]["tooltip_" + Locale.getName()]) {
                let e = this._bonusesBtn && this._bonusesBtn
                    .selectedBonus ? this._bonusesBtn
                    .selectedBonus : null;
                let t = WH.enhanceTooltip.call(this, h, true, true,
                    false, null, this._knownSpells, WH.ge("ks" +
                        h), s, null, null, true, null, null, e);
                WH.updateTooltip.call(this, t)
            }
        };
        let r = function() {
            let e = "";
            let t = y();
            if (!t.length) {
                e = WH.TERMS.none
            } else {
                t.forEach((function(t) {
                    e += (e ? " + " : "") + WH.Wow.Item
                        .Stat.jsonToDesc(WH.statToJson[
                            t])
                }))
            }
            WH.st(i, e)
        };
        e.dataset.initialized = 1;
        let o = W[h].jsonequip && W[h].jsonequip.statsInfo || {};
        WH.Wow.Item.Stat.CRAFTING_STAT_FROM.forEach((function(e) {
            if (o.hasOwnProperty(e)) {
                a++
            }
        }));
        if (!a) {
            return
        }
        WH.displayDefault(e);
        WH.ae(e, WH.ce("label", {}, WH.ct(WH.TERMS
            .optionalReagentStats + WH.TERMS.colon_punct)));
        i = WH.ce("a", {}, WH.ct(WH.TERMS.none));
        WH.ae(e, i);
        let l = [];
        WH.Wow.Item.Stat.CRAFTING_STAT_TO.forEach((function(e) {
            l.push(Menu.createItem({
                crumb: e,
                label: WH.Wow.Item.Stat
                    .jsonToDesc(WH.statToJson[
                        e]),
                url: n.bind(t, e),
                options: {
                    checkedFunc: function(e) {
                        return y().includes(
                            parseInt(e[
                                Menu
                                .ITEM_CRUMB
                                ]))
                    }
                }
            }))
        }));
        l.sort((function(e, t) {
            return e[Menu.ITEM_LABEL].localeCompare(t[Menu
                .ITEM_LABEL])
        }));
        Menu.add(i, l);
        r()
    }).call(this);
    let X = this.slider ? this.slider._max : WH.maxLevel;
    let ee = this._selectedLevel || X;
    let te = G ? G[0] : WH.Wow.PlayerClass.WARRIOR;
    e = WH.addRatingPercent(e, ee, X, te);
    if (H === WH.Types.ITEM) {
        WH.updateItemStringLink.call(this)
    }
    return e
};
WH.addRatingPercent = function(e, t, a, i) {
    let n = WH.ce("div", {
        innerHTML: e
    });
    WH.qsa("span", n).forEach((function(e) {
        let n;
        let r;
        e.childNodes.forEach((function(e) {
            if (e.nodeType === Node.COMMENT_NODE) {
                let t = (e.nodeValue || "").match(
                    /^rtg(\d+)$/);
                if (t) {
                    n = parseInt(t[1]);
                    r = e
                }
            }
        }));
        if (n === undefined) {
            return
        }
        let o = r.nextSibling.nodeValue.match(/(\d+)(.*)$/);
        if (!o) {
            return
        }
        let s = WH.qs("small.rating-percent");
        if (s) {
            WH.de(s)
        }
        let l = parseInt(o[0]);
        let c = o[2];
        let u = WH.convertRatingToPercent(t, n, l, i);
        let p = WH.TERMS ? WH.term("valueAtLevel_format", u
                .toFixed(2), t) : " (" + u.toFixed(2) +
            "% @ L" + t + ")";
        let f = r.nextSibling;
        let d = WH.ce("small", {
            className: "rating-percent"
        }, WH.ct(p));
        if (c === ".") {
            f.parentNode.insertBefore(WH.ct(l), f);
            f.parentNode.insertBefore(d, f);
            f.parentNode.insertBefore(WH.ct("."), f)
        } else {
            f.parentNode.insertBefore(WH.ce("span", null, WH.ct(
                l + c)), f);
            f.parentNode.insertBefore(d, f)
        }
        f.parentNode.removeChild(f);
        d.setAttribute("onclick", "WH.tooltipLevelPrompt(" + t +
            ", " + a + ");")
    }));
    return n.innerHTML
};
WH.tooltipLevelPrompt = function(e, t) {
    let a = 1;
    let i = prompt(WH.sprintf(WH.TERMS.ratinglevel_format, a, t), e
        .toString());
    if (i === null) {
        return
    }
    i = parseInt(i);
    if (i < a || i > t) {
        alert("Invalid value; must be between " + a + " and " + t + ".");
        return
    }
    let n = WH.qs(".wowhead-tooltip");
    if (n.slider) {
        Slider.setValue(n.slider, i)
    }
    WH.staticTooltipLevelClick(n, i, 1)
};
WH.groupSizeScalingShouldShow = function(e) {
    if (WH.isSet("g_difficulties") && WH.isSet("g_spells") && g_spells[e] &&
        g_spells[e].difficulties && g_spells[e].difficulties.length > 0) {
        return g_spells[e].difficulties[0]
    }
    return false
};
WH.groupSizeScalingSliderMove = function(e, t, a) {
    var i = WH.getDataSource();
    var n = WH.isSet("g_pageInfo") ? g_pageInfo["typeId"] : null;
    if (!i[n]) {
        return
    }
    let r = this._difficultyBtn.selectedDD;
    let o = a.value;
    WH.Url.replacePageQuery((function(e) {
        if (r != WH.groupSizeScalingShouldShow(n) || o !=
            g_difficulties[WH.groupSizeScalingShouldShow(n)]
            .maxplayers) {
            e.dd = r;
            e.ddsize = o
        } else {
            delete e.dd;
            delete e.ddsize
        }
    }));
    WH.groupSizeScalingOnChange.call(this, this, a.value, 0);
    if (this.bufftip) {
        WH.groupSizeScalingOnChange.call(this, this.bufftip, a.value, 1)
    }
    WH.Tooltip.hide()
};
WH.groupSizeScalingOnChange = function(e, t, a, i) {
    const n = this;
    while (e.className.indexOf("tooltip") == -1) {
        e = e.parentNode
    }
    t = parseInt(t);
    if (isNaN(t)) {
        return
    }
    var r = WH.getDataSource();
    var o = WH.isSet("g_pageInfo") ? g_pageInfo["typeId"] : null;
    if (!r[o]) {
        return
    }
    var s = this._difficultyBtn.selectedDD;
    var l = Locale.getName();
    var c = "server_" + (a ? "buff_" : "tooltip_") + l;
    var u = "dd" + s + "ddsize" + t;
    WH.groupSizeScalingOnChange.lastCall = u;
    if (!r[o][c]) {
        r[o]["server_tooltip_" + l] = {};
        r[o]["server_buff_" + l] = {};
        var p = "dd" + r[o].initial_dd + "ddsize" + r[o].initial_ddSize;
        r[o]["server_tooltip_" + l][p] = r[o]["tooltip_" + l];
        r[o]["server_buff_" + l][p] = r[o]["buff_" + l]
    }
    if (r[o][c][u]) {
        var f = r[o][c][u];
        if (i) {
            return f
        }
        WH.updateTooltip.call(e, f);
        return
    }
    if (i) {
        return r[o][c.substr(7)]
    }
    if (a) {
        return
    }
    if (r[o][c].hasOwnProperty(u)) {
        return
    }
    r[o][c][u] = "";
    var d = "/spell=" + o + "&dd=" + s + "&ddsize=" + t;
    if (WH.isBeta() || WH.isPtr()) {
        d += "&" + WH.getDataBuild()
    }
    WH.xhrJsonRequest(d, (function(a) {
        if (!a) {
            return
        }
        r[o]["server_tooltip_" + l][u] = a["tooltip"];
        r[o]["server_buff_" + l][u] = a["buff"];
        if (WH.groupSizeScalingOnChange.lastCall === u) {
            WH.groupSizeScalingOnChange.call(n, e, t);
            if (n.bufftip) {
                WH.groupSizeScalingOnChange.call(n, n.bufftip,
                    t, true)
            }
        }
    }))
};
WH.difficultyBtnBuildMenu = function(e) {
    var t = [];
    var a = g_spells[e];
    for (var i = 0; i < a.difficulties.length; ++i) {
        var n = a.difficulties[i];
        var r = [n, WH.Wow.Difficulty.getName(n), WH.difficultyBtnOnChange
            .bind(this, n, false)
        ];
        t.push(r)
    }
    this._difficultyBtn.menu = t
};
WH.difficultyBtnOnChange = function(e, t) {
    this._difficultyBtn.selectedDD = e;
    $(this._difficultyBtn).text("");
    WH.arrayWalk(this._difficultyBtn.menu, (function(e) {
        e.checked = false
    }));
    var a = Menu.findItem(this._difficultyBtn.menu, [e]);
    a.checked = true;
    $(this._difficultyBtn).text(a[Menu.ITEM_LABEL]);
    var i = this._difficultyBtn.selectedPlayers || t;
    var n = g_difficulties[e].minplayers,
        r = g_difficulties[e].maxplayers,
        o = g_difficulties[e].maxplayers;
    if (i) {
        if (i > r) {
            o = r
        } else if (i < n) {
            o = n
        } else {
            o = i
        }
    }
    n = r;
    var s = $("#sl" + this._difficultyBtn.ttId);
    s.html("").hide();
    this.slider = null;
    if (n != r) {
        s.show();
        this.slider = Slider.init(s.get(0), {
            maxValue: parseInt(r),
            minValue: parseInt(n),
            onMove: WH.groupSizeScalingSliderMove.bind(this),
            title: WH.TERMS.players
        });
        Slider.setValue(this.slider, parseInt(o));
        this.slider.onmouseover = function(e) {
            WH.Tooltip.showAtCursor(e, WH.TERMS.dragtochangeplayers_stc,
                0, 0, "q2")
        };
        this.slider.onmousemove = WH.Tooltip.cursorUpdate;
        this.slider.onmouseout = WH.Tooltip.hide;
        WH.Tooltip.simple(Slider.getInput(this.slider), WH.TERMS
            .clicktochangeplayers_stc, "q2")
    }
    WH.groupSizeScalingSliderMove.call(this, null, null, {
        value: o
    })
};
WH.classSpecBtnOnChange = function(e, t, a, i) {
    e = parseInt(e);
    t = t ? parseInt(t) : null;
    WH.ee(this._classSpecBtn);
    this._classSpecBtn.selectedSpec = t;
    let n = Menu.findItem(this._classSpecBtn.menu, [e, t]);
    if (n && n[Menu.ITEM_OPTIONS] && n[Menu.ITEM_OPTIONS].tinyIcon) {
        let e = n[Menu.ITEM_OPTIONS].tinyIcon;
        let t = WH.Icon.create(e, WH.Icon.SMALL, "javascript:");
        t.style.display = "inline-block";
        t.style.verticalAlign = "middle";
        WH.ae(this._classSpecBtn, t)
    }
    let r = WH.Wow.PlayerClass.Specialization.getName(t);
    WH.ae(this._classSpecBtn, WH.ce("span", undefined, WH.ct(" " + (!WH
        .isRetailTree() || !r ? WH.Wow.PlayerClass.getName(
            e) : WH.Strings.sprintf(WH.TERMS
            .specclass_format, r, WH.Wow.PlayerClass
            .getName(e))))));
    if (!i) {
        WH.LocalStorage.set("tooltips_class:spec", e + ":" + t)
    }
    var o = a ? a : this.innerHTML;
    o = o.replace(
        /<!--scstart(\d+):(\d+)--><span class="q(\d+)">(<!--asc\d+-->)?(.*?)<\/span><!--scend-->/i,
        (function(t, a, i, n, r, o) {
            n = 1;
            var s = a == 2 && (!g_classes_allowed_weapon[e] || WH
                .inArray(g_classes_allowed_weapon[e], i) == -1);
            var l = a == 4 && (!g_classes_allowed_armor[e] || WH
                .inArray(g_classes_allowed_armor[e], i) == -1);
            if (s || l) {
                n = 10
            }
            return "\x3c!--scstart" + a + ":" + i +
                '--\x3e<span class="q' + n + '">' + (r ? r : "") +
                o + "</span>\x3c!--scend--\x3e"
        }));
    if (WH.isRetailTree()) {
        o = o.replace(
            /<span[^>]*?><!--stat(\d+)-->([-+][\d\.,]+(?:-[\d\.,]+)?)(\D*?)<\/span>/gi,
            (function(a, i, n, r) {
                let o = WH.ce("div", {
                    innerHTML: a
                });
                let s = WH.qs("span", o);
                s.classList.remove("q0", "q2");
                i = parseInt(i);
                if (i === 50) {
                    s.classList.add("q2")
                }
                if (g_grayedOutStats[i] && g_grayedOutStats[i]
                    .indexOf(t) != -1) {
                    s.classList.remove("q2");
                    s.classList.add("q0")
                }
                let l = t ? WH.getStatForSpec(i, t) : WH
                    .getStatForClass(i, e);
                if (l !== i && WH.statToJson[l]) {
                    let e = WH.Wow.Item.Stat.jsonToName(WH
                        .statToJson[l]);
                    if (e) {
                        r = " " + e
                    }
                }
                s.innerHTML = "\x3c!--stat" + i + "--\x3e";
                WH.ae(s, WH.ct(n + r));
                return s.outerHTML
            }));
        o = o.replace(
            /(<!--traitspecstart:(\d+)(?::(\d+))?-->)[\w\W]*?(<!--traitspecend-->)/g,
            (function(e, a, i, n, r) {
                var o = "";
                if (WH.isSet("g_pageInfo") && g_pageInfo
                    .hasOwnProperty("typeId") && g_pageInfo.type ==
                    3 && g_items.hasOwnProperty(g_pageInfo
                    .typeId) && g_items[g_pageInfo.typeId]
                    .hasOwnProperty(
                    "affectsArtifactPowerTypesData") && g_items[
                        g_pageInfo.typeId]
                    .affectsArtifactPowerTypesData.hasOwnProperty(
                    i) && g_items[g_pageInfo.typeId]
                    .affectsArtifactPowerTypesData[i]
                    .hasOwnProperty(t)) {
                    o = g_items[g_pageInfo.typeId]
                        .affectsArtifactPowerTypesData[i][t]
                } else if (n) {
                    o = '<span style="color: #00FF00">' + WH.term(
                            "relicrank" + (n != 1 ? "s" : "") +
                            "increase_format", n) + ": </span>" + WH
                        .TERMS.relic_minortrait
                }
                return a + o + r
            }))
    }
    WH.Url.replacePageQuery((function(a) {
        if (e) {
            a["class"] = e
        } else {
            delete a["class"]
        }
        if (WH.isRetailTree() && t) {
            a.spec = t
        } else {
            delete a.spec
        }
    }));
    if (!a) {
        this.innerHTML = WH.Tooltip.evalFormulas(o)
    }
    return o
};
WH.classSpecBtnBuildMenu = function(e) {
    var t = [];
    if (!WH.isRetailTree()) {
        t.push([, WH.TERMS.chooseAClass_stc]);
        var a = Menu.findItem(mn_spells, [7]);
        t = t.concat($.extend(true, [], Menu.getSubmenu(a)))
    } else {
        t.push([, WH.TERMS.chooseaspec_stc]);
        var i = Menu.findItem(mn_spells, [-12]);
        t = t.concat($.extend(true, [], Menu.getSubmenu(i)))
    }
    for (var n in g_chr_specs_by_class) {
        var r = g_chr_specs_by_class[n];
        for (var o in t) {
            var s = t[o];
            if (s[Menu.ITEM_CRUMB] == n) {
                if (!WH.isRetailTree()) {
                    s[Menu.ITEM_URL] = WH.classSpecBtnOnChange.bind(this, n,
                        0, false)
                } else {
                    if (s[Menu.ITEM_URL]) {
                        s[Menu.ITEM_URL] = null
                    }
                    for (var l = 0, c = r.length; l < c; l++) {
                        var u = Menu.getSubmenu(t[o]);
                        for (var p = 0, f = u.length; p < f; p++) {
                            var d = u[p];
                            if (d[Menu.ITEM_CRUMB] == r[l]) {
                                if (e && WH.inArray(e, r[l]) < 0) {
                                    delete d[Menu.ITEM_OPTIONS].tinyIcon;
                                    d[Menu.ITEM_OPTIONS].className = "q0";
                                    d[Menu.ITEM_URL] = "javascript:"
                                } else {
                                    d[Menu.ITEM_URL] = WH
                                        .classSpecBtnOnChange.bind(this, n,
                                            r[l], false)
                                }
                                break
                            }
                        }
                    }
                }
                break
            }
        }
    }
    this._classSpecBtn.menu = t
};
WH.getStatForClass = function(e, t) {
    let a = undefined;
    let i = WH.Wow.PlayerClass.Specialization.getByClass(t) || [];
    for (let t = 0, n; n = i[t]; t++) {
        let t = WH.getStatForSpec(e, n);
        if (a === undefined) {
            a = t
        } else if (a !== t) {
            a = null;
            break
        }
    }
    return a
};
WH.getStatForSpec = function(e, t) {
    var a = 3;
    var i = 4;
    var n = 5;
    var r = 71;
    var o = 72;
    var s = 73;
    var l = 74;
    var c;
    var u;
    var p = g_specPrimaryStatOrders[t];
    var f = g_specPrimaryStatOrders[t].length;
    if (e === r) {
        u = 0;
        if (!f) {
            return n
        }
        while (1) {
            c = p[u];
            if (c >= a && c <= n) {
                break
            }
            u++;
            if (u >= f) {
                return n
            }
        }
    } else {
        if (e !== o) {
            if (e !== s) {
                if (e !== l) {
                    return e
                }
                u = 0;
                if (f) {
                    while (1) {
                        c = p[u];
                        if (c >= i && c <= n) {
                            break
                        }
                        u++;
                        if (u >= f) {
                            return n
                        }
                    }
                    return c
                }
                return n
            }
            u = 0;
            if (f) {
                while (1) {
                    c = p[u];
                    if (p[u] === a) {
                        break
                    }
                    if (p[u] === n) {
                        break
                    }
                    u++;
                    if (u >= f) {
                        return n
                    }
                }
                return c
            }
            return n
        }
        u = 0;
        if (!f) {
            return a
        }
        while (1) {
            c = p[u];
            if (c >= a && c <= i) {
                break
            }
            u++;
            if (u >= f) {
                return a
            }
        }
    }
    return c
};
WH.bonusesBtnShouldShow = function(e) {
    for (var t in e) {
        if (e.hasOwnProperty(t)) {
            return true
        }
    }
    return false
};
WH.bonusesBtnBuildMenu = function(e) {
    let t = [];
    let a = e.bonusesData;
    if (a) {
        for (let i in a) {
            if (!a.hasOwnProperty(i)) {
                continue
            }
            let n = a[i].groupedUpgrade;
            let r = WH.getItemBonusName.call(this, i, e);
            let o = Menu.createItem({
                crumb: i,
                label: r,
                url: WH.bonusesBtnOnChange.bind(this, (n ? "u:" :
                    "") + i, false)
            });
            if (typeof n == "undefined") {
                for (let t in a[i].sub) {
                    if (!a[i].sub.hasOwnProperty(t)) {
                        continue
                    }
                    n = a[i].sub[t].groupedUpgrade;
                    r = WH.getItemBonusName.call(this, t, e, i);
                    if (r === "???") {
                        continue
                    }
                    let s = Menu.createItem({
                        crumb: t,
                        label: r,
                        url: WH.bonusesBtnOnChange.bind(this, i +
                            ":" + (n ? "u:" : "") + t, false,
                            true)
                    });
                    Menu.addToSubmenu(o, s)
                }
            }
            let s = Menu.getSubmenu(o);
            if (s) {
                s.sort((function(e, t) {
                    let a = WH.getItemBonusChanceType(e[Menu
                        .ITEM_CRUMB]);
                    let i = WH.getItemBonusChanceType(t[Menu
                        .ITEM_CRUMB]);
                    return WH.stringCompare(a, i) || WH
                        .stringCompare(e[Menu.ITEM_LABEL], t[
                            Menu.ITEM_LABEL])
                }));
                let e = [];
                let t = 0;
                for (let n = 0; n < s.length; ++n) {
                    let r = s[n][Menu.ITEM_CRUMB];
                    if (r && a[i].sub[r].type !== t) {
                        t = a[i].sub[r].type;
                        let o = WH.TERMS.unknown;
                        switch (t) {
                            case 1:
                                o = WH.TERMS.upgrades;
                                break;
                            case 2:
                                o = WH.TERMS.stats;
                                break;
                            case 4:
                                o = WH.TERMS.sockets;
                                break;
                            default:
                                break
                        }
                        e.push({
                            index: n,
                            name: o
                        })
                    }
                }
                for (let t = 0; t < e.length; ++t) {
                    let a = e[t].index + t;
                    let i = Menu.createHeading({
                        label: e[t].name
                    });
                    s.splice(a, 0, i)
                }
            }
            t.push(o)
        }
        let i = {};
        for (let e = 0, a; a = t[e]; e++) {
            if (i.hasOwnProperty(a[Menu.ITEM_LABEL])) {
                let e = ++i[a[Menu.ITEM_LABEL]];
                a[Menu.ITEM_LABEL] = WH.term("parens_format", a[Menu
                    .ITEM_LABEL], e)
            } else {
                i[a[Menu.ITEM_LABEL]] = 1
            }
        }
        t.sort((function(e, t) {
            return WH.stringCompare(e[Menu.ITEM_LABEL]
                .innerText || e[Menu.ITEM_LABEL], t[Menu
                    .ITEM_LABEL].innerText || t[Menu
                    .ITEM_LABEL])
        }))
    }
    let i = [Menu.createHeading({
        label: WH.TERMS.selectbonus_stc
    })];
    if (t.length > 0) {
        i = i.concat(t)
    }
    return i
};
WH.getItemBonusChanceType = function(e) {
    var t = 0;
    if (e > 0 && WH.isSet("g_itembonuses") && g_itembonuses &&
        g_itembonuses[e]) {
        var a = g_itembonuses[e];
        for (var i = 0; i < a.length; ++i) {
            var n = a[i];
            var r = 0;
            switch (n[0]) {
                case 1:
                case 3:
                case 4:
                case 5:
                case 11:
                    r = 1;
                    break;
                case 2:
                    r = 2;
                    break;
                case 6:
                    r = 4;
                    break;
                default:
                    break
            }
            if (r && (!t || r < t)) {
                t = r
            }
        }
    }
    return t
};
WH.getItemBonusUpgradeType = function(e) {
    if (e > 0 && WH.isSet("g_itembonuses") && g_itembonuses &&
        g_itembonuses[e]) {
        var t = g_itembonuses[e];
        for (var a = 0; a < t.length; ++a) {
            var i = t[a];
            switch (i[0]) {
                case 3:
                case 4:
                case 5:
                case 11:
                    return 1 << i[0];
                default:
                    break
            }
        }
    }
    return 0
};
WH.getItemBonusName = function(e, t, a) {
    var i = "";
    var n = t.level;
    let r = false;
    if (a && WH.isSet("g_itembonuses") && a > 0 && g_itembonuses[a]) {
        for (var o = 0; o < g_itembonuses[a].length; ++o) {
            var s = g_itembonuses[a][o];
            if (s[0] == 1) {
                n += s[1]
            }
        }
    }
    if (WH.isSet("g_itembonuses") && e > 0 && g_itembonuses[e]) {
        var l = g_itembonuses[e].slice();
        l.sort((function(e, t) {
            return e[0] - t[0]
        }));
        var c = "";
        var u = "";
        let a = "";
        let m = "";
        let h = "";
        for (var o = 0; o < l.length; ++o) {
            var s = l[o];
            switch (s[0]) {
                case 1:
                    c = WH.TERMS.itemlevel + " " + (n + s[1]);
                    break;
                case 2:
                    i += (i ? " / " : "") + (WH.statToJson[s[1]] && WH.Wow
                        .Item.Stat.jsonToName(WH.statToJson[s[1]]) ||
                        "Unknown stat");
                    if (s[1] == 23) {
                        i += " " + s[2];
                        r = true
                    }
                    break;
                case 3:
                    u = s[1];
                    break;
                case 4:
                    a = WH.Wow.Item.getNameDescription(s[1]) || a;
                    break;
                case 5:
                    m = WH.Wow.Item.getNameDescription(s[1]) || m;
                    break;
                case 6:
                    var p = s[2];
                    i += (i ? " / " : "") + s[1] + " " + (g_socket_names[
                        p] || (g_gem_types[p] ? WH.sprintf(WH.TERMS
                                .emptyrelicslot_format.replace("%s",
                                    "$1"), g_gem_types[p]) :
                            "Unknown Socket"));
                    break;
                case 8:
                    i += (i ? " / " : "") + WH.sprintf(WH.TERMS
                        .requireslevel_format.replace("%s", "$1"), t
                        .reqlevel + s[1]);
                    break;
                case 11:
                    if (t.heirloombonuses) {
                        var f = "?";
                        for (var d = 0, g; g = t.heirloombonuses[d]; d++) {
                            if (parseInt(e) === g) {
                                f = d + 1;
                                break
                            }
                        }
                        i += (i ? " / " : "") + WH.sprintf(WH.TERMS
                            .heirloomupgradejs_format, f)
                    }
                    break;
                case 13:
                    c = WH.TERMS.scaleswithlevel_stc;
                    break;
                case 14:
                    if (t.actualBonusLevels && t.actualBonusLevels[e]) {
                        c = WH.TERMS.itemlevel + " " + t.actualBonusLevels[
                            e] + "+"
                    } else {
                        c = WH.TERMS.itemlevel + " " + n + "+"
                    }
                    break;
                case 23:
                    if (s[1] > 0) {
                        h = WH.Tooltip.ITEM_EFFECT_NAMES[s[1]] || ""
                    }
                    break;
                case 34:
                    let o = WH.getPageData("wow.item.bonuses.upgrades") ||
                        {};
                    if (o[e]) {
                        h = WH.Strings.sprintf(WH.GlobalStrings
                            .ITEM_UPGRADE_TOOLTIP_FORMAT, o[e][0], o[e][
                                1
                            ])
                    }
                    break;
                default:
                    break
            }
        }
        if (r && !c && n) {
            c = WH.TERMS.itemlevel + WH.TERMS.wordspace_punct + n
        }
        if (c) {
            i = i ? c + " / " + i : c
        }
        a += m ? WH.TERMS.wordspace_punct + m : "";
        i += a ? " / " + a : "";
        if (h && !r) {
            i = h + (i ? " / " + i : "")
        }
        i += u && t.quality != u ? " / " + WH.Wow.Item.getQualityName(u) :
            "";
        if (i.substr(0, 3) == " / ") {
            i = i.substr(3)
        }
    } else if (e == "0") {
        i = WH.TERMS.normal
    }
    return i ? i : a ? WH.TERMS.openparenthesis_punct + e + WH.TERMS
        .closedparenthesis_punct : WH.TERMS.normal
};
WH.bonusesBtnGetContextBonusId = function(e) {
    let t = 0;
    let a = WH.getPageData("wow.item.bonuses.listGroup");
    if (e && e.length) {
        for (let i = 0; i < e.length; ++i) {
            let n = parseInt(e[i]);
            if (window.g_itembonuses && g_itembonuses["-1"] &&
                g_itembonuses["-1"].includes(n) || a !== null && a.includes(
                    n)) {
                t = e[i];
                break
            }
        }
    }
    return t
};
WH.bonusesBtnIsComboValid = function(e, t, a) {
    if (!e[t] || !e[t].sub) {
        return false
    }
    var i = e[t].sub;
    var n = 32768;
    var r = 32768;
    for (var o in a) {
        var s = a[o];
        if (s != t) {
            if (i[s]) {
                if ((n & i[s].type) == 1) {} else if (n & i[s].type) {
                    n = false;
                    break
                } else {
                    n |= i[s].type
                }
                if (r & i[s].upgradeType) {
                    r = false;
                    break
                } else {
                    r |= i[s].upgradeType
                }
            } else {
                n = false;
                break
            }
        }
    }
    return n && r
};
WH.bonusesGetItem = function() {
    var e = WH.getDataSource();
    var t = this._bonusesBtn.ttId;
    return e[t]
};
WH.bonusesGetDefaultAdjustmentBonus = function(e) {
    var t = WH.bonusesGetItem.call(this);
    var a = WH.bonusesBtnGetContextBonusId(e);
    if (t.defaultAdjustmentBonuses[a]) {
        return t.defaultAdjustmentBonuses[a].toString()
    }
    return null
};
WH.bonusesBtnOnChange = function(e, t, a) {
    var i = WH.getDataSource();
    var n = this._bonusesBtn.ttId;
    var r = i[n].bonusesData;
    if (a === true) {
        var o = e.split(":");
        var s = 0;
        var l = o.indexOf("u");
        if (l != -1) {
            s = o[l + 1];
            o.splice(l, 1)
        }
        var c = o[0];
        var u = !Menu.findItem(this._bonusesBtn.menu, o).checked;
        var p = 0;
        var f = [];
        WH.arrayWalk(this._bonusesBtn.menu, (function(e) {
            if (e.checked) {
                p = e[Menu.ITEM_CRUMB];
                var t = Menu.getSubmenu(e);
                if (t) {
                    WH.arrayWalk(t, (function(e) {
                        if (e[Menu.ITEM_CRUMB] && e
                            .checked) {
                            f.push(e[Menu
                                .ITEM_CRUMB]);
                            if (p == c && r[p].sub[
                                    e[Menu
                                        .ITEM_CRUMB]
                                    ]
                                .groupedUpgrade && !
                                s) {
                                s = e[Menu
                                    .ITEM_CRUMB]
                            }
                        }
                    }))
                }
            }
        }));
        var d;
        if (p == c) {
            if (u) {
                d = f.concat(o)
            } else {
                f.splice(f.indexOf(o[1]), 1);
                d = f.concat([c])
            }
        } else {
            d = o
        }
        d.sort((function(e, t) {
            return e - t
        }));
        if (!WH.bonusesBtnIsComboValid(r, c, d)) {
            d = o;
            var g = r[c].sub[o[1]].type;
            var m = r[c].sub[o[1]].upgradeType;
            for (var h = 0; h < f.length; ++h) {
                if (g != r[c].sub[f[h]].type) {
                    d.push(f[h])
                } else if (m != r[c].sub[f[h]].upgradeType) {
                    d.push(f[h])
                }
            }
            d.sort((function(e, t) {
                return e - t
            }))
        }
        if (s) {
            var W = d.indexOf(s);
            if (W != -1) {
                d.splice(d.indexOf(s), 0, "u")
            }
        }
        e = d.join(":").replace(/^0:/, "")
    }
    this._bonusesBtn.selectedBonus = e;
    var H = this._bonusesBtn.selectedBonus.split(":");
    var v = WH.bonusesGetDefaultAdjustmentBonus.call(this, H);
    if (v != null) {
        var T = false;
        for (var h in H) {
            var b = H[h];
            if (1372 <= b && b <= 1672) {
                T = true
            }
        }
        if (!T) {
            H.push(v);
            this._bonusesBtn.selectedBonus = H.join(":")
        }
    }
    var l = H.indexOf("u");
    if (l != -1) {
        H.splice(l, 1)
    }
    var y = [];
    for (var h = 0; h < this._bonusesBtn.menu.length; h++) {
        let e = this._bonusesBtn.menu[h][Menu.ITEM_CRUMB];
        if (e && y.indexOf(e) < 0) {
            y.push(e)
        }
    }
    H.sort((function(e, t) {
        return (y.indexOf(e) < 0 ? 1 : -1) - (y.indexOf(t) < 0 ?
            1 : -1)
    }));
    $(this._bonusesBtn).html("");
    var S = WH.bonusesBtnGetContextBonusId(H);
    WH.arrayWalk(this._bonusesBtn.menu, (function(e) {
        e.checked = e[Menu.ITEM_CRUMB] == S;
        var t = Menu.getSubmenu(e);
        if (t) {
            WH.arrayWalk(t, (function(t) {
                if (t[Menu.ITEM_CRUMB]) {
                    t.checked = e.checked && H
                        .indexOf(t[Menu
                        .ITEM_CRUMB]) != -1;
                    if (t.$a) {
                        t[Menu.ITEM_OPTIONS] = null;
                        Menu.updateItem(t)
                    }
                }
            }))
        }
    }));
    var w = Menu.findItem(this._bonusesBtn.menu, [S]);
    if (w) {
        var E = Menu.getSubmenu(w);
        if (E) {
            WH.arrayWalk(E, (function(e) {
                if (e[Menu.ITEM_CRUMB]) {
                    var t = H;
                    if (H.indexOf(e[Menu.ITEM_CRUMB]) == -1) {
                        t = t.concat([e[Menu.ITEM_CRUMB]])
                    }
                    t.sort((function(e, t) {
                        return e - t
                    }));
                    if (!WH.bonusesBtnIsComboValid(r, S, t) && H
                        .indexOf(v) == -1) {
                        e[Menu.ITEM_OPTIONS] = {
                            class: "q0"
                        }
                    } else {
                        e[Menu.ITEM_OPTIONS] = {}
                    }
                    Menu.updateItem(e)
                }
            }))
        }
    }
    let _ = w && w[Menu.ITEM_LABEL] || WH.getItemBonusName.call(this, S, i[
        n]);
    for (var h = 0; h < H.length; ++h) {
        if (H[h] != S && H[h] != v) {
            _ += " + " + WH.getItemBonusName.call(this, H[h], i[n], S)
        }
    }
    $(this._bonusesBtn).append(_);
    var I = 0;
    if (WH.isSet("g_itembonuses") && g_items && g_items[n]) {
        for (var h in H) {
            var M = H[h];
            if (g_itembonuses[M]) {
                for (var k = 0; k < g_itembonuses[M].length; ++k) {
                    var x = g_itembonuses[M][k];
                    if (x[0] == 7 && g_items[n].appearances && g_items[n]
                        .appearances[x[1]]) {
                        I = g_items[n].appearances[x[1]][0];
                        break
                    }
                }
            }
        }
    }
    var C = $("#e8c7e052e3e0");
    if (C.length > 0) {
        var L = C.get(0).attributes.onclick.value;
        var A = new RegExp("\\(this, " + n + ", \\[[^\\]]*?],");
        if (A.test(L)) {
            var R = [];
            for (var P in H) {
                var N = H[P];
                if (N == 0) {
                    R.push(N);
                    continue
                }
                var O = WH.isSet("g_itembonuses") && g_itembonuses[N] ?
                    g_itembonuses[N] : [];
                for (var B in O) {
                    if (!O.hasOwnProperty(B)) {
                        continue
                    }
                    var D = O[B][0];
                    var F = O[B][1];
                    if (WH.inArray([1, 2, 6, 14], D) != -1) {
                        if (D == 2 && WH.inArray([61, 62, 63, 64, 66], F) !=
                            -1) {
                            continue
                        }
                        R.push(N)
                    }
                }
            }
            C.get(0).attributes.onclick.value = L.replace(A, "(this, " + n +
                ", [" + R.join(",") + "],")
        }
    }
    var U = $("#ic" + n);
    if (U.length > 0 && g_items) {
        var q = g_items.getIcon(n, H);
        if (q) {
            U[0].removeChild(U[0].firstChild);
            U[0].appendChild(Icon.create(q, 2))
        }
    }
    var j = $("#wh-mv-view-in-3d-button")[0];
    if (j) {
        if (!j.dataset.mvDisplayIdOrig && j.dataset.mvDisplayId) {
            j.dataset.mvDisplayIdOrig = j.dataset.mvDisplayId
        }
        if (!I && j.dataset.mvDisplayIdOrig) {
            I = j.dataset.mvDisplayIdOrig
        }
        if (I) {
            let e = WH.Gatherer.get(parseInt(j.dataset.mvType), parseInt(j
                .dataset.mvTypeId));
            let t = e && e.jsonequip && e.jsonequip.races;
            let a = WH.Wow.Models.getRaceIdFromMask(t);
            if (e.classs !== WH.Wow.Item.CLASS_ARMOR) {
                a = undefined
            }
            j.attributes.onclick.value = j.attributes.onclick.value.replace(
                /"displayId":\d+/, '"displayId":' + I);
            j.dataset.mvDisplayId = I;
            let i = WH.ge("sticky-screenshot-model-substitute");
            if (i) {
                i.src = WH.Wow.Item.getThumbUrl(parseInt(I), a)
            }
        }
    }
    let z = this._bonusesBtn.selectedBonus.replace(/u:/, "");
    WH.Url.replacePageQuery((function(e) {
        if (z) {
            e.bonus = z
        } else {
            delete e.bonus
        }
    }));
    WH.updateItemStringLink.call(this);
    if (!t && i[n]["tooltip_" + Locale.getName()]) {
        var G = WH.ge("sl" + n);
        G.innerHTML = "";
        this.slider = null;
        var V = WH.enhanceTooltip.call(this, n, true, true, G, null, this
            ._knownSpells, WH.ge("ks" + n), this._selectedUpgrade, null,
            null, true, null, null, this._bonusesBtn.selectedBonus);
        WH.updateTooltip.call(this, V)
    }
};
WH.updateItemStringLink = function() {
    var e = WH.getDataSource();
    var t = WH.isSet("g_pageInfo") ? g_pageInfo["typeId"] : null;
    if (e[t]) {
        var a = "";
        var i = [];
        if (this._bonusesBtn && this._bonusesBtn.selectedBonus) {
            a = this._bonusesBtn.selectedBonus.replace(/u:/, "");
            i = a.split(":")
        }
        var n = typeof this._selectedUpgrade == "number" ? this
            ._selectedUpgrade : 0;
        var r = e[t].upgradeData.length > 0 ? e[t].upgradeData[n].id : "";
        var o = this._selectedLevel ? this._selectedLevel : WH.maxLevel;
        var s = this._knowledgeLevel ? this._knowledgeLevel : 0;
        var l = this._classSpecBtn && this._classSpecBtn.selectedSpec ? this
            ._classSpecBtn.selectedSpec : "";
        var c = 0;
        var u = "";
        if (r) {
            c |= 4;
            u = (u ? ":" : "") + r
        } else if (i.length && g_itembonuses) {
            e: for (var p = 0, f; f = i[p]; p++) {
                if (!g_itembonuses[f]) {
                    continue
                }
                for (var d = 0, g; g = g_itembonuses[f][d]; d++) {
                    if (g[0] == 11 || g[0] == 13) {
                        c |= 512;
                        u = (u ? ":" : "") + o;
                        break e
                    }
                }
            }
        }
        if (s) {
            c |= 8388608;
            u = (u ? ":" : "") + (s + 1)
        }
        var m = "" + (c ? c : "") + "::" + (i.length ? i.length + ":" :
            "") + a + ":" + u;
        var h = WH.ge("open-links-button");
        if (h) {
            var W = {
                type: 3,
                typeId: t,
                linkColor: "ff" + WH.Wow.Item.getQualityColor(e[t]
                    .quality, true).replace(/^#/, ""),
                linkId: "item:" + t + "::::::::" + o + ":" + l + ":" +
                    m,
                linkName: e[t]["name_" + Locale.getName()],
                bonuses: i,
                slot: e[t].slot
            };
            if (o != WH.maxLevel) {
                W.lvl = o
            }
            if (l) {
                W.spec = l
            }
            if (sliderControl = WH.ge("sl" + t)) {
                W.dropLevel = $(sliderControl).find("input").val()
            }
            h.onclick = WH.Links.show.bind(WH.Links, h, W)
        }
    }
};
WH.upgradeItemTooltip = function(e, t) {
    var a = WH.getDataSource();
    var i = g_pageInfo["typeId"];
    if (a[i]) {
        var n = $("#" + e.id + " > input");
        var r = null;
        if (typeof t != "number") {
            n.each((function(e, a) {
                if (a.id.indexOf(t) != -1) {
                    r = a;
                    return false
                }
            }))
        } else {
            r = n.get(t - 1)
        }
        var o = r.checked;
        n.each((function(e, t) {
            t.checked = false
        }));
        r.checked = o;
        if (!o) {
            t = null
        }
        this._selectedUpgrade = t;
        WH.updateItemStringLink.call(this);
        if (a[i]["tooltip_" + Locale.getName()]) {
            var s = this._bonusesBtn && this._bonusesBtn.selectedBonus ?
                this._bonusesBtn.selectedBonus : null;
            var l = WH.enhanceTooltip.call(this, i, true, true, false, null,
                this._knownSpells, WH.ge("ks" + i), t, null, null, true,
                null, null, s);
            WH.updateTooltip.call(this, l)
        }
    }
};
WH.updateTooltip = function(e) {
    if (this.classList.contains("partial-sub-tooltip")) {
        this.innerHTML = WH.Tooltip.evalFormulas(e);
        return
    }
    this.innerHTML = "<table><tr><td>" + WH.Tooltip.evalFormulas(e) +
        '</td><th style="background-position: top right"></th></tr><tr><th style="background-position: bottom left"></th><th style="background-position: bottom right"></th></tr></table>';
    WH.Tooltip.finalizeSizeAndReveal(this)
};
WH.staticTooltipLevelClick = function(e, t, a, i) {
    while (e.className.indexOf("tooltip") == -1) {
        e = e.parentNode
    }
    var n = e.innerHTML;
    var r = n.match(/<!--i?\?(\d+):(\d+):(\d+):(\d+)/);
    if (!r && !WH.isRetailTree()) {
        r = n.match(/<!--ppl(\d+):(\d+):(\d+):(\d+):(\d+)/);
        if (r) {
            r = [null, r[1], r[2], WH.maxLevel, 0]
        }
    }
    if (!r) {
        return
    }
    var o = parseInt(r[1]),
        s = parseInt(r[2]),
        l = parseInt(r[3]),
        c = parseInt(r[4]);
    if (s >= l) {
        return
    }
    if (isNaN(t)) {
        t = prompt(WH.sprintf(WH.TERMS.ratinglevel_format, s, l), c)
    }
    t = parseInt(t);
    if (isNaN(t)) {
        return
    }
    if (t == c || t < s || t > l) {
        return
    }
    e._selectedLevel = t;
    var u = WH.getDataSource();
    r = WH.setTooltipLevel.bind(e, u[o][(i ? "buff_" : "tooltip_") + Locale
        .getName()
    ], t, i)();
    var p = e._bonusesBtn && e._bonusesBtn.selectedBonus ? e._bonusesBtn
        .selectedBonus : null;
    var f = e._selectedUpgrade ? e._selectedUpgrade : 0;
    r = WH.enhanceTooltip.call(e, r, true, null, null, null, null, null, f,
        null, null, null, null, null, p);
    WH.updateTooltip.call(e, r);
    if (e.slider && !a) {
        Slider.setValue(e.slider, t)
    }
    if (!i) {
        WH.tooltipSpellsChange.bind(e)()
    }
};
WH.staticTooltipKnowledgeLevelClick = function(e, t, a) {
    while (e.className.indexOf("tooltip") == -1) {
        e = e.parentNode
    }
    var i = e.innerHTML;
    if (isNaN(t)) {
        WH.Tooltip.hide();
        t = prompt(WH.sprintf(WH.TERMS.ratinglevel_format, 0,
                g_artifact_knowledge_max_level), e._knowledgeLevel ? e
            ._knowledgeLevel : 0)
    }
    t = parseInt(t);
    if (isNaN(t)) {
        return
    }
    if (t < 0 || t > g_artifact_knowledge_max_level) {
        return
    }
    e._knowledgeLevel = t;
    WH.Url.replacePageQuery((function(e) {
        if (t) {
            e.artk = t
        } else {
            delete e.artk
        }
    }));
    var n = WH.getDataSource();
    i = WH.setTooltipLevel.bind(e, n[a]["tooltip_" + Locale.getName()], e
        ._selectedLevel, null)();
    var r = e._bonusesBtn && e._bonusesBtn.selectedBonus ? e._bonusesBtn
        .selectedBonus : null;
    var o = e._selectedUpgrade ? e._selectedUpgrade : 0;
    i = WH.enhanceTooltip.call(e, i, true, null, null, null, null, null, o,
        null, null, null, null, null, r);
    WH.updateTooltip.call(e, i)
};
WH.tooltipSliderMove = function(e, t, a) {
    WH.staticTooltipLevelClick(this, a.value, 1);
    if (this.bufftip) {
        WH.staticTooltipLevelClick(this.bufftip, a.value, 1, 1)
    }
    WH.Tooltip.hide()
};
WH.tooltipSpellsChange = function() {
    if (!this.modified) {
        return
    }
    var e = this.modified[0],
        t = this.modified[1],
        a = [];
    $.each($("input:checked", e), (function(e, t) {
        a.push(parseInt(t.dataset.spellId))
    }));
    $.each($("select option", e), (function(e, t) {
        if (t.selected) {
            a.push(parseInt(t.value))
        }
    }));
    this.modified[2] = a;
    this.innerHTML = WH.setTooltipSpells(this.innerHTML, a, t);
    if (this.bufftip) {
        WH.tooltipSpellsChange.bind(this.bufftip)()
    }
};
WH.tooltipRPPMChange = function(e) {
    var t = $(this).attr("id").match(/\d+$/)[0];
    e.innerHTML = WH.Tooltip.evalFormulas(e.innerHTML.replace(
        /<!--rppm-->(\[?)(\d+(?:\.\d+)?)([^<]*)<!--rppm-->/, (
            function(a, i, n, r) {
                return "\x3c!--rppm--\x3e" + i + (e._rppmModBase * (
                        1 + parseFloat(e._rppmSpecModList[t]
                            .modifiervalue))).toFixed(2) + r +
                    "\x3c!--rppm--\x3e"
            })))
};
WH.validateBpet = function(e, t) {
    var a = 1,
        i = 25,
        n = 25,
        r = 0,
        o = 4,
        s = 3,
        l = (1 << 10) - 1,
        c = 3,
        u = $.extend({}, t);
    if (e.minlevel) {
        a = e.minlevel
    }
    if (e.maxlevel) {
        i = e.maxlevel
    }
    if (e.companion) {
        i = a
    }
    if (!u.level) {
        u.level = n
    }
    u.level = Math.min(Math.max(u.level, a), i);
    if (e.minquality) {
        r = e.minquality;
        if (e.untameable) {
            o = r
        }
    }
    if (e.maxquality) {
        o = e.maxquality
    }
    if (u.quality == null) {
        u.quality = s
    }
    u.quality = Math.min(Math.max(u.quality, r), o);
    if (e.companion) {
        delete u.quality
    }
    if (e.breeds > 0) {
        l = e.breeds & l
    }
    if (!(l & 1 << c - 3)) {
        c = Math.floor(3 + Math.log(l) / Math.LN2)
    }
    if (u.breed && u.breed >= 13) {
        u.breed -= 10
    }
    if (!u.breed || !(l & 1 << u.breed - 3)) {
        u.breed = c
    }
    return u
};
WH.calcBattlePetStats = function(e, t, a, i, n) {
    if (!WH.battlePetBreedStats[t]) {
        t = 3
    }
    var r = e.health;
    if (isNaN(r)) {
        r = 0
    }
    var o = e.power;
    if (isNaN(o)) {
        o = 0
    }
    var s = e.speed;
    if (isNaN(s)) {
        s = 0
    }
    if (isNaN(a)) {
        a = 1
    }
    a = Math.min(Math.max(0, a), 5);
    if (isNaN(i)) {
        i = 1
    }
    i = Math.min(Math.max(1, i), 25);
    var l = WH.battlePetBreedStats[t];
    var c = 1 + a / 10;
    r = (r + l[0]) * 5 * i * c + 100;
    o = (o + l[1]) * i * c;
    s = (s + l[2]) * i * c;
    if (n) {
        r = r * 5 / 6;
        o = o * 4 / 5
    }
    return {
        health: Math.round(r),
        power: Math.round(o),
        speed: Math.round(s)
    }
};
WH.battlePetBreedStats = {
    3: [.5, .5, .5],
    4: [0, 2, 0],
    5: [0, 0, 2],
    6: [2, 0, 0],
    7: [.9, .9, 0],
    8: [0, .9, .9],
    9: [.9, 0, .9],
    10: [.4, .9, .4],
    11: [.4, .4, .9],
    12: [.9, .4, .4]
};
WH.battlePetAbilityLevels = [1, 2, 4, 10, 15, 20];
WH.Tooltip = {
    ARTIFACT_KNOWLEDGE_MULTIPLIERS: undefined,
    BONUS_ITEM_EFFECTS: undefined,
    ITEM_EFFECT_NAMES: undefined,
    ITEM_EFFECT_TOOLTIP_HTML: undefined,
    showingTooltip: false,
    create: function(e, t) {
        var a = WH.ce("div"),
            i = WH.ce("table"),
            n = WH.ce("tbody"),
            r = WH.ce("tr"),
            o = WH.ce("tr"),
            s = WH.ce("td"),
            l = WH.ce("th"),
            c = WH.ce("th"),
            u = WH.ce("th");
        a.className = "wowhead-tooltip";
        l.style.backgroundPosition = "top right";
        c.style.backgroundPosition = "bottom left";
        u.style.backgroundPosition = "bottom right";
        if (e) {
            s.innerHTML = WH.Tooltip.evalFormulas(e)
        }
        WH.ae(r, s);
        WH.ae(r, l);
        WH.ae(n, r);
        WH.ae(o, c);
        WH.ae(o, u);
        WH.ae(n, o);
        WH.ae(i, n);
        if (!t) {
            WH.Tooltip.icon = WH.ce("p");
            WH.Tooltip.icon.style.visibility = "hidden";
            WH.ae(WH.Tooltip.icon, WH.ce("div"));
            WH.ae(a, WH.Tooltip.icon)
        }
        WH.ae(a, i);
        if (!t) {
            var p = WH.ce("div");
            p.className = "wowhead-tooltip-powered";
            WH.ae(a, p);
            WH.Tooltip.logo = p
        }
        return a
    },
    getMultiPartHtml: function(e, t) {
        return "<table><tr><td>" + e +
            "</td></tr></table><table><tr><td>" + t +
            "</td></tr></table>"
    },
    evalFormulas: function(e) {
        if (typeof e !== "string") {
            return e
        }
        let t =
            /<span class="wh-tooltip-formula" style="display:none">(\[[\w\W]*?\])<\/span>(?:\d+(?:\.\d+)?)?/g;
        e = e.replace(t, "$1");
        var a = 0;
        var i = 0;
        var n = "";
        var r = 0;
        for (var o = 0; o < e.length; o++) {
            var s = e.substr(o, 1);
            switch (s) {
                case "[":
                    a++;
                    i = 0;
                    n = "";
                    break;
                case "]":
                    a--;
                    if (a < 0) {
                        a = 0
                    }
                    i = 0;
                    n = "";
                    break;
                case "(":
                    if (a > 0) {
                        break
                    }
                    n += s;
                    i++;
                    break;
                case ")":
                    if (a > 0) {
                        break
                    }
                    if (i > 0) {
                        n += s;
                        i--
                    }
                    break;
                default:
                    if (a == 0 && i > 0) {
                        n += s
                    }
            }
            if (a == 0 && i == 0 && n) {
                r = o - n.length + 1;
                if (/[^ ()0-9\+\*\/\.-]/.test(n.replace(
                        /<!--[\w\W]*?-->/g, "").replace(
                        /\b(floor|ceil|abs)\b/gi, ""))) {
                    n = "";
                    continue
                }
                if (/^\([0-9\.]*\)$/.test(n)) {
                    n = "";
                    continue
                }
                if (!/<!--[\w\W]*?-->/g.test(n)) {
                    n = "";
                    continue
                }
                e = e.substr(0, r) + "[" + e.substring(r, o + 1) + "]" +
                    e.substr(o + 1);
                o += 2;
                n = ""
            }
        }
        e = e.replace(/\[([^\]]+)\]/g, (function(e, t) {
            var a;
            t = t.replace(/<!--[\w\W]*?-->/g, "");
            t = t.replace(/\b(floor|ceil|abs)\b/gi,
                "Math.$1");
            try {
                a = Function('"use strict";return (' + t +
                    ")")()
            } catch (e) {
                a = undefined
            }
            if (typeof a === "undefined") {
                return e
            }
            return '<span class="wh-tooltip-formula" style="display:none">' +
                e + "</span>" + Math.abs(a).toFixed(3)
                .replace(/0+$/, "").replace(/\.$/, "")
        }));
        return e
    },
    finalizeSize: function(e, t) {
        const a = 320;
        const i = 20;
        let n = WH.qs("table", e);
        let r = WH.qs("td", n);
        let o = r.childNodes;
        e.classList.remove("tooltip-slider");
        if (o.length >= 2 && o[0].nodeName === "TABLE" && o[1]
            .nodeName === "TABLE") {
            let r = o[0];
            let s = o[1];
            r.style.whiteSpace = "nowrap";
            let l = parseInt(e.style.width);
            if (!e.slider || !l) {
                l = Math.max(r.getBoundingClientRect().width, s
                    .getBoundingClientRect().width) + i
            }
            if (l > a) {
                r.style.whiteSpace = null
            }
            for (let e = 2; e < o.length; e++) {
                if (o[e].nodeName === "BLOCKQUOTE") {
                    l = Math.max(l, o[e].getBoundingClientRect().width +
                        i)
                }
            }
            l = Math.min(a, l);
            if (l > 20) {
                if (e.slider) {
                    Slider.setSize(e.slider, l - 6);
                    e.classList.add("tooltip-slider")
                }
                e.classList.add("wowhead-tooltip-width-restriction");
                e.classList.add("wowhead-tooltip-width-" + l);
                e.style.width = l + "px";
                r.style.width = s.style.width = "100%";
                if (t && e.offsetHeight > document.documentElement
                    .offsetHeight) {
                    n.classList.add("shrink")
                }
            }
        } else if (o.length && e.slider) {
            let r = o[0];
            let s = r.nodeName === "TABLE";
            if (s) {
                r.style.whiteSpace = "nowrap"
            }
            let l = parseInt(e.style.width);
            if (!l && s) {
                l = r.getBoundingClientRect().width + i;
                if (l > a) {
                    r.style.whiteSpace = null
                }
            } else {
                l = n.getBoundingClientRect().width + i
            }
            l = Math.min(a, l);
            if (l > 20) {
                e.style.width = l + "px";
                if (s) {
                    r.style.width = "100%"
                }
                if (e.slider) {
                    Slider.setSize(e.slider, l - 6);
                    e.classList.add("tooltip-slider")
                }
                if (t && e.offsetHeight > document.documentElement
                    .offsetHeight) {
                    n.classList.add("shrink")
                }
            }
        }
    },
    finalizeSizeAndReveal: function(e) {
        WH.Tooltip.finalizeSize(e, false);
        WH.Tooltip.setTooltipVisibility(e, true)
    },
    attachImage: function(e, t, a, i) {
        if (typeof i == "undefined") i = "";
        if (typeof jQuery != "undefined") {
            jQuery(e.parentNode).children(".image" + i).remove()
        } else {
            var n = new RegExp("\\bimage" + i + "\\b");
            for (var r = 0; r < e.parentNode.childNodes.length; r++) {
                if (n.test(e.parentNode.childNodes[r].className)) {
                    e.parentNode.removeChild(e.parentNode.childNodes[
                    r]);
                    r--
                }
            }
        }
        var o = typeof t;
        if (o == "number") {
            var s = WH.getDataSource(),
                l = t;
            if (s[l] && s[l]["image_" + Locale.getName() + i]) {
                t = s[l]["image_" + Locale.getName() + i]
            } else {
                return
            }
        } else if (o != "string" || !t) {
            return
        }
        var c = WH.ce("div");
        c.className = "image" + i + (a ? " " + a : "");
        c.style.backgroundImage = "url(" + t + ")";
        if (typeof jQuery != "undefined") {
            jQuery(e).after(c)
        } else {
            e.parentNode.insertBefore(c, e.nextSibling)
        }
    },
    append: function(e, t, a, i) {
        var e = WH.ge(e);
        var n = WH.Tooltip.create(t, a);
        if (i) {
            var r = WH.ce("p");
            r.style.backgroundImage = "url(" + WH.staticUrl +
                "/images/wow/icons/medium/" + i.toLowerCase() + ".jpg)";
            WH.ae(r, WH.ce("div"));
            WH.ae(n, r)
        }
        WH.ae(e, n);
        WH.Tooltip.finalizeSizeAndReveal(n)
    },
    reset: function() {
        if (WH.Tooltip.tooltip) {
            WH.Tooltip.tooltip.parentNode.removeChild(WH.Tooltip
                .tooltip);
            WH.Tooltip.tooltip = null
        }
        if (WH.Tooltip.tooltip2) {
            WH.Tooltip.tooltip2.parentNode.removeChild(WH.Tooltip
                .tooltip2);
            WH.Tooltip.tooltip2 = null
        }
    },
    prepare: function(e, t) {
        var a = t === true ? "fixed" : "absolute";
        if (WH.Tooltip.tooltip) {
            WH.Tooltip.tooltip.style.position = a;
            WH.Tooltip.tooltip2.style.position = a;
            return
        }
        var i = typeof e != "undefined" ? e : document.body;
        var n = WH.Tooltip.create();
        n.style.position = a;
        n.style.left = n.style.top = "-2323px";
        WH.ae(i, n);
        WH.Tooltip.tooltip = n;
        WH.Tooltip.tooltipTable = WH.gE(n, "table")[0];
        WH.Tooltip.tooltipTd = WH.gE(n, "td")[0];
        var n = WH.Tooltip.create(null, true);
        n.style.position = a;
        n.style.left = n.style.top = "-2323px";
        WH.ae(i, n);
        WH.Tooltip.tooltip2 = n;
        WH.Tooltip.tooltipTable2 = WH.gE(n, "table")[0];
        WH.Tooltip.tooltipTd2 = WH.gE(n, "td")[0]
    },
    prepareScreen: function() {
        if (WH.Tooltip.screen) {
            WH.Tooltip.screen.style.display = "block"
        } else {
            WH.Tooltip.screen = WH.ce("div", {
                id: "wowhead-tooltip-screen",
                className: "wowhead-tooltip-screen"
            });
            WH.Tooltip.screenCloser = WH.ce("a", {
                id: "wowhead-tooltip-screen-close",
                className: "wowhead-tooltip-screen-close",
                onclick: $WowheadPower.clearTouchTooltip
            });
            WH.Tooltip.screenInnerWrapper = WH.ce("div", {
                id: "wowhead-tooltip-screen-inner-wrapper",
                className: "wowhead-tooltip-screen-inner-wrapper"
            });
            WH.Tooltip.screenInner = WH.ce("div", {
                id: "wowhead-tooltip-screen-inner",
                className: "wowhead-tooltip-screen-inner"
            });
            WH.Tooltip.screenInnerBox = WH.ce("div", {
                id: "wowhead-tooltip-screen-inner-box",
                className: "wowhead-tooltip-screen-inner-box"
            });
            WH.Tooltip.screenCaption = WH.ce("div", {
                id: "wowhead-tooltip-screen-caption",
                className: "wowhead-tooltip-screen-caption"
            });
            WH.ae(WH.Tooltip.screen, WH.Tooltip.screenCloser);
            WH.ae(WH.Tooltip.screenInner, WH.Tooltip.screenInnerBox);
            WH.ae(WH.Tooltip.screenInnerWrapper, WH.Tooltip
            .screenInner);
            WH.ae(WH.Tooltip.screen, WH.Tooltip.screenInnerWrapper);
            WH.ae(WH.Tooltip.screen, WH.Tooltip.screenCaption);
            WH.ae(document.body, WH.Tooltip.screen)
        }
        WH.Tooltip.mobileTooltipShown = true;
        WH.Tooltip.setupIScroll()
    },
    destroyIScroll: function() {
        if (WH.Tooltip.iScroll) {
            WH.Tooltip.iScroll.destroy();
            WH.Tooltip.iScroll = null
        }
    },
    setupIScroll: function() {
        if (!WH.Tooltip.mobileScrollSetUp) {
            var e = function(e) {
                if (WH.Tooltip.mobileTooltipShown) {
                    if (!document.getElementById(
                            "wowhead-tooltip-screen-inner")
                        .contains(e.target)) {
                        e.preventDefault()
                    }
                }
            };
            WH.aE(document.body, "touchmove", e);
            WH.aE(document.body, "mousewheel", e);
            WH.Tooltip.mobileScrollSetUp = true
        }
        if (typeof IScroll != "function") {
            return
        }
        setTimeout((function() {
            WH.Tooltip.destroyIScroll();
            WH.Tooltip.iScroll = new IScroll(WH.Tooltip
                .screenInnerWrapper, {
                    mouseWheel: true,
                    tap: true
                })
        }), 1)
    },
    setTooltipVisibility: function(e, t) {
        if (t) {
            e.setAttribute("data-visible", "yes");
            e.style.visibility = "visible"
        } else {
            e.setAttribute("data-visible", "no");
            e.style.visibility = "hidden"
        }
    },
    set: function(e, t, a, i) {
        WH.Tooltip.tooltip.style.width = "550px";
        WH.Tooltip.tooltip.style.left = "-2323px";
        WH.Tooltip.tooltip.style.top = "-2323px";
        WH.Tooltip.tooltip.className = "wowhead-tooltip";
        if (e.nodeName) {
            WH.ee(WH.Tooltip.tooltipTd);
            WH.ae(WH.Tooltip.tooltipTd, e)
        } else {
            WH.Tooltip.tooltipTd.innerHTML = WH.Tooltip.evalFormulas(e)
        }
        WH.Tooltip.tooltip.style.display = "";
        WH.Tooltip.setTooltipVisibility(WH.Tooltip.tooltip, true);
        WH.Tooltip.finalizeSize(WH.Tooltip.tooltip, true);
        if (t) {
            WH.Tooltip.showSecondary = true;
            WH.Tooltip.tooltip2.style.width = "550px";
            WH.Tooltip.tooltip2.style.left = "-2323px";
            WH.Tooltip.tooltip2.style.top = "-2323px";
            if (t.nodeName) {
                WH.ee(WH.Tooltip.tooltipTd2);
                WH.ae(WH.Tooltip.tooltipTd2, t)
            } else {
                WH.Tooltip.tooltipTd2.innerHTML = WH.Tooltip
                    .evalFormulas(t)
            }
            WH.Tooltip.tooltip2.style.display = "";
            WH.Tooltip.finalizeSize(WH.Tooltip.tooltip2, true)
        } else {
            WH.Tooltip.showSecondary = false
        }
        if (window.Platform && Platform.isTouch() || WH.isTouch()) {
            let e = WH.Tooltip.showSecondary ? WH.Tooltip.tooltipTd2 :
                WH.Tooltip.tooltipTd;
            let t = WH.ce("a");
            t.href = "javascript:";
            t.className = "wowhead-touch-tooltip-closer";
            t.onclick = $WowheadPower.clearTouchTooltip;
            WH.ae(e, t)
        }
        WH.Tooltip.tooltipTable.style.display = e == "" ? "none" : "";
        WH.Tooltip.attachImage(WH.Tooltip.tooltipTable, a, i);
        WH.Tooltip.generateEvent("show")
    },
    moveTests: [
        [null, null],
        [null, false],
        [false, null],
        [false, false]
    ],
    move: function(e, t, a, i, n, r) {
        if (!WH.Tooltip.tooltipTable) return;
        let o = WH.Tooltip.tooltip;
        let s = WH.Tooltip.tooltipTable.getBoundingClientRect().width;
        let l = WH.Tooltip.tooltip2;
        let c = WH.Tooltip.showSecondary ? WH.Tooltip.tooltipTable2
            .getBoundingClientRect().width : 0;
        let u;
        o.style.width = s == 0 ? "auto" : s + "px";
        l.style.width = c + "px";
        var p, f;
        for (var d = 0, g = WH.Tooltip.moveTests.length; d < g; ++d) {
            u = WH.Tooltip.moveTests[d];
            p = WH.Tooltip.moveTest(e, t, a, i, n, r, u[0], u[1]);
            if (WH.WAS && !WH.WAS.intersect(p)) {
                f = true;
                break
            } else if (!WH.WAS) {
                break
            }
        }
        if (WH.WAS && !f) {
            WH.WAS.intersect(p, true)
        }
        o.style.left = p.l + "px";
        o.style.top = p.t + "px";
        WH.Tooltip.setTooltipVisibility(o, true);
        if (WH.Tooltip.showSecondary) {
            l.style.left = p.l + s + "px";
            l.style.top = p.t + "px";
            WH.Tooltip.setTooltipVisibility(l, true)
        }
        WH.Tooltip.generateEvent("move")
    },
    moveTest: function(e, t, a, i, n, r, o, s) {
        let l = e;
        let c = t;
        let u = WH.Tooltip.tooltip;
        let p = WH.Tooltip.tooltipTable.getBoundingClientRect();
        let f = p.width;
        let d = p.height;
        let g = WH.Tooltip.tooltipTable2.getBoundingClientRect();
        let m = WH.Tooltip.showSecondary ? g.width : 0;
        let h = WH.Tooltip.showSecondary ? g.height : 0;
        let W = WH.getWindowSize();
        let H = WH.getScroll();
        let v = H.x;
        let T = H.y;
        let b = H.x + W.w;
        let y = H.y + W.h;
        if (u.style.position === "fixed") {
            e -= H.x;
            t -= H.y;
            l -= e;
            c -= t;
            H = {
                x: 0,
                y: 0
            };
            v = T = 0;
            b = W.w;
            y = W.h
        }
        if (o == null) {
            o = e + a + f + m <= b
        }
        if (s == null) {
            s = t - Math.max(d, h) >= T
        }
        if (o) {
            e += a + n
        } else {
            e = Math.max(e - (f + m), v) - n
        }
        if (s) {
            t -= Math.max(d, h) + r
        } else {
            t += i + r
        }
        if (e < v) {
            e = v
        } else if (e + f + m > b) {
            e = b - (f + m)
        }
        if (t < T) {
            t = T
        } else if (t + Math.max(d, h) > y) {
            t = Math.max(H.y, y - Math.max(d, h))
        }
        if (WH.Tooltip.iconVisible) {
            if (l >= e - 48 && l <= e && c >= t - 4 && c <= t + 48) {
                t -= 48 - (c - t)
            }
        }
        return WH.createRect(e, t, f, d)
    },
    show: function(e, t, a, i, n, r, o, s, l) {
        if (t == null || WH.Tooltip.disabled) {
            return
        }
        if (!a || a < 1) a = 1;
        if (!i || i < 1) i = 1;
        if (n) {
            t = '<span class="' + n + '">' + t + "</span>"
        }
        let c = e.getBoundingClientRect();
        WH.Tooltip.prepare(undefined, l);
        WH.Tooltip.set(t, r, o, s);
        WH.Tooltip.move(c.left + window.scrollX, c.top + window.scrollY,
            c.width, c.height, a, i)
    },
    showAtCursor: function(e, t, a, i, n, r, o, s) {
        if (t == null || WH.Tooltip.disabled) {
            return
        }
        if (!a || a < 10) a = 10;
        if (!i || i < 10) i = 10;
        if (n) {
            t = '<span class="' + n + '">' + t + "</span>";
            if (r) {
                r = '<span class="' + n + '">' + r + "</span>"
            }
        }
        WH.Tooltip.prepare(undefined, e.target ? WH
            .isElementFixedPosition(e.target) : false);
        WH.Tooltip.set(t, r, o, s);
        WH.Tooltip.move(e.pageX, e.pageY, 0, 0, a, i)
    },
    showAtXY: function(e, t, a, i, n, r, o, s, l) {
        if (e == null || WH.Tooltip.disabled) {
            return
        }
        WH.Tooltip.prepare(undefined, l);
        WH.Tooltip.set(e, r, o, s);
        WH.Tooltip.move(t, a, 0, 0, i, n)
    },
    showFadingTooltipAtCursor: function(e, t, a, i, n) {
        n = n || window.event;
        e = WH.Tooltip.prepareTooltipHtml(e, a, i, n);
        WH.Tooltip.showAtCursor(n, e, undefined, undefined, t);
        requestAnimationFrame((function() {
            WH.Tooltip.tooltip.classList.add("fade-out")
        }))
    },
    showInScreen: function(e, t, a, i, n, r, o) {
        $WowheadPower.clearTouchTooltip(true);
        if (t == null || WH.Tooltip.disabled) {
            return
        }
        if (a) {
            t = '<span class="' + a + '">' + t + "</span>"
        }
        WH.Tooltip.prepareScreen();
        WH.ee(WH.Tooltip.screenCaption);
        var s = WH.ce("a", {
            innerHTML: WH.isRemote() ? "Tap Link" : WH.TERMS
                .taplink,
            onclick: function(e, t) {
                e.setAttribute(
                    "data-disable-wowhead-tooltip",
                    "true");
                if (e.fireEvent) {
                    e.fireEvent("on" + t)
                } else if (typeof MouseEvent ==
                    "function") {
                    e.dispatchEvent(new MouseEvent(t, {
                        bubbles: true,
                        cancelable: true
                    }))
                } else {
                    var a = document.createEvent("Events");
                    a.initEvent(t, true, true);
                    e.dispatchEvent(a)
                }
                if (e) {
                    e.removeAttribute(
                        "data-disable-wowhead-tooltip")
                }
                $WowheadPower.clearTouchTooltip()
            }.bind(null, e, "click")
        });
        var l = WH.ce("i", {
            className: "fa fa-hand-o-up"
        });
        WH.aef(s, l);
        WH.ae(WH.Tooltip.screenCaption, s);
        $WowheadPower.setParent(WH.Tooltip.screenInnerBox);
        WH.Tooltip.setIcon(o);
        WH.Tooltip.set(t, i, n, r);
        WH.Tooltip.move()
    },
    cursorUpdate: function(e, t, a) {
        if (WH.Tooltip.disabled || !WH.Tooltip.tooltip) {
            return
        }
        if (!t || t < 10) t = 10;
        if (!a || a < 10) a = 10;
        var i = WH.getCursorPos(e);
        WH.Tooltip.move(i.x, i.y, 0, 0, t, a)
    },
    hide: function() {
        if (WH.Tooltip.tooltip) {
            WH.Tooltip.showingTooltip = false;
            WH.Tooltip.tooltip.style.display = "none";
            WH.Tooltip.setTooltipVisibility(WH.Tooltip.tooltip, false);
            WH.Tooltip.tooltipTable.className = "";
            WH.Tooltip.setIcon(null);
            if (WH.WAS) {
                WH.WAS.restoreHidden()
            }
            WH.Tooltip.generateEvent("hide")
        }
        if (WH.Tooltip.tooltip2) {
            WH.Tooltip.tooltip2.style.display = "none";
            WH.Tooltip.setTooltipVisibility(WH.Tooltip.tooltip2, false);
            WH.Tooltip.tooltipTable2.className = ""
        }
    },
    setIcon: function(e, t) {
        WH.Tooltip.prepare(undefined, t);
        if (e) {
            WH.Tooltip.icon.style.backgroundImage = "url(" + WH
                .staticUrl + "/images/wow/icons/medium/" + e
                .toLowerCase() + ".jpg)";
            WH.Tooltip.icon.style.visibility = "visible"
        } else {
            WH.Tooltip.icon.style.backgroundImage = "none";
            WH.Tooltip.icon.style.visibility = "hidden"
        }
        WH.Tooltip.iconVisible = e ? 1 : 0
    },
    generateEvent: function(e) {
        if (!WH.Tooltip.tooltip) {
            return
        }
        try {
            WH.Tooltip.tooltip.dispatchEvent(new Event(e))
        } catch (a) {
            try {
                var t = document.createEvent("Event");
                t.initEvent(e, true, true);
                WH.Tooltip.tooltip.dispatchEvent(t)
            } catch (e) {
                void 0
            }
        }
    },
    addTooltipText: function(e, t, a) {
        if (!e) {
            WH.error("Tooltip text addition element not found!", e, t,
                a);
            return
        }
        e._fixTooltip = function(e, t, a, i) {
            var n = /<\/table>\s*$/;
            var r = typeof a === "function" ? a() : a;
            var o = a ? ' class="' + r + '"' : "";
            var s = typeof t === "function" ? t() : t;
            if (n.test(i)) {
                return i.replace(n, '<tr><td colspan="2"><div' + o +
                    ' style="margin-top:10px">' + s +
                    "</div></td></tr></table>")
            } else {
                return i + "<div" + o +
                    ' style="margin-top:10px">' + s + "</div>"
            }
        }.bind(null, e, t, a)
    },
    prepareTooltipHtml: function(e, t, a, i) {
        e = typeof e === "function" ? e.call(i.target, i) : e;
        if (typeof e === "string") {
            if (t === undefined && e.length < 30) {
                t = true
            }
            let i = [];
            if (t) {
                i.push(' class="no-wrap"')
            }
            if (a && !isNaN(a)) {
                i.push(' style="max-width:' + a + 'px"')
            }
            if (i.length) {
                e = "<div" + i.join("") + ">" + e + "</div>"
            }
        }
        return e
    },
    simple: function(e, t, a, i, n, r, o) {
        if (e instanceof jQuery) {
            for (let s = 0, l; l = e[s]; s++) {
                WH.Tooltip.simple(l, t, a, i, n, r, o)
            }
            return
        }
        if (i) {
            if (n) {
                e.onmouseover = function(i) {
                    let n = WH.Tooltip.prepareTooltipHtml(t, r, o,
                        i);
                    WH.Tooltip.show(e, n, false, false, a);
                    i.stopPropagation()
                }
            } else {
                e.onmouseover = function(i) {
                    let n = WH.Tooltip.prepareTooltipHtml(t, r, o,
                        i);
                    WH.Tooltip.show(e, n, false, false, a)
                }
            }
        } else {
            if (n) {
                e.onmouseover = function(e) {
                    let i = WH.Tooltip.prepareTooltipHtml(t, r, o,
                        e);
                    WH.Tooltip.showAtCursor(e, i, false, false, a);
                    e.stopPropagation()
                }
            } else {
                e.onmouseover = function(e) {
                    let i = WH.Tooltip.prepareTooltipHtml(t, r, o,
                        e);
                    WH.Tooltip.showAtCursor(e, i, false, false, a)
                }
            }
            e.onmousemove = WH.Tooltip.cursorUpdate
        }
        e.onmouseout = WH.Tooltip.hide
    },
    simpleNonTouch: function(e, t, a, i, n) {
        if (!Platform.isTouch()) {
            WH.Tooltip.simple(e, t, a, i, false, n)
        }
    },
    simpleOverride: function(e, t, a, i, n, r, o, s, l, c, u) {
        e.overrideTooltip = {
            html: t,
            htmlGenerator: a,
            spanClass: i,
            icon: n,
            html2: r,
            html2Generator: o,
            image: s,
            imageClass: l,
            map: c,
            spellData: u
        }
    }
};
WH.createButton = function(e, t, a) {
    var i = "btn btn-site";
    var n = "";
    var r = "";
    var o = "";
    var s = "";
    var l = [];
    var c = [];
    if (!a) {
        a = {}
    }
    if (!a["no-margin"]) {
        c.push("margin-left:5px")
    }
    if (typeof t != "string" || t === "") {
        t = "javascript:"
    }
    if (a["new-window"]) {
        n = ' target="_blank"'
    }
    if (typeof a["id"] == "string") {
        r = ' id="' + a["id"] + '"'
    }
    if (typeof a["size"] != "undefined") {
        switch (a["size"]) {
            case "small":
            case "large":
                l.push("btn-" + a["size"]);
                break
        }
    } else {
        l.push("btn-small")
    }
    if (typeof a["class"] == "string") {
        l.push(a["class"])
    }
    if (typeof a["type"] == "string") {
        switch (a["type"]) {
            case "default":
            case "gray":
                i = "btn";
                break;
            default:
                i = "btn btn-" + a["type"]
        }
    }
    if (a["disabled"]) {
        l.push("btn-disabled");
        t = "javascript:"
    }
    if (l.length) {
        i += " " + l.join(" ")
    }
    if (i) {
        i = ' class="' + i + '"'
    }
    if (!(typeof a["float"] != "undefined" && !a["float"])) {
        c.push("float:right")
    }
    if (typeof a["style"] == "string") {
        c.push(a["style"])
    }
    if (c.length) {
        o = ' style="' + c.join(";") + '"'
    }
    var u = '<a href="' + t + '"' + n + r + i + o + ">" + (e || "") +
    "</a>";
    var p = WH.ce("div");
    p.innerHTML = u;
    var f = p.childNodes[0];
    if (typeof a["click"] == "function" && !a["disabled"]) {
        f.onclick = a["click"]
    }
    if (typeof a["tooltip"] != "undefined") {
        if (a["tooltip"] !== false) {
            f.setAttribute("data-whattach", "true")
        }
        if (a["tooltip"] === false) {
            f.rel = "np"
        } else if (typeof a["tooltip"] == "string") {
            WH.Tooltip.simple(f, a["tooltip"], null, true)
        } else if (typeof a["tooltip"] == "object" && a["tooltip"][
            "text"]) {
            WH.Tooltip.simple(f, a["tooltip"]["text"], a["tooltip"][
                "class"], true)
        }
    }
    return f
};
WH.isTouch = function() {
    if (!WH.REMOTE && window.Platform) {
        WH.isTouch = function() {
            return Platform.isTouch()
        }
    } else {
        var e = navigator.userAgent || navigator.vendor || window.opera;
        var t = {
            isMobile: false,
            isTablet: false
        };
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
            .test(e) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
            .test(e.substr(0, 4))) {
            t.isMobile = true
        }
        if (!t.isMobile && /(android|ipad|playbook|silk)/i.test(e)) {
            t.isTablet = true
        }
        WH.isTouch = function(e) {
            return e.isMobile || e.isTablet
        }.bind(null, t);
        WH.isMobile = function(e) {
            return e
        }.bind(null, t.isMobile);
        WH.isTablet = function(e) {
            return e
        }.bind(null, t.isTablet)
    }
    return WH.isTouch()
};
if (!window.$WowheadPower) {
    window.$WowheadPower = new function() {
        const e = this;
        const t = WH.Types;
        const a = {
            garrisonability: "mission-ability",
            itemset: "item-set",
            petability: "pet-ability"
        };
        const i = -1;
        const n = 0;
        const r = 1;
        const o = {};
        o["-1000"] = {
            name: "Mount",
            path: "mount",
            mobile: true,
            data: {},
            maxId: 5e4
        };
        o["-1001"] = {
            name: "Recipe",
            path: "recipe",
            mobile: true,
            data: {},
            maxId: 5e5
        };
        o["-1002"] = {
            name: "Battle Pet",
            path: "battle-pet",
            mobile: true,
            data: {},
            maxId: 5e4
        };
        o[WH.Types.NPC] = {
            name: "NPC",
            path: "npc",
            mobile: false,
            data: {},
            maxId: 5e5
        };
        o[WH.Types.OBJECT] = {
            name: "Object",
            path: "object",
            mobile: false,
            data: {},
            maxId: 75e4
        };
        o[WH.Types.ITEM] = {
            name: "Item",
            path: "item",
            mobile: true,
            data: {},
            maxId: 5e5
        };
        o[WH.Types.ITEM_SET] = {
            name: "Item Set",
            path: "item-set",
            mobile: true,
            data: {},
            maxId: 1e4,
            minId: -5e3
        };
        o[WH.Types.QUEST] = {
            name: "Quest",
            path: "quest",
            mobile: false,
            data: {},
            maxId: 1e5
        };
        o[WH.Types.SPELL] = {
            name: "Spell",
            path: "spell",
            mobile: true,
            data: {},
            maxId: 5e5
        };
        o[WH.Types.ZONE] = {
            name: "Zone",
            path: "zone",
            mobile: false,
            data: {},
            maxId: 5e4
        };
        o[WH.Types.ACHIEVEMENT] = {
            name: "Achievement",
            path: "achievement",
            mobile: true,
            data: {},
            maxId: 5e4
        };
        o[WH.Types.EVENT] = {
            name: "Event",
            path: "event",
            mobile: false,
            data: {},
            maxId: 1e4
        };
        o[WH.Types.CURRENCY] = {
            name: "Currency",
            path: "currency",
            mobile: false,
            data: {},
            maxId: 1e4
        };
        o[WH.Types.BUILDING] = {
            name: "Building",
            path: "building",
            mobile: false,
            data: {},
            maxId: 1e3
        };
        o[WH.Types.FOLLOWER] = {
            name: "Follower",
            path: "follower",
            mobile: true,
            data: {},
            maxId: 1e4
        };
        o[WH.Types.MISSION_ABILITY] = {
            name: "Mission Ability",
            path: "mission-ability",
            mobile: true,
            data: {},
            maxId: 1e4
        };
        o[WH.Types.MISSION] = {
            name: "Mission",
            path: "mission",
            mobile: true,
            data: {},
            maxId: 1e4
        };
        o[WH.Types.SHIP] = {
            name: "Ship",
            path: "ship",
            mobile: true,
            data: {},
            maxId: 1e4
        };
        o[WH.Types.THREAT] = {
            name: "Threat",
            path: "threat",
            mobile: false,
            data: {},
            maxId: 1e3
        };
        o[WH.Types.RESOURCE] = {
            name: "Resource",
            path: "resource",
            mobile: true,
            data: {},
            maxId: 100,
            minId: 0
        };
        o[WH.Types.CHAMPION] = {
            name: "Champion",
            path: "champion",
            mobile: true,
            data: {},
            maxId: 1e4
        };
        o[WH.Types.ORDER_ADVANCEMENT] = {
            name: "Order Advancement",
            path: "order-advancement",
            mobile: true,
            data: {},
            maxId: 5e3
        };
        o[WH.Types.BFA_CHAMPION] = {
            name: "BFA Champion",
            path: "bfa-champion",
            mobile: true,
            data: {},
            maxId: 1e4
        };
        o[WH.Types.AFFIX] = {
            name: "Affix",
            path: "affix",
            mobile: true,
            data: {},
            maxId: 1e3
        };
        o[WH.Types.AZERITE_ESSENCE_POWER] = {
            name: "Azerite Essence Power",
            path: "azerite-essence-power",
            mobile: true,
            data: {},
            maxId: 1e3
        };
        o[WH.Types.AZERITE_ESSENCE] = {
            name: "Azerite Essence",
            path: "azerite-essence",
            mobile: false,
            data: {},
            maxId: 100
        };
        o[WH.Types.STORYLINE] = {
            name: "Storyline",
            path: "storyline",
            mobile: false,
            data: {},
            maxId: 1e4
        };
        o[WH.Types.ADVENTURE_COMBATANT_ABILITY] = {
            name: "Adventure Combatant Ability",
            path: "adventure-combatant-ability",
            mobile: true,
            data: {},
            maxId: 1e4
        };
        o[WH.Types.GUIDE] = {
            name: "Guide",
            path: "guide",
            mobile: false,
            data: {}
        };
        o[WH.Types.TRANSMOG_SET] = {
            name: "Transmog Set",
            path: "transmog-set",
            mobile: true,
            data: {},
            maxId: 5e4
        };
        o[WH.Types.OUTFIT] = {
            name: "Outfit",
            path: "outfit",
            mobile: true,
            data: {}
        };
        o[WH.Types.PET_ABILITY] = {
            name: "Battle Pet Ability",
            path: "pet-ability",
            mobile: true,
            data: {},
            maxId: 1e4
        };
        const s = WH.REMOTE;
        const l = WH.TERMS || {
            genericequip_tip: '<span class="q2">Equip: Increases your $1 by \x3c!--rtg$2--\x3e$3&nbsp;<small>(\x3c!--rtg%$2--\x3e0&nbsp;@&nbsp;L\x3c!--lvl--\x3e0)</small>.</span><br />',
            reforged_format: "Reforged ($1 $2 &rarr; $1 $3)"
        };
        var c = s;
        var u = false;
        var p = {
                applyto: 3
            },
            f = document.getElementsByTagName("head")[0],
            d, g = {
                attach: 3,
                attachToIcon: 1,
                attachWithoutScreenshot: 4,
                float: 0,
                floatWithoutIcon: 5,
                screen: 2
            },
            m = 550,
            h = {
                colorLinks: "colorlinks",
                iconizeLinks: "iconizelinks",
                renameLinks: "renamelinks"
            },
            W, H, v, T, b, y, S, w, E = g["float"],
            _ = false,
            I = null,
            M = 1,
            k = 1,
            x = 0,
            C = 1,
            L = 2,
            A = 3,
            R = 4,
            P = 5,
            N = 1,
            O = 2,
            B = 3,
            D = 4,
            F = 5,
            U = 6,
            q = 7,
            $ = 10,
            j = 12,
            z = 13,
            G = 17,
            V = 20,
            J = 21,
            K = 22,
            Y = 23,
            Q = 25,
            Z = 26,
            X = 27,
            ee = 28,
            te = 30,
            ae = 38,
            ie = 40,
            ne = 42,
            re = 43,
            oe = 44,
            se = 46;
        TYPE_GUIDE = 100, TYPE_TRANSMOGSET = 101, TYPE_OUTFIT = 110,
            TYPE_PETABILITY = 200, ICONIZE_TYPES = [$, re, ne, B, U],
            CURSOR_HSPACE = 15, CURSOR_VSPACE = 15, _LANG = {
                0: {
                    achievementComplete: "Achievement earned by $1 on $2/$3/$4",
                    loading: "Loadingâ€¦",
                    noResponse: "No response from server :(",
                    notFound: "%s Not Found"
                },
                1: {
                    achievementComplete: "$1ì´(ê°€) $2/$3/$4ì— ì—…ì ì„ ë‹¬ì„±í•¨",
                    loading: "ë¡œë”© ì¤‘â€¦",
                    noResponse: "ì„œë²„ê°€ ì‘ë‹µí•˜ì§€ ì•ŠìŠµë‹ˆë‹¤ :(",
                    notFound: "%s ì„(ë¥¼) ì°¾ì„ ìˆ˜ ì—†ìŒ"
                },
                2: {
                    achievementComplete: "Haut-fait reÃ§u par $1 le $2/$3/$4",
                    loading: "Chargementâ€¦",
                    noResponse: "Pas de rÃ©ponse du serveur :(",
                    notFound: "%s non trouvÃ©"
                },
                3: {
                    achievementComplete: "Erfolg wurde von $1 am $3.$2.$4 errungen",
                    loading: "LÃ¤dtâ€¦",
                    noResponse: "Keine Antwort vom Server :(",
                    notFound: "%s nicht gefunden"
                },
                4: {
                    achievementComplete: "$1åœ¨$2/$3/$4ä¸ŠèŽ·å¾—æˆå°±",
                    loading: "æ­£åœ¨è½½å…¥â€¦",
                    noResponse: "æœåŠ¡å™¨æ²¡æœ‰å“åº” :(",
                    notFound: "%sæœªæ‰¾åˆ°"
                },
                6: {
                    achievementComplete: "Logro conseguido por $1 el $2/$3/$4",
                    loading: "Cargandoâ€¦",
                    noResponse: "No hay respuesta del servidor :(",
                    notFound: "%s no encontrado/a"
                },
                7: {
                    achievementComplete: "$1 Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ð»(Ð°) ÑÑ‚Ð¾ Ð´Ð¾ÑÑ‚Ð¸Ð¶ÐµÐ½Ð¸Ðµ $2/$3/$4",
                    loading: "Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ°â€¦",
                    noResponse: "ÐÐµÑ‚ Ð¾Ñ‚Ð²ÐµÑ‚Ð° Ð¾Ñ‚ ÑÐµÑ€Ð²ÐµÑ€Ð° :(",
                    notFound: "%s Ð½Ðµ Ð½Ð°Ð¹Ð´ÐµÐ½Ð¾"
                },
                8: {
                    achievementComplete: "Conquista conseguida por $1 em $3/$2/$4",
                    loading: "Carregandoâ€¦",
                    noResponse: "Sem resposta do servidor :(",
                    notFound: "%s nÃ£o encontrado(a)"
                },
                9: {
                    achievementComplete: "Impresa compiuta da $1 su $2/$3/$4",
                    loading: "Caricamentoâ€¦",
                    noResponse: "Nessuna risposta dal server :(",
                    notFound: "%s Non Trovato"
                }
            }, STEALTH_TYPES = [TYPE_GUIDE];
        var le = new function() {
            const e = this;
            var t = {};
            var a = {};
            var i = {};
            var n = {};
            this.fetch = function(e, i) {
                if (!n.hasOwnProperty(e) || n[e].hasOwnProperty(
                    i)) {
                    return
                }
                n[e][i] = C;
                t[e][i] = [];
                let r = WH.dataEnvKey[i];
                switch (i) {
                    case WH.dataEnv.BETA:
                        r = WH.BETA_DOMAIN || r;
                        break;
                    case WH.dataEnv.MAIN:
                        r = "www";
                        break
                }
                let o;
                if (s) {
                    o = Re(r) + a[e]
                } else {
                    o = WH.Url.getDataPageUrl(a[e].replace("/data/",
                        ""))
                }
                o += "&json";
                WH.xhrJsonRequest(o, function(e, t, a) {
                    if (!a) {
                        WH.error(
                            "Wowhead tooltips failed to load entity scaling data.",
                            me(e));
                        return
                    }
                    le.setData(e, t, a)
                }.bind(null, e, i))
            };
            this.getSpellsBySpec = function(e, t) {
                var a = v || WH.getDataEnv();
                this.registerCallback(z, a, (function() {
                    var n = i[z][a];
                    var r = [];
                    if (n.specMap.hasOwnProperty(e)) {
                        r = n["class"][n.specMap[e]]
                            .concat(n.spec[e] || [])
                    }
                    t(r)
                }))
            };
            this.isLoaded = function(e, t) {
                if (!n.hasOwnProperty(e)) {
                    return true
                }
                if (n[e][t] === R) {
                    o();
                    return true
                }
                return false
            };
            this.registerCallback = function(a, i, n) {
                if (e.isLoaded(a, i)) {
                    window.requestAnimationFrame(n);
                    return
                }
                if (!t[a].hasOwnProperty(i)) {
                    e.fetch(a, i)
                }
                t[a][i].push(n)
            };
            this.setData = function(e, a, r) {
                n[e][a] = R;
                t[e][a] = t[e][a] || [];
                i[e][a] = r;
                o();
                let s = t[e][a];
                while (s.length) {
                    s.shift()()
                }
            };

            function r() {
                a[B] = "/data/item-scaling";
                a[U] = "/data/spell-scaling";
                a[z] = "/data/spec-spells";
                for (var e in a) {
                    if (!a.hasOwnProperty(e)) {
                        continue
                    }
                    n[e] = {};
                    t[e] = {};
                    i[e] = {}
                }
            }

            function o() {
                var e = v || WH.getDataEnv();
                var t;
                if (t = i[B][e]) {
                    WH.staminaFactor = t.staminaByIlvl;
                    WH.convertRatingToPercent.RM = t.ratingsToPercentRM;
                    WH.convertRatingToPercent.LT = t.ratingsToPercentLT;
                    WH.convertScalingFactor.SV = t.itemScalingValue;
                    WH.convertScalingFactor.SD = t.scalingFactors;
                    WH.curvePoints = t.curvePoints;
                    WH.applyStatModifications.ScalingData = t
                        .scalingData;
                    WH.Tooltip.ARTIFACT_KNOWLEDGE_MULTIPLIERS = t
                        .artifactKnowledgeMultiplier;
                    WH.Tooltip.BONUS_ITEM_EFFECTS = t.bonusEffects
                    .bonus;
                    WH.Tooltip.ITEM_EFFECT_NAMES = t.bonusEffects
                        .effectSpellName;
                    WH.Tooltip.ITEM_EFFECT_TOOLTIP_HTML = t.bonusEffects
                        .effect;
                    WH.contentTuningLevels = t.contentTuningLevels
                }
                if (t = i[U][e]) {
                    WH.convertScalingSpell.SV = t.scalingValue;
                    WH.convertScalingSpell.SpellInformation = t
                        .spellInformation;
                    WH.convertScalingSpell.RandPropPoints = t
                        .randPropPoints
                }
            }
            r()
        };
        this.onScalesAvailable = le.registerCallback;
        this.setScales = le.setData;
        var ce = {
            0: "enus",
            1: "kokr",
            2: "frfr",
            3: "dede",
            4: "zhcn",
            6: "eses",
            7: "ruru",
            8: "ptbr",
            9: "itit"
        };
        window.Locale = window.Locale || {
            getId: function() {
                return 0
            },
            getName: function() {
                return "enus"
            }
        };
        if (typeof ue === "undefined") {
            var ue = {
                traits: {
                    agi: ["Agility", "Agi", "Agi"],
                    arcres: ["Arcane resistance", "Arcane Resist",
                        "ArcR"
                    ],
                    arcsplpwr: ["Arcane spell power", "Arcane Power",
                        "ArcP"
                    ],
                    armor: ["Armor", "Armor", "Armor"],
                    armorbonus: ["Additional armor", "Bonus Armor",
                        "AddAr"
                    ],
                    armorpenrtng: ["Armor penetration rating",
                        "Armor Pen", "Pen"
                    ],
                    atkpwr: ["Attack power", "AP", "AP"],
                    block: ["Block value", "Block Value", "BkVal"],
                    blockrtng: ["Block rating", "Block", "Block"],
                    critstrkrtng: ["Critical strike rating", "Crit",
                        "Crit"
                    ],
                    defrtng: ["Defense rating", "Defense", "Def"],
                    dmg: ["Weapon damage", "Damage", "Dmg"],
                    dmgmax1: ["Maximum damage", "Max Damage", "Max"],
                    dmgmin1: ["Minimum damage", "Min Damage", "Min"],
                    dodgertng: ["Dodge rating", "Dodge", "Dodge"],
                    dps: ["Damage per second", "DPS", "DPS"],
                    exprtng: ["Expertise rating", "Expertise", "Exp"],
                    firres: ["Fire resistance", "Fire Resist", "FirR"],
                    firsplpwr: ["Fire spell power", "Fire Power",
                        "FireP"
                    ],
                    frores: ["Frost resistance", "Frost Resist",
                        "FroR"],
                    frosplpwr: ["Frost spell power", "Frost Power",
                        "FroP"
                    ],
                    hastertng: ["Haste rating", "Haste", "Haste"],
                    health: ["Health", "Health", "Hlth"],
                    healthrgn: ["Health regeneration", "HP5", "HP5"],
                    hitrtng: ["Hit rating", "Hit", "Hit"],
                    holres: ["Holy resistance", "Holy Resist", "HolR"],
                    holsplpwr: ["Holy spell power", "Holy Power",
                        "HolP"],
                    int: ["Intellect", "Int", "Int"],
                    level: ["Level", "Level", "Lvl"],
                    mana: ["Mana", "Mana", "Mana"],
                    manargn: ["Mana regeneration", "MP5", "MP5"],
                    mastrtng: ["Mastery rating", "Mastery", "Mastery"],
                    mleatkpwr: ["Melee attack power", "Melee AP", "AP"],
                    mlecritstrkrtng: ["Melee critical strike rating",
                        "Melee Crit", "Crit"
                    ],
                    mledmgmax: ["Melee maximum damage",
                        "Melee Max Damage", "Max"
                    ],
                    mledmgmin: ["Melee minimum damage",
                        "Melee Min Damage", "Min"
                    ],
                    mledps: ["Melee DPS", "Melee DPS", "DPS"],
                    mlehastertng: ["Melee haste rating", "Melee Haste",
                        "Haste"
                    ],
                    mlehitrtng: ["Melee hit rating", "Melee Hit",
                        "Hit"],
                    mlespeed: ["Melee speed", "Melee Speed", "Speed"],
                    natres: ["Nature resistance", "Nature Resist",
                        "NatR"
                    ],
                    natsplpwr: ["Nature spell power", "Nature Power",
                        "NatP"
                    ],
                    nsockets: ["Number of sockets", "Sockets", "Sockt"],
                    parryrtng: ["Parry rating", "Parry", "Parry"],
                    reqarenartng: [
                        "Required personal and team arena rating",
                        "Req Rating", "Rating"
                    ],
                    reqlevel: ["Required level", "Req Level", "Level"],
                    resirtng: ["PvP Resilience rating",
                        "PvP Resilience", "Resil"
                    ],
                    rgdatkpwr: ["Ranged attack power", "Ranged AP",
                        "RAP"
                    ],
                    rgdcritstrkrtng: ["Ranged critical strike rating",
                        "Ranged Crit", "Crit"
                    ],
                    rgddmgmax: ["Ranged maximum damage",
                        "Ranged Max Damage", "Max"
                    ],
                    rgddmgmin: ["Ranged minimum damage",
                        "Ranged Min Damage", "Min"
                    ],
                    rgddps: ["Ranged DPS", "Ranged DPS", "DPS"],
                    rgdhastertng: ["Ranged haste rating",
                        "Ranged Haste", "Haste"
                    ],
                    rgdhitrtng: ["Ranged hit rating", "Ranged Hit",
                        "Hit"
                    ],
                    rgdspeed: ["Ranged speed", "Ranged Speed", "Speed"],
                    sepbasestats: "Base stats",
                    sepdefensivestats: "Defensive stats",
                    sepindividualstats: "Individual stats",
                    sepoffensivestats: "Offensive stats",
                    sepresistances: "Resistances",
                    sepweaponstats: "Weapon stats",
                    shares: ["Shadow resistance", "Shadow Resist",
                        "ShaR"
                    ],
                    shasplpwr: ["Shadow spell power", "Shadow Power",
                        "ShaP"
                    ],
                    speed: ["Speed", "Speed", "Speed"],
                    spi: ["Spirit", "Spi", "Spi"],
                    splcritstrkrtng: ["Spell critical strike rating",
                        "Spell Crit", "Crit"
                    ],
                    spldmg: ["Damage done by spells", "Spell Damage",
                        "Dmg"
                    ],
                    splheal: ["Healing done by spells", "Healing",
                        "Heal"
                    ],
                    splpwr: ["Spell power", "Spell Power", "SP"],
                    splhastertng: ["Spell haste rating", "Spell Haste",
                        "Haste"
                    ],
                    splhitrtng: ["Spell hit rating", "Spell Hit",
                        "Hit"],
                    splpen: ["Spell penetration", "Spell Pen", "Pen"],
                    sta: ["Stamina", "Sta", "Sta"],
                    str: ["Strength", "Str", "Str"],
                    pvppower: ["PvP Power", "PvPPower", "PvPPower"]
                }
            }
        }

        function pe() {
            if (WH.REMOTE) {
                WH.ae(f, WH.ce("link", {
                    type: "text/css",
                    href: WH.STATIC_URL + "/css/basic.css?16",
                    rel: "stylesheet"
                }));
                if (He("iconSize")) {
                    WH.ae(f, WH.ce("script", {
                        src: WH.STATIC_URL +
                            "/js/global/WH/Icon.js?3"
                    }));
                    WH.ae(f, WH.ce("link", {
                        type: "text/css",
                        href: WH.STATIC_URL +
                            "/css/global/icon.css",
                        rel: "stylesheet"
                    }))
                }
                e.init()
            } else {
                be();
                ye((function() {
                    le.fetch(B, WH.getDataEnv());
                    le.fetch(U, WH.getDataEnv())
                }))
            }
        }

        function fe() {
            var e = He("hide");
            if (!e) {
                return
            }
            if (typeof d !== "undefined") {
                return
            }
            if (!document.styleSheets) {
                return
            }
            var t = document.createElement("style");
            t.type = "text/css";
            f.appendChild(t);
            if (!window.createPopup) {
                f.appendChild(document.createTextNode(""))
            }
            d = document.styleSheets[document.styleSheets.length - 1];
            for (var a in e) {
                if (!e.hasOwnProperty(a) || !e[a]) {
                    continue
                }
                if (d.insertRule) {
                    d.insertRule(".wowhead-tooltip .whtt-" + a +
                        "{display: none}", d.cssRules.length)
                } else if (d.addRule) {
                    d.addRule(".wowhead-tooltip .whtt-" + a,
                        "display: none", -1)
                }
            }
        }
        this.getEntity = function(e, t, a, i) {
            if (i === undefined) {
                i = Locale.getId()
            }
            if (!a) {
                a = WH.getDataEnv()
            }
            var n = de(e);
            n[t] = n[t] || {};
            n[t][a] = n[t][a] || {};
            n[t][a][i] = n[t][a][i] || {
                status: x,
                callbacks: [],
                data: {}
            };
            return n[t][a][i]
        };

        function de(e) {
            if (typeof o[e] !== "object") {
                throw new Error(
                    "Wowhead tooltips could not find config for entity type [" +
                    e + "].")
            }
            return o[e].data
        }

        function ge(e) {
            if (typeof o[e] !== "object") {
                WH.error(
                    "Wowhead tooltips could not find config for entity type.",
                    e);
                return undefined
            }
            if (!WH.REMOTE || !o[e].hasOwnProperty("maxId")) {
                return undefined
            }
            return {
                min: o[e].hasOwnProperty("minId") ? o[e].minId : 1,
                max: o[e].maxId
            }
        }

        function me(e) {
            if (typeof o[e] !== "object") {
                WH.error(
                    "Wowhead tooltips could not find config for entity type.",
                    e);
                return "Entity"
            }
            return o[e].name
        }

        function he(e) {
            if (typeof o[e] !== "object") {
                WH.error(
                    "Wowhead tooltips could not find config for entity type.",
                    e);
                return "unknown"
            }
            return o[e].path
        }

        function We(e, t) {
            var a = _LANG[e] || _LANG[0];
            return a[t] || ""
        }

        function He(e) {
            var t = ve();
            if (!t) {
                return null
            }
            if (!t.hasOwnProperty(e)) {
                if (h[e] && t.hasOwnProperty(h[e])) {
                    return t[h[e]]
                }
                return null
            }
            return t[e]
        }

        function ve() {
            if (typeof whTooltips === "object") {
                return whTooltips
            }
            if (typeof wowhead_tooltips === "object") {
                return wowhead_tooltips
            }
            return null
        }

        function Te(e) {
            if (typeof o[e] !== "object") {
                WH.error(
                    "Wowhead tooltips could not find config for entity type.",
                    e);
                return false
            }
            return o[e].mobile
        }

        function be() {
            if (_) {
                return
            }
            _ = true;
            WH.aE(document, "keydown", (function(e) {
                switch (e.keyCode) {
                    case 27:
                        $WowheadPower.clearTouchTooltip();
                        WH.Tooltip.hide();
                        break
                }
            }));
            if (WH.isTouch()) {
                we()
            } else {
                WH.aE(document, "mouseover", xe)
            }
        }
        this.attachTouchTooltips = function(e) {
            if (!WH.isTouch()) {
                return
            }
            if (e && e.nodeType === 1) {
                we(e)
            }
        };

        function ye(e) {
            if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", e)
            } else {
                e()
            }
        }

        function Se(e) {
            if (!e.dataset || e.dataset.hasWhTouchEvent === "true") {
                return
            }
            if (e.onclick == null) {
                e.onclick = Ce
            } else {
                WH.aE(e, "click", Ce)
            }
            e.dataset.hasWhTouchEvent = "true"
        }

        function we(e) {
            if (!WH.isTouch()) {
                return
            }
            ye((function() {
                e = e || document.body;
                var t = WH.gE(e, "a");
                for (var a = 0, i = t.length; a < i; a++) {
                    Se(t[a])
                }
            }))
        }
        this.init = function() {
            if (He("iconSize") && !WH.Icon) {
                setTimeout(e.init, 10);
                return
            }
            be();
            ye((function() {
                if (He("renameLinks") || He("colorLinks") ||
                    He("iconizeLinks") || He("iconSize")) {
                    let e = Ie();
                    for (let t = 0; t < e.length; t++) {
                        Me(e[t])
                    }
                    fe()
                } else if (document.querySelectorAll) {
                    let e = document.querySelectorAll(
                        'a[href*="wowhead.com/talent-calc/embed/"]'
                        );
                    for (let t = 0; t < e.length; t++) {
                        Me(e[t])
                    }
                    e = document.querySelectorAll(
                        'a[href*="wowhead.com/soulbind-calc/embed/"]'
                        );
                    for (let t = 0; t < e.length; t++) {
                        Me(e[t])
                    }
                }
            }))
        };

        function Ee(e) {
            let t = WH.getCursorPos(e);
            S = t.x;
            w = t.y
        }

        function _e(e, t) {
            if (e.classList) {
                for (let a = 0, i = t.length; a < i; a++) {
                    e.classList.add(t[a])
                }
            } else {
                for (var a = 0; a < t.length; a++) {
                    let i = e.getAttribute && e.getAttribute("class") || "";
                    if ((" " + i + " ").indexOf(" " + t[a] + " ") < 0) {
                        e.setAttribute("class", (i ? i + " " : "") + t[a])
                    }
                }
            }
        }

        function Ie() {
            let e = [];
            for (let t = 0; t < document.links.length; t++) {
                e.push(document.links[t])
            }
            return e
        }

        function Me(e, t, a) {
            if (t && e.dataset && e.dataset.simpleTooltip) {
                if (!WH.isTouch() && !e.onmouseout) {
                    if (e.dataset.tooltipMode !== "attach") {
                        e.onmousemove = Le
                    }
                    e.onmouseout = Ae
                }
                WH.Tooltip.show(e, e.dataset.simpleTooltip.length < 30 ?
                    '<div class="no-wrap">' + e.dataset.simpleTooltip +
                    "</div>" : e.dataset.simpleTooltip);
                return r
            }
            if (e.nodeName !== "A" && e.nodeName !== "AREA") {
                return i
            }
            var o = e.rel;
            try {
                if (e.dataset && e.dataset.hasOwnProperty("wowhead")) {
                    o = e.dataset.wowhead
                } else if (e.getAttribute && e.getAttribute(
                    "data-wowhead")) {
                    o = e.getAttribute("data-wowhead")
                }
            } catch (e) {
                void 0
            }
            if (!e.href.length && !o || o && /^np\b/.test(o) || e
                .getAttribute("data-disable-wowhead-tooltip") === "true" ||
                WH.isTouch() && e.getAttribute(
                    "data-disable-wowhead-touch-tooltip") === "true") {
                return n
            }
            let l =
                /^https?:\/\/(?:[^/]+\.)?(classic|tbc|wotlk)\.(?:[^/]+\.)?wowhead\.com\/talent-calc\/embed\/[^#]+/;
            let c = e.href.match(l);
            if (s && c) {
                let t = 513;
                let a = 750;
                if (c[1] === "tbc") {
                    t += 120
                } else if (c[1] === "wotlk") {
                    t += 240
                }
                let i = t / a * 100 + "%";
                e.parentNode.replaceChild(WH.ce("div", {
                    style: {
                        margin: "10px auto",
                        maxHeight: t + "px",
                        maxWidth: a + "px"
                    },
                    className: "wowhead-embed wowhead-embed-talent-calc"
                }, WH.ce("div", {
                    style: {
                        height: 0,
                        paddingTop: i,
                        position: "relative",
                        width: "100%"
                    }
                }, WH.ce("iframe", {
                    src: c[0],
                    width: "100%",
                    height: "100%",
                    style: {
                        border: 0,
                        left: 0,
                        position: "absolute",
                        top: 0,
                        borderRadius: "6px"
                    },
                    sandbox: "allow-scripts allow-top-navigation"
                }))), e);
                return r
            }
            let f =
                /^https?:\/\/(?:[^/]+\.)?wowhead\.com\/soulbind-calc\/embed\/.+/;
            let d = e.href.match(f);
            if (s && d) {
                e.parentNode.replaceChild(WH.ce("div", {
                    style: {
                        maxWidth: "734px",
                        maxHeight: "1060px",
                        margin: "10px auto"
                    },
                    className: "wowhead-embed wowhead-embed-soulbind-calc"
                }, WH.ce("div", {
                    style: {
                        position: "relative",
                        width: "100%",
                        height: 0,
                        paddingTop: "144.5%"
                    }
                }, WH.ce("iframe", {
                    src: d[0],
                    width: "100%",
                    height: "100%",
                    style: {
                        border: 0,
                        left: 0,
                        position: "absolute",
                        top: 0,
                        borderRadius: "6px"
                    },
                    sandbox: "allow-scripts allow-top-navigation"
                }))), e);
                return r
            }
            let h = {};
            b = h;
            var W = function(e, t, a) {
                switch (t) {
                    case "buff":
                    case "map":
                    case "noimage":
                    case "nomajor":
                    case "notip":
                    case "premium":
                    case "pvp":
                    case "sock":
                    case "text":
                    case "twcata":
                    case "twmists":
                    case "twtbc":
                    case "twwod":
                    case "twwotlk":
                        h[t] = true;
                        break;
                    case "artk":
                    case "c":
                    case "class":
                    case "dd":
                    case "ddsize":
                    case "diff":
                    case "diffnew":
                    case "ench":
                    case "gem1lvl":
                    case "gem2lvl":
                    case "gem3lvl":
                    case "ilvl":
                    case "level":
                    case "lvl":
                    case "nlc":
                    case "pwr":
                    case "q":
                    case "rand":
                    case "rank":
                    case "spec":
                    case "tink":
                    case "upgd":
                        h[t] = parseInt(a);
                        break;
                    case "abil":
                    case "azerite-essence-powers":
                    case "azerite-powers":
                    case "bonus":
                    case "crafted-stats":
                    case "cri":
                    case "forg":
                    case "gem1bonus":
                    case "gem2bonus":
                    case "gem3bonus":
                    case "gems":
                    case "know":
                    case "pcs":
                    case "rewards":
                        h[t] = a.split(":");
                        break;
                    case "build":
                    case "domain":
                    case "who":
                        h[t] = a;
                        break;
                    case "image":
                        if (a === "premium") {
                            h[a] = true
                        } else {
                            h[t] = a ? "_" + a : ""
                        }
                        break;
                    case "transmog":
                        if (a === "hidden") {
                            h[t] = a
                        } else {
                            h[t] = parseInt(a)
                        }
                        break;
                    case "when":
                        h[t] = new Date(parseInt(a));
                        break
                }
            };
            let H;
            let v;
            let T;
            let S;
            if (p.applyto & 1) {
                if (e.href.indexOf("http://") === 0 || e.href.indexOf(
                        "https://") === 0) {
                    let t = e.href.match(
                        /^https?:\/\/(.+?)?\.?(?:wowhead)\.com(?:\:\d+)?\/\??(item|quest|spell|zone|achievement|event|itemset|item-set|transmog-set|outfit|guide|statistic|currency|npc|object|pet-ability|petability|building|follower|champion|bfa-champion|garrisonability|mission-ability|mission|ship|threat|resource|order-advancement|affix|azerite-essence|azerite-essence-power|storyline|adventure-combatant-ability|mount|recipe|battle-pet)[=/](?:[^/?&#]+-)?(-?\d+(?:\.\d+)?)/
                        );
                    if (!t) {
                        t = e.href.match(
                            /^https?:\/\/(.+?)?\.?(?:wowhead)\.com(?:\:\d+)?\/(guide)s\/([^\?&#]+)/
                            )
                    }
                    if (t) {
                        H = t[1];
                        v = t[2];
                        T = t[3];
                        S = e.href
                    }
                    k = 0
                } else {
                    let t = e.href.match(
                        /\/\??(item|quest|spell|zone|achievement|event|itemset|item-set|transmog-set|outfit|statistic|currency|npc|object|pet-ability|petability|building|follower|champion|bfa-champion|garrisonability|mission-ability|mission|ship|threat|resource|order-advancement|affix|azerite-essence|azerite-essence-power|storyline|adventure-combatant-ability|guide|mount|recipe|battle-pet)[=/](?:[^/?&#]+-)?(-?\d+(?:\.\d+)?)/
                        );
                    if (!t) {
                        t = e.href.match(/\/(guide)s\/([^\?&#]+)/)
                    }
                    if (t) {
                        v = t[1];
                        T = t[2];
                        S = e.href
                    }
                    k = 1
                }
            }
            if (!v && o && p.applyto & 2) {
                let e = o.match(
                    /(item|quest|spell|zone|achievement|event|itemset|item-set|transmog-set|outfit|statistic|currency|npc|object|pet-ability|petability|building|follower|champion|bfa-champion|garrisonability|mission-ability|mission|ship|threat|resource|order-advancement|affix|azerite-essence|azerite-essence-power|storyline|adventure-combatant-ability|guide|mount|recipe|battle-pet).?(-?\d+(?:\.\d+)?)/
                    );
                if (e) {
                    v = e[1];
                    T = e[2]
                }
                k = 1
            }
            if (!v) {
                return n
            }
            let w = WH.getTypeIdFromTypeString(v);
            if (WH.isTouch() && !a && !Te(w)) {
                return n
            }
            e.href.replace(/([a-zA-Z0-9-]+)=?([^&?#]*)/g, W);
            if (o) {
                o.replace(/([a-zA-Z0-9-]+)=?([^&?#]*)/g, W)
            }
            if (h.gems && h.gems.length > 0) {
                var _;
                for (_ = Math.min(3, h.gems.length - 1); _ >= 0; --_) {
                    if (parseInt(h.gems[_])) {
                        break
                    }
                }++_;
                if (_ == 0) {
                    delete h.gems
                } else if (_ < h.gems.length) {
                    h.gems = h.gems.slice(0, _)
                }
            }
            var I = ["bonus", "gem1bonus", "gem2bonus", "gem3bonus"];
            for (var M = 0, L; L = I[M]; M++) {
                if (h[L] && h[L].length > 0) {
                    for (_ = Math.min(16, h[L].length - 1); _ >= 0; --_) {
                        if (parseInt(h[L][_])) {
                            break
                        }
                    }++_;
                    if (_ == 0) {
                        delete h[L]
                    } else if (_ < h[L].length) {
                        h[L] = h[L].slice(0, _)
                    }
                }
            }
            if (h["crafted-stats"] && h["crafted-stats"].length > 0) {
                let e = [];
                for (let t = 0; t < Math.min(2, h["crafted-stats"]
                    .length); t++) {
                    let a = parseInt(h["crafted-stats"][t]);
                    if (!isNaN(a)) {
                        e.push(a)
                    }
                }
                if (e.length == 0) {
                    delete h["crafted-stats"]
                } else {
                    h["crafted-stats"] = e
                }
            }
            if (h.abil && h.abil.length > 0) {
                var _, A = [],
                    N;
                for (_ = 0; _ < Math.min(8, h.abil.length); _++) {
                    if (N = parseInt(h.abil[_])) {
                        A.push(N)
                    }
                }
                if (A.length == 0) {
                    delete h.abil
                } else {
                    h.abil = A
                }
            }
            if (h.rewards && h.rewards.length > 0) {
                var _;
                for (_ = Math.min(3, h.rewards.length - 1); _ >= 0; --_) {
                    if (/^\d+.\d+$/.test(h.rewards[_])) {
                        break
                    }
                }++_;
                if (_ == 0) {
                    delete h.rewards
                } else if (_ < h.rewards.length) {
                    h.rewards = h.rewards.slice(0, _)
                }
            }
            y = e; {
                var O = null;
                var D = Locale.getId();
                var F = WH.getDataEnv();
                if (h.domain) {
                    O = h.domain.toLowerCase()
                } else if (H) {
                    O = H.toLowerCase().replace(/(?:^|\.)(staging|dev)$/,
                        "")
                }
                if (O !== null) {
                    F = WH.dataEnv.MAIN;
                    D = WH.getLocaleFromDomain(O);
                    if (new RegExp("\\b" + WH.BETA_DOMAIN + "\\b").test(
                        O)) {
                        F = WH.dataEnv.BETA
                    } else if (/^sl|shadow$/.test(O)) {
                        F = WH.dataEnv.BETA
                    } else {
                        for (var U in WH.dataEnv) {
                            if (!WH.dataEnv.hasOwnProperty(U) || !WH
                                .dataEnvKey.hasOwnProperty(WH.dataEnv[U])) {
                                continue
                            }
                            if (new RegExp("\\b(" + WH.dataEnvTerm[WH
                                    .dataEnv[U]] + "|" + WH.dataEnvKey[
                                    WH.dataEnv[U]] + ")\\b").test(O)) {
                                F = WH.dataEnv[U];
                                break
                            }
                        }
                    }
                }
                if (F === WH.dataEnv.PTR && !WH.isPtrActive()) {
                    F = WH.dataEnv.MAIN
                }
                if (F === WH.dataEnv.BETA && !WH.isBetaActive()) {
                    F = WH.dataEnv.MAIN
                }
                if ([WH.dataEnv.BETA, WH.dataEnv.PTR].indexOf(F) >= 0) {
                    D = 0
                }
            }
            if (e.href.indexOf("#") !== -1 && document.location.href
                .indexOf(v + "=" + T) !== -1) {
                return n
            }
            E = g["float"];
            if (WH.isTouch() && document.documentElement.offsetWidth < m) {
                E = g.screen
            } else if ((e.parentNode.getAttribute && e.parentNode
                    .getAttribute("class") || "").indexOf("icon") === 0 && e
                .parentNode.nodeName === "DIV" || e.dataset.whattach ===
                "icon" || e.dataset.tooltipMode === "icon") {
                E = g.attachToIcon
            } else {
                if (WH.isTouch() || e.dataset.whattach === "true" || e
                    .dataset.tooltipMode === "attach") {
                    E = g.attach
                } else if (!s) {
                    var q = e.parentNode;
                    var $ = 0;
                    while (q) {
                        if ((q.getAttribute && q.getAttribute("class") ||
                                "").indexOf("menu-inner") === 0) {
                            E = g.attachWithoutScreenshot;
                            break
                        }
                        $++;
                        if ($ > 9) {
                            break
                        }
                        q = q.parentNode
                    }
                }
            }
            if (!WH.isTouch() && !e.onmouseout) {
                if (E === g["float"]) {
                    e.onmousemove = Le
                }
                e.onmouseout = Ae
            }
            if (E === g["float"] && e.dataset.whtticon === "false") {
                E = g.floatWithoutIcon
            }
            if (!s && !e.whContextMenuAttached) {
                e.whContextMenuAttached = true;
                WH.aE(e, "contextmenu", Fe.bind(e, F, D, w, v, T, h, S))
            }
            if (t) {
                u = true;
                Ee(t);
                WH.Tooltip.showingTooltip = true;
                if (typeof e.overrideTooltip == "object") {
                    var j = e.overrideTooltip.html;
                    var z = e.overrideTooltip.html2;
                    if (typeof e.overrideTooltip.htmlGenerator ==
                        "function") {
                        j = e.overrideTooltip.htmlGenerator(e
                            .overrideTooltip)
                    }
                    if (typeof e.overrideTooltip.html2Generator ==
                        "function") {
                        z = e.overrideTooltip.html2Generator(e
                            .overrideTooltip)
                    }
                    if (e.overrideTooltip.spanClass) {
                        j = '<span class="' + e.overrideTooltip.spanClass +
                            '">' + j + "</span>";
                        if (z) {
                            z = '<span class="' + e.overrideTooltip
                                .spanClass + '">' + z + "</span>"
                        }
                    }
                    qe(D, j, e.overrideTooltip.icon, e.overrideTooltip.map,
                        e.overrideTooltip.spellData, z, e
                        .overrideTooltip.image, e.overrideTooltip
                        .imageClass)
                } else {
                    De(w, T, F, D, h)
                }
            }
            if (t || !ve()) {
                return r
            }
            var G = $WowheadPower.getEntity(w, Ve(w, T, h), F, D);
            var V = [];
            if (He("renameLinks") && e.getAttribute(
                "data-wh-rename-link") !== "false" || e.getAttribute(
                    "data-wh-rename-link") === "true") {
                V.push((function() {
                    delete e.dataset.whIconAdded;
                    e.innerHTML = "<span>" + G.data.name +
                        "</span>"
                }))
            }
            var J = e.getAttribute("data-wh-icon-size");
            if ((J || He("iconizeLinks")) && ICONIZE_TYPES.indexOf(w) !== -
                1) {
                if (!J) {
                    J = He("iconSize")
                }
                V.push((function() {
                    if (G.data.icon && e.dataset.whIconAdded !==
                        "true") {
                        ke(e, G.data, J)
                    }
                }))
            }
            if (He("colorLinks") && w === B) {
                V.push((function() {
                    _e(e, ["q" + G.data.quality])
                }))
            }
            if (V.length) {
                if (G.status === x || G.status === C) {
                    G.callbacks = G.callbacks.concat(V);
                    if (G.status === x) {
                        Ue(w, T, F, D, true, h)
                    }
                } else if (G.status === R || G.status === P) {
                    while (V.length) {
                        V.shift()()
                    }
                }
            }
            return r
        }

        function ke(e, t, a) {
            if (!a || typeof WH.Icon === "undefined" || !WH.Icon
                .isValidSize(a)) {
                a = "tiny"
            }
            var i = t.icon.toLocaleLowerCase();
            if (a === "tiny") {
                _e(e, ["icontinyl"]);
                if (e.style.setProperty) {
                    e.style.setProperty("padding-left", "18px", "important")
                } else {
                    e.style.paddingLeft = "18px"
                }
                e.style.verticalAlign = "center";
                e.style.background = "url(" + WH.staticUrl +
                    "/images/wow/icons/tiny/" + i +
                    ".gif) left center no-repeat"
            } else {
                if (e.getAttribute("data-wh-icon-added") === "true") {
                    return
                }
                WH.aef(e, WH.Icon.create(i, a, null, {
                    span: true
                }))
            }
            e.setAttribute("data-wh-icon-added", "true")
        }

        function xe(e) {
            let t = e.target;
            let a = 0;
            while (t && a < 5 && Me(t, e) === i) {
                t = t.parentNode;
                a++
            }
        }

        function Ce(e) {
            let t = this;
            if (t.hasWHTouchTooltip === true) {
                return
            }
            let a = 0;
            let n;
            while (t && a < 5 && (n = Me(t, e)) === i) {
                t = t.parentNode;
                a++
            }
            if (n === r) {
                if (I !== null) {
                    I.removeAttribute("data-showing-touch-tooltip");
                    I.hasWHTouchTooltip = false
                }
                I = t;
                I.hasWHTouchTooltip = true;
                if (e.stopPropagation) {
                    e.stopPropagation()
                }
                if (e.preventDefault) {
                    e.preventDefault()
                }
                return false
            }
        }

        function Le(e) {
            Ee(e);
            WH.Tooltip.move(S, w, 0, 0, CURSOR_HSPACE, CURSOR_VSPACE)
        }

        function Ae() {
            W = null;
            y = null;
            WH.Tooltip.hide()
        }

        function Re(e) {
            if (!WH.isDev()) {
                return "https://" + e + ".wowhead.com"
            }
            var t = document.location.hostname.split(".");
            t = t[t.length - 3];
            if (e === "www") {
                e = t
            } else {
                e = e + "." + t
            }
            var a = "https://" + e + ".wowhead.com";
            if (document.location.port !== "") {
                a += (document.location.port.indexOf(":") < 0 ? ":" : "") +
                    document.location.port
            }
            if (document.location.protocol !== "https:") {
                a = a.replace(/^https:/, "http:")
            }
            return a
        }

        function Pe(e) {
            var t = "tooltip";
            if (b && b.buff) t = "buff";
            if (b && b.text) t = "text";
            if (b && b.premium) t = "tooltip_premium";
            return t + (e || "")
        }

        function Ne() {
            return b && b.text ? "text_icon" : "icon"
        }

        function Oe() {
            return (b && b.buff ? "buff" : "") + "spells"
        }

        function Be(e) {
            if (typeof e === "undefined") {
                return "image_NONE"
            }
            return "image" + e
        }

        function De(e, t, a, i, n) {
            if (!n) {
                n = {}
            }
            var r = Ve(e, t, n);
            W = e;
            H = r;
            v = a;
            T = i;
            b = n;
            le.isLoaded(e, a);
            var o = $WowheadPower.getEntity(e, r, a, i);
            if (o.status === R || o.status === A) {
                $e()
            } else if (o.status === C || o.status === P) {
                if (WH.inArray(STEALTH_TYPES, e) == -1) {
                    qe(i, We(i, "loading"))
                }
            } else {
                Ue(e, t, a, i, WH.inArray(STEALTH_TYPES, e) != -1, n)
            }
        }

        function Fe(e, t, i, n, r, o, s, l) {
            if (!l.ctrlKey || l.button !== 2) {
                return
            }
            l.preventDefault();
            l.stopPropagation();
            let c = [];
            let u = $WowheadPower.getEntity(i, Ve(i, r, o), e, t);
            if (u.data.name) {
                c.push(Menu.createItem({
                    label: WH.term("copy_format", WH.TERMS
                        .name),
                    url: WH.copyToClipboard.bind(undefined, u
                        .data.name, true)
                }))
            }
            c.push(Menu.createItem({
                label: WH.term("copy_format", WH.TERMS.id),
                url: WH.copyToClipboard.bind(undefined, r, true)
            }));
            let p = s;
            if (!p && WH.Types.existsInDataEnv(i)) {
                p = WH.Url.generate(WH.Entity.getPath(i, r), {
                    dataEnv: e,
                    locale: t
                })
            }
            if (p) {
                c.push(Menu.createItem({
                    label: WH.term("copy_format", WH.TERMS.url),
                    url: WH.copyToClipboard.bind(undefined, s,
                        true)
                }))
            }
            let f = a[n] || n;
            if (WH.markup.tags[f]) {
                c.push(Menu.createItem({
                    label: WH.term("copy_format", WH.TERMS
                        .wowheadMarkupTag),
                    url: WH.copyToClipboard.bind(undefined,
                        "[" + f + "=" + r + "]", true)
                }))
            }
            Menu.add(this, c, {
                noEvents: true,
                showAtElement: true,
                showImmediately: true
            }, l)
        }

        function Ue(e, t, a, i, n, r) {
            var o = Ve(e, t, r);
            var s = $WowheadPower.getEntity(e, o, a, i);
            if (s.status !== x && s.status !== L) {
                return
            }
            s.status = C;
            var l = ge(e);
            if (l && (parseInt(t, 10) < l.min || parseInt(t, 10) > l.max)) {
                $WowheadPower.register(e, t, a, i, {
                    error: "ID is out of range"
                });
                return
            }
            if (!n) {
                s.timer = setTimeout(ze.bind(this, e, o, a, i), 333)
            }
            var c = [];
            for (var u in r) {
                switch (u) {
                    case "spec":
                        if (e === U || e === ne) {
                            break
                        }
                        case "abil":
                        case "artk":
                        case "azerite-essence-powers":
                        case "azerite-powers":
                        case "bonus":
                        case "build":
                        case "class":
                        case "crafted-stats":
                        case "dd":
                        case "ddsize":
                        case "diff":
                        case "diffnew":
                        case "ench":
                        case "gem1bonus":
                        case "gem1lvl":
                        case "gem2bonus":
                        case "gem2lvl":
                        case "gem3bonus":
                        case "gem3lvl":
                        case "gems":
                        case "ilvl":
                        case "level":
                        case "lvl":
                        case "nlc":
                        case "nomajor":
                        case "pvp":
                        case "q":
                        case "rand":
                        case "rank":
                        case "rewards":
                        case "sock":
                        case "tink":
                        case "transmog":
                        case "twcata":
                        case "twmists":
                        case "twtbc":
                        case "twwod":
                        case "twwotlk":
                        case "upgd":
                            if (typeof r[u] === "object") {
                                c.push(u + "=" + r[u].join(":"))
                            } else if (r[u] === true) {
                                c.push(u)
                            } else {
                                c.push(u + "=" + r[u])
                            }
                            break
                }
            }
            var p = WH.getDomainFromLocale(i);
            switch (a) {
                case WH.dataEnv.MAIN:
                    break;
                case WH.dataEnv.BETA:
                    if (WH.BETA_DOMAIN) {
                        p += (p ? "." : "") + WH.BETA_DOMAIN;
                        break
                    }
                    default:
                        p += (p ? "." : "") + WH.dataEnvKey[a]
            }
            if (!p) {
                p = "www"
            }
            var f = Re(p);
            if (a === WH.dataEnv.PTR || a === WH.dataEnv.BETA) {
                if (WH.getDataBuild(a) !== "0") {
                    c.push(WH.getDataBuild(a))
                }
            }
            if (!le.isLoaded(e, a)) {
                le.fetch(e, a)
            }
            if (e == B && r && r.hasOwnProperty("lvl") && !le.isLoaded(U,
                a)) {
                le.fetch(U, a)
            }
            var d = c.length ? "?" + c.join("&") : "";
            var g = f + "/tooltip/" + he(e) + "/" + t + d;
            WH.xhrJsonRequest(g, function(e, t, a, i, n, r) {
                if (!r) {
                    WH.error(
                        "Wowhead tooltips failed to load entity data.",
                        me(e) + " #" + t);
                    return
                } else if (r.error) {
                    WH.error(
                        "Wowhead tooltip request responded with an error.",
                        r.error, me(e) + " #" + t)
                }
                $WowheadPower.register(e, a, i, n, r)
            }.bind(null, e, t, o, a, i))
        }

        function qe(e, t, a, i, n, r, o, p) {
            fe();
            if (!u) return;
            if (y) {
                if (y._fixTooltip) {
                    t = y._fixTooltip(t, W, H, y)
                }
                if (y._fixTooltip2) {
                    r = y._fixTooltip2(r, W, H, y)
                }
            }
            var f = false;
            if (!t) {
                t = We(e, "notFound").replace("%s", me(W));
                a = "inv_misc_questionmark";
                f = true
            } else if (b != null) {
                if (WH.reforgeStats && b.forg && WH.reforgeStats[b.forg]) {
                    var d = WH.reforgeStats[b.forg];
                    var m = [d.i1];
                    for (var h in WH.individualToGlobalStat) {
                        if (WH.individualToGlobalStat[h] == m[0]) {
                            m.push(h)
                        }
                    }
                    var _;
                    if ((_ = t.match(new RegExp("(\x3c!--(stat|rtg)(" + m
                            .join("|") + ")--\x3e)[+-]?([0-9]+)"))) && !t
                        .match(new RegExp("\x3c!--(stat|rtg)" + d.i2 +
                            "--\x3e[+-]?[0-9]+"))) {
                        var I = Math.floor(_[4] * d.v),
                            M = ue.traits[d.s2][0];
                        if (d.i2 == 6) {
                            t = t.replace("\x3c!--rs--\x3e", "<br />+" + I +
                                " " + M)
                        } else {
                            t = t.replace("\x3c!--rr--\x3e", WH
                                .sprintfGlobal(l.genericequip_tip, M
                                    .toLowerCase(), d.i2, I))
                        }
                        t = t.replace(_[0], _[1] + (_[4] - I));
                        t = t.replace("\x3c!--rf--\x3e",
                            '<span class="q2">' + WH.sprintfGlobal(l
                                .reforged_format, I, ue.traits[d.s1][2],
                                ue.traits[d.s2][2]) + "</span><br />")
                    }
                }
                if (b.pcs && b.pcs.length) {
                    var x = 0;
                    for (var h = 0, C = b.pcs.length; h < C; ++h) {
                        var _;
                        var L = new RegExp("<span>\x3c!--si([0-9]+:)*" + b
                            .pcs[h] + "(:[0-9]+)*--\x3e" +
                            '<a href="/??item=(\\d+)">(.+?)</a></span>');
                        if (_ = t.match(L)) {
                            var A = !isNaN(parseInt(T)) ? ce[T] : "enus";
                            var R = WH.isSet("g_items") && g_items[b.pcs[
                                h]] ? g_items[b.pcs[h]]["name_" + A] : _[4];
                            var P = '<a href="/item=' + _[3] + '">' + R +
                                "</a>";
                            var N = '<span class="q13">\x3c!--si' + b.pcs[
                                h] + "--\x3e" + P + "</span>";
                            t = t.replace(_[0], N);
                            ++x
                        }
                    }
                    if (x > 0) {
                        t = t.replace("(0/", "(" + x + "/");
                        t = t.replace(new RegExp("<span>\\(([0-" + x +
                            "])\\)", "g"), '<span class="q2">($1)')
                    }
                }
                if (b.know && b.know.length) {
                    t = WH.setTooltipSpells(t, b.know, n)
                }
                if (b.lvl && !b.ilvl) {
                    t = WH.setTooltipLevel(t, b.lvl ? b.lvl : WH.maxLevel, b
                        .buff)
                }
                if (b.who && b.when) {
                    t = t.replace("<table><tr><td><br />",
                        '<table><tr><td><br /><span class="q2">' + WH
                        .sprintf(We(e, "achievementComplete"), b.who, b
                            .when.getMonth() + 1, b.when.getDate(), b
                            .when.getFullYear()) + "</span><br /><br />"
                        );
                    t = t.replace(/class="q0"/g, 'class="r3"')
                }
                if (b.notip && o) {
                    t = "";
                    a = null
                }
                if (W == TYPE_PETABILITY && b.pwr) {
                    t = t.replace(/<!--sca-->(\d+)<!--sca-->/g, (function(e,
                        t) {
                        return Math.floor(parseInt(t) * (1 +
                            .05 * b.pwr))
                    }))
                }
                if (W == $ && b.cri) {
                    for (var h = 0; h < b.cri.length; h++) {
                        t = t.replace(new RegExp("\x3c!--cr" + parseInt(b
                                .cri[h]) + ":[^<]+", "g"),
                            '<span class="q2">$&</span>')
                    }
                }
            }
            if (!c && WH.isSet("g_user") && (WH.isRetailTree(v) &&
                    "lists" in g_user && WH.isSet("g_completion") || !WH
                    .isRetailTree(v) && g_user.characterProfiles && g_user
                    .characterProfiles.length)) {
                var O = "";
                var B = WH.isRetailTree(v) && W in g_types && g_types[W] in
                    g_completion ? g_completion[g_types[W]] : false;
                var U = $WowheadPower.getEntity(W, H, v, T);
                if (B && W == F) {
                    if (f || t === We(e, "loading") || U.hasOwnProperty(
                            "worldquesttype") && U.worldquesttype != 0 || U
                        .hasOwnProperty("daily") && U.daily != 0 || U
                        .hasOwnProperty("weekly") && U.weekly != 0) {
                        B = false
                    }
                }
                var q = !(B && W in g_completion_categories && WH.inArray(
                    g_completion_categories[W], U
                    .completion_category) === -1);
                var j = /^-?\d+(?:\.\d+)?/.exec(H);
                j = j && j.length ? j[0] : H;
                if (B) {
                    for (var z in g_user.lists) {
                        var G = g_user.lists[z];
                        if (!(G.id in B)) {
                            continue
                        }
                        var V = WH.inArray(B[G.id], j) != -1;
                        if (!V && !q) {
                            continue
                        }
                        O += '<br><span class="progress-icon ' + (V ?
                            "progress-8" : "progress-0") + '"></span> ';
                        O += G.character + " - " + G.realm + " " + G.region
                    }
                }
                if (!WH.isRetailTree(v) && W === F) {
                    for (var J, h = 0; J = g_user.characterProfiles[
                        h]; h++) {
                        var V = WH.inArray(J.quests, j) != -1;
                        if (!V && !q) {
                            continue
                        }
                        O += '<br><span class="progress-icon ' + (V ?
                            "progress-8" : "progress-0");
                        O += '"></span> ' + J.name + " - " + J.realm
                    }
                }
                if (WH.isRetailTree(v) && W === TYPE_TRANSMOGSET &&
                    g_completion.wardrobe) {
                    (g_user.lists || []).forEach((function(e) {
                        let t = WH.Wow.TransmogSet
                            .getCompletionAmount(U.data
                                .completionData || {}, e.id);
                        if (t > 0) {
                            O += '<br><span class="progress-icon progress-' +
                                Math.max(1, Math.floor(t * 8)) +
                                '"></span> ';
                            O += e.character + " - " + e.realm +
                                " " + e.region
                        }
                    }))
                }
                if (O != "") {
                    t += '<br><span class="q">' + WH.TERMS.completion +
                        ":</span>" + O
                }
            }
            if (!s && [TYPE_TRANSMOGSET, D].includes(W) && typeof WH
                .getPreferredTransmogRace !== "undefined") {
                let e = WH.getPreferredTransmogRace();
                let a = e.race;
                let i = e.gender - 1;
                let n = WH.ce("div", {
                    innerHTML: t
                });
                let r = WH.qs("picture", n);
                if (r) {
                    if (r.dataset.requiredRace && !y.dataset
                        .tooltipIgnoreRequiredRace) {
                        a = r.dataset.requiredRace
                    }
                    let e = W === D ? WH.Wow.ItemSet : WH.Wow.TransmogSet;
                    r.parentNode.replaceChild(WH.ce("img", {
                        src: e.getThumbUrl(H, a, i, v),
                        width: 260,
                        height: 440,
                        style: {
                            display: "block",
                            margin: "0 auto"
                        }
                    }), r);
                    t = n.innerHTML
                }
            }
            if (!s && t && (b.diff || b.diffnew || b.noimage)) {
                o = "";
                p = ""
            }
            t = t.replace("http://", "https://");
            if (b.map && i && i.getMap) {
                r = i.getMap()
            }
            var K = function(e, t) {
                if (W !== e.type || H !== e.id || v !== e.dataEnv ||
                    T !== e.locale || b !== e.params) {
                    return
                }
                switch (E) {
                    case g.screen:
                        WH.Tooltip.showInScreen(y, t, null, r, o, p, a);
                        break;
                    case g.attachToIcon:
                    case g.attach:
                        var i = WH.isElementFixedPosition(y);
                        WH.Tooltip.setIcon(E === g.attachToIcon ? null :
                            a, i);
                        WH.Tooltip.show(y, t, null, null, null, r, o, p,
                            i);
                        break;
                    case g.attachWithoutScreenshot:
                        var i = WH.isElementFixedPosition(y);
                        WH.Tooltip.setIcon(a, i);
                        WH.Tooltip.show(y, t, null, null, null, r, null,
                            null, i);
                        break;
                    case g.floatWithoutIcon:
                        var i = WH.isElementFixedPosition(y);
                        WH.Tooltip.setIcon(null, i);
                        WH.Tooltip.showAtXY(t, S, w, CURSOR_HSPACE,
                            CURSOR_VSPACE, r, o, p, i);
                        break;
                    case g["float"]:
                    default:
                        var i = WH.isElementFixedPosition(y);
                        WH.Tooltip.setIcon(a, i);
                        WH.Tooltip.showAtXY(t, S, w, CURSOR_HSPACE,
                            CURSOR_VSPACE, r, o, p, i)
                }
                if (s && WH.Tooltip.logo) {
                    WH.Tooltip.logo.style.display = k ? "block" : "none"
                }
            };
            var Y = {
                type: W,
                id: H,
                dataEnv: v,
                locale: T,
                params: b
            };
            je(t, n, K.bind(this, Y), Y)
        }

        function $e() {
            let e = $WowheadPower.getEntity(W, H, v, T);
            let t = e.data[Be(b["image"])];
            let a = e.data["image" + b["image"] + "_class"];
            let i = Je(W, H, v);
            if (i) {
                t = i[0];
                a = i[1]
            }
            qe(T, e.data[Pe()], e.data[Ne()], e.data.map, e.data[Oe()], e
                .data[Pe(2)], t, a)
        }

        function je(e, t, a, i) {
            switch (i.type) {
                case ne:
                    var n = $WowheadPower.getEntity(i.type, i.id, i.dataEnv,
                        i.locale);
                    if (i.params.spec && !(i.params.know && i.params.know
                            .length)) {
                        le.getSpellsBySpec(i.params.spec, (function(t) {
                            e = e.replace(
                                /<!--embed:([^>]+)-->/g, (
                                    function(e, a) {
                                        return WH
                                            .setTooltipSpells(
                                                n.data
                                                .embeds[a]
                                                .tooltip, t,
                                                n.data
                                                .embeds[a]
                                                .spells)
                                    }));
                            a(e)
                        }));
                        break
                    } else {
                        e = e.replace(/<!--embed:([^>]+)-->/g, (function(e,
                            t) {
                            return WH.setTooltipSpells(n.data
                                .embeds[t].tooltip, i.params
                                .know, n.data.embeds[t]
                                .spells)
                        }))
                    }
                    window.requestAnimationFrame(a.bind(null, e));
                    break;
                case U:
                    if (i.params.spec && !(i.params.know && i.params.know
                            .length)) {
                        le.getSpellsBySpec(i.params.spec, (function(i) {
                            e = WH.setTooltipSpells(e, i, t);
                            a(e)
                        }));
                        break
                    }
                    window.requestAnimationFrame(a.bind(null, e));
                    break;
                default:
                    window.requestAnimationFrame(a.bind(null, e))
            }
        }

        function ze(e, t, a, i) {
            if (W == e && H == t && v == a && T == i) {
                qe(i, We(i, "loading"));
                var n = $WowheadPower.getEntity(e, t, a, i);
                n.timer = setTimeout(Ge.bind(this, e, t, a, i), 3850)
            }
        }

        function Ge(e, t, a, i) {
            var n = $WowheadPower.getEntity(e, t, a, i);
            n.status = L;
            if (W == e && H == t && v == a && T == i) {
                qe(i, We(i, "noResponse"))
            }
        }

        function Ve(e, t, a) {
            if (a.build) {
                return t + "build" + a.build
            }
            return t + (a.rand ? "r" + a.rand : "") + (a.ench ? "e" + a
                    .ench : "") + (a.gems ? "g" + a.gems.join(",") : "") + (
                    a.sock ? "s" : "") + (a.upgd ? "u" + a.upgd : "") + (a
                    .twtbc ? "twtbc" : "") + (a.twwotlk ? "twwotlk" : "") +
                (a.twcata ? "twcata" : "") + (a.twmists ? "twmists" : "") +
                (a.twwod ? "twwod" : "") + (a.ilvl ? "ilvl" + a.ilvl : "") +
                (a.lvl ? "lvl" + a.lvl : "") + (a.gem1lvl ? "g1lvl" + a
                    .gem1lvl : "") + (a.gem2lvl ? "g2lvl" + a.gem2lvl :
                "") + (a.gem3lvl ? "g3lvl" + a.gem3lvl : "") + (a.artk ?
                    "ak" + a.artk : "") + (a.nlc ? "nlc" + a.nlc : "") + (a
                    .transmog ? "transmog" + a.transmog : "") + (a.tink ?
                    "tink" + a.tink : "") + (a.pvp ? "pvp" : "") + (a
                    .bonus ? "b" + a.bonus.join(",") : "") + (a.gem1bonus ?
                    "g1b" + a.gem1bonus.join(",") : "") + (a.gem2bonus ?
                    "g2b" + a.gem2bonus.join(",") : "") + (a.gem3bonus ?
                    "g3b" + a.gem3bonus.join(",") : "") + (a[
                    "crafted-stats"] ? "craftedStats" + a[
                    "crafted-stats"].join(",") : "") + (a.q ? "q" + a.q :
                    "") + (a.level ? "level" + a.level : "") + (a.abil ?
                    "abil" + a.abil.join(",") : "") + (a.dd ? "dd" + a.dd :
                    "") + (a.ddsize ? "ddsize" + a.ddsize : "") + (a.diff ==
                    U ? "diff" + a.diff : "") + (a.rank ? "rank" + a.rank :
                    "") + (a["class"] ? "class" + a["class"] : "") + (e !==
                    U && a.spec ? "spec" + a.spec : "") + (a.rewards ?
                    "rewards" + a.rewards.join(":") : "") + (a[
                        "azerite-powers"] ? "azPowers" + a[
                    "azerite-powers"] : "") + (a["azerite-essence-powers"] ?
                    "aePowers" + a["azerite-essence-powers"] : "") + (a
                    .nomajor ? "nomajor" : "")
        }
        this.clearTouchTooltip = function(e) {
            if (I) {
                if (e !== true) {
                    I.removeAttribute("data-showing-touch-tooltip")
                }
                I.hasWHTouchTooltip = false
            }
            I = null;
            if (e !== true) {
                WH.qsa("[data-showing-touch-tooltip]").forEach((
                    function(e) {
                        delete e.dataset.showingTouchTooltip
                    }))
            }
            if (WH.Tooltip.screen) {
                WH.Tooltip.screenInnerWrapper.scrollTop = 0;
                WH.Tooltip.screenInnerWrapper.scrollLeft = 0;
                WH.Tooltip.screen.style.display = "none";
                WH.Tooltip.mobileTooltipShown = false
            }
            let t = e === true ? WH.Tooltip.showingTooltip : false;
            WH.Tooltip.hide();
            WH.Tooltip.showingTooltip = t;
            $WowheadPower.setParent()
        };

        function Je(e, a, i) {
            if (s) {
                return false
            }
            if (!WH.User.isPremium()) {
                return false
            }
            if (WH.Tooltip.hideScreenshots) {
                return false
            }
            let n = WH.Gatherer.get(e, a, i, true);
            if (n) {
                if (n.screenshot && n.screenshot.id) {
                    return [WH.getScreenshotUrl(n.screenshot.id, "small", {
                        imageType: n.screenshot.imageType
                    }), "screenshot"]
                } else if (!WH.REMOTE && e === t.ITEM && n.jsonequip && n
                    .jsonequip.displayid) {
                    let e = n.jsonequip.displayid;
                    let t = n.reqrace || n.jsonequip.races;
                    let a = WH.Wow.Models.getRaceIdFromMask(t);
                    if (n.classs && n.classs !== WH.Wow.Item.CLASS_ARMOR ||
                        n.jsonequip.slotbak && !WH.Wow.Item.isArmorInvType(n
                            .jsonequip.slotbak)) {
                        a = undefined
                    }
                    let i = Listview.funcBox.getCurrentItemBonuses.call(
                        this, n);
                    let r = g_items.getAppearance(n.id, i);
                    if (r && r[0]) {
                        e = r[0]
                    }
                    if (e) {
                        return [WH.Wow.Item.getThumbUrl(e, a), "screenshot"]
                    }
                }
            }
            return false
        }
        this.register = function(e, t, a, i, n) {
            var r = this.getEntity(e, t, a, i);
            if (n.hasOwnProperty("additionalIds")) {
                var o = n.additionalIds;
                delete n.additionalIds;
                if (o.length) {
                    for (var s = 0; s < o.length; s++) {
                        this.register(e, o[s], a, i, n)
                    }
                }
            } {
                if (!le.isLoaded(e, a)) {
                    r.status = P;
                    le.registerCallback(e, a, this.register.bind(this,
                        e, t, a, i, n));
                    return
                }
                if (typeof t === "string" && (t.indexOf("lvl") === 0 ||
                        t.match(/[^i]lvl/)) && !le.isLoaded(U, a)) {
                    r.status = P;
                    le.registerCallback(U, a, this.register.bind(this,
                        e, t, a, i, n));
                    return
                }
            }
            if (r.timer) {
                clearTimeout(r.timer);
                delete r.timer
            }
            if (!WH.REMOTE && n.map) {
                if (r.data.map == null) {
                    r.data.map = new Mapper({
                        parent: WH.ce("div"),
                        zoom: 3,
                        zoomable: false,
                        buttons: false
                    })
                }
                r.data.map.update(n.map);
                delete n.map
            }
            for (var l in n) {
                if (!n.hasOwnProperty(l)) {
                    continue
                }
                r.data[l] = n[l]
            }
            switch (r.status) {
                case C:
                case P:
                case x:
                    if (r.data[Pe()]) {
                        r.status = R
                    } else {
                        r.status = A
                    }
            }
            if (WH.Tooltip.showingTooltip && W == e && H == t && v ==
                a && T == i) {
                $e()
            }
            while (r.callbacks.length) {
                r.callbacks.shift()()
            }
        };
        this.request = function(e, t, a, i, n) {
            if (!n) {
                n = {}
            }
            if (i === undefined) {
                i = Locale.getId()
            }
            if (!a) {
                a = WH.getDataEnv()
            }
            var r = Ve(e, t, n);
            this.getEntity(e, r, a, i);
            Ue(e, t, a, i, true, n)
        };
        this.triggerTooltip = function(e, t) {
            Me(e, t || {
                target: e
            }, true)
        };
        this.refreshLinks = function(e) {
            if (e === true || He("renameLinks") || He("colorLinks") ||
                He("iconizeLinks")) {
                var t = WH.isTouch();
                let e = Ie();
                for (let n, r = 0; n = e[r]; r++) {
                    var a = n.parentNode;
                    var i = false;
                    while (a != null) {
                        let e = a.getAttribute && a.getAttribute(
                            "class") || "";
                        if ((" " + e + " ").replace(/[\n\t]/g, " ")
                            .indexOf(" wowhead-tooltip ") > -1) {
                            i = true;
                            break
                        }
                        a = a.parentNode
                    }
                    if (!i) {
                        Me(n);
                        if (t) {
                            Se(n)
                        }
                    }
                }
            }
            this.hideTooltip()
        };
        this.setParent = function(e) {
            WH.Tooltip.reset();
            WH.Tooltip.prepare(e, WH.isElementFixedPosition(e))
        };
        this.replaceWithTooltip = function(e, t, a, i, n, r, o) {
            if (!r) {
                r = {}
            }
            if (n === undefined) {
                n = Locale.getId()
            }
            if (!i) {
                i = WH.getDataEnv()
            }
            if (typeof e == "string") {
                e = document.getElementById(e)
            }
            if (!e) {
                return false
            }
            var s = Ve(t, a, r);
            var l = this.getEntity(t, s, i, n);
            switch (l.status) {
                case R:
                    if (!e.parentNode) {
                        return true
                    }
                    while (e.hasChildNodes()) {
                        e.removeChild(e.firstChild)
                    }
                    var c = ["wowhead-tooltip-inline"];
                    if (l.data.icon) {
                        c.push("wowhead-tooltip-inline-icon")
                    }
                    _e(e, c);
                    var u = l.data[Pe()];
                    var p = function(t) {
                        if (typeof o === "function") {
                            t = o(t)
                        }
                        WH.Tooltip.append(e, t, true, l.data.icon)
                    };
                    je(u, l.data[Oe()], p, {
                        type: t,
                        id: a,
                        dataEnv: i,
                        locale: n,
                        params: r
                    });
                    return true;
                case C:
                case x:
                    l.callbacks.push(this.replaceWithTooltip.bind(this,
                        e, t, a, i, n, r, o));
                    this.request(t, a, i, n, r);
                    return true
            }
            return false
        };
        if (s) {
            this.set = function(e) {
                WH.cO(p, e)
            };
            this.showTooltip = function(e, t, a) {
                Ee(e);
                qe(0, t, a)
            };
            this.hideTooltip = function() {
                if (typeof WH === "undefined" || typeof WH.Tooltip ===
                    "undefined" || typeof WH.Tooltip.hide !== "function"
                    ) {
                    return
                }
                WH.Tooltip.hide()
            };
            this.moveTooltip = function(e) {
                Le(e)
            }
        } else {
            this.disableCompletion = function() {
                c = true
            }
        }
        pe()
    }
}