function populateMovieMenu() {


    fetch('   http://localhost:3000/modelos') 
        .then(response => response.json())
        .then(data => console.log(data))
            
        
    }