# Debugging

This project has been updated to include the ability to debug the JS

## Setup

- VSCode
  - Chrome
    - Built into VSCode
  - Firefox (Optional)
    - Debugger for Firefox VSCode extension is required
- Debug Configurations
  - Open the VSCode Debug 'view' - usually 4th icon on the left a 'bug' on a 'play' button
    - Open the drop down next to the 'green play button' at the top of the 'view'
    - Select 'Add Configuration...' to create a configuration that will allow us to debug a web page (the JS that runs for that page)
      - Details ...
  - All the information for debugging is kept by VSCode in the following file
    - `.vscode/launch.json`
    - It has a configuration for Chrome and Firefix

## Debugging Your Page

- Open your HTML page and then select Go Live - close the browser window/tab that opens
- Now go to the Debug 'view' and select the configuration that you created above
  - Finally click the 'green play button' to launch the web page with debugging enabled

## Breakpoints etc

- A breakpoint will stop JS running on the line you add a breakpoint to
  - A breakpoint is a 'bright red dot' that appear when you click on the left side of a JS file
