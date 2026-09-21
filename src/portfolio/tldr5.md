---
subTitle: "Are Topics Real?"
title: "What's the Deal with Topic Modeling?"
img: "/tldr/assets/images/covers/tldr5.jpg"
linkText: "view project"
permalink: "/books/tldr5/"
featureImg1: "/tldr/assets/images/covers/tldr5.jpg"
bgcolor: "#f8cfcb"
---

by Alyssa Virker

September 21, 2026

*Our main series (DSC) is aimed at people who already know they want to use digital humanities tools. But what if you don’t know if digital humanities is right for you?*

*Welcome to our spinoff series: Data-Sitters Little TL;DR (short for “too long; didn’t read”), where we offer key ideas and takeaways for people interested in digital humanities but not sure if it’s for them. We’re not here to convert, just to help — all in 1,500 words or less!*

*Topic modeling is a method that comes up a lot in introductions to digital humanities, but what people expect and what they get when they try it themselves can be very different things. In this Data-Sitters Little TL;DR, Alyssa Virker takes us through her encounter with topic modeling, and what it does and doesn’t do.*

## Topic Modeling

I think I know what a topic is, and I think I know what a model is, but a topic model sounds like a lethal combination of abstract and official. Dear Sir or Madam, if you fill out these forms with signs you don’t understand, wait in the loading line, scan your thumbprint, and sing the digital humanities (DH) national anthem, you will then be given a model of all the topics of the world. Everything your puny creature brain couldn’t understand about the connectivity of the universe will become clear and you will be enlightened. 

The way Xanda explained it in the [DSC topic modeling book](/site/dsc20/) was this: “Topic models are supposed to help us find groups of words that show up together in text, hopefully in a way that matches our intuition as human beings about which words are about the same topics.” 

But after trying topic modeling and reading a lot about it, it turns out nothing is clear, and I am not enlightened. Coming from one extreme end of the humanities-to-STEM spectrum (guess which end), I assume everything on the other side portends to be concrete and indisputable. Turns out, topic modeling is a mere mortal swimming in ambiguity with the rest of us. 

So here is the very mortal, caveman TL;DR for how to use a topic modeling tool –  

You download a topic modeling tool[^*]. You feed your corpus to the tool. The tool runs statistics on your corpus. The tool outputs several blocks of words. You look at these blocks of words. You wonder, why did these words end up arranged in these blocks? How are they connected? Is this block a topic? Yes. I shall name this topic birds, or poetic expressions, or whatever I think it represents.  

[^*]: [Mallet](https://mimno.github.io/Mallet/topics.html) is the one they use in the DSC book, but you need the [Terminal](/tldr/books/tldr4) to work with it. There are browser-based ones, too: [Voyant](https://beta.voyant-tools.org/) (also described in a DSC book) has a topic modeling function that you can use with text files, and [jsLDA](https://mimno.infosci.cornell.edu/jsLDA/) is another browser-based option, but you have to upload your texts as one very specifically-formatted spreadsheet.

In slightly more evolved terms, after a corpus is fed to the tool, the model will output groupings of words that it calculates frequently appear near one another in the corpus. The number of groupings is entirely up to you (5-30?). The tool will not and cannot tell you how the words in each grouping are connected, because it doesn’t understand meaning. Without being able to understand meaning, the tool has no capacity to name a topic. This is exciting, because it is the researcher's job to figure out how the words in a block are ostensibly connected. 

Sometimes, the connection will be very obvious, but sometimes, a few funny words will crawl in there, and other times, a block of text will seem completely chaotic, but upon closer look will have a surprising, unifying topic. Each of these possible outputs can give a researcher food for thought, which is really what topic modeling is about. 

Topic modeling is great for a large corpus you will never read through. If what you’re working with is vast and unfamiliar, topic modeling is a great place to start. The tool can give you an idea of which topics are covered and help you hone in on your own interests within this unwieldy mass. The converse is also true. If there is a text or corpus you think you know everything about, topic modeling can help you approach this old friend from a new perspective. The tool might arrange words in such a way that affirm, contradict, or complicate your hypotheses and give new wind to a corpus you thought you had already sucked the life out of. 

Playing around with topic modeling led me to two big picture thoughts. First, it became very clear that humanities purists who worry about computational tools and the use of numbers, graphs, and other scary things leading to reductionism can sleep peacefully at night. It’s kind of incredible how when you actually use these tools you realize how truly researcher driven DH methods are. From the input, to the output, to the interpretation of results, every step is heavily dependent on the unique interpretation of the researcher. 

The second thought is I would have been a lot less intimidated to try topic modeling if I had known it was just a tool. When I’ve heard people (especially social scientists) talk about topic modeling, they say it in such a way I thought everyone here was coding their own statistical models and that this was going to be such an intimidating undertaking that I would have to become a computational specialist to do it. I’m no language police, but for this reason, I’ll be saying, “I’m going to use a topic modeling tool on this data,” as opposed to “I’m going to topic model xyz.” (I know some people do code their own tools, but this isn’t what we’re talking about here – we’re in the TL;DR, people!)  

So, if you think topic modeling might be for you, go to the [DSC book](/site/dsc20/) for a step-by-step on how to actually get going! But a quick rundown of what you’ll need is below –. 

1) Corpus or a large text; break it up into smaller "documents" ([see the DSC book](https://datasittersclub.github.io/site/dsc20/#whats-a-document) for what a "document" means and how to do it)

2) [Mallet](https://mimno.github.io/Mallet/topics.html - the Topic Modeling tool.
- To use and download Mallet you need to use [Terminal](/tldr/tldr4/) on your computer 
- Before you download Mallet you need to download Java and Ant, which in my case, I needed to download [Homebrew](https://brew.sh/) before I could download [Java](https://docs.brew.sh/Language-Runtimes-and-Packages#java), [Ant](https://formulae.brew.sh/formula/ant), and then [Mallet](https://formulae.brew.sh/formula/mallet) 

Downloading Mallet is a real pain that everyone struggles with honestly, but good news is you only have to do it once! Or you can use other tools[^*]!

I’m honestly still a bit intimidated by topic modeling, because I do not enjoy using Terminal, but I do know that when I come into a big, new corpus, topic modeling will be my first stop.


<div class="alert alert-info">
  <h4>Real talk</h4>
  <p>Topic modeling doesn’t work for everything!  My original goal was to use the model to study my corpus of TikTok captions on posts about Ukrainian war poetry. My corpus was wrong for topic modeling for a few reasons. First, the captions themselves were all pretty short, and I’m not sure this length was useful for the model to find meaningful patterns. Second, the captions turned out to be too homogenous, and so each topic the model came up with was essentially a grouping of words about war and pain. I wanted specific subtopics (i.e. attack aftermath, survival, life-affirming, burial), but each grouping I received was a mix of war-related words that were not meaningfully distinct from one another. Even though I realized this wasn’t the right tool for my corpus pretty quickly, it was still interesting to play around with the number of topics I asked the model to give me and see the results jump around and vary.</p>
</div>
