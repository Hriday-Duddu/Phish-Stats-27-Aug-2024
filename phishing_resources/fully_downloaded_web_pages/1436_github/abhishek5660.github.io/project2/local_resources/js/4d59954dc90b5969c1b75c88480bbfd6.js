// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq li');
  
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        const isActive = item.classList.contains('show');
        
        // Close all items
        faqItems.forEach(faq => {
          faq.classList.remove('show');
        });
        
        // If it wasn't already active, open it
        if (!isActive) {
          item.classList.add('show');
        }
      });
    });
  });
  
  // Language Dropdown Toggle
  const languageBtn = document.getElementById('language-btn');
  const languageDropdown = document.getElementById('language-dropdown');
  
  languageBtn.addEventListener('click', () => {
    languageDropdown.classList.toggle('show');
  });
  
  // Close dropdown if clicked outside
  document.addEventListener('click', (event) => {
    if (!languageBtn.contains(event.target)) {
      languageDropdown.classList.remove('show');
    }
  });
  