export type NavItem = {
    title: string;
    href: string;
    children?: NavItem[];
};
  
export const mainNav: NavItem[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Learn",
      href: "/science",
      children: [
        { title: "The Science Hub", href: "/science" },
        { title: "Benefits of Ionized Water", href: "/benefits" },
        { title: "Hydrogen Water", href: "/hydrogen-water" },
      ],
    },
    {
      title: "Why Us?",
      href: "/why-ionora",
      children: [
        { title: "Why Ionora?", href: "/why-ionora" },
        { title: "Testimonials", href: "/testimonials" },
        { title: "Blog", href: "/blog" },
      ],
    },
    {
        title: "Shop",
        href: "/products",
        children: [
            { title: "All Products", href: "/products" },
            { title: "Brands", href: "/brands" },
            { title: "Compare Products", href: "/compare" },
            { title: "Financing", href: "/financing" },
        ],
    },
    {
      title: "Support",
      href: "/contact",
      children: [
        { title: "Contact Us", href: "/contact" },
        { title: "Technical Support", href: "/support" },
        { title: "FAQs", href: "/faq" },
        { title: "Business Opportunity", href: "/distributors" },
        { title: "Affiliate Program", href: "/affiliate" },
      ],
    },
];
