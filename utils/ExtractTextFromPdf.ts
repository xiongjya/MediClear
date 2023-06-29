const extractTextFromPDF = async (typedArray: any): Promise<String[]> => {
  const pdfjsLib = require('pdfjs-dist');
  const pdfjsWorker = require('pdfjs-dist/build/pdf.worker.entry');
  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

  try {
    const pdf = await pdfjsLib.getDocument(typedArray).promise;
    const numPages = pdf.numPages;
    const fullText: String[] = [];

    for (let i = 1; i <= numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      textContent.items.forEach((s: any) => {
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