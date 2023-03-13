import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const MenuData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Service",
    path : "/service",
    iconClosed : <FaChevronDown/>,
    iconOpened : <FaChevronUp/>,
    subNav: [
      {
        subTitle: "Financial Planning",
        path: "/financial_planning",
        clsName: "dropdown_link",
      },
      {
        subTitle: "Quality Resourcing",
        path: "/quality_resourcing",
        clsName: "dropdown_link",
      },
      {
        subTitle: "Business Services",
        path: "/business_services",
        clsName: "dropdown_link",
      },
      {
        subTitle: "Travel And Aviation",
        path: "/travel_and_aviation",
        clsName: "dropdown_link",
      },
      {
        subTitle: "Software & Research",
        path: "/software_&_research",
        clsName: "dropdown_link",
      },
    ],
  },
  {
    title: "Pages",
    path : "/pages",
    iconClosed : <FaChevronDown/>,
    iconOpened : <FaChevronUp/>,
    subNav: [
      {
        subTitle: "Case Studies",
        path: "/case_studies",
        clsName: "dropdown_link",
      },
      {
        subTitle: "Portfolio",
        path: "/portfolio",
        clsName: "dropdown_link",
      },
      {
        subTitle: "Meet team member",
        path: "/meet_team_member",
        clsName: "dropdown_link",
      },
      {
        subTitle: "Clients Review",
        path: "/clients_review",
        clsName: "dropdown_link",
      },
      {
        subTitle: "Faq",
        path: "/faq",
        clsName: "dropdown_link",
      },
      {
        subTitle: "404 Page",
        path: "/404_page",
        clsName: "dropdown_link",
      },
    ],
  },
  {
    title: "Blogs",
    path : "/blogs",
    iconClosed : <FaChevronDown/>,
    iconOpened : <FaChevronUp/>,
    subNav: [
      {
        subTitle: "Latest Blogs",
        path: "/latest_blogs",
        clsName: "dropdown_link",
      },
      {
        subTitle: "Blogs Details",
        path: "/blog_details",
        clsName: "dropdown_link",
      },
    ],
  },
  {
    title: "Contact Us",
    path: "./contact",
  },
];
