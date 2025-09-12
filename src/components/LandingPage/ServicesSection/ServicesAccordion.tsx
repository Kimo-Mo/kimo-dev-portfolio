import { PlusIcon } from 'lucide-react';
import { Accordion as AccordionPrimitive } from 'radix-ui';

import { Accordion, AccordionContent, AccordionItem } from '@/components/ui';
import { AnimatedWrapper } from '@/components/shared';

const services = [
  {
    id: '1',
    title: 'Frontend Development',
    content:
      'I specialize in creating dynamic and modern web applications using React.js and Next.js. My focus is on writing clean, reusable, and maintainable code while following best practices. I integrate APIs, manage complex states with Redux Toolkit, and ensure that every feature works smoothly across all devices. My goal is to deliver high-quality applications that are fast, secure, and tailored to user needs.',
  },
  {
    id: '2',
    title: 'Responsive Web Design',
    content:
      'I design and implement websites that adapt seamlessly to any screen size—whether it\'s mobile, tablet, or desktop. By applying responsive design principles and using frameworks like Tailwind CSS and Bootstrap, I make sure that layouts remain consistent, functional, and visually appealing across all devices. This ensures that users always have a smooth browsing experience without compromising design or usability.',
  },
  {
    id: '3',
    title: 'UI Implementation',
    content:
      'I transform UI/UX designs into fully functional, interactive, and pixel-perfect interfaces. Working closely with designers, I ensure that every element matches the design specifications while maintaining accessibility and usability. Using tools like Tailwind CSS, Bootstrap, and Material-UI, I bring ideas to life with animations, transitions, and micro-interactions that enhance the user experience.',
  },
  {
    id: '4',
    title: 'Performance Optimization',
    content:
      'I make websites faster, smoother, and more efficient by applying optimization techniques such as code splitting, lazy loading, caching, and image compression. I focus on improving Core Web Vitals, ensuring high Lighthouse scores, and reducing load times to keep users engaged. My goal is to create web applications that not only look good but also perform exceptionally well on all devices and networks.',
  },
  {
    id: '5',
    title: 'Reusable Components',
    content:
      'I build modular and reusable components that save time and make applications easier to scale. By structuring projects in a clean and organized way, I ensure that features can be extended or modified with minimal effort. This component-driven approach not only improves development efficiency but also guarantees consistency across the entire application.',
  },
  {
    id: '6',
    title: 'Collaboration',
    content:
      'I work effectively in team environments, collaborating with designers, backend developers, and stakeholders to deliver high-quality products. I use Git and GitHub for version control, participate in code reviews, and maintain clear communication throughout the development process. My ability to adapt and contribute to different stages of a project ensures smooth workflows and successful outcomes.',
  },
];

export default function ServicesAccordion() {
  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible className="w-full" defaultValue="1">
        {services.map((service, idx) => (
          <AccordionItem value={service.id} key={service.id} className="py-2">
            <AnimatedWrapper from="left" delay={idx * 0.15}>
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-2 text-left leading-6 transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-300 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                  <span className="text-xl lg:text-3xl font-bold leading-[1.5] bg-gradient bg-clip-text text-transparent accordion-title relative pl-3 lg:pl-5">
                    {service.title}
                  </span>
                  <PlusIcon
                    className="lg:size-9 size-6 pointer-events-none shrink-0 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-muted-foreground text-sm lg:text-base pb-2 ml-5 lg:ml-10">
                {service.content}
              </AccordionContent>
            </AnimatedWrapper>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
