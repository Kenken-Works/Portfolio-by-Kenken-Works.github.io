// モーダルウィンドウの取得
const tetrisModal = document.getElementById("tetrisModal");
const contactModal = document.getElementById("contactModal");

// 開くボタンの取得
const openTetrisModalBtn = document.getElementById("openTetrisModal");
const openContactModalBtn = document.getElementById("openContactModal");

// 閉じるボタンの取得
const closeTetrisModalBtn = document.getElementById("closeTetrisModal");
const closeContactModalBtn = document.getElementById("closeContactModal");

// テトリスモーダルを開く
openTetrisModalBtn.onclick = function() {
    tetrisModal.style.display = "flex";
}

// お問い合わせモーダルを開く
openContactModalBtn.onclick = function() {
    contactModal.style.display = "flex";
}

// モーダルを閉じる
closeTetrisModalBtn.onclick = function() {
    tetrisModal.style.display = "none";
}

closeContactModalBtn.onclick = function() {
    contactModal.style.display = "none";
}

// モーダル外部クリックで閉じる
window.onclick = function(event) {
    if (event.target == tetrisModal) {
        tetrisModal.style.display = "none";
    }
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
}

// Additional modal handling code
document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
});
