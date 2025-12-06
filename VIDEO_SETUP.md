# Video Setup Instructions

## Background Video for Hero Section

### Recommended Video Source

**Option 1: Pexels (Free, No Attribution Required)**
1. Visit: https://www.pexels.com/search/videos/technology%20background/
2. Recommended videos:
   - "Digital Projection of Abstract Geometrical Lines" - https://www.pexels.com/video/digital-projection-of-abstract-geometrical-lines-3129957/
   - "Abstract Technology Background" - https://www.pexels.com/video/abstract-technology-background-3141210/
   - "Circuit Board Animation" - https://www.pexels.com/video/circuit-board-animation-8726281/

**Option 2: Pixabay (Free, No Attribution Required)**
1. Visit: https://pixabay.com/videos/search/technology/
2. Search for: "technology background", "circuit board", "data network"

### Download & Setup

1. **Download Video:**
   - Choose a video (1920x1080 or 4K)
   - Download MP4 format
   - Keep file size under 10MB for web performance

2. **Optimize Video:**
   ```bash
   # If video is too large, compress it using ffmpeg:
   ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset fast tech-background.mp4
   ```

3. **Add to Project:**
   ```
   public/videos/tech-background.mp4
   ```

4. **Create Poster Image (Optional):**
   - Take screenshot of first frame
   - Save as: `public/images/video-poster.jpg`

### Current Implementation

The Hero component is now ready for video. Just:
1. Download a video from the links above
2. Place it in `public/videos/tech-background.mp4`
3. (Optional) Add poster image to `public/images/video-poster.jpg`

### Fallback

If video isn't added:
- Dark gradient background will show
- Site will still look professional
- No broken experience

### Performance Notes

- Video set to `opacity: 30%` for readability
- Autoplay, loop, muted for seamless experience
- Uses `object-cover` for responsive scaling
- Dark overlay ensures text is always readable
