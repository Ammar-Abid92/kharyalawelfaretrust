/* Change this file to get your personal Porfolio */

const checkingAdmin = JSON.parse(localStorage.getItem("isAdminPresent"));

console.log("AMMMMMM--->", checkingAdmin);

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kharyala Welfare Trust",
  description: "A welfare trust",
  og: {
    title: "Kharyala Welfare Trust",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Kharyala Welfare Trust",
  logo_name: "Kharyala Welfare Trust",
  nickname: "Do good to get good",
  subTitle: "Serving humanity",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  // {
  //   name: "Github",
  //   link: "https://github.com/ashutosh1919",
  //   fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
  //   backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  // },
  // {
  //   name: "LinkedIn",
  //   link: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  //   fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
  //   backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  // },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:info@kharyala.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/jawaidwalikhan/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link:
      "https://www.instagram.com/kharyala.welfaretrust/?igshid=YmMyMTA2M2Y=",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Mission Statement",
      fileName: "DataScienceImg",
      skills: [
        "⚡ To maintain, equip, expend and to administer the affairs of the said KHARYALA WELFARE TRUST and its properties",
        "⚡ To help, welfare, needy people of the Kharyala Community",
        "⚡ To undertake arrangements for the education, health facilitation,  residing in the localities of Kharyala Community around and in the vicinity of the said KHARYALA WELFARE TRUST",
        "⚡ To create the peace, harmony, between people of the community of Kharyala and perform as arbitrator among the people of the community",
        // "⚡ To provide legal aid if any person of the community needs financial support or any legal matter or need help for Advocate",
        // "⚡ To adopt, approve and prescribe curricular for imparting education to the students of the said KHARYALA WELFARE TRUST",
        // "⚡ To organize and manage ways and means for eradication of social and religious evils from the society",
      ],
      buttonPath: "#mission",
    },
    {
      title: "Members",
      fileName: "FullStackImg",
      skills: [
        "⚡ Kharyala Welfare Trust is being run entirely with the assistance of staff, who are working on voluntarily basis. ",
        "⚡ We are serving with the missionary spirit and zeal, for the betterment of society and humanity.",
        "⚡ The best example of service that needs to be followed on the precedent set forth by  Kharyala Welfare Trust ",
      ],
      buttonPath: "#about",
    },
    {
      title: "Welfare Wrok",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ The organization is there for all sorts of natural and unnatural fatalities, disasters and delimmas that mankind could ever encounter.",
        "⚡ The organization has made sure to leave no page devoid of its utmost concern for the well-being of the society",
        "⚡ We make sure to prevail equality amongst the citizens and connecting hearts with all sorts of help according to the Islamic teachings and moral ethics of a democratic society",
        "⚡ We adhere the moral ethics of a democratic society with innocent people, promoting welfare to all ages, classes and creeds.",
      ],
      buttonPath: "#mission",
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Kharyala Village",
      subtitle: "District mansehra, UC  Karori Kharyala",
      logo_path: "village.jpeg",
      alt_name: "Kharyala Village",
      duration: "",
      descriptions: [
        "⚡ This welfare trust was inaugurated from this native village of Kharyala. For more than twenty years, the people of kharyala did not have any proper medical dispensory, thus lacking many basic human facilities. So, inorder to rescue our people, the Kharyala Welfare Trust was inaugurated",
      ],
      website_link: "",
    },
  ],
};

