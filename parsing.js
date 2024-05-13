// Declare a variable containing a full name
let name = "Brenda Kaye";

// Function to parse and display the first and last name
function parseAndDisplayName(fullName) {
    // Find the index of the first space
    const spaceIndex = fullName.indexOf(" ");

    // Extract first name using substring() method
    const firstName = fullName.substring(0, spaceIndex);
    
    // Extract last name using substring() method
    const lastName = fullName.substring(spaceIndex + 1);

    // Display the parsed name
    console.log("Name:", fullName);
    console.log("First name:", firstName);
    console.log("Last name:", lastName);
}

// Example usage of the function
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
