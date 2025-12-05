let count = 1;
let waitAndPrint = () => {
  setInterval(() => {
    let worlds = "world ".repeat(count).trim();
    console.log("hello " + worlds);
    count++;
  }, 3000);
};

// Example usage:
waitAndPrint(); 

