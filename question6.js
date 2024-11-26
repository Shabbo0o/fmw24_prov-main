// 6. Hämta och visa foton. (3p)
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 10 fotona på sidan.
// När man klickar på ett foto ska dess titel visas i en popup med `alert`


async function photos(){
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
        .then(data => {
            let i=0;
            data.slice(0, 10).forEach(item => {
                const imageElement = document.createElement("img");
                imageElement.src = item.url;
                imageElement.alt = item.title;
                imageElement.addEventListener('click', () => {
                    const altImage = imageElement.alt; 
                    alert(altImage); 
                });
                
                const container = document.getElementById("image-container");
                container.appendChild(imageElement);
                i++;
            });
        })
        .catch(error => console.error('Error...', error));
    }
    
    photos();
