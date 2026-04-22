import { GoogleGenAI, Type } from "@google/genai";
import { PRODUCTS } from "../data";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const geminiService = {
  async getSearchSuggestions(query: string) {
    if (!query) return [];

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Based on the search query "${query}", suggest relevant product names or categories from this catalog: ${JSON.stringify(PRODUCTS.map(p => ({ name: p.name, category: p.category })))}`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                suggestion: { type: Type.STRING },
                type: { type: Type.STRING, description: "either 'product' or 'category'" }
              },
              required: ["suggestion", "type"]
            }
          }
        }
      });

      return JSON.parse(response.text || "[]");
    } catch (error) {
      console.error("AI Search Error:", error);
      return [];
    }
  },

  async getAiRecommendations(preferences: { priceRange?: string; type?: string; specifications?: string }) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Given these user preferences: ${JSON.stringify(preferences)}, recommend the best products from this catalog: ${JSON.stringify(PRODUCTS)}. Return a list of product IDs and a short reason why.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                reason: { type: Type.STRING }
              },
              required: ["id", "reason"]
            }
          }
        }
      });

      const recommendations = JSON.parse(response.text || "[]");
      return recommendations;
    } catch (error) {
      console.error("AI Recommendation Error:", error);
      return [];
    }
  },

  async generateAdCopy(context: string) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Generate a punchy, streetstyle, urban commercial advertisement copy for ${context}. Keep it under 20 words.`,
      });
      return response.text?.trim() || "Drip harder with Campus Drip.";
    } catch (error) {
      return "Drip harder with Campus Drip.";
    }
  }
};
