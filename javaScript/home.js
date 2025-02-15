        const sliderWrapper = document.querySelector('.slider-wrapper');
        const ads = document.querySelectorAll('.ad');
        const dotsContainer = document.querySelector('.dots-containers');
        let currentIndex = 0;
        let autoScrollInterval;

        // Create dots
        ads.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dots');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToAd(index));
            dotsContainer.appendChild(dot);
        });

        // Navigation functions
        function goToAd(index) {
            currentIndex = (index + ads.length) % ads.length;
            sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateDots();
            resetAutoScroll();
        }

        function nextAd() {
            goToAd(currentIndex + 1);
        }

        function prevAd() {
            goToAd(currentIndex - 1);
        }

        // Update dots active state
        function updateDots() {
            document.querySelectorAll('.dots').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        // Auto-scroll
        function startAutoScroll() {
            autoScrollInterval = setInterval(nextAd, 5000);
        }

        function resetAutoScroll() {
            clearInterval(autoScrollInterval);
            startAutoScroll();
        }

        // Event listeners
        document.querySelector('.next-btn').addEventListener('click', nextAd);
        document.querySelector('.prev-btn').addEventListener('click', prevAd);

        // Touch/swipe support
        let touchStartX = 0;
        sliderWrapper.addEventListener('touchstart', e => {
            touchStartX = e.touches[0].clientX;
        });

        sliderWrapper.addEventListener('touchend', e => {
            const touchEndX = e.changedTouches[0].clientX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) nextAd();
                else prevAd();
            }
        });

        // Pause auto-scroll on hover
        sliderWrapper.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
        sliderWrapper.addEventListener('mouseleave', startAutoScroll);

        // Start auto-scroll on load
        startAutoScroll();