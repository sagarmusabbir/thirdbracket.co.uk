// import { Bracket } from "@thirdbracket/bracketui";
// import PageHeader from "../../../components/PageHeader";
// import Image from "next/image";

// function SolutionCard({
//   title,
//   description,
//   image,
// }: {
//   title: string;
//   description: string;
//   image: string;
// }) {
//   return (
//     <div className="flex flex-col md:flex-row gap-8 items-center py-16">
//       <div className="w-full md:w-1/2">
//         <h3 className="text-2xl font-semibold mb-4">{title}</h3>
//         <p className="text-primary-600 dark:text-primary-400">{description}</p>
//       </div>
//       <div className="w-full md:w-1/2">
//         <Image src={image} alt={title} className="rounded-lg shadow-lg" />
//       </div>
//     </div>
//   );
// }

// export default function Solutions() {
//   const solutions = [
//     {
//       title: "Enterprise Solutions",
//       description: "Scalable solutions for enterprise-level businesses.",
//       image: "/solution1.jpg",
//     },
//     // Add more solutions
//   ];

//   return (
//     <main className="bg-white dark:bg-primary-950 text-primary-950 dark:text-white">
//       <Bracket>
//         <PageHeader
//           title="Solutions"
//           description="Tailored solutions to meet your business needs"
//         />
//         <div className="max-w-7xl mx-auto px-6">
//           {solutions.map((solution, index) => (
//             <SolutionCard key={index} {...solution} />
//           ))}
//         </div>
//       </Bracket>
//     </main>
//   );
// }

// src/app/solutions/page.tsx
import { Bracket, Button, Card } from "@thirdbracket/bracketui";
import PageHeader from "../../../components/PageHeader";
import Image from "next/image";
import { IconType } from "react-icons";
import {
  FaRobot,
  FaWpforms,
  FaSearch,
  FaGlobe,
  FaRocket,
  FaWordpress,
  FaCode,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiGithubactions,
  SiNotion,
  SiElementor,
} from "react-icons/si";
import { MdAutorenew, MdDesignServices, MdBusiness } from "react-icons/md";
import { TbBrandReact } from "react-icons/tb";
import { Nextjs, Tailwind, Vercel } from "../../../components/icons";

interface SolutionCategory {
  title: string;
  description: string;
  solutions: Solution[];
}

interface Technologies {
  title: string;
  cto: string;
}

interface Solution {
  title: string;
  description?: string;
  icon?: IconType;
  features: string[];
  technologies?: Technologies[];

  image?: string;
}

