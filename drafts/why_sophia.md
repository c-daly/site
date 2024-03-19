# Why LLM?
(This post has some scope issues in that it's only supposed to be about LLMs, but it's really a post about Sophia)

LLMs are fascinating and their emergent capabilities make them worthy of study.  Obviously, they have utility immediately in the sense that any knowledgable developer can pull pre-trained models from a hub and get to work.  That doesn't provide a lot of motivation for rolling your own LLM.  Neither does the fact that it's prohibitively expenseive for an individual to train an LLM.  So why bother?

The first reason is simply education.  I believe you can only progress so far using other people's tools.  At some point you need to peek under the covers to make changes, or - you'll never make any changes.

The second reason is my abiding interest in agents. I've been thinking about how a really effective, yet efficient agent might be designed, and I keep coming back to the idea of multiple, smallish models working in concert on narrow tasks.  You could put a truly smart, logical system - the function use capability of gpt3, for instance - at the center of a network of smaller, more tightly-focused models. 

This all results in the need to understand how to train and use LLMs, as well as automate repetitive tasks and record results.

This post is the first public document of that effort.


I envision creating a gpt2 style model without too much trouble.  I'll want to experiment with different hyperparameter values, and even change training objectives.  I'll want to be able to do that with as little effort as possible, and I'll be developing a workflow through google's vertex AI and associated tools.

On top of that I'm going to want sophisticated visualizations and metrics to help make decisions.

Once that framework is in place, it should be possible to fairly effortlessly train and evaluate models on a variety of tasks, and I'll be starting to create different sorts of models for different purposes.  For instance, I'll be interested in a BART-style model for semantic analysis and intent detection.

I can't hope to produce anything to match gpt4, so I expect that will be the brain behind all of this.  I see it being used exclusively to invoke functions provided to it which will have the side effect of updating the state of the system, which is to say updating the scratch pad the agent has to draw on when providing responses.  It might be that gpt4 will be used to produce the actual text responses, but I'll be wanting to see if a smaller model that is spoon-fed all the necessary information can produce a coherent response without having to resort to gpt4.



