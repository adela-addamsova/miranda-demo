document.addEventListener('DOMContentLoaded', () => {
    const footerData = [
        {
            title: "Jak nakoupit",
            items: [
                "Platební podmínky",
                "Fixační podmínky",
                "Dodací a skladovací podmínky",
                "Obchodní podmínky",
                "Ochrana osobních údajů",
                "Reklamace"
            ]
        },
        {
            title: "Vaše objednávky",
            items: [
                "Stav objednávky",
                "Stav poštovní zásilky",
                "Přehled služeb a benefitů",
                "Výkupní podmínky",
                "Nejčastější dotazy",
                "Grafy investičních kovů"
            ]
        },
        {
            title: "O společnosti",
            items: [
                "Základní informace",
                "Pobočky",
                "Kontakty",
                "Partneři",
                "Blog",
                "Kariéra"
            ]
        },
        {
            title: "Kontakt",
            contact: {

                social: [
                    { icon: "fb.png", link: "#" },
                    { icon: "ig.png", link: "#" },
                ],
                phone: "+420 123 456 789",
                email: "info@example.com"
            }
        }
    ];

    const gfooter = document.getElementById('gfooter');

    footerData.forEach(column => {
        const col = document.createElement('div');
        col.className = 'footer-column';

        const heading = document.createElement('h4');
        heading.textContent = column.title;
        col.appendChild(heading);

        if (column.items) {
            const ul = document.createElement('ul');
            column.items.forEach(item => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = "#";  // You can replace with real links if you want
                a.textContent = item;
                li.appendChild(a);
                ul.appendChild(li);
            });
            col.appendChild(ul);
        }

        if (column.contact) {
            const contactDiv = document.createElement('div');
            contactDiv.className = 'contact-block';

            const phone = document.createElement('div');
            phone.className = 'contact-phone';
            phone.innerHTML = `<img src="./assets/img/phone.png"> <a href="tel:${column.contact.phone}">${column.contact.phone}</a>`;
            contactDiv.appendChild(phone);

            const email = document.createElement('div');
            email.className = 'contact-email';
            email.innerHTML = `<img src="./assets/img/mail.png"> <a href="mailto:${column.contact.email}">${column.contact.email}</a>`;
            contactDiv.appendChild(email);

            const socialDiv = document.createElement('div');
            socialDiv.className = 'social-icons';

            column.contact.social.forEach(s => {
                const a = document.createElement('a');
                a.href = s.link;
                a.innerHTML = `<img src="./assets/img/${s.icon}" alt="social icon">`;
                socialDiv.appendChild(a);
            });

            contactDiv.appendChild(socialDiv);
            col.appendChild(contactDiv);
        }

        gfooter.appendChild(col);
    });
});
