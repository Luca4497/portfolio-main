import portfolioAssets from "../assets/Portfolio/portfolioAssets";

const { impact, mappa, pianta, sc } = portfolioAssets;

console.log(portfolioAssets);

const portfolioData = [
    {
        id: 1,
        image: mappa,
        tile: "International Experiences",
        title: "Gained international experiences throught business travel",
        abstract: "Cross cultural sharing and collaborations (Ex: Germany; Netherland; UK; Croatia)."
    },
    {
        id: 2,
        image: sc,
        tile: "Squadra Corse working activities",
        title: "Monocoque Design & Manufacturing",
        abstract: "Carbon fiber design and hand lamination using Carbon Fiber Rinforcement Plies."
    },
    {
        id: 3,
        image: impact,
        tile: "Origami Crashbox",
        title: "Design of a Lightweight Origami Composite Crash Box",
        abstract: "Experimental and Numerical Study on the Absorbed Energy in Frontal Impacts",
        link: "https://www.mdpi.com/2504-477X/8/6/224"
    },
    {
        id: 4,
        image: pianta,
        tile: "Arduino tools and 3D printed part",
        title: "Automated irrigator system humidity feedback controlled",
        abstract: "Motion Control Module for generic application"
    }
];

export default portfolioData