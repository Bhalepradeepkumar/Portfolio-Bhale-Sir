import { data } from "framer-motion/client";

// Achievements array 
export const achievements = [
    {
        text: "Received Annual Performance Bonus from NUS, Singapore for Post-doctoral research work",
        date: "2023"
    },
    {
        text: "Received the Innovative Student Projects Award from Indian National Academy of Engineering (INAE) for my Ph.D. Thesis",
        date: "2022"
    },
    {
        text: "Received Travel grant to attend ICDCN’2020 conference from IIT Guwahati",
        date: "2020"
    },
    {
        text: "Qualified UGC-NET (Assistant Professor), in CSE discipline",
        date: "2019"
    },
    {
        text: "Received Travel grant to attend COMSNETS’2019 conference from conference organizer and IIT Guwahati",
        date: "2019"
    },
    {
        text: "Received MHRD Scholarship for Ph.D.",
        date: "2018-2022"
    },
    {
        text: "Bagged second prize in Regional Innovators Conclave conducted by Government of Meghalaya for the SMART LIGHTING MODEL, Meghalaya, India",
        date: "2017"
    },
    {
        text: "Qualified GATE in CSE discipline",
        date: "2017"
    },
    {
        text: "Secured University Rank 2 (Silver Medalist) in M-Tech",
        date: "2016"
    },
    {
        text: "Received TEQIP-II Scholarship during M-Tech",
        date: "2014-2016"
    },
    {
        text: "Bagged first prize in the line-follower robotics competition, held at Assam University, Silchar, India",
        date: "2016"
    },
    {
        text: "Awarded with Anandaram Boruah Student Award for performing the 10th standard board examination by State Government of Assam",
        date: "2016"
    },
    {
        text: "Secured First position in my school and examination centre in 10th standard board examination by State Government of Assam",
        date: "2016"
    }
];

export const membership = [
    {
        text: "IEEE Senior Member (ID: 96688131)",
        date: "N/A"
    },
    {
        text: "IEEE Young Professionals",
        date: "N/A"
    },
    {
        text: "INAE Student Member",
        date: "N/A"
    }
];

export const reviewer = [
    {
        text: "Reviewer for IEEE Transactions on Mobile Computing",
        date: "N/A"
    },
    {
        text: "Reviewer for IEEE Transactions on Vehicular Technology",
        date: "N/A"
    },
    {
        text: "Reviewer for IEEE Internet of Things Journal",
        date: "N/A"
    },
    {
        text: "Reviewer for IEEE Transactions on Consumer Electronics",
        date: "N/A"
    },
    {
        text: "Reviewer for IEEE Engineering Management Review",
        date: "N/A"
    },
    {
        text: "Reviewer for IEEE Communications Standards Magazine",
        date: "N/A"
    },
    {
        text: "Reviewer for IEEE Transactions on Service Computing",
        date: "N/A"
    },
    {
        text: "Reviewer for Wireless Communication and Networking (Springer)",
        date: "N/A"
    }
];

export const technicalProgramCommittee = [
    {
        text: "Technical Program Committee Member at IEEE ICICSA-2023, NIT Silchar, Assam, India",
        date: "2023"
    },
    {
        text: "Technical Program Committee Member at IEEE PICom 2023, Special Session on Distributed Machine Learning for Edge/Fog Computing",
        date: "2023"
    },
    {
        text: "Technical Program Committee Member at IEEE ICCINS-2023, Mylavaram, AP, India",
        date: "2023"
    }
];

export const volunteer = [
    {
        text: "Volunteer for 3rd ISEA International Conference on Security and Privacy (ISEA-ISAP 2020), IIT Guwahati",
        date: "27 Feb - 1 Mar 2020"
    },
    {
        text: "Volunteer for workshop on 'Internet of Things: It’s Inside Out', NEHU, Shillong, Meghalaya",
        date: "12 May - 13 May 2017"
    }
];