const about = {
  trusteesMembers: [
    {
      title: "JAWAID WALI ",
      subtitle: "CHAIRMAN",
      logo_path: "JawaidWali(F)(B).jpeg",
      color_code: "#00000099",
    },

    {
      title: " SIDDIQUE AKBAR AKHUNZADA",
      subtitle: "VICE CHAIRMAN",
      logo_path: "akhunzada.jpeg",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: " ASIF ZAMAAN",
      subtitle: "GENERAL SECRETARY",
      logo_path: "MuhammadAsif.jpeg",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: " ABDUL RASHEED",
      subtitle: "FINANCE SECRETARY",
      logo_path: "AbdulRasheed.jpeg",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: " ABDUL KHALIQ",
      subtitle: "DEPUTY SECRETARY",
      logo_path: "AbdulKhaliqDS.jpeg",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: " ASIF ALI AKBER ",
      subtitle: "JOINT SECRETARY",
      logo_path: "AsifAliAkber.jpeg",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: " ZAKIR KHAN TANOLI ",
      subtitle: "INFORMATION SECRETARY",
      logo_path: "ZakirTanoli.jpeg",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: " M. FAISAL TANOLI",
      subtitle: "SECRETARY",
      logo_path: "MuhammadFaisalImage(B).JPG",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: " MUHAMMAD ISRAR KHAN",
      subtitle: "OFFICE SECRETARY",
      logo_path: "IsraarKhan.jpeg",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: " MUHAMMAD JUNAID",
      subtitle: "OFFICE SECRETARY",
      logo_path: "JunaidYousuf.jpeg",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
  ],
  shurraMembers: [
    {
      title: "HAJI MUHAMMAD YOUNUS TANOLI",
      subtitle: "HONORARY CHIEF EXECUTIVE MEMBER",
      logo_path: "HajiYonusTanoli.jpeg",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "MUHAMMAD TANVEER TANOLI ",
      subtitle: " MEMBER",
      logo_path: "MuhammadTanveerTanoli(F)(S).JPG",
      color_code: "#00000099",
    },
    {
      title: " SUFI HAKEEM MUHAMMAD ANWER",
      subtitle: " MEMBER",
      logo_path: "SufiHakim.jpeg",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: " HAJI SHAFQAT",
      subtitle: " MEMBER",
      logo_path: "noUser.png",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: " MUHAMMAD AMEEN TANOLI",
      subtitle: " MEMBER",
      logo_path: "AmeenTanoli.jpeg",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: " MUHAMMAD SAQIB TANOLI",
      subtitle: " MEMBER",
      logo_path: "MuhammadSaqib.jpeg",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "  MUHAMMAD AMJAD",
      subtitle: " MEMBER",
      logo_path: "noUser.png",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "  AZAM TAJ",
      subtitle: " MEMBER",
      logo_path: "noUser.png",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "  MUSTAFA KHAN",
      subtitle: " MEMBER",
      logo_path: "noUser.png",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },

    {
      title: "  MUHAMMAD SAJJAD",
      subtitle: " MEMBER",
      logo_path: "Sajjad.jpeg",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "  MUHAMMAD AFZAL",
      subtitle: " MEMBER",
      logo_path: "noUser.png",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "  EIJAZ AHMED",
      subtitle: " MEMBER",
      logo_path: "MuhammadEjaz.jpeg",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "  HABIB -UR- REHMAN",
      subtitle: " MEMBER",
      logo_path: "noUser.png",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "  YASEEN KHAN",
      subtitle: " MEMBER",
      logo_path: "noUser.png",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "  KHURSHEED KHAN",
      subtitle: " MEMBER",
      logo_path: "Khursheed.jpeg",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "  SHABBIR KHAN",
      subtitle: " MEMBER",
      logo_path: "noUser.png",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "  ABDUL KHALIQ",
      subtitle: " MEMBER",
      logo_path: "AbdulKhaliq.jpeg",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "  MURAD KHAN",
      subtitle: " MEMBER",
      logo_path: "noUser.png",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "  MUHAMMAD ISMAIL",
      subtitle: " MEMBER",
      logo_path: "noUser.png",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "  QARI ASHRAF",
      subtitle: " MEMBER",
      logo_path: "noUser.png",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "  AZAM SULTAN",
      subtitle: " MEMBER",
      logo_path: "noUser.png",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "  RIZWAN TANOLI ",
      subtitle: " MEMBER",
      logo_path: "RizwanTanoli.jpeg",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
  ],
  mediaMembers: [
    {
      title: "MUHAMMAD AFZAL TANOLI ",
      subtitle: " SOCIAL MEDIA HEAD ",
      logo_path: "MuhammadAfzalTanoli.jpg",
      color_code: "#00000099",
    },
    {
      title: "KHALID MERAJ KHAN ",
      subtitle: " MEMBER",
      logo_path: "KhalidMerajKhan.jpeg",
      color_code: "#00000099",
    },
    {
      title: "MUHAMMAD AMEEN TANOLI",
      subtitle: " MEMBER",
      logo_path: "AmeenTanoli.jpeg",
      color_code: "#00000099",
    },
    {
      title: "KAMRAN QAMAR ",
      subtitle: " MEMBER",
      logo_path: "KamranQamarTanoli.jpg",
      color_code: "#00000099",
    },
    {
      title: "MUHAMMAD UMER KHALID ",
      subtitle: " MEMBER",
      logo_path: "MuhammadUmerKhalid.jpeg",
      color_code: "#00000099",
    },
  ],
  founderMembers: [
    {
      title: "JAWAID WALI ",
      subtitle: " CHAIRMAN",
      logo_path: "JawaidWali(F)(B).jpeg",
      color_code: "#00000099",
    },
    {
      title: "MUHAMMAD TANVEER TANOLI ",
      subtitle: " FOUNDER ",
      logo_path: "MuhammadTanveerTanoli(F)(S).JPG",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Mission And Services",
  subtitle: "Work, Services and Volunteership",
  description:
    "Kharyala Welfare Trust is the foundation across Pakistan and one of the best social welfare service providers across the country running on non-commercial, non-political, and non-communal basis, serving round-the-clock without any discrimination of color, class, and creed",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Services",
      experiences: [
        {
          title: "FLOOD RELIEF CAMP",
          company: "KHARYALA WELFARE TRUST",
          company_url: "#",
          logo_path: "camp2.jpeg",
          duration: "Aug 30, 2022",
          location: "Karachi, Pakistan",
          description:
            "A camp is organized to collect money and ration for the affected people of KPK and Balochistan.This camp is initiated by the chairman Jawaid Wali, alongwith MNA Faheem Khan and ex-Nazim Qayyumabad Shamshaad khan and Dilshaad khan with other board of trustees and Shurra members of welfare trust",
          color: "#fc1f20",
        },
        {
          title: "RATION BAG & CASH DISTRIBUTION",
          company: "KHARYALA WELFARE TRUST",
          company_url: "#",
          logo_path: "main4.jpeg",
          duration: "Apr 18, 2021",
          location: "Karachi, Pakistan",
          description:
            "A ration bag and cash distribution ceremony that was presented by the chair person Jawaid Wali with other board of trustees and Shurra members",
          color: "#fc1f20",
        },
        {
          title: "EID MILAN PARTY ",
          company: "KHARYALA WELFARE TRUST",
          company_url: "#",
          logo_path: "EidMilanParty.jpeg",
          duration: " 12th July 2022 ",
          location: "Karachi, Pakistan",
          description:
            "it was a bakra eid milan party, organised by kharyala walfer trust",
          color: "#0879bf",
        },
        {
          title: "WEDDING EVENT ",
          company: "KHARYALA WELFARE TRUST",
          company_url: "#",
          logo_path: "weddingEvent.jpeg",
          duration: " June 2022 ",
          location: "Karachi, Pakistan",
          description:
            "it was a wedding event, organised by kharyala walfer trust",
          color: "#0879bf",
        },
        {
          title: "CRICKET TOURNAMENT ",
          company: "KHARYALA WELFARE TRUST",
          company_url: "#",
          logo_path: "main5.jpeg",
          duration: " 5th May 2022 ",
          location: "Karachi, Pakistan",
          description:
            "it was cricket tournament, organised by kharyala walfer trust",
          color: "#0879bf",
        },
        {
          title: "QURAN KHAANI EVENT",
          company: "KHARYALA WELFARE TRUST",
          company_url: "#",
          logo_path: "main2.jpeg",
          duration: "May 2022",
          location: "Karachi, Pakistan",
          description:
            "A Quran Khani ceremony in which gifts were provided to Qari Muhammad Ashraf Sahab alongwith the children who read Quran",
          color: "#9b1578",
        },
        {
          title: "RATION BAG & CASH DISTRIBUTION",
          company: "KHARYALA WELFARE TRUST",
          company_url: "#",
          logo_path: "main4.jpeg",
          duration: "Apr 18, 2021",
          location: "Karachi, Pakistan",
          description:
            "A ration bag and cash distribution ceremony that was presented by the chair person Jawaid Wali with other board of trustees and Shurra members",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Mission",
      experiences: [
        {
          title: "AIMS AND OBJECTIVES ",
          logo_path: "",

          description: [
            "(1)	The Trust shall be called KHARYALA WELFARE TRUST",
            "(2)	To maintain, equip, expend and to administer the affairs of the said KHARYALA WELFARE TRUST and its properties",
            "(3)	To help, welfare, needy people of the Kharyala Community",
            "(4)	To undertake arrangements for the education, health facilitation,  residing in the localities of Kharyala Community around and in the vicinity of the said KHARYALA WELFARE TRUST",
            "(5)	To arrange educational environment, professional education, open schools, educational institutes,  for children and adults of the Kharyala Community",
            "(6)	To create the peace, harmony, between people of the community of Kharyala and perform as arbitrator among the people of the community",
            "(7)	To provide legal aid if any person of the community needs financial support or any legal matter or need help for Advocate",
            "(8)	To acquire, properties by lawful means for the expansion, uplift and progress of the said KHARYALA WELFARE TRUST",
            "(9)	To adopt, approve and prescribe curricular for imparting education to the students of the said KHARYALA WELFARE TRUST",
            "(10)	To secure, receive, endowments, gifts, and subscriptions, donation, Zakat, Sadaqat, Fitra and Scarified-Aqeeqa and other Hide & Skins or any other immovable property or properties from all sources by lawful means and to utilize them for furthering and promoting the aim and objects of the said KHARYALA WELFARE TRUST",
            "(11)	To organize and manage ways and means for eradication of social and religious evils from the society",
            "(12)	To establish, found build, and assist, set up, maintain, manage, administer and run KHARYALA WELFARE TRUST and alike other institutions to propagate welfare strictly in accordance with bye-laws of the community  and out of the purposes aforesaid or priority basis to acquire land for constructing and managing KHARYALA WELFARE TRUST in Karachi",
            "(13)	To invest the funds of the Trust in any manner conductive to the achievement of the objects of the Trust",
            "(14)	To deal with such things as are incidental or conductive to the attainment of the above aim and objects",
            "(15)	To co-operate and co-ordinate with any Government, Semi-Government and any other such office/agencies for achieving the afore-mentioned aim and objects",
            "(16)	To establish, construct, arrange, gym, health club, for the physical activities for the people of the community",
            "(17)	To establish, construct, arrange, marriage halls, arrangements of marriages, to financial support for needy people of the community for marriages or its arrangements",
            "(18)	To start provide, transport services, throughout the Pakistan and all over the world to financial help for pilgrims for performing the Hajj and Umrah as well as training conduct, arrange training program for Hajj and Umrah also can support for immigration as Student Visa, Work Visa for the people of the Kharyala community",
            "(19)	To establish, launch society / housing schemes for residential purposes for the people of Kharyala Community and for the sake of get the same purpose Trust can work with any person, body, institute in joint venture, partnership",
            "(20)	To make agreements, joint ventures, partnerships for the welfare and security of Kharyala Community",
            "(21)	To create, establish, construct mortuary, funeral bus service, grave yard, funeral facilitations, etc, for the people of Kharyala Community under the shelter of said Trust",
            "(22)	To support, help people of the community with finance, assets, jobs, etc., and by other means for the welfare of the Kharyala Society",
            "(23)	Generally to do all or any other lawful act for the achievement of the above aim and objects of the Trust.",
          ],
          color: "#ee3c26",
        },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Us",
    profile_image_path: "kharyalaMainImg.jpeg",
    description:
      "We are available on almost every social media platform. You can message, call or email for any query and help",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "House # 17, Street # 6, D-Area, Qayyumabad Korangi Road, Karachi",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/fXnNLGmN3FSGYzmK9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "0307-2229155  0345-0077001",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  about,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
