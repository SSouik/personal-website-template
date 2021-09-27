# Personal Website Template

This repo serves as a template to help you get started making a personal/resume webstie. The template uses React/Next.js which is a static site generator to create a static website meant to be hosted in a cloud provider such as [AWS](https://aws.amazon.com/) or [Azure](https://azure.microsoft.com/en-us/).

<br/>

# Table of Contents
1. [What is React](#what-is-react)
2. [What is Next.js](#what-is-nextjs)
3. [Getting Started](#getting-started)
4. [Creating Tags and Releases](#creating-tags-and-releases)
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
1. Install Node -> [Download](https://nodejs.org/en/download/)

2. Create a new repository using this template

3. Clone your newly created repo
    ```bash
    # Replace <username> with your github username or the repo owner's name
    # Replace <repo-name> with the name of the repo
    git clone https://github.com/<owner-name>/<repo-name>.git
    ```

4. Run the website locally
    
    I.Install Dependencies
    ```bash
    # Using npm
    npm install

    # Using yarn
    yarn
    ```

    II. Run the website locally
    ```bash
    # Using npm
    npm run dev

    # Using yarn
    yarn dev
    ```

    III. Build & Serve (Builds site statically and serves it locally)
    ```bash
    # Using npm 
    npm run start

    # Using yarn
    yarn start
    ```

    IV: Run Linter
    ```bash
    # Using npm
    npm run lint

    # Using yarn
    yarn lint
    ```

    V: For additional `npm/yarn` scripts, checkout `package.json`

5. Create a new branch off of `main` intended to be the `dev` branch
    
    I. Can be done via github.com or cli
    ```bash
    # Git CLI
    # Create new branch, replace <branch-name> with the name of the branch
    git checkout -b <branch-name>
    ```
5. Move all files found under `ci` to `.github/workflows`

    I. Update S3 bucket name on Line 53 in [`ci/release.yml`](ci/release.yml) Current -> `s3://mybucket`

6. You need to create 3 repository secrets that will be used in [GitHub Actions](https://github.com/features/actions)

    I. Name - `AWS_ACCESS_KEY_ID` | Value - `<your-aws-access-key-id>`

    II. Name - `AWS_SECRET_ACCESS_KEY` | Value - `<your-aws-secret-access-key>`

    III. Name - `CLOUDFRONT_DISTRIBUTION_ID` | Value - `<your-cloudfront-id>`

7. Prerequisite - AWS infrastructure has been created

<br/>

## Creating Tags and Releases
When pushing to main, a tag and release will be created. The default bump is a `minor` meaning the version will go from `0.0.0` -> `0.1.0`. If you'd like to bump the version by a different type/amount or not at all, follow the instructions below.

### Major
A `major` bump usually happens when new features are introduced to the source code. To indicate that a `major` bump is to happen, simply include `#major` in your commit.

```bash
# examples
git commit -m "feat#major: created new page for contacting me"

git commit -m "feat: created new page for contacting me (#major)"
```

> Major bumps will increase your version tag as following `0.0.0` -> `1.0.0`

### Minor
A `minor` bump usually happens when big bug fixes or build fixes occur. To indicate
that a `minor` bump is to happen, simply include `#minor` in your commit.

```bash
# examples
git commit -m "fix#minor: fixed ui issue"

git commit -m "fix: fixed ui issue (#minor)"
```

> Minor bumps will increase your version tag as following `0.0.0` -> `0.1.0`

### Patch
A `patch` bump usually happens when bug fixes or package updates occur. To indicate
that a `patch` bump is to happen, simply include `#patch` in your commit.

```bash
# examples
git commit -m "fix#patch: bumped dependency version"

git commit -m "fix: bumped dependency version (#patch)"
```

> Patch bumps will increase your version tag as following `0.0.0` -> `0.0.1`

### None
If you do not want to bump the version tag, then include `#none` in your commit message.
This would be useful when you updated the docs or something that does not affect the source code of the project.

```bash
# examples
git commit -m "docs#none: updated README"

git commit -m "docs: updated README (#none)"
```
> None will skip over the tagging and release in the workflow

<br/>

## Understanding the File Structure
- `.github/workflows` - contains GitHub Action workflows
- `ci` - files to be moved to `.github/workflows` then to be removed
- `public` - public files of your website
    
    - `images` - contains static images of the site
    - `favicon.ico` - favicon of the site

- `src` - source code for the site

    - `components` - general components
    - `pages` - pages of the site
    - `styles` - contains `.scss` files and fonts

- `.eslintignore` - specifies files or folders for eslint to ignore
- `.eslintrc.yml` - eslint config
- `next.config.js` - next.js config

