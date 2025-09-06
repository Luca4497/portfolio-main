import educationAssets from '../assets/education/educationAssets';
import pdf from '../../reference.pdf'

const { luiss, polito } = educationAssets;

const educationData = [
    {
        id: 1,
        key: "education",
        image: luiss,
        year: "2025 - Rome, Amsterdam & Oxford",
        title: "Executive Master in Advanced Management at Luiss Business School | Major in Future Loading - International Talent Programme",
        role: "An interdisciplinary executive program focused on strategic leadership, innovation, and global business dynamics. The curriculum blends foundational business skills with cutting-edge topics such as AI, ESG investing, and digital transformation.",
        tasks: [
            "Strategic analysis for global companies",
            "Corporate finance & ESG investing",
            "Governance, stakeholder engagement & risk management",
            "Innovation-driven supply chains & sustainability",
            "Leadership labs: public speaking, negotiation, transformational leadership",
            "International Exposure: Rome, Amsterdam & Oxford Busin Schools",
        ]
    },
    {
        id: 2,
        key: "education",
        image: polito,
        year: "2021 - 2023",
        title: "Master of Science in Automotive Engineering at Politecnico di Torino",
        role: "Thesis: \"Design of an Origami Composite Structure with Application to a Racecar Crash Absorber\"",
        tasks: [
            "Developed a carbon fiber origami crash box for a Formula Student car using FEA simulations (LS- Dyna), incorporating cohesive and shell elements.",
            "Conducted experimental testing to validate models, with comprehensive data post - processing in Matlab"
        ],
        link: "https://webthesis.biblio.polito.it/27482/"
    },
    {
        id: 3,
        key: "education",
        image: polito,
        year: "2017 - 2021",
        title: "Bachelor’s Degree in Mechanical Engineering",
        role: "Thesis: \"Numerical Simulation of a Cooling System for a Transonic Blade, Considering Variations in Operational and Geometric Conditions\"",
        tasks: "Analyzed and post-processed CFD data by modifying operational parameters of a cooling channel installed on the LS89 transonic turbine blade, exploring the impact of geometric and flow variations on cooling efficiency.",
    }
];

export default educationData