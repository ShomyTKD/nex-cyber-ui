window.addEventListener('message', function (event) {
    if (event.data.message == "showTask") {
        $('.message-wrapper').fadeIn(100)
        if (event.data.type == "warning") {
            $('.message-wrapper').css('color', '#f7db9f')
            $('.message-wrapper').css('filter', 'drop-shadow(1px 1px 6px #8f2403)')
            $('.message-icon').css('filter', 'invert(93%) sepia(17%) saturate(898%) hue-rotate(330deg) brightness(96%) contrast(101%)')
        } else {
            $('.message-wrapper').css('color', '#94F0D6')
            $('.message-wrapper').css('filter', 'drop-shadow(1px 1px 6px #94F0D6)')
            $('.message-icon').css('filter', 'invert(90%) sepia(21%) saturate(643%) hue-rotate(98deg) brightness(97%) contrast(93%)')
        }
        $('.message-title').html(event.data.title)
        $('.message-text').html(event.data.task)
    }

    if (event.data.message == "hideTask") {
        $('.message-wrapper').fadeOut(100)
    }
})