	function updateWatch() {
		sec = (new Date()) - start;
	 	$("#stopwatch").html(Math.round(sec/1000));
//	 	$("#stopwatch").html(Math.round(sec/1000);
	 	setTimeout('updateWatch()', 1000);
	};

jThree( function( j3 ) {

	$( "#loading" ).remove();

	j3.Trackball();
	j3.Stats();
	jThree.MMD.play();

	start = new Date();

	setTimeout('updateWatch()', 1000);
//	$("#stopwatch").html(((new Date()) - start)/1000);
//	setTimeout('$("#stopwatch").html(((new Date()) - start)/1000)', 1000);

	j3("#person0").click(function() { pop("#person0"); } )
	j3("#person1").click(function() { pop("#person1"); } )
	j3("#person2").click(function() { pop("#person2"); } )


	var rotateDolls = function() {
		j3("#doll0").animate({'rotateY': '6.28'}, 6000, rotateDolls);
		j3("#doll1").animate({'rotateY': '6.28'}, 6000);
		j3("#doll2").animate({'rotateY': '6.28'}, 6000);
	}
    j3("#doll0").animate({'rotateY': '6.28'}, 6000, rotateDolls);

	var crr_id = 0;
	function pop(obj_id) {
		switch(obj_id) {
			case '#person0':
				var thismesh = j3("#mesh" + crr_id);
				var postPerson0 = function() {
					j3("#doll0").append(thismesh);
					thismesh.css('position', Math.random()*20 + ' ' + Math.random()*20 + ' ' + Math.random()*20);
//    j3("#doll0").animate({'rotateY': '6.28'}, 6000);
				};
				thismesh.animate({'position': '24  -9 0'}, 1000, postPerson0);
				break;
			case '#person1':
				var thismesh = j3("#mesh" + crr_id);
				var postPerson1 = function() {
					j3("#doll1").append(thismesh);
					thismesh.css('position', Math.random()*20 + ' ' + Math.random()*20 + ' ' + Math.random()*20);
				};
				thismesh.animate({'position': '-24  -9 0'}, 1000, postPerson1);
				break;
			case '#person2':
				var thismesh = j3("#mesh" + crr_id);
				var postPerson2 = function() {
					j3("#doll2").append(thismesh);
					thismesh.css('position', Math.random()*20 + ' ' + Math.random()*20 + ' ' + Math.random()*20);
				};
				thismesh.animate({'position': '-0 -29 0'}, 1000, postPerson2);
				break;
		} 

		crr_id++;
		for(var i=crr_id; i<10; i++) {
			pos = i - crr_id;
			j3("#mesh" + i ).css('position', pos + ' ' + pos + ' -' + pos);
		}
	}

},
function() {
	alert( "このブラウザはWebGLに対応していません。" );
} );
