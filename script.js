document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');

    const mediaItems = [
        {
            type: 'image',
            url: 'https://drive.google.com/uc?export=view&id=YOUR_IMAGE_FILE_ID',
            description: 'An example image'
        },
        {
            type: 'video',
            url: 'https://drive.google.com/uc?export=view&id=YOUR_VIDEO_FILE_ID',
            description: 'An example video'
        },
        {
            type: 'text',
            content: 'This is an example text block.',
            description: 'An example text'
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
