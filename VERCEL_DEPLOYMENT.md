# Vercel Deployment Guide for Echoes of the Past

This guide will help you deploy this project to Vercel for free in just a few minutes.

## Prerequisites

- A GitHub account
- A Vercel account (can sign up using your GitHub account)

## Step 1: Fork or Clone the Repository

1. If you haven't already, fork or clone this repository to your own GitHub account.
2. Make sure all assets are properly committed to your repository.

## Step 2: Sign Up for Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign up or log in (you can use your GitHub account for this)

## Step 3: Import Your Project

1. Once logged into Vercel, click the "Add New..." button and select "Project"
2. Under "Import Git Repository", find and select your forked repository
3. If you don't see your repository, make sure your GitHub account is connected properly

## Step 4: Configure the Project

1. Project Name: You can keep the default or choose a custom name
2. Framework Preset: Select "Other"
3. Root Directory: Keep as default (should be the root of your repository)
4. Build and Output Settings: Leave as default
   - Build Command: Can be left empty for this static site
   - Output Directory: Leave as default

## Step 5: Deploy

1. Click "Deploy"
2. Wait for the deployment to complete (usually less than a minute)
3. Once deployed, Vercel will provide you with a URL where your site is live

## Step 6: Custom Domain (Optional)

1. If you want to use a custom domain:
   - Go to your Vercel project dashboard
   - Click "Settings" > "Domains"
   - Add your custom domain and follow the instructions

## Automatic Deployments

Vercel automatically deploys your site when you push changes to your GitHub repository. This means:

1. Make changes to your code locally
2. Commit and push those changes to GitHub
3. Vercel will automatically rebuild and deploy your site

## Troubleshooting

If you encounter issues with your deployment:

1. Check the deployment logs in Vercel
2. Make sure all your assets (images, scripts, css) are properly referenced
3. Verify that your package.json file is correctly set up
4. Ensure your vercel.json configuration is valid

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Static Site Deployments](https://vercel.com/docs/concepts/deployments/static-deployments)
- [Custom Domains](https://vercel.com/docs/concepts/projects/domains) 