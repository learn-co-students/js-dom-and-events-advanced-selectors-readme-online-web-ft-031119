//Write a function lastImageSelector that does not accept any parameters. The function should use the last jQuery selector to return the last image in index.html.
function lastImageSelector(){
	return $('div img:last');
};

function paragraphSelector(){
	return $('p');
};

function ninjaBabySelector(){
	return $('#baby-ninja');
};

function  divSelector(){
	return $('.pics');
};


//Write a function firstListItem that does not accept any parameters. The function should use a first-child selector to return the first list item in the ul with the ID pic-list.
function firstListItem(){
	return $('ul li:first-child' )
};