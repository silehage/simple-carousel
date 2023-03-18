# Simple carousel

Simple carousel hanya dengan menggunakan beberapa baris code javascript dan css

## Usage

```html
    <link rel="stylesheet" href="./carousel.css">
    <script src="./carousel.js"></script>


    <div class="carousel">
        <div>
            Lorem ipsum dolor sit amet...
        </div>
        <div>
            Lorem ipsum dolor sit amet...
        </div>
        <div>
            Lorem ipsum dolor sit amet... 
        </div>
    </div>


    <script>

        var carousel = new Carousel('.carousel', {
            gap: 8, // Integer
            animated: true, // Boolean
            dragSpeed: 1, // Integer
        });

    </script>

```