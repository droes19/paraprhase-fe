/**
 * API service for the paraphrase functionality
 */

// API endpoint configuration
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

/**
 * Sends text to the backend for paraphrasing
 * @param text The text to paraphrase
 * @returns The paraphrased text
 */
export const paraphraseText = async (text: string): Promise<string> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/paraphrase`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
      credentials: 'include', // For cookies if using session-based auth
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `${response.status}`);
    }

    const data = await response.json();
    return data.paraphrasedText;
  } catch (error) {
    // Re-throw for caller to handle
    throw error;
  }
};
