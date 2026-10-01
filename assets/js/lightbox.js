/**
 * Alta Mare Hotel & Suites - Lightbox HD Gallery Modal
 * Visor interactivo en pantalla completa para fotos del hotel
 */
(function () {
  let currentIndex = 0;
  let galleryItems = [];
  let modalEl = null;

  function initLightbox() {
    // Collect all elements with data-lightbox or gallery class
    const clickableImgs = document.querySelectorAll('[data-lightbox], img.lightbox-trigger, .gallery-item img, #pref-main-img, #std-main-img, .service-card img, .thumb-btn img, .thumb-btn-std img');
    
    if (clickableImgs.length === 0) return;

    galleryItems = [];
    clickableImgs.forEach((img, idx) => {
      img.style.cursor = 'zoom-in';
      const src = img.getAttribute('data-full-src') || img.src;
      const caption = img.getAttribute('data-caption') || img.alt || 'Alta Mare Hotel & Suites';
      galleryItems.push({ src, caption, el: img });

      img.addEventListener('click', (e) => {
        // Prevent default if inside link
        e.preventDefault();
        // Update current src in case slider changed it dynamically
        const liveSrc = img.src || src;
        const liveCaption = img.alt || caption;
        galleryItems[idx].src = liveSrc;
        galleryItems[idx].caption = liveCaption;
        openLightbox(idx);
      });
    });

    createModal();
  }

  function createModal() {
    if (modalEl) return;

    modalEl = document.createElement('div');
    modalEl.id = 'altamare-lightbox';
    modalEl.className = 'fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md hidden flex-col justify-between p-4 sm:p-6 select-none opacity-0 transition-opacity duration-300';
    modalEl.innerHTML = `
      <!-- Top Bar -->
      <div class="flex items-center justify-between text-white/80 z-10 w-full max-w-6xl mx-auto">
        <div class="flex items-center gap-3">
          <span class="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-serif">Alta Mare Hotel</span>
          <span class="text-white/40">&bull;</span>
          <span id="lb-counter" class="text-xs font-mono text-white/70">1 / 1</span>
        </div>
        <button id="lb-close" class="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors" title="Cerrar (Esc)">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <!-- Main Image Container -->
      <div class="relative flex-1 flex items-center justify-center max-w-6xl w-full mx-auto my-auto overflow-hidden">
        <!-- Prev Button -->
        <button id="lb-prev" class="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-110" title="Anterior (←)">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
        </button>

        <!-- Image -->
        <div class="relative max-h-[78vh] max-w-full flex items-center justify-center">
          <img id="lb-img" src="" alt="Alta Mare" class="max-h-[78vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-200" />
        </div>

        <!-- Next Button -->
        <button id="lb-next" class="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-110" title="Siguiente (→)">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>

      <!-- Caption -->
      <div class="w-full max-w-6xl mx-auto text-center z-10">
        <p id="lb-caption" class="text-xs sm:text-sm text-[#E8DFD5] font-serif italic tracking-wide"></p>
      </div>
    `;

    document.body.appendChild(modalEl);

    // Event listeners
    document.getElementById('lb-close').addEventListener('click', closeLightbox);
    document.getElementById('lb-prev').addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
    document.getElementById('lb-next').addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });

    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl || e.target.id === 'lb-img-container') {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (!modalEl || modalEl.classList.contains('hidden')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    });
  }

  function openLightbox(index) {
    if (!galleryItems.length) return;
    currentIndex = (index + galleryItems.length) % galleryItems.length;
    renderImage();
    modalEl.classList.remove('hidden');
    modalEl.classList.add('flex');
    setTimeout(() => modalEl.classList.remove('opacity-0'), 10);
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!modalEl) return;
    modalEl.classList.add('opacity-0');
    setTimeout(() => {
      modalEl.classList.add('hidden');
      modalEl.classList.remove('flex');
      document.body.style.overflow = '';
    }, 250);
  }

  function renderImage() {
    const item = galleryItems[currentIndex];
    const imgEl = document.getElementById('lb-img');
    const counterEl = document.getElementById('lb-counter');
    const captionEl = document.getElementById('lb-caption');

    if (imgEl && item) {
      imgEl.style.opacity = '0.3';
      imgEl.src = item.src;
      imgEl.onload = () => { imgEl.style.opacity = '1'; };
      if (counterEl) counterEl.textContent = `${currentIndex + 1} / ${galleryItems.length}`;
      if (captionEl) captionEl.textContent = item.caption;
    }
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    renderImage();
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    renderImage();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLightbox);
  } else {
    initLightbox();
  }
})();
