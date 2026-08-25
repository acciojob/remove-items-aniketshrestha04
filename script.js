//your JS code here. If required.
const removeButton = document.querySelector('input[type="button"]');
const dropdown = document.getElementById('colorSelect');

removeButton.addEventListener('click', function(){
	dropdown.remove(dropdown.selectedIndex);
});