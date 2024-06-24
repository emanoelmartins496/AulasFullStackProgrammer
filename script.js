document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const form = document.querySelector('.search-form');
    const searchInput = document.getElementById('searchInput');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm = searchInput.value.toLowerCase().trim();

        if (searchTerm === '') return; // Verifica se o campo de pesquisa está vazio

        let sectionFound = false;

        sections.forEach(section => {
            const ul = section.querySelector('ul');
            const items = ul.getElementsByTagName('a');

            // Verifica cada item dentro da seção
            Array.from(items).forEach(item => {
                const text = item.textContent.toLowerCase();

                // Remove classe de destaque se existir
                item.classList.remove('highlight');

                // Se o termo de pesquisa estiver no texto do item
                if (text.includes(searchTerm)) {
                    // Abre a seção correspondente
                    section.classList.add('open');
                    sectionFound = true;

                    // Adiciona classe para piscar o item encontrado
                    item.classList.add('highlight');

                    // Rola a página para a seção encontrada
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });

                    // Mantém a classe de destaque até o clique no item
                    item.addEventListener('click', function() {
                        item.classList.remove('highlight');
                    });
                }
            });
        });

        if (!sectionFound) {
            alert('Item não encontrado!');
        }

        // Limpa o campo de pesquisa
        searchInput.value = '';
    });

    // Adiciona evento de clique aos títulos das seções para abrir/fechar
    sections.forEach(section => {
        const title = section.querySelector('h2');

        title.addEventListener('click', function() {
            const isOpen = section.classList.contains('open');

            // Fecha todas as seções
            sections.forEach(sec => {
                sec.classList.remove('open');
            });

            // Abre a seção clicada se não estiver aberta
            if (!isOpen) {
                section.classList.add('open');
            }
        });
    });
});
