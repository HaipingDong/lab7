document.getElementById("Extra").addEventListener("click",  function(){
	app.addItems();
});

document.getElementById("Double Mint").addEventListener("click",  function(){
	app.addItems();
});
														

document.getElementById("Trident").addEventListener("click", function(){
	app.addItems();
});

document.getElementById("Bubble").addEventListener("click", function(){
	app.addItems();
});

document.getElementById("clear").addEventListener("click", function(){
	app.clear();
});
document.getElementById("Extra").addEventListener("click",  function(){
	app.addPrice("Extra");
});
document.getElementById("Double Mint").addEventListener("click",  function(){
	app.addPrice("Double Mint");
});
document.getElementById("Trident").addEventListener("click",  function(){
	app.addPrice("Trident");
});
document.getElementById("Bubble").addEventListener("click",  function(){
	app.addPrice("Bubble");
});

var app = (function(){
	
var sum = 0;
var total = 0;	
   var addItems = function(){
	    document.getElementById('count').innerHTML++;
   };
		

var addPrice = function(gum){
		
	for (i = 0; i <brands.length;i++){
		if(gum === brands[i].brand){
			total+= brands[i].price;
			
		}

	}
	console.log(total);
	document.getElementById('count2').innerHTML = total;
	};



	
var clear = function(){
		document.getElementById('count').innerHTML = 0;
	    document.getElementById('count2').innerHTML = 0;
	};
	
	var brands = [{brand : "Extra",
			   price : 1.50},
				  {brand : "Trident",
			   price : 1.00},
				  {brand: "Double Mint",
			   price : 2.00},
				  {brand: "Bubble",
			   price : 1.50}		 
			 ];
	
   return{
	   clear:clear,
	   addPrice: addPrice,
	   addItems : addItems
   };
	
   })();






	

