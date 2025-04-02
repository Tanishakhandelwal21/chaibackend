require("dotenv").config();
const express = require("express");

const app = express();
const port = 4000;
const gitHubData = {
  login: "Tanishakhandelwal21",
  id: 135576486,
  node_id: "U_kgDOCBS7pg",
  avatar_url: "https://avatars.githubusercontent.com/u/135576486?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Tanishakhandelwal21",
  html_url: "https://github.com/Tanishakhandelwal21",
  followers_url: "https://api.github.com/users/Tanishakhandelwal21/followers",
  following_url:
    "https://api.github.com/users/Tanishakhandelwal21/following{/other_user}",
  gists_url: "https://api.github.com/users/Tanishakhandelwal21/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Tanishakhandelwal21/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/Tanishakhandelwal21/subscriptions",
  organizations_url: "https://api.github.com/users/Tanishakhandelwal21/orgs",
  repos_url: "https://api.github.com/users/Tanishakhandelwal21/repos",
  events_url:
    "https://api.github.com/users/Tanishakhandelwal21/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Tanishakhandelwal21/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Tanisha Khandelwal",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 5,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: "2023-06-05T04:50:33Z",
  updated_at: "2025-04-01T13:59:00Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/login", (req, res) => {
  res.send("<h1>Login Page!</h1>");
});
app.get("/github",(req,res)=>{
    res.json(gitHubData)
})


app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
