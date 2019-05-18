---
title: New Blog
# Use UTC time:
# https://stackoverflow.com/questions/8405087/what-is-this-date-format-2011-08-12t201746-384z ,https://de.wikipedia.org/wiki/Koordinierte_Weltzeit, https://unix.stackexchange.com/questions/164826/date-command-iso-8601-option(date ---iso-8601)
date: "2019-05-17"
template: "post"
draft: false
category: "general"
tags:
  - "personal"
description: "A short description of this new blog."
---

After going over some different versions of this blog written with plain HTML, CSS(Using Bootstrap) and Javascript I decided to go for a static site generator. The main reasons for this were more ease of use, maintainability and scalability.  
After researching a bit I went with [GatsbyJS](https://www.gatsbyjs.org/) over other great alternatives like Hugo or Jeykill.  

The reasons for this were clear:

1. Gatsby is written in Javascript, that means no new language like Go(Hugo) or Ruby(Jeykill)
2. Gatsby uses React and GraphQL, which are very interesting technologies I want to learn more about.
3. You can use Markdown to write blog posts and customize the website, which is great.
4. The community is very helpful and there are a lot of great themes as well as plugins to use.

I went with the [Gatsby starter Lumen](https://github.com/alxshelepenok/gatsby-starter-lumen) theme, because of its simplicity and active development.

## Workflow

After some changes, now my workflow is pretty simple:

1. Write a blog post
2. Push it to GitHub

The only hurdle to publishing a post straight after pushing it to GitHub was Gatsby. Github pages need an `index.html` file at the root and Gatsby builds the page into a subfolder(`public`).  
Some solutions, push the build into a `gh-pages` branch, which is rather inconvenient because user pages must be built from the master branch.
Taking this into account, my solution was the following:

1. Write posts or edit the page on the `develop` branch or other branches.
2. Use [Travis](https://github.com/daniel-vera-g/daniel-vera-g.github.io/blob/develop/.travis.yml) to execute a [script](https://github.com/daniel-vera-g/daniel-vera-g.github.io/blob/develop/scripts/deploy-to-gh-pages.sh) after `pushing` changes to origin, which updates the master branch with the output of the `gatsby build` command.

## Summary

To round up, Gatsby gives me a simple way to rapidly set up a great blog, which scales well in the future and looks nice.  As next steps, I will probably add a dark theme and some features like searching by tags or keywords.  Maybe in the future, I will consider changing to a plain HTML and CSS based site, as I find minimalistic sites like the one of [Patrick Collison](https://patrickcollison.com/about) or [this one](https://jrl.ninja/) pretty nice.