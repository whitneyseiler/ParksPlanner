# ParksPlanner
An interactive map for users to track how many of the 58 National Parks they have visited.

# Demo
A live demo of this app under construction can be found [here]('https://whitneyseiler.github.io/ParksPlanner/').

# This app will:
- Display all 58 National Parks as located dots within their home state in US Map view, regardless of user login state
- Allow users to log in to view their personal visit history
- Record park as visited when clicked by user
- When all parks in a state have been visited, permanently change the color of that state to indicate that they have "cross it off their list"
- When all National Parks have been visited, change color of all states and display some celebratory message

# How to Run Locally
1. Install dependencies: `-npm install`
2. Start server: `-npm start`
6. In browser, navigate to: http://localhost:3000

# To Do:
- [x] Add National Park location dots to map
- [ ] Make National Park locations clickable and change color to indicate when visited
- [ ] Keep track of parks list and visited locations + times in DB
- [x] Provide optional list view for user
- [ ] Make list view sortable by visited status
- [ ] Create OAuth to store different users' National Park visit records
- [x] In list view, make park names link to their official NPS.gov site
- [x] Allow user to search for specific park
- [ ] Write tests!  (This really should have been the first thing I did). 
- [ ] Add location name to tooltip on hover
- [ ] Make National Park location markers clickable and change color to indicate when visited
- [ ] Keep track of parks list and visited locations + times
- [ ] rovide optional list view for user
- [ ] Make sidebar list view sortable by visited status
- [ ] Create OAuth to store different users' National Park visit records