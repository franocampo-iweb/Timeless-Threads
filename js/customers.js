function renderCustomers(customers, mode) {
  const body = document.querySelector('#customerRows');
  const status = document.querySelector('#customersApiStatus');
  if (!body) return;
  body.innerHTML = customers.map(c => `
    <tr><td>${c.id}</td><td>${c.name}</td><td>${c.email}</td><td>${c.city}</td><td>${c.segment}</td><td>${c.status}</td></tr>
  `).join('');
  if (status) {
    status.textContent = mode === 'fetch'
      ? `GET customers.json — ${customers.length} records loaded`
      : `Standalone data — ${customers.length} fictional customer records loaded`;
    status.classList.add('ok');
  }
}

async function loadCustomers() {
  const body = document.querySelector('#customerRows');
  if (!body) return;

  const isHosted = location.protocol === 'http:' || location.protocol === 'https:';
  const fallback = window.TIMELESS_DATA?.customers || [];

  if (!isHosted) {
    renderCustomers(fallback, 'standalone');
    return;
  }

  try {
    const response = await fetch('data/customers.json', {method:'GET'});
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const customers = await response.json();
    renderCustomers(customers, 'fetch');
  } catch (err) {
    renderCustomers(fallback, 'standalone');
    const status = document.querySelector('#customersApiStatus');
    if (status) status.textContent = `GET unavailable (${err.message}) — embedded customer data loaded instead`;
  }
}

document.addEventListener('DOMContentLoaded', loadCustomers);
