const githubList = document.getElementById('github-list');

if (githubList) {
    fetch('https://api.github.com/users/eganeganegan/repos?sort=updated')
        .then(res => res.json())
        .then(data => {
            githubList.innerHTML = data.slice(0, 8).map((repo, i) => `
                <div class="track-row" onclick="window.open('${repo.html_url}', '_blank')">
                    <span style="width: 30px; color: #b3b3b3;">${i + 1}</span>
                    <div class="track-main" style="flex: 1;">
                        <span class="track-title">${repo.name}</span>
                        <span class="track-sub">${repo.description || "Public Research Repository"}</span>
                    </div>
                    <span class="track-tag" style="width: 150px;">${repo.language || 'Software'}</span>
                    <span style="width: 50px; color: #b3b3b3;"><i class="fa-solid fa-ellipsis"></i></span>
                </div>
            `).join('');
        })
        .catch(err => githubList.innerHTML = "<p>Tracklist offline.</p>");
}

function toggleAlbum(albumId) {
    // Get all dropdowns
    const dropdowns = document.querySelectorAll('.album-dropdown');
    const target = document.getElementById(albumId);
    
    // Check if the clicked one is already active
    const isActive = target.classList.contains('active');

    // Close all other albums first for a clean "one at a time" look
    dropdowns.forEach(nav => nav.classList.remove('active'));

    // If it wasn't active, open it
    if (!isActive) {
        target.classList.add('active');
    }
}

