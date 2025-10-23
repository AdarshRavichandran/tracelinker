# 🔐 Manage Both GitHub Accounts

Guide to maintain separate SSH keys for both `AdarshRavichandran` and `adarshtessell` accounts.

---

## 📋 Current SSH Keys

### Key 1: TraceLinker (adarshtessell)
```
Private: ~/.ssh/tracelinker_ed25519
Public: ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFGVuGD3k74OGCZ/nnOJ972vIeNBgCr/YZ+lWUkDBses tracelinker@dev
Account: adarshtessell
```

### Key 2: AdarshRavichandran
```
Private: ~/.ssh/adarshravichandran_ed25519
Public: ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKcA/w7hlSsjXQQhsYxiWxphK1I3b3LZfb9mdoErrdCW adarshravichandran@dev
Account: AdarshRavichandran
```

---

## ✅ Verify Keys on GitHub

### For adarshtessell Account
1. Log in to: https://github.com/adarshtessell
2. Go to: Settings → SSH and GPG keys
3. Check if this key is there:
   ```
   ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFGVuGD3k74OGCZ/nnOJ972vIeNBgCr/YZ+lWUkDBses
   ```

### For AdarshRavichandran Account
1. Log in to: https://github.com/AdarshRavichandran
2. Go to: Settings → SSH and GPG keys
3. Check if this key is there:
   ```
   ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKcA/w7hlSsjXQQhsYxiWxphK1I3b3LZfb9mdoErrdCW
   ```

---

## 🔧 SSH Config Setup

Your `~/.ssh/config` should have:

```
Host github.com-tracelinker
    HostName github.com
    User git
    IdentityFile ~/.ssh/tracelinker_ed25519
    IdentitiesOnly yes

Host github.com-adarshravichandran
    HostName github.com
    User git
    IdentityFile ~/.ssh/adarshravichandran_ed25519
    IdentitiesOnly yes
```

---

## 🚀 Push to AdarshRavichandran

For this project (TraceLinker), use:

```bash
cd /Users/adarshravichandran/Desktop/personal

# Set git config to use AdarshRavichandran key
git config core.sshCommand "ssh -i ~/.ssh/adarshravichandran_ed25519"

# Push
git push -u origin main
```

---

## 🚀 Push to adarshtessell (if needed)

For other projects, use:

```bash
# Set git config to use tracelinker key
git config core.sshCommand "ssh -i ~/.ssh/tracelinker_ed25519"

# Push
git push -u origin main
```

---

## ✅ Troubleshooting

### Key Not Working
1. Verify key is added to correct GitHub account
2. Check permissions: `chmod 600 ~/.ssh/*_ed25519`
3. Test connection: `ssh -i ~/.ssh/adarshravichandran_ed25519 -T git@github.com`

### Wrong Account Authenticating
- Make sure `IdentitiesOnly yes` is in SSH config
- Use explicit `-i` flag: `ssh -i ~/.ssh/adarshravichandran_ed25519`

---

## 📝 Current Status

**TraceLinker Project:**
- Remote: `git@github.com:AdarshRavichandran/tracelinker.git`
- SSH Key: `~/.ssh/adarshravichandran_ed25519`
- Account: AdarshRavichandran
- Status: Ready to push (once key is verified on GitHub)

---

**Made with 🔗 by developers, for developers.**

