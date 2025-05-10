import { paraphraseText } from './api';

// Mock the global fetch
const mockFetch = global.fetch as jest.Mock<Promise<Response>>;

describe('API Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('paraphraseText makes a correct API call', async () => {
    // Mock the fetch response
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({ paraphrasedText: 'This is paraphrased text' }),
    };
    mockFetch.mockResolvedValue(mockResponse as unknown as Response);

    // Call the function
    const result = await paraphraseText('This is test text');

    // Check the fetch call
    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringMatching(/^.+\/api\/paraphrase$/),
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({ text: 'This is test text' }),
        credentials: 'include',
      })
    );

    // Check the result
    expect(result).toBe('This is paraphrased text');
  });

  test('paraphraseText handles API errors', async () => {
    // Mock a failed fetch response
    const mockResponse = {
      ok: false,
      status: 500,
      json: jest.fn().mockResolvedValue({ message: 'Server error' }),
    };
    mockFetch.mockResolvedValue(mockResponse as unknown as Response);

    // Call the function and expect it to throw
    await expect(paraphraseText('Test text')).rejects.toThrow('Server error');
  });

  test('paraphraseText handles network errors', async () => {
    // Mock a network error
    mockFetch.mockRejectedValue(new Error('Network error'));

    // Call the function and expect it to throw
    await expect(paraphraseText('Test text')).rejects.toThrow('Network error');
  });
});