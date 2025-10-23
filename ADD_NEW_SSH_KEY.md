# 🔐 Add New SSH Key to AdarshRavichandran Account

A new SSH key has been generated for your AdarshRavichandran account.

---

## 📋 Your New SSH Public Key

**Copy this key and add it to GitHub:**

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKcA/w7hlSsjXQQhsYxiWxphK1I3b3LZfb9mdoErrdCW adarshravichandran@dev
```

---

## ✅ Add SSH Key to GitHub

1. Make sure you're logged in to your **AdarshRavichandran** account
2. Go to: https://github.com/settings/keys
3. Click **"New SSH key"**
4. **Title:** `TraceLinker Dev Key - AdarshRavichandran`
5. **Key type:** Select **"Authentication Key"**
6. **Key:** Paste the public key above
7. Click **"Add SSH key"**

---

## ✅ Verify Connection

Once added, run:

```bash
ssh -i ~/.ssh/adarshravichandran_ed25519 -T git@github.com
```

Expected output:
```
Hi AdarshRavichandran! You've successfully authenticated, but GitHub does not provide shell access.
```

---

## 🚀 Push Code

Once verified, run:

```bash
cd /Users/adarshravichandran/Desktop/personal
git push -u origin main
```

---

**Made with 🔗 by developers, for developers.**

