// Open/Closed Principle: Data is open for extension, closed for modification
// Modify this file to update the portfolio without touching the UI components

export const PORTFOLIO_DATA = {
  hero: {
    greeting: "INITIATING CONNECTION...",
    name: "Paras Patil",
    titles: [
      "Cybersecurity Engineer (4.5+ Years XP)",
      "Web3 & Blockchain Security",
      "AppSec & DevSecOps Lead",
      "Threat Modeler & Bug Hunter"
    ],
    description: "Cybersecurity Engineer with strong expertise in Application Security, Cloud Security, DevSecOps, and Penetration Testing across SaaS, FinTech, and Web3 environments. Reducing risk through VAPT, secure design reviews, and automated security scaling.",
  },
  
  about: {
    title: "System.Info('Professional_Profile')",
    content: [
      "Cybersecurity Engineer with 4.5 years of experience expertise in Application Security, Cloud Security, DevSecOps, and Penetration Testing. Proven success in reducing risk through VAPT, threat modeling, secure SDLC, CI/CD security automation, and compliance with OWASP, NIST, ISO 27001, PCI-DSS & GDPR.",
      "Adept at cross-functional collaboration, secure design reviews, and scaling security programs for hyper-growth organizations. I have delivered measurable outcomes including reducing the attack surface by 40%, boosting internal security awareness by 30%, and improving remediation turnaround by 40%.",
      "My methodology integrates STRIDE-based threat modeling with automated CI/CD gates, ensuring security is a first-class citizen in the development lifecycle."
    ],
    stats: [
      { label: "Vulnerabilities Identified", value: "250+" },
      { label: "Risk Reduction", value: "55%" },
      { label: "Security Workshops", value: "10+" },
      { label: "Audit Success", value: "100%" }
    ]
  },

  skills: {
    categories: [
      {
        title: "Security Domains",
        items: [
          { name: "AppSec & API Security", level: 95 },
          { name: "Web3 & Blockchain", level: 90 },
          { name: "Mobile (Android/iOS)", level: 85 },
          { name: "Cloud (AWS/GCP)", level: 90 },
          { name: "Threat Modeling (STRIDE)", level: 95 }
        ]
      },
      {
        title: "Pentest & Tooling",
        items: [
          { name: "Burp Suite / ZAP", level: 95 },
          { name: "Nessus / Acunetix", level: 90 },
          { name: "Metasploit / SQLMap", level: 85 },
          { name: "MobSF / Frida / Wireshark", level: 85 }
        ]
      },
      {
        title: "DevSecOps & Automation",
        items: [
          { name: "SAST / DAST / IAST / SCA", level: 95 },
          { name: "CI/CD Security Gates", level: 90 },
          { name: "Python / JS / Bash", level: 85 }
        ]
      },
      {
        title: "Frameworks & Governance",
        items: [
          { name: "OWASP Top 10 / ASVS", level: 95 },
          { name: "ISO 27001 / PCI-DSS", level: 90 },
          { name: "GDPR / NIST CSF", level: 85 }
        ]
      }
    ]
  },

  certifications: [
    {
      id: 1,
      name: "Certified Ethical Hacker (CEH v13)",
      issuer: "EC-Council",
      date: "2024",
      icon: "ShieldAlert",
      link: "#"
    },
    {
      id: 2,
      name: "Certified AppSec Practitioner (CAP)",
      issuer: "The SecOps Group",
      date: "2023",
      icon: "ShieldCheck",
      link: "#"
    },
    {
      id: 3,
      name: "Cyber Warrior (Penetration Testing)",
      issuer: "HackingFlix",
      date: "2023",
      icon: "Sword",
      link: "#"
    },
    {
      id: 4,
      name: "ISO/IEC 27001 & ISO 9001 Associate",
      issuer: "ISO",
      date: "2022",
      icon: "FileShield",
      link: "#"
    },
    {
      id: 5,
      name: "Cyber Security Expert - Grade 1",
      issuer: "Cybersecurity Fundamentals",
      date: "2022",
      icon: "Shield",
      link: "#"
    },
    {
      id: 6,
      name: "Fortinet NSE1 & Cisco Networking Labs",
      issuer: "Fortinet/Cisco",
      date: "2022",
      icon: "Network",
      link: "#"
    },
    {
      id: 7,
      name: "Blended CyberSecurity",
      issuer: "Tata STRIVE",
      date: "2022",
      icon: "Binary",
      link: "#"
    }
  ],

  experience: [
    {
      id: 1,
      title: "Senior Associate Software Engineer – Cybersecurity",
      company: "Byteosphere Software Pvt Ltd",
      date: "Aug 2023 – Present",
      description: "Demonstrating technical leadership in securing cryptocurrency platforms and SaaS environments. Engineered secure session frameworks using encrypted split cookies, CSRF tokens, and device fingerprinting. Deployed AWS WAF & CloudWatch reducing MTTD by 30%.",
      tags: ["Web3", "AWS WAF", "STRIDE", "DevSecOps"]
    },
    {
      id: 2,
      title: "Cybersecurity Tester",
      company: "Innover Systems",
      date: "May 2022 – Jul 2023",
      description: "Remediated 180+ vulnerabilities across 5+ government applications, reducing exploitable risks by 55%. Optimized Nessus scans to cut false positives by 30%. Executed Mobile AppSec with MobSF & Wireshark.",
      tags: ["GovTech", "Mobile Sec", "VAPT"]
    },
    {
      id: 3,
      title: "Application Security Consultant",
      company: "SISA Information Security",
      date: "Sep 2021 – Apr 2022",
      description: "Conducted 20+ penetration tests aligned with OWASP & PCI DSS, achieving 75% audit success. Developed custom Python scripts for vuln-scanning automation, saving 10+ hours weekly.",
      tags: ["PCI DSS", "OWASP", "Python Automation"]
    }
  ],

  securityDisclosures: [
    { platform: "Reddit", severity: "Critical", status: "Acknowledged" },
    { platform: "Extramarks", severity: "High", status: "Fixed" },
    { platform: "Dhani", severity: "Critical", status: "Fixed" },
    { platform: "Medplus Mart", severity: "High", status: "Fixed" }
  ],

  leadership: [
    "Facilitated 10+ workshops, reducing misconfigurations by 25%.",
    "Organized monthly meetups, training 50+ members in secure coding.",
    "Published 2 technical research papers on Fraud Detection & Encryption."
  ],

  education: [
    {
      school: "IIT Roorkee",
      degree: "PG Program in Cyber Security and Ethical Hacking",
      date: "2023 – 2025"
    },
    {
      school: "Alard College of Engineering, Pune",
      degree: "Bachelor of Engineering (Computer Engineering)",
      date: "2017 – 2021"
    },
    {
      school: "MIT Polytechnic, Pune",
      degree: "Diploma in Computer Engineering",
      date: "2013 – 2017"
    }
  ],

  projects: [
    {
      id: 1,
      title: "Transaction Fraud Detection",
      description: "Research Publication: Using Face Authentication and Invisible Virtual Keyboard for fraud prevention. Published in IJRAR 2020.",
      category: "Research",
      tags: ["ML", "Security", "Biometrics", "Virtual Keyboard"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Encrypted Communication System",
      description: "Research Publication: Advanced Security System Using Encrypted Communication. Published in IJERCSE 2016.",
      category: "Research",
      tags: ["Encryption", "Cybersecurity", "Embedded"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "Active Directory Security Lab",
      description: "Attack & Defense lab simulating lateral movement, Kerberoasting, and domain privilege escalation.",
      category: "Infrastructure",
      tags: ["AD", "Pentesting", "Windows Server"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ],

  contact: {
    header: "ESTABLISH SECURE CONNECTION",
    description: "Available for technical advisory, VAPT, or DevSecOps leadership opportunities. Pune, IN (Hybrid/Remote).",
    email: "paras615@gmail.com",
    phone: "+91-7498188204",
    resumeUrl: "/resume_paras_patil.pdf",
    resumeFilename: "Paras_Patil_Resume.pdf",
    socials: {
      linkedin: "https://www.linkedin.com/in/parascyber",
      medium: "https://medium.com/@parascyber",
      twitter: "https://twitter.com/Pre4kMast3r",
      tryhackme: "https://tryhackme.com/p/Paras.Patil"
    }
  }
};
