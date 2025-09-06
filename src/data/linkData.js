import svg from '../assets/link/link';

const { email, linkedin, orcid } = svg;
const linkData = [
    {
        id: 1,
        link: 'mailto:luca@lucapatruno.it',
        image: email,
    },
    {
        id: 2,
        link: 'https://www.linkedin.com/in/lucapatruno/',
        image: linkedin,
    },
    {
        id: 3,
        link: 'https://orcid.org/0009-0004-0883-2394',
        image: orcid
    },
];

export default linkData