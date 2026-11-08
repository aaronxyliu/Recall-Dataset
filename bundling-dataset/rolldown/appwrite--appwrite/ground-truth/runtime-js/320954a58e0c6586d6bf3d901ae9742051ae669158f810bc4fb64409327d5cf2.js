import{r as e}from"./index-ARRzLOvi.js";import{t}from"./toc-BrPQZju3.js";import{a as n,i as r,n as i,o as a,s as o}from"./frontmatter-DG2uBz0s.js";import{c as s,l as ee,t as c}from"./route-head-BQRfaoJg.js";import{n as l}from"./page-meta-CaDt-YcQ.js";const u=[{slug:`mcp`,heading:`MCP`,description:`Platforms with Model Context Protocol support`},{slug:`ai`,heading:`AI`,description:`Machine learning and AI capabilities`},{slug:`auth`,heading:`Auth`,description:`User authentication and authorization`},{slug:`databases`,heading:`Databases`,description:`Manage database systems`},{slug:`logging`,heading:`Logging`,description:`Monitor and analyze application logs`},{slug:`messaging`,heading:`Messaging`,description:`Real-time communication platforms`},{slug:`payments`,heading:`Payments`,description:`Secure online payment processing`},{slug:`search`,heading:`Search`,description:`Implement search functionalities`},{slug:`sites`,heading:`Sites`,description:`Deploy and host web applications`},{slug:`storage`,heading:`Storage`,description:`Storage for data and media`},{slug:`deployments`,heading:`Deployments`,description:`Seamlessly deploy your code`}],d=u.map(e=>e.slug);function f(e){return u.find(t=>t.slug===e)}function te(e){return f(e)?.heading??e}function ne(e){return d.includes(e)}var re=`---
layout: integration
title: Text to speech with ElevenLabs
description: Transform text into natural, human-like speech
date: 2025-11-12
featured: true
isPartner: true
isNew: true
cover: /images/integrations/ai-elevenlabs-text-to-speech/cover.avif
category: ai
product: 
    avatar: '/images/integrations/avatars/elevenlabs.avif'
    vendor: ElevenLabs
    description: 'ElevenLabs is an advanced AI voice technology platform that generates natural, human-like speech from text using cutting-edge voice synthesis and cloning technology.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/ai-elevenlabs-text-to-speech/cover.avif
    - /images/integrations/ai-elevenlabs-text-to-speech/api-key.avif
    - /images/integrations/ai-elevenlabs-text-to-speech/template.avif
    - /images/integrations/ai-elevenlabs-text-to-speech/variable.avif
---

ElevenLabs provides developers with powerful tools to integrate realistic, human-like voice capabilities into their applications through APIs and SDKs.

ElevenLabs’ Text to Speech API converts written text into spoken audio with very natural sounding voices, capturing realistic intonation, pacing, emotion and context awareness.

# How does the integration work?

You can utilize a pre-built Appwrite Site template with text-to-speech capabilities implemented using ElevenLabs. This allows you to convert any piece of text to a human-like voice and download the generated audio.

# How to implement

To implement the ElevenLabs text-to-speech integration, there are several steps you must complete:

## Step 1: Sign up for ElevenLabs

First, you must [sign up for an ElevenLabs account](https://elevenlabs.io/app/sign-up). Once your account is set up, navigate to the [Developers](https://elevenlabs.io/app/developers) page from the sidebar, click on the **API Keys** tab, and generate an **API key** with the **Text to Speech** endpoint access enabled. Save this API key for further usage.

![Create API key](/images/integrations/ai-elevenlabs-text-to-speech/api-key.avif)

## Step 2: Create the Appwrite Site

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](/docs/advanced/self-hosting) if you haven’t already. If you decide to self-host Appwrite, there are [additional setup steps](/docs/advanced/self-hosting/configuration/sites) to use Appwrite Sites templates.

Head over to the Appwrite console, navigate to the **Sites** page, click on **Create site** and select the **Clone a template** option, and search for the **Text-to-speech with ElevenLabs** site template.

![Site template](/images/integrations/ai-elevenlabs-text-to-speech/template.avif)

During the setup process, add the **ElevenLabs API key** in the **Variables** section.

![Environment variables](/images/integrations/ai-elevenlabs-text-to-speech/variable.avif)

## Step 3: Test the site

Once all the steps are complete, it is time to test the site! You can enter any text you like (or use the pre-filled example), update the additional configuration options, and generate an audio file.

# Read more about ElevenLabs and Appwrite Sites

If you would like to learn more about ElevenLabs and Appwrite Sites, we have some resources that you should visit:

- [Sign up for ElevenLabs](https://elevenlabs.io/app/sign-up)
- [ElevenLabs text to speech docs](https://elevenlabs.io/docs/capabilities/text-to-speech)
- [Appwrite Sites docs](/docs/products/sites)
- [Build with Appwrite Sites templates](/docs/products/sites/templates)
- [Appwrite Sites API reference](/docs/references/cloud/server-nodejs/sites)`,ie=`---
layout: integration
title: Image classification with Hugging Face
description: Understand and label the contents of images
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/ai-hugging-face-image-classification/cover.avif
category: ai
product: 
    avatar: '/images/integrations/avatars/hugging-face.avif'
    vendor: Hugging Face
    description: 'Hugging Face is a leading AI company that offers an extensive library of pre-trained models for various natural language processing and computer vision tasks, including image classification.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/ai-hugging-face-image-classification/cover.avif
    - /images/integrations/ai-hugging-face-image-classification/appwrite-functions-image-classification-hugging-face.avif
    - /images/integrations/ai-hugging-face-image-classification/appwrite-functions-image-classification-hugging-face.avif
    - /images/integrations/ai-hugging-face-image-classification/appwrite-functions-env-variables-image-classification-hugging-face.avif
---

Image classification is a key application of machine learning that involves categorizing images into predefined classes. Hugging Face is a leading AI company that offers an extensive library of pre-trained models for various natural language processing and computer vision tasks, including image classification. By integrating Hugging Face's powerful models with your applications, you can leverage state-of-the-art technology to automate and enhance image analysis.

# How does the integration work?

You can utilize a pre-built Appwrite function template to add image classification with Hugging Face to your app. This will allow you to upload an image to an Appwrite storage bucket and store labels from the image in an Appwrite collection.

# How to implement

To implement the Hugging Face image classification function, there are several steps you must complete:

## Step 1: Sign up for Hugging Face

First, you must [sign up for a Hugging Face account](https://huggingface.co/join). Once your account is set up, visit your profile settings, head to the [Access Tokens](https://huggingface.co/settings/tokens) page, and create an **access token** with the **Inference** permissions. Save this token for further usage.

![Create API token](/images/integrations/ai-hugging-face-image-classification/hugging-face-create-api-token.avif)

## Step 2: Create the Appwrite Function

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. If you decide to self-host Appwrite, there are [additional setup steps](https://appwrite.io/docs/advanced/self-hosting/functions) to use Appwrite Function templates.

Head over to the Appwrite console, navigate to the **Functions** page, click on the **Templates** tab, and search for the **Image Classification** function template.

![Function template](/images/integrations/ai-hugging-face-image-classification/appwrite-functions-image-classification-hugging-face.avif)

During the setup process, click on the checkbox to generate an Appwrite API key on completion and add the **Hugging Face access token** in the **Variables** step. If you are self-hosting Appwrite, then click on the **optional variables** dropdown and update the Appwrite endpoint to your instance’s publicly accessible endpoint. 

![Environment variables](/images/integrations/ai-hugging-face-image-classification/appwrite-functions-env-variables-image-classification-hugging-face.avif)

Then, create a new repository with the default branch and root directory settings. You can edit this repository later to update the function logic.

## Step 3: Test the function

Once all the steps are complete, it is time to test the function! Use the Appwrite console or one of Appwrite’s SDKs to [upload an image](https://appwrite.io/docs/references/cloud/client-web/storage#createFile) to the \`image_classification\` storage bucket. If successful, you will find a response saved in the \`image_classification\` collection in the \`ai\` database in the following format:
    
| image | labels |
| --- | --- |
| \`66a13bf100318c752f1b\` | \`[{"label":"llama","score":0.9664694666862488},{"label":"comic book","score":0.019199883565306664},{"label":"suit, suit of clothes","score":0.005637330934405327},{"label":"television, television system","score":0.00037627643905580044},{"label":"muzzle","score":0.00019786457414738834}]\` |
    
The \`image\` attribute contains the ID of the image file uploaded to the \`image_classification\` storage bucket, and the \`labels\` attribute contains the response from Hugging Face, including all the labels and their confidence score.
    

# Read more about Hugging Face and Appwrite Functions

If you would like to learn more about Hugging Face and Appwrite Functions, we have some resources that you should visit:

- [Sign up for Hugging Face](https://huggingface.co/login)
- [Set up the Hugging Face provider in Appwrite](https://appwrite.io/docs/products/ai/tutorials/image-classification)
- [Introducing the Python machine learning runtime](https://appwrite.io/blog/post/introducing-python-machine-learning-runtime)
- [Find more function templates](https://appwrite.io/docs/products/functions/templates)
- [Appwrite Functions API reference](https://appwrite.io/docs/references)`,ae=`---
layout: integration
title: Language translation with Hugging Face
description: Translate text between languages
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/ai-hugging-face-language-translation/cover.avif
category: ai
product: 
    avatar: '/images/integrations/avatars/hugging-face.avif'
    vendor: Hugging Face
    description: 'Hugging Face is a leading AI company that offers an extensive library of pre-trained models for various natural language processing and computer vision tasks, including image classification.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/ai-hugging-face-language-translation/cover.avif
    - /images/integrations/ai-hugging-face-language-translation/hugging-face-create-api-token.avif
    - /images/integrations/ai-hugging-face-language-translation/language-translation-function-template.avif
    - /images/integrations/ai-hugging-face-language-translation/language-translation-env-variables.avif
    - /images/integrations/ai-hugging-face-language-translation/language-translation-demo.avif
---

Language translation is a fundamental task in natural language processing that involves converting text from one language to another. Hugging Face offers a robust library of pre-trained models for various natural language processing tasks, including language translation. By integrating Hugging Face's advanced models with your applications, you can automate and enhance translating text across different languages.

# How does the integration work?

You can utilize a pre-built Appwrite function template to add language translation with Hugging Face to your app. This will allow you to translate text from one language to another.

# How to implement

To implement the Hugging Face language translation function, there are several steps you must complete:

## Step 1: Sign up for Hugging Face

First, you must [sign up for a Hugging Face account](https://huggingface.co/join). Once your account is set up, visit your profile settings, head to the [Access Tokens](https://huggingface.co/settings/tokens) page, and create an **access token** with **Inference** permissions. Save this token for further usage.

![Create API token](/images/integrations/ai-hugging-face-language-translation/hugging-face-create-api-token.avif)

## Step 2: Create the Appwrite Function

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. If you decide to self-host Appwrite, there are [additional setup steps](https://appwrite.io/docs/advanced/self-hosting/functions) to use Appwrite Function templates.

Head over to the Appwrite console, navigate to the **Functions** page, click the **Templates** tab, and search for the **Language Translation** function template.

![Function template](/images/integrations/ai-hugging-face-language-translation/language-translation-function-template.avif)

During the setup process, add the **Hugging Face access token** in the **Variables** step.

![Environment variables](/images/integrations/ai-hugging-face-language-translation/language-translation-env-variables.avif)

Then, create a new repository with the default branch and root directory settings. You can edit this repository later to update the function logic.

## Step 3: Test the function

Once the function is ready, visit the **Domains** tab on the **Functions** page and copy the domain URL to test the function. You can open this URL in your browser to test with our pre-built interface.

![Demo](/images/integrations/ai-hugging-face-language-translation/language-translation-demo.avif)

You can also use tools like Postman, cURL, or your favorite programming language to send a POST (HTTP) request with a prompt and receive a response from the function.

\`\`\`bash
curl -X POST http://DEPLOYED_FUNCTION_DOMAIN \\
-H "Content-Type: application/json" \\
-d '{"source": "What is Appwrite?"}' 
\`\`\`

# Read more about Hugging Face and Appwrite Functions

If you would like to learn more about Hugging Face and Appwrite Functions, we have some resources that you should visit:

- [Sign up for Hugging Face](https://huggingface.co/login)
- [Set up the Hugging Face provider in Appwrite](https://appwrite.io/docs/products/ai/tutorials/language-translation)
- [Find more function templates](https://appwrite.io/docs/products/functions/templates)
- [Appwrite Functions API reference](https://appwrite.io/docs/references)`,oe=`---
layout: integration
title: Speech recognition with Hugging Face
description: Process speech audio into text
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/ai-hugging-face-speech-recognition/cover.avif
category: ai
product: 
    avatar: '/images/integrations/avatars/hugging-face.avif'
    vendor: Hugging Face
    description: 'Hugging Face is a leading AI company that offers an extensive library of pre-trained models for various natural language processing and computer vision tasks, including image classification.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/ai-hugging-face-speech-recognition/cover.avif
    - /images/integrations/ai-hugging-face-speech-recognition/token.avif
    - /images/integrations/ai-hugging-face-speech-recognition/template.avif
    - /images/integrations/ai-hugging-face-speech-recognition/variables.avif
---

Speech recognition is a transformative technology that converts spoken language into text. Hugging Face, a prominent AI company offers a comprehensive library of pre-trained models for various natural language processing tasks, including speech recognition. By integrating Hugging Face's models with your applications, you can automate and enhance the transcription and analysis of audio content.

# How does the integration work?

You can utilize a pre-built Appwrite function template to add speech recognition with Hugging Face to your app. This will allow you to upload an audio file to an Appwrite storage bucket and store the recognized speech in an Appwrite collection as text.

# How to implement

To implement the Hugging Face speech recognition function, there are several steps you must complete:

## Step 1: Sign up for Hugging Face

First, you must [sign up for a Hugging Face account](https://huggingface.co/join). Once your account is set up, visit your profile settings, head to the [Access Tokens](https://huggingface.co/settings/tokens) page, and create an **access token** with the **Inference** permissions. Save this token for further usage.

![Create API token](/images/integrations/ai-hugging-face-speech-recognition/token.avif)

## Step 2: Create the Appwrite Function

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. If you decide to self-host Appwrite, there are [additional setup steps](https://appwrite.io/docs/advanced/self-hosting/functions) to use Appwrite Function templates.

Head over to the Appwrite console, navigate to the **Functions** page, click the **Templates** tab, and search for the **Speech Recognition** function template.

![Function template](/images/integrations/ai-hugging-face-speech-recognition/template.avif)

During the setup process, click the checkbox to generate an Appwrite API key on completion and add the **Hugging Face access token** in the **Variables** step. If you are self-hosting Appwrite, click the **optional variables** dropdown and update the Appwrite endpoint to your instance’s publicly accessible endpoint. 

![Env variables](/images/integrations/ai-hugging-face-speech-recognition/variables.avif)

Then, create a new repository with the default branch and root directory settings. You can edit this repository later to update the function logic.

## Step 3: Test the Function

Once all the steps are complete, it is time to test the function! Use the Appwrite console or one of Appwrite’s SDKs to [upload an audio file](https://appwrite.io/docs/references/cloud/client-web/storage#createFile) to the \`speech_recognition\` storage bucket. If successful, you will find a response saved in the \`speech_recognition\` collection in the \`ai\` database in the following format:

| audio | speech |
| --- | --- |
| 66a7b386000a1042305c | my thought i have nobody by a beauty and will as you've poured mr rochester is sub and that so don't find simpus and devoted about to at might in a |

The \`audio\` attribute contains the ID of the audio file uploaded to the \`speech_recognition\` storage bucket, and the \`speech\` attribute contains the response from Hugging Face.
    

# Read more about Hugging Face and Appwrite  Functions

If you would like to learn more about Hugging Face and Appwrite Functions, we have some resources that you should visit:

- [Sign up for Hugging Face](https://huggingface.co/login)
- [Set up the Hugging Face provider in Appwrite](https://appwrite.io/docs/products/ai/tutorials/object-detection)
- [Find more function templates](https://appwrite.io/docs/products/functions/templates)
- [Appwrite Functions API reference](https://appwrite.io/docs/references)`,p=`---
layout: integration
title: Prompt ChatGPT
description: Send text prompts to OpenAI GPT-3.5 and receive text generations
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/ai-openai/cover.avif
category: ai
product: 
    avatar: '/images/integrations/avatars/openai.avif'
    vendor: OpenAI
    description: 'The OpenAI API allows you to integrate advanced AI models into your app.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/ai-openai/cover.avif
    - /images/integrations/ai-openai/api-key.avif
    - /images/integrations/ai-openai/template.avif
    - /images/integrations/ai-openai/variables.avif
    - /images/integrations/ai-openai/demo.avif
---

The OpenAI API allows you to integrate advanced AI models into your app. With the API, you can access powerful language models like GPT-3.5, GPT-4, and GPT-4o, which can perform a variety of tasks, including text generation, translation, summarization, and even coding assistance.

The API is designed to be user-friendly, providing endpoints that can be easily accessed through HTTP requests. OpenAI also provides detailed documentation and examples to help users get started and make the most of the API.

# How does the integration work?

Appwrite integrates OpenAI’s API to provide you with access to powerful text generation out-of-the-box with prospects to implement other features such as image creation and language translations.

# How to implement

To implement the OpenAI, there are several steps you must complete:

## Step 1: Create an Open AI account

First, [create an account on the OpenAI platform](https://platform.openai.com/) and set up your default project. Visit the [**API keys**](https://platform.openai.com/api-keys) page to create your secret key. Save this key for later usage.

![API key](/images/integrations/ai-openai/api-key.avif)

## Step 2: Create the Appwrite Function

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. In case you decide to self-host Appwrite, there are [additional setup steps](https://appwrite.io/docs/advanced/self-hosting/functions) to use Appwrite Function templates.

Head over to the Appwrite console, navigate to the **Functions** page, click on the **Templates** tab, and search for the **ChatGPT** function template.

![Function template](/images/integrations/ai-openai/template.avif)

Add the **OpenAI API key** you saved in the **Variables** step. Then, create a new repository with the default branch and root directory settings. You can edit this repository later to update the function logic.

![Env variables](/images/integrations/ai-openai/variables.avif)

## Step 3: Test the function

Once the function is ready, visit the **Domains** tab on the **Functions** page and copy the domain URL to test the function. You can open this URL in your browser to test with our pre-built interface.

![Demo](/images/integrations/ai-openai/demo.avif)

You can also use tools like Postman, cURL, or your favorite programming language to send a POST (HTTP) request with a prompt and receive a response from the Perplexity API.

\`\`\`bash
curl -X POST http://DEPLOYED_FUNCTION_DOMAIN \\
-H "Content-Type: application/json" \\
-d '{"prompt": "What is Appwrite?"}' 
\`\`\`

# Read more about OpenAI and Appwrite Functions

If you would like to learn more about Open AI, visit these resources:

- [Create an OpenAI developer account](https://platform.openai.com/docs/quickstart)
- [Integrating OpenAI - Appwrite Docs](https://appwrite.io/docs/products/ai/integrations/openai)
- [Appwrite Functions docs](https://appwrite.io/docs/products/functions)`,m=`---
layout: integration
title: Prompt Perplexity
description: Send text prompts to Perplexity and receive text generations
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/ai-perplexity/cover.avif
category: ai
product: 
    avatar: '/images/integrations/avatars/perplexity.avif'
    vendor: Perplexity
    description: 'Perplexity is an advanced AI tool that generates high-quality text based on given prompts.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/ai-perplexity/cover.avif
    - /images/integrations/ai-perplexity/api-key.avif
    - /images/integrations/ai-perplexity/template.avif
    - /images/integrations/ai-perplexity/variables.avif
    - /images/integrations/ai-perplexity/demo.avif
---

Perplexity is an advanced AI tool that generates high-quality text based on given prompts. It's designed to improve applications by providing sophisticated text analysis and generation capabilities.

# How does the integration work?

You can utilize a pre-built Appwrite function template to create a chatbot using Perplexity. This will allow you to send text prompts to the Perplexity API and receive generated text responses, enriching your app's functionality.

# How to implement

To implement the Perplexity integration, follow these simple steps:

## Step 1: Create a Perplexity account

First, [create an account on Perplexity](https://perplexity.ai), head to the [API Settings](https://www.perplexity.ai/settings/api), configure your credit card for payments, and generate an API key. Save this API key for further usage.

![API key](/images/integrations/ai-perplexity/api-key.avif)

## Step 2: Create the Appwrite Function

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. In case you decide to self-host Appwrite, there are [additional setup steps](https://appwrite.io/docs/advanced/self-hosting/functions) to use Appwrite Function templates.

Head over to the Appwrite console, navigate to the **Functions** page, click on the **Templates** tab, and search for the **Perplexity** function template.

![Function template](/images/integrations/ai-perplexity/template.avif)

Add the **Perplexity API key** you saved in the **Variables** step. Then, create a new repository with the default branch and root directory settings. You can edit this repository later to update the function logic.

![Env variables](/images/integrations/ai-perplexity/variables.avif)

## Step 3: Test the function

Once the function is ready, visit the **Domains** tab on the **Functions** page and copy the domain URL to test the function. You can open this URL in your browser to test with our pre-built interface.

![Demo](/images/integrations/ai-perplexity/demo.avif)

You can also use tools like Postman, cURL, or your favorite programming language to send a POST (HTTP) request with a prompt and receive a response from the Perplexity API.

\`\`\`bash
curl -X POST http://DEPLOYED_FUNCTION_DOMAIN \\
-H "Content-Type: application/json" \\
-d '{"prompt": "What is Appwrite?"}' 
\`\`\`

# Read more about Perplexity and Appwrite Functions

If you would like to learn more about Perplexity and Appwrite Functions, we have some resources that you should visit:

- [Integrating Perplexity - Appwrite Docs](https://appwrite.io/docs/products/ai/integrations/perplexity)
- [More on Appwrite AI integrations](https://appwrite.io/blog/post/announcing-appwrite-new-ai-integrations)
- [Appwrite Functions docs](https://appwrite.io/docs/products/functions)`,h=`---
layout: integration
title: Deployments with Entire
description: Deploy Appwrite Sites and Functions on every push to an Entire repository
date: 2026-10-27
featured: true
isPartner: true
isNew: true
cover: /images/integrations/deployments-entire/cover.avif
category: deployments
product:
    avatar: '/images/integrations/avatars/entire.avif'
    vendor: Entire
    description: 'Entire is a Git forge built for development with coding agents that keeps the agent session behind each change next to the code.'
platform:
    - 'Cloud'
images:
    - /images/integrations/deployments-entire/cover.avif
    - /images/integrations/deployments-entire/git-configuration.avif
    - /images/integrations/deployments-entire/git-installation.avif
    - /images/integrations/deployments-entire/create-site-import.avif
    - /images/integrations/deployments-entire/deployments-list.avif
---

[Entire](https://entire.com) is a Git forge built for development with coding agents. It hosts repositories on its own Git network across several regions and keeps the agent session behind each change next to the code, so a commit can carry the conversation that produced it. Work is organized into trails, Entire's unit of work, which follow one branch from the first intent to shipped code.

# How does the integration work?

Entire is one of Appwrite's Git providers for [Appwrite Sites](/docs/products/sites) and [Appwrite Functions](/docs/products/functions). You connect an Entire project to your Appwrite project once, then create Sites and Functions from its repositories. Appwrite installs as a plugin on your Entire project: Entire notifies Appwrite of each push, and Appwrite fetches that commit, builds it, and reports the result back.

Each push to a connected repository can create a deployment:

- **Production branch:** the deployment builds and activates.
- **Any other branch:** the deployment builds but stays inactive. Sites get [preview links](/docs/products/sites/previews) for the branch and the commit, which only members of your Appwrite organization can open.
- **Every build:** Appwrite reports the result to the commit on Entire as a check run, unless **Silent mode** is on.

Appwrite asks Entire to read and write repository contents, write checks on commits, and create repositories in the project. It only reaches the repositories you select, plus any it creates for you, and it cannot delete repositories on Entire.

{% info title="Available on Appwrite Cloud" %}
Entire is available as a Git provider on [Appwrite Cloud](/sign-up). The self-hosted Appwrite Console does not offer new Entire connections.
{% /info %}

# Prerequisites

- An [Appwrite Cloud](/sign-up) account with a project.
- An [Entire account](https://entire.com/login).
- The [Entire CLI](https://docs.entire.com/installation), installed and signed in with \`entire login\`.

# How to implement

To deploy from Entire to Appwrite, there are several steps you must complete:

## Step 1: Create or mirror a repository on Entire

To deploy code you already have, create the repository and push your code before you connect it. If you start from an Appwrite template instead, Appwrite can create the repository for you, as described in Step 3. Entire repositories live inside projects, and each Appwrite installation connects to one Entire project, so keep the repositories you plan to deploy in the same project when you can.

Create a project and a repository with the Entire CLI, then point your local project at the repository and push:

\`\`\`bash
entire project create acme --owner acme-org
entire repo create storefront --project acme
entire repo remote add origin --override /et/acme/storefront
git push -u origin main
\`\`\`

Here the project belongs to the \`acme-org\` organization. To own it with your account instead, pass \`--owner github:<handle> --owner-type account\`. You can also create the project and the repository on Entire. Entire's [repository docs](https://docs.entire.com/guides/repositories/repository) cover regions in more detail.

If your code lives on GitHub, you don't have to move it. Create a [GitHub repository mirror](https://docs.entire.com/guides/repositories/mirrors) on Entire, and Appwrite deploys from the mirror. Mirroring needs an Entire account linked to GitHub and the [Entire GitHub App](https://docs.entire.com/guides/repositories/github-app-access) with access to the repository. A mirror belongs to no Entire project, so when you connect Entire in the next step, choose the mirror's GitHub owner instead. The mirror then appears under \`gh/<owner>\` in the repository picker.

\`\`\`bash
entire repo mirror add /gh/acme/storefront --cluster aws-us-east-2.entire.io
entire repo remote add entire /gh/acme/storefront
\`\`\`

\`--cluster\` sets the region the mirror lives in. Without it, a terminal asks you to pick regions. The second command adds the mirror as a remote named \`entire\` and leaves \`origin\` pointing at GitHub.

GitHub stays the source of truth. Entire syncs pushes made on GitHub to the mirror within seconds, and Appwrite deploys them. Entire protects a mirror's default branch, so push your production branch to \`origin\`. Other branches can go to either remote, since Entire forwards pushes through the mirror to GitHub.

To move a mirrored repository off GitHub, [detach it](https://docs.entire.com/guides/repositories/repository) into an Entire project in the same region as the mirror. For a mirror on \`aws-us-east-2\`, create the target project with \`--region us\`. Run the detach with \`--dry-run\` first to check its requirements, such as the mirror being on a single cluster. The old \`/gh/\` address stops resolving afterwards, so point \`origin\` at the new repository and remove the \`entire\` remote:

\`\`\`bash
entire repo mirror detach /gh/acme/storefront --into /et/acme/storefront
entire repo remote add origin --override /et/acme/storefront
git remote remove entire
\`\`\`

GitHub stops syncing, and the installation for the GitHub owner no longer covers the repository. Connect Entire again, choose the new project, and reconnect each Site and Function to the repository so later pushes deploy.

## Step 2: Connect Entire to your Appwrite project

In the Appwrite Console, open your project, go to **Project settings** > **Git configuration**, and click **Connect to Entire**. If the project already has a Git installation, the button reads **Connect with Entire**.

![The Git configuration card of an Appwrite project with a Connect to Entire button](/images/integrations/deployments-entire/git-configuration.avif)

Appwrite's installation page opens on Entire. Choose your Entire project, then pick the access Appwrite gets: **All repositories**, which also covers repositories you add to the project later, or **Only selected repositories**. Click **Install**, and Entire sends you back to the Console, where your Entire project appears in the **Owner** column of the installation list.

![The Git configuration card listing the acme Entire project as an installation](/images/integrations/deployments-entire/git-installation.avif)

Each installation covers one Entire project. To deploy from another project, click **Connect with Entire** again. You can also start from the Site or Function creation wizard: when the project has no Git installation yet, **Import repository** shows a **Connect Entire** button that runs the same flow.

## Step 3: Create a Site or Function from the repository

To deploy a site, go to **Sites** and click **Create site**. Under **Import repository**, open the organization menu and choose your Entire project, which is marked with the Entire icon. Find your repository and click **Connect**.

![The Import repository list of the Create site wizard showing the storefront repository from the acme Entire project](/images/integrations/deployments-entire/create-site-import.avif)

Appwrite reads the \`package.json\` in the root directory, detects the framework, and fills in the install command, build command, and output directory. Confirm the **Branch** and **Root directory**, add any **Environment variables**, and click **Deploy**. Because the first deployment comes from the production branch, it activates as soon as the build succeeds.

To deploy a function, go to **Functions** and click **Create function**. Under **Connect Git repository**, choose your Entire project, find your repository, and click **Connect**. Appwrite detects the runtime from the repository. Set the **Root directory** and the **Entrypoint**, then click **Create and deploy**.

To start from a template instead, pick one when you create the site or function, and choose **Connect your repository**. Under **Git repository**, choose **Create new repository**, pick your Entire project under **Organization**, enter a **Repository name**, and click **Create**. Appwrite creates a private repository in that project, commits the template into it, and deploys it.

## Step 4: Push to deploy

From now on, every push to the repository creates a deployment. Pushes to the production branch build and activate, replacing the previous production deployment. Pushes to any other branch build without activating, so production keeps serving the previous version until you click **Activate**. In the **Deployments** list, a branch deployment shows as **Ready** while the production deployment stays **Active**.

![The deployments list with a branch deployment ready and the main deployment active](/images/integrations/deployments-entire/deployments-list.avif)

Appwrite reports each build back to the commit on Entire as a check run. The check moves from starting to building to succeeded or failed, and its summary links to the deployment in the Console and, for Sites, to the running preview. When the branch has a trail, the check shows under its **Appwrite** gate. In the Console, each deployment links back to its repository, branch, and commit on Entire.

[Branch and path filters](/blog/post/announcing-git-deployment-triggers), root directories, install and build commands, and environment variables work exactly as they do for any Git-connected Site or Function. Set filters under **Settings** > **Build** > **Triggers**. Path filters match from the repository root, so a site and a function in the same repository can each rebuild only when their own files change.

For the full walkthrough, from creating the repository to branch previews and path filters for a monorepo, follow the [step-by-step tutorial](/blog/post/deploy-from-entire-to-appwrite).

# Manage the Entire connection

- **Add repositories.** If a repository is missing from the picker, the installation doesn't cover it. Click **Update Entire permissions** under **Can't find a repository?** in the creation wizard, or open the installation's menu in **Project settings** > **Git configuration** and click **Configure**. Both reopen Appwrite's installation page on Entire. Choosing **All repositories** there covers new repositories automatically.
- **Disconnect from Appwrite.** Open the installation's menu in **Project settings** > **Git configuration** and click **Disconnect**. The dialog lists the Sites and Functions that use the installation before you confirm.
- **Uninstall from Entire.** If you remove Appwrite from your Entire project, Appwrite disconnects every Site and Function that deployed from it and removes the installation. Their current deployments keep serving, but new pushes stop deploying.

# Troubleshooting Entire deployments

- **The repository isn't listed.** Add it to the installation as described in [Manage the Entire connection](#manage-the-entire-connection), then click **Refresh repositories** in the wizard.
- **Appwrite can't create the repository.** The installation needs Entire's permission to create repositories. Accept Appwrite's updated permissions on Entire if it asks for them, or create the repository on Entire and connect it instead. A name that's already taken in the project fails too.
- **The framework shows as Other.** Appwrite detects the framework from the \`package.json\` in the root directory. If your app lives in a subfolder, set the **Root directory** to that folder, and if Appwrite still doesn't recognize the framework, select it yourself.
- **A push didn't create a deployment.** Check that the repository is connected to the Site or Function, that the branch matches the branch filters, and that at least one changed file matches the path filters. For the first push of a new branch, Appwrite compares it with the point where it branched off the default branch.
- **No check runs appear on the commit.** Silent mode stops Appwrite from reporting builds back to Entire. Turn it off in the site or function's Git settings.
- **The build fails.** Open the deployment in the Console and read the build logs. Most failures come from a root directory that doesn't contain the app, or a build command that doesn't match the package manager.

# Read more about Entire and Appwrite

If you would like to learn more about Entire and Appwrite, we have some resources that you should visit:

- [How to deploy from Entire to Appwrite Sites and Functions](/blog/post/deploy-from-entire-to-appwrite)
- [Appwrite partners with Entire to deploy Sites and Functions](/blog/post/announcing-appwrite-entire-partnership)
- [Deploy Sites from Git](/docs/products/sites/deploy-from-git)
- [Deploy Functions from Git](/docs/products/functions/deploy-from-git)
- [Preview deployments](/docs/products/sites/previews)
- [Install the Entire CLI](https://docs.entire.com/installation)
`,g=`---
layout: integration
title: Deployments with GitHub
description: Manage versions and deploy Appwrite Functions
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/deployments-github/cover.avif
category: deployments
product: 
    avatar: '/images/integrations/avatars/github.avif'
    vendor: GitHub
    description: 'GitHub is a web-based platform that facilitates version control and collaborative software development using Git.'
platform: 
    - 'Self-hosted'
images: 
    - /images/integrations/deployments-github/cover.avif
    - /images/integrations/deployments-github/create.avif
    - /images/integrations/deployments-github/installed.avif
---

GitHub is a web-based platform that facilitates version control and collaborative software development using Git. It enables developers to host, review code, manage projects, and work together on software development. GitHub offers tools for issue tracking, project management, and documentation, enhancing team collaboration. It hosts millions of open-source projects from developers across the world.

# How does the integration work?

Appwrite supports a Git integration to enable the generation of repositories for function templates and manage automatic deployments for any Appwrite Functions through GitHub.

> Note: For the automatic Git deployment to work, Appwrite needs to receive communication from GitHub, this means your Appwrite project must be accessible on the internet. If you're running on localhost, you need to run a proxy like [ngrok](https://ngrok.com/).
> 

# How to implement

To implement the GitHub integration for Appwrite Functions, there are several steps you must complete:

## Step 1: Create a GitHub App

Visit the [Developer Settings on GitHub](https://github.com/settings/apps) to create a new GitHub app. 

![Create new GitHub app](/images/integrations/deployments-github/create.avif)

Add a GitHub name (keep in mind that this will be publicly displayed), a relevant description, and a homepage URL for your application. Then, add the following URLs:

| Type of URL | URL |
| --- | --- |
| Callback URL | \`https://[HOSTNAME_OR_IP]/v1/vcs/github/callback\` |
| Callback URL | \`https://[HOSTNAME_OR_IP]/v1/account/sessions/oauth2/callback/github/console\` |
| Webhook URL | \`https://[HOSTNAME_OR_IP]/v1/vcs/github/events\` |

Under the **Callback URLs** section, check the **Request user authentication (OAuth)** during **installation** box. After that, request the following permissions:

{% tabs %}
{% tabsitem #repository title="Repository permissions" %}
| Permission | Access |
| --- | --- |
| Administration | Read and write |
| Checks | Read and write |
| Commit Statuses | Read and write |
| Contents | Read and write |
| Issues | Read and write |
| Metadata | Read-only |
| Pull Requests | Read and write |
| Webhooks | Read and write |
{% /tabsitem %}

{% tabsitem #account title="Account permissions" %}
| Permission | Access |
| --- | --- |
| Email address | Read-only |
{% /tabsitem %}
{% /tabs %}

Under the **Subscribe to events** section, check the **Pull request** and **Push** boxes. Lastly, allow **Any account** to install the GitHub app.

Once the app is created, create a new **client secret** and **private key**, and configure a **webhook secret**.

## Step 2: Add GitHub provider to the Appwrite instance

For this step, you must [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already.

Visit the \`.env\` file created for your Appwrite instance and update the following environment variables:

| Variable | Description |
| --- | --- |
| _APP_DOMAIN | Your main Appwrite domain used to access the Appwrite Console. When setting a public suffix domain, Appwrite will attempt to issue a valid SSL certificate automatically. When used with a dev domain, Appwrite will assign a self-signed SSL certificate. If you're using a proxy for localhost development, such as [ngrok](https://ngrok.com/), this will be the domain of your localhost proxy. |
| _APP_DOMAIN_TARGET | A hostname to serve as a CNAME target for your Appwrite custom domains. You can use the same value as used for the Appwrite _APP_DOMAIN variable. If you're using a proxy for localhost development, such as [ngrok](https://ngrok.com/), this will be the domain of your localhost proxy, such as \`dd65-2405-201-4013-d8d7-b4c5-fb73-39f9-285c.ngrok.io\`. |
| _APP_DOMAIN_FUNCTIONS | This will be used for system-generated [function domains](https://appwrite.io/docs/products/functions/domains). When a function domain is generated, it will be \`[UNIQUE_ID].[_APP_DOMAIN_FUNCTIONS]\`. If \`_APP_DOMAIN_FUNCTIONS\` is set to example.com for example, the generated domain for functions will be something like \`64d4d22db370ae41a32e.example.com\`. You can use the same value as used for the Appwrite \`_APP_DOMAIN\` variable. |
| _APP_VCS_GITHUB_APP_NAME | Name of your GitHub app. This is visible as the slug in your GitHub app's public link. For example, if the public link of your GitHub app is https://github.com/apps/test-appwrite-integration, then the app name will be test-appwrite-integration. |
| _APP_VCS_GITHUB_PRIVATE_KEY | RSA private key from GitHub wrapped with double quotes and newlines replaced with \`\\n\`.  |
| _APP_VCS_GITHUB_APP_ID | GitHub application ID from your GitHub app. |
| _APP_VCS_GITHUB_CLIENT_ID | GitHub client ID from your GitHub app. |
| _APP_VCS_GITHUB_CLIENT_SECRET | GitHub client secret from your GitHub app. |
| _APP_VCS_GITHUB_WEBHOOK_SECRET | GitHub webhook secret from your GitHub app. |

This is how the fields would look like in the \`.env\` file:

\`\`\`bash
_APP_DOMAIN=appwrite.example.com
_APP_DOMAIN_TARGET=appwrite.example.com
_APP_DOMAIN_FUNCTIONS=functions.example.com
_APP_VCS_GITHUB_APP_NAME=my-github-app
_APP_VCS_GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\\nMIIEogIBAAKCAQEAuT8f3lo/X83hfvb0ZN/KD2pl86o/jl3ywKrkj/PQZBmtEv/z\\nIugE//sfFoHWc4cizkcji+n3FNU+GEdvMioKuJlPBqPTY8hAbVn7R0geZLpDV/rs\\n[...]\\n-----END RSA PRIVATE KEY-----"
_APP_VCS_GITHUB_APP_ID=12415
_APP_VCS_GITHUB_CLIENT_ID=Iv1.35asdf43asd
_APP_VCS_GITHUB_CLIENT_SECRET=35rsdse532q13
_APP_VCS_GITHUB_WEBHOOK_SECRET=super-secret
\`\`\`

After that, run the following Docker Compose commands in your terminal to restart your Appwrite containers and verify if the changes have been successfully applied:

\`\`\`bash
docker compose up -d --force-recreate
docker compose exec appwrite vars
\`\`\`

## Step 3: Test the provider

To test the provider, go to the **Settings** page in your Appwrite project, navigate to the **Git configuration** section, and add an installation. On successful installation, you should be able to find your app installation in the same section.

![Installed GitHub app](/images/integrations/deployments-github/installed.avif)

# Read more about GitHub and Appwrite Functions

If you would like to learn more about GitHub, we have some resources that you should visit:

- [Create a GitHub app](https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps)
- [GitHub setup docs for Appwrite Functions (self-hosted)](https://appwrite.io/docs/advanced/self-hosting/functions)
- [Appwrite Functions API reference](https://appwrite.io/docs/references/cloud/server-nodejs/functions)`,_=`---
layout: integration
title: Email with SendGrid
description: Send customized emails to your users
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/email-sendgrid/cover.avif
category: messaging
product: 
    avatar: '/images/integrations/avatars/sendgrid.avif'
    vendor: SendGrid
    description: 'SendGrid is a cloud-based service that provides email delivery and marketing solutions.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/email-sendgrid/cover.avif
    - /images/integrations/email-sendgrid/welcome-guide.avif
    - /images/integrations/email-sendgrid/provider.avif
    - /images/integrations/email-sendgrid/email.avif
---

SendGrid is a cloud-based service that provides email delivery and marketing solutions. It helps businesses manage email communications, including transactional emails (like password resets and order confirmations) and marketing emails (newsletters and promotions). 

# How does the integration work?

You can use the SendGrid provider in Appwrite Messaging to send customized emails to your users for various purposes such as reminders, promotions, announcements, and even custom authentication flows. They can be sent immediately or scheduled for later. 

# How to implement

To implement the SendGrid provider in Appwrite Messaging, there are several steps you must complete:

## Step 1: Sign up on Sendgrid

First, you must [sign up for a SendGrid account](https://signup.sendgrid.com/) and finish your account setup.

![SendGrid welcome guide](/images/integrations/email-sendgrid/welcome-guide.avif)

Next, [create an API key](https://www.twilio.com/docs/sendgrid/ui/account-and-settings/api-keys) with full access and save the key for further usage. After, follow SendGrid's [Domain Authentication](https://www.twilio.com/docs/sendgrid/ui/account-and-settings/how-to-set-up-domain-authentication) process to authenticate your domain name. If you don’t own a domain, you can follow their [Single Sender Verification](https://www.twilio.com/docs/sendgrid/ui/sending-email/sender-verification) process to verify your Sender identity.

## Step 2: Add SendGrid provider to your Appwrite project

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. In your Appwrite project, head over to the **Messaging** page, click on the **Providers** tab, and **create a new Email provider**.

![Setup email provider](/images/integrations/email-sendgrid/provider.avif)

Fill in the following fields:

| Field name |  |
| --- | --- |
| API key | The full access API key you saved from the SendGrid dashboard. |
| Sender email | The provider sends emails from this sender email. The sender email must either be an email under an authenticated domain or a verified sender identity. |
| Sender name | The sender name that appears in the emails sent from this provider. |
| Reply-to email | The reply-to email that appears in the emails sent from this provider. The reply-to email must either be an email under an authenticated domain or a verified sender identity. |
| Reply-to name | The reply-to name that appears in the emails sent from this provider. |

## Step 3: Test the SendGrid provider

Before you proceed, you must already have at least one [topic](https://appwrite.io/docs/products/messaging/topics) or [target](https://appwrite.io/docs/products/messaging/targets) set up.

Once the provider is set up, you can go to the **Messages** tab on the **Messaging** page and **create an email message**. You can add the test message, configure the users to send the message to, and pick when the message should be sent out. 

![Create email](/images/integrations/email-sendgrid/email.avif)

# Read more about Sendgrid and Appwrite Messaging

If you would like to learn more about Sendgrid and Appwrite Messaging, we have some resources that you should visit:

- [Sign up for SendGrid](https://signup.sendgrid.com/)
- [Set up the SendGrid provider in Appwrite Messaging](https://appwrite.io/docs/products/messaging/sendgrid)
- [Send email messages through Appwrite Messaging](https://appwrite.io/docs/products/messaging/send-email-messages)
- [Appwrite Messaging API reference](https://appwrite.io/docs/references/cloud/server-nodejs/messaging)`,v=`---
layout: integration
title: Auth Kit for FlutterFlow
description: Integrate Appwrite Auth into your FlutterFlow apps without writing complex code
date: 2024-03-01
featured: false
isPartner: true
isNew: true
cover: /images/integrations/flutterflow-auth-kit/cover.avif
category: auth
product:
  avatar: '/images/integrations/avatars/flutterflow.avif'
  vendor: FlutterFlow
  description: 'FlutterFlow is a low-code platform that lets you visually build and deploy mobile and web apps using Flutter.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images:
  - /images/integrations/flutterflow-auth-kit/cover.avif
  - /images/integrations/flutterflow-auth-kit/featured.avif
  - /images/integrations/flutterflow-auth-kit/auth-login-overview.avif
  - /images/integrations/flutterflow-auth-kit/login-pointers.avif
  - /images/integrations/flutterflow-auth-kit/dashboard-pointers.avif
---

FlutterFlow is a powerful visual builder that lets you create beautiful Flutter apps without writing much code. It's perfect for both beginners and experienced developers who want to build apps quickly. With its drag-and-drop interface and pre-built components, you can focus on creating great user experiences.

# What you’ll build

As you start creating your FlutterFlow app, you might want to add user accounts for things like social media features or task management. To help you with this, we've made it super easy to implement secure authentication using our official [Authentication library](https://marketplace.flutterflow.io/item/h1gn6StcXy6imjg7Ykr2). This guide will walk you through everything you need to know to get up and running with Appwrite authentication in your FlutterFlow project.

By the end of this guide, you’ll have a fully functional authentication system with:

- Email/password sign-up and login.
- Secure session management.
- User profile handling.
- Error handling with user feedback.
- Protected routes for authenticated users.

Want to see the final result first? Check out our [Appwrite Flutterflow Demo App](https://app.flutterflow.io/project/appwrite-auth-yxmd9b) to experience all these features in action! Then follow along to build your own custom version.

![Welcome screen](/images/integrations/flutterflow-auth-kit/welcomescreen.avif)

# Before you start

Here’s what you’ll need to have ready:
- [Appwrite account](https://cloud.appwrite.io/console/register).
- [FlutterFlow account](https://app.flutterflow.io/create-account).
- [FlutterFlow Marketplace account](https://marketplace.flutterflow.io/login) (must use the same email as your FlutterFlow account).
- Basic understanding of FlutterFlow’s interface.

## Step 1: Setting up your Appwrite project

Let’s start by setting up your Appwrite project (you can use a new or an existing one):

1. Head over to the [Appwrite Console](https://cloud.appwrite.io/).
2. Select your project (or create a new one).
3. Under **Add a platform**, add a **Flutter** platform.
4. In the platform setup, choose the platforms you want to support under Flutter App - Web, Android, and/or iOS - and enter the required values as shown below:


| Platform | Required Info |
|----------|----------------|
| Web      | Hostnames: \`localhost\`, \`*.web.app\`, \`*.run.app\` (Used for FlutterFlow Web Testing) |
| Android  | Package Name (e.g. \`com.company.appname\`) |
| iOS      | Bundle ID (e.g. \`com.company.appname\`) |

5. Go to **Settings > Overview** to copy the following values:
- **API Endpoint**
- **Project ID**

📌 You’ll need these in the next step to configure the authentication library.


## Step 2: Adding the authentication library

The Authentication library provides essential core functionality:

- Pre-configured Custom Actions for authentication.
- App States for session management.
- Built-in Error Handling.
- User Session Management.
- Custom Data Types for type-safe responses.

### Here’s how to add it to your project:

1. Visit the [FlutterFlow Marketplace](https://marketplace.flutterflow.io/).
2. Search for “Appwrite Authentication Kit” or visit [Appwrite Authentication Kit](https://marketplace.flutterflow.io/item/h1gn6StcXy6imjg7Ykr2).
3. Click “Add” to add it to your marketplace account.
4. In your FlutterFlow project:

   - Navigate to \`Project Settings > Project Dependencies\`.
   - Find “Appwrite Authentication Kit” under FlutterFlow Libraries.
   - Click “Add Library”.

![Screenshot of login](/images/integrations/flutterflow-auth-kit/screenshot.avif)

### Configure the Authentication Library

Once the library is added, you can configure it without writing any code:

1. Navigate to \`Settings > Project Dependencies\` in your FlutterFlow project.
2. Under the **Appwrite Authentication Kit** entry, click on **View Details**.
3. Update the environment values directly in the panel that opens:
   
- API Endpoint: \`Your Appwrite Project Endpoint\`
- Project ID: \`Your Appwrite Project ID\`

Note: This view opens automatically the first time a user adds the library - making it super easy to update values right away.


## Step 3: Understanding the components

The library sets up two essential app states:
- \`appwriteConfig\`: Stores configuration details securely.
- \`appwriteUser\`: Manages user session information.

Both states are automatically configured with:

- String data type.
- Persistence enabled.
- Authentication flow readiness.

### Custom Data Types:

The library provides two custom data types for type-safe responses:

1. \`AppwriteUser\`: Represents user data.  
   - Fields: id, email, name, emailVerified, status.  
   - Used for: Storing and passing user information.  

2. \`AppwriteUserResponse\`: Standard response format.  
   - Fields: success, error, errorCode, errorType, formattedError, user.  
   - Used for: Consistent error handling and success responses.

### Authentication actions:

The library provides five essential custom actions:

1. \`initialize\`  
   - Purpose: Sets up your Appwrite configuration.  
   - Returns: \`AppwriteUserResponse\` with initialization status.  
   - Must be called before any other authentication action.  

2. \`signUpWithEmailAndPassword\`  
   - Parameters: email, password.  
   - Returns: \`AppwriteUserResponse\` with user data.  
   - Handles: Account creation and session setup.  

3. \`signInWithEmail\`  
   - Parameters: email, password.  
   - Returns: \`AppwriteUserResponse\` with session data.  
   - Manages: User login process.  

4. \`signOut\`  
   - No parameters required.  
   - Returns: \`AppwriteUserResponse\` with success status.  
   - Handles: Complete session cleanup.  

5. \`getCurrentUser\`  
   - No parameters required.  
   - Returns: \`AppwriteUserResponse\` with current user data.  
   - Perfect for: Authentication state checks.

### Understanding action flows:

Each authentication action follows this consistent pattern:

1. Action execution.  
2. Response handling using \`AppwriteUserResponse\`.  
3. Success/failure conditions based on \`response.success\`.  
4. Error handling using \`response.formattedError\`.

![Flow example](/images/integrations/flutterflow-auth-kit/flow.avif)


### Example: Sign Up flow

1. Use the \`signUpWithEmailAndPassword\` action.  
2. Check \`signUpResult.success\`.  
3. Success? → Dashboard.  
4. Failure? → Show \`signUpResult.formattedError\`.

You can use \`response.error\` for internal logging and \`response.formattedError\` to display user-friendly messages. Similarly, you can implement flow patterns for other authentication actions (\`signInWithEmail\`, \`signOut\`, \`getCurrentUser\`), following the similar structure of checking results and handling success/failure scenarios appropriately.

## See it in action

Check out our [Appwrite FlutterFlow Demo App](https://app.flutterflow.io/project/appwrite-auth-yxmd9b) to explore the complete auth flow in action - from sign-up to session management.


## Troubleshooting common issues

1. **Library Not Found**  
   - Verify marketplace account email matches FlutterFlow account.  
   - Check if library is properly added in Project Dependencies.  

2. **Authentication Failures**  
   - Confirm \`initialize\` action is called first.  
   - Verify endpoint and projectId values.  
   - Check Appwrite console for platform settings.  

3. **Session Management Issues**  
   - Ensure app states are properly configured.  
   - Verify persistence settings.

This completes our guide on setting up Appwrite authentication in your FlutterFlow app. You now have a solid foundation for managing user accounts and secure sessions.

Now that you have the basics in place, you can enhance your app by implementing more advanced authentication features using Appwrite. If you run into any issues or have questions, the [Appwrite community on Discord](https://appwrite.io/discord) and the [FlutterFlow Community](https://community.flutterflow.io/) are always ready to help. Don't hesitate to reach out!

## More resources

If you would like to learn more about Appwrite and FlutterFlow, we have some resources that you should visit:

- [Appwrite Flutterflow Demo App](https://app.flutterflow.io/project/appwrite-auth-yxmd9b)
- [Appwrite Documentation](https://appwrite.io/docs)
- [FlutterFlow Marketplace](https://marketplace.flutterflow.io/item/h1gn6StcXy6imjg7Ykr2)
`,y=`---
layout: integration
title: Payments with Lemon Squeezy
description: Connect Lemon Squeezy to Appwrite to handle payments, manage orders, generate invoices, and simplify your operations.
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/lemon-squeezy-payments/cover.avif
category: payments
product: 
    avatar: '/images/integrations/avatars/lemon-squeezy.avif'
    vendor: Lemon Squeezy
    description: 'Lemon Squeezy is a platform designed to simplify the process of selling digital products online.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/lemon-squeezy-payments/cover.avif
    - /images/integrations/lemon-squeezy-payments/dashboard.avif
    - /images/integrations/lemon-squeezy-payments/template.avif
    - /images/integrations/lemon-squeezy-payments/variables.avif
    - /images/integrations/lemon-squeezy-payments/web-platform.avif
    - /images/integrations/lemon-squeezy-payments/demo.avif
    - /images/integrations/lemon-squeezy-payments/database.avif
---

Lemon Squeezy is a platform designed to simplify the process of selling digital products online. Their product focuses on providing an all-in-one solution for creators to manage sales, subscriptions, and digital delivery. It includes features such as easy product creation, automated tax handling, customizable checkout pages, and robust analytics. This comprehensive tool is tailored for digital entrepreneurs, allowing them to focus on creating content while Lemon Squeezy handles the technical aspects of online sales.

# How does the integration work?

You can utilize a pre-built Appwrite function template to enable payments via Lemon Squeezy in your app. You can then use this to sell software, send PDF books, give access to video courses, or any other digital services your business needs.

# How to implement

To implement the Lemon Squeezy payments integration, there are several steps you must complete:

## Step 1: Setup Lemon Squeezy

First, [sign up on Lemon Squeezy](https://www.lemonsqueezy.com/) and add a new store. 

![Lemon Squeezy dashboard](/images/integrations/lemon-squeezy-payments/dashboard.avif)

From your Lemon Squeezy dashboard, save the following details for further usage:

| Field name |  |
| --- | --- |
| Variant ID | Head to **Store** > **Products** from the left sidebar. Create a new product with the pricing type as **Single payment** and add all other mandatory details such as name, price, and tax category. Click on the product dropdown menu (…) to get the variant ID. |
| Store ID | Head to **Settings** > **Stores** from the left sidebar. The store ID will be a number visible next to your store’s URL. |
| API key | Head to **Settings** > **API** from the left sidebar. Create a new API key. |
| Webhook secret | Head to **Settings** > **Webhooks** from the left sidebar. Add a temporary endpoint \`https://temporary-endpoint\` (we will replace this with our final endpoint later), create a new webhook secret, and select the event \`order_created\`. |

## Step 2: Create the Appwrite Function

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. If you decide to self-host Appwrite, there are [additional setup steps](https://appwrite.io/docs/advanced/self-hosting/functions) to use Appwrite Function templates.

Head over to the Appwrite console, navigate to the **Functions** page, click the **Templates** tab, and search for the **Payments with Lemon Squeezy** function template.

![Function template](/images/integrations/lemon-squeezy-payments/template.avif)

During the setup process, click the checkbox to generate an Appwrite API key on completion and add the **Lemon Squeezy API key**, **webhook secret**, **store ID**, and **variant ID** in the **Variables** step. If you are self-hosting Appwrite, click on the **optional variables** dropdown and update the Appwrite endpoint to your instance’s publicly accessible endpoint. 

![Env variables](/images/integrations/lemon-squeezy-payments/variables.avif)

Then, create a new repository with the default branch and root directory settings. You can edit this repository later to update the function logic. Once the function is deployed, go to the **Domains** tab on the **Function** page, copy the domain, and update it in your **Webhooks settings** in the following format:

\`\`\`bash
https://DEPLOYED_FUNCTION_DOMAIN/webhook
\`\`\`

Additionally, edit the product you created and add your function URL as the **Button link** under the **Confirmation modal** section.

## Step 3: Test the function

Once all the steps are complete, it is time to test the function! First, copy the function URL, go to the **Appwrite project dashboard**, and add it to the **Platforms** section as a web app. This will register your function URL as an authorized hostname to interact with Appwrite (to prevent CORS).

![Add web platform](/images/integrations/lemon-squeezy-payments/web-platform.avif)

Then, open it in your browser to test the function and access the pre-built interactive UI. You can anonymously log in through this UI and create a payment order using [Lemon Squeezy's test card number](https://docs.lemonsqueezy.com/help/getting-started/test-mode#test-card-numbers). As soon as this process is completed, the function UI will show you the complete order.

![Demo](/images/integrations/lemon-squeezy-payments/demo.avif)

You can visit the **Databases** page in your Appwrite project, enter the \`orders\` database and the \`orders\` collection within that, and find your orders.

![Paid orders in database](/images/integrations/lemon-squeezy-payments/database.avif)

# Read more about Lemon Squeezy Payments and Appwrite Functions

If you would like to learn more about Lemon Squeezy Payments and Appwrite Functions, we have some resources that you should visit:

- [Sign up for Lemon Squeezy](https://lemonsqueezy.com)
- [Add a new product to your Lemon Squeezy store](https://docs.lemonsqueezy.com/help/products/adding-products)
- [Learn more about Functions templates in Appwrite docs](https://appwrite.io/docs/products/functions/templates)
`,b=`---
layout: integration
title: Subscriptions with Lemon Squeezy
description: Connect Lemon Squeezy subscriptions service to Appwrite to receive and manage recurring payments in your application.
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/lemon-squeezy-subscriptions/cover.avif
category: payments
product: 
    avatar: '/images/integrations/avatars/lemon-squeezy.avif'
    vendor: Lemon Squeezy
    description: 'Lemon Squeezy is a platform designed to simplify the process of selling digital products online.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/lemon-squeezy-subscriptions/cover.avif
    - /images/integrations/lemon-squeezy-subscriptions/dashboard.avif
    - /images/integrations/lemon-squeezy-subscriptions/template.avif
    - /images/integrations/lemon-squeezy-subscriptions/variables.avif
    - /images/integrations/lemon-squeezy-subscriptions/web-platform.avif
    - /images/integrations/lemon-squeezy-subscriptions/demo.avif
    - /images/integrations/lemon-squeezy-subscriptions/user.avif
---

Lemon Squeezy is a platform designed to simplify the process of selling digital products online. Their product focuses on providing an all-in-one solution for creators to manage sales, subscriptions, and digital delivery. It includes features such as easy product creation, automated tax handling, customizable checkout pages, and robust analytics. This comprehensive tool is tailored for digital entrepreneurs, allowing them to focus on creating content while Lemon Squeezy handles the technical aspects of online sales.

# How does the integration work?

You can utilize a pre-built Appwrite function template to enable subscriptions via Lemon Squeezy in your app. This will allow you to accept recurring payments from your customers and grant them extra permissions.

# How to implement

To implement the Lemon Squeezy subscriptions integration, there are several steps you must complete:

## Step 1: Setup Lemon Squeezy

First, [sign up on Lemon Squeezy](https://www.lemonsqueezy.com/) and add a new store. 

![Lemon Squeezy dashboard](/images/integrations/lemon-squeezy-subscriptions/dashboard.avif)

From your Lemon Squeezy dashboard, save the following details for further usage:

| Field name |  |
| --- | --- |
| Variant ID | Head to **Store** > **Products** from the left sidebar. Create a new product with the pricing type as **Subscription** and add all other mandatory details such as name, price, payment schedule, and tax category. Click on the product dropdown menu (…) to get the variant ID. |
| Store ID | Head to **Settings** > **Stores** from the left sidebar. The store ID will be a number visible next to your store’s URL. |
| API key | Head to **Settings** > **API** from the left sidebar. Create a new API key. |
| Webhook secret | Head to **Settings** > **Webhooks** from the left sidebar. Add a temporary endpoint \`https://temporary-endpoint\` (we will replace this with our final endpoint later), create a new webhook secret, and select the events \`subscription_created\` and \`subscription_expired\`. |

## Step 2: Create the Appwrite Function

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. If you decide to self-host Appwrite, there are [additional setup steps](https://appwrite.io/docs/advanced/self-hosting/functions) to use Appwrite Function templates.

Head over to the Appwrite console, navigate to the **Functions** page, click the **Templates** tab, and search for the **Subscriptions with Lemon Squeezy** function template.

![Function template](/images/integrations/lemon-squeezy-subscriptions/template.avif)

During the setup process, click the checkbox to generate an Appwrite API key on completion and add the **Lemon Squeezy API key**, **webhook secret**, **store ID**, and **variant ID** in the **Variables** step. If you are self-hosting Appwrite, click on the **optional variables** dropdown and update the Appwrite endpoint to your instance’s publicly accessible endpoint. 

![Env variables](/images/integrations/lemon-squeezy-subscriptions/variables.avif)

Then, create a new repository with the default branch and root directory settings. You can edit this repository later to update the function logic. Once the function is deployed, go to the **Domains** tab on the **Function** page, copy the domain, and update it in your **Webhooks settings** in the following format:

\`\`\`bash
https://DEPLOYED_FUNCTION_DOMAIN/webhook
\`\`\`

Additionally, edit the product you created and add your function URL as the **Button link** under the **Confirmation modal** section.

## Step 3: Test the function

Once all the steps are complete, it is time to test the function! First, copy the function URL, go to the **Appwrite project dashboard**, and add it to the **Platforms** section as a web app. This will register your function URL as an authorized hostname to interact with Appwrite (to prevent CORS).

![Add web platform](/images/integrations/lemon-squeezy-subscriptions/web-platform.avif)

Then, open it in your browser to test the function and access the pre-built interactive UI. You can anonymously log in through this UI and create a subscription using [Lemon Squeezy's test card number](https://docs.lemonsqueezy.com/help/getting-started/test-mode#test-card-numbers). As soon as this process is complete, the function UI will show that you are subscribed. 

![Demo](/images/integrations/lemon-squeezy-subscriptions/demo.avif)

Additionally, your user on Appwrite will feature the \`subscriber\` label, which you can verify by visiting the **Auth** page in your Appwrite project and clicking on the user.

![Subscribed user](/images/integrations/lemon-squeezy-subscriptions/user.avif)

# Read more about Lemon Squeezy Subscriptions and Appwrite Functions

If you would like to learn more about Lemon Squeezy Subscriptions and Appwrite Functions, we have some resources that you should visit:

- [Sign up for Lemon Squeezy](https://lemonsqueezy.com)
- [Add a new product to your Lemon Squeezy store](https://docs.lemonsqueezy.com/help/products/adding-products)
- [Learn more about Functions templates in Appwrite docs](https://appwrite.io/docs/products/functions/templates)`,x=`---
layout: integration
title: Logging with AppSignal
description: Monitor application health in real time, store logs and track issues on your Appwrite instance with the help of AppSignal intergration.
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/logging-appsignal/cover.avif
category: logging
product:
    avatar: '/images/integrations/avatars/appsignal.avif'
    vendor: AppSignal
    description: 'AppSignal is a comprehensive monitoring and error-tracking tool designed for developers to gain insights into the performance of their applications.'
platform:
    - 'Self-hosted'
images:
    - /images/integrations/logging-appsignal/cover.avif
    - /images/integrations/logging-appsignal/api-key.avif
    - /images/integrations/logging-appsignal/errors-list.avif
    - /images/integrations/logging-appsignal/error.avif
---

AppSignal is a comprehensive monitoring and error-tracking tool designed for developers to gain insights into the performance of their applications. It provides detailed metrics on application performance, error tracking, and server health, enabling developers to diagnose and resolve issues efficiently. AppSignal supports various programming languages and frameworks, offering seamless integration and an intuitive interface. It helps teams monitor application health in real time, receive alerts on critical issues, and analyze performance data to optimize their code and infrastructure, ultimately ensuring a smooth user experience and maintaining high application reliability.

# How does the integration work?

If you are using self-hosting Appwrite, you can use the AppSignal provider for error-tracking and logging for your Appwrite instance.

# How to implement

To implement the AppSignal provider for logging, there are several steps you must complete:

## Step 1: Sign up for AppSignal

First, [sign up on AppSignal](https://appsignal.com/users/sign_up) and create your first organization (or join an existing one). Head to the **App settings** from the left sidebar and click on **Push & deploy**. Copy the **app-specific Push API key** for further usage.

![API key](/images/integrations/logging-appsignal/api-key.avif)

## Step 2: Add AppSignal provider to your Appwrite instance

For this step, you must [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven't already.

The Appwrite logging configuration uses a DSN format that follows the pattern \`appsignal://API_KEY/\`. Use your AppSignal Push API key as the API_KEY in the DSN.

Visit the \`.env\` file created for your Appwrite instance and update the following environment variable:

\`\`\`bash
_APP_LOGGING_CONFIG=appsignal://API_KEY/
\`\`\`

{% info title="Using Appwrite < 1.5.6?" %}
For versions prior to 1.5.6, use the old syntax format:
\`\`\`bash
_APP_LOGGING_PROVIDER=appSignal
_APP_LOGGING_CONFIG=APPSIGNAL_API_KEY
\`\`\`
{% /info %}

After that, run the following Docker Compose commands in your terminal to restart your Appwrite containers and verify if the changes have been successfully applied:

\`\`\`bash
docker compose up -d --force-recreate
docker compose exec appwrite vars
\`\`\`

## Step 3: Test the provider

Once the AppSignal provider is configured, run the following command in your terminal:

\`\`\`bash
docker compose exec appwrite ssl --domain="wrongdomain.com"
\`\`\`

Doing so will show errors in your AppSignal **Errors** page.

![Errors list](/images/integrations/logging-appsignal/errors-list.avif)

You can also view the error summary for further details.

![Error](/images/integrations/logging-appsignal/error.avif)

# Read more about AppSignal and Appwrite

If you would like to learn more about AppSignal and Appwrite, we have some resources that you should visit:

- [Sign up for AppSignal](https://appsignal.com/users/sign_up)
- [Handling errors in Appwrite self-hosted instances](https://appwrite.io/docs/advanced/self-hosting/production#errors)`,S=`---
layout: integration
title: Logging with Raygun
description: Integrate Raygun, an application performane monitoring (APM) tool with Appwrite to diagnose and fix errors quicker.
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/logging-raygun/cover.avif
category: logging
product:
    avatar: '/images/integrations/avatars/raygun.avif'
    vendor: Raygun
    description: 'Raygun is an application performance monitoring (APM) and error tracking tool designed for software developers to identify and resolve issues in their applications quickly. It provides real-time insights into software performance, error diagnostics, and user experience, helping teams to detect, diagnose, and fix errors faster. With features like crash reporting, real user monitoring, and deployment tracking, Raygun helps ensure the stability and efficiency of applications.'
platform:
    - 'Self-hosted'
images:
    - /images/integrations/logging-raygun/cover.avif
    - /images/integrations/logging-raygun/api-key.avif
    - /images/integrations/logging-raygun/crash-reporting.avif
    - /images/integrations/logging-raygun/error.avif
---

Raygun is an application performance monitoring (APM) and error tracking tool designed for software developers to identify and resolve issues in their applications quickly. It provides real-time insights into software performance, error diagnostics, and user experience, helping teams to detect, diagnose, and fix errors faster. With features like crash reporting, real user monitoring, and deployment tracking, Raygun helps ensure the stability and efficiency of applications, making it an essential tool for maintaining high-quality software and delivering a seamless user experience.

# How does the integration work?

If you are using self-hosting Appwrite, you can use the Raygun provider for error-tracking and logging for your Appwrite instance.

# How to implement

To implement the Raygun provider for logging, there are several steps you must complete:

## Step 1: Sign up for Raygun

First, [sign up on Raygun](https://app.raygun.com/signup?product=cr) (pick **Crash Reporting** as the product you're most interested in) and create your first application. Head to **Application settings** from the left-side navbar and copy your **API Key**.

![API key](/images/integrations/logging-raygun/api-key.avif)

## Step 2: Add Raygun provider to your Appwrite instance

For this step, you must [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven't already.

The Appwrite logging configuration uses a DSN format that follows the pattern \`raygun://API_KEY/\`. Use your Raygun API key in the DSN.

Visit the \`.env\` file created for your Appwrite instance and update the following environment variable:

\`\`\`bash
_APP_LOGGING_CONFIG=raygun://API_KEY/
\`\`\`

{% info title="Using Appwrite < 1.5.6?" %}
For versions prior to 1.5.6, use the old syntax format:
\`\`\`bash
_APP_LOGGING_PROVIDER=raygun
_APP_LOGGING_CONFIG=RAYGUN_API_KEY
\`\`\`
{% /info %}

After that, run the following Docker Compose commands in your terminal to restart your Appwrite containers and verify if the changes have been successfully applied:

\`\`\`bash
docker compose up -d --force-recreate
docker compose exec appwrite vars
\`\`\`

## Step 3: Test the provider

Once the Raygun provider is configured, run the following command in your terminal:

\`\`\`bash
docker compose exec appwrite ssl --domain="wrongdomain.com"
\`\`\`

Doing so will show errors in your Raygun Crash Reporting dashboard.

![Raygun Crash Reporting](/images/integrations/logging-raygun/crash-reporting.avif)

You can also view the error summary for further details.

![Error](/images/integrations/logging-raygun/error.avif)

# Read more about Raygun and Appwrite

If you would like to learn more about Raygun and Appwrite, we have some resources that you should visit:

- [Sign up for Raygun](https://app.raygun.com/signup?product=cr)
- [Handling errors in Appwrite self-hosted instances](https://appwrite.io/docs/advanced/self-hosting/production#errors)`,C=`---
layout: integration
title: Logging with Sentry
description: Connect Sentry to your self-hosted Appwrite instance for improved error-tracking, logging, and overall reliability of your application.
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/logging-sentry/cover.avif
category: logging
product:
    avatar: '/images/integrations/avatars/sentry.avif'
    vendor: Sentry
    description: 'Sentry is an open-source error-tracking and performance-monitoring tool designed to help developers identify, diagnose, and fix issues in real-time.'
platform:
    - 'Self-hosted'
images:
    - /images/integrations/logging-sentry/cover.avif
    - /images/integrations/logging-sentry/project.avif
    - /images/integrations/logging-sentry/issues.avif
    - /images/integrations/logging-sentry/issue-details.avif
---

Sentry is an open-source error-tracking and performance-monitoring tool designed to help developers identify, diagnose, and fix issues in real-time. It provides comprehensive insights into application health by capturing and analyzing error events, performance metrics, and user feedback. Sentry supports multiple programming languages and frameworks, making it versatile for various development environments. With features like stack traces, context data, and alerting, Sentry allows teams to quickly pinpoint the root cause of issues and improve the overall quality and reliability of their software applications.

# How does the integration work?

If you are using self-hosting Appwrite, you can use the Sentry provider for error-tracking and logging for your Appwrite instance.

# How to implement

To implement the Sentry provider for logging, there are several steps you must complete:

## Step 1: Set up Sentry

First, [sign up on Sentry](https://sentry.io/signup/) and create a new project.

![Create project](/images/integrations/logging-sentry/project.avif)

Head to **Settings** > **Projects** > Select your Sentry project > **Client Keys (DSN)**. Save the DSN for further usage.

## Step 2: Add Sentry provider to your Appwrite instance

For this step, you must [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven't already.

The Appwrite logging configuration uses a DSN format that follows the pattern \`sentry://PROJECT_ID:SENTRY_API_KEY@SENTRY_HOST/\`. For example, if your Sentry DSN is \`https://abcdef@sentry.example.com/1\`, then the Appwrite logging configuration will be \`sentry://1:abcdef@sentry.example.com/\`.

Visit the \`.env\` file created for your Appwrite instance and update the following environment variable:

\`\`\`bash
_APP_LOGGING_CONFIG=sentry://PROJECT_ID:SENTRY_API_KEY@SENTRY_HOST/
\`\`\`

{% info title="Using Appwrite < 1.5.6?" %}
For versions prior to 1.5.6, use the old syntax format:
\`\`\`bash
_APP_LOGGING_PROVIDER=sentry
_APP_LOGGING_CONFIG=SENTRY_PROJECT_ID;SENTRY_PUBLIC_KEY@SENTRY_HOST
\`\`\`
{% /info %}

After that, run the following Docker Compose commands in your terminal to restart your Appwrite containers and verify if the changes have been successfully applied:

\`\`\`bash
docker compose up -d --force-recreate
docker compose exec appwrite vars
\`\`\`

## Step 3: Test the provider

Once the Sentry provider is configured, run the following command in your terminal:

\`\`\`bash
docker compose exec appwrite ssl --domain="your-domain.com"
\`\`\`

Doing so will show errors in your Sentry **Issues** page.

![Issues](/images/integrations/logging-sentry/issues.avif)

You can also view the error details for more information.

![Issue details](/images/integrations/logging-sentry/issue-details.avif)

# Read more about Sentry and Appwrite

If you would like to learn more about Sentry and Appwrite, we have some resources that you should visit:

- [Sign up for Sentry](https://sentry.io/signup/)
- [Handling errors in Appwrite self-hosted instances](https://appwrite.io/docs/advanced/self-hosting/production#errors)`,w=`---
layout: integration
title: MCP with Claude
description: Connect to Appwrite project with the MCP within Claude Desktop.
date: 2025-07-01
featured: false
isPartner: true
isNew: true
cover: /images/integrations/mcp-claude/cover.avif
category: mcp
product: 
    avatar: '/images/integrations/avatars/claude.avif'
    vendor: Anthropic
    description: 'Claude Desktop is a native AI assistant app by Anthropic that brings the Claude large language model to your devices.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/mcp-claude/cover.avif
    - /images/docs/mcp/claude-desktop/claude-mcp-tools.avif
    - /images/docs/mcp/claude-desktop/claude-list-users.avif
---

Claude Desktop is a standalone application by Anthropic that allows users to interact with the Claude large language model directly from their Mac or Windows desktops. Designed for convenience and speed, it offers a distraction-free chat experience, supports multiple conversations, and runs natively for faster performance and system integration. Whether you're brainstorming, coding, summarizing documents, or automating workflows, Claude Desktop makes it easy to harness AI assistance without relying on a browser.

# How does the integration work?

The Appwrite MCP server integrates with Claude Desktop using the Model Context Protocol (MCP), allowing you to connect your Appwrite project to Claude Desktop.

This integration enables you to perform various operations on your Appwrite resources, such as creating users, managing databases, and more, directly from Claude Desktop using natural language commands.

# How to implement

To implement the MCP with Claude Desktop integration, there are several steps you must complete:

## Step 1: Set up your Appwrite project

First, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) if you haven't already, and create a project.

The MCP server is a remote server that uses the HTTP transport and OAuth for authentication, so you don't need to create an API key.

{% info title="Self-hosted Appwrite" %}

The hosted MCP server authenticates against Appwrite Cloud. If you run a [self-hosted Appwrite instance](https://appwrite.io/docs/advanced/self-hosting), follow the [self-hosted setup](/docs/tooling/ai/mcp-servers#self-hosted) in the MCP documentation instead.

{% /info %}

## Step 2: Configure the MCP server on Claude Desktop

{% info title="Pre-requisite: Install Node.js" %}

Claude Desktop only supports local (stdio) MCP servers, so the configuration uses the \`mcp-remote\` package as a proxy to connect to the remote MCP server. You must install [Node.js](https://nodejs.org/en/download) and npm on your system.

{% /info %}

To configure the MCP server on Claude Desktop, head to the app's **Settings** page (press \`CTRL + ,\` on Windows or \`CMD + ,\` on MacOS), navigate to the **Developer** tab, and click on **Edit Config**. This will open the \`claude_desktop_config.json\` file, where you must add the following:

\`\`\`json
{
    "mcpServers": {
        "appwrite": {
            "command": "npx",
            "args": [
                "mcp-remote",
                "https://mcp.appwrite.io/"
            ]
        }
    }
}
\`\`\`

Once you have updated and saved the \`claude_desktop_config.json\` file, restart Claude Desktop. When the app first connects to the server, your browser opens so you can sign in to your Appwrite account and authorize access. You can then click on the MCP tools button (at the bottom right section of the prompt input) to view the available MCP tools.

![Claude MCP Tools](/images/docs/mcp/claude-desktop/claude-mcp-tools.avif)

{% info title="Claude Code" %}
If you are using the Claude Code CLI, you can use the following command in your terminal to configure the MCP server:

\`\`\`bash
claude mcp add --transport http appwrite https://mcp.appwrite.io/
\`\`\`

Then, run \`/mcp\` in Claude Code, select **appwrite**, and choose **Authenticate** to sign in to your Appwrite account.
{% /info %}

## Step 3: Test the integration

Finally, you can test the integration by asking Claude Desktop to list all the users in your Appwrite project.

![Claude Desktop](/images/docs/mcp/claude-desktop/claude-list-users.avif)

# Read more about MCP with Claude Desktop

If you would like to learn more about MCP with Claude Desktop, we have some resources that you should visit:

- [Appwrite MCP documentation](/docs/tooling/ai/mcp-servers)
- [What exactly is MCP, and why is it trending?](/blog/post/what-is-mcp)
- [Download Claude Desktop](https://claude.ai/download)
`,T=`---
layout: integration
title: MCP with Cursor
description: Connect to Appwrite project with the MCP within Cursor.
date: 2025-07-01
featured: true
isPartner: true
isNew: true
cover: /images/integrations/mcp-cursor/cover.avif
category: mcp
product: 
    avatar: '/images/integrations/avatars/cursor.avif'
    vendor: Cursor
    description: 'Cursor is an AI-powered code editor based on VS Code, designed for context-aware development and seamless collaboration with large language models.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/mcp-cursor/cover.avif
    - /images/docs/mcp/cursor/cursor-create-user.avif
---

Cursor is an AI-powered code editor built on VS Code, designed to enhance developer workflows with intelligent, context-aware assistance. It offers features like inline code generation, natural language explanations, and project-aware chat, enabling developers to prototype, debug, and refactor code faster with the help of integrated large language models such as Anthropic's Claude 4.0 Sonnet, Google's Gemini 2.5 Pro, and OpenAI's GPT-4.1.

# How does the integration work?

The Appwrite MCP server integrates with Cursor Agent using the Model Context Protocol (MCP), allowing you to connect your Appwrite project to Cursor. 

This integration enables you to perform various operations on your Appwrite resources, such as creating users, managing databases, and more, directly from the Cursor editor using natural language commands.

# How to implement

To implement the MCP with Cursor integration, there are several steps you must complete:

## Step 1: Set up your Appwrite project

First, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) if you haven't already, and create a project.

The MCP server is a remote server that uses the HTTP transport and OAuth for authentication, so you don't need to create an API key or install anything on your system.

{% info title="Self-hosted Appwrite" %}

The hosted MCP server authenticates against Appwrite Cloud. If you run a [self-hosted Appwrite instance](https://appwrite.io/docs/advanced/self-hosting), follow the [self-hosted setup](/docs/tooling/ai/mcp-servers#self-hosted) in the MCP documentation instead.

{% /info %}

## Step 2: Configure the MCP server on Cursor

To configure the MCP server on Cursor, head to the **Cursor Settings** page, navigate to the **MCP** tab, and click on **Add new global MCP server**. This will open the \`mcp.json\` file, where you must add the following:

\`\`\`json
{
    "mcpServers": {
        "appwrite": {
            "url": "https://mcp.appwrite.io/"
        }
    }
}
\`\`\`

Once you have updated and saved the \`mcp.json\` file, click **Needs login** next to the server in the MCP settings. Your browser opens so you can sign in to your Appwrite account and authorize access. Cursor will then connect with the Appwrite MCP server and load all available tools.

### Skip this step, directly add the server to Cursor

Once you have understood how the Appwrite MCP server is configured in Cursor, you can skip this step by directly adding the MCP server using the following link.

{% only_light %}
{% cards %}
{% cards_item href="https://cursor.com/install-mcp?name=appwrite&config=eyJ1cmwiOiJodHRwczovL21jcC5hcHB3cml0ZS5pby8ifQ==" title="Add to Cursor" icon="cursor-ai" %}
{% /cards_item %}
{% /cards %}
{% /only_light %}

{% only_dark %}
{% cards %}
{% cards_item href="https://cursor.com/install-mcp?name=appwrite&config=eyJ1cmwiOiJodHRwczovL21jcC5hcHB3cml0ZS5pby8ifQ==" title="Add to Cursor" icon="cursor-ai" %}
{% /cards_item %}
{% /cards %}
{% /only_dark %}

This will automatically configure the MCP server, and you will only need to complete the OAuth sign-in with your Appwrite account.

## Step 3: Test the integration

Finally, you can test the integration by asking Cursor Agent to create a new user in your Appwrite project.

![Cursor Agent](/images/docs/mcp/cursor/cursor-create-user.avif)

# Read more about MCP with Cursor

If you would like to learn more about MCP with Cursor, we have some resources that you should visit:

- [Appwrite MCP documentation](/docs/tooling/ai/mcp-servers)
- [What exactly is MCP, and why is it trending?](/blog/post/what-is-mcp)
- [Download Cursor](https://www.cursor.com/)
`,E=`---
layout: integration
title: MCP with Windsurf
description: Connect to Appwrite project with the MCP within Windsurf Editor.
date: 2025-07-01
featured: false
isPartner: true
isNew: true
cover: /images/integrations/mcp-windsurf/cover.avif
category: mcp
product: 
    avatar: '/images/integrations/avatars/windsurf.avif'
    vendor: Windsurf
    description: 'Windsurf Editor is an AI-native, agent-powered IDE that enhances developer productivity with AI-driven code generation, debugging, and refactoring capabilities.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/mcp-windsurf/cover.avif
    - /images/docs/mcp/windsurf/windsurf-cascade-chat.avif
---

Windsurf Editor is a next-gen IDE that embeds a powerful AI agent called Cascade directly into your coding workflow. Unlike tools limited to autocomplete or single-file assistance, Cascade understands your entire project context and can generate code across files, run terminal commands, debug issues, and even deploy applications, all triggered by natural language prompts. With features like Supercomplete, inline AI chat, memories, and live previews, Windsurf aims to keep you in a deep focus state by eliminating context switching and handling repetitive tasks automatically, while still giving you full control over what gets merged or executed.

# How does the integration work?

The Appwrite MCP server integrates with Windsurf Editor's Cascade chat using the Model Context Protocol (MCP), allowing you to connect your Appwrite project to Windsurf Editor. 

This integration enables you to perform various operations on your Appwrite resources, such as creating users, managing databases, and more, directly from the Windsurf Editor using natural language commands.

# How to implement

To implement the MCP with Windsurf Editor integration, there are several steps you must complete:

## Step 1: Set up your Appwrite project

First, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) if you haven't already, and create a project.

The MCP server is a remote server that uses the HTTP transport and OAuth for authentication, so you don't need to create an API key or install anything on your system.

{% info title="Self-hosted Appwrite" %}

The hosted MCP server authenticates against Appwrite Cloud. If you run a [self-hosted Appwrite instance](https://appwrite.io/docs/advanced/self-hosting), follow the [self-hosted setup](/docs/tooling/ai/mcp-servers#self-hosted) in the MCP documentation instead.

{% /info %}

## Step 2: Configure the MCP server on Windsurf Editor

To configure the MCP server on Windsurf Editor, head to the **Windsurf Editor Settings** page, navigate to the **Model Context Protocol (MCP) Servers** section, and click on **View raw config**. This will open the \`mcp_config.json\` file, where you must add the following:

\`\`\`json
{
    "mcpServers": {
        "appwrite": {
            "serverUrl": "https://mcp.appwrite.io/"
        }
    }
}
\`\`\`

Once you have updated and saved the \`mcp_config.json\` file, return to the MCP Servers section in the Windsurf Settings and click on **Refresh**. When Windsurf first connects to the server, you are prompted to log in, and your browser opens so you can sign in to your Appwrite account and authorize access.

## Step 3: Test the integration

Finally, you can test the integration by asking the Cascade chat in the Windsurf Editor to query your database.

![Windsurf Editor Cascade Chat](/images/docs/mcp/windsurf/windsurf-cascade-chat.avif)

# Read more about MCP with Windsurf Editor

If you would like to learn more about MCP with Windsurf Editor, we have some resources that you should visit:

- [Appwrite MCP documentation](/docs/tooling/ai/mcp-servers)
- [What exactly is MCP, and why is it trending?](/blog/post/what-is-mcp)
- [Download Windsurf Editor](https://windsurf.com/download)
`,D=`---
layout: integration
title: Native auth with Apple
description: Integrate native auth on Apple devices with Appwrite Auth
date: 2025-08-26
featured: false
isPartner: true
isNew: false
cover: /images/integrations/native-auth-apple/cover.avif
category: auth
product: 
    avatar: '/images/integrations/avatars/apple.avif'
    vendor: Apple
    description: 'An Apple ID is a unique account that allows access to Apple services, including the App Store, iCloud, iTunes, Apple Music, and more.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/native-auth-apple/cover.avif
    - /images/integrations/native-auth-apple/apple-developer-program.avif
    - /images/integrations/native-auth-apple/template.avif
    - /images/integrations/native-auth-apple/variables.avif
---

An Apple ID is a unique account that allows access to Apple services, including the App Store, iCloud, iTunes, Apple Music, and more. It serves as a key to the Apple ecosystem, allowing users to synchronize their data across Apple devices, download apps, purchase music, and access various features like FaceTime and iMessage. The Apple ID consists of an email address and a password, with options for added security through two-factor authentication. It is essential for managing personal information, subscriptions, and settings across all Apple products.

# How does the integration work?

You can use the Appwrite Function template for native authentication on Apple devices. This template provides a seamless way to integrate native Apple sign-in APIs with Appwrite Auth, allowing users to authenticate using their Apple ID directly within your app.

# How to implement

To implement the Appwrite Function template for native authentication on Apple devices, there are several steps you must complete:

## Step 1: Create an Apple Developer account

First, [sign up for the Apple Developer program](https://developer.apple.com/programs). 

![Apple Developer Program](/images/integrations/native-auth-apple/apple-developer-program.avif)

Before you configure any other details, you must enable the **Sign in with Apple capability** and **set a Bundle ID**. To do this, head to XCode and open your project directory. In the Project Navigator, select your project followed by the correct target. Then, navigate to the **Signing & Capabilities** tab, click the ➕ **Capability** button, search for \`Sign in with Apple\`, and double-click the result to add it. Then, modify the **Bundle Identifier** to a unique string by prefixing it with any letters of your choice and change the **Team** to your Apple Developer team. Save the **Bundle ID** for further usage.

Head to your Apple Developer account and save the following details:

| Field name |  |
| --- | --- |
| Team ID | Head to Apple Developer account > Membership details > Team ID |
| Encoded authentication key (.p8 file) | Head to Apple Developer account > Program resources > Certificates, Identifiers & Profiles > Keys. Create a key and give it a name. Enable Sign in with Apple and register your key. Download the key, open it in a text editor, use a Base64 encoder to convert the file content to a Base64 string, and copy the result. |
| Authentication key ID | Head to Apple Developer account > Program resources > Certificates, Identifiers & Profiles > Keys. Click on your key to view details. |

## Step 2: Create the Appwrite Function

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. If you decide to self-host Appwrite, there are [additional setup steps](https://appwrite.io/docs/advanced/self-hosting/functions) to use Appwrite Function templates.

Head over to the Appwrite console, navigate to the **Functions** page, click the **Templates** tab, and search for the **Sign in with Apple** function template.

![Function template](/images/integrations/native-auth-apple/template.avif)

During the setup process, add the **Bundle ID**, **Team ID**, **Authentication key ID**, and **Encoded authentication key** in the **Variables** step..

![Env variables](/images/integrations/native-auth-apple/variables.avif)

Then, create a new repository with the default branch and root directory settings. You can edit this repository later to update the function logic.

## Step 3: Integrate the function in your app

First, you must [implement the Sign In with Apple button](https://developer.apple.com/documentation/signinwithapple/displaying-sign-in-with-apple-buttons-in-your-app) in your app.

Once implemented, you can handle the successful sign-in event and call the Appwrite Function to create and authenticate the user in Appwrite. Below is an example from [Appwrite's SwiftUI playground](https://github.com/appwrite/playground-for-apple-swiftui/blob/b036fb4313cc976f379ac10160a057ee5ae5c270/PlaygroundForApple/PlaygroundViewModel.swift#L334):

\`\`\`swift
func handleSignInWithAppleSuccess(with authorization: ASAuthorization) async throws {
    if let userCredential = authorization.credential as? ASAuthorizationAppleIDCredential {
        print(userCredential.authorizationCode)
        print(userCredential.user)
    
        if userCredential.authorizedScopes.contains(.fullName) {
            print(userCredential.fullName)
        }
    
        if userCredential.authorizedScopes.contains(.email) {
            print(userCredential.email)
        }
        
        do {
            // Create the request body with the authorization code and user information
            var body: [String: Any] = [
                "code": String(data: userCredential.authorizationCode!, encoding: .utf8)
            ]
            
            if userCredential.fullName != nil {
                if let givenName = userCredential.fullName?.givenName {
                    body["firstName"] = givenName
                }
                
                if let familyName = userCredential.fullName?.familyName {
                    body["lastName"] = familyName
                }
            }
            
            let jsonData = try JSONSerialization.data(withJSONObject: body, options: [])
            let jsonString = String(data: jsonData, encoding: String.Encoding.utf8)
            
            print(jsonString)

            // Call the Appwrite Function
            let functions: Functions = Functions(client);
            let execution = try await functions.createExecution(
                functionId: "sign-in-with-apple",
                body: jsonString,
                method: ExecutionMethod.pOST,
                headers: ["Content-Type": "application/json"]
            );
            
            print(execution.responseStatusCode)
            if (execution.responseStatusCode != 200) {
                dialogText = "Error executing sign-in-with-apple"
            } else {
                print(execution.responseBody)

                // Decode the response body
                let responseBodyData = execution.responseBody.data(using: .utf8)
                let token = try! JSONDecoder().decode([String : String].self, from: responseBodyData!)
                let secret = token["secret"]
                let userId = token["userId"]
                
                print(userId)
                print(secret)

                // Create a session for the user using Appwrite Auth
                try await account.createSession(userId: userId!, secret: secret!)
                
                try await getAccount()
            }
        } catch {
            dialogText = error.localizedDescription
        }

        isShowingDialog = true
    }
}
\`\`\`

Once implemented, you can test the Sign in with Apple button in your app.

# Read more about Apple and Appwrite

If you would like to learn more about Apple and Appwrite, we have some resources that you should visit:

- [Sign up for the Apple Developer program](https://developer.apple.com/programs)
- [Display Sign In with Apple buttons in your app](https://developer.apple.com/documentation/signinwithapple/displaying-sign-in-with-apple-buttons-in-your-app)
- [Appwrite's SwiftUI playground](https://github.com/appwrite/playground-for-apple-swiftui)
- [Appwrite's Flutter playground](https://github.com/appwrite/playground-for-flutter)
- [Appwrite Auth API reference](https://appwrite.io/docs/references/cloud/client-apple/account)
- [Appwrite Functions API reference](https://appwrite.io/docs/references/cloud/client-apple/functions)`,O=`---
layout: integration
title: OAuth with Amazon
description: Authenticate users with an existing Amazon account
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/oauth-amazon/cover.avif
category: auth
product: 
    avatar: '/images/integrations/avatars/amazon.avif'
    vendor: Amazon
    description: 'Amazon is a global e-commerce platform that offers a wide selection of products, from electronics, books, and apparel to household goods, groceries, and digital media.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/oauth-amazon/cover.avif
    - /images/integrations/oauth-amazon/security-profile.avif
    - /images/integrations/oauth-amazon/provider.avif
    - /images/integrations/oauth-amazon/allowed-return-urls.avif
---

Amazon is a global e-commerce platform that offers a wide selection of products, from electronics, books, and apparel to household goods, groceries, and digital media. Amazon offers an OAuth provider to simplify the process of integrating Amazon services into various applications, enhancing the authentication user experience while maintaining robust security standards.

# How does the integration work?

You can use the Amazon OAuth adapter in Appwrite Auth for user authentication and management. This can be convenient for users because they can start using your app without creating a new account. It can also be more secure, because the user has one less password that could become vulnerable.

# How to implement

To implement the Amazon OAuth adapter in Appwrite Auth, there are several steps you must complete:

## Step 1: Create an Amazon Developer account

First, [sign up for an Amazon Developer account](https://www.amazon.com/ap/register?clientContext=130-6830764-7565500&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&siteState=clientContext%3D140-5240481-9393408%2CsourceUrl%3Dhttps%253A%252F%252Fdeveloper.amazon.com%252Fsettings%252Fconsole%252Fregistration%253Freturn_to%253D%252Fapps-and-games%2Csignature%3DR6AIXlj2Bj2Fwc7EBuqfl0CNCjUbh6Ej3D&marketPlaceId=ATVPDKIKX0DER&language=en_US&pageId=amzn_developer_portal&openid.return_to=https%3A%2F%2Fdeveloper.amazon.com%2Fsettings%2Fconsole%2Fregistration%3Freturn_to%3D%252Fapps-and-games&prevRID=93HMKYWW3JS4T3Q5EJ37&openid.assoc_handle=mas_dev_portal&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0), head to the [Login With Amazon console](https://developer.amazon.com/loginwithamazon/console/site/lwa/overview.html), and create a new security profile with details of your app.

![New security profile](/images/integrations/oauth-amazon/security-profile.avif)

Save the generated **Client ID** and **Client Secret** for later usage.

## Step 2: Add Amazon OAuth adapter to your Appwrite project

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. In your Appwrite project, head over to the **Auth** page, open the **Settings** tab, and click on Amazon under the **OAuth2 Providers** section.

![Amazon provider](/images/integrations/oauth-amazon/provider.avif)

Add the **Client ID** and **Client secret** you saved from the security profile you created. Copy the URI to add to the **Allowed Return URLs** field in the **Web Settings** of the security profile in the Amazon Developer console.

![New security profile](/images/integrations/oauth-amazon/allowed-return-urls.avif)

## Step 3: Test the provider.

Follow the [OAuth 2 login](https://appwrite.io/docs/products/auth/oauth2#init) flow to test your provider.

# Read more about Amazon and Appwrite Auth

If you would like to learn more about Amazon and Appwrite Auth, we have some resources that you should visit:

- [Sign up for an Amazon Developer account](https://www.amazon.com/ap/register?clientContext=130-6830764-7565500&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&siteState=clientContext%3D140-5240481-9393408%2CsourceUrl%3Dhttps%253A%252F%252Fdeveloper.amazon.com%252Fsettings%252Fconsole%252Fregistration%253Freturn_to%253D%252Fapps-and-games%2Csignature%3DR6AIXlj2Bj2Fwc7EBuqfl0CNCjUbh6Ej3D&marketPlaceId=ATVPDKIKX0DER&language=en_US&pageId=amzn_developer_portal&openid.return_to=https%3A%2F%2Fdeveloper.amazon.com%2Fsettings%2Fconsole%2Fregistration%3Freturn_to%3D%252Fapps-and-games&prevRID=93HMKYWW3JS4T3Q5EJ37&openid.assoc_handle=mas_dev_portal&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0)
- [Implement OAuth login in your apps using Appwrite Auth](https://appwrite.io/docs/products/auth/oauth2)
- [Understanding OAuth and OpenID Connect](https://appwrite.io/blog/post/oauth-openid)
- [Appwrite Auth API reference](https://appwrite.io/docs/references/cloud/client-web/account)
`,k=`---
layout: integration
title: OAuth with Apple
description: Authenticate users with an existing Apple account
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/oauth-apple/cover.avif
category: auth
product: 
    avatar: '/images/integrations/avatars/apple.avif'
    vendor: Apple
    description: 'An Apple ID is a unique account that allows access to Apple services, including the App Store, iCloud, iTunes, Apple Music, and more.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/oauth-apple/cover.avif
    - /images/integrations/oauth-apple/apple-developer-program.avif
    - /images/integrations/oauth-apple/provider.avif
---

An Apple ID is a unique account that allows access to Apple services, including the App Store, iCloud, iTunes, Apple Music, and more. It serves as a key to the Apple ecosystem, allowing users to synchronize their data across Apple devices, download apps, purchase music, and access various features like FaceTime and iMessage. The Apple ID consists of an email address and a password, with options for added security through two-factor authentication. It is essential for managing personal information, subscriptions, and settings across all Apple products.

# How does the integration work?

You can use the Apple OAuth adapter in Appwrite Auth for user authentication and management. This can be convenient for users because they can start using your app without creating a new account. It can also be more secure, because the user has one less password that could become vulnerable.

# How to implement

To implement the Apple OAuth adapter in Appwrite Auth, there are several steps you must complete:

## Step 1: Create an Apple Developer account

First, [sign up for the Apple Developer program](https://developer.apple.com/programs). 

![Apple Developer Program](/images/integrations/oauth-apple/apple-developer-program.avif)

Before you configure any other details, you must create an **App ID** for our app. To do that, go to XCode and open the \`ios\` folder in your source code. Navigate to the **Signing & Capabilities** tab, click the ➕ **Capability** button, search for \`Sign in with Apple\`, and double-click the result to add it. Then, modify the **Bundle Identifier** to a unique string by prefixing it with any letters of your choice and change the **Team** to your Apple Developer team. This will automatically create an **App ID** for your app.

After that, you will also need to create a **Services ID**. Visit your Apple Developer account, head to **Program resources** > **Certificates, Identifiers & Profiles** > **Identifiers**, and register a new **Service ID**, setting your Bundle ID as the unique identifier. 

View the service ID, enable **Sign in with Apple**, and in its configuration, select your primary App ID, input \`appwrite.io\` (or the domain of your self-hosted instance) under **Domains and Subdomains,** and temporarily add the URL \`https://temporary-endpoint.com/\` under **Return URLs**. This temporary URI will be replaced with the final URI once the OAuth2 adapter is configured on Appwrite.

Head to your Apple Developer account and save the following details:

| Field name |  |
| --- | --- |
| Services ID Identifier | Head to Apple Developer account > Program resources > Certificates, Identifiers & Profiles > Identifiers and view the Services ID. |
| Team ID | Head to Apple Developer account > Membership details > Team ID |
| Authentication key (.p8 file) | Head to Apple Developer account > Program resources > Certificates, Identifiers & Profiles > Keys. Create a key and give it a name. Enable Sign in with Apple and register your key. Download the key, open it in a text editor, and copy the content. |
| Authentication key ID | Head to Apple Developer account > Program resources > Certificates, Identifiers & Profiles > Keys. Click on your key to view details. |

## Step 2: Add Apple OAuth adapter to your Appwrite project

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. In your Appwrite project, head over to the **Auth** page, open the **Settings** tab, and click on Apple under the **OAuth2 Providers** section.

![Apple provider](/images/integrations/oauth-apple/provider.avif)

Add the **Services ID Identifier** (in the Bundle ID field), **Key ID**, **Team ID**, and **P8 File** content that you saved from your Apple Developer account. Copy the URI and add it to the **Return URLs** in the configuration of the Services ID you created in your Apple Developer account.

## Step 3: Test the provider.

Follow the [OAuth 2 login](https://appwrite.io/docs/products/auth/oauth2#init) flow to test your provider.

# Read more about Apple and Appwrite Auth

If you would like to learn more about Apple and Appwrite Auth, we have some resources that you should visit:

- [Sign up for the Apple Developer program](https://developer.apple.com/programs)
- [Implement OAuth login in your apps using Appwrite Auth](https://appwrite.io/docs/products/auth/oauth2)
- [Understanding OAuth and OpenID Connect](https://appwrite.io/blog/post/oauth-openid)
- [Appwrite Auth API reference](https://appwrite.io/docs/references/cloud/client-web/account)`,A=`---
layout: integration
title: OAuth with Discord
description: Authenticate users with an existing Discord account
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/oauth-discord/cover.avif
category: auth
product: 
    avatar: '/images/integrations/avatars/discord.avif'
    vendor: Discord
    description: 'Discord is a popular communication platform designed for creating communities.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/oauth-discord/cover.avif
    - /images/integrations/oauth-discord/new-app.avif
    - /images/integrations/oauth-discord/oauth2.avif
    - /images/integrations/oauth-discord/provider.avif
---

Discord is a popular communication platform designed for creating communities. It supports text, voice, and video communication, making it ideal for both casual conversations and organized group activities. Initially popular among gamers, Discord has expanded to various communities, including education, business, and hobbyist groups.

# How does the integration work?

You can use the Discord OAuth adapter in Appwrite Auth for user authentication and management. This can be convenient for users because they can start using your app without creating a new account. It can also be more secure, because the user has one less password that could become vulnerable.

# How to implement

To implement the Discord OAuth adapter in Appwrite Auth, there are several steps you must complete:

## Step 1: Register a Discord Developer application

First, head to the Discord Developer portal and [register an application](https://discord.com/developers/applications).

![New Discord app](/images/integrations/oauth-discord/new-app.avif)

Head to the **OAuth2** tab under **Settings** and save the **client ID** and **client secret**. Once we create the adapter on Appwrite, we will return to add a redirect URI.

## Step 2: Add Discord OAuth adapter to your Appwrite project

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. In your Appwrite project, head over to the **Auth** page, open the **Settings** tab, and click on **Discord** under the **OAuth2 Providers** section.

![OAuth2 settings](/images/integrations/oauth-discord/oauth2.avif)

Add the **client ID** and **client secret** you saved from your Discord app and copy the URI to add to the **Redirect** field in the **OAuth2** settings in your Discord app.

![Discord provider](/images/integrations/oauth-discord/provider.avif)

## Step 3: Test the provider.

Follow the [OAuth 2 login](https://appwrite.io/docs/products/auth/oauth2#init) flow to test your provider.

# Read more about Discord and Appwrite Auth

If you would like to learn more about Discord and Appwrite Auth, we have some resources that you should visit:

- [Register a Discord Developer application](https://discord.com/developers/applications)
- [Implement OAuth login in your apps using Appwrite Auth](https://appwrite.io/docs/products/auth/oauth2)
- [Understanding OAuth and OpenID Connect](https://appwrite.io/blog/post/oauth-openid)
- [Appwrite Auth API reference](https://appwrite.io/docs/references/cloud/client-web/account)`,j=`---
layout: integration
title: OAuth with Google
description: Authenticate users with an existing Google account
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/oauth-google/cover.avif
category: auth
product: 
    avatar: '/images/integrations/avatars/google.avif'
    vendor: Google
    description: 'Google Workspace is a comprehensive suite of cloud-based productivity and collaboration tools developed by Google.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/oauth-google/cover.avif
    - /images/integrations/oauth-google/consent-screen.avif
    - /images/integrations/oauth-google/client-id.avif
    - /images/integrations/oauth-google/provider.avif
    - /images/integrations/oauth-google/redirect-uri.avif
---

Google Workspace, formerly known as G Suite, is a comprehensive suite of cloud-based productivity and collaboration tools developed by Google. It includes popular applications such as Gmail for email, Google Drive for cloud storage, Google Docs for document creation, Google Sheets for spreadsheets, and Google Slides for presentations. Additionally, it offers tools for communication and collaboration, including Google Meet for video conferencing and Google Chat for instant messaging. Google Workspace is designed for businesses, educational institutions, and individuals, providing seamless integration, real-time collaboration, and robust security features to enhance productivity and streamline workflows.

# How does the integration work?

You can use the Google OAuth adapter in Appwrite Auth for user authentication and management. This approach is convenient for users, allowing them to start using your app without creating a new account. Additionally, it enhances security by eliminating the need for users to manage yet another password, reducing the risk of potential vulnerabilities.

# How to implement

To implement the Google OAuth adapter in Appwrite Auth, there are several steps you must complete:

## Step 1: Create an OAuth 2.0 client ID on Google Cloud

First, [log into the Google Cloud Console](https://console.cloud.google.com/), create a new project, click on **APIs and Services** in the left-side navbar, and open the **OAuth consent screen** page. Add all the required details about your app and select the scopes \`.../auth/userinfo.email\`, \`.../auth/userinfo.profile\`, and \`openid\`.

![OAuth consent screen](/images/integrations/oauth-google/consent-screen.avif)

Next, go to the **Credentials** page under **APIs and Services** in the left-side navbar and create a new **OAuth 2.0 client ID**. Select the **application type** as \`Web application,\` and in the **authorized redirect URIs** field, temporarily add the URL \`https://temporary-endpoint.com/\`. This temporary URI will be replaced with the final URI once the OAuth2 adapter is configured on Appwrite.

![OAuth client ID](/images/integrations/oauth-google/client-id.avif)

Save the generated **Client ID** and **Client secret** for later usage.

## Step 2: Add Google OAuth adapter to your Appwrite project

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. In your Appwrite project, head over to the **Auth** page, open the **Settings** tab, and click on Google under the **OAuth2 Providers** section.

![Google provider](/images/integrations/oauth-google/provider.avif)

Add the **Client ID** and **Client secret** you saved from Google Cloud and copy the URI to add to the **authorized redirect URIs** field in the credential you created on Google Cloud.

![OAuth redirect URI](/images/integrations/oauth-google/redirect-uri.avif)

## Step 3: Test the provider.

Follow the [OAuth 2 login](https://appwrite.io/docs/products/auth/oauth2#init) flow to test your provider.

# Read more about Google and Appwrite Auth

If you would like to learn more about Google and Appwrite Auth, we have some resources that you should visit:

- [How to set up Google authentication in React with Appwrite](https://appwrite.io/blog/post/set-up-google-auth-appwrite-react)
- [Implement OAuth login in your apps using Appwrite Auth](https://appwrite.io/docs/products/auth/oauth2)
- [Understanding OAuth and OpenID Connect](https://appwrite.io/blog/post/oauth-openid)
- [Appwrite Auth API reference](https://appwrite.io/docs/references/cloud/client-web/account)`,M=`---
layout: integration
title: OAuth with Notion
description: Authenticate users with an existing Notion account
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/oauth-notion/cover.avif
category: auth
product: 
    avatar: '/images/integrations/avatars/notion.avif'
    vendor: Notion
    description: 'Notion is a versatile productivity tool that combines note-taking, task management, and collaboration features into a single application.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/oauth-notion/cover.avif
    - /images/integrations/oauth-notion/new-integration.avif
    - /images/integrations/oauth-notion/provider.avif
    - /images/integrations/oauth-notion/redirect-uri.avif
---

Notion is a versatile productivity tool that combines note-taking, task management, and collaboration features into a single application. It allows users to create customizable workspaces where they can organize their projects, documents, and databases. Notion's flexibility comes from its block-based system, which lets users add various types of content, such as text, images, lists, tables, and more, in a modular fashion. This makes it suitable for personal use, team collaboration, and project management.

# How does the integration work?

You can use the Notion OAuth adapter in Appwrite Auth for user authentication and management. This can be convenient for users because they can start using your app without creating a new account. It can also be more secure, because the user has one less password that could become vulnerable.

# How to implement

To implement the Notion OAuth adapter in Appwrite Auth, there are several steps you must complete:

## Step 1: Create a Notion integration

First, head over to Notion and [create a new integration](https://www.notion.so/profile/integrations). Set the integration type as **Public** if you want your integration to be used by any Notion user, not just members of your workspace (otherwise, set it as **Internal**), and add all the mandatory info. In the **Redirect URIs** field, temporarily add the URL \`https://temporary-endpoint/\`. This temporary URI will be replaced with the final URI once the OAuth2 adapter is configured on Appwrite.

![New Notion integration](/images/integrations/oauth-notion/new-integration.avif)

From the **Configuration** tab, save the **OAuth Client ID** and **OAuth Client Secret** for later usage.

## Step 2: Add Notion OAuth adapter to your Appwrite project

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. In your Appwrite project, head over to the **Auth** page, open the **Settings** tab, and click on **Notion** under the **OAuth2 Providers** section.

![Notion provider](/images/integrations/oauth-notion/provider.avif)

Add the **OAuth Client ID** and **OAuth Client Secret** you saved from your Notion integration and copy the URI to add to the **Redirect URIs** field on the **Basic Information** tab in your Notion integration.

![Redirect URI](/images/integrations/oauth-notion/redirect-uri.avif)

## Step 3: Test the provider.

Follow the [OAuth 2 login](https://appwrite.io/docs/products/auth/oauth2#init) flow to test your provider.

# Read more about Notion and Appwrite Auth

If you would like to learn more about Notion and Appwrite Auth, we have some resources that you should visit:

- [Create a Notion integration](https://www.notion.so/profile/integrations)
- [Implement OAuth login in your apps using Appwrite Auth](https://appwrite.io/docs/products/auth/oauth2)
- [Understanding OAuth and OpenID Connect](https://appwrite.io/blog/post/oauth-openid)
- [Appwrite Auth API reference](https://appwrite.io/docs/references/cloud/client-web/account)`,N=`---
layout: integration
title: OAuth with X
description: Authenticate users with an existing X account
date: 2026-04-09
featured: true
isPartner: true
isNew: true
cover: /images/integrations/oauth-x/cover.avif
category: auth
product:
    avatar: '/images/integrations/avatars/x.avif'
    vendor: X
    description: 'X is a social media platform where users can post short messages, follow others, and engage in real-time conversations on topics ranging from news and politics to entertainment and technology.'
platform:
    - 'Cloud'
images:
    - /images/integrations/oauth-x/cover.avif
    - /images/integrations/oauth-x/new-app.avif
    - /images/integrations/oauth-x/oauth2.avif
    - /images/integrations/oauth-x/provider.avif
---

X, formerly known as Twitter, is a social media platform where users can post short messages, follow others, and engage in real-time conversations on topics ranging from news and politics to entertainment and technology. With hundreds of millions of active users worldwide, X is one of the most widely used social platforms and provides OAuth 2.0 support, allowing developers to authenticate users through their existing X accounts.

# How does the integration work?

You can use the X OAuth adapter in Appwrite Auth for user authentication and management. This can be convenient for users because they can start using your app without creating a new account. It can also be more secure, because the user has one less password that could become vulnerable.

# How to implement

To implement the X OAuth adapter in Appwrite Auth, there are several steps you must complete:

## Step 1: Create an X Developer app

First, head to the [X Developer Console](https://console.x.com/) and create a new project. In the **Apps** section, create a new app inside the project (or use an existing one). Give your app a name that reflects what you're building.

In your app's settings, scroll down to **User authentication settings** and click **Set up**. Configure the following:

- **App permissions**: Select **Read** at minimum.
- **Type of App**: Select **Web App, Automated App or Bot**.
- **Callback URI / Redirect URL**: Temporarily add \`https://temporary-endpoint.com/\`. This will be replaced with the actual URI once the OAuth2 adapter is configured on Appwrite.

![OAuth 2.0 settings](/images/integrations/oauth-x/oauth2.avif)

After saving, X will display a **Client ID** and **Client Secret**. Save both values for later use.

## Step 2: Add X OAuth adapter to your Appwrite project

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) if you haven't already. In your Appwrite project, head over to the **Auth** page, open the **Settings** tab, and click on **X** under the **OAuth2 Providers** section.

![X provider](/images/integrations/oauth-x/provider.avif)

Add the **Client ID** and **Client Secret** you saved from your X app and copy the URI to replace the temporary URL in the **Callback URI / Redirect URL** field in your X app's user authentication settings.

## Step 3: Test the provider

Follow the [OAuth 2 login](/docs/products/auth/oauth2#init) flow to test your provider.

# Read more about X and Appwrite Auth

If you would like to learn more about X and Appwrite Auth, we have some resources that you should visit:

- [X Developer Console](https://console.x.com)
- [Implement OAuth login in your apps using Appwrite Auth](/docs/products/auth/oauth2)
- [Understanding OAuth and OpenID Connect](/blog/post/oauth-openid)
- [Appwrite Auth API reference](/docs/references/cloud/client-web/account)
`,P=`---
layout: integration
title: Phone auth with Twilio
description: Authenticate users via OTPs sent through SMS using Twilio
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/phone-auth-twilio/cover.avif
category: auth
product: 
    avatar: '/images/integrations/avatars/twilio.avif'
    vendor: Twilio
    description: 'Twilio is a cloud communications platform that provides programmable communication tools using web APIs and SDKs.'
platform: 
    - 'Self-hosted'
images: 
    - /images/integrations/phone-auth-twilio/cover.avif
    - /images/integrations/phone-auth-twilio/twilio-console.avif
    - /images/integrations/phone-auth-twilio/user.avif
---

Twilio is a cloud communications platform that provides programmable communication tools for making and receiving phone calls, sending and receiving text messages, and performing other communication functions using web APIs and SDKs.

# How does the integration work?

If you are using self-hosting Appwrite, you can use the Twilio provider to deliver OTPs (one-time passwords) for phone authentication in Appwrite Auth. This is a great passwordless alternative to standard authentication methods, especially for mobile apps, and has several benefits, such as enhanced security, higher user convenience, reduced password fatigue, and easier fraud prevention.

Phone authentication via OTPs is also available on [Appwrite Cloud](https://cloud.appwrite.io) without the need to manually integrate a provider.

# How to implement

To implement the Twilio provider for phone authentication, there are several steps you must complete:

## Step 1: Sign up for Twilio

First, you must [sign up for a Twilio account](https://www.twilio.com/try-twilio), upgrade your account (in case you want to message numbers other than your own), and purchase a phone number with the SMS capability.

![Twilio console](/images/integrations/phone-auth-twilio/twilio-console.avif)

Ensure you save the following information for later use:

| Field name |  |
| --- | --- |
| Account SID | Head to **Twilio console** > **Account info** > **Account SID**. |
| Auth token | Head to **Twilio console** > **Account info** > **Auth Token**. |
| Phone number | You can access numbers by navigating to your **Twilio console** > **Develop** > **Phone Numbers** > **Manage** > **Active Numbers**. |

## Step 2: Add Twilio provider to your Appwrite instance

For this step, you must [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already.

Visit the \`.env\` file created for your Appwrite instance and update the following environment variables:

\`\`\`bash
_APP_SMS_PROVIDER=sms://[ACCOUNT_SID]:[AUTH_TOKEN]@twilio	
_APP_SMS_FROM=[TWILIO_PHONE_NUMBER]
\`\`\`

After that, run the following Docker Compose commands in your terminal to restart your Appwrite containers and verify if the changes have been successfully applied:

\`\`\`bash
docker compose up -d --force-recreate
docker compose exec appwrite vars
\`\`\`

## Step 3: Test the provider

To test the provider, you must [implement the phone (SMS) authentication flow](https://appwrite.io/docs/products/auth/phone-sms) in a web or mobile app. On successful login, you should see a user on the **Auth** page of your Appwrite project with their phone number visible as the identifier.

![User](/images/integrations/phone-auth-twilio/user.avif)

# Read more about Twilio and Appwrite Auth

If you would like to learn more about phone authentication with Twilio and Appwrite Auth, we have some resources that you should visit:

- [Sign up for Twilio](https://www.twilio.com/try-twilio)
- [SMS delivery docs for Appwrite (self-hosted)](https://appwrite.io/docs/advanced/self-hosting/sms)
- [Appwrite phone auth docs](https://appwrite.io/docs/products/auth/phone-sms)
- [Appwrite Accounts API reference](https://appwrite.io/docs/references/cloud/client-web/account)
`,F=`---
layout: integration
title: Push notifications with APNs
description: Integrate Apple Push Notification Service (APNs) with Appwrite Messaging to send remote notifications to your users' Apple devices.
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/push-apns/cover.avif
category: messaging
product: 
    avatar: '/images/integrations/avatars/apple.avif'
    vendor: Apple
    description: 'Apple Push Notification Service is an Apple platform that enables developers to send notifications to iOS devices, macOS computers, and other Apple devices.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/push-apns/cover.avif
    - /images/integrations/push-apns/apple-developer-program.avif
    - /images/integrations/push-apns/provider.avif
---

Apple Push Notification Service (APNs) is an Apple platform that enables developers to send notifications to iOS devices, macOS computers, and other Apple devices. It allows app developers to send remote notifications, alerting users to new content, messages, updates, and app-specific information.

# How does the integration work?

You can use the APNs provider in Appwrite Messaging to send push notifications to your users’ Apple devices. APNs is a best-effort service and will attempt to deliver messages to your device when it's online and available again. APNs will save the last message for 30 days or less and attempt delivery as soon as it's online.

# How to implement

To implement the APNs provider in Appwrite Messaging, there are several steps you must complete:

## Step 1: Sign up on Apple Developer

First, [sign up for the Apple Developer program](https://developer.apple.com/programs).

![Apple developer program](/images/integrations/push-apns/apple-developer-program.avif)

Before you configure any other details, you must create an **App ID** for our app. To do that, go to XCode and open the \`ios\` folder in your source code. Navigate to the **Signing & Capabilities** tab, click the **+ Capability** button, search for \`Push Notifications\`, and double-click the result to add it. Then, modify the **Bundle Identifier** to a unique string by prefixing it with any letters of your choice and then change the **Team** to your Apple Developer team. This will automatically create an **App ID** for your app.

Head to the Apple Developer account and save the following details:

| Field name |  |
| --- | --- |
| Bundle ID | Head to **Apple Developer account** > **Program resources** > **Certificates, Identifiers & Profiles** > **Identifiers** |
| Team ID | Head to **Apple Developer account** > **Membership details** > **Team ID** |
| Authentication key (.p8 file) | Head to **Apple Developer account** > **Program resources** > **Certificates, Identifiers & Profiles** > **Keys**. Create a key and give it a name. Enable the **Apple Push Notifications service (APNs)**, and register your key. |
| Authentication key ID | Head to **Apple Developer account** > **Program resources** > **Certificates, Identifiers & Profiles** > **Keys**. Click on your key to view details. |

## Step 2: Add APNs provider to your Appwrite project

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. In your Appwrite project, head over to the **Messaging** page, click on the **Providers** tab, and **create a new push notifications provider**. 

Enter the **team ID**, **bundle ID**, **authentication key ID**, and **authentication key (.p8 file)** that you saved from your Apple Developer account. In case your app is signed with a development provisioning profile, enable **Sandbox** mode.

![Apple provider](/images/integrations/push-apns/provider.avif)

## Step 3: Test the provider

Follow the [Send push notifications](https://appwrite.io/docs/products/messaging/send-push-notifications) flow to test your provider.

# Read more about APNs and Appwrite Messaging

If you would like to learn more about APNs and Appwrite Messaging, we have some resources that you should visit:

- [Set up the APNs provider in Appwrite Messaging](https://appwrite.io/docs/products/messaging/apns)
- [Send push notifications through Appwrite Messaging](https://appwrite.io/docs/products/messaging/send-push-notifications)
- [Best practices for sending push notifications](https://appwrite.io/blog/post/push-notifications-best-practices)
- [Appwrite Messaging API reference](https://appwrite.io/docs/references/cloud/server-nodejs/messaging)`,I=`---
layout: integration
title: Push notifications with FCM
description: Integrate Firebase Cloud Messaging (FCM) with Appwrite to send push notifications to iOS, Android and web applications.
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/push-fcm/cover.avif
category: messaging
product: 
    avatar: '/images/integrations/avatars/fcm.avif'
    vendor: Firebase
    description: 'Firebase Cloud Messaging is a cross-platform messaging solution from Google that enables you to send notifications and messages to users across Android, iOS, and web applications.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/push-fcm/cover.avif
    - /images/integrations/push-fcm/private-key.avif
    - /images/integrations/push-fcm/provider.avif
---

Firebase Cloud Messaging (FCM) is a cross-platform messaging solution from Google that enables you to send notifications and messages to users across Android, iOS, and web applications. It supports both notification messages displayed by the system UI and data messages handled by your app’s code.

# How does the integration work?

You can use the FCM provider in Appwrite Messaging to send push notifications to your users’ iOS, Android, and web apps. These can be used to send app updates, special offers, instant notifications, reminders, and more.

# How to implement

To implement the FCM provider in Appwrite Messaging, there are several steps you must complete:

## Step 1: Sign up on Firebase

First, you must [sign up for a Firebase account](https://firebase.google.com/) and create a new project. Head to the **Project settings** page, click on the **Service accounts** tab, and **generate new private key**. Download the JSON file for later use.

![Firebase service account private key](/images/integrations/push-fcm/private-key.avif)

You must also verify that FCM has been enabled on your project by visiting the **Cloud Messaging** tab. If FCM is disabled, click the three-dots menu, open the link, and click **Enable**.

## Step 2: Add FCM provider to your Appwrite project

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. In your Appwrite project, head over to the **Messaging** page, click on the **Providers** tab, and **create a new push notifications provider**. 

Select **FCM** and upload the JSON file you downloaded from Firebase.

![FCM provider](/images/integrations/push-fcm/provider.avif)

## Step 3: Test the provider

To test the provider on mobile apps, there are some additional configuration steps:

{% tabs %}
{% tabsitem #android title="Android with FCM" %}
1. Install the \`com.google.firebase:firebase-messaging\` Firebase SDK.
2. In your Firebase console, navigate to **Settings** > **General** > **Your apps** > add an **Android** app.
3. Register and download your \`google-services.json\` config file.
4. Add \`google-services.json\` at the root of your project.
5. Add Google Services class path to your app-level Gradle dependencies block \`"com.google.gms:google-services:4.4.0"\`.
6. Add the Google Services plugin to your app-level Gradle in the plugins block as \`"com.google.gms.google-services"\`.
7. Add notification handler service to \`AndroidManifest.xml\` inside the application tag, alongside other activities. Find an example of this service in the [Send push notification](https://appwrite.io/docs/products/messaging/send-push-notifications#add-targets) journey.

\`\`\`xml
<service android:name="<YOUR_NOTIFICATION_HANDLER_SERVICE>" android:exported="false">
    <intent-filter>
        <action android:name="com.google.firebase.MESSAGING_EVENT" />
    </intent-filter>
</service>

\`\`\`
{% /tabsitem %}

{% tabsitem #ios title="iOS with FCM" %}
1. In your Firebase console, navigate to **Settings** > **General** > **Your apps** > add an **iOS** app.
2. Register and download your \`GoogleService-Info.plist\` and add it to the root of your project.
3. Head to **Apple Developer Member Center** > **Program resources** > **Certificates, Identifiers & Profiles** > **Keys**. The key needs **Apple Push Notification Service** enabled.
4. Create a new key, note down the key ID, and download your key.
5. In the Firebase console, go to *Settings*> **Cloud Messaging** > **APNs authentication key** > click **Upload**. Then, upload your key here.
6. Add push notification capability to your app by clicking your root-level app in XCode > **Signing & Capabilities** > + Capabilities > Search for **Push Notifications**.
7. If using SwiftUI, disable swizzling by setting \`FirebaseAppDelegateProxyEnabled\` to \`NO\` in your \`Info.plist\`.
{% /tabsitem %}
{% /tabs %}

After that, you can follow the [Send push notifications](https://appwrite.io/docs/products/messaging/send-push-notifications) flow to test your provider.

# Read more about FCM and Appwrite Messaging

If you would like to learn more about FCM and Appwrite Messaging, we have some resources that you should visit:

- [Set up the FCM provider in Appwrite Messaging](https://appwrite.io/docs/products/messaging/fcm)
- [Send push notifications through Appwrite Messaging](https://appwrite.io/docs/products/messaging/send-push-notifications)
- [Best practices for sending push notifications](https://appwrite.io/blog/post/push-notifications-best-practices)
- [Appwrite Messaging API reference](https://appwrite.io/docs/references/cloud/server-nodejs/messaging)`,L=`---
layout: integration
title: Query MongoDB Atlas
description: Save a document in your MongoDB cluster and list all stored documents
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/query-mongodb/cover.avif
category: databases
product: 
    avatar: '/images/integrations/avatars/mongodb.avif'
    vendor: MongoDB
    description: 'MongoDB is a popular NoSQL database known for its flexibility and scalability.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/query-mongodb/cover.avif
    - /images/integrations/query-mongodb/first-cluster.avif
    - /images/integrations/query-mongodb/connection-string.avif
    - /images/integrations/query-mongodb/network-access.avif
    - /images/integrations/query-mongodb/template.avif
    - /images/integrations/query-mongodb/variables.avif
---

MongoDB is a popular NoSQL database known for its flexibility and scalability. It allows developers to store and manage large amounts of data with ease.

# How does the integration work?

You can utilize a pre-built Appwrite function template to integrate a MongoDB Atlas cluster with your app. This will allow you to leverage MongoDB's powerful data management capabilities and NoSQL database and potentially extend it with Appwrite’s ecosystem.

# How to implement

To implement the MongoDB Atlas integration, follow these simple steps:

## Step 1: Set up a MongoDB database

First, [create an account on MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and deploy your first cluster.

![MongoDB Atlas first cluster](/images/integrations/query-mongodb/first-cluster.avif)

Create your username and password and copy the **connection string** for your MongoDB Atlas cluster. This connection string will be used to connect the Appwrite Function to your MongoDB cluster.

![MongoDB Atlas connection string](/images/integrations/query-mongodb/connection-string.avif)

Next, head to the **Network Access** page from the left sidebar, click on the **Add IP Address** button, and allow access from anywhere.

![MongoDB Atlas network access](/images/integrations/query-mongodb/network-access.avif)

## Step 2: Create the Appwrite Function

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. In case you decide to self-host Appwrite, there are [additional setup steps](https://appwrite.io/docs/advanced/self-hosting/functions) to use Appwrite Function templates.

Head over to the Appwrite console, navigate to the **Functions** page, click on the **Templates** tab, and search for the **MongoDB** function template.

![Function template](/images/integrations/query-mongodb/template.avif)

Add the **MongoDB connection string** you saved in the **Variables** step. Then, create a new repository with the default branch and root directory settings. You can edit this repository later to update the function logic.

![Env variables](/images/integrations/query-mongodb/variables.avif)

## Step 3: Test the function

Once the function is ready, visit the **Domains** tab on the **Functions** page and copy the domain URL to test the function. Sending a GET (HTTP) Request to this endpoint will add a randomly generated mock document and list all the documents in the database.

\`\`\`bash
curl DEPLOYED_FUNCTION_DOMAIN \\
  -H 'accept: application/json'
\`\`\`

You can add other database functionalities by editing the function generated for you on GitHub.

# Read more about MongoDB Atlas and Appwrite Functions

If you would like to learn more about MongoDB Atlas and Appwrite Functions, we have some resources that you should visit:

- [Integrate SQL, NoSQL, Vector, Graph, or any database into your Appwrite project](https://appwrite.io/blog/post/integrate-sql-nosql-vector-graph-or-any-database-into-your-appwrite-project)
- [Understanding data queries in database management](https://appwrite.io/blog/post/understand-data-queries)
- [Appwrite Functions docs](https://appwrite.io/docs/products/functions)`,R=`---
layout: integration
title: Query Upstash
description: Store data in your Upstash vector database and query it for similar data
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/query-upstash/cover.avif
category: databases
product: 
    avatar: '/images/integrations/avatars/upstash.avif'
    vendor: Upstash
    description: 'Upstash Vector provides a powerful vector database designed to handle complex queries and search functionalities.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/query-upstash/cover.avif
    - /images/integrations/query-upstash/index.avif
    - /images/integrations/query-upstash/template.avif
    - /images/integrations/query-upstash/variables.avif
---

Upstash Vector provides a powerful vector database designed to handle complex queries and search functionalities. It’s ideal for applications that require fast and efficient handling of vector data.

# How does the integration work?

You can utilize a pre-built Appwrite function template to integrate an Upstash Vector database with your app. This setup enables you to store and query vector data efficiently, enhancing your application's search and recommendation features.

# How to implement

To implement the Upstash Vector integration, follow these simple steps:

### Step 1: Set up the Upstash Vector database

First, [create an account on Upstash](https://console.upstash.com/login) and set up a **new Vector index** with your preferred region and embedding model. Once it is ready, copy your **endpoint** and **token** from the index’s dashboard for further usage

![Upstash vector index](/images/integrations/query-upstash/index.avif)

## Step 2: Create the Appwrite Function

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. If you decide to self-host Appwrite, there are [additional setup steps](https://appwrite.io/docs/advanced/self-hosting/functions) to use Appwrite Function templates.

Head over to the Appwrite console, navigate to the **Functions** page, click the **Templates** tab, and search for the **Upstash** function template.

![Function template](/images/integrations/query-upstash/template.avif)

Add the **Upstash endpoint** and **token** you saved in the **Variables** step. Then, create a new repository with the default branch and root directory settings. You can edit this repository later to update the function logic.

![Env variables](/images/integrations/query-upstash/variables.avif)

## Step 3: Test the function

Once the function is ready, visit the **Domains** tab on the **Functions** page and copy the domain URL to test the function. Sending a GET (HTTP) Request to this endpoint will add a randomly generated mock embedding and query for the one most similar entry in the database.

\`\`\`bash
curl DEPLOYED_FUNCTION_DOMAIN \\
  -H 'accept: application/json'
\`\`\`

You can add other database functionalities by editing the function generated on GitHub.

# Read more about Upstash and Appwrite Functions

If you would like to learn more about Upstash and Appwrite Functions, we have some resources that you should visit:

- [Integrate SQL, NoSQL, Vector, Graph, or any database into your Appwrite project](https://appwrite.io/blog/post/integrate-sql-nosql-vector-graph-or-any-database-into-your-appwrite-project)
- [Appwrite Functions docs](https://appwrite.io/docs/products/functions)`,z=`---
layout: integration
title: Data replication with RxDB
description: Setup push-pull replication from a local database and enable offline sync capabilities using RxDB
date: 2025-04-17
featured: false
isPartner: true
isNew: true
cover: /images/integrations/replication-rxdb/cover.avif
category: databases
product: 
    avatar: '/images/integrations/avatars/rxdb.avif'
    vendor: Upstash
    description: 'RxDB (Reactive Database) is a local-first, NoSQL database for JavaScript applications.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/replication-rxdb/cover.avif
---

RxDB (Reactive Database) is a client-side, NoSQL database designed for JavaScript applications. It emphasizes real-time data synchronization, offline-first capabilities, and reactive programming paradigms. RxDB is particularly suited for applications that require seamless user experiences across various platforms, including web browsers, mobile devices, and desktop environments.

# How does the integration work?

RxDB integrates with Appwrite through a replication plugin that enables two-way data synchronization between a client-side RxDB instance and an Appwrite Database. This setup allows apps to store data locally (using data stores such as LocalStorage, SQLite, or IndexedDB) and push/pull changes from the Appwrite backend. When offline, the app continues to function smoothly using RxDB's local-first model, and once connectivity is restored, it syncs changes with Appwrite. Conflict handling, soft deletion, and live replication are handled seamlessly using RxDB’s built-in tools and Appwrite’s Realtime API.

# How to implement

To implement the RxDB integration, there are several steps you must complete:

## Step 1: Configure Appwrite project

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. Head over to the Appwrite console, go to the **Settings** page, and copy your project ID and API endpoint for further usage. Next, go to the **Databases** page from the left sidebar, create a new database with the ID \`mydb\`, and then a collection with the ID \`humans\` (save both IDs for further usage).

Click on the **Attributes** tab and add the following attributes (schema used for demo purposes):

| Key | Type | Size | Required |
| --- | --- | --- | --- |
| \`name\` | String | 100 | Yes |
| \`age\` | Integer |  | Yes |
| \`homeAddress\` | String | 2000 | Yes |
| \`deleted\` | Boolean |  | Yes |

> **Note:** The \`deleted\` attribute is necessary to add because RxDB only soft deletes to prevent data loss in offline scenarios (no hard deletion of data occurs).

Then, head to the **Settings** tab of your collection, scroll down to the **Permissions** section, and the following:

| Role | Create | Read | Update | Delete |
| --- | --- | --- | --- | --- |
| Any | Yes | Yes | Yes | Yes |

> **Note:** While RxDB does not allow you to manually configure permissions for each document, if your app uses Appwrite Auth and document-level permissions are enabled for your collection, the Appwrite SDK will automatically assign read and write permissions to the logged-in user for each document created.

## Step 2: Install Appwrite Web SDK and RxDB library

Open the terminal in your app’s working directory and run the following command:

\`\`\`bash
npm install appwrite rxdb
\`\`\`

In your app’s \`.env\` file, add the following:

\`\`\`bash
APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
APPWRITE_PROJECT_ID=your-project-id
APPWRITE_DATABASE_ID=your-database-id
APPWRITE_COLLECTION_ID=your-collection-id
\`\`\`

Then, import all necessary libraries in your code:

\`\`\`js
import { replicateAppwrite } from 'rxdb/plugins/replication-appwrite';
import { createRxDatabase, addRxPlugin, RxCollection } from 'rxdb/plugins/core';
import { getRxStorageLocalstorage } from 'rxdb/plugins/storage-localstorage';
import { Client } from 'appwrite';
\`\`\`

## Step 3: Setup Appwrite client

To create an Appwrite client, add the following code:

\`\`\`js
export const client = new Client()
	.setEndpoint(process.env.APPWRITE_ENDPOINT)
	.setProject(process.env.APPWRITE_PROJECT_ID);
\`\`\`

## Step 4: Create an RxDB database and collection

To create an RxDB database and collection, first, you must prepare a database schema via the following code:

\`\`\`js
const mySchema = {
    title: 'my schema',
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            maxLength: 100
        },
        name: {
            type: 'string'
        },
				age: {
					type: 'number'
				},
        homeAddress: {
            type: 'string'
        }
    },
    required: ['id', 'name', 'age', 'homeAddress']
};
\`\`\`

Using this schema, you can create a database and collection via the following code:

\`\`\`js
const db = await createRxDatabase({
    name: 'mydb',
    storage: getRxStorageLocalstorage()
});

await db.addCollections({
    humans: {
        schema: mySchema
    }
});

const collection = db.humans;
\`\`\`

> **Note:** Please ensure that the names of your RxDB database and collection match the IDs of your Appwrite database and collection.
> 

## Step 5: Start replication

To start data replication, add the following code:

\`\`\`js
const replicationState = replicateAppwrite({
    replicationIdentifier: 'my-appwrite-replication',
    client,
    databaseId: process.env.APPWRITE_DATABASE_ID,
    collectionId: process.env.APPWRITE_COLLECTION_ID,
    deletedField: 'deleted', // Field that represents deletion in Appwrite
    collection,
    pull: {
        batchSize: 10,
    },
    push: {
        batchSize: 10
    },
    /*
     * ...
     * You can set all other options for RxDB replication states
     * like 'live' or 'retryTime'
     * ...
     */
});
\`\`\`

With that, your RxDB integration is configured and you can use other relevant RxDB functionalities and database operations in your application.

# Further resources

If you would like to learn more about RxDB and Appwrite Databases, we have some resources that you should visit:

- [RxDB docs for Appwrite](https://rxdb.info/replication-appwrite.html)
- [Appwrite offline sync docs](/docs/products/databases/offline)
- [Build an offline-first journal app with RxDB and Appwrite](/blog/post/offline-first-journal)
- [Offline-first journal demo app on GitHub](https://github.com/appwrite-community/offline-journal)`,B=`---
layout: integration
title: Search with Algolia
description: Integrate Algolia search into your Appwrite database
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/search-algolia/cover.avif
category: search
product: 
    avatar: '/images/integrations/avatars/algolia.avif'
    vendor: Algolia
    description: 'Algolia is a search platform that helps you add fast and relevant search capabilities to your app.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/search-algolia/cover.avif
    - /images/integrations/search-algolia/overview.avif
    - /images/integrations/search-algolia/index.avif
    - /images/integrations/search-algolia/template.avif
    - /images/integrations/search-algolia/variables.avif
    - /images/integrations/search-algolia/demo.avif
---

Algolia is a search platform that helps you add fast and relevant search capabilities to your app. It makes it easy to find and explore data quickly.

# How does the integration work?

By integrating Algolia with Appwrite, you can use Algolia's search features directly in your Appwrite database. This lets you leverage Algolia’s comprehensive search capabilities with your Appwrite backend.

# How to implement

To implement the Algolia integration, follow these simple steps:

## Step 1: Set up an Algolia account

First, [sign up on Algolia](https://dashboard.algolia.com/users/sign_up) and create a new application. Save the **Application ID**, **Search API Key**, and **Write API Key** for further usage.

![Algolia overview](/images/integrations/search-algolia/overview.avif)

Then, click on the **Search** page from the left sidebar and **create a new Index** to store your searchable data. Save your **Index ID** for further usage.

![New index](/images/integrations/search-algolia/index.avif)

## Step 2: Create the Appwrite Function

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. In case you decide to self-host Appwrite, there are [additional setup steps](https://appwrite.io/docs/advanced/self-hosting/functions) to use Appwrite Function templates. Additionally, for this template, you must have an Appwrite Database and Collection filled with data in advance.

Head over to the Appwrite console, navigate to the **Functions** page, click the **Templates** tab, and search for the **Algolia** function template.

![Function template](/images/integrations/search-algolia/template.avif)

During the setup process, click on the checkbox to create an Appwrite API key on completion and add the Appwrite Database ID and Collection ID for the data you want to index and search as well as the **Algolia application ID**, **search API key**, **write API key** (under Admin API Key), and **index ID** in the **Variables** step. If you are self-hosting Appwrite, click on the **optional variables** dropdown and update the Appwrite endpoint to your instance’s publicly accessible endpoint. 

![Env variables](/images/integrations/search-algolia/variables.avif)

Then, create a new repository with the default branch and root directory settings. You can edit this repository later to update the function logic.

## Step 3: Test the function

Once all the steps are complete, it is time to test the function! Before we go further, visit the **Domains** tab on the **Functions** page and copy the domain URL to test the function.

Send a POST (HTTP) Request to the function URL to index the Appwrite Collection in Algolia. 

\`\`\`bash
curl -XPOST https://DEPLOYED_FUNCTION_DOMAIN
\`\`\`

In case you have a large collection of data and your function executions timeout, you can head to the **Settings** tab on the **Functions** page and increase the function timeout limit from **15 seconds** to **900 seconds** (maximum).
    
Then, open your function URL in the browser to try the interactive search UI.
    

![Demo](/images/integrations/search-algolia/demo.avif)

# Read more about Algolia

If you would like to learn more about Algolia, we have some resources that you should visit:

- [Sign up for Algolia](https://dashboard.algolia.com/users/sign_up)
- [Learn more about Functions templates in Appwrite docs](https://appwrite.io/docs/products/functions/templates)
- [Connect with other developers and the Appwrite team on Discord.](https://discord.com/invite/appwrite)`,V=`---
layout: integration
title: Self-host Appwrite with MongoDB
description: Use MongoDB as the underlying database for your self-hosted Appwrite instance.
date: 2026-04-01
featured: true
isPartner: true
isNew: true
cover: /images/integrations/self-hosted-mongodb/cover.avif
category: databases
product:
    avatar: '/images/integrations/avatars/mongodb.avif'
    vendor: MongoDB
    description: 'MongoDB is a popular NoSQL database known for its flexibility and scalability.'
platform:
    - 'Self-hosted'
images:
    - /images/integrations/self-hosted-mongodb/cover.avif
    - /images/docs/advanced/self-hosting/installation/dark/wizard-setup-app.avif
    - /images/docs/advanced/self-hosting/installation/dark/wizard-secure.avif
    - /images/docs/advanced/self-hosting/installation/dark/wizard-account.avif
    - /images/docs/advanced/self-hosting/installation/dark/wizard-review.avif
---

[MongoDB](https://www.mongodb.com/) is a popular NoSQL database known for its flexibility and scalability. It allows developers to store and manage large amounts of data with ease.

# How does the integration work?

Traditionally, Appwrite has utilized MariaDB as its primary database under the hood. Appwrite now supports **MongoDB** as an alternative database option in its self-hosted setup, allowing developers to access the same Appwrite features and experience while offering greater flexibility in platform deployment.

From the developer's point of view, nothing changes in how you use Appwrite:

- You still create databases, tables, and rows from the Appwrite Console (or via SDKs).
- Appwrite stores that data in **MongoDB Community Edition** under the hood, along with other Appwrite metadata it needs to operate.
- You can use **MongoDB Compass** to confirm that the data Appwrite wrote is present in MongoDB.

# How to implement

To set up the **Appwrite + MongoDB (self-hosted)** integration, there are several steps you must complete:

## Step 1: Self-host Appwrite

Self-host Appwrite using the following Docker command:

{% tabs %}
{% tabsitem #unix title="macOS and Linux" %}
\`\`\`bash
docker run -it --rm \\
    --publish 20080:20080 \\
    --volume /var/run/docker.sock:/var/run/docker.sock \\
    --volume "$(pwd)"/appwrite:/usr/src/code/appwrite:rw \\
    --entrypoint="install" \\
    appwrite/appwrite:1.9.0
\`\`\`
{% /tabsitem %}

{% tabsitem #windows-cmd title="Windows (Command Prompt)" %}

\`\`\`cmd
docker run -it --rm ^
    --publish 20080:20080 ^
    --volume //var/run/docker.sock:/var/run/docker.sock ^
    --volume "%cd%"/appwrite:/usr/src/code/appwrite:rw ^
    --entrypoint="install" ^
    appwrite/appwrite:1.9.0
\`\`\`
{% /tabsitem %}

{% tabsitem #windows-pwsh title="Windows (Powershell)" %}

\`\`\`powershell
docker run -it --rm \`
    --publish 20080:20080 \`
    --volume /var/run/docker.sock:/var/run/docker.sock \`
    --volume \${pwd}/appwrite:/usr/src/code/appwrite:rw \`
    --entrypoint="install" \`
    appwrite/appwrite:1.9.0
\`\`\`
{% /tabsitem %}

{% /tabs %}

Once the command is running, open your browser and go to \`http://localhost:20080\` (or your server's IP address on port 20080).

## Step 2: Configure your setup

On visiting the aforementioned URL, Appwrite's self-hosting installation wizard will ask you to configure certain necessary fields:

![Setup your app](/images/docs/advanced/self-hosting/installation/dark/wizard-setup-app.avif)

- **Hostname:** Enter the domain or IP address where your Appwrite instance will be accessible. If you're just testing locally, \`localhost\` works fine.
- **Database:** Select \`MongoDB\`. It should already be selected by default, but ensure it is the one highlighted.
- **Advanced settings:** Expand this if you want to change the HTTP/HTTPS ports, set an SSL certificate email address, or add an OpenAI key for the Appwrite Assistant. Unless you are an advanced Appwrite user configuring your instance for production, the default configuration should be fine.

## Step 3: Secure your app

Once your instance is set up, the wizard will generate a secret key to encrypt sensitive data on your server.

![Secure your app](/images/docs/advanced/self-hosting/installation/dark/wizard-secure.avif)

Copy this key and store it somewhere safe. You will not be able to see it again after this step.

## Step 4: Create your account

Create the email and password for your Appwrite account. These credentials will allow you to sign in to the Appwrite Console on your instance after installation.

![Create your account](/images/docs/advanced/self-hosting/installation/dark/wizard-account.avif)

## Step 5: Review your setup

Before concluding, the installation wizard will show you a summary of your configuration. Double-check all the settings and verify that the database selection shows MongoDB.

![Review your setup](/images/docs/advanced/self-hosting/installation/dark/wizard-review.avif)

Once everything looks good, hit the **Install** button. The wizard will pull the necessary Docker images and set up your Appwrite instance with MongoDB configured as the underlying database.

# Read more about MongoDB and Appwrite

If you would like to learn more about MongoDB and Appwrite, we have some resources that you should visit:

- [Announcement blog: Self-hosting Appwrite with MongoDB](/blog/post/appwrite-mongodb-partnership-self-hosted)
- [MongoDB Partner Ecosystem Catalog: Appwrite](https://cloud.mongodb.com/ecosystem/appwrite)
- [Appwrite's databases configuration docs](/docs/advanced/self-hosting/configuration/databases)
`,H=`---
layout: integration
title: Deploy Docusaurus with Sites
description: Build an MDX-powered documentation site with Appwrite Sites
date: 2025-05-19
featured: false
isPartner: true
isNew: true
cover: /images/integrations/sites-docusaurus/cover.avif
category: sites
product: 
    avatar: '/images/integrations/avatars/docusaurus.avif'
    vendor: Docusaurus
    description: 'Docusaurus is a modern static website generator optimized for building fast, accessible documentation websites with React.'
platform: 
    - 'Cloud'
    - 'Self-hosted'
images: 
    - /images/integrations/sites-docusaurus/cover.avif
    - /images/integrations/sites-docusaurus/search-site.avif
    - /images/integrations/sites-docusaurus/success.avif
    - /images/integrations/sites-docusaurus/homepage.avif
    - /images/integrations/sites-docusaurus/tutorial-page.avif
    - /images/integrations/sites-docusaurus/blog-page.avif
---

Docusaurus is a modern static website generator that makes it easy to create and maintain documentation websites. Built with React and powered by Markdown, Docusaurus helps you focus on writing content while taking care of the technical details.

With Appwrite Sites, you can deploy your Docusaurus documentation in minutes using our pre-built template, with features like automatic builds, custom domains, and global CDN distribution.

# How does the integration work?

[Appwrite Sites](https://appwrite.io/products/sites) provides a ready-to-use Docusaurus template that you can deploy instantly. The template comes with a pre-configured setup optimized for documentation sites, making it easy to get started without any complex configuration.


To deploy the Docusaurus template with Appwrite Sites, follow these steps:

## Create site

After signing into your Appwrite console, look at the sidebar on the left. Under the **Deploy** section, you will find the **Sites** button.

Clicking it opens the Sites page. Here, you will see the **Sites** tab selected by default. Click **Create site** to start the deployment process.

![Create new site](/images/integrations/sites-docusaurus/create-site.avif)

At this point, Appwrite offers two options: **Clone a template** or **Connect a repository**. For this guide, we will focus on cloning the Docusaurus template, which lets you quickly set up a documentation site based on a pre-built project.

![Create new site](/images/integrations/sites-docusaurus/clone-template.avif)

##  Finding the Docusaurus template

When you select **Clone a template**, you'll see a library of templates. To find the Docusaurus template:

1. Use the search bar at the top and type "Docusaurus"

![Search templates](/images/integrations/sites-docusaurus/search-site.avif)


After selecting the template, you'll need to choose how to deploy it, Clicking the Docusaurus template will open a new page where you can configure your documentation site.



##  Configuring your site

### Setting up site details

Once you have selected the Docusaurus template, you will be prompted to enter basic details for your site.

You will need to provide a **Site name** and a **Site ID**. The Site ID becomes part of your site's URL, so it should be lowercase and use hyphens if necessary.


![Configure site details](/images/integrations/sites-docusaurus/site-details.avif)
At this stage, you can choose whether to connect your repository now or later.



If you choose **Connect your repository**, you will be able to either create a new repository based on the template or link it to an existing one. If you prefer to skip this step for now, you can choose **Connect later** and connect your version control later using the CLI or through the settings page.

If you opt to connect a repository immediately, you will see the following options:

- Select whether to create a new repository or connect to an existing one
- (Optional) Choose a GitHub organization if you have access to multiple organizations
- Name your repository if you are creating a new one
- Decide whether to keep the repository private by ticking the checkbox

Additionally, you can define the domain for your site, using the Appwrite Sites domain.

After reviewing your configuration, click **Deploy**.


## Monitoring the deployment

Once you initiate the deployment, you will be taken to a progress page where you can monitor the build and deployment in real time.

The logs will show you the different stages of the build process. Depending on the size of your template and the dependencies involved, this process can take anywhere from a few seconds to a few minutes.

![Configure site details](/images/integrations/sites-docusaurus/deployment-screen.avif)

## Access your site

After your site has been successfully deployed, Appwrite will show you a **Congratulations** page. 

![Configure site details](/images/integrations/sites-docusaurus/success.avif)

## Next step

Appwrite provides a few options to help you continue setting up or expanding your project.

You can **Add domain**, connecting an existing custom domain you own or registering a new one through the console.

You can **Share site**, allowing you to collaborate with your team by sharing access to your project.

You can also **Open on mobile**, previewing your live site directly from a mobile or tablet device to ensure everything looks and functions as expected across different screen sizes.

## Wrapping up
And with that, the Docusaurus template is deployed to Appwrite Sites. You can explore other templates or deploy any other websites you'd like.

## More Resources 

- [Appwrite Sites Docs](/docs/products/sites)
- [Docusaurus Website](https://docusaurus.io/)
- [Appwrite Sites video announcement](https://youtu.be/0cERQxFjTW4)
- [Appwrite Discord server](/discord)`,U=`---
layout: integration
title: Deploy Magic Portfolio with Sites
description: Showcase your creative work with a customizable portfolio with Appwrite Sites
date: 2025-05-19
featured: false
isPartner: true
isNew: true
cover: /images/integrations/sites-magic-portfolio/cover.avif
category: sites
product: 
    avatar: '/images/integrations/avatars/magic-portfolio.avif'
    vendor: Magic Portfolio
    description: 'A portfolio template designed for creatives, indie hackers, and engineers to showcase their work with style, speed, and full control.'
platform: 
    - 'Cloud'
    - 'Self-hosted'
images: 
    - /images/integrations/sites-magic-portfolio/cover.avif
    - /images/integrations/sites-magic-portfolio/homepage.avif
    - /images/integrations/sites-magic-portfolio/about-page.avif
    - /images/integrations/sites-magic-portfolio/work-page.avif
    - /images/integrations/sites-magic-portfolio/site-details.avif
    - /images/integrations/sites-magic-portfolio/success.avif
---

Magic Portfolio is a modern portfolio template that makes it easy to create and maintain your personal or professional portfolio website. Make your portfolio uniquely yours with customizable themes, brand colors, and fine-tuned visual details like borders and transitions.

With Appwrite Sites, you can deploy your portfolio in minutes using our pre-built template, with features like automatic builds, custom domains, and global CDN distribution.

# How does the integration work?

[Appwrite Sites](https://appwrite.io/products/sites) provides a ready-to-use Magic Portfolio template that you can deploy instantly. The template comes with a pre-configured setup optimized for portfolio sites, making it easy to get started without any complex configuration.


To deploy the Magic Portfolio template with Appwrite Sites, follow these steps:

## Create site

After signing into your Appwrite console, look at the sidebar on the left. Under the **Deploy** section, you will find the **Sites** button.

Clicking it opens the Sites page. Here, you will see the **Sites** tab selected by default. Click **Create site** to start the deployment process.

![Create new site](/images/integrations/sites-magic-portfolio/create-site.avif)

At this point, Appwrite offers two options: **Clone a template** or **Connect a repository**. For this guide, we will focus on cloning the Magic Portfolio template, which lets you quickly set up a portfolio site based on a pre-built project.

![Create new site](/images/integrations/sites-magic-portfolio/clone-template.avif)

##  Finding the Magic Portfolio template

When you select **Clone a template**, you'll see a library of templates. To find the Magic Portfolio template:

1. Use the search bar at the top and type "Magic Portfolio"

![Search templates](/images/integrations/sites-magic-portfolio/search-site.avif)


After selecting the template, you'll need to choose how to deploy it, Clicking the Magic Portfolio template will open a new page where you can configure your portfolio site.



##  Configuring your site

### Setting up site details

Once you have selected the Magic Portfolio template, you will be prompted to enter basic details for your site.

You will need to provide a **Site name** and a **Site ID**. The Site ID becomes part of your site's URL, so it should be lowercase and use hyphens if necessary.


![Configure site details](/images/integrations/sites-magic-portfolio/site-details.avif)
At this stage, you can choose whether to connect your repository now or later.



If you choose **Connect your repository**, you will be able to either create a new repository based on the template or link it to an existing one. If you prefer to skip this step for now, you can choose **Connect later** and connect your version control later using the CLI or through the settings page.

If you opt to connect a repository immediately, you will see the following options:

- Select whether to create a new repository or connect to an existing one
- (Optional) Choose a GitHub organization if you have access to multiple organizations
- Name your repository if you are creating a new one
- Decide whether to keep the repository private by ticking the checkbox

Additionally, you can define the domain for your site, using the Appwrite Sites domain.

After reviewing your configuration, click **Deploy**.


## Monitoring the deployment

Once you initiate the deployment, you will be taken to a progress page where you can monitor the build and deployment in real time.

The logs will show you the different stages of the build process. Depending on the size of your template and the dependencies involved, this process can take anywhere from a few seconds to a few minutes.

![Configure site details](/images/integrations/sites-magic-portfolio/deployment-screen.avif)

## Access your site

After your site has been successfully deployed, Appwrite will show you a **Congratulations** page. 

![Configure site details](/images/integrations/sites-magic-portfolio/success.avif)

## Next step

Appwrite provides a few options to help you continue setting up or expanding your project.

You can **Add domain**, connecting an existing custom domain you own or registering a new one through the console.

You can **Share site**, allowing you to collaborate with your team by sharing access to your project.

You can also **Open on mobile**, previewing your live site directly from a mobile or tablet device to ensure everything looks and functions as expected across different screen sizes.

## Wrapping up
And with that, the Magic Portfolio template is deployed to Appwrite Sites. You can now connect your GitHub repository and customize your portfolio with themes, colors, and content. You can also explore other templates or deploy any other websites you'd like.

## More Resources 

- [Appwrite Sites Docs](/docs/products/sites)
- [Magic Portfolio Website](https://magic-portfolio.com)
- [Appwrite Sites video announcement](https://youtu.be/0cERQxFjTW4)
- [Appwrite Discord server](/discord)`,W=`---
layout: integration
title: Deploy Nxtlnk with Sites
description: Build a custom bio links page with Appwrite Sites
date: 2025-05-19
featured: false
isPartner: true
isNew: true
cover: /images/integrations/sites-nxtlnk/cover.avif
category: sites
product: 
    avatar: '/images/integrations/avatars/nxtlnk.avif'
    vendor: Nxtlnk
    description: 'Custom bio links for creatives who love coding. A template to create your custom bio link and self-host on your own domain.'
platform: 
    - 'Cloud'
    - 'Self-hosted'
images: 
    - /images/integrations/sites-nxtlnk/cover.avif
    - /images/integrations/sites-nxtlnk/homepage.avif
    - /images/integrations/sites-nxtlnk/clone-template.avif
    - /images/integrations/sites-nxtlnk/site-details.avif
    - /images/integrations/sites-nxtlnk/success.avif
---

Nxtlnk is a modern bio links template that makes it easy to create and maintain your personal links page. Made for creatives who love coding, this template lets you create a custom bio link page and self-host it on your own domain.

With Appwrite Sites, you can deploy your bio links page in minutes using our pre-built template, with features like automatic builds, custom domains, and global CDN distribution.

# How does the integration work?

[Appwrite Sites](https://appwrite.io/products/sites) provides a ready-to-use Nxtlnk template that you can deploy instantly. The template comes with a pre-configured setup optimized for bio link sites, making it easy to get started without any complex configuration.


To deploy the Nxtlnk template with Appwrite Sites, follow these steps:

## Create site

After signing into your Appwrite console, look at the sidebar on the left. Under the **Deploy** section, you will find the **Sites** button.

Clicking it opens the Sites page. Here, you will see the **Sites** tab selected by default. Click **Create site** to start the deployment process.

![Create new site](/images/integrations/sites-nxtlnk/create-site.avif)

At this point, Appwrite offers two options: **Clone a template** or **Connect a repository**. For this guide, we will focus on cloning the Nxtlnk template, which lets you quickly set up a bio links site based on a pre-built project.

![Create new site](/images/integrations/sites-nxtlnk/clone-template.avif)

##  Finding the Nxtlnk template

When you select **Clone a template**, you'll see a library of templates. To find the Nxtlnk template:

1. Use the search bar at the top and type "Nxtlnk"

![Search templates](/images/integrations/sites-nxtlnk/search-site.avif)


After selecting the template, you'll need to choose how to deploy it, Clicking the Nxtlnk template will open a new page where you can configure your bio links site.



##  Configuring your site

### Setting up site details

Once you have selected the Nxtlnk template, you will be prompted to enter basic details for your site.

You will need to provide a **Site name** and a **Site ID**. The Site ID becomes part of your site's URL, so it should be lowercase and use hyphens if necessary.


![Configure site details](/images/integrations/sites-nxtlnk/site-details.avif)
At this stage, you can choose whether to connect your repository now or later.



If you choose **Connect your repository**, you will be able to either create a new repository based on the template or link it to an existing one. If you prefer to skip this step for now, you can choose **Connect later** and connect your version control later using the CLI or through the settings page.

If you opt to connect a repository immediately, you will see the following options:

- Select whether to create a new repository or connect to an existing one
- (Optional) Choose a GitHub organization if you have access to multiple organizations
- Name your repository if you are creating a new one
- Decide whether to keep the repository private by ticking the checkbox

Additionally, you can define the domain for your site, using the Appwrite Sites domain.

After reviewing your configuration, click **Deploy**.


## Monitoring the deployment

Once you initiate the deployment, you will be taken to a progress page where you can monitor the build and deployment in real time.

The logs will show you the different stages of the build process. Depending on the size of your template and the dependencies involved, this process can take anywhere from a few seconds to a few minutes.

![Configure site details](/images/integrations/sites-nxtlnk/deployment-screen.avif)

## Access your site

After your site has been successfully deployed, Appwrite will show you a **Congratulations** page. 

![Configure site details](/images/integrations/sites-nxtlnk/success.avif)

## Next step

Appwrite provides a few options to help you continue setting up or expanding your project.

You can **Add domain**, connecting an existing custom domain you own or registering a new one through the console.

You can **Share site**, allowing you to collaborate with your team by sharing access to your project.

You can also **Open on mobile**, previewing your live site directly from a mobile or tablet device to ensure everything looks and functions as expected across different screen sizes.

## Wrapping up
And with that, the Nxtlnk template is deployed to Appwrite Sites. You can now connect your GitHub repository and customize your bio links page with your own content and styling. You can also explore other templates or deploy any other websites you'd like.

## More Resources 

- [Appwrite Sites Docs](/docs/products/sites)
- [Nxtlnk Website](https://nxtlnk.xyz)
- [Appwrite Sites video announcement](https://youtu.be/0cERQxFjTW4)
- [Appwrite Discord server](/discord)`,G=`---
layout: integration
title: Deploy a CRM Dashboard with React Admin on Sites
description: Build and deploy a full-featured CRM dashboard with React Admin on Appwrite Sites
date: 2026-04-03
featured: false
isPartner: true
isNew: true
cover: /images/integrations/sites-react-admin/cover.avif
category: sites
product:
    avatar: '/images/integrations/avatars/react-admin.avif'
    vendor: React Admin
    description: 'React Admin is an open-source framework for building B2B applications and internal tools on top of REST or GraphQL APIs, powered by Material-UI.'
platform:
    - 'Cloud'
    - 'Self-hosted'
images:
    - /images/integrations/sites-react-admin/cover.avif
    - /images/integrations/sites-react-admin/search-site.avif
    - /images/integrations/sites-react-admin/clone-template.avif
    - /images/integrations/sites-react-admin/site-details.avif
    - /images/integrations/sites-react-admin/deployment-screen.avif
    - /images/integrations/sites-react-admin/success.avif
---

React Admin is an open-source framework for building B2B applications and internal tools on top of REST or GraphQL APIs. It provides a rich set of UI components, including data grids, forms, filters, authentication, and more, all powered by Material-UI and following best practices for enterprise-grade admin interfaces.

With Appwrite Sites, you can deploy a fully functional CRM dashboard powered by React Admin in minutes using the pre-built template. The template connects directly to Appwrite's backend services and includes a database seeding script that sets up all the necessary tables and a demo user automatically.

# How does the integration work?

[Appwrite Sites](https://appwrite.io/products/sites) provides a ready-to-use CRM dashboard template built with React Admin that you can deploy instantly. The template comes pre-configured with Appwrite TablesDB as the data layer and includes customers, orders, products, categories, invoices, and reviews management out of the box.

To deploy the React Admin CRM dashboard template with Appwrite Sites, follow these steps:

## Create site

After signing into your Appwrite console, look at the sidebar on the left. Under the **Deploy** section, you will find the **Sites** button.

Clicking it opens the Sites page. Here, you will see the **Sites** tab selected by default. Click **Create site** to start the deployment process.

![Create new site](/images/integrations/sites-react-admin/create-site.avif)

At this point, Appwrite offers two options: **Clone a template** or **Connect a repository**. For this guide, we will focus on cloning the CRM dashboard with React Admin template, which lets you quickly set up a CRM dashboard based on a pre-built project.

![Create new site](/images/integrations/sites-react-admin/clone-template.avif)

## Finding the React Admin template

When you select **Clone a template**, you'll see a library of templates. To find the React Admin template:

1. Filter by **Use case** and select **Dashboard**, or use the search bar at the top and type "React Admin"

![Search templates](/images/integrations/sites-react-admin/search-site.avif)

After selecting the template, click on **CRM dashboard with React Admin** to open a new page where you can configure your site.

## Configuring your site

### Setting up site details

Once you have selected the React Admin template, you will be prompted to enter basic details for your site.

You will need to provide a **Site name** and a **Site ID**. The Site ID becomes part of your site's URL, so it should be lowercase and use hyphens if necessary.

![Configure site details](/images/integrations/sites-react-admin/site-details.avif)

At this stage, you can choose whether to connect your repository now or later.

If you choose **Connect your repository**, you will be able to either create a new repository based on the template or link it to an existing one. If you prefer to skip this step for now, you can choose **Connect later** and connect your version control later using the CLI or through the settings page.

If you opt to connect a repository immediately, you will see the following options:

- Select whether to create a new repository or connect to an existing one
- (Optional) Choose a GitHub organization if you have access to multiple organizations
- Name your repository if you are creating a new one
- Decide whether to keep the repository private by ticking the checkbox

Additionally, you can define the domain for your site, using the Appwrite Sites domain.

### Setting environment variables

The React Admin template requires a few environment variables to connect to your Appwrite project.

| Variable | Description | Required |
|---|---|---|
| \`VITE_APPWRITE_ENDPOINT\` | Your Appwrite API endpoint | Yes |
| \`VITE_APPWRITE_PROJECT_ID\` | Your Appwrite project ID | Yes |
| \`APPWRITE_API_KEY\` | An Appwrite API key (used for seeding data during build) | Yes |
| \`VITE_APPWRITE_DATABASE_ID\` | Database ID (defaults to \`admin\`) | No |
| \`VITE_APPWRITE_TABLE_REVIEWS\` | Table ID for reviews (defaults to \`reviews\`) | No |
| \`VITE_APPWRITE_TABLE_INVOICES\` | Table ID for invoices (defaults to \`invoices\`) | No |
| \`VITE_APPWRITE_TABLE_ORDERS\` | Table ID for orders (defaults to \`orders\`) | No |
| \`VITE_APPWRITE_TABLE_PRODUCTS\` | Table ID for products (defaults to \`products\`) | No |
| \`VITE_APPWRITE_TABLE_CATEGORIES\` | Table ID for categories (defaults to \`categories\`) | No |
| \`VITE_APPWRITE_TABLE_CUSTOMERS\` | Table ID for customers (defaults to \`customers\`) | No |

The \`VITE_APPWRITE_ENDPOINT\` and \`VITE_APPWRITE_PROJECT_ID\` variables will be pre-filled for you. For the \`APPWRITE_API_KEY\`, create an API key in your Appwrite project by navigating to the project overview page > **Integrations** > **API keys** and creating a key with the \`users\` and \`databases\` scopes.

*Note: The API key is used only during the build step to seed the database, tables, and demo user. Since this is a static site built with Vite, the API key is not included in the final deployed assets and is not accessible to end users.*

After reviewing your configuration, click **Deploy**.

## Monitoring the deployment

Once you initiate the deployment, you will be taken to a progress page where you can monitor the build and deployment in real time.

The logs will show you the different stages of the build process, including the database seeding step. Depending on the size of your template and the dependencies involved, this process can take anywhere from a few seconds to a few minutes.

![Deployment screen](/images/integrations/sites-react-admin/deployment-screen.avif)

## Access your site

After your site has been successfully deployed, Appwrite will show you a **Congratulations** page.

![Congratulations](/images/integrations/sites-react-admin/success.avif)

You can log in to the CRM dashboard using the demo credentials created by the seed script:

- **Email**: \`john.doe@marmelab.com\`
- **Password**: \`changeme\`

## Next step

Appwrite provides a few options to help you continue setting up or expanding your project.

You can **Add domain**, connecting an existing custom domain you own or registering a new one through the console.

You can **Share site**, allowing you to collaborate with your team by sharing access to your project.

You can also **Open on mobile**, previewing your live site directly from a mobile or tablet device to ensure everything looks and functions as expected across different screen sizes.

## Wrapping up

And with that, the CRM dashboard with React Admin template is deployed to Appwrite Sites. Since the template creates a GitHub repository with the full source code, every push to your production branch will automatically trigger a rebuild and deployment. You can customize the dashboard by adding new resources, adjusting authentication, or connecting it to your own existing data.

## More Resources

- [Appwrite Sites Docs](/docs/products/sites)
- [React Admin Website](https://marmelab.com/react-admin/)
- [Appwrite Sites video announcement](https://youtu.be/0cERQxFjTW4)
- [Appwrite Discord server](/discord)
`,K=`---
layout: integration
title: Deploy Starlight with Sites
description: Create a Astro-based documentation site with Appwrite Sites
date: 2025-05-19
featured: false
isPartner: true
isNew: true
cover: /images/integrations/sites-starlight/cover.avif
category: sites
product: 
    avatar: '/images/integrations/avatars/starlight.avif'
    vendor: Starlight
    description: 'Starlight is a documentation website framework built with Astro that helps you build beautiful, high-performance documentation sites with minimal setup.'
platform: 
    - 'Cloud'
    - 'Self-hosted'
images: 
    - /images/integrations/sites-starlight/cover.avif
    - /images/integrations/sites-starlight/homepage.avif
    - /images/integrations/sites-starlight/search-site.avif
    - /images/integrations/sites-starlight/clone-template.avif
    - /images/integrations/sites-starlight/site-details.avif
    - /images/integrations/sites-starlight/success.avif
---

Starlight is a modern documentation framework built on top of Astro that makes it easy to create beautiful, high-performance documentation websites. Built with Astro and powered by Markdown, Starlight helps you focus on writing content while taking care of the technical details.

With Appwrite Sites, you can deploy your Starlight documentation in minutes using our pre-built template, with features like automatic builds, custom domains, and global CDN distribution.

# How does the integration work?

[Appwrite Sites](https://appwrite.io/products/sites) provides a ready-to-use Starlight template that you can deploy instantly. The template comes with a pre-configured setup optimized for documentation sites, making it easy to get started without any complex configuration.


To deploy the Starlight template with Appwrite Sites, follow these steps:

## Create site

After signing into your Appwrite console, look at the sidebar on the left. Under the **Deploy** section, you will find the **Sites** button.

Clicking it opens the Sites page. Here, you will see the **Sites** tab selected by default. Click **Create site** to start the deployment process.

![Create new site](/images/integrations/sites-starlight/create-site.avif)

At this point, Appwrite offers two options: **Clone a template** or **Connect a repository**. For this guide, we will focus on cloning the Starlight template, which lets you quickly set up a documentation site based on a pre-built project.

![Create new site](/images/integrations/sites-starlight/clone-template.avif)

##  Finding the Starlight template

When you select **Clone a template**, you'll see a library of templates. To find the Starlight template:

1. Use the search bar at the top and type "Starlight"

![Search templates](/images/integrations/sites-starlight/search-site.avif)


After selecting the template, you'll need to choose how to deploy it, Clicking the Starlight template will open a new page where you can configure your documentation site.



##  Configuring your site

### Setting up site details

Once you have selected the Starlight template, you will be prompted to enter basic details for your site.

You will need to provide a **Site name** and a **Site ID**. The Site ID becomes part of your site's URL, so it should be lowercase and use hyphens if necessary.


![Configure site details](/images/integrations/sites-starlight/site-details.avif)
At this stage, you can choose whether to connect your repository now or later.



If you choose **Connect your repository**, you will be able to either create a new repository based on the template or link it to an existing one. If you prefer to skip this step for now, you can choose **Connect later** and connect your version control later using the CLI or through the settings page.

If you opt to connect a repository immediately, you will see the following options:

- Select whether to create a new repository or connect to an existing one
- (Optional) Choose a GitHub organization if you have access to multiple organizations
- Name your repository if you are creating a new one
- Decide whether to keep the repository private by ticking the checkbox

Additionally, you can define the domain for your site, using the Appwrite Sites domain.

After reviewing your configuration, click **Deploy**.


## Monitoring the deployment

Once you initiate the deployment, you will be taken to a progress page where you can monitor the build and deployment in real time.

The logs will show you the different stages of the build process. Depending on the size of your template and the dependencies involved, this process can take anywhere from a few seconds to a few minutes.

![Configure site details](/images/integrations/sites-starlight/deployment-screen.avif)

## Access your site

After your site has been successfully deployed, Appwrite will show you a **Congratulations** page. 

![Configure site details](/images/integrations/sites-starlight/success.avif)

## Next step

Appwrite provides a few options to help you continue setting up or expanding your project.

You can **Add domain**, connecting an existing custom domain you own or registering a new one through the console.

You can **Share site**, allowing you to collaborate with your team by sharing access to your project.

You can also **Open on mobile**, previewing your live site directly from a mobile or tablet device to ensure everything looks and functions as expected across different screen sizes.

## Wrapping up
And with that, the Starlight template is deployed to Appwrite Sites. You can explore other templates or deploy any other websites you'd like.

## More Resources 

- [Appwrite Sites Docs](/docs/products/sites)
- [Starlight Website](https://starlight.astro.build/)
- [Appwrite Sites video announcement](https://youtu.be/0cERQxFjTW4)
- [Appwrite Discord server](/discord)`,q=`---
layout: integration
title: Deploy VuePress with Sites
description: Create a Vue-based documentation site with Appwrite Sites
date: 2025-05-19
featured: false
isPartner: true
isNew: true
cover: /images/integrations/sites-vuepress/cover.avif
category: sites
product: 
    avatar: '/images/integrations/avatars/vuepress.avif'
    vendor: VuePress
    description: 'VuePress is a Vue-powered static site generator optimized for building fast, SEO-friendly documentation websites with Vue.js.'
platform: 
    - 'Cloud'
    - 'Self-hosted'
images: 
    - /images/integrations/sites-vuepress/cover.avif
    - /images/integrations/sites-vuepress/homepage.avif
    - /images/integrations/sites-vuepress/introduction-page.avif
    - /images/integrations/sites-vuepress/site-details.avif
    - /images/integrations/sites-vuepress/success.avif
---

VuePress is a modern static site generator that makes it easy to create and maintain documentation websites. Built with Vue.js and powered by Markdown, VuePress helps you focus on writing content while taking care of the technical details.

With Appwrite Sites, you can deploy your VuePress documentation in minutes using our pre-built template, with features like automatic builds, custom domains, and global CDN distribution.

# How does the integration work?

[Appwrite Sites](https://appwrite.io/products/sites) provides a ready-to-use VuePress template that you can deploy instantly. The template comes with a pre-configured setup optimized for documentation sites, making it easy to get started without any complex configuration.


To deploy the VuePress template with Appwrite Sites, follow these steps:

## Create site

After signing into your Appwrite console, look at the sidebar on the left. Under the **Deploy** section, you will find the **Sites** button.

Clicking it opens the Sites page. Here, you will see the **Sites** tab selected by default. Click **Create site** to start the deployment process.

![Create new site](/images/integrations/sites-vuepress/create-site.avif)

At this point, Appwrite offers two options: **Clone a template** or **Connect a repository**. For this guide, we will focus on cloning the VuePress template, which lets you quickly set up a documentation site based on a pre-built project.

![Create new site](/images/integrations/sites-vuepress/clone-template.avif)

##  Finding the VuePress template

When you select **Clone a template**, you'll see a library of templates. To find the VuePress template:

1. Use the search bar at the top and type "VuePress"

![Search templates](/images/integrations/sites-vuepress/search-site.avif)


After selecting the template, you'll need to choose how to deploy it, Clicking the VuePress template will open a new page where you can configure your documentation site.



##  Configuring your site

### Setting up site details

Once you have selected the VuePress template, you will be prompted to enter basic details for your site.

You will need to provide a **Site name** and a **Site ID**. The Site ID becomes part of your site's URL, so it should be lowercase and use hyphens if necessary.


![Configure site details](/images/integrations/sites-vuepress/site-details.avif)
At this stage, you can choose whether to connect your repository now or later.



If you choose **Connect your repository**, you will be able to either create a new repository based on the template or link it to an existing one. If you prefer to skip this step for now, you can choose **Connect later** and connect your version control later using the CLI or through the settings page.

If you opt to connect a repository immediately, you will see the following options:

- Select whether to create a new repository or connect to an existing one
- (Optional) Choose a GitHub organization if you have access to multiple organizations
- Name your repository if you are creating a new one
- Decide whether to keep the repository private by ticking the checkbox

Additionally, you can define the domain for your site, using the Appwrite Sites domain.

After reviewing your configuration, click **Deploy**.


## Monitoring the deployment

Once you initiate the deployment, you will be taken to a progress page where you can monitor the build and deployment in real time.

The logs will show you the different stages of the build process. Depending on the size of your template and the dependencies involved, this process can take anywhere from a few seconds to a few minutes.

![Configure site details](/images/integrations/sites-vuepress/deployment-screen.avif)

## Access your site

After your site has been successfully deployed, Appwrite will show you a **Congratulations** page. 

![Configure site details](/images/integrations/sites-vuepress/success.avif)

## Next step

Appwrite provides a few options to help you continue setting up or expanding your project.

You can **Add domain**, connecting an existing custom domain you own or registering a new one through the console.

You can **Share site**, allowing you to collaborate with your team by sharing access to your project.

You can also **Open on mobile**, previewing your live site directly from a mobile or tablet device to ensure everything looks and functions as expected across different screen sizes.

## Wrapping up
And with that, the VuePress template is deployed to Appwrite Sites. You can explore other templates or deploy any other websites you'd like.

## More Resources 

- [Appwrite Sites Docs](/docs/products/sites)
- [VuePress Website](https://vuepress.vuejs.org/)
- [Appwrite Sites video announcement](https://youtu.be/0cERQxFjTW4)
- [Appwrite Discord server](/discord)`,se=`---
layout: integration
title: SMS with Twilio
description: Send customized SMS messages to your users
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/sms-twilio/cover.avif
category: messaging
product: 
    avatar: '/images/integrations/avatars/twilio.avif'
    vendor: Twilio
    description: 'Twilio is a cloud communications platform that provides programmable communication tools using web APIs and SDKs.'
platform: 
    - 'Self-hosted'
images: 
    - /images/integrations/sms-twilio/cover.avif
    - /images/integrations/sms-twilio/twilio-console.avif
    - /images/integrations/sms-twilio/config.avif
    - /images/integrations/sms-twilio/sms.avif
---

Twilio is a cloud communications platform that provides programmable communication tools for making and receiving phone calls, sending and receiving text messages, and performing other communication functions using web APIs and SDKs.

# How does the integration work?

You can use the Twilio provider in Appwrite Messaging to send customized SMS messages to your users. These SMS messages can be sent immediately or scheduled. You can send SMS messages for purposes like reminders, promotions, announcements, and even custom authentication flows.

# How to implement

To implement the Twilio provider in Appwrite Messaging, there are several steps you must complete:

## Step 1: Sign up on Twilio

First, you must [sign up for a Twilio account](https://www.twilio.com/try-twilio), upgrade your account (in case you want to message numbers other than your own), and purchase a phone number with the SMS capability.

![Twilio console](/images/integrations/sms-twilio/twilio-console.avif)

Ensure you save the following information for later use:

| Field name |  |
| --- | --- |
| Account SID | Head to **Twilio console** > **Account info** > **Account SID**. |
| Auth token | Head to **Twilio console** > **Account info** > **Auth Token**. |
| Phone number | You can access numbers by navigating to your **Twilio console** > **Develop** > **Phone Numbers** > **Manage** > **Active Numbers**. |

## Step 2: Add Twilio provider to your Appwrite project

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. In your Appwrite project, head over to the **Messaging** page, click on the **Providers** tab, and **create a new SMS provider**. 

Select **Twilio** and add the **account SID**, **auth token**, and **phone number** that you saved from the Twilio console.

![Twilio provider config](/images/integrations/sms-twilio/config.avif)

## Step 3: Test the Twilio provider

Before you proceed, you must already have at least one [topic](https://appwrite.io/docs/products/messaging/topics) or [target](https://appwrite.io/docs/products/messaging/targets) set up. 

Once the provider is set up, you can go to the **Messages** tab on the **Messaging** page and **create an SMS message**. You can add the test message, configure the users to send the message to, and pick when the message should be sent out. 

![SMS message console](/images/integrations/sms-twilio/sms.avif)

# Read more about Twilio and Appwrite Messaging

If you would like to learn more about Twilio and Appwrite Messaging, we have some resources that you should visit:

- [Sign up for Twilio](https://www.twilio.com/try-twilio)
- [Set up the Twilio provider in Appwrite Messaging](https://appwrite.io/docs/products/messaging/twilio)
- [Send SMS messages through Appwrite Messaging](https://appwrite.io/docs/products/messaging/send-sms-messages)
- [Appwrite Messaging API reference](https://appwrite.io/docs/references/cloud/server-nodejs/messaging)`,ce=`---
layout: integration
title: Storage with Amazon S3
description: Store files in Amazon S3 instead of your local storage device
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/storage-s3/cover.avif
category: storage
product:
    avatar: '/images/integrations/avatars/aws.avif'
    vendor: AWS
    description: 'Amazon S3 is an object storage service that offers industry-leading scalability, data availability, security, and performance.'
platform:
    - 'Self-hosted'
images:
    - /images/integrations/storage-s3/cover.avif
    - /images/integrations/storage-s3/bucket.avif
    - /images/integrations/storage-s3/access-key.avif
    - /images/integrations/storage-s3/appwrite-file.avif
    - /images/integrations/storage-s3/s3-file.avif
---

Amazon S3 (Simple Storage Service) is an object storage service that offers industry-leading scalability, data availability, security, and performance. You can use Amazon S3 to store and protect any amount of data for a range of use cases, such as data lakes, websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics.

# How does the integration work?

If you are using self-hosting Appwrite, you can use the Amazon S3 integration for Appwrite Storage to store your files in an S3 bucket instead of on your local hard drive. This is beneficial if you expect large volumes of data or the need to have scalable data storage for your self-hosted Appwrite instance.

# How to implement

To implement the Amazon S3 provider for Appwrite Storage, there are several steps you must complete:

## Step 1: Sign up on AWS

First, you must [sign up for an AWS account](https://signin.aws.amazon.com/signup?request_type=register) and create an S3 bucket. Save the **Bucket name** and **AWS Region** mentioned here for later use.

![Create S3 bucket](/images/integrations/storage-s3/bucket.avif)

To access this bucket from Appwrite Storage, we also need to generate an access key within our AWS account. To do so, click on your username in the top-right corner, click on **Security credentials**, and scroll below to create an access key. Save your **Access key ID** and **Secret access key** for later usage.

![Create AWS access key](/images/integrations/storage-s3/access-key.avif)

## Step 2: Add S3 provider to your Appwrite instance

For this step, you must [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already.

Visit the \`.env\` file created for your Appwrite instance and update the following environment variables:

\`\`\`bash
_APP_STORAGE_DEVICE=s3
_APP_STORAGE_S3_BUCKET=<BUCKET_NAME>
_APP_STORAGE_S3_REGION=<AWS_REGION>
_APP_STORAGE_S3_ACCESS_KEY=<ACCESS_KEY_ID>
_APP_STORAGE_S3_SECRET=<SECRET_ACCESS_KEY>
\`\`\`

Starting from version 1.7.0, you can also use S3-compatible providers by configuring the endpoint:

\`\`\`bash
# For path-style requests (bucket in the path)
_APP_STORAGE_S3_ENDPOINT=<PROVIDER_ENDPOINT> # e.g., s3.amazonaws.com (without https://)
_APP_STORAGE_S3_BUCKET=<BUCKET_NAME> # bucket name required here

# OR for virtual-hosted-style paths (bucket in the endpoint)
_APP_STORAGE_S3_ENDPOINT=<BUCKET_NAME>.<PROVIDER_ENDPOINT> # e.g., bucket-name.s3.amazonaws.com
_APP_STORAGE_S3_BUCKET= # leave this empty when bucket is in the endpoint
\`\`\`

After that, run the following Docker Compose commands in your terminal to restart your Appwrite containers and verify if the changes have been successfully applied:

\`\`\`bash
docker compose up -d --force-recreate
docker compose exec appwrite vars
\`\`\`

## Step 3: Test the provider

To test your S3, open your Appwrite project, go to the Storage page, create a new bucket, and upload a file.

![File on Appwrite Storage](/images/integrations/storage-s3/appwrite-file.avif)

When you visit your S3 bucket via the AWS Management Console, you should see the same file uploaded there.

![File on Amazon S3](/images/integrations/storage-s3/s3-file.avif)

# Read more about S3 and Appwrite Storage

If you would like to learn more about Amazon S3 and Appwrite Auth, we have some resources that you should visit:

- [What is Amazon S3?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)
- [How to create an Amazon S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html)
- [Appwrite self-hosting docs](https://appwrite.io/docs/advanced/self-hosting)
- [Storage environment variables for Appwrite (self-hosted)](https://appwrite.io/docs/advanced/self-hosting/environment-variables#storage)
- [Appwrite Storage API reference](https://appwrite.io/docs/references/cloud/client-web/storage)`,le=`---
layout: integration
title: Payments with Stripe
description: Integrate Stripe with Appwrite to accept payments, store orders, manage invoices, and streamline your business operations.
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/stripe-payments/cover.avif
category: payments
product: 
    avatar: '/images/integrations/avatars/stripe.avif'
    vendor: Stripe
    description: 'Stripe is an online payment processing platform that allows businesses to accept online payments securely and efficiently.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/stripe-payments/cover.avif
    - /images/integrations/stripe-payments/dashboard.avif
    - /images/integrations/stripe-payments/api-keys.avif
    - /images/integrations/stripe-payments/webhooks.avif
    - /images/integrations/stripe-payments/template.avif
    - /images/integrations/stripe-payments/variables.avif
    - /images/integrations/stripe-payments/web-platform.avif
    - /images/integrations/stripe-payments/demo.avif
    - /images/integrations/stripe-payments/database.avif
---

Stripe is an online payment processing platform that allows businesses to accept online payments securely and efficiently. Stripe supports a variety of payment methods, including credit cards, debit cards, and digital wallets, and offers additional services such as billing, invoicing, and fraud prevention.

 With robust APIs and extensive documentation, Stripe enables developers to integrate its payment solutions into websites and mobile applications seamlessly, making it a popular choice for businesses of all sizes.

# How does the integration work?

You can utilize a pre-built Appwrite function template to enable payments via Stripe in your app. You can then use this to ship packages, send PDF books, give access to video courses, or anything else your business needs.

# How to implement

To implement the Stripe payments integration, there are several steps you must complete:

## Step 1: Set up Stripe

First, [sign up for Stripe](https://stripe.com/) and open the dashboard in test mode.

![Stripe dashboard](/images/integrations/stripe-payments/dashboard.avif)

Head to the **Developers** page from the navbar and click on the **API keys** tab. Save the **Secret key** for further usage.

![Stripe API keys](/images/integrations/stripe-payments/api-keys.avif)

Then, go to the **Webhooks** tab, select the event \`checkout.session.completed\`, and add a temporary endpoint \`https://temporary-endpoint\` (we will replace this with our final endpoint later). Save the **webhook signing secret** for later usage.

![Stripe webhooks](/images/integrations/stripe-payments/webhooks.avif)

## Step 2: Create the Appwrite Function

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. If you decide to self-host Appwrite, there are [additional setup steps](https://appwrite.io/docs/advanced/self-hosting/functions) to use Appwrite Function templates.

Head over to the Appwrite console, navigate to the **Functions** page, click the **Templates** tab, and search for the **Payments with Stripe** function template.

![Function template](/images/integrations/stripe-payments/template.avif)

During the setup process, click the checkbox to generate an Appwrite API key on completion and add the **Stripe secret key** and **webhook secret** in the **Variables** step. If you are self-hosting Appwrite, click on the **optional variables** dropdown and update the Appwrite endpoint to your instance’s publicly accessible endpoint. 

![Env variables](/images/integrations/stripe-payments/variables.avif)

Then, create a new repository with the default branch and root directory settings. You can edit this repository later to update the function logic. Once the function is deployed, go to the **Settings** tab on the **Function** page, scroll down to your **Build settings**, and update the commands to the following (and then redeploy the function):

\`\`\`bash
npm install
npm run setup
\`\`\`

Then, go to the **Domains** tab, copy the domain, and update it in your **Stripe webhook details** in the following format:

\`\`\`bash
https://DEPLOYED_FUNCTION_DOMAIN/webhook
\`\`\`

## Step 3: Test the function

Once all the steps are complete, it is time to test the function! First, copy the function URL, go to the **Appwrite project dashboard**, and add it to the **Platforms** section as a web app. This will register your function URL as an authorized hostname to interact with Appwrite (to prevent CORS).

![Add web platform](/images/integrations/stripe-payments/web-platform.avif)

Then, open it in your browser to test the function and access the pre-built interactive UI. You can anonymously log in through this UI and create a payment order using [Stripe’s test card number](https://docs.stripe.com/testing#cards). As soon as this process is completed, the function UI will show you the completed order. 

![Demo](/images/integrations/stripe-payments/demo.avif)

You can visit the **Databases** page in your Appwrite project, enter the \`orders\` database and the \`orders\` collection within that, and find your orders.

![Appwrite database](/images/integrations/stripe-payments/database.avif)

# Read more about Stripe Payments and Appwrite Functions

If you would like to learn more about Stripe Payments and Appwrite Functions, we have some resources that you should visit:

- [Sign up on Stripe](https://stripe.com)
- [Learn more about Functions templates in Appwrite docs](https://appwrite.io/docs/products/functions/templates)`,ue=`---
layout: integration
title: Subscriptions with Stripe
description: Integrate Stripe subscriptions with Appwrite to accept and manage recurring payments from your customers.
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/stripe-subscriptions/cover.avif
category: payments
product: 
    avatar: '/images/integrations/avatars/stripe.avif'
    vendor: Stripe
    description: 'Stripe is an online payment processing platform that allows businesses to accept online payments securely and efficiently.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/stripe-subscriptions/cover.avif
    - /images/integrations/stripe-subscriptions/dashboard.avif
    - /images/integrations/stripe-subscriptions/api-keys.avif
    - /images/integrations/stripe-subscriptions/webhooks.avif
    - /images/integrations/stripe-subscriptions/template.avif
    - /images/integrations/stripe-subscriptions/variables.avif
    - /images/integrations/stripe-subscriptions/web-platform.avif
    - /images/integrations/stripe-subscriptions/demo.avif
    - /images/integrations/stripe-subscriptions/user.avif
---

Stripe is an online payment processing platform that allows businesses to accept online payments securely and efficiently. Stripe supports a variety of payment methods, including credit cards, debit cards, and digital wallets, and offers additional services such as billing, invoicing, and fraud prevention.

With robust APIs and extensive documentation, Stripe enables developers to integrate its payment solutions into websites and mobile applications with ease, making it a popular choice for businesses of all sizes.

# How does the integration work?

You can utilize a pre-built Appwrite function template to enable paid subscriptions via Stripe in your app. This will allow you to accept recurring payments from your customers and grant them extra permissions.

# How to implement

To implement the Stripe subscriptions integration, there are several steps you must complete:

## Step 1: Setup Stripe

First, [sign up for Stripe](https://stripe.com/) and open the dashboard in test mode.

![Stripe dashboard](/images/integrations/stripe-subscriptions/dashboard.avif)

Head to the **Developers** page from the navbar and click on the **API keys** tab. Save the **Secret key** for further usage.

![Stripe API keys](/images/integrations/stripe-subscriptions/api-keys.avif)

Then, go to the **Webhooks** tab, select the events \`customer.subscription.created\` and \`customer.subscription.deleted\`, and add a temporary endpoint \`https://temporary-endpoint\` (we will replace this with our final endpoint later). Save the **webhook signing secret** for later usage.

![Stripe webhooks](/images/integrations/stripe-subscriptions/webhooks.avif)

## Step 2: Create the Appwrite Function

For this step, you must [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. If you decide to self-host Appwrite, there are [additional setup steps](https://appwrite.io/docs/advanced/self-hosting/functions) to use Appwrite Function templates.

Head over to the Appwrite console, navigate to the **Functions** page, click the **Templates** tab, and search for the **Subscriptions with Stripe** function template.

![Function template](/images/integrations/stripe-subscriptions/template.avif)

During the setup process, click the checkbox to generate an Appwrite API key on completion and add the **Stripe secret key** and **Webhook secret** in the **Variables** step. If you are self-hosting Appwrite, click the **optional variables** dropdown and update the Appwrite endpoint to your instance’s publicly accessible endpoint. 

![Env variables](/images/integrations/stripe-subscriptions/variables.avif)

Then, create a new repository with the default branch and root directory settings. You can edit this repository later to update the function logic. Once the function is deployed, go to the **Domains** tab on the **Function** page, copy the domain, and update it in your **Stripe webhook details** in the following format:

\`\`\`bash
https://DEPLOYED_FUNCTION_DOMAIN/webhook
\`\`\`

## Step 3: Test the function

Once all the steps are complete, it is time to test the function! First, copy the function URL, go to the **Appwrite project dashboard**, and add it to the **Platforms** section as a web app. This will register your function URL as an authorized hostname to interact with Appwrite (to prevent CORS).

![Add web platform](/images/integrations/stripe-subscriptions/web-platform.avif)

Then, open it in your browser to test the function and access the pre-built interactive UI. You can anonymously log in through this UI and create a subscription using [Stripe’s test card number](https://docs.stripe.com/testing#cards). As soon as this process is complete, the function UI will show that you are subscribed. 

![Demo](/images/integrations/stripe-subscriptions/demo.avif)

Additionally, your user on Appwrite will feature the \`subscriber\` label, which you can verify by visiting the **Auth** page in your Appwrite project and clicking on the user.

![Appwrite user](/images/integrations/stripe-subscriptions/user.avif)

# Read more about Stripe Subscriptions and Appwrite Functions

If you would like to learn more about Stripe Subscriptions and Appwrite Functions, we have some resources that you should visit:

- [Sign up on Stripe](https://stripe.com)
- [Add app subscriptions with Stripe on Appwrite](https://appwrite.io/docs/tutorials/subscriptions-with-stripe/step-1)
- [Learn more about Functions templates in Appwrite docs](https://appwrite.io/docs/products/functions/templates)`,de=`---
layout: integration
title: Terraform provider for Appwrite
description: Manage Appwrite TablesDB, Storage, Auth, Functions, Sites, Messaging, webhooks, backups, and more with HashiCorp Terraform and the official appwrite/appwrite provider.
date: 2026-04-24
featured: false
isPartner: false
isNew: true
cover: /images/integrations/terraform/cover.avif
category: deployments
product:
    avatar: '/images/integrations/avatars/terraform.svg'
    vendor: Terraform
    description: 'Terraform is an infrastructure-as-code tool for building, changing, and versioning infrastructure safely and efficiently.'
platform:
    - 'Cloud'
    - 'Self-hosted'
images:
    - /images/integrations/terraform/cover.avif
---

[HashiCorp Terraform](https://www.terraform.io/) lets you describe infrastructure and cloud configuration in declarative files, then apply changes in a repeatable way. The official [**appwrite/appwrite**](https://registry.terraform.io/providers/appwrite/appwrite/latest) provider connects Terraform to your Appwrite project so you can manage resources through the same workflows you use for the rest of your stack.

# How does the integration work?

The provider talks to the Appwrite API using your endpoint and API key. You declare **resources** (for example TablesDB databases through rows, storage buckets and files, users and teams, functions and sites, messaging providers, topics, subscribers, webhooks, and backup policies) in HCL; Terraform plans and applies changes against Appwrite Cloud or a **Community Edition** instance.

That gives you **reviewable, versioned configuration**: you can codify how a project is structured, share it with your team, and align environments without re-clicking through the Console for every change.

# How to implement

1. Install Terraform on your machine ([install guide](https://developer.hashicorp.com/terraform/install)).
2. Add the provider to your Terraform configuration. See the [**Configuration**](/docs/tooling/terraform/provider) page for \`required_providers\`, endpoints, and environment variables.
3. Follow the [**Terraform provider**](/docs/tooling/terraform) docs for resource areas you need (for example [**Databases**](/docs/tooling/terraform/resources/databases), [**Storage**](/docs/tooling/terraform/resources/storage), [**Messaging**](/docs/tooling/terraform/resources/messaging), [**Auth**](/docs/tooling/terraform/resources/auth), [**Functions**](/docs/tooling/terraform/resources/functions), [**Sites**](/docs/tooling/terraform/resources/sites), [**Webhooks**](/docs/tooling/terraform/resources/webhooks), and [**Backups**](/docs/tooling/terraform/resources/backups)).
4. Use the [**Terraform Registry**](https://registry.terraform.io/providers/appwrite/appwrite/latest/docs) for generated schemas, arguments, and import syntax for each resource.

# Read more

- [Terraform provider documentation](/docs/tooling/terraform) on Appwrite
- [Provider on the Terraform Registry](https://registry.terraform.io/providers/appwrite/appwrite/latest)
- [Source repository](https://github.com/appwrite/terraform-provider-appwrite) on GitHub
`,fe=`---
layout: integration
title: WhatsApp with Vonage
description: Send automated replies to messages on WhatsApp
date: 2024-07-30
featured: false
isPartner: true
isNew: false
cover: /images/integrations/whatsapp-vonage/cover.avif
category: messaging
product: 
    avatar: '/images/integrations/avatars/vonage.avif'
    vendor: Vonage
    description: 'Vonage is a cloud communications provider that offers residential telecommunications services based on voice over Internet Protocol as well as programmable communications tools via web APIs.'
platform: 
    - 'Self-hosted'
    - 'Cloud'
images: 
    - /images/integrations/whatsapp-vonage/cover.avif
    - /images/integrations/whatsapp-vonage/settings.avif
    - /images/integrations/whatsapp-vonage/template.avif
    - /images/integrations/whatsapp-vonage/variables.avif
    - /images/integrations/whatsapp-vonage/demo.avif
---

Vonage is a cloud communications provider that offers residential telecommunications services based on voice over Internet Protocol as well as programmable communications tools such as phone calls, SMSes, WhatsApp messages, etc. via web APIs.

# How does the integration work?

You can use a pre-built Appwrite Function template that is integrated with Vonage to build a WhatsApp-based chatbot that can accept your messages and respond based on pre-defined logic.

# How to implement

To implement the **WhatsApp with Vonage** Appwrite Function template, there are several steps you must complete:

## Step 1: Sign up on Vonage

First, [sign up for a Vonage account](https://ui.idp.vonage.com/ui/auth/registration) to use the Vonage Communications APIs. This will create a trial account and give you access to the Vonage API dashboard.

![Vonage API settings](/images/integrations/whatsapp-vonage/settings.avif)

Ensure you save the following information for later use:

| Field name |  |
| --- | --- |
| API key | Head to the **Vonage API dashboard** > **API Settings** > **API key** |
| API secret | Head to the **Vonage API dashboard** > **API Settings** > **API secret** |
| Signature secret | Head to the **Vonage API dashboard** > **API Settings** > **Signature secret** |
| WhatsApp phone number | Head to the **Vonage API dashboard** > **Developer Tools** > **Messages API Sandbox** > enable **WhatsApp** and copy phone number |

Once the Appwrite Function is deployed, we will return here to add the Function URL as the **Inbound Webhook** link.

## Step 2: Create the Appwrite Function

For this step, [create an account on Appwrite Cloud](https://cloud.appwrite.io/register) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting) if you haven’t already. In case you decide to self-host Appwrite, there are [additional setup steps](https://appwrite.io/docs/advanced/self-hosting/functions) to use Appwrite Function templates.

In your Appwrite project, go to the **Functions** page, click on the **Templates** tab, search for ‘Vonage’, and select the **WhatsApp with Vonage** function template. 

![Function template](/images/integrations/whatsapp-vonage/template.avif)

During the setup process, add the Vonage **API key**, **API secret, signature secret**, and **WhatsApp phone number** in the **Variables** step**.** 

![Env variables](/images/integrations/whatsapp-vonage/variables.avif)

Then, create a new repository with the default branch and root directory settings. You can edit this repository later to update the function logic. Once the function is ready, visit the **Domains** tab on the function page and copy the domain to add to the **Inbound Webhook** link on the **Messages API Sandbox** page on your Vonage account.

## Step 3: Test the integration

Open **WhatsApp** on your phone, join the Vonage WhatsApp Channel (via the steps mentioned on the *Messaging API Sandbox* on *Vonage*), and send any message to the WhatsApp number. You shall receive a message in the format: \`Hi there! You sent me: <SENT MESSAGE>\`

![demo](/images/integrations/whatsapp-vonage/demo.avif)

# Read more about Vonage and Appwrite

If you would like to learn more about Vonage, we have some resources that you should visit:

- [Sign up for Vonage](https://ui.idp.vonage.com/ui/auth/registration)
- [Appwrite Functions products docs](https://appwrite.io/docs/products/functions)`,pe={"/src/content/integrations/ai-elevenlabs-text-to-speech.markdoc":re,"/src/content/integrations/ai-hugging-face-image-classification.markdoc":ie,"/src/content/integrations/ai-hugging-face-language-translation.markdoc":ae,"/src/content/integrations/ai-hugging-face-speech-recognition.markdoc":oe,"/src/content/integrations/ai-openai.markdoc":p,"/src/content/integrations/ai-perplexity.markdoc":m,"/src/content/integrations/deployments-entire.markdoc":h,"/src/content/integrations/deployments-github.markdoc":g,"/src/content/integrations/email-sendgrid.markdoc":_,"/src/content/integrations/flutterflow-auth-kit.markdoc":v,"/src/content/integrations/lemon-squeezy-payments.markdoc":y,"/src/content/integrations/lemon-squeezy-subscriptions.markdoc":b,"/src/content/integrations/logging-appsignal.markdoc":x,"/src/content/integrations/logging-raygun.markdoc":S,"/src/content/integrations/logging-sentry.markdoc":C,"/src/content/integrations/mcp-claude.markdoc":w,"/src/content/integrations/mcp-cursor.markdoc":T,"/src/content/integrations/mcp-windsurf.markdoc":E,"/src/content/integrations/native-auth-apple.markdoc":D,"/src/content/integrations/oauth-amazon.markdoc":O,"/src/content/integrations/oauth-apple.markdoc":k,"/src/content/integrations/oauth-discord.markdoc":A,"/src/content/integrations/oauth-google.markdoc":j,"/src/content/integrations/oauth-notion.markdoc":M,"/src/content/integrations/oauth-x.markdoc":N,"/src/content/integrations/phone-auth-twilio.markdoc":P,"/src/content/integrations/push-apns.markdoc":F,"/src/content/integrations/push-fcm.markdoc":I,"/src/content/integrations/query-mongodb.markdoc":L,"/src/content/integrations/query-upstash.markdoc":R,"/src/content/integrations/replication-rxdb.markdoc":z,"/src/content/integrations/search-algolia.markdoc":B,"/src/content/integrations/self-hosted-mongodb.markdoc":V,"/src/content/integrations/sites-docusaurus.markdoc":H,"/src/content/integrations/sites-magic-portfolio.markdoc":U,"/src/content/integrations/sites-nxtlnk.markdoc":W,"/src/content/integrations/sites-react-admin.markdoc":G,"/src/content/integrations/sites-starlight.markdoc":K,"/src/content/integrations/sites-vuepress.markdoc":q,"/src/content/integrations/sms-twilio.markdoc":se,"/src/content/integrations/storage-s3.markdoc":ce,"/src/content/integrations/stripe-payments.markdoc":le,"/src/content/integrations/stripe-subscriptions.markdoc":ue,"/src/content/integrations/terraform-provider.markdoc":de,"/src/content/integrations/whatsapp-vonage.markdoc":fe};function me(e){return e.match(/\/src\/content\/integrations\/(.+)\.markdoc$/)?.[1]??``}function J(e){if(typeof e==`boolean`)return e;if(e===`true`)return!0;if(e===`false`)return!1}function he(e){let t=e.product;if(!t||typeof t!=`object`||Array.isArray(t))return{avatar:``,vendor:``,description:``};let n=t;return{avatar:r(n,`avatar`)??``,vendor:r(n,`vendor`)??``,description:r(n,`description`)??``}}function ge(e){return(n({platform:e},`platform`)??[]).filter(e=>e===`Cloud`||e===`Self-hosted`)}function _e(e){return e&&ne(e)?e:`auth`}function ve(e,t){let o=me(e),{frontmatter:s,body:ee}=a(t),c=_e(r(s,`category`));return{slug:o,href:`/integrations/${o}`,title:r(s,`title`)??o,description:r(s,`description`)??``,date:i(s,`date`),category:c,cover:r(s,`cover`)??``,featured:J(s.featured),isPartner:J(s.isPartner),isNew:J(s.isNew),platform:ge(s.platform),product:he(s),images:n(s,`images`)??(r(s,`cover`)?[r(s,`cover`)]:[])}}function ye(e,n){let r=ve(e,n),{body:i}=a(n),s=o(i.trim());return{...r,content:s,toc:t(s)}}var Y=Object.entries(pe).map(([e,t])=>ye(e,t)).sort((e,t)=>e.title.localeCompare(t.title)),X=Y.map(({content:e,toc:t,...n})=>n);function Z(e){return Y.find(t=>t.slug===e)}function be(){let e=[...new Set(X.flatMap(e=>e.platform))].sort(),t=d.map(e=>{let t=f(e),n=X.filter(t=>t.category===e);return{category:e,heading:t?.heading??e,description:t?.description??``,integrations:n}}).filter(e=>e.integrations.length>0);return{list:X,featured:X.filter(e=>e.featured),categories:u.filter(e=>X.some(t=>t.category===e.slug)),platforms:e,grouped:t}}function xe(e,t){let n=t.trim().toLowerCase();return n?e.title.toLowerCase().includes(n)||e.description.toLowerCase().includes(n)||e.product.vendor.toLowerCase().includes(n)||(f(e.category)?.heading.toLowerCase().includes(n)??!1):!0}function Q(e,t){let n=t.category?.trim(),r=t.platform?.trim();return e.filter(e=>n&&n!==`all`&&e.category!==n||r&&r!==`all`&&!e.platform.includes(r)?!1:xe(e,t.search??``))}function Se(e){let t=be(),n=Q(t.list,e);return{...t,featured:Q(t.featured,e),grouped:t.grouped.map(t=>({...t,integrations:Q(t.integrations,e)})).filter(e=>e.integrations.length>0),filtered:n}}function Ce(e,t=3){let n=Z(e);return n?X.filter(t=>t.slug!==e&&t.category===n.category).slice(0,t):[]}function $(e){return[...e]}function we(t){let n=e(`Integrations`),r=s(t);return $(l({title:n,description:`Connect your favorite apps to Appwrite for a unified tech stack. Explore the Appwrite catalog: a marketplace to find integrations for your projects.`,canonical:`${r}/integrations`,ogImageParams:{title:`Connect your favorite apps`,eyebrow:`Integrations`,subtitle:`Explore the Appwrite catalog: a marketplace to find integrations for your projects.`},siteOrigin:r}))}function Te(t,n){let r=e(t.title),i=s(n),a=t.cover?t.cover.startsWith(`/`)?ee(t.cover,i):t.cover:void 0,o=t.description.trim(),c=t.title.trim(),u=t.href.startsWith(`http`)?t.href:`${i}${t.href}`;return $(l({title:r,description:t.description,canonical:u,ogImage:a,ogImageParams:a?void 0:{title:c,eyebrow:`Integrations`,subtitle:o&&o!==c?o:`Connect this integration to your Appwrite project.`},ogType:`article`,siteOrigin:i}))}function Ee(e){let t=s(e);return c(we(e),{canonicalHref:`${t}/integrations`})}function De(e,t){let n=s(t),r=e.href.startsWith(`http`)?e.href:`${n}${e.href}`;return c(Te(e,t),{canonicalHref:r})}export{Ce as a,Z as i,Ee as n,te as o,Se as r,De as t};
//# sourceMappingURL=route-meta-y1v95ubu.js.map