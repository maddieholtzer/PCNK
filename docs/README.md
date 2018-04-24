# PCNK - project proposal

PCNK is an app that enables individuals with extra food to connect with those who are willing to take it, helping to lower food waste.

## Background and Overview

Food waste is an issue pervasive to urban and rural environments alike. In the United States alone, food waste accounts for an estimated 30-40% of food supply. It's common for consumers to purchase more food than they ultimately consume. Forgotten food generally finds its way to the back of the fridge, where it sits until it spoils.

PCNK provides a simple, user-facing tool for those with extra food to give it away to a someone from a known personal network, whether a coworker or friend. Users can take a photo of the food they want to give away and upload it to PCNK with a brief description. The uploader can choose to share the item with a specific group, e.g. coworkers, or a larger network. Users with access to the uploaded item may view it in their "pantry," which displays food currently available to claim.

PCNK's target audience is groups of people who devote significant time within shared locations (e.g. housemates, offices, gym-members, church-goers, etc.)

Users can:
  * Upload images of food to share
  * Claim food they see in a scrollable "pantry"
  * Grant specific groups access to foods they upload

## Functionality and MVP

1. User Auth:
  - [ ] user can sign up with phone number or Facebook
  - [ ] user can log in
  - [ ] demo log in


2. Group:
  - [ ] User can create a new group and assign a user to be admin
  - [ ] User can join a grop
  - [ ] User can leave a group
  - [ ] Admin can delete the group
  - [ ] Admin can remove members from a group
  - [ ] Users can add others to group

3. Food List:
  - [ ] View foods available in one group (pantry view)
  - [ ] View foods by category (filtering)
  - [ ] Add new food item
  - [ ] Remove food item
  - [ ] ‘Take’ a food item

4. Food Recommendations:
  - [ ] user preferences questionnaire in user profile
  - [ ] user preferences calculated based on user behavior
  - [ ] recommend items based on similarity score between users

5. User profile

  - [ ] food preferences
  - [ ] food currently posted by that user
  - [ ] contributions (user get a star every time they post or take food ) - works like Github green squares

6. Deploy to App Store
  - [ ] Apple App Store
  - [ ] Google Play Store

7.  Demo Page
  - [ ] has gif showing what the app does
  - [ ] has download link or QR code
  - [ ] has group members' contact info

8. Google Maps Integration
  - [ ] View foods available near me
  - [ ] Filter by category
  - [ ] Bonus MVP:
  - [ ] Slack extension
  - [ ] Google Voice integration

## Technologies

Frontend: React Native/JavaScript
Backend: Rails/Ruby

Challenges include:

### Recommendation Algorithm

In order to determine which foods should display in a user's pantry, and in what order, we will need to construct a sequencing algorithm similar, in a way, to a dating app's matching.  We will use linear regression modelling to account for factors that will weigh on a user's decision to select a food, e.g. a user's food preferences, time of day, proximity, and age of food.

### Responsive Design - Multiple Mobile Screen Sizes

The app will have to be seamlessly compatible with any mobile device used to render it, where on iOS or Android.

### Styling for both iOS and Android

Similarly, the process of prettifying the app for iOS and Android will be slightly different, and those differences must be accounted for. There are subtle differences: e.g. Androids have a native back button, which iPhones don't; nav bars on iPhones are centered while on Androids they are left-placed; Androids have a drawer menu, etc.

## Wireframes

loading

<img src="https://res.cloudinary.com/devleg/image/upload/v1524592238/splash.png" width="600">

splash

<img src="https://res.cloudinary.com/devleg/image/upload/v1524592249/signup.png" width="600">

pantry

<img src="https://res.cloudinary.com/devleg/image/upload/v1524592245/pantry.png" width="300">

user profile

<img src="https://res.cloudinary.com/devleg/image/upload/v1524592245/user_profile.png" width="300">

## Group Members and Work Breakdown

Mattie Holtzer, Yangchen Shen, Carolyn, Alizeh Iqbal

### Day One
* Alizeh: frontend auth
* Carolyn: auth styling
* Yangchen: phone number sign in
* Mattie: sign in with facebook

### Day Two
* Alizeh: groups
* Carolyn: user profile  
* Yangchen: user profile
* Mattie: groups

### Day Three
* Alizeh: groups
* Carolyn: user profile  
* Yangchen: user profile
* Mattie: groups

### Day Four
* Alizeh: food list
* Carolyn: food list  
* Yangchen: food list  
* Mattie: food list

### Day Five  
* Alizeh: recommendations
* Carolyn: recommendations  
* Yangchen: recommendations
* Mattie: recommendations

### Weekend
* Alizeh: map/finishing other parts
* Carolyn: map/finishing other parts   
* Yangchen: map/finishing other parts    
* Mattie: map/finishing other parts   
