export default [
  {
    _id: "M101",
    name: "Introduction to Rocket Propulsion",
    description: "Basic principles of rocket propulsion and rocket engines.",
    course: "RS101",
    lessons: [
      {
        _id: "L101",
        name: "History of Rocketry",
        description: "A brief history of rocketry and space exploration.",
        module: "M101",
      },
      {
        _id: "L102",
        name: "Rocket Propulsion Fundamentals",
        description: "Basic principles of rocket propulsion.",
        module: "M101",
      },
      {
        _id: "L103",
        name: "Rocket Engine Types",
        description: "Overview of different types of rocket engines.",
        module: "M101",
      },
    ],
  },
  {
    _id: "M102",
    name: "Fuel and Combustion",
    description:
      "Understanding rocket fuel, combustion processes, and efficiency.",
    course: "RS101",
    lessons: [
      {
        _id: "L201",
        name: "Rocket Fuel",
        description: "Overview of different types of rocket fuels.",
        module: "M102",
      },
      {
        _id: "L202",
        name: "Combustion Processes",
        description: "Understanding combustion processes and efficiency.",
        module: "M102",
      },
      {
        _id: "L203",
        name: "Combustion Instability",
        description: "Understanding combustion instability and mitigation.",
        module: "M102",
      },
    ],
  },
  {
    _id: "M103",
    name: "Nozzle Design",
    description:
      "Principles of rocket nozzle design and performance optimization.",
    course: "RS101",
    lessons: [
      {
        _id: "L301",
        name: "Nozzle Design",
        description: "Overview of different types of rocket nozzles.",
        module: "M103",
      },
      {
        _id: "L302",
        name: "Nozzle Performance",
        description: "Understanding nozzle performance and efficiency.",
        module: "M103",
      },
      {
        _id: "L303",
        name: "Nozzle Optimization",
        description: "Optimizing nozzle design for specific applications.",
        module: "M103",
      },
    ],
  },
  {
    _id: "M201",
    name: "Fundamentals of Aerodynamics",
    description: "Basic aerodynamic concepts and fluid dynamics principles.",
    course: "RS102",
    lessons: [
      {
        _id: "L301",
        name: "Introduction to Fluid Dynamics",
        description:
          "Explore the basic principles of fluid behavior and properties.",
        module: "M103",
      },
      {
        _id: "L302",
        name: "Boundary Layers and Drag",
        description:
          "Understand the significance of boundary layers and aerodynamic drag.",
        module: "M103",
      },
      {
        _id: "L303",
        name: "Lift Generation and Airfoil Design",
        description:
          "Delve into lift creation and principles of airfoil design.",
        module: "M103",
      },
    ],
  },
  {
    _id: "M202",
    name: "Subsonic and Supersonic Flow",
    description: "Understanding subsonic and supersonic aerodynamic behaviors.",
    course: "RS102",
    lessons: [
      {
        _id: "L301",
        name: "Subsonic Aerodynamics Fundamentals",
        description:
          "Explore principles governing subsonic airflow and design considerations.",
        module: "M103",
      },
      {
        _id: "L302",
        name: "Supersonic Shock Waves and Mach Numbers",
        description:
          "Understand shock waves, Mach numbers, and supersonic phenomena.",
        module: "M103",
      },
      {
        _id: "L303",
        name: "Transonic Flow and Critical Mach Number",
        description:
          "Examine transonic regions and the significance of critical Mach.",
        module: "M103",
      },
    ],
  },
  {
    _id: "M203",
    name: "Aerodynamic Heating",
    description: "Study of aerodynamic heating and thermal protection systems.",
    course: "RS102",
    lessons: [
      {
        _id: "L301",
        name: "Introduction to Aerodynamic Heating",
        description:
          "Uncover the basics of aerodynamic heating and its implications.",
        module: "M103",
      },
      {
        _id: "L302",
        name: "Heat Transfer in Hypersonic Flight",
        description:
          "Explore heat transfer challenges in hypersonic aerodynamics and beyond.",
        module: "M103",
      },
      {
        _id: "L303",
        name: "Thermal Protection Systems and Design",
        description:
          "Examine strategies for effective thermal protection in aerospace design..",
        module: "M103",
      },
    ],
  },
  {
    _id: "M301",
    name: "Spacecraft Structural Design",
    description:
      "Fundamentals of designing spacecraft structures and materials selection.",
    course: "RS103",
    lessons: [
      {
        _id: "L301",
        name: "Load Analysis and Structural Requirements",
        description:
          "Analyze loads, define structural requirements for spacecraft design.",
        module: "M103",
      },
      {
        _id: "L302",
        name: "Material Selection and Stress Analysis",
        description:
          "Explore materials and perform stress analysis in spacecraft structures.",
        module: "M103",
      },
      {
        _id: "L303",
        name: "Vibration Control and Structural Dynamics",
        description:
          "Manage vibrations, study dynamics for robust spacecraft structural design..",
        module: "M103",
      },
    ],
  },
  {
    _id: "M302",
    name: "Orbital Mechanics",
    description: "Understanding orbital dynamics and mission planning.",
    course: "RS103",
    lessons: [
      {
        _id: "L301",
        name: "Keplerian Orbits and Orbital Elements",
        description:
          "Master Keplerian orbits, understand key orbital elements in design.",
        module: "M103",
      },
      {
        _id: "L302",
        name: "Orbital Maneuvers and Hohmann Transfers",
        description:
          "Learn orbital maneuvers, Hohmann transfers for efficient spacecraft trajectories.",
        module: "M103",
      },
      {
        _id: "L303",
        name: "Perturbations and Orbit Corrections",
        description:
          "Address perturbations, implement corrections for precise spacecraft orbital paths.",
        module: "M103",
      },
    ],
  },
  {
    _id: "M303",
    name: "Spacecraft Systems Engineering",
    description: "Overview of spacecraft systems and subsystems engineering.",
    course: "RS103",
    lessons: [
      {
        _id: "L301",
        name: "Requirements Definition and System Architecture",
        description:
          "Establish requirements, design system architecture for spacecraft engineering.",
        module: "M103",
      },
      {
        _id: "L302",
        name: "Subsystem Integration and Verification",
        description:
          "Integrate and verify subsystems for cohesive spacecraft functionality.",
        module: "M103",
      },
      {
        _id: "L303",
        name: "Reliability and Risk Management in Spacecraft Systems",
        description:
          "Ensure reliability, manage risks in spacecraft systems engineering.",
        module: "M103",
      },
    ],
  },
];
