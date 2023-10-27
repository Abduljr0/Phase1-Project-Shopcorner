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

