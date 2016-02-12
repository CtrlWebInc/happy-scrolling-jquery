/**
 * Created by me on 2016-02-12.
 */

jQuery.fn.startScene = function (inputConfigs) {

};





function generateLinearFunction (beginPoint, endPoint) {
    var slope = (endPoint.y - beginPoint.y) / (endPoint.x - beginPoint.x),
        constant = beginPoint.y;

    return function (x) {
        return slope * x + constant;
    }
}