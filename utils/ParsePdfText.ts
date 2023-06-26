import Results from "./types/Results";

const parsePdfText = (pdfText: String[]): Results[] => {
  const result: Results[] = [];
  
  for (var i = 1; i < pdfText.length - 1; i++) {
    if (pdfText[i].toLowerCase().startsWith("result")) {
      try {
        const category: String = pdfText[i - 1];
        const value: number = Number(pdfText[i + 1].split(" ")[0]);
  
        result.push({ category, value });
      } catch (error) {
        console.log("Failed to parse", pdfText[i - 1]);
      }
    }
  }

  return result;
}

export default parsePdfText;