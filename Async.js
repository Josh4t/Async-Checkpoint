async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(value);
    }
  }
  
  // Example usage:
  iterateWithAsyncAwait([1, 2, 3, 4, 5]); // Logs each number with a 1-second delay
  