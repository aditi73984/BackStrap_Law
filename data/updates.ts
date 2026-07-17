export interface Update {
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
  };

  disclaimer?: string;
}



export const updates: Update[] = [
    {
        slug: "update-1",

        title:
            "Delhi High Court Rejects Bail Plea of Accused in 2008 Delhi Blasts Case, Cites National Security",

        category: "Delhi High Court",

        publishedAt: "2026-07-08T09:30:00+05:30",

        readTime: "6 min read",

        excerpt:
            "The Delhi High Court has refused bail to an accused in the 2008 Delhi serial blasts case, holding that national security and the sovereignty of the country outweigh personal liberty where the two are in conflict.",

        image: "/images/update1.png",

        featured: true,

        sections: [
            {
                title: "Background",

                content: [
                    "The case concerns Mansoor Asghar Peerbhoy, an accused in the 2008 Delhi serial blasts that resulted in the deaths of 26 people and injuries to more than 130 others. The prosecution alleges that he played a significant role in facilitating the attacks through technical expertise and cyber operations.",

                    "Investigators claimed that an email claiming responsibility for the blasts was sent using an unsecured Wi-Fi network shortly before the explosions and that forensic evidence linked electronic devices recovered from the accused to the conspiracy."
                ]
            },

            {
                title: "Court's Analysis",

                content: [
                    "A Division Bench comprising Justice Prathiba M. Singh and Justice Madhu Jain held that the allegations, the evidence placed on record and the statutory restrictions under the Unlawful Activities (Prevention) Act did not justify the grant of bail.",

                    "The Court observed that prolonged incarceration alone could not override statutory restrictions in terrorism-related prosecutions, particularly when the accusations appeared prima facie true."
                ]
            },

            {
                title: "National Security Considerations",

                content: [
                    "The Bench distinguished the case from ordinary criminal prosecutions by emphasising the gravity of the alleged offences, the scale of loss of life and the appellant's alleged technical role within the banned organisation.",

                    "The Court also noted that the trial had reached its concluding stage and that releasing the accused at such a crucial juncture could adversely affect the proceedings."
                ]
            },

            {
                title: "Decision",

                content: [
                    "The Delhi High Court dismissed the bail application and directed the Trial Court to complete the proceedings within the timeline prescribed by the Supreme Court."
                ]
            }
        ],

        quote: {
            text:
            "Where personal liberty conflicts with national security and the sovereignty of the nation, the latter must prevail.",
            author: "Delhi High Court"
        },

        highlightsTitle: "Key Takeaways",

        highlights: [
            {
                title: "Bail Refused",
                description:
                    "The Court found that statutory restrictions under the UAPA continued to operate."
            },
            {
                title: "National Security",
                description:
                    "Security considerations outweighed the claim of prolonged incarceration."
            },
            {
                title: "Prima Facie Evidence",
                description:
                    "Electronic and forensic material was sufficient at the bail stage."
            },
            {
                title: "Trial Near Completion",
                description:
                    "The Court considered the advanced stage of the trial while refusing bail."
            }
        ],

        legalSignificance:
            "The decision reiterates that in prosecutions involving terrorism, courts must carefully balance individual liberty against national security while applying the statutory restrictions contained in the UAPA.",

        caseDetails: {
            caseName: "Mansoor Asghar Peerbhoy v. State (Government of NCT of Delhi)",
            court: "Delhi High Court",
            bench: "Justice Prathiba M. Singh & Justice Madhu Jain",
            decisionDate: "7 July 2026"
        },

        disclaimer:
            "This article provides an editorial summary of the Delhi High Court's decision and is intended solely for informational purposes."
    },

    {
        slug: "update-2",

        title:
            "Madras High Court Orders Re-Export of Illegal Waste Imports, Calls 'Waste Colonialism' Unacceptable",

        category: "Madras High Court",

        publishedAt: "2026-07-08T11:15:00+05:30",

        readTime: "6 min read",

        excerpt:
            "The Madras High Court has held that illegally imported foreign municipal waste must be returned to its country of origin, observing that India cannot become a dumping ground for waste generated by other nations.",

        image: "/images/update2.png",

        sections: [
            {
                title: "Background",

                content: [
                    "The petitions were filed by two paper manufacturing companies seeking permission either to re-export imported municipal waste consignments to Dubai or dispose of them within India after customs authorities found that the shipments contained prohibited municipal solid waste instead of recyclable waste paper.",

                    "Following adjudication, customs authorities confiscated the consignments, imposed penalties and directed that the waste be returned to the countries from which it originated."
                ]
            },

            {
                title: "Court's Observations",

                content: [
                    "Justice D. Bharatha Chakravarthy held that Rule 15(2) of the Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016 permits only re-export to the country of origin and does not authorise diversion to a third country.",

                    "The Court further observed that knowingly importing prohibited municipal waste could also attract criminal liability under Section 152 of the Bharatiya Nyaya Sanhita."
                ]
            },

            {
                title: "Environmental Concerns",

                content: [
                    "The Bench rejected the request to dispose of the waste within India, observing that such a course would defeat the very object of environmental legislation and India's obligations under the Basel Convention.",

                    "Describing attempts by developed nations to shift their waste burden onto developing countries as 'waste colonialism', the Court stressed that India cannot become a global dumping ground."
                ]
            },

            {
                title: "Decision",

                content: [
                    "The High Court dismissed all writ petitions, upheld the customs authorities' orders directing re-export of the waste to its country of origin, and refused waiver of detention, storage and demurrage charges."
                ]
            }
        ],

        quote: {
            text:
            "India cannot be treated as a dumping ground for municipal waste generated by other nations.",
            author: "Madras High Court"
        },

        highlightsTitle: "Key Takeaways",

        highlights: [
            {
                title: "Re-export Mandatory",
                description:
                    "Illegal waste imports must be returned to their country of origin."
            },
            {
                title: "No Third Country",
                description:
                    "The law does not permit diversion of prohibited waste to another country."
            },
            {
                title: "Waste Colonialism",
                description:
                    "The Court condemned attempts to shift environmental burdens onto developing nations."
            },
            {
                title: "Possible Criminal Action",
                description:
                    "Intentional illegal imports may attract prosecution under the Bharatiya Nyaya Sanhita."
            }
        ],

        legalSignificance:
            "The judgment reinforces India's environmental obligations under domestic law and the Basel Convention while affirming that environmental protection cannot be sacrificed for commercial convenience.",

        caseDetails: {
            caseName:
            "M/s Sripathi Paper and Boards Private Limited v. Commissioner of Customs & Others",
            court: "Madras High Court",
            bench: "Justice D. Bharatha Chakravarthy",
            decisionDate: "19 June 2026"
        },

        disclaimer:
            "This article is intended solely for informational purposes and summarises the Madras High Court's judgment."
    },

    {
        slug: "update-3",

        title:
            "Karnataka High Court Grants Bail to 2020 Bengaluru Riots Accused After Five Years in Custody",

        category: "Karnataka High Court",

        publishedAt: "2026-07-08T12:00:00+05:30",

        readTime: "5 min read",

        excerpt:
            "The Karnataka High Court has granted bail to an accused in the 2020 Bengaluru riots case after considering his prolonged incarceration, parity with co-accused and the likely delay in conclusion of the trial.",

        image: "/images/update3.png",

        sections: [
            {
                title: "Background",

                content: [
                    "The appeal arose from the prosecution relating to the 2020 Bengaluru riots investigated by the National Investigation Agency. The appellant had remained in custody since August 2020 and challenged the Special Court's refusal to grant bail."
                ]
            },

            {
                title: "Court's Analysis",

                content: [
                    "The Division Bench noted that several similarly placed co-accused had already been granted bail by both the Supreme Court and the Karnataka High Court.",

                    "The Court also observed that the prosecution intended to examine 267 witnesses, making it evident that the trial would not conclude in the near future."
                ]
            },

            {
                title: "Parity and Delay",

                content: [
                    "The Bench held that prolonged incarceration exceeding five years, coupled with the principle of parity and anticipated delay in completion of trial, justified granting bail despite the seriousness of the allegations."
                ]
            },

            {
                title: "Decision",

                content: [
                    "The High Court allowed the appeal, granted bail subject to stringent conditions and set aside the Special Court's earlier order refusing bail."
                ]
            }
        ],

        quote: {
            text:
            "Parity with similarly placed co-accused and prolonged incarceration remain important considerations while deciding bail.",
            author: "Karnataka High Court"
        },

        highlightsTitle: "Key Takeaways",

        highlights: [
            {
                title: "Five Years in Custody",
                description:
                    "Extended incarceration weighed heavily in favour of bail."
            },
            {
                title: "Parity Applied",
                description:
                    "Several co-accused had already secured similar relief."
            },
            {
                title: "Delayed Trial",
                description:
                    "The large number of witnesses indicated that the trial would take considerable time."
            },
            {
                title: "Conditional Bail",
                description:
                    "Strict conditions were imposed while granting release."
            }
        ],

        legalSignificance:
            "The decision highlights that prolonged incarceration and parity with co-accused continue to play a significant role in bail jurisprudence even in prosecutions involving serious offences.",

        caseDetails: {
            caseName: "Fairoz Pasha v. National Investigation Agency",
            court: "Karnataka High Court",
            bench: "Justice Mohammad Nawaz & Justice G. Basavaraja",
            decisionDate: "3 June 2026"
        },

        disclaimer:
            "This article summarises the judgment for informational purposes only."
    },

    {
        slug: "update-4",

        title:
            "MP High Court Refuses to Halt Disciplinary Proceedings Against Judge Facing Misconduct Allegations",

        category: "Madhya Pradesh High Court",

        publishedAt: "2026-07-08T13:30:00+05:30",

        readTime: "6 min read",

        excerpt:
            "The Madhya Pradesh High Court has held that disciplinary proceedings against a judicial officer need not be stayed merely because a parallel criminal prosecution is pending.",

        image: "/images/update4.png",

        sections: [
            {
                title: "Background",

                content: [
                    "The petitioner, a judicial officer, challenged a departmental charge-sheet alleging misconduct relating to the preparation of an acquittal judgment before the underlying criminal trial had concluded.",

                    "He argued that the departmental inquiry should remain stayed until completion of the criminal prosecution."
                ]
            },

            {
                title: "Court's Analysis",

                content: [
                    "The Division Bench reiterated that courts ordinarily do not interfere at the stage of issuance of a charge-sheet unless exceptional circumstances exist.",

                    "It further held that the mere pendency of a criminal prosecution does not automatically require disciplinary proceedings to be stayed."
                ]
            },

            {
                title: "Integrity of Judiciary",

                content: [
                    "The Court emphasised that allegations concerning judicial integrity require prompt examination through departmental proceedings and that public confidence in the justice delivery system must be preserved.",

                    "The Bench also found no material prejudice caused by the delay in issuing the charge-sheet."
                ]
            },

            {
                title: "Decision",

                content: [
                    "Finding no legal infirmity in the initiation of disciplinary proceedings, the High Court dismissed the writ petition while clarifying that its observations would not influence the disciplinary inquiry."
                ]
            }
        ],

        quote: {
            text:
            "The mere existence of a parallel criminal prosecution does not automatically justify staying departmental proceedings.",
            author: "Madhya Pradesh High Court"
        },

        highlightsTitle: "Key Takeaways",

        highlights: [
            {
                title: "No Automatic Stay",
                description:
                    "Departmental proceedings may continue despite a pending criminal case."
            },
            {
                title: "Charge-sheet Stage",
                description:
                    "Courts generally avoid interfering at the initial stage of disciplinary proceedings."
            },
            {
                title: "Judicial Integrity",
                description:
                    "Allegations affecting the judiciary require timely institutional scrutiny."
            },
            {
                title: "Case-Specific Test",
                description:
                    "Whether proceedings should be stayed depends on the facts of each case."
            }
        ],

        legalSignificance:
            "The judgment reaffirms that disciplinary proceedings and criminal prosecutions operate in distinct legal spheres and that maintaining public confidence in judicial institutions justifies continuation of departmental inquiries.",

        caseDetails: {
            caseName: "VSR v. State of Madhya Pradesh & Others",
            court: "Madhya Pradesh High Court",
            bench: "Justice Anand Pathak & Justice B.P. Sharma",
            decisionDate: "24 June 2026"
        },

        disclaimer:
            "This article provides an editorial summary of the High Court's judgment and is intended solely for informational purposes."
    },


    {
        slug: "update-5",

        title:
            "Assam Assembly Clears Uniform Civil Code Bill Focused on Registration and Legal Records of Family Relations",

        category: "Legislation",

        publishedAt: "2026-07-14T10:15:00+05:30",

        readTime: "6 min read",

        excerpt:
            "The Assam Legislative Assembly has passed a Uniform Civil Code Bill introducing a common civil framework for marriage, divorce, succession and domestic relationships, with a strong focus on registration and legal documentation.",

        image: "/images/update5.png",

        sections: [
            {
                title: "Overview",

                content: [
                    "The Assam Legislative Assembly has passed a Uniform Civil Code (UCC) Bill, making Assam the first Northeastern state to introduce a common civil framework governing matters such as marriage, divorce, succession and domestic relationships.",

                    "The proposed legislation places significant emphasis on registration and legal documentation of family relationships with the objective of creating greater certainty in civil status and family law administration."
                ]
            },

            {
                title: "Key Provisions",

                content: [
                    "The Bill introduces compulsory registration of marriages, divorces, decrees declaring marriages void and live-in relationships. It also proposes a broader statutory definition of 'child' that includes adopted children as well as children born through surrogacy, assisted reproductive technology and outside traditional marriages.",

                    "In addition, the legislation seeks to prohibit polygamy and establish common civil rules governing family relationships while preserving constitutional protections available to Scheduled Tribes."
                ]
            },

            {
                title: "Constitutional Debate",

                content: [
                    "Mandatory registration of live-in relationships is expected to generate debate regarding privacy, dignity and decisional autonomy under Article 21 of the Constitution. At the same time, supporters argue that formal documentation strengthens legal protection for women and children while reducing evidentiary disputes.",

                    "The exemption granted to Scheduled Tribes recognised under Article 342 also raises important questions regarding the balance between legal uniformity and constitutional protection of indigenous customs."
                ]
            },

            {
                title: "Legislative Significance",

                content: [
                    "The Assam legislation represents another step in the growing trend of state-specific Uniform Civil Code frameworks. It may contribute to the wider national discussion on whether civil law reform should emerge through individual state legislation or a comprehensive national framework."
                ]
            }
        ],

        quote: {
            text:
            "The proposed framework seeks to place legally verifiable documentation at the centre of family relationships and civil status.",
            author: "Assam Uniform Civil Code Bill"
        },

        highlightsTitle: "Key Highlights",

        highlights: [
            {
                title: "Mandatory Registration",
                description:
                    "Marriage, divorce, live-in relationships and declarations of nullity will require formal registration."
            },
            {
                title: "Expanded Definition of Child",
                description:
                    "The Bill recognises adopted children and those born through surrogacy, assisted reproductive technology and outside traditional marriage."
            },
            {
                title: "Common Civil Framework",
                description:
                    "The legislation introduces uniform rules governing family relationships and prohibits polygamy."
            },
            {
                title: "Scheduled Tribe Exemption",
                description:
                    "Constitutionally recognised tribal communities remain outside the scope of the proposed Code."
            }
        ],

        legalSignificance:
            "The Bill represents an important legislative development in India's ongoing debate on Uniform Civil Codes. By prioritising registration and documentary certainty while preserving constitutional protections for tribal communities, it raises significant questions regarding privacy, equality, federalism and personal law reform.",

        caseDetails: {
            caseName: "Assam Uniform Civil Code Bill, 2026",
            court: "Assam Legislative Assembly",
            bench: "Legislative Measure",
            decisionDate: "14 July 2026"
        },

        disclaimer:
            "This article summarises the provisions of the proposed legislation for informational purposes only. The legal position may evolve as the legislation receives further approvals, notifications and judicial interpretation."
    },

    
];




