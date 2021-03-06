# Personal Website Template

This repo serves as a template to help you get started making a personal/resume webstie. The template uses React/Next.js which is a static site generator to create a static website meant to be hosted in a cloud provider such as [AWS](https://aws.amazon.com/).

<br/>


# Table of Contents
1. [What is React](#what-is-react)
2. [What is Next.js](#what-is-nextjs)
3. [Getting Started](#getting-started)
    * [Node](#node)
    * [Terraform](#terraform)
4. [Adding Secrets](#adding-secrets)
5. [Understanding the File Structure](#understanding-the-file-structure)


<br/>
<hr/>

## What is React
[React](https://reactjs.org/) is a Javascript/Typescript web development framework developed by Facebook that makes development of interactive and stateful components simple. It is a component driven framework that focuses on encapsulating state at the component level and stitching them together to create complex UIs.

<br/>

## What is Next.js
[Next.js](https://nextjs.org/) is a static site generator built using [React](https://reactjs.org/). While it has the base functionality and features of React, Next.js provides additional features such as static, server, or hybrid (static & server) rendering to fit whatever your needs are.

<br/>

## Getting Started
### Node
1. Install Node -> [14.17.0](https://nodejs.org/download/release/v14.17.0/)

2. Create a new repository using this template

3. Clone your newly created repo
    ```bash
    # Replace <personal-access-token> with your GitHub personal access token
    git clone https://<personal-access-token>@github.com/<owner-name>/<repo-name>.git
    ```

4. Run the website locally
    
    I.Install Dependencies
    ```bash
    yarn
    ```

    II. Run the website locally
    ```bash
    yarn dev
    ```

    III. Build & Serve (Builds site statically and serves it locally)
    ```bash
    yarn start
    ```

    IV: Run Linter
    ```bash
    yarn lint
    ```

    V: For additional `yarn` scripts, checkout `package.json`

5. Create a new branch off of `main` intended to be the `dev` branch
    
    I. Can be done via github.com or cli
    ```bash
    # Git CLI
    # Create new branch, replace <branch-name> with the name of the branch
    git checkout -b <branch-name>
    ```
6. Update the `siteUrl` in `sitemap.config.js` to your website's url

### Terraform
Basic usage of terraform
1. Initialize the Terraform
    ```bash
    terraform init
    ```

2. Validate
    ```bash
    terraform validate
    ```

3. Plan
    ```bash
    terraform plan -out=plan.tfplan
    ```

4. Apply
    ```bash
    terraform apply plan.tfplan
    ```

Other useful commands when using Terraform

Format

```bash
terraform fmt -recursive
```

<br/>


## Adding Secrets
This template requires the addition of three secrets within GitHub in order to auto deploy
the site to S3 and Cloudfront.
1. `AWS_ACCESS_KEY_ID` -> Value of your AWS access key id
2. `AWS_SECRET_ACCESS_KEY` -> Value of your AWS secret access key
3. `CLOUDFRONT_DISTRIBUTION_ID` -> Value of the Cloudfront distribution you are deploying to

<br/>

## Understanding the File Structure
- `.github/workflows` - contains GitHub Action workflows
- `ci` - files to be moved to `.github/workflows` then to be removed
- `public` - public files of your website
    - `images` - contains static images of the site
    - `favicon.ico` - favicon of the site
- `src` - source code for the site
    - `components` - general components
    - `layouts` - general page layouts
    - `lib` - contains types and generic/shared code
    - `pages` - pages of the site
    - `styles` - contains `.scss` files and fonts
- `.eslintignore` - specifies files or folders for eslint to ignore
- `.eslintrc.yml` - eslint config
- `next.config.js` - next.js config
- `sitemap.config.js` - config for generating a sitemap - [reference](https://www.npmjs.com/package/next-sitemap)
