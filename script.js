// Function to update size information
        function updateSize() {
            var widthElement = [...document.getElementsByClassName('width')];
            var heightElement = [...document.getElementsByClassName('height')];

            // Update width and height in the <h1> tag
            widthElement[0].textContent = window.innerWidth;
            heightElement[0].textContent = window.innerHeight;
        }

        // Initial call to set the initial size
        updateSize();

        // Add an event listener for the window resize event
        window.addEventListener('resize', updateSize);