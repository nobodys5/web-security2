let oEditors = [];
nhn.husky.EZCreator.createInIFrame({
 oAppRef: oEditors,
 elPlaceHolder: "ir1",
 sSkinURI: "/static/SmartEditor2Skin.html",
 fCreator: "createSEditor2"
});

const submitButton = document.querySelector(".submit");

submitButton.onclick = () => {
     // 에디터의 내용이 textarea에 적용된다.
    oEditors.getById["ir1"].exec("UPDATE_CONTENTS_FIELD", []);

    // 에디터의 내용에 대한 값 검증은 이곳에서
    const textareaValue = document.getElementById("ir1").value;
    alert(textareaValue);
    
    let formData = new FormData(document.querySelector("form"));
    
    formData.append("userCode", getUser().user_code);
    
    formData.forEach((v, k) => {
		console.log("key:" + k);
		console.log("value:" + v);
	})
}
