const $ = window.$;
$(document).ready(function () {
    const amenities = []
    $('input[type=checkbox]').click(function () {
        if (this.checked) {
        amenities.push($(this).data('name'))
        }
        else {
            const index = amenities.indexOf($(this).attr('data-name'));
            amenities.splice(index, 1)
        }
        if (amenities.length > 0) {
            $('.amenities > h4').text(amenities.join(', '));
        } else {
            $('.amenities > h4').html('&nbsp')
        }
    });
});
