$(() => {
    // Global functions.
    const set = (key, value) => localStorage.setItem(key, value);
    const get = key => localStorage.getItem(key);
    const increase = el => set(el, parseInt(get(el), 10), +1);
    const decrease = el => set(el, parseInt(get(el), 10), -1);

    // Global variables
    const Game = $('#g');
    let settings = {};
    let startGame = 0;
    let level = '';
    let timer = 0;

    const startScreen = (text) => {
        Game
            .removeAttr('class')
            .empty();
        $('.logo').fadeIn(250);

        $('.c1').text(text.substring(0, 1));
        $('.c2').text(text.substring(1, 2));
        $('.c3').text(text.substring(2, 3));
        $('.c4').text(text.substring(3, 4));
    }

    // Init cards and set events.
    const initCards = () => {
        $('.logo .card:not(".twist")').on('click', (e) => {
            e.preventDefault();
            $(e.currentTarget)
                .toggleClass('active')
                .siblings('.card')
                .not('.twist')
                .removeClass('active');

            if ($(e.target).is('.playnow')) {
                $('.logo .card')
                    .last()
                    .addClass('active')
                    .siblings('.card')
                    .not('.twist')
                    .removeClass('active');
            }
        });
    };


    $(window).on('keyup', (e) => {
        // Pause. (p)
        if (e.keyCode === 80) {
            if (Game.attr('data-paused') === '1') {
                Game.attr('data-paused', '0');
                $('.timer').css('animation-play-state', 'running')
                $('.pause').remove();
            } else {
                Game.attr('data-paused', '1');
                $('.timer').css('animation-play-state', 'paused');
                Game.after('<div class="pause"></div>');
            }

        } else if (e.keyCode === 27) {
            // Escape. (esc)
            startScreen('flip');
            if (Game.attr('data-paused') === '1') {
                Game.attr('data-paused', '0');
                $('.pause').remove();
            }
            $(window).off();
        }
    });

    // Init timer.
    const initTimer = (timer) => {
        $('<i class="timer"></i>')
            .prependTo(Game)
            .css({
                animation: `timer ${timer}ms linear`
            })
            .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', e => {
                startScreen('fail');
            });
    }

    // Start Game
    $('.play').on('click', (ev) => {
        ev.preventDefault();
        increase('flip_abandoned');
        $('.info').fadeOut();

        level = $(ev.currentTarget).data('level');
        timer = settings.difficulties[level].time * 1000;

        Game.addClass(level);

        $('.logo').fadeOut(250, () => {
            initBoard();
        });

        //Start timer.
        initTimer(timer);
    });

    // Init game board.
    const initBoard = () => {
        startGame = $.now();
        const obj = [];

        // Create and shuffle cards.
        for (let i = 0; i < settings.difficulties[level].cards; i++) {
            obj.push(i);            
        }
    };


    // Init game.
    (() => {
        startScreen('flip');

        $.getJSON('http://localhost:3000/settings', (jsonSettings) => {
            settings = jsonSettings;
            initCards();
        });

    })();
});


// ------------------- PÉLDAKÓDOK ---------------------------

// $(() => {
//     const img = $('img')
//     let isPlaying = false;

//     const animateLoop = (el, pos, duration) => {
//         if (duration < 1) {
//             return;
//         }

//         const topPosition = pos.bounce > 0 ? pos.top : (pos.top + pos.bounce);

//         el.animate({
//             top: topPosition
//         }, {
//             duration,
//             complete: () => {
//                 pos.bounce = pos.bounce * -0.92;
//                 animateLoop(el, pos, duration * 0.92);
//             }
//         })
//     };

//     $(window).on('keyup', (e) => {
//         // Pause. (p)
//         if (e.keyCode === 80) {
//             if (!isPlaying) {
//                 isPlaying = true;
//                 img
//                     .fadeTo(1000, 0.25)
//                     .fadeTo(1000, 1, () => isPlaying = false);
//             }
//         } else if (e.keyCode === 27) {
//             // Escape. (esc)
//             if (!isPlaying) {
//                 isPlaying = true;
//                 img
//                     .hide(1000)
//                     .show(1000, () => isPlaying = false);
//             }
//         } else if (e.keyCode === 83) {
//             // Slide. (s)
//             if (!isPlaying) {
//                 isPlaying = true;
//                 img
//                     .slideUp(1000)
//                     .slideDown(1000, () => isPlaying = false);
//             }
//         } else if (e.keyCode === 66) {
//             // (b)
//             animateLoop(img, {
//                 top: 350,
//                 bounce: 100
//             }, 500);
//         }
//     });
// });