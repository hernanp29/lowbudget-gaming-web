// Renders all picks from picks.js into the grid
(function () {
  const grid = document.getElementById('picks-grid');
  if (!grid || !Array.isArray(picks) || picks.length === 0) return;

  picks.forEach(function (p) {
    const stars = '★'.repeat(Math.round(p.stars)) + '☆'.repeat(5 - Math.round(p.stars));

    const imgHTML = p.image
      ? `<img src="${p.image}" alt="${p.name}" loading="lazy"/>`
      : `<span class="card-img-placeholder">${p.emoji}</span>`;

    const badgeHTML = p.badge
      ? `<span class="badge ${p.badge}">${p.badgeText}</span>`
      : '';

    const oldPriceHTML = p.priceOld
      ? `<span class="p-old">${p.priceOld}</span>`
      : '';

    const discountHTML = p.discount
      ? `<span class="p-off">${p.discount}</span>`
      : '';

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-img-wrap">${imgHTML}</div>
      <div class="card-body">
        <div class="card-top">
          <span class="cat">${p.cat}</span>
          ${badgeHTML}
        </div>
        <div class="card-name">${p.name}</div>
        <div class="stars">${stars}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="prices">
          <span class="p-now">${p.priceNow}</span>
          ${oldPriceHTML}
          ${discountHTML}
        </div>
        <a href="${p.link}" class="amz-btn" target="_blank" rel="noopener noreferrer">
          CHECK PRICE ON AMAZON <span>↗</span>
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
})();
