function getWriteButton() {
	
	/*console.log(getUser());*/
	
	const listFooter = document.querySelector(".list-footer");
	
	if(getUser() != null && getUser().user_Roles.includes("ROLE_ADMIN")) {
		
	}else {
		listFooter.innerHTML += `
        <button type="button" class="notice-add-button">작성하기</button>
		`;
		
		const noticeAddButton = document.querySelector(".notice-add-button");
		noticeAddButton.onclick = () => {
			location.href = "/notice/addition";
		}
	}
}

getWriteButton();