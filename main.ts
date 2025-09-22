// Defines the Person type matching the structure of the JSON data
type Person = {
  id: number;
  name: string;
  birthdate: Date;
  children: number;
  country: string;
  can_program: boolean;
};

// API endpoint to fetch mock data
const API_URL = "https://my.api.mockaroo.com/people.json?key=74a64e00";

// Fetches and transforms data from the API
async function fetchPeople(): Promise<Person[]> {
  const response = await fetch(API_URL);
  const rawData = await response.json();
  // Converts birthdate string to Date object
  return rawData.map((p: any) => ({
    ...p,
    birthdate: new Date(p.birthdate),
  }));
}

// Main function that runs the data processing and DOM output
// Fetches data asynchronously using fetchPeople(), which presumably returns an array of person objects.
async function run(): Promise<void> {
  try {
    const people = await fetchPeople();

    // Gets DOM elements by ID to display results
    const totalChildrenEl = document.getElementById("total-children")!;
    const nameAgeListEl = document.getElementById("name-age-list")!;
    const fullInfoEl = document.getElementById("full-info")!;

    //1. Calculates total number of children using a forEach loop and display summary
    let total = 0;
    people.forEach(p => {
      total += p.children;
    });

    // Extracts surname (last word from full name)
    const childrenDetails = people
      .map(p => {
        const surname = p.name.trim().split(" ").slice(-1)[0];
        return `${surname} has ${p.children} kid${p.children !== 1 ? "s" : ""}`;
      })
      .join(", ");

    // Displays the summary and total number of children in the total-children element.
    totalChildrenEl.textContent = `${childrenDetails}, so the total ${total}`;


    // 2. Displays each person's name and age

    people.forEach(p => {
      const age = new Date().getFullYear() - p.birthdate.getFullYear();
      //Creates a list item (<li>) for each person showing their name and age.
      const li = document.createElement("li");
      li.textContent = `${p.name}: ${age}`;
      //Appends each item to the name-age-list element.
      nameAgeListEl.appendChild(li);
    });

    // 3. Displays all properties of each person using for...in
    people.forEach(p => {
    // Create a new <div> element to hold the person's info
    const div = document.createElement("div");
    let output = "";

      // Iterates over each property of the person object
      for (const key in p) {
        // Skip the 'id' field — we don't want to display it
        if (key === "id") continue;

        // Access the value of the current property
        let value = (p as any)[key];

        // If the property is 'birthdate' and it's a Date object, format it nicely
        if (key === "birthdate" && value instanceof Date) {
          value = value.toLocaleDateString();
        }

        // If the property is 'can_program', convert boolean to "Yes"/"No"
        if (key === "can_program") {
          value = value ? "Yes" : "No";
        }

        // Format the label for display
        let label = key;

        // Special case: show 'birthdate' as 'Birth Date'
        if (key === "birthdate") {
          label = "Birth Date";
        }
        // Special case: keep 'name' lowercase
        else if (key === "name") {
          label = "name";
        }
        // For all other keys, capitalize the first letter
        else {
          label = capitalize(key);
        }

        // Append the formatted line to the output string
        output += `${label}: ${value}\n`;
      }

    // Insert the formatted output into the <div> using <pre> for preserved formatting
    div.innerHTML = `<pre>${output}</pre>`;
    fullInfoEl.appendChild(div); // Add the <div> to the container in the DOM
    });

  } catch (error) {
    // Handle errors during fetch or processing
    console.error("Error:", error);
  }
}

// Capitalizes keys for display: "birthdate" → "Birthdate"
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).replace("_", " ");
}

//Run the main function
run();