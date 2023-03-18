function Carousel(selector, opts = {}){
            
    let options = {
        gap: 0,
        animated: true,
        dragSpeed: 1.2,
        ...opts
    }

    let isDown, 
        startX, 
        offsetLeft,
        scrollLeft, 
        containerWidth, 
        columnWidth,
        movementX;

    let { 
        gap, 
        animated,
        dragSpeed
    } = options

    let containerEl = document.querySelector(selector)

    if(containerEl == undefined) {
        console.error(`selectore class "${selector}" not found`);

        return false;
    }

    containerEl.classList.add('carousel__container')

    containerEl.addEventListener('mousedown', handleMouseDown)
    containerEl.addEventListener('mouseleave', handleMouseLeave)
    containerEl.addEventListener('mouseup', handleMouseUp)
    containerEl.addEventListener('mousemove', handleMouseMove)

    function handleMouseDown(e) {
        isDown = true
        startX = e.pageX - offsetLeft;
        scrollLeft = containerEl.scrollLeft;
        movementX = 0
        containerEl.classList.add('carousel--active');
    }
    function handleMouseLeave(e) {
        isDown = false
        movementX = 0
        containerEl.classList.remove('carousel--active');
    }
    function handleMouseUp(e) {
        isDown = false
        containerEl.classList.remove('carousel--active');
        setTimeout(() => movementX = 0, 100)
        
    }
    function handleMouseMove(e) {
        if(!isDown) return;

        e.preventDefault();

        movementX = e.movementX

        const pageX = e.pageX - offsetLeft;
        const walk = (pageX - startX) * dragSpeed; //scroll-fast

        containerEl.scrollLeft = scrollLeft - walk;
    }

    containerWidth = containerEl.clientWidth;

    if(animated == true) containerEl.classList.add('carousel--animated')

    offsetLeft = containerEl.offsetLeft

    Array.from(containerEl.children).forEach((el, index) => {

        el.classList.add('carousel__item')

        columnWidth = el.clientWidth

        if(gap > 0) columnWidth -= gap/2

        if(index != 0) {
            el.style.marginLeft = `${gap}px`
        }

        el.style.width = `${columnWidth}px`

        if(el.tagName == 'A') {
            el.addEventListener('click', function(e) {
                e.preventDefault()
                handleLinkClicked(el)
            })
        }


    });

    function handleLinkClicked(el) {

        let href = el.getAttribute('href')
        let target = el.getAttribute('_target') || '_self'

        console.log(movementX);

        if(!href || movementX != 0) return

        window.open(href, target)
    }


} 