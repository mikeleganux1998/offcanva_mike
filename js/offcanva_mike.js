//************* OFFCANVA BY MIKE ROSAS DEV *********** */
//************** https://mikerosasdev.com ************ */
//*************************2024*********************** */


(function($) {
    $.fn.offcanva_mike = function(options) {
        // Default configuration and custom options
        var settings = $.extend({
            position: 'left', // Default position of the offcanvas
            title: '',        // Offcanvas title (optional)
            text: '',         // Offcanvas text (optional)
            img: ''           // URL of the offcanvas image (optional)
        }, options);

        return this.each(function() {
            var $this = $(this);
            var offcanvas = $this.find('.offcanva_mike'); // Find the offcanvas within the container

            // Clear existing offcanvas content
            offcanvas.remove();

            // Create offcanvas
            $this.addClass('offcanva_mike-container'); // Add class to the main container
            offcanvas = $('<div>', { class: 'offcanva_mike ' + settings.position }).appendTo($this); // Create and append offcanvas to the container
            var $closeBtnWrapper = $('<div>', { class: 'offcanva_mike-close-btn-wrapper' }).appendTo(offcanvas); // Add container for close button
            $('<a>', { href: '#', class: 'offcanva_mike-close-btn', text: '' }).appendTo($closeBtnWrapper); // Add close button to the container
            $('<div>', { class: 'offcanva_mike-content' }).appendTo(offcanvas); // Add content container to the offcanvas

            var $content = offcanvas.find('.offcanva_mike-content'); // Select the offcanvas content

            // Add title if present
            if (settings.title) {
                $('<h2>', { class: 'offcanva_mike-title', text: settings.title }).appendTo($content);
            }

            // Add text if present
            if (settings.text) {
                $('<p>', { class: 'offcanva_mike-text', text: settings.text }).appendTo($content);
            }

            // Add image if present
            if (settings.img) {
                $('<img>', { class: 'offcanva_mike-img img-fluid', src: settings.img, alt: 'Image'}).appendTo($content);
            }

            // Update offcanvas position
            offcanvas.attr('class', 'offcanva_mike ' + settings.position);

            // Show or hide image as needed
            var $img = $content.find('.offcanva_mike-img');
            if (settings.img) {
                $img.show();
            } else {
                $img.hide();
            }

            // Open the offcanvas when 'open' event is triggered
            $this.on('open', function() {
                $this.fadeIn(); // Show the main container
                offcanvas.addClass('open'); // Add class to show the offcanvas
            });

            // Close the offcanvas when 'close' event is triggered
            $this.on('close', function() {
                $this.fadeOut(); // Hide the main container
                offcanvas.removeClass('open'); // Remove class to hide the offcanvas
            });

            // Handle close button click inside the offcanvas
            $closeBtnWrapper.find('.offcanva_mike-close-btn').click(function(event) {
                event.preventDefault(); // Prevent default link behavior
                $this.trigger('close'); // Trigger close event for offcanvas
            });

            // Prevent closing when clicking inside the offcanvas
            offcanvas.click(function(event) {
                event.stopPropagation(); // Prevent click event propagation
            });

            // Close the offcanvas when clicking outside of it
            $this.click(function() {
                $this.trigger('close'); // Trigger close event for offcanvas
            });
        });
    };
})(jQuery);
