# teally-client

## Introduction
This is v1 of Teally, a tea tasting journal and tea recommendation engine. 

In addition to being a developer, I am also a tea expert and tea entreprenuer. I hold the titles of Tea Sommelier and Tea Master and own a business called [Three Mouths Tea](http://www.threemouthstea.com). My work in that field essentially consists of helping people find teas that they will love. And when that works, it feels wonderful.

I am proud of these certifications and of my work in the tea field. And I am certain that in order to find teas that people will truly love we need to drill deeper into their preferences than simply saying, for example, that they like green teas more than white teas. I also value expertise in a general sense. That all being said, I don't necessarily believe that we need highly trained experts to do this because when it comes to food and beverage preferences, everyone is the expert of their _own_ palette. Those of us interested in food and drink are often told by experts what flavors and aromas to look for in a given experience. With a little bit of guidance and a limited array of flavors to choose from, however, I would argue that most people will be able to isolate and name the specific flavors and aromas in a food or drink that they like or dislike. 

This can be valuable data not only for matching a customer to a specific tea that they are likely to enjoy (or wine, or coffee, or beer, on anything else for that matter), but also for determining what flavors and aromas a majority of people _actually experience in reality_ while drinking a specific drink. In other words, we can develop a more "horizontal" and less top-down version of expertise by crowd-sourcing it.

## What is Teally?
Enter Teally. In Teally, authenticated users are able to use the journal aspect of the app to keep track of the flavors they like in each tea they are drinking. When they create a tasting, they choose the tea they are drinking from a dropdown menu, and then can choose up to five flavors they like in the tea from a limited series of flavors (88 in total, organized by type -- Floral, Fruity, Mineral, etc.) Since there is a large but finite series of flavors for them to choose from and they can only isolate five flavors in each tasting, the app is able to calculate what individual flavors they prefer -- in other words, to create a profile of their palate. The more tastings they do, the more accurate this profile becomes. In addition, since each tasting consists of a single tea and a small series of flavors, the app is able also able to calculate a given tea's flavor profile. From there, it is simple to match user palates to tea flavor profiles -- in other words, to recommend teas to tea enthusiasts that they will truly love, not just because they love green teas (which have a vast variety of flavor profiles), but because they love things that combine, say, waxy wood, sea salt, gardenia, dill, and coconut. While this is hardly a flavor profile a trained expert would ever isolate in a tea, what is more important is that an individual tea drinker says it's there and wants more of it.   

##Technologies
The front end of this app was built with React and JavaScript and styled with CSS3, Bootstrap, and Sass. Server requests are made using Axios and Fetch.

The back end is built using Ruby on Rails. 

##Planning and Problem Solving
For planning, even though this was a solo project, I treated it like a group project where I played several different roles and used agile project management. I made extensive use of Trello in order to break the project down into small (sometimes tiny) tasks. I also did "stand-ups" each morning that were basically me talking to a whiteboard. This translated directly into intensely rigorous version control. I worked on feature branches exclusively. Once a feature was finished and tested, I pushed it up to GitHub where I then put on my product manager hat and merged the feture with the development branch. I then put my developer hat back on and pulled the development branch down onto my own machine before starting another branch for the next feature. This allowed for a strong sense of organization and an even stronger sense of confidence in the project: being meticulous like this allowed me to make all the transitions in the project -- from feature to feature, but _especially_ from front end to back end -- with a sense of security that I was improving the project continuously and that I would have no surprises later.

Of course, some surprises did come up, and there were some problems to address along the way. All of the small challenges I faced were due to the two large challenges/goals I set for myself at the beginning of the project: to learn React (which I had never worked in before) and to build a server with many-to-many relationships (which I had also never done before). These were both ambitious goals, and I tackled them largely by remaining committed to allowing my Trello board to tell me what to do and when. I am accustomed to being spontaneous and flexible, but in this case, I set a goal of being structured and it truly paid off. This third goal, funnily enough, helped me achieve the other two.

In terms of the solutions to the problems I faced, I found that it helped in React to immediately import all of the important data my components would need immediately once the app loaded. This allowed me to pass them down as props as needed. Trying to load a React component into a dropdown menu that I could then bring data back up the chain from (which tea my user is drinking, which flavors they isolate in that tea) was extremely difficult at first. After much console.logging around `event.target`, I learned from Stack Overflow about the `selectedOptions[0]` method and used `.getAttribute` on it. This allowed me to pull a data-key from the user's selection, which I made sure matched the index number in my teas data array. I could then set state with this information and make an axios request using that state:

```javascript
onTeaChange = event => {
    this.setState({ tea: event.target.value, tea_id: event.target.selectedOptions[0].getAttribute('data-key')  } )
  } 
```

```javascript
axios.post(apiUrl + '/tastings/', {
      tasting: {
        user_id: Number(this.props.user.id),
        tea_id: Number(this.state.tea_id),
        flavors: this.state.flavor_ids,
      }
```

Stack Overflow, my teachers, my fellow students, and my boss Trello were my best resources/ 

##Unsolved Problems
At this stage of development, the app is missing three essential features:

1. Currently, users can only update or delete a tasting they have already done by going to clicking on "Update a Tasting" or "Delete a Tasting" and inputting the ID number of a specific tasting. This is not very user-friendly, and I hope to add update and delete options next to each individual tasting in the "My Tastings" screen.

2. I have yet to build the recommendation engine itself. That is my top priority.

3. I also plan for the user to be able to get information about each tea on the site, including photographs and encyclopedia/Wikipedia-style entries (that will be written by me) on each.

I also plan to enhance the overall stylistics of the site. Currently, it is disorganized, incomplete, and not mobile-responsive.

##Wireframe
![alt text](https://github.com/candydasein/teally-client/tree/master/src/images/Teally-wireframe.png)

##User Stories
Note: stretch goals in parentheses.

As a user, I should be able to sign up, sign in, sign out, change my password, (and delete my account)

As a user, I should be introduced to the app and given some sense of what it’s about and how to properly brew and taste tea. 

As a user, I should be able to choose the tea I am tasting from a drop down menu of possible teas, and then I should be able to choose the flavors that I like in it from another checkboxed series of dropdowns. I should also be able to write a brief note (and post a photo). This instance will be called a tasting. (As a user I should be able to click on a spot on the flavor wheel to choose my perceived flavors in a given tasting.)

As a user, I should be able to retrieve, update, and delete all my past tea tastings, including tea name, type, country of origin, info link., and the flavors I chose (country of origin will appear as a map image or a google map snippet)

As a user I should be able to receive recommendations of teas that I would like based on the flavors I liked in previous tastings and other users’ likes.  

##Screenshot
![alt text](https://github.com/candydasein/teally-client/tree/master/src/images/Teally-screenshot.png)


##Links
[Deployed Client](https://candydasein.github.io/teally-client/#/)

[Deployed Server](https://teally.herokuapp.com/)

[Server Repo](https://github.com/candydasein/teally-server)