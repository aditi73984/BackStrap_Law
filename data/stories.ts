export interface Story {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  featured?: boolean;
  content: string[];
}

export const stories: Story[] = [
  {
    slug: "story-1",

    title: "Supreme Court Adopts Hybrid Work Policy, Introduces Carpooling and Virtual Hearings",

    category: "Supreme Court",

    date: "15 May 2026",

    excerpt:
        "The Supreme Court has introduced a hybrid work policy, expanded virtual hearings for specified matters, and encouraged carpooling among judges as part of new administrative measures aimed at improving efficiency and sustainability.",

    image: "/images/story1.png",

    featured: true,

    content: [
        "The Supreme Court of India has introduced a revised set of administrative measures through a circular issued on May 15, 2026, following recent directions from the Department of Personnel and Training. The changes are aimed at streamlining court operations, encouraging digital proceedings, and promoting environmentally conscious practices.",

        "According to the circular, all cases listed on miscellaneous days—including Mondays and Fridays—as well as matters scheduled during the Court's partial working days, will be heard exclusively through video conferencing. To support the transition, the Registry has been directed to ensure that hearing links are shared promptly, video conferencing facilities remain reliable, and technical assistance is readily available to prevent interruptions during proceedings.",

        "The circular also outlines a sustainability initiative under which the judges of the Supreme Court have agreed to encourage carpooling wherever feasible in an effort to reduce fuel consumption.",

        "In addition, the Court has introduced a work-from-home arrangement for Registry employees. Under the new policy, up to 50% of the staff in each branch or section may work remotely for a maximum of two days a week, provided that adequate personnel remain present in the office to ensure the uninterrupted functioning of judicial and administrative work. Concerned Registrars have been instructed to prepare weekly duty rosters before the start of each week to maintain smooth operations.",

        "The circular further clarifies that these work-from-home provisions are subject to administrative requirements. If the functioning of any branch or section demands full physical attendance, the competent authority may revise or withdraw the remote working arrangement as necessary."
    ],
  },

  {
    slug: "story-2",

    title: "Fresh Section 21 Notice Mandatory to Initiate New Arbitration After Award Is Set Aside: Bombay High Court",

    category: "Bombay High Court",

    date: "07 July 2026",

    excerpt:
        "The Bombay High Court has held that when an arbitral award is set aside under Section 34 of the Arbitration and Conciliation Act, a fresh notice under Section 21 is mandatory before initiating a new round of arbitration.",

    image: "/images/story2.png",

    content: [
        "The Bombay High Court has ruled that when an arbitral award is set aside under Section 34 of the Arbitration and Conciliation Act, 1996, a party seeking to restart arbitration must first issue a fresh notice under Section 21 of the Act. The Court observed that this notice marks the commencement of new arbitral proceedings and is necessary for determining the limitation period. It rejected the argument that a party is required to directly file a petition under Section 11 within three years of the earlier award being set aside without first invoking arbitration through a fresh notice.",

        "The Court further explained that the benefit of exclusion of time available under Section 43(4) of the Arbitration and Conciliation Act can be claimed only when arbitration has been validly reinitiated by serving a fresh Section 21 notice.",

        "Addressing a separate issue, the High Court held that a court considering an application under Section 11 cannot automatically refer individuals who were never parties to the arbitration agreement. While questions relating to the involvement of non-signatories may, in appropriate cases, be decided by the arbitral tribunal, the referral court must first be satisfied that there is a prima facie intention to create a legal relationship binding such parties. The Court emphasized that considerations of fairness or convenience cannot compel arbitration in the absence of express or implied consent.",

        "Justice Arun R. Pedneker, deciding the commercial arbitration application, relied on the principles laid down in Harkisandas Tulshidas Pabari & Anr. v. Rajendra Anandrao Acharya & Ors. and reiterated that, unless the parties agree otherwise, arbitral proceedings commence on the date the respondent receives the notice issued under Section 21. Since the fresh notice in the present case had been served within three years of the earlier award being set aside, the Court held that the subsequent Section 11 application was also filed within the prescribed limitation period.",

        "The dispute originated from a partnership deed executed on December 9, 1985, between the applicants and Respondent Nos. 1 and 2. An arbitral award arising from that partnership was delivered on April 15, 2016, but was later set aside by the Bombay High Court under Section 34 on October 15, 2019.",

        "During the intervening period, Respondent Nos. 3 and 4 became partners under separate partnership deeds executed in 2009 using the same firm's name and assets. The applicants later initiated a fresh round of arbitration by issuing a Section 21 notice on March 8, 2024, followed by a Section 11 application filed on October 15, 2026, in which the later-inducted partners were also made parties.",

        "Respondent Nos. 1 and 2 argued that the application was barred by limitation, contending that the three-year period began from the date on which the earlier arbitral award was set aside. Respondent Nos. 3 and 4 separately challenged their inclusion in the proceedings, maintaining that they were not signatories to the original 1985 partnership deed and had been treated as third parties during the earlier arbitration.",

        "After excluding the period covered by the Supreme Court's COVID-19 limitation extensions, the High Court found that the Section 21 notice had been issued within the permissible period, making the Section 11 application maintainable.",

        "On the issue of non-signatories, the Court applied the principles laid down in Cox and Kings and Hindustan Petroleum Corporation Limited. It concluded that Respondent Nos. 3 and 4 neither participated in the original partnership agreement nor derived their rights or liabilities through the original contracting parties in a manner that would bind them to the arbitration agreement.",

        "Accordingly, the Court allowed the application against Respondent Nos. 1 and 2 and referred the disputes between the original parties to arbitration. However, it dismissed the proceedings against Respondent Nos. 3 and 4.",

        "The Court appointed Justice Sadhana Jadhav (Retd.), former Judge of the Bombay High Court, as the sole arbitrator to adjudicate the disputes. The arbitration will proceed in accordance with the terms of the original agreement, with all legal and factual issues left open for determination by the arbitral tribunal.",

        "Case: Hemant D. Shah HUF & Anr. v. Chittaranjan D. Shah HUF & Ors., Commercial Arbitration Application No. 184 of 2026."
    ],
    },


  {
    slug: "story-3",

    title: "Story 3 Title",

    category: "Judiciary",

    date: "05 July 2026",

    excerpt:
      "Short description of Story 3.",

    image: "/images/story3.jpg",

    content: [
      "Paragraph one.",

      "Paragraph two."
    ],
  },

  {
    slug: "story-4",

    title: "Story 4 Title",

    category: "Legislation",

    date: "04 July 2026",

    excerpt:
      "Short description of Story 4.",

    image: "/images/story4.jpg",

    content: [
      "Paragraph one.",

      "Paragraph two."
    ],
  },
];


