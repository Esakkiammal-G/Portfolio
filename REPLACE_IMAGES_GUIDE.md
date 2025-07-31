# How to Replace Images with Your Own

## Current Setup
Your portfolio is now using placeholder images from Pexels that will display properly. Here's how to replace them with your own images:

## Method 1: Direct URL Replacement (Easiest)
If you have your images hosted online (Google Drive, Dropbox, GitHub, etc.):

1. **Upload your images** to a cloud service
2. **Get the direct image URLs**
3. **Replace the URLs** in the code:

### Profile Image
In `src/components/Profile.js`, replace:
```
src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
```
with your image URL.

### Project Images
In `src/components/Projects.js`, replace the `imageUrl` values with your project image URLs.

## Method 2: Local Files (Traditional)
1. **Create the images folder**: `public/images/`
2. **Add your images**:
   - `public/images/profile.jpg` - Your professional photo
   - `public/images/pepper-necklace.jpg` - Your safety device project
   - `public/images/wood-saw.jpg` - Your MSME project
   - `public/images/warehouse-system.jpg` - Your warehouse system
   - `public/images/apple-clone.jpg` - Your Apple clone project

3. **Update the code** to use local paths:
   - Profile: `src="/images/profile.jpg"`
   - Projects: `imageUrl: "/images/project-name.jpg"`

## Image Requirements
- **Profile**: 400x400px, professional headshot
- **Projects**: 600x400px, high-quality screenshots/photos
- **Formats**: .jpg, .png, .webp
- **Size**: Keep under 1MB each for fast loading

## Quick Tips
- Use descriptive filenames
- Optimize images for web (compress them)
- Test locally before deploying
- Keep backup copies of your images

Your portfolio is now live and functional with placeholder images. Replace them whenever you're ready!