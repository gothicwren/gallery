# Wren's Gallery — setup

A bot gallery for DreamJourney that runs free on GitHub Pages. No coding needed after setup: every bot lives in one file, `bots.js`, and you edit it right on the GitHub website.

What's in the folder:

| File | What it is | Do you edit it? |
|---|---|---|
| `bots.js` | Your site settings and every bot | Yes, this is the only one |
| `images/` | Your bot art | Yes, upload pictures here |
| `index.html`, `style.css`, `app.js` | The site itself | No |

---

## 1. Make a GitHub account

Go to **github.com** and sign up. Your username ends up in your site's address, so pick one you'd be happy to share on Discord (for example `wrenwrites` gives you `wrenwrites.github.io`).

## 2. Make a repository

A repository ("repo") is just a folder GitHub hosts for you.

1. Click the **+** in the top right, then **New repository**.
2. Name it. You have two choices:
   - `gallery` gives you the address **yourname.github.io/gallery**
   - `yourname.github.io` (your exact username) gives you the shorter **yourname.github.io**
3. Set it to **Public** (free Pages sites have to be public).
4. Leave every other box unchecked and click **Create repository**.

## 3. Upload the files

1. Unzip the folder I sent you on your computer.
2. On your new, empty repo page, click the link that says **uploading an existing file**.
3. Open the unzipped folder, select **everything inside it** (the files *and* the `images` folder) and drag it all onto the page. Don't drag the outer folder itself, or the site will end up one level too deep.
4. Scroll down and click **Commit changes**. ("Commit" just means save.)

## 4. Turn the site on

1. In your repo, click **Settings** (top bar), then **Pages** (left sidebar).
2. Under **Build and deployment**, set Source to **Deploy from a branch**.
3. Set Branch to **main** and the folder to **/ (root)**, then click **Save**.
4. Wait a minute or two and refresh. A box at the top of that page shows your live address. That's the link you share.

## 5. Make it yours

Open `bots.js` in your repo and click the **pencil icon** to edit. The top block (`window.SITE`) is your masthead:

- `note` is the taped-on note from you
- `dreamjourney` should be your DreamJourney profile link
- `messages` is optional, e.g. `"312,000"`, and leave it `""` to hide it
- `collections` is the tab order

Click **Commit changes** when you're done. Every change goes live within a couple of minutes.

## 6. Turn on the forms (emailed to you)

The "Request a scene" and "Contact me" forms send to your email through a free service called Web3Forms. You don't need to make an account.

1. Go to **web3forms.com**, type in the email you want submissions sent to, and request an access key.
2. They email you the key, a long string of letters and numbers.
3. Paste it into `bots.js` between the quotes: `formKey: "your-key-here",`
4. Commit. Send yourself a test request from the live site.

The key is safe to have in a public file; it can only send email *to you*. Visitors' replies come through with whatever Discord handle or email they typed in.

## 7. Adding a bot

1. Open `bots.js` and click the pencil.
2. Copy one whole bot block, from its `{` to its closing `},`
3. Paste it where you want it in the list and change the details. The guide at the top of `bots.js` says what each field does.
4. Commit.

**Adding pictures:** go into the `images` folder in your repo, click **Add file**, then **Upload files**, drop your pictures in, and commit. Then in the bot's block, set `cover: "images/your-file.jpg"` and list any extras in `gallery`.

- Name files in lowercase with dashes and no spaces: `clarke-hayes-beach.jpg`, not `Clarke Hayes (1).JPG`. Names have to match exactly, including capitals.
- JPG or WebP keeps the site fast. Try to keep each picture under about 1 MB.
- No picture yet? Leave `cover: ""` and the bot gets a printed placeholder.

**Private bots:** a bot with `status: "hidden"` doesn't show anywhere on the site. Your locked bots are already in the file that way. When one goes public, change it to `"live"`.

**Teasing a work in progress:** `status: "desk"` puts a bot in the "On the desk" section at the bottom. That section only appears when something is on it.

**Chat counts:** update a bot's `chats` number whenever you like. The site adds them all up for the total at the top and sorts the gallery most-chatted first.

**Sharing one bot:** every bot has its own link, your site address plus `#/` and the bot's id, e.g. `yourname.github.io/gallery/#/clarke-hayes`.

## If something breaks

- **The page is blank or some bots vanished.** Almost always a missing comma or quote mark in `bots.js`. Open the file, look at the last thing you changed, and check that each bot block ends in `},` and every text value has quotes on both ends. Apostrophes inside text are fine (`"He's"`); a straight double quote inside text needs a backslash before it (`\"`).
- **My change isn't showing.** Give it two minutes, then hard-refresh (Ctrl+Shift+R, or Cmd+Shift+R on a Mac).
- **A picture shows the placeholder instead.** The filename in `bots.js` doesn't exactly match the file in `images/`.
- **I want my old version back.** Open the file on GitHub and click **History**. Every commit is saved, so you can copy an older version back in.


## How the site is laid out
- **Home** (your main link): the masthead, your note with the Request a scene and Contact me buttons, your featured bot, a folder for each collection, and a preview of what's on the desk.
- **Folders** come from `collections` in `bots.js`, in that order. Each bot's `collection` must match a folder name exactly, capitals included.
- **Folder notes:** the line under a folder's title when it's open. Edit them in `collectionNotes`.
- **Featured bot:** `featured: "the-pitt"`. Leave it `""` and your most-chatted bot is featured instead.
- **On the desk:** any bot with `status: "desk"`. Home shows the first three.
- **Links people can share:** `/#/folder/rust-harbour` opens a folder, `/#/all` shows every bot, `/#/desk` shows the desk, and `/#/clarke-hayes` opens one bot.
- **Scene lists:** every scene line needs a comma after its closing `}` except the last one in the list.
