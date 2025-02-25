const servicesData = [
  {
    id: "energy",
    title: "Energy Bill Optimization PEIC",
    tagline: "Reduce Costs | Improve Efficiency | Minimize Energy Waste",
    benefits: [
      "Lowers Energy Costs – Reduces unnecessary electricity consumption.",
      "Identifies & Fixes Energy Leakage – Prevents hidden power loss from wiring or faulty equipment.",
      "Optimizes Power Factor – Reduces penalties from poor power factor and enhances system efficiency.",
      "Improves HVAC Efficiency – Cuts down cooling/heating costs through better energy management.",
      "Reduces Harmonics Disturbances – Enhances power quality and prevents voltage fluctuations.",
      "Enhances System Performance – Ensures smooth operation of electrical appliances and machinery.",
      "Prevents Equipment Damage – Reduces stress on electrical components and extends lifespan.",
      "Smart Monitoring & Automation – Provides real-time data and control over energy consumption.",
    ],
    packages: [
      {
        level: "basic",
        name: "BASIC",
        subtitle: "Essential Energy Optimization",
        target: "For Homes & Small Offices",
        description:
          "Essential energy optimization services for small setups looking for cost-effective energy savings.",
        price: "₹[X] + GST",
        features: [
          "Basic Power Factor Analysis – Identifies power factor inefficiencies.",
          "Basic Earth Leakage Checkup – Detects minor leakage causing energy loss.",
          "Load Consumption Assessment – Reviews power usage in major appliances.",
          "HVAC System Energy Evaluation – Identifies efficiency issues in air conditioning & heating.",
        ],
        tagline:
          "Ideal for small setups looking for cost-effective energy savings!",
      },
      {
        level: "advanced",
        name: "ADVANCED",
        subtitle: "In-Depth Energy Optimization",
        target: "For Commercial Establishments",
        description:
          "Comprehensive services for businesses looking to lower energy bills and enhance system efficiency.",
        price: "₹[X] + GST",
        features: [
          "Detailed Power Factor Analysis & Correction – Optimizes energy efficiency & reduces power wastage.",
          "Detailed Earth Leakage Checkup & Correction – Identifies and fixes major leakage issues.",
          "Load Distribution & Balancing – Ensures stable and efficient power consumption.",
          "HVAC System Performance Optimization – Reduces unnecessary power usage.",
          "Harmonics Analysis – Detects distortions affecting equipment efficiency.",
          "Power Factor Optimization with Capacitor Bank Solutions – Enhances power efficiency & reduces demand charges.",
        ],
        tagline:
          "Perfect for businesses looking to lower energy bills and enhance system efficiency!",
      },
      {
        level: "premium",
        name: "PREMIUM",
        subtitle: "Comprehensive Energy Cost Reduction",
        target: "For Industrial Facilities & Large Businesses",
        description:
          "The ultimate solution for industries and high-energy businesses aiming for maximum savings.",
        price: "₹[X] + GST",
        features: [
          "Smart Automation & IoT-Based Energy Monitoring – Track energy use in real time.",
          "Predictive Maintenance & Cost-Saving Strategies – Prevent energy waste before it happens.",
          "Custom Energy Usage Reports – Get advanced analytics for smarter decisions.",
          "Guaranteed Long-Term Cost Reduction – Maximize savings and efficiency.",
          "Leakage Prevention Through Smart Sensors & AI-Based Monitoring – Continuous tracking to eliminate energy wastage.",
          "Harmonics Analysis & Filtering – Prevent overheating, equipment damage, and system inefficiencies.",
          "HVAC Smart Control & Automation – Implement advanced temperature control and energy-efficient HVAC solutions.",
        ],
        tagline:
          "The ultimate solution for industries and high-energy businesses aiming for maximum savings!",
      },
    ],
  },
  {
    id: "safety-assessment",
    title: "Safety Assessment PEIC",
    tagline: "Ensure Electrical Safety | Prevent Hazards | Stay Compliant",
    benefits: [
      "Protects Lives & Property – Reduces risks of electrical shocks and fires.",
      "Ensures Wiring Safety – Identifies and corrects faulty or hazardous wiring.",
      "Ensures Human Safety – Minimizes risks of electrical accidents.",
      "Protects Appliances – Prevents damage due to voltage fluctuations or faults.",
      "Ensures Compliance – Meets government and industry safety regulations.",
      "Minimizes Business Downtime – Reduces unexpected failures and operational disruptions.",
      "Improves System Reliability – Identifies and fixes potential hazards early.",
    ],
    packages: [
      {
        level: "basic",
        name: "BASIC",
        subtitle: "Essential Electrical Safety Check",
        target: "For Homes & Small Businesses",
        description:
          "Essential electrical safety check for residential and small business setups.",
        price: "₹[X] + GST",
        features: [
          "Inspection of Electrical Wiring & Connections – Detects loose or faulty wiring.",
          "Basic Grounding System Verification – Ensures proper earthing to prevent shocks.",
          "Basic Earth Leakage Checkup – Identifies potential leakage and minor corrections.",
          "Protection Device Verification – Checks MCBs, RCCBs, and surge protectors.",
          "Wiring Safety Check – Prevents short circuits and overheating.",
          "Appliance Safety Assessment – Checks for risks of electrical damage.",
        ],
        tagline:
          "Ideal for residential and small business owners who need a basic safety check!",
      },
      {
        level: "advanced",
        name: "ADVANCED",
        subtitle: "In-Depth Safety Evaluation & Correction",
        target: "For Commercial & Industrial Use",
        description:
          "Comprehensive safety evaluation and correction services for commercial and industrial applications.",
        price: "₹[X] + GST",
        features: [
          "Detailed Earth Leakage Checkup & Correction – Finds hidden faults and fixes them.",
          "Verification of Grounding & Earthing Systems – Ensures safe electrical discharge.",
          "Load Distribution Assessment – Detects and prevents electrical overloads.",
          "Testing & Calibration of Safety Devices – Ensures proper function of RCCBs, surge protectors, and circuit breakers.",
          "Thermal Scanning & Fault Detection – Identifies overheating issues in wiring and connections.",
          "Human Safety Check – Identifies risks that could lead to electrical injuries.",
        ],
        tagline:
          "Best for businesses needing enhanced safety compliance and risk prevention!",
      },
      {
        level: "premium",
        name: "PREMIUM",
        subtitle: "Complete Electrical Safety & Risk Mitigation",
        target: "For Large Industrial & Critical Facilities",
        description:
          "The ultimate electrical safety solution for industrial facilities, large businesses, and mission-critical operations.",
        price: "₹[X] + GST",
        features: [
          "Earth Test for Safety – Ensures efficient grounding to prevent major failures.",
          "Emergency Response System Evaluation – Checks alarms, backup power, and shutdown protocols.",
          "Fire & Surge Protection Analysis – Identifies risks and enhances protective measures.",
          "Harmonics & Power Quality Analysis – Prevents voltage fluctuations and electrical disturbances.",
          "Power Factor Optimization – Improves energy efficiency and system stability.",
          "Preventive Maintenance Planning – Reduces risks of unexpected failures.",
          "Comprehensive Wiring, Appliance & Human Safety Assessment – A full-scale inspection for maximum protection.",
        ],
        tagline:
          "The ultimate electrical safety solution for industrial facilities, large businesses, and mission-critical operations!",
      },
    ],
  },
  {
    id: "risk-analysis",
    title: "Risk Analysis – PEIC",
    tagline:
      "Identifying Risks | Preventing Failures | Ensuring Electrical Reliability",
    benefits: [
      "Prevents Electrical Failures – Identifies weak points in the system before breakdowns occur.",
      "Minimizes Downtime – Reduces disruptions due to unexpected power failures or system faults.",
      "Detects Energy Leakages – Helps in optimizing energy consumption and lowering costs.",
      "Ensures Protection Against Surges – Evaluates surge protection measures to safeguard appliances and equipment.",
      "Improves Power Factor & Reduces Harmonics – Enhances power efficiency and stability.",
      "Enhances HVAC System Safety & Efficiency – Prevents electrical risks in air conditioning and ventilation systems.",
      "Reduces Fire & Shock Hazards – Ensures safe and reliable electrical infrastructure.",
      "Supports Regulatory Compliance – Helps businesses and homeowners meet safety and legal standards.",
    ],
    packages: [
      {
        level: "basic",
        name: "BASIC",
        subtitle: "Essential Risk Evaluation",
        target: "For Homes & Small Offices",
        description:
          "Basic risk evaluation for identifying fundamental electrical risks.",
        price: "₹[X] + GST",
        features: [
          "Analysis of Electrical Infrastructure (Wiring, Circuit Breakers, Load Distribution)",
          "Basic Examination of Protection Devices (Fuses, RCCBs, Surge Protection)",
          "Basic Emergency Response System Check (Backup Power, Alarms, Shutdown Protocols)",
          "Basic Power Surge & Protection Check",
          "HVAC System Electrical Safety Review",
        ],
        tagline: "Ideal for identifying fundamental electrical risks!",
      },
      {
        level: "advanced",
        name: "ADVANCED",
        subtitle: "In-Depth Electrical Risk Analysis",
        target: "For Homes, Offices & Small Businesses",
        description:
          "Comprehensive risk analysis to prevent electrical failures and enhance system stability.",
        price: "₹[X] + GST",
        features: [
          "Thermal Imaging for Hotspot & Overheating Risk Detection",
          "Detailed Load Distribution Analysis & Overload Prevention",
          "Power Factor & Harmonics Analysis – Identifies efficiency issues",
          "Advanced Examination of Protection Devices & Safety Equipment",
          "Complete Emergency Response System Evaluation",
          "HVAC Performance Risk Assessment",
        ],
        tagline:
          "A comprehensive analysis to prevent electrical failures and enhance system stability!",
      },
      {
        level: "premium",
        name: "PREMIUM",
        subtitle: "Complete Electrical Risk Mitigation Plan",
        target: "For Large Businesses & Industries",
        description:
          "The most detailed risk analysis for complete electrical safety and operational efficiency.",
        price: "₹[X] + GST",
        features: [
          "IoT-Based Real-Time Risk Monitoring",
          "AI-Based Power Leakage & Harmonics Disturbance Detection",
          "Predictive Failure Analysis & Risk Forecasting",
          "Power Factor Correction for Energy Efficiency",
          "Harmonics Filtration to Prevent System Instability",
          "HVAC Smart Control & Electrical Safety Optimization",
          "Custom Risk Management Strategy for Large Facilities",
        ],
        tagline:
          "The most detailed risk analysis for complete electrical safety and operational efficiency!",
      },
    ],
  },
  {
    id: "power-reliability",
    title: "Power Reliability – PEIC",
    tagline:
      "Ensuring Stable Power | Preventing Failures | Maximizing Efficiency",
    benefits: [
      "Ensures Stable Grid Power Supply – Prevents voltage fluctuations and blackouts.",
      "Optimizes On-Site Power Distribution – Prevents overloads and inefficiencies.",
      "Improves Backup Power System Performance – Verifies UPS, generators, and battery storage efficiency.",
      "Reduces Business Downtime – Ensures continuous operation even during outages.",
      "Enhances Load Balancing – Prevents circuit overloading and power losses.",
      "Prevents Equipment & Appliance Failures – Protects critical systems from unstable power.",
      "Increases Energy Efficiency – Reduces wastage and optimizes power usage.",
      "Ensures Compliance & Safety – Meets industry standards for reliable power systems.",
    ],
    packages: [
      {
        level: "basic",
        name: "BASIC",
        subtitle: "Essential Power Stability Check",
        target: "For Homes & Small Offices",
        description:
          "Basic power stability check to ensure a stable external and on-site power distribution.",
        price: "₹[X] + GST",
        features: [
          "Grid Connection Analysis for Stable External Power",
          "Basic On-Site Power Distribution Assessment",
          "Load Management & Overload Prevention Check",
          "Basic Backup Power Readiness Check (UPS/Inverter/Generator)",
        ],
        tagline:
          "Ideal for ensuring basic power stability at home or in small offices!",
      },
      {
        level: "advanced",
        name: "ADVANCED",
        subtitle: "Comprehensive Power Reliability Analysis",
        target: "For Homes, Offices & Small Businesses",
        description:
          "A complete power reliability assessment to improve efficiency and prevent failures.",
        price: "₹[X] + GST",
        features: [
          "Detailed Grid Stability & Voltage Fluctuation Analysis",
          "Advanced Load Distribution & Optimization Check",
          "Backup Power Efficiency & Battery Storage Assessment",
          "Emergency Power Readiness & Automatic Switchover Testing",
          "Thermal Imaging for Hotspot & Overload Detection",
        ],
        tagline:
          "A complete power reliability assessment to improve efficiency and prevent failures!",
      },
      {
        level: "premium",
        name: "PREMIUM",
        subtitle: "Full Power Reliability & Backup Plan",
        target: "For Large Businesses & Industries",
        description:
          "The ultimate solution for uninterrupted power supply and operational stability.",
        price: "₹[X] + GST",
        features: [
          "IoT-Based Real-Time Monitoring for Power Stability",
          "AI-Based Predictive Failure & Load Analysis",
          "Customized Backup Power & Emergency Readiness Strategy",
          "Power Factor Correction & Harmonics Reduction Plan",
          "Comprehensive Grid Integration & Alternate Power Source Planning",
        ],
        tagline:
          "The ultimate solution for uninterrupted power supply and operational stability!",
      },
    ],
  },
  {
    id: "cost-optimization",
    title: "Cost Optimization – PEIC",
    tagline: "Cut Unnecessary Expenses | Improve Efficiency | Prevent Failures",
    benefits: [
      "Lowers Energy Bills – Identifies and eliminates wasteful power consumption.",
      "Improves Power Factor – Minimizes reactive power losses.",
      "Optimizes Equipment Efficiency – Prevents early wear and performance drops.",
      "Enhances HVAC Performance – Reduces cooling and heating energy waste.",
      "Prevents Costly Repairs – Implements proactive preventive maintenance.",
      "Minimizes Operational Downtime – Ensures uninterrupted power supply.",
      "Increases Equipment Lifespan – Prevents unexpected failures through regular servicing.",
      "Applicable to All Sectors – Suitable for residential, commercial, and industrial systems.",
    ],
    packages: [
      {
        level: "basic",
        name: "BASIC",
        subtitle: "Essential Cost Optimization",
        target: "For Homes & Small Offices",
        description:
          "Basic cost optimization services for small-scale energy savings.",
        price: "₹[X] + GST",
        features: [
          "Energy Consumption & Billing Analysis",
          "Basic Load Management & Power Factor Check",
          "Equipment & HVAC Energy Efficiency Check",
          "Backup Power Consumption Review",
          "Preventive Maintenance Recommendations",
        ],
        tagline:
          "Ideal for reducing unnecessary energy expenses at a small scale!",
      },
      {
        level: "advanced",
        name: "ADVANCED",
        subtitle: "Comprehensive Cost Efficiency Plan",
        target: "For Homes, Offices & Small Businesses",
        description:
          "A complete cost-saving plan for improved efficiency and reduced operational costs.",
        price: "₹[X] + GST",
        features: [
          "Harmonics Screening for Power Quality Issues",
          "Detailed Power Factor Correction",
          "Optimized Maintenance Schedules to Prevent Failures",
          "HVAC & Equipment Performance Optimization",
          "Energy Leakage Detection & Prevention",
          "Backup Power Efficiency Assessment",
          "Regular Preventive Maintenance Plan",
        ],
        tagline: "A complete cost-saving plan for improved efficiency!",
      },
      {
        level: "premium",
        name: "PREMIUM",
        subtitle: "Ultimate Cost Optimization & Energy Management",
        target: "For Large Businesses & Industries",
        description:
          "The most advanced strategy for long-term cost efficiency, reliability, and savings.",
        price: "₹[X] + GST",
        features: [
          "AI-Based Predictive Energy & Cost Analysis",
          "IoT-Based Real-Time Power Quality Monitoring",
          "Custom Harmonics Reduction & Power Factor Correction Strategy",
          "Advanced Equipment Wear & Efficiency Detection",
          "Comprehensive HVAC Energy Management Plan",
          "Advanced Preventive & Predictive Maintenance Strategy",
        ],
        tagline:
          "The most advanced strategy for long-term cost efficiency, reliability, and savings!",
      },
    ],
  },
  {
    id: "machinery-efficiency",
    title: "Machinery Efficiency Improvisation – PEIC",
    tagline:
      "Enhance Performance | Reduce Energy Waste | Extend Equipment Lifespan",
    benefits: [
      "Machinery Performance Analysis – Identifies underperforming equipment and areas for improvement.",
      "Energy Consumption Analysis – Reduces waste and improves energy efficiency.",
      "Custom Automation Solutions – Enhances machine control, monitoring, and data analytics.",
      "Preventive Maintenance Scheduling – Extends machinery lifespan and reduces breakdowns.",
      "Compliance & Safety Checks – Ensures machinery meets regulatory standards.",
      "Optimization of Existing Machinery – Upgrades or modifies equipment for better performance.",
      "Power Factor Optimization – Prevents inefficiencies caused by reactive power.",
      "Harmonics Analysis – Improves power quality and prevents equipment malfunctions.",
    ],
    packages: [
      {
        level: "basic",
        name: "BASIC",
        subtitle: "Essential Machinery Optimization",
        target: "For Small-Scale Businesses & Workshops",
        description:
          "Basic machinery optimization services for small businesses and workshops.",
        price: "₹[X] + GST",
        features: [
          "Machinery Performance Analysis & Load Balancing",
          "Basic Power Factor Analysis",
          "Basic Energy Consumption Analysis",
          "Preventive Maintenance Recommendations",
          "Motor & Drive System Evaluation",
        ],
        tagline:
          "Ideal for improving machinery efficiency in small operations!",
      },
      {
        level: "advanced",
        name: "ADVANCED",
        subtitle: "Comprehensive Machinery Efficiency Plan",
        target: "For Medium-Sized Businesses & Factories",
        description:
          "A detailed plan for improved energy savings and machinery reliability.",
        price: "₹[X] + GST",
        features: [
          "Power Factor Correction for Machinery",
          "Harmonics Analysis to Prevent Power Quality Issues",
          "Energy Leakage Detection & Correction",
          "Optimized Maintenance Scheduling for Equipment Longevity",
          "Thermal Imaging to Identify Overheating Components",
          "Custom Automation Solutions for Machine Control & Monitoring",
        ],
        tagline:
          "A detailed plan for improved energy savings and machinery reliability!",
      },
      {
        level: "premium",
        name: "PREMIUM",
        subtitle: "Ultimate Machinery Efficiency & Power Quality Optimization",
        target: "For Large Industries & Manufacturing Units",
        description:
          "The most advanced strategy for long-term efficiency, performance, and cost savings in machinery.",
        price: "₹[X] + GST",
        features: [
          "Real-Time Power Monitoring for Machinery",
          "Custom Harmonics Reduction & Load Optimization Strategy",
          "AI-Based Predictive Equipment Health Analysis",
          "Comprehensive HVAC & Cooling System Optimization for Machinery",
          "Advanced Preventive & Predictive Maintenance Planning",
          "Compliance & Safety Checks to Meet Regulatory Standards",
          "Optimization of Existing Machinery Through Upgrades or Modifications",
        ],
        tagline:
          "The most advanced strategy for long-term efficiency, performance, and cost savings!",
      },
    ],
  },
  {
    id: "peia",
    title: "Post Electrical Integrated Automation (PEIA)",
    tagline: "Enhancing Automation | Optimizing Energy | Ensuring Reliability",
    benefits: [
      "Automated Energy Efficiency – Reduces energy wastage with smart systems.",
      "Improves System Reliability – Ensures stable operations with real-time monitoring.",
      "Enhances Safety – Smart automation minimizes electrical risks.",
      "Reduces Operational Costs – Intelligent load balancing and demand response.",
      "Seamless Power Backup Integration – Optimizes energy supply during outages.",
      "Remote Monitoring & Control – Manage and operate electrical systems from anywhere.",
      "HVAC Optimization – Smart automation for heating, ventilation, and cooling.",
    ],
    packages: [
      {
        level: "basic",
        name: "BASIC",
        subtitle: "Essential Automation & Energy Control",
        target: "For Homes & Small Businesses",
        description:
          "Basic automation and energy-saving improvements for small setups.",
        price: "₹[X] + GST",
        features: [
          "Automated Lighting Systems (Motion sensors, dimming controls for energy efficiency)",
          "Basic HVAC Automation (Smart temperature regulation for comfort and savings)",
          "Smart Appliance Integration (Remote control and scheduling for optimized energy use)",
          "Basic Energy Management System (EMS) Setup (Monitoring energy consumption trends)",
          "Wiring & Grounding Inspection for Safety",
        ],
        tagline: "Ideal for basic automation and energy-saving improvements!",
      },
      {
        level: "advanced",
        name: "ADVANCED",
        subtitle: "Smart Automation & Power Optimization",
        target: "For Commercial & Industrial Use",
        description:
          "Advanced automation solutions with real-time energy management for businesses.",
        price: "₹[X] + GST",
        features: [
          "Advanced Energy Management System (EMS) with Real-Time Load Balancing",
          "HVAC System Automation & Efficiency Optimization",
          "Integration with Backup Power Systems (UPS, Generators) for Smart Energy Allocation",
          "Customizable Control Systems for Industrial & Commercial Applications (Remote monitoring & operation)",
          "Power Factor & Harmonics Analysis to Reduce Energy Wastage",
        ],
        tagline:
          "Best for businesses seeking advanced automation and efficiency optimization!",
      },
      {
        level: "premium",
        name: "PREMIUM",
        subtitle: "AI-Based Smart Electrical Automation",
        target: "For Large Industrial & Smart Grid Solutions",
        description:
          "The ultimate solution for fully automated, intelligent electrical systems.",
        price: "₹[X] + GST",
        features: [
          "AI-Based Predictive Energy Management & Fault Detection",
          "Complete Smart Grid & Renewable Energy Integration (Solar, Wind, Hybrid Systems)",
          "Industrial Process Automation & Smart Factory Solutions (PLC, SCADA, IoT-Based Monitoring)",
          "Fully Automated HVAC & Environmental Control Systems (AI-driven temperature and airflow control)",
          "Advanced Harmonics & Power Quality Analysis (Ensuring smooth equipment operation)",
          "Smart Security & Access Control Integration (AI-driven monitoring and automation)",
        ],
        tagline:
          "The ultimate solution for fully automated, intelligent electrical systems!",
      },
    ],
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy Integration PEIC",
    tagline: "Sustainable Power | Smart Integration | Maximum Efficiency",
    benefits: [
      "Reduces Electricity Costs – Lower dependence on expensive grid power.",
      "Increases Energy Independence – Ensures stable power supply even during outages.",
      "Optimized Renewable Energy Usage – Smart storage and efficient power management.",
      "Improves Power Quality – Smooth integration with existing electrical systems.",
      "Supports Green Energy Initiatives – Reduces carbon footprint and promotes sustainability.",
      "Enhances Backup Power Solutions – Works with battery storage, UPS, and hybrid systems.",
      "Ensures Regulatory Compliance – Meets government standards for renewable energy adoption.",
    ],
    packages: [
      {
        level: "basic",
        name: "BASIC",
        subtitle: "Essential Renewable Energy Setup",
        target: "For Homes & Small Businesses",
        description:
          "Basic renewable energy integration with solar PV systems and grid-tied setup.",
        price: "₹[X] + GST",
        features: [
          "Solar Energy Integration – Installation of photovoltaic (PV) systems to harness solar power.",
          "Grid-Tied System Setup – Connecting solar energy to supplement grid power.",
          "Basic Battery Backup – Storing excess energy for emergency use.",
          "System Monitoring & Basic Optimization – Tracking performance and efficiency.",
        ],
        tagline:
          "Perfect for homeowners and small businesses looking to reduce electricity bills!",
      },
      {
        level: "advanced",
        name: "ADVANCED",
        subtitle: "Hybrid & Smart Energy Management",
        target: "For Commercial & Industrial Use",
        description:
          "Enhanced renewable energy systems combining solar, wind, and advanced battery storage.",
        price: "₹[X] + GST",
        features: [
          "Wind Energy Systems – Integration of wind turbines for power generation in suitable locations.",
          "Hybrid Renewable Energy System – Combining solar, wind, and conventional energy for stability.",
          "Advanced Battery Storage Solutions – Using lithium-ion or high-capacity batteries for energy storage.",
          "Load Optimization & Power Factor Correction – Enhancing energy efficiency and reducing wastage.",
          "Grid-Tied & Off-Grid Solutions – Customizing systems to work with or without the power grid.",
        ],
        tagline:
          "Best for businesses seeking enhanced renewable energy efficiency and reliability!",
      },
      {
        level: "premium",
        name: "PREMIUM",
        subtitle: "Complete Renewable Energy & Smart Grid Solutions",
        target: "For Large Industrial & Smart City Applications",
        description:
          "The ultimate solution for large-scale, intelligent renewable energy integration.",
        price: "₹[X] + GST",
        features: [
          "Fully Off-Grid Renewable Energy Systems – Independent power solutions for complete energy security.",
          "Industrial-Grade Hybrid Systems – Integration of solar, wind, biomass, or hydro energy.",
          "Advanced Smart Energy Storage – AI-based energy flow management and predictive load balancing.",
          "Smart Grid & Microgrid Solutions – Intelligent power distribution for large-scale applications.",
          "System Monitoring & Optimization – High-tech tracking and automation for maximum efficiency.",
          "HVAC System Optimization – Reducing energy consumption for climate control.",
        ],
        tagline:
          "The ultimate solution for large-scale, intelligent renewable energy integration!",
      },
    ],
  },
  {
    id: "residential",
    title: "Residential PEIC",
    tagline:
      "Ensuring Safety | Reducing Energy Bills | Enhancing Power Reliability",
    benefits: [
      "Prevents Electrical Hazards – Identifies and corrects wiring & grounding issues.",
      "Reduces Energy Bills – Detects inefficiencies and optimizes power consumption.",
      "Enhances Backup Power Reliability – Ensures proper function of UPS, inverters & generators.",
      "Balances Power Usage – Analyzes load distribution for stable and efficient power flow.",
      "Protects Appliances & Equipment – Ensures safety through MCBs, RCCBs, and surge protection.",
      "Improves Overall Electrical Efficiency – Enhances system performance for long-term savings.",
      "Detects and Prevents Earth Leakage – Prevents electric shocks and unnecessary power loss.",
    ],
    packages: [
      {
        level: "basic",
        name: "BASIC",
        subtitle: "Essential Home Electrical Safety Check",
        target: "For Apartments & Small Homes",
        description: "Basic safety check for home electrical systems.",
        price: "₹[X] + GST",
        features: [
          "Wiring & Grounding Inspection to Prevent Electrical Hazards",
          "Basic Energy Efficiency Assessment",
          "Load Distribution Analysis for Balanced Power Usage",
          "Protection Device Verification (MCBs, RCCBs, Surge Protectors)",
          "Backup Power System Inspection (Basic UPS & Inverters)",
          "Basic Earth Leakage Checkup",
        ],
        tagline:
          "Ideal for ensuring safety and efficiency in small residences!",
      },
      {
        level: "advanced",
        name: "ADVANCED",
        subtitle: "Comprehensive Home Energy & Safety Plan",
        target: "For Independent Homes & Villas",
        description:
          "A complete solution for safe and efficient home electricity.",
        price: "₹[X] + GST",
        features: [
          "Detailed Energy Efficiency Assessment & Power-Saving Solutions",
          "In-Depth Load Distribution Analysis for Stability & Performance",
          "Full Backup Power System Evaluation (UPS, Inverters, Generators)",
          "Thermal Imaging for Overheating Components",
          "Preventive Maintenance Scheduling",
          "Detailed Earth Leakage Checkup and Correction",
          "Earth Testing for Safety & Proper Grounding",
        ],
        tagline: "A complete solution for safe and efficient home electricity!",
      },
      {
        level: "premium",
        name: "PREMIUM",
        subtitle: "Ultimate Home Power Quality & Energy Optimization",
        target: "For Large Homes & Luxury Villas",
        description:
          "The most advanced solution for long-term safety, efficiency, and power stability in residences.",
        price: "₹[X] + GST",
        features: [
          "Smart Energy Optimization for Maximum Savings",
          "Real-Time Power Monitoring & Consumption Analytics",
          "Custom Load Management for Efficient Power Distribution",
          "HVAC System Optimization for Energy Savings",
          "AI-Based Predictive Equipment Health Analysis",
          "Advanced Surge & Lightning Protection Solutions",
        ],
        tagline:
          "The most advanced solution for long-term safety, efficiency, and power stability!",
      },
    ],
  },
  {
    id: "commercial",
    title: "Commercial PEIC",
    tagline:
      "Ensuring Business Safety | Reducing Operational Costs | Enhancing Power Reliability",
    benefits: [
      "Prevents Electrical Hazards – Identifies and rectifies wiring & grounding issues.",
      "Reduces Operational Costs – Detects inefficiencies and optimizes power consumption.",
      "Enhances Power Stability – Ensures smooth and stable energy distribution.",
      "Protects Critical Equipment – Prevents damage due to electrical surges or faults.",
      "Ensures Compliance – Meets safety and industry standards for commercial properties.",
      "Prevents Unexpected Downtime – Avoids business disruptions caused by electrical failures.",
      "Detects & Corrects Earth Leakage – Prevents unnecessary power loss and electric shock risks.",
    ],
    packages: [
      {
        level: "basic",
        name: "BASIC",
        subtitle: "Essential Electrical Safety & Compliance Check",
        target: "For Small Offices & Retail Spaces",
        description:
          "Basic electrical safety and compliance check for small commercial spaces.",
        price: "₹[X] + GST",
        features: [
          "Wiring & Grounding Inspection",
          "Basic Energy Efficiency Assessment",
          "Load Distribution Analysis for Stable Power Usage",
          "Backup Power System Inspection (UPS, Inverters, Generators)",
          "Protection Device Verification (MCBs, RCCBs, Surge Protectors)",
          "Basic Earth Leakage Checkup",
        ],
        tagline:
          "Ideal for small businesses looking for a safe and efficient power system!",
      },
      {
        level: "advanced",
        name: "ADVANCED",
        subtitle: "Power Optimization & Cost Reduction Plan",
        target: "For Medium-Sized Offices, Shops, & Warehouses",
        description:
          "A comprehensive package for improving energy efficiency and reducing operational costs.",
        price: "₹[X] + GST",
        features: [
          "Detailed Energy Consumption Analysis & Optimization Solutions",
          "In-Depth Load Distribution Analysis for Performance & Cost Savings",
          "Full Backup Power System Evaluation (UPS, Inverters, Generators)",
          "Thermal Imaging for Overheating Electrical Components",
          "Preventive Maintenance Scheduling",
          "Detailed Earth Leakage Checkup & Correction",
          "Power Factor Correction for Improved Efficiency",
          "Earth Testing for Safety & Proper Grounding",
        ],
        tagline: "A complete package for safety, efficiency, and cost savings!",
      },
      {
        level: "premium",
        name: "PREMIUM",
        subtitle: "Smart Energy & Power Quality Optimization",
        target: "For Large Commercial Buildings, IT Parks, & Malls",
        description:
          "The best solution for long-term energy efficiency, stability, and cost reduction in commercial properties.",
        price: "₹[X] + GST",
        features: [
          "Smart Energy Management & Load Balancing",
          "Real-Time Power Quality Monitoring & Consumption Analytics",
          "Custom Power Distribution for Optimized Performance",
          "HVAC System Energy Optimization for Cost Reduction",
          "Harmonics Analysis & Correction for Power Quality Improvement",
          "AI-Based Predictive Equipment Health Analysis",
          "Advanced Surge & Lightning Protection Solutions",
        ],
        tagline:
          "The best solution for long-term energy efficiency, stability, and cost reduction!",
      },
    ],
  },
  {
    id: "industrial",
    title: "Industrial PEIC",
    tagline: "Optimize Power | Enhance Safety | Reduce Costs",
    benefits: [
      "Prevents Electrical Failures – Detects and corrects inefficiencies before disruptions occur.",
      "Reduces Operational Costs – Minimizes wastage and improves energy efficiency.",
      "Enhances Power Stability – Ensures smooth operations with balanced load distribution.",
      "Improves Equipment Lifespan – Prevents voltage fluctuations and harmonics-related damage.",
      "Ensures Regulatory Compliance – Meets industry safety and legal standards.",
      "Minimizes Downtime & Increases Productivity – Ensures uninterrupted operations.",
      "Prevents Unexpected Breakdowns – Implementing preventive maintenance strategies.",
    ],
    packages: [
      {
        level: "basic",
        name: "BASIC",
        subtitle: "Essential Industrial Electrical Safety Check",
        target: "For Small Factories & Workshops",
        description:
          "Basic industrial electrical safety check for small factories and workshops.",
        price: "₹[X] + GST",
        features: [
          "Power Distribution System Analysis (Balanced load to prevent failures)",
          "Wiring & Grounding Inspection",
          "Basic Energy Efficiency Evaluation (Identify power-saving opportunities)",
          "Load Distribution Analysis for Stable Power Usage",
          "Protection Device Verification (MCBs, MCCBs, RCCBs, Surge Protectors)",
          "Backup Power System Inspection (UPS, Inverters, Transformers)",
          "Basic Power Factor Analysis",
          "Basic Earth Leakage Checkup",
        ],
        tagline:
          "Ideal for small industries ensuring fundamental safety and efficiency!",
      },
      {
        level: "advanced",
        name: "ADVANCED",
        subtitle: "Power Optimization & Industrial Efficiency Plan",
        target: "For Medium-Sized Factories & Processing Units",
        description:
          "A must-have plan for medium-scale industries aiming for efficiency and cost reduction.",
        price: "₹[X] + GST",
        features: [
          "Detailed Power Distribution System Analysis (For optimized load balancing)",
          "In-Depth Energy Consumption Analysis (Minimize wastage and cut electricity costs)",
          "Backup Power System Optimization (Ensuring reliable DG sets, UPS, transformers)",
          "Harmonics & Power Quality Analysis (Prevent voltage fluctuations and equipment damage)",
          "Preventive Maintenance Planning (Avoid unexpected breakdowns & costly repairs)",
          "Detailed Earth Leakage Checkup & Correction",
          "Power Factor Correction for Improved Efficiency",
          "Earth Testing for Safety & Proper Grounding",
        ],
        tagline:
          "A must-have for medium-scale industries aiming for efficiency and cost reduction!",
      },
      {
        level: "premium",
        name: "PREMIUM",
        subtitle: "Smart Industrial Power & Automation Optimization",
        target: "For Large Factories & Manufacturing Units",
        description:
          "The best solution for large industries seeking maximum efficiency, reliability, and long-term savings.",
        price: "₹[X] + GST",
        features: [
          "Customized Industrial Automation Assessment (PLC systems, motor controls, process automation)",
          "Real-Time Power Quality Monitoring & Consumption Analytics",
          "HVAC System Energy Optimization for Cost Reduction",
          "Surge & Lightning Protection Solutions (Advanced safety against power surges)",
          "Predictive Equipment Health Analysis (AI-based early fault detection)",
          "Smart Load Balancing & Industrial Energy Management",
          "Advanced Harmonics Analysis & Correction to Improve Machine Performance",
        ],
        tagline:
          "The best solution for large industries seeking maximum efficiency, reliability, and long-term savings!",
      },
    ],
  },
  {
    id: "energy",
    title: "Energy Bill Optimization PEIC",
    tagline: "Reduce Costs | Improve Efficiency | Minimize Energy Waste",
    benefits: [
      "Lowers Energy Costs – Reduces unnecessary electricity consumption",
      "Identifies & Fixes Energy Leakage – Prevents hidden power loss from wiring or faulty equipment",
      "Optimizes Power Factor – Reduces penalties from poor power factor and enhances system efficiency",
      "Improves HVAC Efficiency – Cuts down cooling/heating costs through better energy management",
      "Reduces Harmonics Disturbances – Enhances power quality and prevents voltage fluctuations",
      "Enhances System Performance – Ensures smooth operation of electrical appliances and machinery",
      "Prevents Equipment Damage – Reduces stress on electrical components and extends lifespan",
      "Smart Monitoring & Automation – Provides real-time data and control over energy consumption",
    ],
    packages: [
      {
        level: "basic",
        name: "BASIC",
        subtitle: "Essential Energy Optimization",
        target: "For Homes & Small Offices",
        description:
          "Essential energy optimization services for small setups looking for cost-effective energy savings.",
        price: "₹[X] + GST",
        features: [
          "Basic Power Factor Analysis – Identifies power factor inefficiencies",
          "Basic Earth Leakage Checkup – Detects minor leakage causing energy loss",
          "Load Consumption Assessment – Reviews power usage in major appliances",
          "HVAC System Energy Evaluation – Identifies efficiency issues in air conditioning & heating",
        ],
        tagline:
          "Ideal for small setups looking for cost-effective energy savings!",
      },
      {
        level: "advanced",
        name: "ADVANCED",
        subtitle: "In-Depth Energy Optimization",
        target: "For Commercial Establishments",
        description:
          "Comprehensive services for businesses looking to lower energy bills and enhance system efficiency.",
        price: "₹[X] + GST",
        features: [
          "Detailed Power Factor Analysis & Correction – Optimizes energy efficiency & reduces power wastage",
          "Detailed Earth Leakage Checkup & Correction – Identifies and fixes major leakage issues",
          "Load Distribution & Balancing – Ensures stable and efficient power consumption",
          "HVAC System Performance Optimization – Reduces unnecessary power usage",
          "Harmonics Analysis – Detects distortions affecting equipment efficiency",
          "Power Factor Optimization with Capacitor Bank Solutions – Enhances power efficiency & reduces demand charges",
        ],
        tagline:
          "Perfect for businesses looking to lower energy bills and enhance system efficiency!",
      },
      {
        level: "premium",
        name: "PREMIUM",
        subtitle: "Comprehensive Energy Cost Reduction",
        target: "For Industrial Facilities & Large Businesses",
        description:
          "The ultimate solution for industries and high-energy businesses aiming for maximum savings.",
        price: "₹[X] + GST",
        features: [
          "Smart Automation & IoT-Based Energy Monitoring – Track energy use in real time",
          "Predictive Maintenance & Cost-Saving Strategies – Prevent energy waste before it happens",
          "Custom Energy Usage Reports – Get advanced analytics for smarter decisions",
          "Guaranteed Long-Term Cost Reduction – Maximize savings and efficiency",
          "Leakage Prevention Through Smart Sensors & AI-Based Monitoring – Continuous tracking to eliminate energy wastage",
          "Harmonics Analysis & Filtering – Prevent overheating, equipment damage, and system inefficiencies",
          "HVAC Smart Control & Automation – Implement advanced temperature control and energy-efficient HVAC solutions",
        ],
        tagline:
          "The ultimate solution for industries and high-energy businesses aiming for maximum savings!",
      },
    ],
  },
];


export default servicesData;