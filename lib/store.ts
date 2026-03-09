import { create } from 'zustand';

export type AnalysePhase = 'input' | 'loading' | 'results';

export interface ContextObject {
  id: string;
  number: string;
  title: string;
  body: string;
  rating: number;
  saved: boolean;
}

interface AppState {
  analysePhase: AnalysePhase;
  currentJobId: string | null;
  contexts: ContextObject[];
  editingContextId: string | null;
  sidebarCollapsed: boolean;
  user: { id: string; name: string; email: string; avatar?: string } | null;
  
  setAnalysePhase: (phase: AnalysePhase) => void;
  setCurrentJobId: (id: string | null) => void;
  setContexts: (contexts: ContextObject[]) => void;
  updateContext: (id: string, partial: Partial<ContextObject>) => void;
  setEditingContextId: (id: string | null) => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  setUser: (user: AppState['user']) => void;
  resetAnalysis: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  analysePhase: 'input',
  currentJobId: null,
  contexts: [],
  editingContextId: null,
  sidebarCollapsed: false,
  user: null,

  setAnalysePhase: (phase) => set({ analysePhase: phase }),
  setCurrentJobId: (id) => set({ currentJobId: id }),
  setContexts: (contexts) => set({ contexts }),
  updateContext: (id, partial) =>
    set((state) => ({
      contexts: state.contexts.map((ctx) =>
        ctx.id === id ? { ...ctx, ...partial } : ctx
      ),
    })),
  setEditingContextId: (id) => set({ editingContextId: id }),
  setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
  setUser: (user) => set({ user }),
  resetAnalysis: () => set({ analysePhase: 'input', currentJobId: null, contexts: [], editingContextId: null }),
}));
