const utils = {
    getRect: (selector) => {
        let zoomGrowNumber = 1;
        if (window.isEdge) {
            zoomGrowNumber = window.zoomGrowNumber;
        }
        let domRect = {
            top: 0,
            left: 0,
            width: 0,
            height: 0
        };
        if (typeof selector === 'string' && document.querySelector(selector)) {
            domRect = document.querySelector(selector).getBoundingClientRect();
        }
        else if (selector.getBoundingClientRect) {
            domRect = selector.getBoundingClientRect();
        }
        return {
            top: domRect.top * zoomGrowNumber,
            left: domRect.left * zoomGrowNumber,
            width: domRect.width * zoomGrowNumber,
            height: domRect.height * zoomGrowNumber,
        };
    },
};
export default utils;
