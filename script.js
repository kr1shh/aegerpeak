document.addEventListener('DOMContentLoaded', function() {
    const peicCards = document.querySelectorAll('.peic-card h3');
    peicCards.forEach(card => {
        card.addEventListener('click', function() {
            const peicDefinition = this.nextElementSibling;
            const icon = this.querySelector('.icon-circle')
            if (peicDefinition) {
                if (peicDefinition.style.display === 'block') {
                    peicDefinition.style.display = 'none';
                    icon.textContent = '+';
                } else {
                    peicDefinition.style.display = 'block';
                    icon.textContent = '-';
                }
            }
        });
    });

    const peicTitles = document.querySelectorAll('.focus-area,.scope-of-service,.benefits');
    peicTitles.forEach(peicTitle => {
        peicTitle.addEventListener('click',function(){
            const peicTitleDefinition = this.nextElementSibling;
            if(peicTitleDefinition){
                if(peicTitleDefinition.style.display === 'block') {
                    peicTitleDefinition.style.display = 'none';
                }
                else {
                    peicTitleDefinition.style.display = 'block';
                }
            }
        })
    }) 
});

function toggleMenu() {
    dropdown = document.getElementsByClassName('dropdown')[0];
    dropdown.classList.toggle('show');
}

window.addEventListener('resize', function() {
    if (window.innerWidth >= 600) {
      const dropdown = document.getElementsByClassName('dropdown')[0];
      dropdown.classList.remove('show');
    }
});