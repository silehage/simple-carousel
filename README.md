# Simple carousel

Simple carousel using only a few lines of javascript and css code

## Usage

... provide `<link>` and `<script>` to the required stylesheet and script...

```html
    <!-- Required stylesheet -->
    <link rel="stylesheet" href="./carousel.css">

    <!-- Required script -->
    <script src="./carousel.js"></script>
```
... then, prepare a little bit of necessary markup ...

```html
    <div class="carousel">
        <div>Lorem ipsum dolor sit amet...</div>
        <div>Lorem ipsum dolor sit amet...</div>
        <div>Lorem ipsum dolor sit amet...</div>
    </div>
```

... and finally, initialize carousel.

```js
    <script>

        var carousel = new Carousel('.carousel', {
            gap: 8, // Integer
            animated: true, // Boolean
            dragSpeed: 1, // Integer
        });

    </script>
```