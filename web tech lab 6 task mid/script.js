function registerStudent() {
  var fname = document.getElementById("fname").value.trim();
  var lname = document.getElementById("lname").value.trim();
  var sid = document.getElementById("sid").value.trim();
  var email = document.getElementById("email").value.trim();
  var credit = document.getElementById("credit").value.trim();
  var department = document.getElementById("department").value;

  var isValid = true;

  document.getElementById("fnameError").innerHTML = "";
  document.getElementById("lnameError").innerHTML = "";
  document.getElementById("sidError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("creditError").innerHTML = "";
  document.getElementById("departmentError").innerHTML = "";

  if (fname === "") {
    document.getElementById("fnameError").innerHTML = "First name cannot be empty";
    isValid = false;
  }

  if (lname === "") {
    document.getElementById("lnameError").innerHTML = "Last name cannot be empty";
    isValid = false;
  }

  if (sid.indexOf("-") === -1) {
    document.getElementById("sidError").innerHTML = "Student ID must contain '-'";
    isValid = false;
  }

  if (email.indexOf("@student.aiub.edu") === -1) {
    document.getElementById("emailError").innerHTML = "Email must contain @student.aiub.edu";
    isValid = false;
  }

  if (credit === "" || credit < 0 || credit >= 148) {
    document.getElementById("creditError").innerHTML = "Credit must be 0 or more but less than 148";
    isValid = false;
  }

  if (department === "") {
    document.getElementById("departmentError").innerHTML = "Please select a department";
    isValid = false;
  }

  if (isValid) {
    var table = document.getElementById("studentTable");
    var row = table.insertRow(-1);

    row.insertCell(0).innerHTML = fname;
    row.insertCell(1).innerHTML = lname;
    row.insertCell(2).innerHTML = sid;
    row.insertCell(3).innerHTML = email;
    row.insertCell(4).innerHTML = credit;
    row.insertCell(5).innerHTML = department;

    document.getElementById("regForm").reset();
  }
}