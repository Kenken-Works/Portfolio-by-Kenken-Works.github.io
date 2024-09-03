document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // 以前のエラー状態をクリア
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.classList.remove('error');
    });

    // 簡易バリデーション
    if (!document.getElementById('name').value) {
        document.getElementById('name').classList.add('error');
        isValid = false;
    }

    if (!document.getElementById('email').value) {
        document.getElementById('email').classList.add('error');
        isValid = false;
    }

    if (!document.getElementById('message').value) {
        document.getElementById('message').classList.add('error');
        isValid = false;
    }

    if (isValid) {
        this.submit();
        alert('フォームが正常に送信されました！');
    } else {
        alert('すべての必須フィールドに入力してください。');
    }
});
