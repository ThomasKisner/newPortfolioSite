import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const downloadResume = () => {
  // using Java Script method to get PDF file
  fetch("Tom_Kisner_2023_Resume.pdf").then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "TomKisnerResume.pdf";
      alink.click();
    });
  });
};

<Box textAlign="center">
  <Button onClick={downloadResume} sx={{ padding: 0 }}>
    Download My Resume
    <FileDownloadIcon sx={{ height: ".8em" }} />
  </Button>
</Box>;
