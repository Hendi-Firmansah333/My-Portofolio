// Konfigurasi Tailwind (Biarkan yang lama tetap ada)
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#135bec",
                "background-light": "#f6f6f8",
                "background-dark": "#101622",
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"],
                "body": ["Noto Sans", "sans-serif"]
            },
        },
    },
}

// LOGIKA HAMBURGER MENU
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileIcon = mobileBtn.querySelector('span');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Fungsi Toggle Menu
    mobileBtn.addEventListener('click', () => {
        // Toggle class 'hidden' untuk menampilkan/menyembunyikan menu
        mobileMenu.classList.toggle('hidden');

        // Ganti Icon: Jika menu terbuka pakai icon 'close', jika tutup pakai 'menu'
        if (mobileMenu.classList.contains('hidden')) {
            mobileIcon.innerText = 'menu';
        } else {
            mobileIcon.innerText = 'close';
        }
    });

    // Tutup menu saat link diklik (Agar tidak menutupi konten)
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileIcon.innerText = 'menu';
        });
    });
    
    // Smooth scroll (Optional, agar perpindahan section halus)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


// logika relod model gambar sertifikat-kegiatan
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');

    function openModal(imageSrc) {
        modalImg.src = imageSrc;
        modal.classList.remove('hidden');
    
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modalImg.classList.remove('scale-95');
            modalImg.classList.add('scale-100');
        }, 10);
    }

    function closeModal() {
        modal.classList.add('opacity-0');
        modalImg.classList.remove('scale-100');
        modalImg.classList.add('scale-95');

        setTimeout(() => {
            modal.classList.add('hidden');
            modalImg.src = ''; 
        }, 300);
    }