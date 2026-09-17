const OWNER = "Wjer-C";
const REPO = "Wjer-C.github.io";
const PATH = 'songs';


async function getGitHubFiles() {
    const url = 'https://github.com{OWNER}/${REPO}/contents/${PATH}';

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
        });

    } catch (error) {
        console.error('Error fetching files from GitHub:', error);
    }

}

getGitHubFiles();


const song = document.getElementById("song");
const shuffleButton = document.getElementById("shuffle");
const songList = []



function songsAdd() {
    
}

shuffleButton.addEventListener("click", function() {
    shuffle();
});


function shuffle() {
    song


}