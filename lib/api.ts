export async function fetcher(url: string, options?: RequestInit) {
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    (error as Error & { info?: unknown; status?: number }).info = await res.json().catch(() => ({}));
    (error as Error & { info?: unknown; status?: number }).status = res.status;
    throw error;
  }

  return res.json();
}

// React Query Data Fetchers
export const api = {
  analyses: {
    getAll: (page = 1) => fetcher(`/api/analyses?page=${page}`),
    getOne: (jobId: string) => fetcher(`/api/analyse?jobId=${jobId}`),
  },
  contexts: {
    getAll: (page = 1, limit = 20) => fetcher(`/api/contexts?page=${page}&limit=${limit}`),
    save: (context: unknown, analysisId: string) => fetcher("/api/contexts/save", {
      method: "POST",
      body: JSON.stringify({ context, analysisId }),
    }),
    update: (id: string, partial: unknown) => fetcher(`/api/contexts/${id}`, {
      method: "PATCH",
      body: JSON.stringify(partial),
    }),
    delete: (id: string) => fetcher(`/api/contexts/${id}`, { method: "DELETE" }),
  },
  campaigns: {
    getAll: () => fetcher("/api/campaigns"),
    create: (data: unknown) => fetcher("/api/campaigns", {
      method: "POST",
      body: JSON.stringify(data),
    }),
    update: (id: string, data: unknown) => fetcher(`/api/campaigns/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
    delete: (id: string) => fetcher(`/api/campaigns/${id}`, { method: "DELETE" }),
  },
  feedback: {
    submit: (data: unknown) => fetcher("/api/feedback", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  },
};
