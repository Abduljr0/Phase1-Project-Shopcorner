function populateModelList() {
  fetch('http://localhost:3000/modelos') 
      .then(response => response.json())
      .then(data => {
          const modelList = document.getElementById('models');

          //  the movie menu with film titles
          data.forEach(model => {
              const modelName = document.createElement('li');
              modelName.textContent = model.nome;
              modelName.className = 'model-nome';
              // click event listener for each model Name
              modelName.addEventListener('click',() => {
                displayModelDetails(model);
              })

              modelList.appendChild(modelName);
          });
        })
      }

  function displayModelDetails(model)  {
    document.getElementById ('main img').src = model.img;
    document.getElementById('name') .textContent = model.nome
    document.getElementById('price') .textContent =model.price

    // display the model details
    const modelDetails = document.getElementById ('modelDetails');
    modelDetails.style.display = 'list'; 
  }
  // show/hide model list when button is clicked 
  const showModelListButton = document.getElementById('showModels');
  const modelList = document.getElementById('models');
  showModelListButton.addEventListener( 'click',()=>{
    if (modelList.style.display==='none') {
       modelList.style.display = 'block';
    }else{
      modelList.style.display = 'none';
    }
  
  });
   

  window.onload = populateModelList;
   
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const cardsContainer = document.getElementById("cardsContainer");

  // Function to filter items based on the search keyword
  function updateSearchResults() {
    const keyword = searchInput.value.toLowerCase();
    searchResults.innerHTML = ""; // Clear the results

    models.forEach((model) => {
      if (model.nome.toLowerCase().includes(keyword)) {
        const listItem = document.createElement("li");
        listItem.textContent = model.nome;
        listItem.addEventListener("click", () => {
          // When a list item is clicked, display the details in the cardsContainer
          cardsContainer.innerHTML =+`
            <div class="card">
              <img src="${model.img}" alt="${model.nome}">
              <h5>${model.nome}</h5>
              <p>Price: $${model.price}</p>
            </div>
          `;
        });
        searchResults.appendChild(listItem);
      }
    });
  }

  // Attach an event listener to the input field for real-time search
  searchInput.addEventListener("input", updateSearchResults);

  // Initial display of cards
  cardsContainer.innerHTML = "Select a model from the list to display its details.";


