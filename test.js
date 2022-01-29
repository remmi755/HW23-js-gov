// (function( $ ) {
//     var o = $( {} );
//
//     $.each({
//         trigger: 'publish',
//         on: 'subscribe',
//         off: 'unsubscribe'
//     }, function( key, val ) {
//         jQuery[val] = function() {
//             o[key].apply( o, arguments );
//         };
//     });
// })( jQuery );
//
// class Kitchen {
//     constructor() {
//     }
//
//     prepare() {
//         setTimeout(function() {
//             $.publish('cakeReady')
//         }, 1000);
//     }
// }
// class User1 {
//     constructor(name) {
//         this.name = name;
//
//         $.subscribe('cakeReady', this.doSome)
//     }
//
//     doSome() {
//         console.log("Достать пирог");
//     }
// }
// class User2 {
//     constructor(name) {
//         this.name = name;
//         $.subscribe('cakeReady', this.doSome)
//     }
//
//     doSome() {
//         console.log("Накрить стол");
//     }
// }
//
// const kitchen = new Kitchen();
// const user1 = new User1();
// const user2 = new User2();
//
// kitchen.prepare();