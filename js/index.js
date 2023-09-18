
        function copyText() {
            // Get the anchor tag element
            var anchorTag = document.querySelector('.email-link');

            // Get the text inside the anchor tag
            var text = anchorTag.innerText.trim();

            // Create a temporary input element
            var tempInput = document.createElement('input');
            tempInput.setAttribute('value', text);
            document.body.appendChild(tempInput);

            // Copy the text from the input element
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
        }

        
