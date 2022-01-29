(function ($) {
    let o = $({});
    $.each({
        trigger: 'publish',
        on: 'subscribe',
        off: 'unsubscribe'
    }, function (key, val) {
        jQuery[val] = function () {
            o[key].apply(o, arguments);
        };
    });
})(jQuery);

let bearRose = (function () {
    $.subscribe('messageFromJackLove', function () {
        console.log("I love you, Jack");
        $.publish('messageForBilly')
    })
    $.subscribe('messageFromBilly', function () {
        console.log("I don't love you, Billy");
    })
    return {
        writeMessageToJack: function () {
            $.publish('messageForJack')
        },
        writeMessageToBilly: function () {
            $.publish('messageForBilly')
        }
    }
})();

let bearJack = (function () {
    $.subscribe('messageForJack', function () {
        console.log('I love you too ')
    })
    return {
        writeLetterToRose: function () {
            $.publish('messageFromJackLove')
        }
    }
})();

let bearBilly = (function () {
    $.subscribe('messageForBilly', function () {
        console.log('Billy: I run ')
    })
    return {
        writeMessageToRose: function () {
            $.publish('messageFromBilly')
        }
    }
})();

bearJack.writeLetterToRose()


