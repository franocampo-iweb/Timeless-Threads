let allProducts = [];

const money = value => new Intl.NumberFormat('en-PH', {style:'currency', currency:'PHP', maximumFractionDigits:0}).format(value);

function productCard(product) {
  return `
    <article class="card product-card">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <div class="card-body">
        <div class="product-meta"><span>${product.category}</span><span class="badge">${product.availability}</span></div>
        <h3>${product.name}</h3>
        <p><strong>${product.tagline}</strong><br>${product.description}</p>
        <div class="product-meta"><span class="product-price">${money(product.price)}</span><a class="btn btn-secondary" href="contact.html?subject=${encodeURIComponent('Order inquiry: '+product.name)}">Order Now</a></div>
      </div>
    </article>`;
}

function showProducts(products, mode) {
  allProducts = products;
  const target = document.querySelector('#productGrid');
  const featured = document.querySelector('#featuredGrid');
  if (target) renderProducts(allProducts);
  if (featured) featured.innerHTML = allProducts.filter(p => p.featured).slice(0,3).map(productCard).join('');
  const api = document.querySelector('#productsApiStatus');
  if (api) {
    api.textContent = mode === 'fetch'
      ? `GET products.json — ${allProducts.length} records loaded`
      : `Standalone data — ${allProducts.length} product records loaded`;
    api.classList.add('ok');
  }
}

async function loadProducts() {
  const isHosted = location.protocol === 'http:' || location.protocol === 'https:';
  const fallback = window.TIMELESS_DATA?.products || [];

  // Direct file opening: use embedded fallback data so no local server is required.
  if (!isHosted) {
    showProducts(fallback, 'standalone');
    return;
  }

  // Hosted mode: demonstrate the required GET operation with fetch().
  try {
    const response = await fetch('data/products.json', {method:'GET'});
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const products = await response.json();
    showProducts(products, 'fetch');
  } catch (err) {
    // If a hosted fetch fails, keep the website usable with the same embedded data.
    showProducts(fallback, 'standalone');
    const api = document.querySelector('#productsApiStatus');
    if (api) api.textContent = `GET unavailable (${err.message}) — embedded product data loaded instead`;
  }
}

function renderProducts(products) {
  const target = document.querySelector('#productGrid');
  if (!target) return;
  target.innerHTML = products.length ? products.map(productCard).join('') : '<p>No products matched your search.</p>';
}

function applyFilters() {
  const q = (document.querySelector('#productSearch')?.value || '').toLowerCase().trim();
  const active = document.querySelector('.filter-btn.active')?.dataset.category || 'All';
  const filtered = allProducts.filter(p => {
    const matchesText = `${p.name} ${p.description} ${p.category} ${p.tagline}`.toLowerCase().includes(q);
    const matchesCategory = active === 'All' || p.category === active;
    return matchesText && matchesCategory;
  });
  renderProducts(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
  const search = document.querySelector('#productSearch');
  if (search) search.addEventListener('input', applyFilters);
  document.querySelectorAll('.filter-btn').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilters();
  }));
});
