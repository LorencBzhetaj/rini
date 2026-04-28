#!/bin/bash
# setup-images.sh
# Run this from the project root after placing your original files in a "uploads" folder
# Usage: bash setup-images.sh ./uploads

UPLOADS="${1:-./uploads}"
IMAGES="./public/images"
VIDEOS="./public/videos"

mkdir -p "$IMAGES" "$VIDEOS" "./public/icons"

echo "📁 Copying images from $UPLOADS to $IMAGES..."

copy_if_exists() {
  local src="$UPLOADS/$1"
  local dst="$IMAGES/$2"
  if [ -f "$src" ]; then
    cp "$src" "$dst"
    echo "  ✓ $1 → images/$2"
  else
    echo "  ✗ Missing: $1"
  fi
}

copy_video() {
  local src="$UPLOADS/$1"
  local dst="$VIDEOS/$2"
  if [ -f "$src" ]; then
    cp "$src" "$dst"
    echo "  ✓ $1 → videos/$2"
  else
    echo "  ✗ Missing: $1"
  fi
}

# Logo
copy_if_exists "1777255493864_image.png" "logo.png"

# Hero & Why backgrounds
copy_if_exists "1777255375128_image.png" "hero-bg.jpg"
copy_if_exists "1777255404802_image.png" "why-bg.jpg"

# OG image (use best photo)
copy_if_exists "1777255375128_image.png" "og-image.jpg"

# Project covers
copy_if_exists "1777255375128_image.png" "proj1-cover.jpg"
copy_if_exists "1777255380872_image.png" "proj2-cover.jpg"
copy_if_exists "1777255385297_image.png" "proj2-b.jpg"
copy_if_exists "1777255390725_image.png" "proj3-cover.jpg"
copy_if_exists "1777255395029_image.png" "proj4-cover.jpg"
copy_if_exists "1777255399171_image.png" "proj5-cover.jpg"
copy_if_exists "1777255432055_image.png" "proj5-b.jpg"
copy_if_exists "1777255438800_image.png" "proj6-wip.jpg"
copy_if_exists "1777255404802_image.png" "proj6-cover.jpg"

# Service images
copy_if_exists "1777255375128_image.png" "service-controsoffitti.jpg"
copy_if_exists "1777255399171_image.png" "service-frame.jpg"
copy_if_exists "1777255395029_image.png" "service-pareti.jpg"
copy_if_exists "1777255380872_image.png" "service-residenziale.jpg"
copy_if_exists "1777255390725_image.png" "service-lineare.jpg"
copy_if_exists "1777255432055_image.png" "service-commerciale.jpg"

# Videos
copy_video "WhatsApp_Video_2026-04-26_at_9_09_31_PM.mp4" "video1.mp4"
copy_video "WhatsApp_Video_2026-04-26_at_9_12_19_PM.mp4" "video2.mp4"

echo ""
echo "✅ Done! Now run: npm run dev"
echo ""
echo "⚠️  Don't forget:"
echo "   1. Add icons to public/icons/ (use realfavicongenerator.net)"
echo "   2. Update domain in src/app/layout.tsx, sitemap.ts, robots.ts"
echo "   3. Configure email form in src/components/Contact.tsx"
