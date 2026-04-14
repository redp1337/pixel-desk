const correctPass="36";
 
function enterPass(){
    const userPassEntry= document.getElementById('pass').value;
    if (correctPass=== userPassEntry){
        window.location.href='desktop.html';
    } else{
        document.getElementById('error-box').style.display="flex";
    }
}
 
 
function closeError(){
    document.getElementById('error-box').style.display='none';
}

 
