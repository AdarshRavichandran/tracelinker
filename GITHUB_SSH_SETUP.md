# 🔐 GitHub SSH Setup for TraceLinker

## ✅ SSH Key Generated Successfully!

Your SSH key has been generated and configured specifically for the TraceLinker project.

---

## 📋 Your SSH Public Key

**Copy this key and add it to GitHub:**

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFGVuGD3k74OGCZ/nnOJ972vIeNBgCr/YZ+lWUkDBses tracelinker@dev
```

---

## 🚀 Add SSH Key to GitHub

### Step 1: Copy the Public Key
The key above is already copied. You can also get it with:
```bash
cat ~/.ssh/tracelinker_ed25519.pub
```

### Step 2: Add to GitHub
1. Go to https://github.com/settings/keys
2. Click **"New SSH key"**
3. Title: `TraceLinker Dev Key`
4. Key type: **Authentication Key**
5. Paste the public key above
6. Click **"Add SSH key"**

### Step 3: Verify Connection
```bash
ssh -i ~/.ssh/tracelinker_ed25519 -T git@github.com
```

Expected output:
```
Hi AdarshRavichandran! You've successfully authenticated, but GitHub does not provide shell access.
```

---

## 🔧 Git Configuration

Your git configuration for this folder is already set up:

```bash
# User identity
git config user.name "Adarsh Ravichandran"
git config user.email "adarsh@tracelinker.dev"

# SSH key for this folder
git config core.sshCommand "ssh -i ~/.ssh/tracelinker_ed25519"
```

This configuration is **local to this folder** (stored in `.git/config`).

---

## 📁 SSH Configuration

Your SSH config has been updated at `~/.ssh/config`:

```
Host github.com-tracelinker
    HostName github.com
    User git
    IdentityFile ~/.ssh/tracelinker_ed25519
    IdentitiesOnly yes
```

This allows you to use:
```bash
ssh -T git@github.com-tracelinker
```

---

## 🔑 Key Files

| File | Purpose |
|------|---------|
| `~/.ssh/tracelinker_ed25519` | Private key (keep secret!) |
| `~/.ssh/tracelinker_ed25519.pub` | Public key (add to GitHub) |
| `~/.ssh/config` | SSH host configuration |
| `.git/config` | Git configuration for this folder |

---

## 📝 Next Steps

### 1. Add SSH Key to GitHub
- Go to https://github.com/settings/keys
- Add the public key from above
- Verify with: `ssh -i ~/.ssh/tracelinker_ed25519 -T git@github.com`

### 2. Create GitHub Repository
- Go to https://github.com/new
- Repository name: `tracelinker`
- Description: `The most developer-friendly GitHub traceability plugin`
- Choose: Public (for open-source)
- Click **"Create repository"**

### 3. Add Remote and Push
```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin git@github.com:AdarshRavichandran/tracelinker.git

# Verify remote
git remote -v

# Push to GitHub
git push -u origin main
```

---

## 🔒 Security Notes

✅ **Private Key Security**
- Your private key is stored at: `~/.ssh/tracelinker_ed25519`
- Never share this file
- Never commit it to git
- It's already in `.gitignore`

✅ **Folder-Specific Configuration**
- This SSH key is configured only for this folder
- Other projects won't use this key
- You can have different keys for different projects

✅ **Key Type**
- Using ED25519 (modern, secure, fast)
- Better than RSA for new keys

---

## 🐛 Troubleshooting

### SSH Connection Failed
```bash
# Test connection
ssh -i ~/.ssh/tracelinker_ed25519 -T git@github.com

# If it fails, check:
# 1. Key is added to GitHub (https://github.com/settings/keys)
# 2. Key permissions: chmod 600 ~/.ssh/tracelinker_ed25519
# 3. SSH agent: ssh-add ~/.ssh/tracelinker_ed25519
```

### Git Push Failed
```bash
# Verify git config
git config --local --list | grep -E "user|ssh"

# Verify remote URL uses SSH (not HTTPS)
git remote -v

# Should show: git@github.com:AdarshRavichandran/tracelinker.git
```

### Permission Denied
```bash
# Fix key permissions
chmod 600 ~/.ssh/tracelinker_ed25519
chmod 644 ~/.ssh/tracelinker_ed25519.pub
```

---

## 📚 Useful Commands

```bash
# View your SSH public key
cat ~/.ssh/tracelinker_ed25519.pub

# Test SSH connection
ssh -i ~/.ssh/tracelinker_ed25519 -T git@github.com

# View git config for this folder
git config --local --list

# View SSH config
cat ~/.ssh/config

# Add SSH key to agent (optional)
ssh-add ~/.ssh/tracelinker_ed25519

# List SSH keys in agent
ssh-add -l
```

---

## ✨ You're Ready!

Your SSH setup is complete and configured specifically for this folder. 

**Next:** Create a GitHub repository and push your code!

```bash
# Create repo on GitHub, then:
git remote add origin git@github.com:AdarshRavichandran/tracelinker.git
git push -u origin main
```

---

**Made with 🔗 by developers, for developers.**

