# Quick Start Guide

## 🚀 Running the Development Server

### Method 1: Use Batch File (Easiest - No PowerShell Issues)
Simply double-click or run:
```cmd
run-dev.bat
```

### Method 2: Use PowerShell Script
```powershell
.\run-dev.ps1
```

### Method 3: Direct Command (From Smart-Crop folder)
```powershell
powershell -ExecutionPolicy Bypass -Command "npm run dev"
```

### Method 4: Fix Execution Policy Permanently
Open PowerShell as Administrator and run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
Then you can use `npm run dev` normally.

## 📍 Important Notes

- Make sure you're in the `Smart-Crop` directory before running commands
- The server runs at: **http://localhost:5173**
- Press `Ctrl+C` to stop the server

## ✅ Current Status

The dev server is currently running! You can access it at:
**http://localhost:5173**



