#!/usr/bin/env node
var fs = require('fs');
var Case = require('case');
var posts = fs.readdirSync(__dirname + '/posts');
var blog = [];

posts.forEach(function (post) {
  if (! /\.md/.test(post))
    return;

  var stat = fs.statSync(__dirname + '/posts/'+post);
  blog.push({
    title: Case.title(post.substr(0, post.length -3)),
    mtime: stat.mtime,
    ctime: stat.ctime
  });
});

fs.createWriteStream(__dirname + '/posts/blog.json')
  .write(JSON.stringify(blog));
