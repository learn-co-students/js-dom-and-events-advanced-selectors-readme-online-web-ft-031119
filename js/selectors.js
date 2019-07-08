// declare your functions here...
function paragraphSelector() {
// use an element selector to select the p tags in index.html and return those elements.
    return $('p');
}

function lastImageSelector() {
//should use the last jQuery selector to return the last image in index.html.
    return $('img:last');
}

function ninjaBabySelector() {
//should use an ID selector to return the ninja baby image
    return $('#baby-ninja');
}

function divSelector() {
//should use a class selector to return the two divs with the class pics
    return $('div.pics')
}

function firstListItem() {
//should use a first-child selector to return the first list item in the ul with the ID pic-list.
    return $('ul li:first-child')
}
