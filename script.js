document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');

    const mediaItems = [
        {
            type: 'image',
            url: 'https://drive.google.com/file/d/1SxqoZh3pOL8FHANxQrqiv5Aapiint1rs/view?usp=sharing',
            description: 'Artist:  Amelia Earthart'
        },
        {
            type: 'video',
            url: 'https://drive.google.com/file/d/1Sy6NCdY5VBwTqZEQ2zTmGCP_tefBr0gd/view?usp=sharing',
            description: 'This Heart's Creation...a video'
        },
        {
            type: 'text',
            content: 'This is The Honor Heart. It is quite honorable.',
            description: 'This Heart's Story...'
        }
    ];

    mediaItems.forEach(item => {
        const mediaDiv = document.createElement('div');
        mediaDiv.classList.add('media-item');

        if (item.type === 'image') {
            const img = document.createElement('img');
            img.src = item.url;
            mediaDiv.appendChild(img);
        } else if (item.type === 'video') {
            const video = document.createElement('video');
            video.controls = true;
            video.src = item.url;
            mediaDiv.appendChild(video);
        } else if (item.type === 'text') {
            const p = document.createElement('p');
            p.textContent = item.content;
            mediaDiv.appendChild(p);
        }

        const desc = document.createElement('p');
        desc.textContent = item.description;
        mediaDiv.appendChild(desc);

        contentDiv.appendChild(mediaDiv);
    });
});
