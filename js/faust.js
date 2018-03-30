$(document).ready(function() {
//
//	$('.bottom').velocity({'opacity':'1'}, 1000);
//	var intros = [
//					'MANY YEARS OF BLESSING SHINE ON THIS PAIR; WITH BONDS HOW TENDER, HOW TOUCHINGLY THEY INTERTWINE',
//					'I hope we’ll get along together: to drive away the gloomy weather.',
//					'Now I take you into my keeping, a welcome, and silent guest.',
//					'I seem exhausted, yet created new, Enmeshed with you, the unknown and the true.'
//					]
//
//	selectquote = Math.floor(Math.random()*3) + 0;
//	$('.text p').text(intros[selectquote]);
//
//	$('.text p').each(function(){
//	    var text = $(this).html().split(' '),
//	        len = text.length,
//	        result = [];
//
//	    for( var i = 0; i < len; i++ ) {
//	        result[i] = '<span class="word">' + text[i] + '</span>';
//	    }
//	    $(this).html(result.join(' '));
//		});
//
//	setTimeout(function() {
//
//
//		$('.word').each(function() {
//						var $this = $(this);
//
//						setTimeout(function(){
//							$this.addClass('visible');
//						}, Math.floor(Math.random()*1500) + 100);
//		});
//
//		$('.word:contains("Faust")').each(function() {
//			$(this).addClass('faust');
//		});
//
//	}, 10);
//
///*	$('body').on('click', function() {
//			$('.word').each(function() {
//					var $this = $(this);
//
//					setTimeout(function(){
//						$this.addClass('fadeOut');
//					}, Math.floor(Math.random()*3500) + 0);
//				  });
//
//
//		   setTimeout(function() {
//		   	$('#contact').fadeIn(300);
//		   }, 3500);
//	}); */

	$('.next').click(function(e) {

		$('#intro').addClass('noshadow');
		e.preventDefault();
		nextelem = $(this).attr('data-next');
		next = $('#'+nextelem);

		if (nextelem = 1) {
			setTimeout(function() {
				$('.bottom').addClass('active');
			}, 1200);
			$('.top').fadeIn(500);
		}

		prev = $(this).parent();

		left = $(this).attr('data-left');
		right = $(this).attr('data-right');
		console.log(left, right);

		fadeOutChapter($(this).parent());
		fadeInChapter(next);

		$('body').velocity({backgroundColor:"#fff"}, {duration: 1500});

		$('.half.left').velocity({
			backgroundColor:left,
		}, {
			duration:2500
		});

		$('.half.right').velocity({
			backgroundColor:right,
		}, {
			duration: 2500
		});


	});

	function fadeInChapter(next) {

		setTimeout(function() {
			next.show().velocity({
			opacity:"1"
			}, {
				duration:750
			});

		}, 750);

	}

	function fadeOutChapter(current) {

		current.velocity({
			opacity:"0",
		}, {
			duration:750
		});

		setTimeout(function() {
			current.hide();
		}, 1500);


	}

	$('a.toggle').on('click', function() {
		opens = $(this).attr('for');
		console.log(opens);
		target = $('.hidden[id='+opens+']');
		console.log('targeted');
		$(this).addClass('clicked');
		console.log('clicked');
		target.show();
		console.log('showed');
		setTimeout(function() {
			target.addClass('visible');
		}, 100);

	})


});
