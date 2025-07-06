// Example of a typing effect for the ".typing" span in text-3
document.addEventListener("DOMContentLoaded", function () {
    const typingText = ["Game-Changer", "Life-Enhancer", "Strength-Builder","Wellness-Optimizer","Health-Revitalizer"];
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    function type() {
        if (isDeleting) {
            currentText = typingText[index].substring(0, charIndex--);
        } else {
            currentText = typingText[index].substring(0, charIndex++);
        }

        document.querySelector('.typing').textContent = currentText;

        if (!isDeleting && charIndex === typingText[index].length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % typingText.length;
        }

        setTimeout(type, isDeleting ? 50 : 100);
    }

    type();
});
