import expertiseAssets from "../assets/expertise/expertiseAssets";

const { leonardo, nttData, sc } = expertiseAssets;


const expertiseData = [
    {
        id: 1,
        key: "experties",
        image: leonardo,
        year: "2025 - Present",
        title: "Plant Quality Manager at Leonardo Aerostrutture - Italy",
        role: "Responsible for product quality, compliance, and continuous improvement in aerostructure production.",
        tasks: [
            "Designed and implemented internal quality control systems to ensure product compliance and approval for internal and external delivery.",
            "Managed First Article Inspection(FAI) activities.",
            "Led root cause analysis using statistical quality methods, driving corrective actions for both internal processes and supplier- related issues.",
            "Corrective Action Boards(CAB) and Quality Improvement Plans(QIP).",
            "Ensured full compliance with ISO 9001 standards and supported internal and external audit readiness."
        ]
    },
    {
        id: 2,
        key: "experties",
        image: nttData,
        year: "2023 - 2025",
        title: "Advanced R&D System Engineer at NTT DATA Italy | Italdesign - Turin, Italy",
        role: "Working on Audi infotainment systems as navigation domain Function Owner.",
        tasks: [
            "Managed system requirement on IBM DOORS.",
            "Tracked project issue using Jira with SCRUM Agile framework.",
            "Ensured compliance with TISAX data protection standards.",
            "Performed prototype vehicle test drives and bench testing.",
            "Analyzed CAN and Ethernet traces using CANoe and esoTrace.",
            "Managed issue tracking and resolution through KPM ticketing."
        ]

    },
    {
        id: 3,
        key: "experties",
        image: sc,
        year: "2022 - 2023",
        title: "Head of Chassis & Composite Division at Squadra Corse PoliTo - Turin, Italy",
        role: "Responsible for design, testing, and supplier management of Formula Student car components.",
        tasks: [
            "Led full-cycle development of chassis and composite parts for the Formula Student car.",
            "Managed department budget, supplier relations, and sponsor interactions.",
            "Oversaw experimental tests: ASTM standard specimens, crash tests, and bending tests.",
            "Coordinated model correlation using LS-Dyna and HyperMesh."
        ]
    },
    {
        id: 4,
        key: "experties",
        image: sc,
        year: "2021 - 2022",
        title: "Chassis & Composite Designer at Squadra Corse PoliTo - Turin, Italy",
        role: "FEM and Carbon Fiber R&D Support",
        tasks:
            [
                "Conducted R&D on carbon fiber materials and designed composite components.",
                "Created and validated FEM models using HyperMesh (Optistruct) and CATIA V5.",
                "Hand-laminated CFRP parts and developed mold designs.",
                "Correlated test data with simulation outputs to improve design accuracy."
            ]
    }
];

export default expertiseData