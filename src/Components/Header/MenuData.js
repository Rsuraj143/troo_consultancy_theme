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
    path: "#",
    iconClosed : <FaChevronDown/>,
    iconOpened : <FaChevronUp/>,
    subNav: [
      {
        subTitle: "Services We Offer !",
        path: "/service/financial_planning",
        clsName: "dropdown_link",
      },
      {
        subTitle: "Quality Resourcing",
        path: "/service/quality_resourcing",
        clsName: "dropdown_link",
      },
      {
        subTitle: "Business Services",
        path: "/service/business_services",
        clsName: "dropdown_link",
      },
    ],
  },
  {
    title: "Pages",
    path: "#",
    iconClosed : <FaChevronDown/>,
    iconOpened : <FaChevronUp/>,
    subNav: [
      {
        subTitle: "Case Studies",
        path: "/pages/case_studies",
        clsName: "dropdown_link",
      },
      {
        subTitle: "Portfolio",
        path: "/pages/portfolio",
        clsName: "dropdown_link",
      },
      {
        subTitle: "Meet team member",
        path: "/pages/meet_team_member",
        clsName: "dropdown_link",
      },
      {
        subTitle: "Clients Review",
        path: "/pages/clients_review",
        clsName: "dropdown_link",
      },
      {
        subTitle: "Faq",
        path: "/pages/faq",
        clsName: "dropdown_link",
      },
      {
        subTitle: "404 Page",
        path: "/pages/404_page",
        clsName: "dropdown_link",
      },
    ],
  },
  {
    title: "Blogs",
    path: "#",
    iconClosed : <FaChevronDown/>,
    iconOpened : <FaChevronUp/>,
    subNav: [
      {
        subTitle: "Latest Blogs",
        path: "/blogs/latest_blogs",
        clsName: "dropdown_link",
      },
      {
        subTitle: "Blogs Details",
        path: "/blogs/blog_details",
        clsName: "dropdown_link",
      },
    ],
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];
