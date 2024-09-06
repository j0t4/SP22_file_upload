"use client"
import * as React from 'react';
import { sp } from '@pnp/sp';

import "@pnp/sp/webs";
import "@pnp/sp/folders";
import "@pnp/sp/files";


//sp.configure

const FileUploader = () => {
    const [state, setState] = React.useState({
        isUploading: false,
    error: null as string | null,
    selectedFile: null as File | null // Add selectedFile to state
    });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setState({ ...state, selectedFile: e.target.files[0] }); 
    } else {
      setState({ ...state, selectedFile: null });
    }
    };

  const uploadFileAsync = async () => {
    try {
      const w = await sp.web.select("https://colabora.des.interno");

      // Ensure a file is selected
      if (!state.selectedFile) { // Check selectedFile from state
        alert("Please select a valid file.");
        return;
      }

      setState((prevState) => ({
        ...prevState,
        isUploading: true,
      }));

      const folderRelativeUrl = "/dev";
      try {
        await w.getFolderByServerRelativeUrl(folderRelativeUrl)
          .files.add(state.selectedFile.name, state.selectedFile, true); // Use selectedFile from state
        alert("The file has been uploaded successfully.");
      } catch (error) {
        console.error(error);
        setState((prevState) => ({
          ...prevState,
          error: "An error occurred during upload.",
        }));
      }

    } finally {
      setState((prevState) => ({
        ...prevState,
        isUploading: false,
      }));
    }
};

  return (
    <div>
      <input type="file" onChange={handleFileChange} /> {/* Add file input */}
      {state.isUploading
        ? (<p>Uploading...</p>)
        : state.error
          ? (<p>{state.error}</p>)
          : (<button onClick={uploadFileAsync} disabled={!state.selectedFile}> 
              Upload to SharePoint 
            </button>)} 
    </div>
  );
};

export default FileUploader;