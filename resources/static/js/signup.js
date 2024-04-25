const inputs = document.querySelectorAll("input");
const signupButton = document.querySelectorAll("button")[0];

let checkUsernameFlag = false;

inputs[2].onblur = () => {
	console.log(inputs[2].value);
	
	$.ajax({
		type:"get",
		async: false,
		url:"/api/v1/auth/signup/validation/username",
		dataType:"json",
		data: {username: inputs[2].value},
		success: (response) => {
			console.log(response);
			if(response.data) {
				alert("사용가능한 아이디입니다.");
				checkUsernameFlag = true;
				console.log("checkUsernameFlag:" + checkUsernameFlag);
			}else {
				alert("이미 사용중인 아이디입니다.");
			}
		},
		error: (error) => {
			if(error.status == 400) {
				alert(JSON.stringify(error.responseJSON.data));
			}else {
				console.log("요청실패");
				console.log(error);
			}
		}
	})
}

signupButton.onclick = () => {
	let signupData = {
		name: inputs[0].value,
		email: inputs[1].value,
		username: inputs[2].value,
		password: inputs[3].value,
		"checkUsernameFlag": checkUsernameFlag
	};
	
	$.ajax({
		type:"post",
		async: false,
		url: "/api/v1/auth/signup",
		contentType: "application/json",
		data: JSON.stringify(signupData),
		dataType: "json",
		success: (response) => {
			if(response.data) {
				console.log(response.data);
				alert("회원가입 완료");
				location.replace("/auth/signin");
			}
		},
		error: (error) => {
			if(error.status == 400) {
				alert(JSON.stringify(error.responseJSON.data));
			}else {
				console.log("요청실패");
				console.log(error);
			}
		}
	})
}

