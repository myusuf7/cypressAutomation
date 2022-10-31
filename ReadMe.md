# i6 Group / Instructions


#### Codes and Tests Prepared by:

* Maimaitiyusufu Wulayinmu
* QA Test Automation Engineer
* uysdetlead@gmail.com



## Stack & Libraries

- JS
- Cypress
- Mochawesome

## Folder structure

- e2e : to keep page object module pages and tests
- fixtures : to keep constant values1
- reports : for html report
- support : reuseable scripts
- package.json : dependencies for cypress

------------
## Test RUN

Notice:

- To run  tests, use `npx cypress run --headed`. You can run from the terminal.
- To run a specific test: `npx cypress run --spec` + `test file's relative path`
- To run on chrome with headless mode, use `npx cypress run --browser chrome`.
for running on different browser, just change `chrome` to other browser.
- To run on chrome with headed mode, use `npx cypress run --browser chrome --headed`.



------------

## Test Reports Locations
- Screenshot will be captured under screenshots folder

- Failed test video recordings are captured under 'video'

- Mochawesome HTML reports are saved under 'reports' --> mochawesome.html

- mochawesome_10312022.html
  
  (Right Click and Open in any Browser )




-----------------------------
2022 October

### End
