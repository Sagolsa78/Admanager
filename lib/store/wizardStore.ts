import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface BrandContext {
  id: number;
  title: string;
  body: string;
}

export interface AdContent {
  slides: { h: string; b: string; num: number; cov?: boolean }[];
  caption: string;
  hashtags: string[];
  prompts: { lbl: string; txt: string }[];
}

interface WizardState {
  // Step 1: URL Input
  websiteUrl: string;
  linkedinUrl: string;
  
  // Step 3: Analysis Results
  contexts: BrandContext[];
  ratings: Record<number, number>;
  bookmarks: number[];
  
  // Step 4: Selection
  selectedContextId: number | null;
  
  // Step 5: Template & Options
  selectedTemplateId: string | null;
  tone: string | null;
  emojiStyle: 'none' | 'minimal' | 'moderate' | 'heavy';
  platform: 'linkedin' | 'instagram' | 'twitter' | 'facebook';
  cta: string;
  offer: string;
  slideCount: number;
  
  // Dynamic Template Options
  templateOptions: Record<string, string>;
  
  // Step 6: Generated Content
  generatedContent: AdContent | null;
  
  // Navigation
  currentStep: number;

  // Actions
  setWebsiteUrl: (url: string) => void;
  setLinkedinUrl: (url: string) => void;
  setContexts: (contexts: BrandContext[]) => void;
  setRating: (id: number, rating: number) => void;
  toggleBookmark: (id: number) => void;
  setSelectedContextId: (id: number | null) => void;
  setSelectedTemplateId: (id: string | null) => void;
  setTone: (tone: string | null) => void;
  setEmojiStyle: (style: 'none' | 'minimal' | 'moderate' | 'heavy') => void;
  setPlatform: (platform: 'linkedin' | 'instagram' | 'twitter' | 'facebook') => void;
  setCta: (cta: string) => void;
  setOffer: (offer: string) => void;
  setSlideCount: (count: number) => void;
  setTemplateOption: (key: string, value: string) => void;
  setGeneratedContent: (content: AdContent | null) => void;
  setCurrentStep: (step: number) => void;
  resetWizard: () => void;
}

export const useWizardStore = create<WizardState>()(
  persist(
    (set) => ({
      websiteUrl: '',
      linkedinUrl: '',
      contexts: [],
      ratings: {},
      bookmarks: [],
      selectedContextId: null,
      selectedTemplateId: null,
      tone: null,
      emojiStyle: 'minimal',
      platform: 'linkedin',
      cta: '',
      offer: '',
      slideCount: 6,
      templateOptions: {},
      generatedContent: null,
      currentStep: 1,

      setWebsiteUrl: (url) => set({ websiteUrl: url }),
      setLinkedinUrl: (url) => set({ linkedinUrl: url }),
      setContexts: (contexts) => set({ contexts }),
      setRating: (id, rating) => 
        set((state) => ({ 
          ratings: { ...state.ratings, [id]: state.ratings[id] === rating ? 0 : rating } 
        })),
      toggleBookmark: (id) =>
        set((state) => ({
          bookmarks: state.bookmarks.includes(id)
            ? state.bookmarks.filter((b) => b !== id)
            : [...state.bookmarks, id],
        })),
      setSelectedContextId: (id) => set({ selectedContextId: id }),
      setSelectedTemplateId: (id) => set({ selectedTemplateId: id }),
      setTone: (tone) => set({ tone }),
      setEmojiStyle: (style) => set({ emojiStyle: style }),
      setPlatform: (platform) => set({ platform }),
      setCta: (cta) => set({ cta }),
      setOffer: (offer) => set({ offer }),
      setSlideCount: (count) => set({ slideCount: count }),
      setTemplateOption: (key, value) =>
        set((state) => ({
          templateOptions: { ...state.templateOptions, [key]: value },
        })),
      setGeneratedContent: (content) => set({ generatedContent: content }),
      setCurrentStep: (step) => set({ currentStep: step }),
      resetWizard: () => set({
        websiteUrl: '',
        linkedinUrl: '',
        contexts: [],
        ratings: {},
        bookmarks: [],
        selectedContextId: null,
        selectedTemplateId: null,
        tone: null,
        emojiStyle: 'minimal',
        platform: 'linkedin',
        cta: '',
        offer: '',
        slideCount: 6,
        templateOptions: {},
        generatedContent: null,
        currentStep: 1,
      }),
    }),
    {
      name: 'adforge-wizard-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
