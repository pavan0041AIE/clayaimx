<?php
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    die("Please submit the feedback form.");
}

$sever = "localhost";
$username = "root";
$password = "";
$dbname = "clayaimx";


$conn = mysqli_connect($sever, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// satrt session
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$experience = $_POST['experience'];
$rating = $_POST['rating'];
$suggestion = $_POST['suggestions'];

$sql = "INSERT INTO feedback (name, phone, email, experience, rating, suggestion) VALUES ('$name', '$phone', '$email', '$experience', '$rating', '$suggestions')";

$result = mysqli_query($conn, $sql);
if ($result) {
    echo "Feedback submitted successfully!";
}
else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


?>
