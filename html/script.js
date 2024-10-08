window.addEventListener('message', function (event) {
    if (event.data.message == "showTask") {
        $('.message-wrapper').fadeIn(100)
        if (event.data.type == "important") {
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
    if (event.data.message == "showInteraction") {
        $('.interaction-wrapper').fadeIn(100).css('display', 'flex');
        let key = event.data.key;
        let text = event.data.text;
        const textParts = text.split(' ', 2);
        const firstPart = textParts[0];
        const secondPart = text.replace(firstPart + ' ', '');
        const message = $('<p class="message"></p>');
        message.html(firstPart + ' <i class="key">' + key + '</i> ' + secondPart);
        $('.interaction-body').empty().append(message);
    }

    if (event.data.message == "hideTask") {
        $('.message-wrapper').fadeOut(100)
    }
    if (event.data.message == "hideInteraction") {
        $('.interaction-wrapper').fadeOut(100);
    }
})