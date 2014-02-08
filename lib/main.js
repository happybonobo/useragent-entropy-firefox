var data = require("sdk/self").data;

// Load preferences.
var preferences = require("sdk/preferences/service");

// Reset User Agent.
preferences.reset('general.useragent.override');

// Create window.
var window = require("sdk/panel").Panel({
    contentURL: data.url("ua.html"),
    contentScriptFile: data.url("ua.js")
});

// Send UA request.
window.port.emit('get:ua');

// Listen for UA response.
window.port.on('ua', function(ua) {
    var number = Math.round(Math.random() * 9999999);
    ua = ua + '.' + number;
    preferences.set('general.useragent.override', ua);
});

// Create widget.
var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
var widget = widgets.Widget({
    id: 'happy-bonobo--useragent-entropy',
    label: 'Happy Bonobo: Useragent Entropy',
    contentURL: data.url('monkey-u.png'),
    onClick: function() {
        tabs.open("https://github.com/happybonobo/useragent-entropy-firefox");
    }
});