function SolutionCard({
  title,
  description,
  // icon: Icon,
  features,

  technologies,
  image,
}: Solution) {
  return (
    <Card
      size="lg"
      className="rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 "
      cover={
        image && (
          <div className="relative h-full w-full">
            <Image
              src={image}
              alt={title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto h-auto max-w-full max-h-full"
            />
          </div>
        )
      }
      header={
        <div className="flex items-center mb-2">
          {/* <div className="w-10 h-10 flex items-center justify-center bg-primary-100 dark:bg-primary-900 rounded-lg mr-3"> */}
          {/* <Icon className="w-5 h-5 text-accent-600 dark:text-accent-400 mr-3" /> */}
          {/* </div> */}
          <h3 className="text-2xl font-semibold max-w-md">{title}</h3>
        </div>
      }
    >
      <div>
        {/* <div className="mb-4">
          <h4 className="font-semibold mb-2">Key Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-sm text-primary-600 dark:text-primary-400"
              >
                <span className="w-1.5 h-1.5 bg-accent-400  rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div> */}

        {description && (
          <p className="text-primary-600 dark:text-primary-400 mb-2 text-lg">
            {description}
          </p>
        )}
        {technologies && (
          <div className="pt-4  dark:border-primary-800">
            {/* <h4 className="font-semibold mb-2">Technologies:</h4> */}
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-lg text-primary-800 dark:text-primary-200  border-primary-500/20   rounded-lg border flex flex-col space-y-1 font-semibold"
                >
                  {tech.cto}
                  <span className="text-xs font-normal text-primary-500">
                    {tech.title}
                  </span>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

function CategorySection({ title, description, solutions }: SolutionCategory) {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-primary-800 dark:text-primary-200">
          {title}
        </h2>
        <p className="text-primary-600 dark:text-primary-400 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <SolutionCard key={index} {...solution} />
        ))}
      </div>
    </div>
  );
}

function CaseStudyHighlight() {
  return (
    <div className="bg-primary-50 dark:bg-primary-900 rounded-lg p-8">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
        <p className="text-primary-600 dark:text-primary-400 mb-8">
          See how our solutions have helped businesses achieve their goals
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { metric: "50%", label: "Faster Development" },
            { metric: "80%", label: "Automation Rate" },
            { metric: "3x", label: "ROI Increase" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">
                {stat.metric}
              </div>
              <div className="text-primary-600 dark:text-primary-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Solutions() {
  const solutionCategories: SolutionCategory[] = [
    {
      title: "Automation & Integration",
      description:
        "Streamline your workflows and connect your digital ecosystem",
      solutions: [
        {
          title: "Form Integration",
          description: "Seamless form handling and data processing solutions",
          icon: FaWpforms,
          features: [
            "Custom form builders",
            "Data validation",
            "API integration",
            "Automated responses",
            "Analytics tracking",
          ],
          // technologies: ["React", "Node.js", "Firebase", "Zapier"],
          // ],
          technologies: [
            { title: "React", cto: "Latest" },
            { title: "Node.js", cto: "100%" },
          ],

          image: "/solutions/1.svg",
        },
        {
          title: "Marketing Automation",
          description: "Automate your marketing workflows and campaigns",
          icon: MdAutorenew,
          features: [
            "Email automation",
            "Social media scheduling",
            "Lead scoring",
            "Campaign tracking",
            "Analytics integration",
          ],
          // technologies: ["Mailchimp", "HubSpot", "Zapier", "Google Analytics"],
          technologies: [
            { title: "Mailchimp", cto: "Latest" },
            { title: "HubSpot", cto: "100%" },
            { title: "Zapier", cto: "Automation" },
            { title: "Google Analytics", cto: "Analytics" },
          ],
          image: "/solutions/2.svg",
        },
        {
          title: "CI/CD & Release Automation",
          description: "Streamline your development and deployment process",
          icon: SiGithubactions,
          features: [
            "Automated testing",
            "Continuous integration",
            "Continuous deployment",
            "Version control",
            "Environment management",
          ],
          // technologies: ["GitHub Actions", "Jenkins", "Docker", "AWS"],
          technologies: [
            { title: "GitHub Actions", cto: "Latest" },
            { title: "Jenkins", cto: "100%" },
            { title: "Docker", cto: "Automation" },
            { title: "AWS", cto: "Release" },
          ],
          image: "/solutions/3.svg",
        },
      ],
    },
    {
      title: "UI/UX Solutions",
      description:
        "Beautiful and functional user interfaces for modern web applications",
      solutions: [
        {
          title: "Bracket UI",
          description:
            "Our flagship UI component library for React applications",
          icon: TbBrandReact,
          features: [
            "Customizable components",
            "Dark mode support",
            "Responsive design",
            "Accessibility features",
            "Performance optimized",
          ],
          // technologies: ["React", "TypeScript", "Tailwind CSS"],
          technologies: [
            { title: "GitHub Actions", cto: "Latest" },
            { title: "Jenkins", cto: "100%" },
            { title: "Docker", cto: "Automation" },
            { title: "AWS", cto: "Release" },
          ],
          image: "/solutions/4.svg",
        },
        {
          title: "Next.js Themes",
          description: "Professional themes for Next.js applications",
          icon: SiNextdotjs,
          features: [
            "SEO optimized",
            "Performance first",
            "Modern design",
            "Easy customization",
            "Built-in components",
          ],
          // technologies: ["Next.js", "React", "Tailwind CSS"],
          technologies: [
            { title: "Mailchimp", cto: "Latest" },
            { title: "HubSpot", cto: "100%" },
            { title: "Zapier", cto: "Automation" },
            { title: "Google Analytics", cto: "Analytics" },
          ],
          image: "/solutions/5.svg",
        },
        {
          title: "WordPress Solutions",
          description: "Custom WordPress themes and templates",
          icon: FaWordpress,
          features: [
            "Custom themes",
            "Elementor templates",
            "WooCommerce ready",
            "Performance optimized",
            "SEO friendly",
          ],
          // technologies: ["WordPress", "PHP", "Elementor", "WooCommerce"],
          technologies: [
            { title: "Mailchimp", cto: "Latest" },
            { title: "HubSpot", cto: "100%" },
            { title: "Zapier", cto: "Automation" },
            { title: "Google Analytics", cto: "Analytics" },
          ],
          image: "/solutions/6.svg",
        },
      ],
    },
    {
      title: "Complete Solutions",
      description: "End-to-end solutions for your business needs",
      solutions: [
        {
          title: "WordPress 360",
          description: "Complete WordPress solution for your business",
          icon: FaWordpress,
          features: [
            "Custom theme development",
            "Plugin integration",
            "Security setup",
            "Performance optimization",
            "Maintenance & support",
          ],
          // technologies: ["WordPress", "PHP", "MySQL", "Redis"],
          technologies: [
            { title: "Mailchimp", cto: "Latest" },
            { title: "HubSpot", cto: "100%" },
            { title: "Zapier", cto: "Automation" },
            { title: "Google Analytics", cto: "Analytics" },
          ],
          image: "/solutions/1.svg",
        },
        {
          title: "Notion Blog",
          description: "Turn your Notion workspace into a beautiful blog",
          icon: SiNotion,
          features: [
            "Notion integration",
            "Custom design",
            "SEO optimization",
            "Analytics integration",
            "Automated publishing",
          ],
          // technologies: ["Next.js", "Notion API", "React", "Vercel"],
          technologies: [
            { title: "Mailchimp", cto: "Latest" },
            { title: "HubSpot", cto: "100%" },
            { title: "Zapier", cto: "Automation" },
            { title: "Google Analytics", cto: "Analytics" },
          ],
          image: "/solutions/2.svg",
        },
        {
          title: "Business 360",
          description: "Complete digital transformation for your business",
          icon: MdBusiness,
          features: [
            "Website development",
            "Digital marketing",
            "Business automation",
            "Analytics setup",
            "Maintenance & support",
          ],
          // technologies: ["Next.js", "WordPress", "Google Analytics", "AWS"],
          technologies: [
            { title: "Mailchimp", cto: "Latest" },
            { title: "HubSpot", cto: "100%" },
            { title: "Zapier", cto: "Automation" },
            { title: "Google Analytics", cto: "Analytics" },
          ],
          image: "/solutions/3.svg",
        },
      ],
    },
  ];

  return (
    <Bracket>
      <PageHeader
        title="Solutions"
        description="Comprehensive digital solutions for modern businesses"
      />

      <div className="max-w-7xl mx-auto  py-8 sm:py-12 md:py-16">
        {/* Solutions Categories */}
        {solutionCategories.map((category, index) => (
          <CategorySection key={index} {...category} />
        ))}

        {/* Case Study Highlight */}
        {/* <div className="mb-20">
            <CaseStudyHighlight />
          </div> */}

        {/* Integration Partners */}
        {/* <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-12">Integration Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 justify-between mx-auto">
           
              <Tailwind />
              <Nextjs />
              <Vercel />
              <Tailwind />
              <Nextjs />
            </div>
          </div> */}

        {/* CTA Section */}
        <div className=" rounded-lg p-8 lg:p-12 text-center bg-accent-50 dark:bg-accent-950 border border-primary-100 dark:border-primary-800">
          <h3 className="text-2xl lg:text-4xl font-extrabold  text-primary-950 dark:text-white mb-4">
            Ready to Transform Your Digital Presence?
          </h3>
          <p className="text-primary-800/70 dark:text-primary-200/60 text-base md:text-lg lg:text-xl   font-light mb-6">
            Let's discuss how our solutions can help you achieve your goals
          </p>

          <Button
            size="md"
            className="border-transparent !bg-primary-900  !text-white dark:!bg-white  dark:!text-primary-950  [@media(hover:hover)]:hover:opacity-90 active:opacity-80 "
          >
            {" "}
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </Bracket>
  );
}
