// Open/Closed Principle: Data is open for extension, closed for modification
// Modify this file to update the portfolio without touching the UI components

export const PORTFOLIO_DATA = {
  hero: {
    greeting: "INITIATING CONNECTION...",
    name: "Paras Patil",
    titles: [
      "Security Engineer",
      "Web3 & Blockchain Security",
      "AppSec & DevSecOps",
      "Bug Hunter & CEH"
    ],
    description: "Security Engineer with experience in delivering Application Security, Cloud Security, DevSecOps, and Penetration Testing initiatives across SaaS, FinTech, and Web3 environments. Always learning, building, and contributing to the security community.",
  },
  
  about: {
    title: "System.Info('About_Me')",
    content: [
      "I am a passionate Security Engineer skilled in automating CI/CD security gates, building secure SDLC processes, conducting VAPT, and supporting compliance frameworks including PCI-DSS, ISO 27001, GDPR, and NIST.",
      "My hands-on experience spans across SAST, DAST, SCA, SBOM, API Security, Mobile Security, Cloud (AWS), and Threat Modeling (STRIDE, ASVS). I have delivered measurable outcomes including reducing the attack surface by 40%, improving patch compliance by 56%, and decreasing MTTD by 30% through cloud-based telemetry.",
      "My core philosophy: You cannot defend what you do not understand. I am deeply interested in Web3 security, containerized workloads, and security governance for distributed systems."
    ],
    stats: [
      { label: "Vulnerabilities Found", value: "180+" },
      { label: "Attack Surface Reduced", value: "40%" },
      { label: "Compliance Focus", value: "ISO 27001, PCI-DSS" }
    ]
  },

  skills: {
    categories: [
      {
        title: "Application Security",
        items: [
          { name: "Web3 & Blockchain Security", level: 90 },
          { name: "SAST / DAST / SCA", level: 95 },
          { name: "API & Mobile Security", level: 85 },
          { name: "Code Review", level: 90 }
        ]
      },
      {
        title: "Cloud & DevSecOps",
        items: [
          { name: "AWS WAF & CloudWatch", level: 85 },
          { name: "CI/CD Security Gates", level: 90 },
          { name: "Threat Modeling (STRIDE, ASVS)", level: 80 },
          { name: "Containerized Workloads", level: 75 }
        ]
      },
      {
        title: "Compliance & Auditing",
        items: [
          { name: "ISO 27001", level: 85 },
          { name: "PCI-DSS", level: 80 },
          { name: "GDPR & NIST", level: 80 },
          { name: "Vulnerability Management", level: 95 }
        ]
      }
    ]
  },

  certifications: [
    {
      id: 1,
      name: "Certified Ethical Hacker (CEH v13)",
      issuer: "EC-Council",
      date: "Active",
      icon: "ShieldAlert",
      link: "#"
    },
    {
      id: 2,
      name: "Certified AppSec Practitioner",
      issuer: "SecOps",
      date: "Active",
      icon: "ShieldCheck",
      link: "#"
    },
    {
      id: 3,
      name: "MKCL Certified IT Hardware Support",
      issuer: "MKCL",
      date: "Active",
      icon: "Database",
      link: "#"
    },
    {
      id: 4,
      name: "Executive Postgrad: Cyber Security & Ethical Hacking",
      issuer: "IIT Roorkee",
      date: "2023 - 2024",
      icon: "Terminal",
      link: "#"
    }
  ],

  experience: [
    {
      id: 1,
      title: "Security Engineer",
      company: "Opcito Technologies",
      date: "Feb 2026 - Present",
      description: "Leading AppSec & Cloud Security for Web3 & SaaS platforms. Integrating CI/CD security controls and automating DevSecOps pipelines.",
      tags: ["AppSec", "Cloud", "Web3"]
    },
    {
      id: 2,
      title: "Senior Associate Software Engineer (Cyber Security)",
      company: "Byteosphere Software & IXFI Exchange",
      date: "Jun 2025 - Jan 2026",
      description: "Led AppSec & Cloud Security. Delivered VAPT & Secure SDLC improvements reducing attack surface by 40%. Built STRIDE threat models and deployed AWS WAF reducing MTTD by 30%.",
      tags: ["VAPT", "STRIDE", "AWS WAF", "Python"]
    },
    {
      id: 3,
      title: "Cyber Security Tester",
      company: "Innover Systems",
      date: "May 2022 - Jul 2023",
      description: "Identified & remediated 180+ vulnerabilities across GovTech apps reducing risk by 55%. Executed Mobile AppSec assessments using MobSF, Frida, and Wireshark.",
      tags: ["GovTech", "Mobile AppSec", "MobSF"]
    },
    {
      id: 4,
      title: "AppSec Consultant",
      company: "SISA",
      date: "Sep 2021 - Apr 2022",
      description: "Conducted 20+ application security assessments aligned to OWASP & PCI DSS. Automated repetitive scanning tasks saving 10+ hrs/week.",
      tags: ["PCI DSS", "OWASP"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Active Directory Lab Setup",
      description: "Automated deployment of an intentionally vulnerable Active Directory environment using Terraform and Ansible for studying lateral movement, Kerberoasting, and domain privilege escalation.",
      thumbnail: "ad-lab", // Placeholders for image handling
      category: "Infrastructure",
      tags: ["Terraform", "Ansible", "Active Directory", "Windows Server"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Zero-Day Exploit POC",
      description: "Reverse engineered a legacy IoT web interface, discovering an unauthenticated Remote Code Execution (RCE) vulnerability. Developed a Python script to reliably trigger the exploit.",
      thumbnail: "zero-day",
      category: "Exploit Dev",
      tags: ["Python", "Reverse Engineering", "IoT", "RCE"],
      githubUrl: "#",
      liveUrl: null
    },
    {
      id: 3,
      title: "Custom C2 Framework",
      description: "Developed a lightweight Command and Control (C2) framework written in Go with AES encrypted HTTP beacons, evading basic Windows Defender signatures.",
      thumbnail: "c2-framework",
      category: "Tooling",
      tags: ["Golang", "Malware Dev", "Cryptography"],
      githubUrl: "#",
      liveUrl: null
    },
    {
      id: 4,
      title: "HackTheBox Writeup: Obscurity",
      description: "Detailed walkthrough for the HTB machine 'Obscurity', focusing on identifying vulnerabilities in custom Python web servers and exploiting insecure deserialization.",
      thumbnail: "htb-writeup",
      category: "Writeup",
      tags: ["HTB", "Web Exploitation", "Python"],
      githubUrl: "#",
      liveUrl: "#" // Link to a blog post/PDF
    }
  ],

  contact: {
    header: "ESTABLISH SECURE CONNECTION",
    description: "My communication channels are open for Application Security, Cloud Security, and DevSecOps roles. Use the terminal below to send an encrypted message.",
    email: "paras615@gmail.com",
    socials: {
      linkedin: "https://www.linkedin.com/in/parascyber",
      medium: "https://medium.com/@parascyber",
      twitter: "https://twitter.com/Pre4kMast3r",
      tryhackme: "https://tryhackme.com/p/Paras.Patil"
    }
  }
};
