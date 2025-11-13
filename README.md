**Intuition**
When i first got the api my main work was to fetch the data from the api(memes here)
i made the Project page in the components folder under src which has to be used in the app.jsx page which will be rendered inside my main.jsx root file


**Implementation**
Setup is very basic React+vite by npm create vite@latest and further tailwind setup

In Project.jsx i used useeffect and in that i fetched the api which returned me a promise so in .then i used res.json to get the response from the api 


I used **Tailwind** for styling Nothing very fancy just basic alignment of the memes and and making it similar to the given project bg cyan 
In order to not get the name wrong i lowercased the text inside Searchbox
