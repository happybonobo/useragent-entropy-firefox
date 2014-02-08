self.port.on('get:ua', function() {
    self.port.emit('ua', navigator.userAgent);
});
