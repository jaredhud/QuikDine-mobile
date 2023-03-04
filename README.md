&nbsp;

<div align="center" style="margin-bottom:-20px">
<img src="https://github.com/jaredhud/QuikDine-mobile/blob/main/src/img/quik-dine.png?raw=true" alt="QuikDine logo" style="height:80px" />
</div>
<!-- <h1 align="center">QuikDine-mobile</h1> -->
<h3 align="center">Recipe made Easy!</h3>

## Table of Contents

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Eggroll Team Members](#eggroll-team-members)
- [Program Basics](#program-basics)

## Introduction

Our mobile app allows you to scan items in your pantry and suggest recipes based on the ingredients scanned. Based on the suggestions, you can also vote with your family and friends what you all want for dinner!

This project is divided into 3 parts: mobile, server, and website. This repo, mobile, has the code of our mobile app. The server repo is the one that contacts Spoonacular API. The website repo allows people to vote for people's favorite recipe.

## Key Features

    + Item Quikshot - Add items on your pantry through your camera or text.
    + Recipe Finder - suggest recipes based on the items on your pantry.
    + Recipe Selector - Vote for the best recipe for your next meal. The app can add more voting participants.
    + Data Storage - Create an account and store your favorite recipes.
    + Mobile Cross Platform - Works with Android and iOS.

## Installation

1. Install Expo CLI - https://expo.dev
2. Git clone https://github.com/jaredhud/QuikDine-mobile.git
3. Git clone https://github.com/jaredhud/Quikdine-server.git
4. Git clone https://github.com/Kshitija118/QuikDineWebPage.git
5. npm i or npm install all the repos above
6. npm run start

## Technologies Used

    + Core: React Native - React
    + API: Spoonacular Google Vision API
    + SendGrid Node.js Javascript HTML CSS Javascript Firebase Express.js Expo Go
    + Collaboration: Discord Github Zoom Trello Basecamp Figma

## Eggroll Team Members

- Kshitija Shirsathe
- Romell Bermundo
- Jared Huddleston
- Chris Desmarais - Scrum Master

## Developer Notes

- Context is used to transfer data from page to page
- Firebase was used to store data
- Navigation is handled 2 ways: Screen and Tab
- \_RecipeNav handles the Tab Navigation part
- Modal is used to create pop-ups(useful for help)
- When creating pagelayout, use percentages to divide sections. ie. 10% 10% 30%
