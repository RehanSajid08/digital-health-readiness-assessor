
export interface Question {
  id: string;
  text: string;
  category: string;
  options: Option[];
}

export interface Option {
  text: string;
  value: number;
  feedback?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  maxScore: number;
}

export const categories: Category[] = [
  {
    id: "interoperability",
    name: "Data Interoperability",
    description: "The ability of different information systems, devices and applications to access, exchange, integrate and cooperatively use data.",
    maxScore: 15,
  },
  {
    id: "security",
    name: "Security Standards",
    description: "Measures to protect health information systems and data from breaches, unauthorized access, and other security threats.",
    maxScore: 15,
  },
  {
    id: "telehealth",
    name: "Telehealth Integration",
    description: "The capability to deliver health services and information via telecommunication technologies.",
    maxScore: 15,
  },
  {
    id: "infrastructure",
    name: "Digital Infrastructure",
    description: "The underlying physical and virtual resources that support digital health operations.",
    maxScore: 15,
  },
  {
    id: "governance",
    name: "Data Governance",
    description: "Policies and processes for ensuring effective data management throughout the organization.",
    maxScore: 15,
  },
];

export const questions: Question[] = [
  // Data Interoperability Questions
  {
    id: "q1",
    text: "What level of data exchange standards has your organization implemented?",
    category: "interoperability",
    options: [
      {
        text: "No standards implemented; data exchange is ad-hoc",
        value: 0,
        feedback: "Implementing standardized data exchange protocols is essential for interoperability"
      },
      {
        text: "Basic standards in place, but limited to specific systems",
        value: 1,
        feedback: "Consider expanding your standards to cover all health data systems"
      },
      {
        text: "Comprehensive standards (e.g., HL7, FHIR) across most systems",
        value: 3,
        feedback: "Good foundation; consider full FHIR implementation for optimal interoperability"
      },
      {
        text: "Full implementation of current standards with regular updates",
        value: 5,
        feedback: "Excellent! Your organization is well-positioned for seamless data exchange"
      }
    ]
  },
  {
    id: "q2",
    text: "Can your health information systems share data with external partners?",
    category: "interoperability",
    options: [
      {
        text: "No, our systems cannot share data externally",
        value: 0,
        feedback: "External data sharing capabilities are crucial for coordinated care"
      },
      {
        text: "Limited sharing with specific partners through custom interfaces",
        value: 1,
        feedback: "Consider implementing standardized APIs for broader connectivity"
      },
      {
        text: "Yes, through standard APIs with most major partners",
        value: 3,
        feedback: "Good progress; explore additional integration options for comprehensive coverage"
      },
      {
        text: "Comprehensive API framework allowing secure sharing with any authorized entity",
        value: 5,
        feedback: "Excellent! Your systems are well-connected to the healthcare ecosystem"
      }
    ]
  },
  {
    id: "q3",
    text: "How would you describe your organization's semantic interoperability (common understanding of exchanged data)?",
    category: "interoperability",
    options: [
      {
        text: "Data is exchanged without standardized meaning; requires manual interpretation",
        value: 0,
        feedback: "Standardized terminologies are essential for meaningful data exchange"
      },
      {
        text: "Basic terminologies implemented in some systems (e.g., ICD-10 for diagnosis)",
        value: 1,
        feedback: "Consider expanding terminology standards across all data types"
      },
      {
        text: "Multiple standard terminologies used across systems (SNOMED CT, LOINC, etc.)",
        value: 3,
        feedback: "Good foundation; work on harmonizing the various standards"
      },
      {
        text: "Comprehensive terminology services ensuring consistent meaning across all systems",
        value: 5,
        feedback: "Excellent! Your semantic interoperability enables truly meaningful data exchange"
      }
    ]
  },
  
  // Security Standards Questions
  {
    id: "q4",
    text: "What level of security compliance has your organization achieved?",
    category: "security",
    options: [
      {
        text: "Limited security measures without formal compliance",
        value: 0,
        feedback: "Formal security compliance is essential for protecting health data"
      },
      {
        text: "Basic compliance with minimal industry standards",
        value: 1,
        feedback: "Consider pursuing more comprehensive security certifications"
      },
      {
        text: "Compliance with major standards (e.g., HIPAA, ISO 27001)",
        value: 3,
        feedback: "Good foundation; consider enhancing with additional security frameworks"
      },
      {
        text: "Comprehensive compliance with regular audits and continuous improvement",
        value: 5,
        feedback: "Excellent! Your security program is robust and well-maintained"
      }
    ]
  },
  {
    id: "q5",
    text: "How does your organization manage access controls for health data?",
    category: "security",
    options: [
      {
        text: "Basic username/password authentication with limited role definitions",
        value: 0,
        feedback: "Modern access controls are essential for protecting sensitive health data"
      },
      {
        text: "Role-based access controls with some multi-factor authentication",
        value: 1,
        feedback: "Consider implementing more granular, attribute-based access controls"
      },
      {
        text: "Comprehensive role-based access with multi-factor authentication across most systems",
        value: 3,
        feedback: "Good foundation; consider zero-trust architecture for enhanced protection"
      },
      {
        text: "Advanced access controls (Zero Trust, Just-in-Time) with continuous verification",
        value: 5,
        feedback: "Excellent! Your access controls represent best practices in healthcare"
      }
    ]
  },
  {
    id: "q6",
    text: "What is your organization's approach to security incident response?",
    category: "security",
    options: [
      {
        text: "Ad-hoc responses without formal incident response plans",
        value: 0,
        feedback: "A formal incident response plan is essential for minimizing security impacts"
      },
      {
        text: "Basic incident response plan with limited testing",
        value: 1,
        feedback: "Regular testing and updates to your incident response plan are recommended"
      },
      {
        text: "Documented incident response with regular tabletop exercises",
        value: 3,
        feedback: "Good foundation; consider implementing automated detection and response"
      },
      {
        text: "Comprehensive incident response with automation, regular drills, and continuous improvement",
        value: 5,
        feedback: "Excellent! Your organization is well-prepared to handle security incidents"
      }
    ]
  },
  
  // Telehealth Integration Questions
  {
    id: "q7",
    text: "What telehealth capabilities does your organization currently support?",
    category: "telehealth",
    options: [
      {
        text: "Limited or no telehealth capabilities",
        value: 0,
        feedback: "Implementing basic telehealth services should be a priority"
      },
      {
        text: "Basic video consultations with limited integration to other systems",
        value: 1,
        feedback: "Consider deeper integration with EHR and other clinical systems"
      },
      {
        text: "Multiple telehealth modalities integrated with clinical systems",
        value: 3,
        feedback: "Good progress; explore remote patient monitoring and virtual care teams"
      },
      {
        text: "Comprehensive virtual care platform with full EHR integration, remote monitoring, and analytics",
        value: 5,
        feedback: "Excellent! Your telehealth capabilities are advanced and well-integrated"
      }
    ]
  },
  {
    id: "q8",
    text: "How does your telehealth infrastructure handle varying connectivity environments?",
    category: "telehealth",
    options: [
      {
        text: "Requires high-bandwidth, stable connections; fails in limited connectivity",
        value: 0,
        feedback: "Adaptability to various connection qualities is essential for equitable telehealth"
      },
      {
        text: "Basic fallback options (e.g., phone) when video fails",
        value: 1,
        feedback: "Consider implementing adaptive streaming solutions for varied connectivity"
      },
      {
        text: "Adaptive solutions that adjust quality based on connection strength",
        value: 3,
        feedback: "Good approach; consider adding asynchronous options for very low connectivity"
      },
      {
        text: "Comprehensive approach with adaptive streaming, asynchronous options, and offline capabilities",
        value: 5,
        feedback: "Excellent! Your telehealth services are accessible across diverse environments"
      }
    ]
  },
  {
    id: "q9",
    text: "How integrated are telehealth services with your clinical workflows?",
    category: "telehealth",
    options: [
      {
        text: "Telehealth operates as a separate, disconnected system",
        value: 0,
        feedback: "Integration with clinical workflows is essential for telehealth effectiveness"
      },
      {
        text: "Basic integration for scheduling, limited clinical data exchange",
        value: 1,
        feedback: "Deeper integration with EHR and care management systems is recommended"
      },
      {
        text: "Well-integrated with EHR and most clinical workflows",
        value: 3,
        feedback: "Good foundation; consider end-to-end integration including billing and analytics"
      },
      {
        text: "Fully integrated as a standard care modality in all appropriate clinical workflows",
        value: 5,
        feedback: "Excellent! Telehealth is truly a seamless part of your care delivery model"
      }
    ]
  },
  
  // Digital Infrastructure Questions
  {
    id: "q10",
    text: "How would you rate your organization's network infrastructure reliability?",
    category: "infrastructure",
    options: [
      {
        text: "Frequent outages with significant impact on operations",
        value: 0,
        feedback: "Reliable network infrastructure is the foundation of digital health services"
      },
      {
        text: "Occasional disruptions with basic redundancy in critical areas",
        value: 1,
        feedback: "Implement more comprehensive redundancy and failover solutions"
      },
      {
        text: "Reliable with redundancy but limited performance monitoring",
        value: 3,
        feedback: "Good foundation; add proactive monitoring and performance optimization"
      },
      {
        text: "Highly reliable with comprehensive redundancy, monitoring, and rapid response capabilities",
        value: 5,
        feedback: "Excellent! Your network infrastructure provides a solid foundation for digital health"
      }
    ]
  },
  {
    id: "q11",
    text: "What compute infrastructure model does your organization primarily use?",
    category: "infrastructure",
    options: [
      {
        text: "Primarily on-premises legacy infrastructure with minimal virtualization",
        value: 0,
        feedback: "Modern compute infrastructure enables agility and scalability"
      },
      {
        text: "Mix of legacy and virtualized on-premises infrastructure",
        value: 1,
        feedback: "Consider hybrid cloud strategies for improved flexibility and disaster recovery"
      },
      {
        text: "Hybrid model with significant cloud adoption for non-critical systems",
        value: 3,
        feedback: "Good approach; explore cloud-native architectures for appropriate workloads"
      },
      {
        text: "Strategic mix of on-premises, private and public cloud optimized for performance, security and cost",
        value: 5,
        feedback: "Excellent! Your compute infrastructure balances needs with modern capabilities"
      }
    ]
  },
  {
    id: "q12",
    text: "How prepared is your digital infrastructure for scaling with increased demand?",
    category: "infrastructure",
    options: [
      {
        text: "Limited capacity with manual scaling requiring significant lead time",
        value: 0,
        feedback: "Scalable infrastructure is critical for handling evolving digital health needs"
      },
      {
        text: "Some scalability in specific systems, but significant planning required",
        value: 1,
        feedback: "Implement more elastic infrastructure designs for key systems"
      },
      {
        text: "Good scalability for most systems with mixed automatic/manual approaches",
        value: 3,
        feedback: "Good foundation; work toward more automated scaling across all critical systems"
      },
      {
        text: "Highly elastic infrastructure with automatic scaling and proactive capacity planning",
        value: 5,
        feedback: "Excellent! Your infrastructure can adapt rapidly to changing needs"
      }
    ]
  },
  
  // Data Governance Questions
  {
    id: "q13",
    text: "How would you describe your organization's data governance framework?",
    category: "governance",
    options: [
      {
        text: "Limited or no formal data governance in place",
        value: 0,
        feedback: "Establishing a data governance framework is essential for digital health"
      },
      {
        text: "Basic policies exist but inconsistently applied across the organization",
        value: 1,
        feedback: "Work toward a comprehensive, consistently applied governance framework"
      },
      {
        text: "Formal governance structure with defined roles and processes for most data",
        value: 3,
        feedback: "Good foundation; expand to cover all data assets and measure effectiveness"
      },
      {
        text: "Comprehensive data governance with clear accountability, metrics, and continuous improvement",
        value: 5,
        feedback: "Excellent! Your governance framework ensures data is treated as a strategic asset"
      }
    ]
  },
  {
    id: "q14",
    text: "How does your organization manage data quality?",
    category: "governance",
    options: [
      {
        text: "Reactive approach addressing issues only when they cause problems",
        value: 0,
        feedback: "Proactive data quality management is essential for reliable health analytics"
      },
      {
        text: "Basic data validation at entry points with limited monitoring",
        value: 1,
        feedback: "Implement more comprehensive data quality monitoring and improvement processes"
      },
      {
        text: "Proactive monitoring of key data elements with regular quality reviews",
        value: 3,
        feedback: "Good approach; consider automated quality measurement across all critical data"
      },
      {
        text: "Comprehensive data quality framework with automation, metrics, and continuous improvement",
        value: 5,
        feedback: "Excellent! Your organization treats data quality as a continuous process"
      }
    ]
  },
  {
    id: "q15",
    text: "How does your organization handle data lifecycle management?",
    category: "governance",
    options: [
      {
        text: "Limited awareness of data lifecycle; data rarely archived or deleted",
        value: 0,
        feedback: "Systematic data lifecycle management is essential for compliance and efficiency"
      },
      {
        text: "Basic retention policies exist but are inconsistently applied",
        value: 1,
        feedback: "Implement more comprehensive lifecycle management across all data types"
      },
      {
        text: "Defined lifecycle policies for most data with regular archiving processes",
        value: 3,
        feedback: "Good foundation; consider automating more of the lifecycle management"
      },
      {
        text: "Comprehensive lifecycle management from creation to deletion with automation and compliance validation",
        value: 5,
        feedback: "Excellent! Your organization manages data throughout its entire lifecycle"
      }
    ]
  }
];
