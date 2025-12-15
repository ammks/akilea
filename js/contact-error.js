document.getElementById("form-submit").addEventListener("click", function() {
    let name = document.getElementById("your-name").value.trim();
    let email = document.getElementById("your-email").value.trim();
    let message = document.getElementById("message").value.trim();

    let errorMessages = [];

    if (name === "") {
        errorMessages.push("お名前を入力してください。");
    }
    if (email === "") {
        errorMessages.push("メールアドレスを入力してください。");
    }
    if (message === "") {
        errorMessages.push("ご連絡事項を入力してください。");
    }

    if (errorMessages.length > 0) {
        alert(errorMessages.join("\n"));
        return;
    }

    // ここに送信処理を書く（WordPress などのバックエンドと連携）
    alert("送信します！");
});
