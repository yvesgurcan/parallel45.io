
---
title: Adopting best practices is an investment
date: 2020-04-04
---

Iterating quickly is a strength when your engineers are experimenting with ideas. However, as soon as a project is taking off, it is vital to put best practices in place so that the code can stay maintainable. Why? Because the code that your engineers are writing in a rush today might very well be your tech debt tomorrow. In other words, the time that you are saving by neglecting the start phase of your project will become a hindrance in a few months. When you decide to invest more resources to this new application, the developers who are not familiar with the project might be slowed down by the lack of documentation and tests. If you haven't adopted a style guide for your code, each engineer will add to the chaos by writing code in a different way, this slowing down even more the discovery process for the teammates who will work on the application in the future.

From a business perspective, it might be hard to see the weight of this cognitive load at first. The cost of not adopting best practices right away will eventually come and possibly create tensions in your company, as the expectations of what was just a little experiment might become high very quickly. In order to avoid a situation that might come to a financial and human cost that could kill the project, encourage your developers to follow these guidelines as soon as a project is greenlit instead:

- Write documentation. This entry point to the code base should answer the following questions: How do you start the application? How can you work on it locally? How does the project get deployed to production? Where are the secret keys necessary to run third-party services? If the answer to these questions is not straightforward, what can your team do to improve the process? A good README is key to avoid the bus factor. If something happens to the creator of the project, good documentation will help you to continue development.
- Use a linter to format your code.
