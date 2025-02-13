
    // DOM Elements
    const fontOptions = document.querySelectorAll('.font-option');
    const sizeSlider = document.querySelector('.size-slider');
    const sizeDisplay = document.querySelector('.size-display');

    // Load saved preferences
    const savedFont = localStorage.getItem('selectedFont');
    const savedSize = localStorage.getItem('selectedSize');

    // Initialize
    if (savedFont) {
        document.documentElement.style.setProperty('--main-font', savedFont);
        setActiveFont(savedFont);
    }

    if (savedSize) {
        document.documentElement.style.setProperty('--base-font-size', `${savedSize}px`);
        sizeSlider.value = savedSize;
        sizeDisplay.textContent = `${savedSize}px`;
    }

    // Font Selection
    fontOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedFont = option.dataset.font;
            document.documentElement.style.setProperty('--main-font', selectedFont);
            setActiveFont(selectedFont);
            localStorage.setItem('selectedFont', selectedFont);
        });
    });

    // Size Adjustment
    sizeSlider.addEventListener('input', (e) => {
        const size = e.target.value;
        document.documentElement.style.setProperty('--base-font-size', `${size}px`);
        sizeDisplay.textContent = `${size}px`;
        localStorage.setItem('selectedSize', size);
    });

    // Helper function to set active font
    function setActiveFont(font) {
        fontOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.font === font);
        });
    }

    // Close panel when clicking outside
    document.addEventListener('click', (e) => {
        const panel = document.querySelector('.customization-panel');
        if (!panel.contains(e.target) && panel.open) {
            panel.removeAttribute('open');
        }
    });
