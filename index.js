 // Function to fetch and display data
 function fetchData() {
    // Replace 'http://localhost:3000/modelos' with the actual API endpoint URL
    const apiUrl = 'http://localhost:3000/modelos';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const dataContainer = document.getElementById('data-container');

        // Clear any existing data in the container
        dataContainer.innerHTML = '';

        // Process and display the fetched data
        data.forEach(model => {
          const modelElement = document.createElement('div');
          modelElement.textContent = `Model: ${model.name}, Year: ${model.year}`;
          dataContainer.appendChild(modelElement);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  // Call the fetchData function to load data when the page loads
  fetchData();