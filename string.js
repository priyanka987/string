var myFunction = function(){
	 var str = document.getElementById("demo").value;
    	 document.getElementById("demo1").innerHTML=str;
    	 var myObject = {};
    	 for(var i=0;i < str.length;i++){
     		myObject[str[i]];
     		myObject[str[i]] ? ++myObject[str[i]] : myObject[str[i]]=1;
         }
           var max =0;
           var ch =0;
         for(var i in myObject){
            if(max < myObject[i]){
                ch = i;
                max = myObject[i];
            
            
            }
         }   
   	      console.log(ch);
    	        
}
