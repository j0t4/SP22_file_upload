@ Sample File Uploader for SharePoint using PnP JS Wrapper Components

** This project includes two key components that handle file uploads to SharePoint and interact with SharePoint using the PnP JS library:**


1. FileUploader (app/components/file_uplader.tsx)
This component provides a simple UI and functionality for uploading files to a specific SharePoint folder.

Functionality:

File Selection: Allows users to select a file using a standard HTML file input.
Upload to SharePoint: Uploads the selected file to a predefined SharePoint folder (/dev in this case) using the PnP JS library.
Status and Error Handling: Provides visual feedback to the user during the upload process (e.g., "Uploading...") and displays error messages if the upload fails.
Usage:

The user selects a file using the file input.
Clicking the "Upload to SharePoint" button triggers the uploadFileAsync function.
This function uses the PnP JS library to connect to the SharePoint site and upload the file to the specified folder.
The user is notified of the upload's success or failure.
2. useSPPnP (app/components/useSPPnP.ts)
This component is a custom React hook that initializes and configures the PnP JS library for use in other components. In this case to greet the user with his name.

Functionality:

PnP JS Setup: Initializes the PnP JS library and sets the base URL for the SharePoint site.
User Profile Retrieval: Fetches the current user's profile information from SharePoint.
Context Provider (Optional): Can be used to provide SharePoint context (e.g., web URL, user profile) to other components in the application.
Usage:

Other components can import and use the useSPPnP hook to access the initialized PnP JS library and user profile data.
This simplifies interactions with SharePoint within those components, as they don't need to repeat the setup and configuration steps.
Relationship between Components:

The FileUploader component implicitly uses the useSPPnP hook (or it should) to access the pre-configured PnP JS library to handle the file upload to SharePoint.

Note: The provided FileUploader component currently has a hardcoded SharePoint site URL. In a real-world application, this would likely be dynamically determined or configurable.


## Usage

To run this sample componets follow this steps:

- In Sharepoint: Create a Document library "dev" in the site collection root of your Sharepoint infraestructure.
- Create a folder "file_upload" in the document library root.
- Clone this repository and build it:
```bash
git clone <repourl>
cd file_upload_2_sp
npm i
npm run build
```
- This creates a new folder "out" with the static build.
- Change "index.html" to "index.aspx" in the new folder "out"· 
```bash
mv ./out/index.html ./out/index.aspx
```
Now upload the contets of "out" dir into the folder "file_upload" in SharePoint documet library "dev"
(better use to drop the contents)

Open the app "index.aspx" 

Use the file select and upload buttons

The uploades files will apear in library "dev" 
