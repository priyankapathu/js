<html>
<style>
body{background-color:pink;}</style>
<head>
<Alphabet and number check in js
</head>
<body>
<label for="numb">Enter letters and numbers only</label>
<input id="word">
<button type="button" onclick="myFunction()">VALIDATE</button>
<script>
function myFunction() {
var x, text;
x = document.getElementById("word").value;
if (x.match(/^[a-zA-Z 0-9]+$/))
alert("click continue");
} else {
alert("please enter valid input");
}
}
</script>
</body>
</html> 
