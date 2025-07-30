const translations = {
    pt: {
        jobTitle: "Diretor de Operações",
        bio: "O meu papel: garantir que o seu projeto corre sem percalços. Ponto por ponto.",
        addContact: "Adicionar aos contatos",
        visitWebsite: "Visitar o site Lisabor",
        sendEmail: "Enviar um email",
        call: "Ligar",
        linkedin: "Perfil LinkedIn"
    },
    en: {
        jobTitle: "Director of Operations",
        bio: "My role: ensuring every project runs smoothly. Down to the very last stitch.",
        addContact: "Add to contacts",
        visitWebsite: "Visit Lisabor website",
        sendEmail: "Send an email",
        call: "Call",
        linkedin: "LinkedIn Profile"
    },
    fr: {
        jobTitle: "Directeur des Opérations",
        bio: "Mon rôle : que votre projet se déroule sans accroc. Au sens propre, comme au figuré.",
        addContact: "Ajouter aux contacts",
        visitWebsite: "Visiter le site Lisabor",
        sendEmail: "Envoyer un email",
        call: "Appeler",
        linkedin: "Profil LinkedIn"
    },
    es: {
        jobTitle: "Director de Operaciones",
        bio: "Mi función: que su proyecto se desarrolle sin contratiempos. Puntada por puntada.",
        addContact: "Añadir a contactos",
        visitWebsite: "Visitar el sitio Lisabor",
        sendEmail: "Enviar un email",
        call: "Llamar",
        linkedin: "Perfil de LinkedIn"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.language-selector button');

    updateTexts('pt');
    
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            updateTexts(lang);

            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});

function updateTexts(lang) {
    const elementsToTranslate = document.querySelectorAll('[data-key]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
}