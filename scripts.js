let musicPlayer = null;
let musicPlaying = null;
let musicPaused = false;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function PlaySound(folder, numberFiles) {
    var file = `sounds/${folder}/` + getRandomInt(numberFiles) + '.wav'
    console.log(file)
    var sound = new Audio(file);
    sound.play();
}

function ChangeZone(image, musicControllerName) {
    document.body.style.backgroundImage = `url('backgrounds/${image}')`;

    if (musicPlayer) {
        if (musicPlaying === musicControllerName) {
            if (musicPaused) {
                musicPlayer.play();
                musicPaused = false;
            } else {
                musicPlayer.pause();
                musicPaused = true;
            }
            return;
        }
        musicPlayer.pause();
    }

    musicPlayer = document.getElementById(musicControllerName);
    musicPlayer.volume = 0.5;
    musicPlayer.play();
    musicPlaying = musicControllerName;
    musicPaused = false;
}