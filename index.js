import options from "./dataStructure.js"; // Import data for rendering box options (e.g., products or items).
import allColors from "./colors.js"; // Import color options to dynamically populate based on user interaction.

// Get the container where all options will be displayed
const boxContainer = document.getElementById("box-container");

// Populate the box container with dynamic content based on `options` data
boxContainer.innerHTML = options
  .map(
    (mapProp) => `
      <article style="border:1px solid #FF6B82;"> 
   
        <label id="labelId" style="display: flex; justify-content: space-between; padding:9px; cursor: pointer;">
     

          <div style="display: flex; align-items: center; gap:5px;">
            <p>
              <input type="radio" name="pair" value=${mapProp.off}>
              
            </p>
            <div>
              <div style="display: flex; gap:10px">
                <strong style="font-size:1rem;">${mapProp.pair}</strong>
                
                <span style="background-color:#FF6B82; padding:2px; color:white">
                  ${mapProp.off}
                </span>
                
              </div>
              <small>${mapProp.dkk}</small>
              
            </div>
          </div>
          <div style="align-self: center; position:relative; display:flex; flex-direction:column;">
            
            ${
              mapProp.popularity
                ? `<span style="position:absolute; background-color:#FF6B82; top:-25px; right:0px; white-space: nowrap; color:white; padding:3px;">
                    ${mapProp.popularity}
                  </span>`
                : ""
            }
       
            <strong class="price">${mapProp?.price}</strong>
           
            <s style="color:#BCB7B9">${mapProp.oldPrice}</s>
       
          </div>
        </label>
        <div class="inputDiv"></div>
        
      </article>
    `
  )
  .join(""); // it Converts array to a single string and adds it into the DOM

// Given Variables used to track the currently active `.inputDiv` for dynamic content update
let activeInputDiv = null; // Used to Keep reference to the previously activated inputDiv
let selectedPrice = 0; // Used to Store the selected price for the currently Selected/ active option

// Add event listeners to all radio buttons
document.querySelectorAll('input[name="pair"]').forEach((radio) => {
  radio.addEventListener("click", (event) => {
    // It finds the `.inputDiv` associated with the clicked radio button
    const inputDiv = event.target.closest("label").nextElementSibling;

    console.log("inputDiv", inputDiv);

    // Clear dynamic content from the previously active `.inputDiv` if applicable
    if (activeInputDiv && activeInputDiv !== inputDiv) {
      activeInputDiv.innerHTML = "";
    }

    // it Populates the `.inputDiv` with color options if it is newly selected
    if (inputDiv && activeInputDiv !== inputDiv) {
      inputDiv.innerHTML = allColors; // Add dynamic content (color options)
      activeInputDiv = inputDiv; // Update the active inputDiv reference
    }

    // Retrieve the price of the currently selected option
    const priceElement = event.target.closest("label").querySelector(".price");
    if (priceElement) {
      selectedPrice = priceElement.textContent; // Store the selected price

      // Dynamically update the `freeDelivery` section with the total price
      const freeDelivery = document.getElementById("freeDelivery");
      freeDelivery.innerHTML = `
        <section style="display:flex; justify-content:space-between; width:50vw;">
          <!-- Show free delivery text and the total price -->
          <p style="color:#ff6b82">Free Delivery</p>
          <strong>Total: ${selectedPrice}</strong>
        </section>
      `;

      // Dynamically add a "Add to Cart" button when an option is selected
      const addCartDiv = document.getElementById("addCartDiv");
      addCartDiv.innerHTML = `
        <button style="background-color:#ff6b82; color:white; width:50vw; border:none; outline:none; cursor:pointer; padding:5px;">
          + Add to Cart
        </button>
      `;
    }
  });
});
