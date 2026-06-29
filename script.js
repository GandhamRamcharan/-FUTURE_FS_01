// Interactive Status Engine for Portfolio
document.getElementById('portfolioForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const statusBox = document.getElementById('statusReport');
    
    statusBox.innerHTML = `🎉 Message Captured Successfully! Ramcharan will connect with you via email shortly.`;
    statusBox.style.backgroundColor = 'rgba(46, 204, 113, 0.15)';
    statusBox.style.color = '#2ecc71';
    statusBox.style.display = 'block';
    
    document.getElementById('portfolioForm').reset();
});