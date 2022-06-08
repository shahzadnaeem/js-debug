# Debugging

## VSCode Terminal Auto Attach

Docs link - [VSCode Node Debugging](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)

VSCode has a feature that automatically attaches a debugger to any node scripts that are run from it.

- Activate `Auto Attach` by typing `<F1>` and then enter `Auto Attach`
- Choose `smart`
  - This only starts the debugger for scripts outside the `node_modules` directory (or specific commands in that folder)
  - Unfortunately `jasmine` is NOT one of those specific commands
  - To add `jasmine` do the following:
    - Open `VSCode Settings`
    - Search for `auto attach` and you should see 2 settings
    - We want to update the `Auto Attach Smart Pattern` setting
      - Click `Add Item` and add the following line for `jasmine`

         ```text
         **/node_modules/jasmine/bin/**
         ```

- Now open a NEW VSCode Terminal and you can run `jasmine` with the following command

    ```text
    node node_modules/jasmine/bin/jasmine.js
    ```

  - You can now set breakpoints in your tests or your code to figure out what is going on...

- In the same VSCode Terminal, you can start a node script and the debugger will be started automatically
  - Open the script that you want to run and set a breakpoint before you start the script in the Terminal

    ```text
    node ./debug.js
    ```
