<?php
// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Get the form data
  $type = $_POST['type'];
  $name = $_POST['name'];
  $email = $_POST['email'];
  $serviceNumber = $_POST['service-number'];
  $services = isset($_POST['services']) ? $_POST['services'] : [];

  // Set the prices for each service
  $prices = [
    'content-writer' => 60,
    'wordpress-developer' => 80,
    'frontend-developer' => 50,
    'fullstack-developer' => 110
  ];

  // Calculate the total price based on selected services
  $totalPrice = 0;
  foreach ($services as $service) {
    $totalPrice += $prices[$service];
  }

  // Connect to the database
  $host = "http://localhost/phpmyadmin/index.php?route=/sql&pos=0&db=cts.db&table=hire_requests";
  $username = "your_username";
  $password = "your_password";
  $dbname = "hire-requests";

  $conn = new mysqli($host, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // Prepare and execute the SQL statement
  $sql = "INSERT INTO hire_requests (type, name, email, service_number, services, total_price)
          VALUES ('$type', '$name', '$email', '$serviceNumber', '" . implode(", ", $services) . "', $totalPrice)";

  if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  // Close the database connection
  $conn->close();
}
?>
