---
layout: post
title: "Creating a small LLM"
---
This post will go into detail, not so much on why one might like to create an LLM, but moving rather quickly past the justification of it, will present the results of my efforts to create a small LLM that could serve as a viable base for further research


## Why is it a pain to create an LLM?

There is a level of difficulty in implementing and training properly.
Training a large model such as gpt4 or gpt3 is prohibitively expensive, and even gpt2 is a significant investment in time and resources. (FIND AND CITE COST AND TIME OF TRAINING GPT2)

## Why would someone do it anyway?
My primary reason for doing this is to both demonstrate and enhance my understanding of the topic.  I'm also trying to develop a capability with language models that transcends a given library or tool.

# What will I build?
The meat of the article will discuss a simple decoder-only model created from scratch, using tensorflow 2 and keras.

# Concepts to discuss ahead of time
## Tokenization - BPE
## Attention
## Transformers
## Positional encoding
## Multi-head attention
## Scaled dot product attention
## Decoder-only models

# Implementation decisions
What data?  How much of it? Context size? Model size? Too many decisions to list here.  Any deviation from default parameters will be discussed in the article.
# Data acquisition
# Data preprocessing
What will the data look like? Presumably just a big text column? The question is important given that multiple datasets will be interleaved.

# Model architecture
## how many and what size layers?
## how many heads?
## what activation function?
## what loss function?
## what optimizer?

# Training

