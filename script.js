function getGroceryList(){

    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState==4 && this.status==200){
            var obj= JSON.parse(this.responseText);
            var result="";
            result="        <table> "+
            "<thead>" +
             "  <td>Sl.No</td> "+
             "    <td>Name</td>  "+
             " <td>Department</td>  "+
             " <td>Unit</td>  "+
             "  <td>Quantity</td>  "+
             "  <td>Notes</td>  "+             
             "</thead>  ";

 
            for (var i=0 ;i< obj.length;i++)
            {

                result +="<td>" +  obj[i].Slno +"</td>";
                result +="<td>" +  obj[i].Name +"</td>";
                result +="<td>" +  obj[i].Department +"</td>";
                result +="<td>" +  obj[i].Unit +"</td>";
                result +="<td>" +  obj[i].Quantity +"</td>";
                result +="<td>" +  obj[i].Notes +"</td>";
                result +=  "</tr> ";
            }

            result +=  "<table> ";
            
            document.getElementById("grocery").innerHTML= result;

        }
    }
    
    xhttp.open("GET","data.json",true);
    xhttp.send();
    }