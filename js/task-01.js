
const liEls = document.querySelectorAll('.item');
console.log('Number of categories:', liEls.length);

liEls.forEach((itemEl) => {
    console.log(`Category: ${itemEl.firstElementChild.textContent}`);
    
    console.log('Elements:', itemEl.querySelectorAll('li').length);
});