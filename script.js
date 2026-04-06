document.addEventListener('DOMContentLoaded', () => {
    const passInput = document.getElementById('passInput');
    const decryptBtn = document.getElementById('decryptBtn');
    const card = document.getElementById('cipherCard');
    const codeDisplay = document.getElementById('finalCode');

    // Hàm xử lý giải mã chính
    const decrypt = () => {
        const val = passInput.value.toLowerCase().trim();

        // Chấp nhận cả 'chi' và 'chì' cho chắc chắn
        if (val === 'chi' || val === 'chì') {
            card.classList.add('flipped');
            
            // Hiệu ứng số nhảy ngẫu nhiên
            let count = 0;
            const targetCode = 70; 
            const timer = setInterval(() => {
                codeDisplay.innerText = Math.floor(Math.random() * 90) + 10;
                count++;
                if (count > 20) {
                    clearInterval(timer);
                    codeDisplay.innerText = targetCode;
                }
            }, 50);

        } else {
            // Hiệu ứng rung khi sai
            card.classList.add('shake');
            setTimeout(() => card.classList.remove('shake'), 400);
            passInput.value = ''; // Xóa input để nhập lại
        }
    };

    // Lắng nghe sự kiện click nút
    decryptBtn.addEventListener('click', decrypt);

    // Lắng nghe sự kiện nhấn phím Enter
    passInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            decrypt();
        }
    });
});