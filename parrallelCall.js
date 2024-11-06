async function awaitCall() {
    try {
      // Simulate an API call with a delay and potential for error
      const data = await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate a successful or failed fetch
          Math.random() > 0.5 ? resolve("Data fetched successfully!") : reject("Failed to fetch data.");
        }, 1000);
      });
      console.log(data);
    } catch (error) {
      console.error("Error:", error); // Log a user-friendly error message
    }
  }
  
  // Example usage:
  awaitCall(); // Logs either the data or an error message
  