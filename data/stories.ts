export interface Story {
  slug: string;

  title: string;

  category: string;

  publishedAt: string;

  readTime: string;

  excerpt: string;

  image: string;

  featured?: boolean;

  sections: {
    title: string;
    content: string[];
  }[];

  quote?: {
    text: string;
    author: string;
  };

  highlightsTitle?: string;

  highlights?: {
    title: string;
    description: string;
  }[];

  legalSignificance?: string;

  caseDetails?: {
    caseName: string;
    court: string;
    bench: string;
    decisionDate: string;
    caseNumber?: string;
    citation?: string;

    disclaimer?: string;
  };

  disclaimer?: string;

}

export const stories: Story[] = [
  {
    slug: "story-1",

    title:
      "Supreme Court Adopts Hybrid Work Policy, Introduces Carpooling and Virtual Hearings",

    category: "Supreme Court",

    publishedAt: "2026-05-15T09:00:00+05:30",

    readTime: "4 min read",

    excerpt:
      "The Supreme Court has introduced a hybrid work policy, expanded virtual hearings for specified matters, and encouraged carpooling among judges as part of new administrative measures aimed at improving efficiency and sustainability.",

    image: "/images/story1.png",
    
    sections: [
      {
        title: "Background",

        content: [
          "The Supreme Court of India has introduced a revised set of administrative measures through a circular issued on May 15, 2026, following recent directions from the Department of Personnel and Training. The changes are aimed at streamlining court operations, encouraging digital proceedings, and promoting environmentally conscious practices."
        ]
      },

      {
        title: "Virtual Hearings",

        content: [
          "According to the circular, all cases listed on miscellaneous days—including Mondays and Fridays—as well as matters scheduled during the Court's partial working days, will be heard exclusively through video conferencing. The Registry has been directed to ensure that hearing links are shared promptly, video conferencing facilities remain reliable, and technical assistance is readily available."
        ]
      },

      {
        title: "Hybrid Work Policy",

        content: [
          "The Court has also introduced a work-from-home arrangement for Registry employees. Up to 50% of staff in each branch may work remotely for two days each week while maintaining uninterrupted judicial administration through weekly duty rosters."
        ]
      },

      {
        title: "Sustainability Measures",

        content: [
          "Judges have additionally agreed to encourage carpooling wherever feasible as part of the Court's environmental sustainability initiative. The circular further clarifies that hybrid work arrangements remain subject to administrative requirements and may be modified whenever necessary."
        ]
      }
    ],

    quote: {
      text:
        "Hybrid work arrangements and technology-driven hearings can enhance judicial efficiency while ensuring continuity of access to justice.",
      author: "Supreme Court Circular"
    },

    highlightsTitle: "Key Highlights",

    highlights: [
      {
        title: "Virtual Hearings",
        description:
          "Miscellaneous day matters and specified proceedings will now be conducted through video conferencing."
      },
      {
        title: "Hybrid Working",
        description:
          "Registry employees may work remotely for up to two days a week subject to administrative requirements."
      },
      {
        title: "Carpooling Initiative",
        description:
          "Judges have been encouraged to adopt carpooling to promote sustainability and reduce fuel consumption."
      },
      {
        title: "Administrative Flexibility",
        description:
          "Authorities retain the power to withdraw hybrid arrangements whenever institutional requirements demand."
      }
    ],

    legalSignificance:
      "The circular represents a significant administrative modernization of the Supreme Court by integrating digital hearings, flexible work arrangements, and sustainability initiatives while ensuring uninterrupted judicial functioning.",

    caseDetails: {
      caseName: "Administrative Circular of the Supreme Court of India",
      court: "Supreme Court of India",
      bench: "Supreme Court Administration",
      decisionDate: "15 May 2026"
    },

    disclaimer:
      "This article is intended solely for informational purposes. Readers should refer to the official Supreme Court circular for complete administrative directions."
  },

  {
    slug: "story-2",

    title:
      "Fresh Section 21 Notice Mandatory to Initiate New Arbitration After Award Is Set Aside: Bombay High Court",

    category: "Bombay High Court",

    publishedAt: "2026-07-07T11:20:00+05:30",

    readTime: "6 min read",

    excerpt:
      "The Bombay High Court has ruled that once an arbitral award is set aside under Section 34 of the Arbitration and Conciliation Act, parties must issue a fresh notice under Section 21 before commencing a new round of arbitration.",

    image: "/images/story2.png",

    sections: [
      {
        title: "Background",

        content: [
          "The dispute arose from a partnership deed executed in December 1985 between the applicants and Respondent Nos. 1 and 2. An arbitral award delivered in April 2016 was subsequently set aside by the Bombay High Court under Section 34 of the Arbitration and Conciliation Act in October 2019.",

          "Following the setting aside of the award, the applicants issued a fresh notice under Section 21 in March 2024 before filing an application under Section 11 seeking appointment of an arbitrator."
        ]
      },

      {
        title: "Court's Findings",

        content: [
          "Justice Arun R. Pedneker held that the issuance of a fresh notice under Section 21 is mandatory whenever arbitration is recommenced after an earlier award has been set aside. The Court observed that arbitration legally commences only upon service of such notice unless the parties agree otherwise.",

          "The Bench clarified that limitation for filing a Section 11 application cannot be calculated independently of a valid Section 21 notice. The exclusion of time available under Section 43(4) can also be claimed only after arbitration has been properly reinitiated."
        ]
      },

      {
        title: "Issue of Non-Signatories",

        content: [
          "The Court also examined whether Respondent Nos. 3 and 4, who became partners under subsequent partnership deeds, could be compelled to participate in arbitration despite never signing the original arbitration agreement.",

          "Relying upon the Supreme Court decisions in Cox and Kings and Hindustan Petroleum Corporation Limited, the Court held that arbitration cannot be imposed merely on grounds of convenience or fairness. A referral court must first be satisfied that there is prima facie evidence showing an intention to bind such persons to the arbitration agreement."
        ]
      },

      {
        title: "Decision",

        content: [
          "The Court held that the fresh Section 21 notice had been issued within the prescribed limitation period after accounting for the Supreme Court's COVID-19 limitation extensions. Consequently, the Section 11 application against the original contracting parties was maintainable.",

          "Justice Sadhana Jadhav (Retd.), former Judge of the Bombay High Court, was appointed as the sole arbitrator. However, the proceedings against Respondent Nos. 3 and 4 were dismissed as they were not parties to the original arbitration agreement."
        ]
      }
    ],

    quote: {
      text:
        "A fresh notice under Section 21 is the legal commencement of a new arbitration and cannot be dispensed with merely because an earlier award has been set aside.",
      author: "Bombay High Court"
    },

    highlightsTitle: "Key Takeaways",

    highlights: [
      {
        title: "Fresh Notice Mandatory",
        description:
          "A new Section 21 notice must always precede a fresh arbitration after an arbitral award is set aside."
      },
      {
        title: "Limitation Begins with Notice",
        description:
          "The limitation period for recommencing arbitration is linked to a valid Section 21 notice and not merely the setting aside of the previous award."
      },
      {
        title: "Non-Signatories Protected",
        description:
          "Persons who are not parties to an arbitration agreement cannot be referred to arbitration without prima facie evidence showing their consent or legal relationship."
      },
      {
        title: "Section 43(4)",
        description:
          "The statutory exclusion of time is available only where arbitration has been properly recommenced in accordance with the Act."
      }
    ],

    legalSignificance:
      "The judgment reinforces the procedural safeguards governing arbitration by clarifying that every fresh arbitral proceeding requires a valid invocation under Section 21. It also reiterates that arbitration remains a consensual dispute resolution mechanism and cannot ordinarily bind persons who never agreed to arbitrate.",

    caseDetails: {
      caseName:
        "Hemant D. Shah HUF & Anr. v. Chittaranjan D. Shah HUF & Ors.",
      court: "Bombay High Court",
      bench: "Justice Arun R. Pedneker",
      decisionDate: "7 July 2026",
      caseNumber: "Commercial Arbitration Application No. 184 of 2026"
    },

    disclaimer:
      "This article is intended for informational purposes only and provides a summary of the Bombay High Court's judgment. Readers should refer to the complete judgment for the full legal reasoning and operative directions."
  },

  {
    slug: "story-3",

    title:
      "Supreme Court: Excluding Widow in Favour of Distant Relatives Casts Doubt on Validity of Will",

    category: "Supreme Court",

    publishedAt: "2026-07-07T10:45:00+05:30",

    readTime: "7 min read",

    excerpt:
      "The Supreme Court has ruled that a will completely excluding a surviving widow in favour of distant relatives naturally raises suspicion and requires strict proof that the document was executed voluntarily and with full understanding by the testator.",

    image: "/images/story3.png",

    sections: [
      {
        title: "Background",

        content: [
          "The dispute concerned agricultural land belonging to Chhajju Ram, an illiterate farmer who died without children. Following his death, his widow, Bhambo Devi, claimed ownership of the property as the sole surviving Class I heir.",

          "The defendants relied upon a registered will allegedly executed by the deceased in their favour. The widow challenged its validity, alleging that the document had never been voluntarily executed and was surrounded by suspicious circumstances."
        ]
      },

      {
        title: "Findings of the Lower Courts",

        content: [
          "Both the Trial Court and the First Appellate Court accepted the widow's claim after finding several unexplained circumstances surrounding the will. These included the complete exclusion of the widow, unexplained alterations in the registration endorsement, and the absence of any convincing evidence showing a close relationship between the deceased and the beneficiaries.",

          "However, the Himachal Pradesh High Court reversed these concurrent findings in second appeal after holding that the registered will had been duly proved through an attesting witness."
        ]
      },

      {
        title: "Supreme Court's Analysis",

        content: [
          "The Supreme Court disagreed with the High Court's approach and observed that excluding a surviving widow in favour of distant relatives naturally creates suspicion requiring careful judicial scrutiny. Since the deceased was illiterate, the burden upon the propounders of the will became even heavier.",

          "The Bench held that the defendants failed to satisfactorily explain the suspicious circumstances surrounding the document. The Court further observed that appellate courts exercising jurisdiction under Section 100 of the Code of Civil Procedure cannot ordinarily reassess concurrent factual findings unless a substantial question of law genuinely arises."
        ]
      },

      {
        title: "Decision",

        content: [
          "Allowing the appeal, the Supreme Court restored the concurrent judgments of the Trial Court and the First Appellate Court. It held that the defendants had failed to discharge the burden required in law to establish the genuineness of the disputed will.",

          "The widow's ownership and possession of the disputed property were consequently restored."
        ]
      }
    ],

    quote: {
      text:
        "A will completely excluding a surviving widow in favour of distant relatives naturally gives rise to suspicious circumstances requiring strict proof.",
      author: "Supreme Court"
    },

    highlightsTitle: "Key Takeaways",

    highlights: [
      {
        title: "Widow's Exclusion Raises Suspicion",
        description:
          "Complete disinheritance of a Class I heir without convincing explanation demands greater judicial scrutiny."
      },
      {
        title: "Higher Burden on Propounder",
        description:
          "The person relying upon the will must dispel every legitimate suspicion surrounding its execution."
      },
      {
        title: "Illiterate Testator",
        description:
          "Where the testator is illiterate, courts require stronger proof that the document was voluntarily executed with full knowledge."
      },
      {
        title: "Second Appeal Limited",
        description:
          "High Courts cannot ordinarily interfere with concurrent findings of fact unless a substantial question of law exists."
      }
    ],

    legalSignificance:
      "The judgment reiterates the well-settled principles governing proof of wills, emphasising that suspicious circumstances surrounding testamentary documents must be satisfactorily explained before probate or inheritance claims can succeed.",

    caseDetails: {
      caseName: "Sardari Lal v. Bishan Dass and Others",
      court: "Supreme Court of India",
      bench: "Justice Manoj Misra & Justice K.V. Viswanathan",
      decisionDate: "7 July 2026",
      citation: "2026 INSC 669"
    },

    disclaimer:
      "This summary is intended solely for informational purposes and should not be treated as legal advice. Readers are encouraged to refer to the complete judgment for the Court's detailed reasoning."
  },

  {
    slug: "story-4",

    title:
      "Patna High Court Directs DM to Ensure Legal Acquisition Before Constructing Road on Private Raiyati Land",

    category: "Patna High Court",

    publishedAt: "2026-07-07T10:30:00+05:30",

    readTime: "5 min read",

    excerpt:
      "The Patna High Court has held that the State cannot construct public infrastructure over privately owned raiyati land without first acquiring the property in accordance with law and paying lawful compensation.",

    image: "/images/story4.png",

    sections: [
      {
        title: "Background",

        content: [
          "The petitioner claimed ownership over ancestral raiyati land situated in Bhagalpur district. Although the land was mistakenly recorded as government property during a survey, an appellate court later declared it to be the petitioner's private property.",

          "Despite the civil court decree attaining finality, local authorities proceeded with construction of a village road over the land without initiating acquisition proceedings or paying compensation."
        ]
      },

      {
        title: "Court's Observations",

        content: [
          "Justice Rana Vikram Singh observed that public authorities cannot utilise private land for development projects without first complying with the statutory acquisition process. The Court described the conduct of the authorities as arbitrary and contrary to law.",

          "The Bench further criticised the administration for failing to respond to repeated representations made by the landowner while permitting construction activities to continue."
        ]
      },

      {
        title: "Violation of Property Rights",

        content: [
          "The Court held that the petitioner's ownership had already been conclusively established through the civil court decree. Consequently, the State could not rely upon outdated revenue records to justify occupation of the land.",

          "Even where land is required for a genuine public purpose, the Constitution and statutory framework require lawful acquisition and payment of compensation before possession can be taken."
        ]
      },

      {
        title: "Decision",

        content: [
          "The High Court directed the District Magistrate to personally verify the revenue records together with the civil court decree and ensure that no further construction is carried out unless acquisition proceedings are completed in accordance with law.",

          "The Court further directed that appropriate compensation must be paid if the land is acquired for public purposes."
        ]
      }
    ],

    quote: {
      text:
        "The State cannot take possession of private property for public purposes without first following the procedure established by law.",
      author: "Patna High Court"
    },

    highlightsTitle: "Key Takeaways",

    highlights: [
      {
        title: "Private Property Protected",
        description:
          "Government agencies cannot utilise private land merely because it is needed for a public project."
      },
      {
        title: "Acquisition is Mandatory",
        description:
          "Lawful land acquisition and payment of compensation must precede any public construction."
      },
      {
        title: "Administrative Accountability",
        description:
          "The District Magistrate was directed to personally supervise compliance with the Court's directions."
      },
      {
        title: "Revenue Errors Not Enough",
        description:
          "Incorrect revenue entries cannot override a binding civil court decree recognising private ownership."
      }
    ],

    legalSignificance:
      "The judgment reinforces constitutional protection of property rights by reiterating that public development projects cannot bypass statutory acquisition procedures or deny landowners their right to compensation.",

    caseDetails: {
      caseName: "Uttam Jha v. State of Bihar & Others",
      court: "Patna High Court",
      bench: "Justice Rana Vikram Singh",
      decisionDate: "7 July 2026",
      caseNumber: "Civil Writ Jurisdiction Case No. 7953 of 2026"
    },

    disclaimer:
      "This article is intended for informational purposes only and summarises the High Court's judgment. Readers should consult the complete decision for the full legal reasoning."
  },

  {
    slug: "story-5",

    title:
      "Sikkim High Court Calls for Scientific Review of Child Mental Health Policies, Raises Concerns Over Prison Rehabilitation",

    category: "Sikkim High Court",

    publishedAt: "2026-07-14T09:30:00+05:30",

    readTime: "6 min read",

    excerpt:
      "The Sikkim High Court has urged the State Government to scientifically evaluate child mental health programmes while questioning whether existing prison rehabilitation measures effectively prevent repeat offences.",

    image: "/images/story5.png",

    sections: [
      {
        title: "Background",

        content: [
          "The appeal arose from the conviction of a man under the Protection of Children from Sexual Offences (POCSO) Act in connection with the sexual assault of a 17-year-old schoolgirl who later died by suicide.",

          "While the High Court upheld the convictions for sexual assault, wrongful restraint and abetment of suicide, it set aside the separate punishment imposed under Section 354A IPC, holding that overlapping offences cannot attract multiple punishments."
        ]
      },

      {
        title: "Mental Health Concerns",

        content: [
          "After examining the victim's suicide note, the Division Bench observed that children's emotional and psychological well-being deserves greater institutional attention. The Court emphasised that mental health policies should not merely exist on paper but should be periodically assessed through scientific evaluation.",

          "The Bench recommended the creation of measurable frameworks capable of identifying shortcomings and evaluating whether existing government programmes are actually improving children's mental health."
        ]
      },

      {
        title: "Prison Rehabilitation",

        content: [
          "The Court also examined the appellant's previous conviction and observed that despite serving an earlier prison sentence, he subsequently committed a graver offence. This prompted the Bench to question the effectiveness of rehabilitation programmes within the State Central Prison.",

          "The Court stressed that correctional institutions should actively reduce the likelihood of repeat offending through meaningful rehabilitation rather than merely serving punitive functions."
        ]
      },

      {
        title: "Decision",

        content: [
          "The High Court affirmed the appellant's remaining convictions and directed that the sentences run concurrently. It also upheld compensation awarded to the victim's parents.",

          "Copies of the judgment were directed to be forwarded to the Chief Secretary of Sikkim and senior prison authorities for appropriate policy consideration."
        ]
      }
    ],

    quote: {
      text:
        "Children's mental health requires proactive intervention supported by scientific evaluation rather than merely implementing schemes.",
      author: "Sikkim High Court"
    },

    highlightsTitle: "Key Takeaways",

    highlights: [
      {
        title: "Scientific Policy Review",
        description:
          "Mental health programmes should be periodically evaluated using measurable outcomes."
      },
      {
        title: "Children's Well-being",
        description:
          "Psychological health deserves equal institutional attention alongside physical safety."
      },
      {
        title: "Prison Reform",
        description:
          "Correctional systems must focus on reducing repeat offending through rehabilitation."
      },
      {
        title: "Double Punishment Restricted",
        description:
          "Overlapping offences cannot result in multiple punishments where statutory protections apply."
      }
    ],

    legalSignificance:
      "The judgment extends beyond criminal law by emphasising evidence-based policymaking in child mental health and the constitutional importance of meaningful prison rehabilitation.",

    caseDetails: {
      caseName: "Chewang Sherpa v. State of Sikkim",
      court: "Sikkim High Court",
      bench: "Chief Justice A. Muhamed Mustaque & Justice Bhaskar Raj Pradhan",
      decisionDate: "14 July 2026",
      caseNumber: "Criminal Appeal No. 19 of 2023"
    },

    disclaimer:
      "This article provides an editorial summary of the judgment and is intended solely for informational purposes."
  },

  {
    slug: "story-6",

    title:
      "Bombay High Court Upholds AIMIM MLA's Election, Says Prayer for Victory Is Not a Religious Appeal for Votes",

    category: "Bombay High Court",

    publishedAt: "2026-07-14T11:30:00+05:30",

    readTime: "7 min read",

    excerpt:
      "The Bombay High Court has ruled that offering a prayer for electoral success, without asking voters to support a candidate because of religion, does not amount to a corrupt electoral practice under the Representation of the People Act.",

    image: "/images/story6.png",

    sections: [
      {
        title: "Election Challenge",

        content: [
          "The election petition challenged the victory of AIMIM MLA Mufti Mohammad Ismail Abdul Khalique from the Malegaon Central constituency. The petitioner alleged corrupt electoral practices based on religious speeches, campaign material and congregational prayers.",

          "It was also alleged that deceased voters had participated in the election and that communal divisions had been encouraged during campaigning."
        ]
      },

      {
        title: "Court's Analysis",

        content: [
          "Justice N.J. Jamadar observed that offering a Dua for electoral success differs fundamentally from requesting votes on the basis of religion. Likewise, the congregation's response of 'Amen' merely reflected agreement with the prayer and could not be treated as an electoral commitment.",

          "The Court reiterated that merely referring to religion in a speech does not automatically amount to a corrupt electoral practice unless there is a direct appeal asking electors to vote because of religion."
        ]
      },

      {
        title: "Insufficient Evidence",

        content: [
          "The Bench found that allegations concerning campaign speeches, pamphlets and voting irregularities lacked the detailed pleadings and supporting evidence required under election law.",

          "Claims regarding deceased voters were unsupported by polling records, affidavits or other reliable evidence."
        ]
      },

      {
        title: "Decision",

        content: [
          "Holding that the election petition failed to disclose a complete cause of action, the Bombay High Court rejected the petition under Order VII Rule 11 CPC and upheld the returned candidate's election."
        ]
      }
    ],

    quote: {
      text:
        "A prayer seeking electoral success cannot by itself be equated with an appeal seeking votes on religious grounds.",
      author: "Bombay High Court"
    },

    highlightsTitle: "Key Takeaways",

    highlights: [
      {
        title: "Prayer ≠ Religious Appeal",
        description:
          "Religious prayers alone do not amount to corrupt electoral practice."
      },
      {
        title: "Strict Pleading Required",
        description:
          "Election petitions must contain detailed material facts and supporting particulars."
      },
      {
        title: "Evidence Matters",
        description:
          "Broad allegations without documentary support cannot invalidate an election."
      },
      {
        title: "Religion in Speech",
        description:
          "References to religion become unlawful only when they directly solicit votes on religious grounds."
      }
    ],

    legalSignificance:
      "The judgment clarifies the distinction between religious expression and unlawful electoral appeals under the Representation of the People Act.",

    caseDetails: {
      caseName:
        "Mufti Mohammad Ismail Abdul Khalique v. Shaikh Asif Shaikh Rashid & Others",
      court: "Bombay High Court",
      bench: "Justice N.J. Jamadar",
      decisionDate: "14 July 2026",
      citation: "2026:BHC-OS:12567"
    },

    disclaimer:
      "This summary is intended solely for educational and informational purposes and should not be treated as legal advice."
  },

  {
    slug: "story-7",

    title:
      "Allahabad High Court Upholds Sealing of Clinic, Says Electro Homeopathy Qualification Does Not Authorise Allopathic Practice",

    category: "Allahabad High Court",

    publishedAt: "2026-07-17T10:00:00+05:30",

    readTime: "6 min read",

    excerpt:
      "The Allahabad High Court has held that qualifications in electro homeopathy do not authorise the practice of allopathic medicine, observing that practising an unfamiliar medical system amounts to quackery and endangers public health.",

    image: "/images/story7.png",

      sections: [
      {
        title: "Background",

        content: [
          "The petitioner challenged the sealing of his clinic after authorities concluded that he was administering allopathic medicines despite possessing only qualifications in electro homeopathy and community health.",

          "Following an inspection, the Chief Medical Officer found multiple statutory violations and initiated both regulatory and criminal proceedings."
        ]
      },

      {
        title: "Regulatory Violations",

        content: [
          "Apart from lacking recognised medical qualifications, the clinic was found to be unregistered, lacked biomedical waste management facilities, had no fire safety clearance, failed to maintain infection control standards and permitted unqualified persons to provide treatment.",

          "The Court observed that each of these deficiencies independently justified regulatory action."
        ]
      },

      {
        title: "Court's Analysis",

        content: [
          "The Bench reiterated that registration under one system of medicine does not authorise practice under another unless specifically recognised by law. Relying upon Mukhtiar Chand v. State of Punjab, the Court held that only recognised allopathic practitioners may administer modern medicine.",

          "The Court further observed that Article 19(1)(g) permits the State to regulate professions through reasonable restrictions in the interest of public health."
        ]
      },

      {
        title: "Decision",

        content: [
          "Finding no illegality in the decision of the Chief Medical Officer, the High Court dismissed the writ petition and upheld the order sealing the clinic."
        ]
      }
    ],

    quote: {
      text:
        "A person who practises a system of medicine without possessing the necessary knowledge is a quack and merely pretends to possess medical skill.",
      author: "Allahabad High Court"
    },

    highlightsTitle: "Key Takeaways",

    highlights: [
      {
        title: "Electro Homeopathy ≠ Allopathy",
        description:
          "Qualification in one medical system does not authorise practice in another."
      },
      {
        title: "Public Health First",
        description:
          "Medical regulation exists to protect patients from unqualified treatment."
      },
      {
        title: "Clinic Standards Mandatory",
        description:
          "Registration, biomedical waste disposal, fire safety and infection control are statutory requirements."
      },
      {
        title: "Professional Regulation",
        description:
          "Reasonable restrictions under Article 19(1)(g) permit regulation of medical professions."
      }
    ],

    legalSignificance:
      "The judgment reinforces the Supreme Court's long-standing principle that cross-practice without statutory recognition is impermissible and highlights the constitutional importance of regulating healthcare professions in the interest of public safety.",

    caseDetails: {
      caseName: "Santosh Kumar Sharma v. State of Uttar Pradesh",
      court: "Allahabad High Court",
      bench: "Justice J.J. Munir & Justice Indrajeet Shukla",
      decisionDate: "10 July 2026",
      caseNumber: "WRIT-C No. 21019 of 2026"
    },

    disclaimer:
      "This article summarises the judgment for informational purposes and should not be treated as legal or medical advice."
  },
  {
    slug: "story-8",

    title:
      "Supreme Court: Appeal Against Joint and Inseparable Decree Abates Entirely if Legal Representatives Are Not Substituted",

    category: "Supreme Court",

    publishedAt: "2026-07-31T11:55:00+05:30",

    readTime: "4 min read",

    excerpt:
      "The Supreme Court has held that where a decree is joint and inseparable, failure to substitute the legal representatives of a deceased party within the prescribed time results in the abatement of the entire appeal.",

    image: "/images/story8.jpeg",

    sections: [
      {
        title: "Background",

        content: [
          "The Supreme Court considered the consequences of failing to substitute the legal representatives of a deceased party during the pendency of an appeal. The issue arose in the context of a decree involving rights and liabilities that were so interconnected they could not be separated.",

          "The Court examined whether the appeal could continue against the remaining parties despite the absence of the deceased party's legal representatives."
        ]
      },

      {
        title: "Court's Observations",

        content: [
          "The Bench observed that where a decree is joint and inseverable, the rights and liabilities of the parties are so closely connected that they cannot be adjudicated independently. In such situations, failure to bring the legal representatives of a deceased party on record creates the possibility of conflicting and unenforceable decrees.",

          "The Court emphasised that the procedural requirement of substituting legal representatives is not a mere technicality but an essential safeguard ensuring that all affected parties are given an opportunity to be heard."
        ]
      },

      {
        title: "Legal Principle",

        content: [
          "Reiterating settled principles, the Court held that the doctrine of abatement applies where the decree under challenge is joint and indivisible, the rights of the parties are inseparable, and non-substitution of legal representatives would result in inconsistent judicial outcomes.",

          "The Bench further stressed that parties must diligently substitute the legal representatives of a deceased litigant within the limitation period prescribed under the Code of Civil Procedure."
        ]
      },

      {
        title: "Decision",

        content: [
          "Applying these principles, the Supreme Court held that since the decree in question was joint and inseverable, and the legal representatives of the deceased party were not brought on record within the prescribed period, the appeal had abated in its entirety.",

          "The Court therefore declined to examine the merits of the appeal."
        ]
      }
    ],

    quote: {
      text:
        "Where a decree is joint and inseverable, failure to substitute the legal representatives of a deceased party may result in the abatement of the entire appeal.",
      author: "Supreme Court"
    },

    highlightsTitle: "Key Takeaways",

    highlights: [
      {
        title: "Joint Decree",
        description:
          "A decree involving inseparable rights and liabilities cannot be partially adjudicated."
      },
      {
        title: "Timely Substitution",
        description:
          "Legal representatives must be brought on record within the limitation period prescribed by law."
      },
      {
        title: "Doctrine of Abatement",
        description:
          "Failure to substitute legal representatives may cause the entire appeal to abate where the decree is inseverable."
      },
      {
        title: "Procedural Safeguard",
        description:
          "Substitution rules ensure that all affected parties receive an opportunity to be heard and prevent conflicting decrees."
      }
    ],

    legalSignificance:
      "The judgment reinforces the importance of procedural compliance in appellate proceedings and clarifies that courts cannot continue appeals involving joint and inseparable decrees where the absence of a necessary party would result in inconsistent or unenforceable outcomes.",

    caseDetails: {
      caseName: "To be updated upon release of the official judgment details",
      court: "Supreme Court of India",
      bench: "Supreme Court Bench",
      decisionDate: "31 July 2026"
    },

    disclaimer:
      "This article provides a summary of the Supreme Court's ruling for informational purposes only. Readers should refer to the official judgment for the complete factual background and legal reasoning."
  },
  {
    slug: "story-9",

    title:
      "Disability Reservation Cannot Be Sub-Classified by Caste, Rules Himachal Pradesh High Court",

    category: "Himachal Pradesh High Court",

    publishedAt: "2026-07-30T10:00:00+05:30",

    readTime: "5 min read",

    excerpt:
      "The Himachal Pradesh High Court has held that reservation for Persons with Disabilities cannot ordinarily be further sub-classified on the basis of caste, directing the State to appoint a hearing-impaired candidate who was wrongly denied selection.",

    image: "/images/story9.png",

    sections: [
      {
        title: "Background",

        content: [
          "The petitioner, a hearing-impaired candidate with 46% permanent disability, had applied for the post of Physical Education Teacher (PET) under a special recruitment drive for Persons with Disabilities (PwDs). Although he secured higher marks than the only other candidate in the hearing-impaired category from Kullu district, he was denied appointment after the State treated the post as reserved for Scheduled Caste candidates within the disability category.",

          "Challenging the decision, the petitioner argued that neither the recruitment notification nor the interview call letter mentioned any such reservation and that disability reservation, being a form of horizontal reservation, could not legally be sub-classified on the basis of caste."
        ]
      },

      {
        title: "Court's Observations",

        content: [
          "Justice Jiya Lal Bhardwaj examined the recruitment records and found that the State had never disclosed that the hearing-impaired post was reserved for Scheduled Caste candidates. The Court observed that even if such a classification had been introduced subsequently, it would be contrary to the principles governing horizontal reservation.",

          "Relying on the Supreme Court's decision in Mahesh Gupta v. Yashwant Kumar Ahirwar (2007), the Court reiterated that persons with disabilities constitute a distinct class for the purpose of horizontal reservation and cannot ordinarily be subjected to further caste-based classification."
        ]
      },

      {
        title: "Horizontal Reservation Explained",

        content: [
          "The High Court distinguished between vertical reservation under Article 16(4) of the Constitution, which applies to categories such as Scheduled Castes, Scheduled Tribes and Other Backward Classes, and horizontal reservation under Article 16(1), which applies to categories including persons with disabilities.",

          "Holding that the State's action blurred this constitutional distinction, the Court concluded that excluding the petitioner solely because he belonged to the general category was arbitrary, discriminatory and legally unsustainable."
        ]
      },

      {
        title: "Decision",

        content: [
          "The Court also rejected the State's contention that appointments under the disability category could be confined to candidates from a particular district, holding that eligible PwD candidates across the State were entitled to equal consideration unless a valid legal basis existed for such restriction.",

          "Considering the prolonged litigation and the petitioner's higher merit, the High Court directed the State Government to appoint him as Physical Education Teacher with consequential service benefits. Monetary benefits for the intervening period were directed to remain notional, while salary would become payable if the appointment was not offered within three months."
        ]
      }
    ],

    quote: {
      text:
        "Reservation for Persons with Disabilities is a form of horizontal reservation and cannot ordinarily be sub-classified on the basis of caste.",
      author: "Himachal Pradesh High Court"
    },

    highlightsTitle: "Key Takeaways",

    highlights: [
      {
        title: "No Caste-Based Split",
        description:
          "Posts reserved for Persons with Disabilities cannot ordinarily be further reserved on the basis of caste."
      },
      {
        title: "Horizontal Reservation",
        description:
          "Disability reservation operates independently of caste-based vertical reservation under the constitutional framework."
      },
      {
        title: "Transparent Recruitment",
        description:
          "Reservation conditions must be clearly disclosed in recruitment notifications and interview communications."
      },
      {
        title: "Appointment Ordered",
        description:
          "The Court granted direct appointment with consequential service benefits instead of directing a fresh recruitment process."
      }
    ],

    legalSignificance:
      "The judgment reinforces the constitutional distinction between vertical and horizontal reservation, affirming that disability reservation is intended to benefit all eligible persons with disabilities irrespective of caste. It also underscores the importance of transparency in public recruitment and protects candidates from arbitrary changes to reservation criteria after the selection process has commenced.",

    caseDetails: {
      caseName: "Hoshiyar Singh v. State of Himachal Pradesh & Others",
      court: "Himachal Pradesh High Court",
      bench: "Justice Jiya Lal Bhardwaj",
      decisionDate: "30 July 2026"
    },

    disclaimer:
      "This article provides an editorial summary of the Himachal Pradesh High Court's judgment and is intended solely for informational purposes."
  },
  {
    slug: "story-10",

    title:
      "Bombay High Court Holds Supreme Court's One-Time Attendance Relief Applies to Law Students Across States and Semesters",

    category: "Bombay High Court",

    publishedAt: "2026-08-12T21:00:00+05:30",

    readTime: "6 min read",

    excerpt:
      "The Bombay High Court has held that the Supreme Court's one-time attendance relief for the 2025-26 academic session applies uniformly to eligible law students across all States and semesters, preventing universities from imposing additional restrictions.",

    image: "/images/story10.jpeg",

    sections: [
      {
        title: "Background",

        content: [
          "The Bombay High Court examined a dispute involving 41 law students from ILS Law College, Pune, who had been barred from appearing in their semester examinations because of attendance shortages ranging from 46% to 54.37%. Although the students had submitted their examination forms, the college withheld their admit cards and declined to condone the shortage under the applicable university ordinances.",

          "The students approached the High Court relying on the Delhi High Court's judgment in Re: Courts on Its Own Motion in Re: Suicide Committed by Sushant Rohilla, Law Student of I.P. University. During the pendency of the proceedings, however, the Supreme Court issued a series of orders concerning the operation of the Delhi High Court's judgment and eventually granted one-time relief to students belonging to the 2025-26 academic session."
        ]
      },

      {
        title: "Supreme Court Relief Cannot Be Restricted",

        content: [
          "The principal issue before the Bombay High Court was whether the Supreme Court's order dated July 21, 2026, could be restricted to particular categories of students, academic years or territorial jurisdictions.",

          "A Division Bench comprising Justice R.I. Chagla and Justice Farhan P. Dubash rejected such an interpretation and held that the Supreme Court had created an objective class of students entitled to one-time protection without imposing any territorial limitation."
        ]
      },

      {
        title: "Relief Available Across States and Semesters",

        content: [
          "The Court clarified that educational institutions and universities could not limit the benefit only to final-year students or insist that students must have independently approached a court to claim the benefit.",

          "The Bench observed that the Supreme Court's order did not distinguish between students studying in different semesters and did not restrict its operation to students falling within the territorial jurisdiction of the Delhi High Court. Consequently, the one-time protection extended to eligible students across States and academic levels."
        ]
      },

      {
        title: "Article 142 Directions Are Binding Nationwide",

        content: [
          "The High Court emphasised that directions issued by the Supreme Court under Article 142 of the Constitution are binding throughout the country and cannot be narrowed by universities or colleges through additional eligibility requirements.",

          "The Bench also clarified that implementing the Supreme Court's subsequent directions did not require any reference to a larger Bench."
        ]
      },

      {
        title: "Court Leaves Larger Attendance Issue Open",

        content: [
          "Importantly, the Court clarified that its judgment should not be interpreted as an endorsement of the Delhi High Court's ruling in the Sushant Rohilla case as a binding precedent in Maharashtra. According to the Court, the Delhi High Court's decision merely formed part of the factual background that ultimately led to the Supreme Court's intervention.",

          "The Bench deliberately left unresolved the broader question concerning the interpretation of attendance requirements under legal education regulations and university ordinances, indicating that those issues could be decided in an appropriate future case."
        ]
      },

      {
        title: "Decision",

        content: [
          "The High Court directed that the examination results and academic progression of students who had already appeared pursuant to interim orders should be given full effect.",

          "For students who had not received interim protection, the Court directed the college and the university to conduct supplementary examinations within six weeks so that eligible students could continue into the 2026-27 academic session without losing an academic year."
        ]
      }
    ],

    quote: {
      text:
        "The Supreme Court's one-time attendance relief applies uniformly to eligible law students across States and semesters and cannot be restricted by universities.",
      author: "Bombay High Court"
    },

    highlightsTitle: "Key Takeaways",

    highlights: [
      {
        title: "Nationwide Application",
        description:
          "The Supreme Court's July 21, 2026 order applies to eligible law students across all States."
      },
      {
        title: "Not Limited to Final-Year Students",
        description:
          "Universities cannot restrict the benefit only to students in the final year of their law course."
      },
      {
        title: "Article 142 Is Binding",
        description:
          "Directions issued by the Supreme Court under Article 142 are binding on colleges and universities across the country."
      },
      {
        title: "No Need for Separate Litigation",
        description:
          "Students do not have to independently approach a court to claim the benefit if they fall within the class protected by the Supreme Court."
      }
    ],

    legalSignificance:
      "The judgment reinforces the nationwide binding nature of Supreme Court directions issued under Article 142 and prevents educational institutions from introducing additional eligibility requirements that are absent from a Supreme Court order. It also protects students from losing an academic year because of differing interpretations of attendance rules.",

    caseDetails: {
      caseName:
        "Aniruddha Gaurav Gursal & Anr. v. State of Maharashtra & Ors.",
      court: "Bombay High Court",
      bench: "Justice R.I. Chagla and Justice Farhan P. Dubash",
      decisionDate: "12 August 2026",
      caseNumber:
        "Writ Petition No. 6027 of 2026 with Interim Application No. 5058 of 2026"
    },

    disclaimer:
      "This article is an editorial summary of the Bombay High Court's judgment and is intended solely for informational and educational purposes."
  },
  {
    slug: "story-11",

    title:
      "Supreme Court: State Cannot Delegate Power to Refer Working Journalists' Dues Disputes to Labour Court",

    category: "Supreme Court",

    publishedAt: "2026-08-12T19:00:00+05:30",

    readTime: "6 min read",

    excerpt:
      "The Supreme Court has ruled that State Governments cannot delegate their statutory power under Section 17(2) of the Working Journalists Act to refer disputes relating to unpaid dues to Labour Courts.",

    image: "/images/story11.png",

    sections: [
      {
        title: "Background of the Case",

        content: [
          "The Supreme Court has held that the State Government cannot delegate its statutory power under Section 17(2) of the Working Journalists and Other Newspaper Employees (Conditions of Service) and Miscellaneous Provisions Act, 1955 to refer disputes concerning unpaid dues to a Labour Court.",

          "A Division Bench comprising Justice Dipankar Datta and Justice Sheel Nagu observed that while Section 17(1) expressly permits delegation of recovery powers to a specified authority, the statute contains no similar provision authorizing delegation of the power to make a reference under Section 17(2).",

          "The proceedings arose from claims filed by newspaper employees and journalists' unions seeking recovery of unpaid dues from their employers, including the Dainik Bhaskar Group and All India Reporter Private Limited."
        ]
      },

      {
        title: "Challenge to Maharashtra Government's Delegation",

        content: [
          "The dispute centered on a notification issued on May 11, 2016, by the Industries, Energy and Labour Department of the Government of Maharashtra.",

          "Through this notification, the State Government delegated its powers under Section 17(2) to Additional and Deputy Commissioners of Labour, authorizing them to make references to Labour Courts.",

          "The employers challenged the validity of the notification, arguing that the statutory power under Section 17(2) could not be delegated."
        ]
      },

      {
        title: "Supreme Court Examines the Structure of Section 17",

        content: [
          "The Court carefully examined the framework of Section 17 and noted that sub-sections (1), (2), and (3) establish separate stages in the process for recovering dues.",

          "Under Section 17(1), the State Government may authorize a specified authority to exercise powers relating to the recovery of amounts due to newspaper employees.",

          "However, once the employer disputes the claim, the process moves to Section 17(2), which specifically requires the State Government itself to determine whether a dispute exists that requires adjudication by a Labour Court."
        ]
      },

      {
        title: "Delegation Under Section 17(1) Cannot Be Extended to Section 17(2)",

        content: [
          "The Bench relied on the legal principle 'expressio unius est exclusio alterius,' which means that the express inclusion of one thing implies the exclusion of another.",

          "The Court observed that Parliament deliberately included a delegation mechanism under Section 17(1) but omitted any similar provision under Section 17(2).",

          "Accordingly, the Court held that the delegation expressly permitted under Section 17(1) could not be expanded by implication to include the separate statutory function under Section 17(2)."
        ]
      },

      {
        title: "State Government Must Independently Form Its Satisfaction",

        content: [
          "The Supreme Court emphasized that making a reference to a Labour Court is not a purely administrative or mechanical exercise.",

          "Before making a reference, the State Government must independently evaluate the available material and determine whether a genuine dispute exists between the employee and the employer.",

          "Although authorities exercising delegated powers under Section 17(1) may collect relevant material, the final satisfaction required under Section 17(2) must be that of the State Government itself."
        ]
      },

      {
        title: "Article 142 Used to Protect Pending Proceedings",

        content: [
          "While declaring the delegation invalid, the Supreme Court also considered the practical consequences of its decision on numerous pending and completed proceedings.",

          "To prevent widespread disruption, the Court exercised its extraordinary powers under Article 142 of the Constitution and directed the Government of Maharashtra to independently reconsider all affected references within six months.",

          "The Court further clarified that where a fresh reference is made, proceedings before the Labour Court or the High Court may continue from the stage already reached rather than beginning again from the start."
        ]
      },

      {
        title: "Completed Proceedings Will Remain Unaffected",

        content: [
          "The Court also protected proceedings that had already concluded where the validity of the reference had never been challenged.",

          "According to the Bench, this approach strikes a balance between maintaining statutory compliance and preventing unnecessary hardship for employees and employers who had already participated in lengthy litigation."
        ]
      }
    ],

    quote: {
      text:
        "The State Government cannot delegate its statutory power under Section 17(2) to make a reference to a Labour Court when the statute itself does not authorize such delegation.",
      author: "Supreme Court of India"
    },

    highlightsTitle: "Key Takeaways",

    highlights: [
      {
        title: "No Delegation Under Section 17(2)",
        description:
          "The State Government cannot delegate its power to refer disputes under Section 17(2) of the Working Journalists Act."
      },

      {
        title: "Section 17(1) and 17(2) Are Distinct",
        description:
          "Delegation expressly permitted under Section 17(1) cannot automatically extend to Section 17(2)."
      },

      {
        title: "Independent Satisfaction Is Mandatory",
        description:
          "The State Government must independently determine whether a dispute requires adjudication by a Labour Court."
      },

      {
        title: "Article 142 Relief Granted",
        description:
          "The Supreme Court used its constitutional powers to preserve pending proceedings affected by the invalid delegation."
      }
    ],

    legalSignificance:
      "The judgment reinforces an important principle of administrative law: statutory powers can only be delegated when the legislature expressly permits such delegation. The decision also demonstrates how Article 142 can be used to balance legal correctness with practical justice.",

    caseDetails: {
      caseName:
        "Sudhir & Ors. v. Head of Human Resource, Dainik Bhaskar Group (D.B. Corp. Ltd.) & Ors.",

      court: "Supreme Court of India",

      bench: "Justice Dipankar Datta and Justice Sheel Nagu",

      decisionDate: "12 August 2026",

      citation: "2026 INSC 834",

      disclaimer:
        "This article is intended for informational and educational purposes only and should not be construed as legal advice. Readers should consult the official judgment for authoritative guidance."
    }
  },
  {
    slug: "story-12",

    title:
      "Supreme Court Stays Allahabad High Court Proceedings in Rahul Gandhi Disproportionate Assets Case; Restrains CBI and ED From Filing Reports",

    category: "Supreme Court",

    publishedAt: "2026-08-17T13:00:00+05:30",

    readTime: "7 min read",

    excerpt:
      "The Supreme Court has directed the Allahabad High Court to defer further proceedings in the disproportionate assets matter involving Rahul Gandhi and restrained the CBI, ED and other authorities from submitting inquiry reports pursuant to the High Court's earlier directions.",

    image: "/images/story12.png",

    featured: true,

    sections: [
      {
        title: "Background of the Case",

        content: [
          "The Supreme Court was hearing a Special Leave Petition filed by Rahul Gandhi challenging an order of the Allahabad High Court directing investigative agencies to verify allegations of disproportionate assets levelled against him.",

          "The complaint was filed by S. Vignesh Shishir, a BJP worker from Karnataka, who alleged that Rahul Gandhi possessed assets disproportionate to his known sources of income.",

          "A Bench comprising Chief Justice Surya Kant, Justice Joymalya Bagchi and Justice V. Mohana issued notice to the respondents while considering the challenge."
        ]
      },

      {
        title: "Supreme Court Stays Further Proceedings",

        content: [
          "Pending further consideration of the petition, the Supreme Court directed that no reports should be submitted by the CBI, the Enforcement Directorate or any other authority to the Allahabad High Court pursuant to the impugned order.",

          "The Court also directed the Allahabad High Court to defer the next date of hearing until further orders."
        ]
      },

      {
        title: "Natural Justice Concerns Raised by the Bench",

        content: [
          "During the hearing, the Bench questioned whether a court could direct an investigative agency to undertake an inquiry without first providing the affected party an opportunity to be heard.",

          "Chief Justice Surya Kant observed that investigative agencies possess independent statutory authority to initiate proceedings when prima facie material exists. However, a different legal issue arises when the investigation is initiated because of a judicial direction.",

          "The Court indicated that the principles of natural justice may require an opportunity of hearing when judicial intervention compels an investigation."
        ]
      },

      {
        title: "Distinction Between Statutory Powers and Court-Directed Investigation",

        content: [
          "The Bench distinguished investigations initiated independently by statutory authorities from those undertaken pursuant to judicial directions.",

          "The Court observed that investigative agencies do not ordinarily require permission from an accused before registering a case when the law authorizes such action.",

          "However, the judges noted that a court-directed inquiry raises separate questions concerning procedural fairness, separation of powers and the requirement to hear the affected party."
        ]
      },

      {
        title: "Arguments Presented Before the Court",

        content: [
          "Senior Advocate Kapil Sibal, appearing for Rahul Gandhi, challenged the Allahabad High Court's directions and also sought the transfer of the proceedings.",

          "Additional Solicitor General S.V. Raju, appearing for the CBI, submitted that no FIR had been registered and that the agency had merely undertaken verification of the complaint.",

          "Appearing in person, S. Vignesh Shishir argued that the proceedings remained at the pre-FIR stage and relied upon the Supreme Court's decision in CBI v. Devendra Ammal & Ors. to contend that an accused does not ordinarily have a right to be heard at that stage."
        ]
      },

      {
        title: "Additional Issues Raised During the Hearing",

        content: [
          "During the proceedings, Kapil Sibal also raised concerns regarding information appearing in the media despite the matter allegedly involving sealed-cover proceedings.",

          "The broader dispute also includes separate allegations concerning Rahul Gandhi's citizenship, including claims relating to a company incorporated in the United Kingdom, corporate records and earlier complaints submitted to the Ministry of Home Affairs.",

          "The Supreme Court clarified that the present proceedings were confined to the challenge against the Allahabad High Court's directions relating to the disproportionate assets complaint."
        ]
      },

      {
        title: "Interim Directions of the Supreme Court",

        content: [
          "The Supreme Court issued notice to the respondents, restrained investigative agencies from submitting inquiry reports to the Allahabad High Court, directed the High Court to defer further proceedings and ordered service upon the respondent through dasti.",

          "The Court has not yet examined the merits of the allegations or finally adjudicated the disproportionate assets complaint."
        ]
      }
    ],

    quote: {
      text:
        "When an investigation is initiated pursuant to a judicial direction, the principles of natural justice may require consideration of whether the affected party should first be heard.",
      author: "Supreme Court of India"
    },

    highlightsTitle: "Key Takeaways",

    highlights: [
      {
        title: "High Court Proceedings Deferred",
        description:
          "The Allahabad High Court has been directed to defer further proceedings until further orders."
      },

      {
        title: "CBI and ED Restrained",
        description:
          "Investigative agencies have been prohibited from submitting inquiry reports pursuant to the High Court's order."
      },

      {
        title: "Natural Justice Question Raised",
        description:
          "The Supreme Court questioned whether a court can direct an investigation without hearing the affected party."
      },

      {
        title: "No FIR Registered",
        description:
          "The CBI informed the Court that it had only verified the complaint and had not registered an FIR."
      }
    ],

    legalSignificance:
      "The case raises important questions concerning the limits of judicially directed investigations, the application of natural justice principles at the pre-investigation stage and the distinction between an agency's independent statutory powers and investigations initiated through court orders.",

    caseDetails: {
      caseName: "Rahul Gandhi v. S. Viginesh Shishir & Ors.",
      court: "Supreme Court of India",
      bench:
        "Chief Justice Surya Kant, Justice Joymalya Bagchi and Justice V. Mohana",
      decisionDate: "17 August 2026",
      caseNumber: "Diary No. 47728/2026"
    },

    disclaimer:
      "This article is intended solely for informational and educational purposes and should not be construed as legal advice. Readers should refer to the official order for authoritative guidance."
  },
  {
    slug: "story-13",

    title:
      "Allahabad HC: Order Framing Charges Under NIA Act Is Appealable; Article 227 Petition Before Single Judge Not Maintainable",

    category: "Allahabad High Court",

    publishedAt: "2026-08-19T12:00:00+05:30",

    readTime: "6 min read",

    excerpt:
      "The Allahabad High Court has held that an order framing charges under the NIA Act is not an interlocutory order and can therefore be challenged through a statutory appeal under Section 21 of the Act rather than by filing a petition under Article 227 of the Constitution.",

    image: "/images/story13.png",

    sections: [
      {
        title: "Background of the Case",

        content: [
          "The petitioner challenged an order passed by the Special Judge, NIA, Lucknow, framing charges under Section 121-A of the IPC in a case involving offences under the Official Secrets Act, 1923.",

          "Instead of filing an appeal under Section 21 of the National Investigation Agency Act, 2008, the petitioner invoked the supervisory jurisdiction of the High Court under Article 227 of the Constitution.",

          "The State opposed the petition, arguing that the NIA Act itself provides a specific appellate remedy against orders passed by Special Courts."
        ]
      },

      {
        title: "Whether an Order Framing Charges Is an Interlocutory Order",

        content: [
          "The principal issue before the Court was whether an order framing charges falls within the expression 'interlocutory order' under Section 21 of the NIA Act.",

          "Section 21 permits appeals against any judgment, sentence or order of a Special Court except interlocutory orders.",

          "The Court held that the legal position is well settled and that an order framing charges cannot be treated as an interlocutory order."
        ]
      },

      {
        title: "Court Examines the Scope of Section 21",

        content: [
          "Justice Subhash Vidyarthi observed that Section 21 excludes only interlocutory orders from the appellate framework and does not restrict appeals solely to final orders.",

          "The Court clarified that it was unnecessary to determine whether an order framing charges is a final order because the statute itself only excludes interlocutory orders.",

          "Accordingly, an order framing charges remains appealable under the NIA Act."
        ]
      },

      {
        title: "V.C. Shukla Cannot Be Applied Mechanically",

        content: [
          "The petitioner relied upon the Supreme Court's decision in V.C. Shukla v. State to argue that an order framing charges could be considered interlocutory.",

          "The High Court rejected the argument, noting that V.C. Shukla was decided under the Special Courts Act, 1979 and not under the NIA Act.",

          "The Court emphasized that judicial precedents must be interpreted in the context of the issues they actually decide and should not be treated as statutory provisions."
        ]
      },

      {
        title: "Differences Between the Special Courts Act and the NIA Act",

        content: [
          "Relying on the Constitution Bench judgment in P.S. Sathappan v. Andhra Bank Ltd., the Court highlighted significant differences between the two statutes.",

          "Under the repealed Special Courts Act, Special Courts were presided over by sitting High Court Judges and appeals lay directly before the Supreme Court.",

          "Under the NIA Act, however, Special Courts are presided over by Sessions Judges, while appeals lie before a Division Bench of the High Court."
        ]
      },

      {
        title: "Article 227 Cannot Be Used to Bypass a Statutory Appeal",

        content: [
          "The Court held that permitting a challenge under Article 227 despite the availability of a statutory appeal would allow a Single Judge to examine an order that the legislature intended to be reviewed by a Division Bench.",

          "Such an approach, according to the Court, would violate the statutory scheme and principles of judicial discipline.",

          "The High Court therefore dismissed the petition while granting liberty to the petitioner to file an appeal under Section 21 of the NIA Act before the appropriate Division Bench."
        ]
      }
    ],

    quote: {
      text:
        "An order framing charges is not an interlocutory order.",
      author: "Allahabad High Court"
    },

    highlightsTitle: "Key Takeaways",

    highlights: [
      {
        title: "Charge Orders Are Appealable",
        description:
          "An order framing charges under the NIA Act is not an interlocutory order and can be challenged through a statutory appeal."
      },

      {
        title: "Section 21 Interpreted Broadly",
        description:
          "Section 21 excludes only interlocutory orders and does not limit appeals exclusively to final orders."
      },

      {
        title: "V.C. Shukla Distinguished",
        description:
          "The Court held that the interpretation adopted under the Special Courts Act cannot automatically be applied to the NIA Act."
      },

      {
        title: "Article 227 Not Maintainable",
        description:
          "A petition under Article 227 cannot be used to bypass the appellate mechanism specifically provided under the NIA Act."
      }
    ],

    legalSignificance:
      "The judgment reinforces the principle that statutory appellate remedies must ordinarily be exhausted before invoking the High Court's supervisory jurisdiction. It also clarifies that orders framing charges under the NIA Act are appealable and cannot be classified as merely interlocutory orders.",

    caseDetails: {
      caseName:
        "Satendra Siwal v. State of U.P. Thru. Prin. Secy. Home Lko. and 2 Others",

      court: "Allahabad High Court, Lucknow Bench",

      bench: "Justice Subhash Vidyarthi",

      decisionDate: "19 August 2026",

      citation: "2026:AHC-LKO:56814"
    },

    disclaimer:
      "This article is intended for informational and educational purposes only and should not be construed as legal advice. Readers should consult the official judgment for authoritative guidance."
  }




];


