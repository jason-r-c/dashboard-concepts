## Anthropos branded demo screens
This is a modified version of the Home Sense demo ( which can be found at http://gitlab.aws.anthropos.io/pumpco/aos-demo-asterix ). The demo contains static html files and is styled generically for Anthropos.

The stories are the same as the Home Sense demo, therefore you can use the same user guides which can be found at https://drive.google.com/drive/u/0/folders/1lChmbY2rouXpWIw874MFah69mdz3tbYX ( no need to use Demo screens: Connect to Demo Hub and Demo general controls document )

The code repository for this project can be found at http://gitlab.aws.anthropos.io/jcarney/aos-demo-casper

## How to use the demo
- Unzip the `anthropos-branded-demo.tar.gz` file
- Go into the `clients` folder
- Open up `index.html`
- You will now see the Demo Home screen in your web browser
- Begin using the demo

## Create local tar file for project
From the command line ( ~/repository/aos-demo-casper ), you can run `npm run build` to run the build task in `package.json`. This will create a tar called `anthropos-branded-demo.tar.gz`

## Jenkins integration
The Jenkins task can be found at http://jenkins.aws.anthropos.io/jenkins/job/aos-demo-casper/. This builds the tar file, and stores as an artifact which can be downloaded.

## Test commit from windows 10 vm