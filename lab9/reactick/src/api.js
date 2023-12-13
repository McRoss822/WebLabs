export const fetchFilteredCars = async (filterValues) => {
    const baseUrl = 'http://localhost:5050'; // Replace with your backend URL
    const url = new URL(`${baseUrl}/api/cars/filter`);
  
    // Append filter parameters to the URL
    Object.keys(filterValues).forEach((key) => {
      if (filterValues[key]) {
        url.searchParams.append(key, filterValues[key]);
      }
    });
  
    try {
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data; // Return filtered cars data from the backend
    } catch (error) {
      throw new Error('Error fetching filtered data:', error);
    }
  };