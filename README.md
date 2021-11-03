# The HUB
Version 1.0

**'The HUB'** is an online interactive space that connects campaign managers, leads, and team members to reach their campaign goals while stay organized. The HUB centralizes all campaign documents, communication, visualization, analysis, and data entry; making it a clean simple, and easy to use choice for all campaigns and major events. While this document focuses on the campaign side, it can be applied to other major event planning and tracking for all curated events (music and art festivals, local and regional events, digital and virtual spaces, etc). 

**'The HUB'** is a web application created by Niq Toliver, who spent years as a campaign regional lead. The idea for this app was inspired by their dynamic experience running multiple campaigns and their insight into the real programming and technological needs for campaigns.

![alt text](https://github.com/ntoliverapp/visualization-web-dashboard/blob/main/readme-image.png/)

# Technology

* Figma
* HTML 
* CSS
* Python
* Matplotlib 
* mpld3 API
* pandas
* Javascript 
* Node.js
* JSON
* Express

# Installing and Running 'The HUB' Locally

To run the HUB locally in your browser, download the contents from the repository above. 

Open VS-Code (or other IDE)

Run the following commands in your local terminal

1 - Install and run Python analysis libraries and browser packages

```
python3 -m pip install -U matplotlib
pip install mpld3
pip install pandas
```
2 - Run Node.js packages, server, and express web application framework

```
npm init -y
npm i express
npm i cors
nodemon server/index.js
```
3 - If you are using VS code, right click on "login.html" and **open with live web server** to display in your browser. 

# Main Features

* You can log into **The HUB** with a username and password. Once you click the *submit* button ou will be taken to the profile page, which has a user profile (currently set as a county-wide Parks revenue campaign and a user Lauryn Hill). You can interact with the page in 3 main ways:

* You can interact with the data visualization charts (line graph and pie graph) in the Campaign Dashboard (zoom in on the chart, move around the chart axis, return to home view of the chart). The interactive buttons pop up in transparent display at the bottom left of each graph. 

* Underneath the campaign dashboard, you can click the four caret drop down buttons to display and learn more about the campaign *Goals*, *Daily Schedule*, *Terms/Definitions*, and *Tips for Success*. 

* At the bottom left of the page, you can click between an **inverted** color mode for the page and an **original** color mode. 

At the top right menu corner of the page, you can click to view the **Reports** page. During a campaign, teeam members must submit nightly reports. You can enter data into the nightly report form. After completing the form, you will get an alert AND you can see your data at the bottom of the page (GET and POST requests).

You can log out of the web app at any time by clicking the "**Log Out** button. 

# Data Visualizations, Data Analysis, Database, FrontEnd

There are a series of core structures that were part of the development of the application. 

# Data Visualizations and Analysis
Version 1.0 contains three main data visualizations that I created in Python and embedded into the HTML page using mpld3. One is a line graph that compares *Contacts*, *Yes IDs* , and *Volunteers* to days of campaign. The total for each day is plotted on the chart to visualize the full scope on a day-to-day analysis. This is helpful to determine trends (the best days and times to make calls and reach people, the days that the campaign has had the ost impact, the days that they had the least impact and how to redirect programming and funds to accommodate) The pie graph depicts the segments of total contacts by ids (people who said yes, no, were undecided, and who refused the first question). This visual gives the user a scope of the strength of the campaign's persuasion tactics. The progress bar is a visual that allows the user to compare current progress to goal by percentages. All visuals can be further developed to specify contacts, ids, opt-ins, and volunteer commits in numerous other ways that are helpful for managers and team members. For example: 
* Comparing opt in texts to opt in emails in order to see which way people prefer their communications (do they prefer more communication via email or text? Campaigns can create enhanced strategies that better communicate with people based off this data.)
* Visualizing individual team member data (how does each individual team member compare to the whole? WHat are each team members unique strengths and areas of improvement? This data can better support managers to develop action plans that support each team members growth. )

# Database
The current database for the project is housed in a reports.json file. There are currently two main data entries that are rendered to the reports page through a GET request. Users can add and display data points through the nightly reports input as a POST request. 

# FrontEnd
The front end contains a series of HTML files that are styled in CSS. The main CSS styling used is Grid Layout with wrapper and nested properties.  
