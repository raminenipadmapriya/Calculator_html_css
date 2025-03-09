<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   <style>
    h1{
        text-align: center;
        font-size: 60px;
        color: teal;
    }
    #calculator{
        height: 500px;
        width: 400px;
        margin: auto;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 30px;
    }

    #display{
        height: 60px;
        width: 100%;
        box-shadow: rgba(25, 16, 16, 0.35) 0px 5px 15px;
        border-radius: 10px;
    }
    #keyboard{
        display: grid;
        grid-template-columns: repeat(4,12fr);
        grid-template-rows: repeat(4,80px);
        gap: 10px;
        margin-top: 20px;
        border-radius: 10px;
        

    }
    #keyboard>div{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        font-weight: bold;
    }
    #keyboard>div:hover{
        background-color: teal;
        cursor: pointer;
    }
    .black{
        background-color: black;
        color: white;
    }
    .red{
        background-color: rgb(243, 50, 50);
        color: white;
    }
    #display{
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
   </style>
</head>
<body>
    <h1>Calculator</h1>
    <div id="calculator">
        <div id="display"></div>
        <div id="keyboard">
        <div onclick="myCalculator">1</div>
        <div onclick="myCalculator">2</div>
        <div>3</div>
        <div class="black">+</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div class="black">-</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div class="black">*</div>
        <div class="red">C</div>
        <div>0</div>
        <div class="black">=</div>
        <div class="black">/</div>
        </div>
    </div>
</body>
</html>
<script>
   let keys=document.querySelectorAll("#keyboard>div");
   let bag="";
   for(let i=0;i<keys.length;i++){
    keys[i].addEventListener("click", myCalculator)
   }
   function myCalculator(){
    
    let targetkey= event.target.innerText;
    if(targetkey=="C"){
        bag="";
        document.querySelector("#display").innerText="";
    }
    else if(targetkey=== "="){
        console.log(eval(bag));
        document.querySelector("#display").innerText=eval(bag);

    }
    else{
        bag=bag+targetkey;
        document.querySelector("#display").innerText=bag;
    }
}
</script>