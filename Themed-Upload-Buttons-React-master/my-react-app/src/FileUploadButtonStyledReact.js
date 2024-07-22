// HTTP Request (Axios HTTP client package) Code Source: https://surajsharma.net/blog/react-upload-file-using-axios
// Public HTTP METHOD Testing Endpoint - https://resttesttest.com/ (Line 19) - has returned 200 OK
// Styled Buttons from Material UI (React Component Library) (Logic Modified) - https://mui.com/material-ui/react-button/

import * as React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';


const FileUploadButtonStyledReact = () => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    try {
      const response = await axios({
        method: "post",
        url: "https://httpbin.org/post", // This is a public web API endpoint for testing; replace with intended endpoint
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
        
      });
      console.log("Response: " + response.status);
    } catch(error) {
      console.log(error)
    }
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  return (
    <form onSubmit={handleSubmit}>
      <Button variant="contained" component="label">
          Upload
        <input hidden onChange={handleFileSelect} multiple type="file" />
      </Button>
      <Button variant="contained" component="label">
          Submit
        <input hidden accept="image/*" multiple type="submit" />
      </Button>
    </form>
  )
}
export default FileUploadButtonStyledReact;