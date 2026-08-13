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

    image: "/images/story10.png",

    featured: true,

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




];


