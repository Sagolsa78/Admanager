import { BrandContext, AdContent } from "@/lib/store/wizardStore";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  analyzeBrand: async (url: string, linkedin?: string): Promise<BrandContext[]> => {
    await delay(2500);
    return [
      {
        id: 1,
        title: "The Visionary Problem-Solver",
        body: "Focuses on the high-level industry gap for " + url + " and how your brand uniquely bridges it."
      },
      {
        id: 2,
        title: "The Efficiency Expert",
        body: "Highlights the time and cost savings achieved through your automation and streamlined workflows."
      },
      {
        id: 3,
        title: "The Trusted Advisor",
        body: "Leverages your case studies and testimonials to build authority and trust as the proven choice."
      },
      {
        id: 4,
        title: "The Disruptive Innovator",
        body: "Challenges the status quo of traditional marketing and shows why AI is the future."
      },
      {
        id: 5,
        title: "The Customer-Centric Partner",
        body: "Emphasizes the personalized support and community aspects focusing on long-term relationships."
      }
    ];
  },

  generateAdCopy: async (
    context: BrandContext, 
    template: string, 
    options: any
  ): Promise<AdContent> => {
    await delay(3500);
    
    const slideCount = options.slideCount || 6;
    const slides = Array.from({ length: slideCount }, (_, i) => ({
      h: i === 0 ? `Slide ${i + 1}: The Core Hook` : `Slide ${i + 1}: Building Value`,
      b: `This is a generated content block for ${context.title} using the ${template} template.`,
      num: i + 1,
      cov: i === 0
    }));

    return {
      slides,
      caption: `🔥 Just generated this ${template} post with AdForge! \n\nOur brand analysis of ${context.title} revealed some amazing insights. \n\n${options.cta || 'Check the link in bio!'}`,
      hashtags: ['#AdForge', '#AI', '#BrandDNA', '#Marketing'],
      prompts: [
        { lbl: "Visual Style", txt: "Clean, professional, corporate tech aesthetic with soft gradients." },
        { lbl: "Main Image", txt: "A stylized 3D representation of a DNA strand morphing into a digital document." }
      ]
    };
  }
};
