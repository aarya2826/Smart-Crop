# Running the Development Server

## Fix PowerShell Execution Policy Issue

If you get an error like "running scripts is disabled on this system", you have two options:

### Option 1: Use the Helper Script (Easiest)
Run the provided script:
```powershell
.\run-dev.ps1
```

### Option 2: Run with Execution Policy Bypass (Quick Fix)
```powershell
powershell -ExecutionPolicy Bypass -Command "npm run dev"
```

### Option 3: Change Execution Policy (Permanent Fix - Requires Admin)
Open PowerShell as Administrator and run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then you can run `npm run dev` normally.

## Starting the Servers

### Frontend (React)
```bash
cd Smart-Crop
npm run dev
# OR use: .\run-dev.ps1
```
Server runs at: http://localhost:5173

### Backend (Flask) - If you have it set up
```bash
cd backend
python app.py
```
Server runs at: http://localhost:5000

