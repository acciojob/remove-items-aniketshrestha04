//your JS code here. If required.
const removeButton = document.querySelector('input[type="button"]');
const dropdown = document.getElementById('colorSelect');

removeButton.addEventListener('click', function(){
	if (dropdown.selectedIndex !== -1) {
		dropdown.remove(dropdown.selectedIndex);
	}
});