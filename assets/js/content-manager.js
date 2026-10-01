/**
 * Content Manager para Alta Mare Hotel & Suites
 * Permite cargar, editar, guardar y persistir todos los contenidos en tiempo real.
 */

const STORAGE_KEY = 'altamare_hotel_content_v1';

// Obtiene el contenido actual (guardado o por defecto)
function getHotelContent() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Fusión con defaults por si se agregaron nuevas claves
      return Object.assign({}, DEFAULT_HOTEL_CONTENT, parsed);
    }
  } catch (e) {
    console.error('Error al leer contenido de localStorage:', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_HOTEL_CONTENT));
}

// Guarda nuevo contenido
function saveHotelContent(content) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    return true;
  } catch (e) {
    console.error('Error al guardar en localStorage:', e);
    return false;
  }
}

// Restablece valores por defecto
function resetHotelContent() {
  localStorage.removeItem(STORAGE_KEY);
}

// Exporta como archivo JSON descargable
function exportContentAsJSON() {
  const content = getHotelContent();
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(content, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "altamare-hotel-contenido.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

// Importa archivo JSON
function importContentFromJSON(file, callback) {
  const reader = new FileReader();
  reader.onload = function(event) {
    try {
      const imported = JSON.parse(event.target.result);
      saveHotelContent(imported);
      if (callback) callback(true, imported);
    } catch (e) {
      if (callback) callback(false, e);
    }
  };
  reader.readAsText(file);
}

// Auto-aplicación de contenidos al cargar cualquier página
document.addEventListener('DOMContentLoaded', () => {
  const data = getHotelContent();
  
  // 1. Textos data-cms
  document.querySelectorAll('[data-cms]').forEach(el => {
    const path = el.getAttribute('data-cms');
    const value = getNestedValue(data, path);
    if (value !== undefined && value !== null) {
      el.textContent = value;
    }
  });

  // 2. Imágenes data-cms-img
  document.querySelectorAll('[data-cms-img]').forEach(el => {
    const path = el.getAttribute('data-cms-img');
    const value = getNestedValue(data, path);
    if (value) {
      el.src = value;
    }
  });

  // 3. Enlaces WhatsApp data-cms-whatsapp
  document.querySelectorAll('[data-cms-whatsapp]').forEach(el => {
    const num = data.general.whatsappNumero || '5492262672626';
    const currentHref = el.getAttribute('href') || '';
    if (currentHref.includes('wa.me/')) {
      const textParam = currentHref.split('text=')[1] || '';
      el.setAttribute('href', `https://wa.me/${num}?text=${textParam}`);
    }
  });

  // 4. Enlaces Teléfono data-cms-tel
  document.querySelectorAll('[data-cms-tel]').forEach(el => {
    el.textContent = data.general.telefono;
    el.setAttribute('href', `tel:${data.general.telefono.replace(/[^0-9+]/g, '')}`);
  });

  // 5. Enlaces Email data-cms-email
  document.querySelectorAll('[data-cms-email]').forEach(el => {
    el.textContent = data.general.email;
    el.setAttribute('href', `mailto:${data.general.email}`);
  });

  // 6. Banner Promocional Superior (si está activo y no estamos en admin)
  if (data.promoBanner && data.promoBanner.activo && data.promoBanner.texto && !window.location.pathname.includes('admin.html')) {
    const existingBanner = document.getElementById('altamare-promo-banner');
    if (!existingBanner) {
      const banner = document.createElement('div');
      banner.id = 'altamare-promo-banner';
      banner.className = 'bg-[#C5A880] text-[#140E0A] py-2 px-4 text-xs font-medium text-center flex items-center justify-center gap-3 relative z-50 shadow-sm';
      
      let btnHtml = '';
      if (data.promoBanner.botonTexto && data.promoBanner.botonUrl) {
        btnHtml = `<a href="${data.promoBanner.botonUrl}" target="_blank" rel="noopener noreferrer" class="inline-block bg-[#140E0A] hover:bg-black text-[#FAF8F5] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded transition-colors ml-2">${data.promoBanner.botonTexto} &rarr;</a>`;
      }

      banner.innerHTML = `
        <div class="flex items-center justify-center flex-wrap gap-2">
          <span>${data.promoBanner.texto}</span>
          ${btnHtml}
        </div>
      `;
      document.body.insertBefore(banner, document.body.firstChild);
    }
  }
});

// Función auxiliar para leer rutas de objetos anidados como 'general.telefono'
function getNestedValue(obj, path) {
  if (!obj || !path) return undefined;
  const parts = path.split('.');
  let current = obj;
  for (let i = 0; i < parts.length; i++) {
    if (current === undefined || current === null) return undefined;
    current = current[parts[i]];
  }
  return current;
}
