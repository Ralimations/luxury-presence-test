const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
navigation.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menu.focus(); } });

const photos = [
  ['gallery-1.jpg', '4460 Roseworthy — property photo'],
  ['gallery-2.jpg', '5570 Ailanto — property photo 1'],
  ['gallery-3.jpg', '5570 Ailanto — property photo 2'],
  ['gallery-4.jpg', '5570 Ailanto — property photo 3'],
  ['gallery-5.jpg', '4787 East Beacon Ridge — property photo 1'],
  ['gallery-6.jpg', '4787 East Beacon Ridge — property photo 2'],
  ['gallery-7.jpg', '4787 East Beacon Ridge — property photo 3']
];
const gallery = document.querySelector('#gallery-grid');
const lightbox = document.querySelector('#lightbox');
let photoIndex = 0;
photos.forEach(([file, alt], index) => {
  const button = document.createElement('button'); button.className = 'gallery-photo'; button.hidden = index > 4;
  button.setAttribute('aria-label', `View ${alt}`);
  const img = document.createElement('img'); img.src = `assets/${file}`; img.alt = alt; img.loading = 'lazy'; img.width = 1024; img.height = 682;
  const icon = document.createElement('span'); icon.textContent = '↗'; icon.setAttribute('aria-hidden', 'true'); button.append(img, icon);
  button.addEventListener('click', () => { photoIndex = index; showPhoto(); lightbox.showModal(); }); gallery.append(button);
});
function showPhoto() { const [file, alt] = photos[photoIndex]; const img = document.querySelector('#lightbox-image'); img.src = `assets/${file}`; img.alt = alt; document.querySelector('#photo-count').textContent = `${photoIndex + 1} / ${photos.length}`; }
function movePhoto(step) { photoIndex = (photoIndex + step + photos.length) % photos.length; showPhoto(); }
document.querySelector('#photo-prev').addEventListener('click', () => movePhoto(-1));
document.querySelector('#photo-next').addEventListener('click', () => movePhoto(1));
document.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.close(); });
lightbox.addEventListener('keydown', e => { if (e.key === 'ArrowRight') { e.preventDefault(); movePhoto(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); movePhoto(-1); } });
document.querySelector('#gallery-all').addEventListener('click', function () { const expanded = this.getAttribute('aria-expanded') !== 'true'; this.setAttribute('aria-expanded', String(expanded)); [...gallery.children].forEach((item, index) => { item.hidden = !expanded && index > 4; }); this.textContent = expanded ? 'Show fewer photos −' : 'View all 7 photos ＋'; });

const searchForm = document.querySelector('#search-form');
const searchDialog = document.querySelector('#search-dialog');
let searchSummary = '';
searchForm.addEventListener('submit', e => {
  e.preventDefault(); const data = new FormData(searchForm); const min = Number(data.get('min')); const max = Number(data.get('max')); const maxInput = searchForm.elements.max;
  maxInput.setCustomValidity('');
  if (min && max && min > max) { maxInput.setCustomValidity('Maximum price must be at least the minimum price.'); maxInput.reportValidity(); return; }
  const money = number => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(number);
  searchSummary = [data.get('location'), data.get('type') || 'Any property type', data.get('bedrooms') ? `${data.get('bedrooms')} bedrooms` : 'Any bedrooms', data.get('baths') ? `${data.get('baths')} baths` : 'Any baths', `${min ? money(min) : 'No minimum'} – ${max ? money(max) : 'no maximum'}`, data.get('sort')].join(' · ');
  document.querySelector('#search-summary').textContent = searchSummary; searchDialog.showModal();
});
searchForm.addEventListener('input', () => searchForm.elements.max.setCustomValidity(''));
document.querySelector('.search-close').addEventListener('click', () => searchDialog.close());
document.querySelector('#share-search').addEventListener('click', () => { const field = document.querySelector('#contact-form textarea'); field.value = `Hi Marci, I’m looking for a home with these preferences:\n\n${searchSummary}\n\nI’d love to learn more about available properties.`; searchDialog.close(); document.querySelector('#contact').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); document.querySelector('#contact-form input').focus({ preventScroll: true }); });

document.querySelector('#contact-form').addEventListener('submit', e => {
  e.preventDefault(); const form = e.currentTarget; const data = new FormData(form);
  const message = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
  const status = document.querySelector('#contact-status'); status.replaceChildren();
  const note = document.createElement('p'); note.textContent = 'Your message is ready. Nothing has been sent yet. Copy it, then paste it into the secure form on Marci’s website.';
  const actions = document.createElement('div'); actions.className = 'contact-status-actions';
  const copy = document.createElement('button'); copy.type = 'button'; copy.textContent = 'Copy message';
  copy.addEventListener('click', async () => { try { await navigator.clipboard.writeText(message); copy.textContent = 'Copied'; } catch { note.textContent = `Copy this message manually:\n\n${message}`; } });
  const link = document.createElement('a'); link.href = 'https://marcimetzger.com/#63878283-d93b-46db-8daa-d8cb1389f2ab'; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = 'Open secure contact form ↗';
  actions.append(copy, link); status.append(note, actions);
});
