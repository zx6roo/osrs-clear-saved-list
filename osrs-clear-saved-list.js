// Tool: Clear Saved List
// Description: Clears all saved OSRS Wiki table backup data from localStorage after user confirmation. Includes a confirmation prompt and a floating popup notification.
// Tags: OSRS, wiki, localStorage, bookmarklet, JavaScript, clear, backup, data management
// ***DO NOT copy comments into bookmarklet ***

(() => {
  if (confirm("Clear your saved OSRS table backup? This cannot be undone.")) {
    localStorage.removeItem("osrsTableBackup");

    // Create floating popup notification (toast)
    const toast = document.createElement("div");
    toast.textContent = "✅ Backup cleared";
    toast.style.cssText =
      "position:fixed;top:1em;right:1em;background:#2a2a2a;color:white;padding:10px 16px;font-size:14px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.3);opacity:0;transition:opacity 0.4s ease;z-index:9999;";
    document.body.appendChild(toast);

    // Animate toast appearance and disappearance
    setTimeout(() => (toast.style.opacity = "1"), 50);
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 500);
    }, 2500);
  }
})();
