function firstWord(s) {
  let fw = s.trim().split(" ");
	for (let i=0; i<=fw.length ;i++){
		let divya = fw[0];
		return divya;
	}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
