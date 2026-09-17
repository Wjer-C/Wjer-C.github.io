const OWNER = "Wjer-C";
const REPO = "Wjer-C.github.io";
const PATH = 'songs';
const songLister = document.getElementById("songPrint");
const song = document.getElementById("song");
const shuffleButton = document.getElementById("shuffle");
const songList = []


async function getGitHubFiles() {
    
    const url = 'https://github.com/Wjer-C/Wjer-C.github.io/tree/main/songs';
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('HTTP error, status: ${response.status}');
        
        const data = await response.json();
        const listElement = document.getElementById('file-list')

        data.forEach(item => {
            const li = document.createElement('li');

            if (item.type === 'file') {
                li.innerHTML = '<strong>${item.name}/</strong> - <a href="${item.download_url}" target="_blank">Download Raw File</a>';
            } else if (item.type === 'dir') {
                li.innerHTML = '<strong>${item.name}/</strong> (Directory)';
            }

            listElement.appendChild(li); 
            songList = listElement
            
        });

    } catch (error) {
        console.error('Error fetching files from GitHub:', error);
    }

}

getGitHubFiles();






function songsAdd() {
    
}

shuffleButton.addEventListener("click", function() {
    shuffle();
});


function shuffle() {
    song


}