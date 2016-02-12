/**
 * Created by me on 2016-02-12.
 */

sceneConfig = {
    duration: 200,
    transitions: [
        {
            attributes: 'width',
            values: '100px'
        },

        {
            attributes: 'left',
            origin: '0%',
            values: '80%'
        }
    ]
};


$(document).ready(function () {
    $('#begin').startScene();
});