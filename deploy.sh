#!/bin/bash

# Echoes of the Past - Vercel Deployment Script
echo "📜 Echoes of the Past - Vercel Deployment Helper"
echo "================================================"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed."
    echo "📦 Installing Vercel CLI globally..."
    npm install -g vercel
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install Vercel CLI. Please install it manually with 'npm install -g vercel'"
        exit 1
    fi
    echo "✅ Vercel CLI installed successfully!"
else
    echo "✅ Vercel CLI already installed!"
fi

# Check if user is logged in to Vercel
echo "🔑 Checking Vercel login status..."
vercel whoami &> /dev/null
if [ $? -ne 0 ]; then
    echo "🔐 Please login to Vercel:"
    vercel login
    if [ $? -ne 0 ]; then
        echo "❌ Failed to login to Vercel. Please try again."
        exit 1
    fi
else
    echo "✅ Already logged in to Vercel!"
fi

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

# If deployment was successful
if [ $? -eq 0 ]; then
    echo "🎉 Deployment successful!"
    echo "📝 Remember to check your project on the Vercel dashboard for more options."
    echo "🌐 Your project should now be live at your Vercel domain."
else
    echo "❌ Deployment failed. Please check the error message above."
fi

echo "================================================"
echo "Thank you for using Echoes of the Past!" 