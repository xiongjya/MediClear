import pdfjsLib from 'pdfjs-dist';

const extractTextFromPDF = async (typedArray: any): Promise<String[]> => {
  try {
    const pdf = await pdfjsLib.getDocument(typedArray).promise;
    const numPages = pdf.numPages;
    const fullText: String[] = [];

    for (let i = 1; i <= numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      textContent.items.forEach((s: String) => {
        fullText.push(s.str);
      });
    }

    return fullText;
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    return [];
  }
};

export default extractTextFromPDF;