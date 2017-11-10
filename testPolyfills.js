if (!global.requestAnimationFrame) {
    global.requestAnimationFrame = (cb) => {
        setTimeout(cb, 0);
    };
}