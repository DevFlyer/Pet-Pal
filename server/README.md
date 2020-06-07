# Pet Pal Back end

For debugging, run `npm run debug` in terminal. Then in the debug tab of VS Code, click the play button next to npm: nodemon in the dropdown. When processes currently running show in center top of screen, choose node process with -inspect. You will now be able to set breakpoints in your node code for a complete debug experience.

# Pet Pal Api

## Users

#### _GET_ `/users`

- Lists all users

#### _GET_ `/users/{id}`

- returns all user info if authenticated
  - username, posts, friends

## Friends

#### _GET_ `/users/{id}/friends`

- Get a list of user's friends

#### _POST_ `/users/{id}/friends/{id}`

- add a friend to user's friend's list

## Posts

#### _POST_ `/post`

- save a post to the database.
  - **request**: userId, sampleFile, text, status
    - userId: String
    - sampleFile: (image)
    - text: String
    - status: number
  - **response**: string, status, and date created

#### _GET_ `/timeline`

- returns all posts

#### _GET_ `/users/{id}/timeline`

- returns user's timeline
  - Timeline is built by getting user's friends' most recent posts in sorted order from most recent
