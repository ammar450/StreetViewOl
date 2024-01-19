// Initialize map
const map = L.map('map').setView([-2.55, 118.04], 6);

// Add base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Data layers object for reference
const dataLayers = {
    anr: L.layerGroup(), // Replace with actual data layer
    blockPlantation: L.layerGroup(), // Replace with actual data layer
    linearPlantation: L.layerGroup(), // Replace with actual data layer
    nurseries: L.layerGroup(), // Replace with actual data layer
    // ... Add other data layers similarly
};

// Function to toggle layers
function toggleLayer(layerId, checked) {
    if (checked) {
        dataLayers[layerId].addTo(map);
    } else {
        map.removeLayer(dataLayers[layerId]);
    }
}

// Attach event listeners to checkboxes
document.querySelectorAll('#data-layers input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
        toggleLayer(event.target.id, event.target.checked);
    });
});

// Search functionality - Placeholder for actual implementation
document.querySelector('#search-box select').addEventListener('change', (event) => {
    // Perform search or filter operations based on selected value
    // This might involve fetching new data, filtering existing layers, or moving the map view
});


document.addEventListener('DOMContentLoaded', function() {
    // Initialize event listeners for the right panel

    // Event listener for province selection
    document.getElementById('select-province').addEventListener('change', function(event) {
        const selectedProvince = event.target.value;
        // Logic to handle province selection
        console.log('Province selected:', selectedProvince);
        // You would replace the console.log with actual logic to filter data on the map
    });

    // Event listener for district selection
    document.getElementById('select-district').addEventListener('change', function(event) {
        const selectedDistrict = event.target.value;
        // Logic to handle district selection
        console.log('District selected:', selectedDistrict);
        // Similarly, replace this with actual filtering logic
    });

    // Event listener for year selection
    document.getElementById('select-year').addEventListener('change', function(event) {
        const selectedYear = event.target.value;
        // Logic to handle year selection
        console.log('Year selected:', selectedYear);
        // Implement the logic to filter or adjust the data displayed on the map
    });

    // Event listeners for the checkboxes (e.g., Sites, Suparco)
    const checkboxes = document.querySelectorAll('#right-panel input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function(event) {
            const checked = event.target.checked;
            const layerId = event.target.id;
            // Logic to toggle layers based on checkbox
            console.log(layerId + ' layer toggled:', checked);
            // Here you would toggle the visibility of layers or perform other actions
        });
    });
});
