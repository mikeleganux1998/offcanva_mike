$(document).ready(function() {

    $('#open-left-btn').click(function(event) {
        event.preventDefault(); // Prevent default link behavior

        var $container = $('#container'); // Main container selector
        $container.offcanva_mike({
            position: 'left',
            title: 'Left Offcanvas Title',
            text: 'This is the content of the left offcanvas.',
            img: 'https://via.placeholder.com/500x700'
        }).trigger('open');
    });

    $('#open-right-btn').click(function(event) {
        event.preventDefault(); // Prevent default link behavior

        var $container = $('#container'); // Main container selector
        $container.offcanva_mike({
            position: 'right',
            title: 'Right Offcanvas Title',
            text: 'This is the content of the right offcanvas.',
            img: 'https://via.placeholder.com/600x700'
        }).trigger('open');
    });

    $('#open-top-btn').click(function(event) {
        event.preventDefault(); // Prevent default link behavior

        var $container = $('#container'); // Main container selector
        $container.offcanva_mike({
            position: 'top',
            title: 'Top Offcanvas Title',
            text: 'This is the content of the top offcanvas.',
            img: 'https://via.placeholder.com/700x250'

        }).trigger('open');
    });

    $('#open-bottom-btn').click(function(event) {
        event.preventDefault(); // Prevent default link behavior

        var $container = $('#container'); // Main container selector
        $container.offcanva_mike({
            position: 'bottom',
            title: 'Bottom Offcanvas Title',
            text: 'This is the content of the bottom offcanvas.',
            img: 'https://via.placeholder.com/800x250'

        }).trigger('open');
    });

});
