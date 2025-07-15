# Clear Saved List

This bookmarklet clears the saved OSRS table backup data stored in your browser's localStorage.
Before clearing, it asks for confirmation to prevent accidental deletion.
Displays a floating popup notification confirming the backup has been cleared.

## How to Use

1. Copy the **minified** bookmarklet code (`osrs-clear-saved-list.min.js`).
2. Create a new bookmark in your browser.
3. Paste the minified code into the bookmark’s URL/location field.
4. Click the bookmark to clear your saved backup data after confirmation.
5. Confirm the prompt to proceed.

## Notes

- /!\ This action cannot be undone — clearing will delete all saved backup data stored locally.
- Works entirely client-side; no data leaves your browser.
- Data cleared is stored under the key `osrsTableBackup` in your browser’s localStorage.
- Use this bookmarklet only if you want to remove all saved OSRS table backup data.
- The confirmation popup ensures you do not accidentally clear your backup.
- The floating popup confirms successful deletion.

---

Tags: OSRS, wiki, bookmarklet, JavaScript, localStorage, clear, backup
