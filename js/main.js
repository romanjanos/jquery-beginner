$(() => {
    
    $(window).on('keyup', (e) => {
        // Pause. (p)
        if (e.keyCode === 80) {
            
            
        } else if (e.keyCode === 27) {
            // Escape. (esc)
            
            
        } else if (e.keyCode === 83) {
            // Slide. (s)
            
            
        } else if (e.keyCode === 66) {
            // (b)
           
            
        }
    });
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