export const awards = [
    { title: "Employee of the Month", year: 2023 },
    { title: "Best Team Player", year: 2023 },
    { title: "Innovator Award", year: 2022 },
    { title: "Outstanding Leadership", year: 2022 },
    { title: "Rising Star", year: 2021 },
    { title: "Customer Champion", year: 2021 },
    { title: "Top Sales Performer", year: 2020 },
    { title: "Excellence in Design", year: 2020 },
    { title: "Problem Solver", year: 2019 },
    { title: "Best Mentor", year: 2019 }
  ];
  

//   projects data 
export const projects = [
    {
      title: "Adaptive Resource Allocation for Faster Formation of 6TiSCH IoT Networks",
      field: "Networking and Telecommunications",
      description: `
        The 6TiSCH (IPv6 over TSCH mode of IEEE 802.15.4e) is a wireless networking standard designed for 
        IPv6-supported Time Slotted Channel Hopping (TSCH) communication in the Industrial Internet of Things (IIoT) 
        and other critical applications. Forming a 6TiSCH network is challenging due to the channel hopping feature 
        of TSCH, which makes it difficult for new nodes to determine when and where control packets are transmitted 
        by existing nodes. Additionally, the resource allocation by the 6TiSCH-MC (RFC 8180) standard for network 
        bootstrapping is static and does not manage congestion effectively. I have augmented the 6TiSCH-MC standard 
        by introducing mechanisms to achieve faster formation of 6TiSCH IoT networks, including varying the beacon 
        frame generation interval, enabling opportunistic and fair channel access schemes, and utilizing all available 
        physical channels. I have also opened research directions on faster formation in the presence of malicious 
        nodes, asynchronous networks, and SDN control traffic.`
    },
    {
      title: "Routing Attacks on RPL-based IoT Networks and their Countermeasures",
      field: "Cybersecurity",
      description: `
        The IETF's IPv6 Routing Protocol for Low-Power and Lossy Networks (RPL) (RFC 6550) is vulnerable to various 
        security threats, including sinkhole, sybil, hello flooding, and wormhole attacks. Among these, the DODAG 
        Information Solicitation (DIS) attack targets service availability by draining energy and exhausting network 
        bandwidth. I set up a testbed with 25 IoT devices (TI CC2650, CC2538, R-Pi) to evaluate the impact of the DIS 
        attack during 6TiSCH network formation. My findings revealed that attackers do not need expensive resources or 
        sensitive network information to execute this attack. I then developed a non-cooperative gaming model to 
        determine the optimal probability of responding to a DIS packet and designed a trust model to detect 
        malicious DIS transmissions in 6TiSCH networks. By merging these models, I reduced the impact of the DIS attack.`
    },
    {
      title: "Improving the Performance of IoT Networks",
      field: "Data Science and Analytics",
      description: `
        Through experimental evaluations on the FIT IoT-LAB testbed, I found that RPL-based Low-Power and Lossy 
        Networks (LLNs) suffer from load balancing issues due to the default parent selection mechanism of the RPL 
        routing protocol. Overloaded nodes experience reduced lifetimes and decreased throughput due to frame discards 
        from buffer overflow. To address this, I have proposed schemes for load balancing and buffer management and am 
        developing adaptive cell scheduling strategies to enhance IoT network performance. These strategies consider 
        available bandwidth, network topology, and traffic load to ensure reliable communication and meet Quality of 
        Service (QoS) requirements.`
    },
    {
      title: "Game Theoretic Resource Allocation in the Metaverse",
      field: "Artificial Intelligence and Machine Learning",
      description: `
        The Metaverse is a next-generation platform enabling real-time virtual interactions between users and entities 
        in the physical world. Integrating various technologies like sensing, communication, and high computing is 
        essential for seamless interaction. Current resource allocation techniques may be inadequate due to the 
        Metaverse's complexity and dynamic nature. I have formulated a multi-leader, multi-follower Stackelberg game 
        for resource allocation among IoT devices and Virtual Service Providers (VSPs). This game balances the quality 
        of experience (QoE) with the costs and profits associated with data collection. I solved the proposed model 
        using ADMM and simulated it in MATLAB, demonstrating its effectiveness. Additionally, I am working on 
        cost-effective computational resource allocation among cloud/edge service providers and VSPs based on user 
        requirements.`
    }
  ];
  