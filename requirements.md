<img src="https://members-csforall.imgix.net/members/logos/code-fellows-logo-horizontal-2-color-black.png" width="340" height="66">  

# ||  Intermediate Software Development - Group Project ||

# The Weekendr

*Code 301 Final Project - The Weekendr React App*

---

## Software Requirements

### Vision

* The vision is to create an user interface that enables the user, given a date and location, to query multiple external databases and find event information.
* People are always looking for new and different things to do on the weekend.
* This app is a one stop shop for providing targeted user information based on a user profile.

### Scope (In / Out)

* In
  * The app will allow a user to securely login
  * The user will be able to create a unique profile for their activity preferences.
  * The user will be provided catered events and activities based on their profile and given date / location searches.
  * The user profile and login credential data will be stored in a NoSQL database.
  * The app will display activity / event information from a minimum of three external API's.

* Out
  * The app will not plot activities on a map.
  * The app will not charge users directly to utilize its services.

### Minimum Viable Product (MVP)

* At a minimum the app will display the event and local information based on the user search of city / zip code for a given date.
* OAuth will authenticate a user when they login.
* Working SideNav
* React / TailwindCSS integration

### Stretch Goal

* Have multiple component "pages" load off of the SideNav via React Router.
* Enable a user to save selected items based off their search results.
* Store select items to a user calendar.

### Data Flow

* The user will access the website and be prompted with a form to be able to enter a search criteria which is then passed to the backend server. The backend server will then query external API's to acquire data and pass back to the front end server to display to the user. In addition the user will login through Auth0 integration and user credentials and profile data will be stored in a MondoDB.

---
