# offcanva_mike jQuery Plugin

**offcanva_mike** is a jQuery plugin for easily creating offcanvas menus in different directions (left, right, top, bottom).

## Installation

To use **offcanva_mike**, follow these steps:

1. Include jQuery in your project:

   ```html
   <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
   ```

2. Include the CSS and JS files of the plugin:


   ```html
   <link rel="stylesheet" href="css/offcanva_mike.css">
   <script src="js/offcanva_mike.js"></script><script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
   ```


3. Create a container in your HTML where the offcanvas will be instantiated:


   ```html
    <div id="container"></div>
   ```
4. Create buttons to open the offcanvas:


   ```html
    <button id="open-left-btn" data-direction="left">Open Offcanvas Left</button>
    <button id="open-right-btn" data-direction="right">Open Offcanvas Right</button>
    <button id="open-top-btn" data-direction="top">Open Offcanvas Top</button>
    <button id="open-bottom-btn" data-direction="bottom">Open Offcanvas Bottom</button>
   ```

5. Configure the content of the offcanvas and open it from your JavaScript file:

```javascript
 $('#open-left-btn').click(function(event) {
    event.preventDefault();
    var $container = $('#container');
    $container.offcanva_mike({
        position: 'left',
        title: 'Left Offcanvas Title',
        text: 'This is the content of the left offcanvas.',
        img: 'https://via.placeholder.com/500x700'
    }).trigger('open');
});

$('#open-right-btn').click(function(event) {
    event.preventDefault();
    var $container = $('#container');
    $container.offcanva_mike({
        position: 'right',
        title: 'Right Offcanvas Title',
        text: 'This is the content of the right offcanvas.',
        img: 'https://via.placeholder.com/600x700'
    }).trigger('open');
});

$('#open-top-btn').click(function(event) {
    event.preventDefault();
    var $container = $('#container');
    $container.offcanva_mike({
        position: 'top',
        title: 'Top Offcanvas Title',
        text: 'This is the content of the top offcanvas.',
        img: 'https://via.placeholder.com/700x250'
    }).trigger('open');
});

$('#open-bottom-btn').click(function(event) {
    event.preventDefault();
    var $container = $('#container');
    $container.offcanva_mike({
        position: 'bottom',
        title: 'Bottom Offcanvas Title',
        text: 'This is the content of the bottom offcanvas.',
        img: 'https://via.placeholder.com/800x250'
    }).trigger('open');
});
```


## Why Use It?

- Easy to Use: Simply include jQuery and the plugin files to get started.
- Customizable: Configure the position, title, text, and image content of the offcanvas.
- Smooth Animation: Smooth transition when opening and closing the offcanvas.
- Responsive: Compatible with mobile devices and desktops.


## Authors

- [@mikeleganux1998](https://github.com/mikeleganux1998)
