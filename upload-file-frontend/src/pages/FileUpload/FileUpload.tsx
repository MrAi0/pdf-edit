import CustomButton from "../../components/Custom-Button/CustomButton";
import { loadPdfFile, savePdfFile } from "../../api/file-upload";
import "./FileUpload.css";
import { useState } from "react";
import PdfViewerComponent from "../../components/PdfViewer/PdfViewer";

const FileUpload = () => {
  const [buffer, setBuffer] = useState<Uint8Array>();
  const [pdfState, setPdfState] = useState<any>();

  const loadPdfOnClick = async () => {
    const resp = await loadPdfFile();
    const buffer = new Uint8Array(resp);
    setBuffer(buffer);
  };

  const savePdf = async () => {
    if (pdfState) {
      const file = await pdfState.exportPDF();
      const blobFile = new File([file], "fileNameGoesHere", {
        type: "application/pdf",
      });
      await savePdfFile(blobFile);
    }
  };

  return (
    <div className="Main">
      <div className="ButtonContainer">
        <CustomButton onClick={loadPdfOnClick}>Load PDF</CustomButton>
        <CustomButton onClick={savePdf}>Save PDF</CustomButton>
      </div>
      <div>
        {buffer && (
          <PdfViewerComponent
            document={buffer}
            pdfState={pdfState}
            setPdfState={setPdfState}
          />
        )}
      </div>
    </div>
  );
};

export default FileUpload;
