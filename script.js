function savePrompt() {
    const input = document.getElementById('promptInput').value;
    if (!input.trim()) return;
  
    const saved = JSON.parse(localStorage.getItem('prompts') || '[]');
    saved.push({ text: input, date: new Date().toLocaleString() });
    localStorage.setItem('prompts', JSON.stringify(saved));
    document.getElementById('promptInput').value = '';
    showPrompts();
  }
  
  function showPrompts() {
    const saved = JSON.parse(localStorage.getItem('prompts') || '[]');
    const list = document.getElementById('promptList');
    list.innerHTML = '';
    saved.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.date}: ${item.text}`;
      list.appendChild(li);
    });
  }
  
  window.onload = showPrompts;
  