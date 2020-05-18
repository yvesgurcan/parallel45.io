---
title: "Problem solving: Mike Acton's tips for game industry programmers"
date: 2020-05-18
youtube: cV5HArLYajE
image: gdc.png
---

In an excellent [GDC](https://www.gdconf.com/) talk from 2019 called ["Everyone watching this is fired: Tips for game industry programmers"](https://www.youtube.com/watch?v=cV5HArLYajE), [Mike Acton](https://www.linkedin.com/in/mikeacton/) gave incredibly helpful insight on what he obviously considers the best approach to solve technical problems.

Even if his presentation was geared towards game developers, I found that his advice also worked very well for other fields that involve programming such as web development or even, to some extent, to common life problems. I couldn't resist the urge to apply his 50 tips to [a project I had recently kickstarted](https://www.linkedin.com/feed/update/urn:li:activity:6667489817640751104) for one of my [clients](/clients).

According to [Mike Acton's standards](https://www.youtube.com/watch?v=cV5HArLYajE&feature=youtu.be&t=1514), I would have indeed been fired. Good thing my clients are more forgiving than him 😉. The part that got me was the one about [the acceptable ranges of the values I am transforming](https://youtu.be/cV5HArLYajE?t=737). Despite using [strongly typed languages and frameworks](/tech), I had not thought deeply enough about input validation and realized that I might have allowed users to enter negative amounts in this invoicing system which, you can imagine, would have screwed up things. Phew, that was close.

I found myself very inspired by the video and decided to templatize (yes, "templatize" is a word, [the Urban Dictionary says so](https://www.urbandictionary.com/define.php?term=templatize) 😛) Mike Acton's tips for my own projects starting now.

As a consequence, I've created a table of 31 questions (see below) that must be answered before starting writing a single line of code on a project at [Parallel45](/about). A very useful tool that is already improving the quality of our work and make our clients even happier!

Thanks, Mike!

| #   | Question                                                                           |
| --- | ---------------------------------------------------------------------------------- |
| 1.  | What is the problem I am trying to solve?                                          |
| 2.  | Why is this problem important to solve?                                            |
| 3.  | Where is the limit where solving this problem is not worth it?                     |
| 4.  | What is plan B?                                                                    |
| 5.  | What are the steps required to solve this problem?                                 |
| 6.  | What are the unknowns and risks associated with the solution?                      |
| 7.  | Which framework I created can I use and modify to solve this problem?              |
| 8.  | How do I know when I'm done solving the problem?                                   |
| 9.  | What am I trying to prove? What is my hypothesis?                                  |
| 10. | How can I prove my hypothesis is wrong?                                            |
| 11. | What are the latency requirements to solve my problem?                             |
| 12. | What is the throughput needed to solve my problem?                                 |
| 13. | What is the most common use case of the solution I'm developing?                   |
| 14. | What are the most common actual real-life values I am manipulating?                |
| 15. | What are the acceptable ranges of the values I am manipulating?                    |
| 16. | What happens when data outside this range enters the system?                       |
| 17. | What does the input data looks like?                                               |
| 18. | What is the frequency of change of the actual real-life values I am manipulating?  |
| 19. | Where is the documentation of the tools I most commonly use to solve this problem? |
| 20. | What is the slowest part of the system's workflow for my users?                    |
| 21. | What information of my system do users need to make effective use of the solution? |
| 22. | Which hardware is this solution designed for?                                      |
| 23. | How does this hardware affect the design of my system?                             |
| 24. | How does my solution perform? How long does it take?                               |
| 25. | How can I optimize my solution?                                                    |
| 26. | How can I debug live release builds of my solution?                                |
| 27. | Which data does the solution read and where does it come from?                     |
| 28. | How often do I read data I do not need as part of my solution?                     |
| 29. | Which data am I writing and where is it used?                                      |
| 30. | How often do I write data I do not need as part of my solution?                    |
| 31. | How is the data articulated in memory?                                             |

And, remember, your project is not future proof nor platform independent! Don't forget to sit and watch actual users of your system to understand the pain points and how they interact with it.
