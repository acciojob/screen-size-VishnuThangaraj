// Function to update size information
        function updateSize() {
            var widthElement = document.getElementById('width');
            var heightElement = document.getElementById('height');

            // Update width and height in the <h1> tag
            widthElement.textContent = window.innerWidth;
            heightElement.textContent = window.innerHeight;
        }

        // Initial call to set the initial size
        updateSize();

        // Add an event listener for the window resize event
        window.addEventListener('resize', updateSize);