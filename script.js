function initAnimacao() {
    const sections = document.querySelectorAll ('.js-scroll')
    if(sections.length){
            const windowBottom = window.innerHeight * 0.6;
        function animaScroll () {
            sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowBottom) < 0;
            if(isSectionVisible) 
                section.classList.add('ativo');
            
            else 
            
                section.classList.remove('ativo');
            }
            )
        }
        animaScroll()
    window.addEventListener('scroll', animaScroll);
    }
}
initAnimacao()