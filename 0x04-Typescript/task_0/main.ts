// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Panda",
  lastName: "Bamboo",
  age: 25,
  location: "Xikago"
};

const student2: Student = {
  firstName: "Bambi",
  lastName: "Dea",
  age: 23,
  location: "Jungo"
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Function to render the table with student data
function renderTable() {
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableBody = document.createElement("tbody");

  // Create the table header
  const headerRow = document.createElement("tr");
  const firstNameHeader = document.createElement("th");
  const locationHeader = document.createElement("th");
  firstNameHeader.textContent = "First Name";
  locationHeader.textContent = "Location";
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  tableHead.appendChild(headerRow);
  table.appendChild(tableHead);

  // Create and append rows for each student
  studentsList.forEach(student => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);

  // Append the table to the body of the document
  document.body.appendChild(table);
}

// Call the renderTable function to display the table
renderTable();
