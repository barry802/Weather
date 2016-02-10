$("#findweather").click(function(event) {
		
		//to stop form submiting before code is excueted
		event.preventDefault();
		
		//hid all alerts so they dont all display, then later in function correct displays
		$(".alert").hide();
		
		//check for user null
		if ($("#city").val()!="") {
		 
		 $.get("scraper.php?city="+$("#city").val(), function( data ) {
			
			//nested if
			if (data=="") {
				
				$("#fail").fadeIn();
				
			} else {
			
			//alert data success box, take alert set html to value of data returned then fade in
			$("#success").html(data).fadeIn();
				
			}
			
		 });
		 
		} else {
			
			$("#nocity").fadeIn();
		}
		 
	 });
	 
	 //backgrounf image randomizer 
/*
$( function() {
		$.vegas('slideshow', {
		  delay:4000, //optional.  The default is 5000 milliseconds
        backgrounds:[
			{ src: "imgages/background01.jpg" },
        { src: "imgages/background02.jpg" },
        { src: "imgages/background03.jpg" },
        { src: "imgages/background04.jpg" },
		{ src: "imgages/background05.jpg" },
		{ src: "imgages/background06.jpg" },
		{ src: "imgages/background07.jpg" },
		{ src: "imgages/background08.jpg" }
		  ]
		})('overlay', {
		  src:'http://vegas.jaysalvat.com/js/vegas/overlays/11.png'
		});
	});
	
	*/
	
//load all the source urls in to an array

var background = ["http://www.hdwallpaperscool.com/wp-content/uploads/2015/04/ireland-hd-wallpaper-for-desktop-background-download-ireland-images-free.jpeg", "http://www.adventurewomen.com/wp-content/uploads/2015/09/WP-Lakes-of-Killarney-County-Kerry.-McGillicuddy-Reeks-in-the-distance-Highest-mountain-range-in-Ireland-iStock_0000362234.jpeg","http://www.download-free-wallpaper.com/img8/ybyptgxxoglqftlrxscy.jpg", "http://wfiles.brothersoft.com/i/ireland_45675-1920x1200.jpg","http://www.travelandleisure.com/sites/default/files/styles/1600x1000/public/1452010412/Skellig-Michael-Ireland-Star-Wars-ISLAND0116.jpg?itok=2jrQ0lc0","http://www.hdwallpapersnew.net/wp-content/uploads/2015/12/lighthouse-near-beach-ireland-hd-wallpaper.jpg","http://p1.pichost.me/i/9/1318900.jpg"

				];
			
/*	Transation/shuffle/bottom loader!!!!!! needs tinkering 		
        transition: 'fade',
        preloadImage: true,
        timer: true,
        shuffle: true,
        delay: 5000,
        animation: 'kenburns',
        cover: true
		
		possible feature description of each image
*/	
		

//this just preloads the backgrounds so the transitions are smoother on the first round
for (var i = 0; i < background.length; i++) {
  document.body.style.backgroundImage = "url('"+background[i]+"')";
}

//Wait four secs then, Go!
var i = 0;
setInterval(function() {
  document.body.style.backgroundImage = "url('"+background[i]+"')";
  i++
  //when it exceeds the last array index, bring it back to the first
  if (i > background.length - 1) {
    i = 0;
  }
}, 10000); //change it every four seconds
