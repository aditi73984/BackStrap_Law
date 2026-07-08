export interface Story {
  slug: string;
  title: string;
  category: string;

  publishedAt: string;

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

    publishedAt: "2026-05-15T09:00:00+05:30",
  

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

    publishedAt: "2026-07-07T11:20:00+05:30",

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

    title: "Supreme Court: Excluding Widow in Favour of Distant Relatives Casts Doubt on Validity of Will",

    category: "Supreme Court",

    publishedAt: "2026-07-07T10:45:00+05:30",

    excerpt:
      "The Supreme Court has held that a will excluding a surviving widow in favour of distant relatives or unrelated persons raises serious suspicion and requires strict proof of its voluntary execution by the testator.",

    image: "/images/story3.png",

    content: [
      "The Supreme Court has held that a will which completely excludes a surviving widow while transferring property to distant relatives or persons with no close familial connection naturally gives rise to suspicion regarding its authenticity. The Court observed that since a widow is a Class I legal heir under succession law, any attempt to deprive her of inheritance without a convincing explanation requires careful judicial scrutiny.",

      "The Court emphasized that in such cases, the burden rests heavily on the person relying on the will to establish that it was executed voluntarily by the testator with a clear understanding of its contents and legal consequences. It further observed that where genuine suspicious circumstances remain unresolved, appellate courts should not interfere with concurrent factual findings merely because another view is possible.",

      "Allowing the civil appeal, a Bench comprising Justice Manoj Misra and Justice K.V. Viswanathan set aside the Himachal Pradesh High Court's judgment, which had overturned the concurrent findings of the Trial Court and the First Appellate Court in a property inheritance dispute.",

      "The dispute concerned agricultural land owned by Chhajju Ram, an illiterate farmer who died without children. Following his death, his widow, Bhambo Devi, instituted a civil suit claiming ownership of the property as his sole surviving Class I heir. She challenged a registered will relied upon by the defendants, alleging that it had never been executed by her husband and was the result of fraud and undue influence.",

      "The defendants maintained that the deceased had voluntarily executed the registered will in their favour in recognition of the care and assistance they had extended to him and his wife.",

      "The Trial Court accepted the widow's claim after finding that the alleged will was surrounded by several suspicious circumstances. These included the complete exclusion of the widow without any convincing justification, material alterations on the registration endorsement that were not authenticated by initials, and the defendants' failure to establish possession of the disputed property.",

      "The First Appellate Court affirmed these findings, observing that the defendants had failed to prove any close relationship between the testator and the beneficiaries. It also noted unexplained alterations in the registration records, including changes to the presenter's name without proper authentication, which created serious doubt regarding the document's execution.",

      "However, the Himachal Pradesh High Court reversed the concurrent findings in second appeal, holding that the will stood proved once an attesting witness established its execution in accordance with law and that the discrepancies relied upon by the lower courts were insufficient to invalidate the registered document.",

      "Disagreeing with that approach, the Supreme Court restored the findings of the Trial Court and the First Appellate Court. The Bench held that the complete disinheritance of the widow in favour of persons who were not shown to be close relatives, coupled with the testator's illiteracy and unexplained alterations in the registration endorsement, constituted significant suspicious circumstances. In such a situation, the propounders of the will were required to dispel every legitimate doubt, which they failed to do.",

      "The Court also observed that once the courts below had concurrently recorded factual findings after appreciating the evidence, no substantial question of law arose warranting interference by the High Court in second appeal.",

      "Before the Supreme Court, the appellant argued that there was no dispute regarding the deceased's ownership of the property or the plaintiff's status as his sole surviving Class I legal heir. It was contended that the burden to prove the will rested entirely on the defendants and that the Trial Court and the First Appellate Court had rightly appreciated the evidence, leaving no scope for interference in second appeal.",

      "The respondents contended that the plaintiff had taken inconsistent pleas by alleging both forgery and fraud, and argued that the registered will had been duly proved through an attesting witness. They further submitted that the alterations relied upon were confined to the registration endorsement and did not affect the contents of the will itself.",

      "The Supreme Court examined whether the plaintiff's pleadings were legally sustainable, whether her failure to enter the witness box was fatal to the suit, whether the will was surrounded by suspicious circumstances, and whether the High Court had exceeded its jurisdiction under Section 100 of the Code of Civil Procedure.",

      "Rejecting the respondents' objections, the Court held that alternative pleadings alleging fraud or undue influence did not amount to admitting the execution of the will. It also ruled that the plaintiff's failure to testify did not defeat her case because her status as the deceased's widow and sole Class I heir had not been specifically denied by the defendants and therefore stood admitted under Order VIII Rule 5 of the Code of Civil Procedure.",

      "On the merits, the Court noted that the testator was illiterate, making it essential for the propounders to prove that he had executed the will voluntarily and with full knowledge of its contents. The Bench found several unexplained suspicious circumstances, including the complete exclusion of the widow, transfer of property to persons who were not close relatives, incorrect recitals explaining the disinheritance, and multiple unauthenticated alterations in the registration endorsement. These circumstances prevented the defendants from discharging the burden required in law.",

      "The Supreme Court further reiterated that the existence of suspicious circumstances surrounding a will is essentially a question of fact. Concurrent findings recorded by the Trial Court and the First Appellate Court after appreciating evidence cannot ordinarily be disturbed in a second appeal unless shown to be perverse or legally unsustainable.",

      "Accordingly, the Bench held that the Himachal Pradesh High Court had travelled beyond the limited jurisdiction conferred by Section 100 of the Code of Civil Procedure by reassessing factual findings that did not raise any substantial question of law.",

      "Allowing the appeal, the Supreme Court set aside the judgment of the Himachal Pradesh High Court and restored the concurrent decrees of the Trial Court and the First Appellate Court. It affirmed the plaintiff's ownership and possession of the disputed property and passed no order as to costs.",

      "Case: Sardari Lal v. Bishan Dass and Others (2026 INSC 669)."
    ],
  },

  {
    slug: "story-4",

    title: "Patna High Court Directs DM to Ensure Legal Acquisition Before Constructing Road on Private Raiyati Land",

    category: "Patna High Court",

    publishedAt: "2026-07-07T10:30:00+05:30",

    excerpt:
      "The Patna High Court has held that the State cannot construct a public road on privately owned raiyati land without first acquiring the property in accordance with law and paying due compensation to the landowner.",

    image: "/images/story4.png",

    content: [
      "The Patna High Court has strongly criticized the district administration for permitting the construction of a village road on privately owned raiyati land without following the procedure prescribed by law. Observing that the authorities neither initiated land acquisition proceedings nor paid compensation to the landowner, the Court described the administrative action as a clear instance of arbitrariness and directed the District Magistrate to personally oversee compliance with the law.",

      "Justice Rana Vikram Singh observed that public authorities cannot enter upon or utilize private property for development projects without first following the statutory process of acquisition. The Court further remarked that the failure of senior district officials to address the petitioner's repeated complaints reflected administrative indifference and effectively allowed the alleged illegal construction to continue.",

      "The dispute arose from land situated in Bihar's Bhagalpur district, which the petitioner claimed had remained in his family's possession for generations. During a survey operation, however, the property was mistakenly recorded in the revenue records as belonging to the State of Bihar. Challenging this error, the petitioner filed a civil suit seeking declaration of title and correction of the revenue entry.",

      "Although the Trial Court initially dismissed the suit, the appellate court later ruled in the petitioner's favour, declaring the land to be private raiyati property belonging to his family. As the State did not challenge the appellate decree, the finding attained finality.",

      "Despite the civil court's decision, local authorities proceeded with the construction of a village road over the land. The petitioner alleged that no notice was issued, no acquisition proceedings were commenced, and no compensation was offered before the work began. He further submitted that several representations made to the Executive Engineer, District Magistrate, and other authorities failed to elicit any corrective action.",

      "Opposing the writ petition, the State argued that the authorities had initially believed the land to be government property because of the earlier revenue entry and the Trial Court's dismissal of the civil suit. It was also contended that the petitioner's initial representations had been submitted before the appellate court pronounced its judgment, and therefore the authorities were unaware of the subsequent change in the legal position.",

      "After examining the record, the High Court held that the petitioner's ownership had already been conclusively established by the appellate court's decree. It observed that even when land is required for a public purpose, the State cannot take possession of private property without adhering to the statutory acquisition procedure and ensuring payment of lawful compensation.",

      "The Court found that the authorities had failed to issue any notice, commence acquisition proceedings, or compensate the petitioner before allowing the road construction. Such conduct, the Court observed, demonstrated a complete disregard for the petitioner's legal and statutory rights.",

      "Accordingly, the High Court directed the District Magistrate to personally examine the matter, verify the relevant revenue records along with the civil court's decree, and ensure that no further construction is carried out unless the land is lawfully acquired in accordance with the applicable legal procedure and appropriate compensation is paid.",

      "Case: Uttam Jha v. State of Bihar & Others, Civil Writ Jurisdiction Case No. 7953 of 2026."
    ],
  },


];


