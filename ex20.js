<html>
<head>
<h1>Mobile No. Validation</h1>
<script>
function validateMobNo(mobno){
    var mobno2;
    var flag=false;
    var mlen= mobno.length;
    if(mlen==10){
    
        flag=true;}
else 
flag=false;
if(flag==true)
{alert("click continue");
    }
 else
        alert("Please correct your mobile No");
}
</script>
</head>
<body>
 
<form name="mobvalidate">
<input type="text" id="mobno" />
<input type="button" value="VALIDATE" onclick="validateMobNo(mobno.value)" />
</form>
</body>
</html>
