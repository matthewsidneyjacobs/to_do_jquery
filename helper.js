$(document).ready(function(){

	//$('div').fadeOut('slow');
	$('#button').click(function(){
		var toAdd = $('input[name=checkListItem]').val();

		$('.list').append("<li class= 'item'>"+toAdd+"</li>");
	});


	//this removes the whole list. how to just get it to remove 1 item?
	// $(document).on('click', '.list', function() {
	// 	$(this).remove();
	// });



	//this removes just the item you clicked. i looked up the on function to learn
	//i needed to change my selector to 'li'
	$(document).on('click', 'li', function() {
		var lastItemAdded = $('li').val();
		$(this).remove(lastItemAdded);
	});
});
