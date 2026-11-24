const form = document.querySelector('#inquiry-form');
const topic = new URLSearchParams(window.location.search).get('topic');
const selectedOption = Array.from(form.elements.topic.options).find(option => option.value === topic);
if (selectedOption) selectedOption.defaultSelected = true;

const fields = form.querySelector('fieldset');
const status = form.querySelector('[role="status"]');

form.addEventListener('submit', async event => {
  event.preventDefault();
  if (fields.disabled) return;
  const payload = Object.fromEntries(new FormData(form));
  fields.disabled = true;
  status.textContent = 'Sending your inquiry…';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(20000),
    });
    const result = await response.json();
    if (!response.ok || result.success !== true) throw new Error('Submission unconfirmed');
    form.reset();
    status.textContent = 'Thank you. Your inquiry has been sent to Defiant Duck.';
  } catch {
    status.textContent = 'Delivery could not be confirmed. Try again or email Defiant Duck directly.';
  } finally {
    fields.disabled = false;
  }
});
