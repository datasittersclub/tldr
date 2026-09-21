---
subTitle: "Yikes!"
title: "Navigating the Terminal for the First Time"
img: "/tldr/assets/images/covers/tldr4.jpg"
linkText: "view project"
permalink: "/books/tldr4/"
featureImg1: "/tldr/assets/images/covers/tldr4.jpg"
bgcolor: "#eadae9"
---

by Alyssa Virker

September 21, 2026

*Our main series (DSC) is aimed at people who already know they want to use digital humanities tools. But what if you don’t know if digital humanities is right for you?*

*Welcome to our spinoff series: Data-Sitters Little TL;DR (short for “too long; didn’t read”), where we offer key ideas and takeaways for people interested in digital humanities but not sure if it’s for them. We’re not here to convert, just to help — all in 1,500 words or less!*

*A lot of digital humanities tutorials start with the Terminal. But for many digital humanists, a reference to the Terminal is the end of the line. It is weird, intimidating, a bridge too far. Brandon Walsh has [some practical exercises](https://walshbr.com/blog/effortless-digital-humanities/) for getting to an "effortless digital humanities" relationship with the terminal. In this Data-Sitters Little Tl;DR, Alyssa Virker shares her journey through the terminal, with some wayfinding to help you along.*

## The Terminal

I’ve been lost in every terminal I’ve ever entered. LAX Terminal 2: lost. JFK Terminal 4: lost. Even the San Jose airport which is one straight line: lost. When it came to Apple’s Terminal application my experience was even worse. At least with the airports I knew I could find a sign, follow an arrow, and eventually I would be saved. In Apple’s Terminal, there were no directions. Dark, empty, space. One big black hole. 

I found my way to Terminal by deciding to dive head first into [topic modeling](/tldr/books/tldr5/). After reading the [DSC book on topic modeling](/site/dsc20/), I learned that step one was to download Java. I went to the Java site only to discover that there was no file to be found. Then I went where all desperate people go: ChatGPT. The LLM said I could download Java through Terminal. My next search: “What is Terminal?” The answer: “Text-based, command-line interface.” Next search: “What is command-line interface?” (Thank goodness I at least understood “text-based”)[^*].

[^*]: You can get a command line on Windows too, but that's its own adventure. Programming Historian has [a tutorial](https://programminghistorian.org/en/lessons/intro-to-powershell).

Even after eventually completing the process of downloading Java (Homebrew, Ant, and eventually Mallet), I still had no conception of what Terminal was or how to understand "a command." I barely got through the downloading process by copying and pasting LLM code and praying for magic. It wasn't until I met with Quinn (far superior to ChatGPT in every way) that I understood what a command in Terminal actually is. I will attempt to communicate my completely novel, never heard of before, findings.

To put things in terms I can understand --- Terminal is Finder's evil but genius twin. If you're on a Mac and using the Finder app, creating a new folder is a command. Moving one document from one folder to another is a command. These are examples of commands you enact visually when you use a dropdown menu or you drag a file with your mouse. In Terminal, you're essentially doing the same thing. You're giving the computer system commands, but instead of dragging and dropping a file, you're writing code that tells the computer to move the file from one folder to another. In comparison to Finder, Terminal lets you create more specified commands. It can automate changes on a large scale (i.e., across folders). In the case of Java, with the help of something called [Homebrew ](https://brew.sh/)(software that makes it easier to install other software using Terminal), Terminal was able to find the Java file online and download it to my computer.

*Programming Historian* has a great [intro on how to use basic commands on Terminal](https://programminghistorian.org/en/lessons/intro-to-bash), and since I am very much in the learning stage, I included a link rather than reiterating those points myself. What I will include are some tips for absolute beginners that are based on what confused me in my first encounter with Terminal.

1) I opened Terminal by opening Spotlight Search (the magnifying glass on the top right of a Mac) and typing Terminal. It opened up like any other application.

2) When you type or copy and paste code into Terminal, nothing will happen until you press "Enter". Only after you hit "Enter" will Terminal do magic and try to interpret the command.

3) If the command is nonsensical, no problem. Literally, nothing will happen! Terminal just won't be able to read the code and no action will occur.

4) The cursor is nonfunctional on Terminal. You have to use the up, down, left, right keys to move around.

5) The `%` sign or the `$` after your name mean nothing. Maybe the sign is for fun, maybe it's aesthetic, maybe it actually does something. I don't know, but I have been assured you can just ignore it.

I’m at the stage now where if I can find prewritten code, for instance in Xanda’s powerpoint in the [DSC topic modeling book](/site/dsc20/), I can copy paste without tremendous horror. I’ve learned that a lot of what we’re doing is naming folders and moving things from folder to folder. Despite the code still looking like gibberish to me, I’m pretty sure a wrong copy paste won’t explode the world, and I think that’s progress. I hope this gives other newcomers the same smidgen of hope that we just  might make it.