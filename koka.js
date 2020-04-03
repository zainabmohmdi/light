function addRow(){

console.log('functio is workig');
	//GET the input values
	var fname = document.getElementById('fname').value;
	var Lname= document.getElementById('Lname').value;
	var email= document.getElementById('email').value;
	var age= document.getElementById('age').value;
	var phone= document.getElementById('phone').value;

	// get the html table
	// 0 = the first table
	var table = document.getElementById("studentList");

	//add the new empty row to the table
	var newRow = table.insertRow(table.rows.length);

	//add the cell to the row
	var cel1 = newRow.insertCell(0);
	var cel2 = newRow.insertCell(1);
	var cel3 = newRow.insertCell(2);
	var cel4 = newRow.insertCell(3);
	var cel5 = newRow.insertCell(4);

	//add value to the cells
	cel1.innerHTML = fname;
	cel2.innerHTML = Lname;
	cel3.innerHTML = email;
	cel4.innerHTML = age;
	cel5.innerHTML = phone;

}