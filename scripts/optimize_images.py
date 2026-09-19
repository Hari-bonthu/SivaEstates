import os
from PIL import Image

def optimize_images(public_dir):
    print(f'Scanning directory: {public_dir}')
    converted = 0
    total_orig = 0
    total_webp = 0

    for root, _, files in os.walk(public_dir):
        for f in files:
            ext = os.path.splitext(f)[1].lower()
            if ext in ['.jpg', '.jpeg', '.png']:
                src = os.path.join(root, f)
                base = os.path.splitext(f)[0]
                dst = os.path.join(root, f'{base}.webp')

                orig_size = os.path.getsize(src)
                total_orig += orig_size

                try:
                    with Image.open(src) as img:
                        try:
                            from PIL import ImageOps
                            img = ImageOps.exif_transpose(img)
                        except Exception:
                            pass

                        is_transparent = img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info)
                        is_logo = 'logo' in f.lower() or 'icon' in f.lower()

                        if is_logo and is_transparent:
                            img.save(dst, format='WEBP', lossless=True, method=6)
                        elif is_transparent:
                            img.save(dst, format='WEBP', quality=85, method=6)
                        else:
                            if img.mode != 'RGB':
                                img = img.convert('RGB')
                            img.save(dst, format='WEBP', quality=82, method=6)

                        webp_size = os.path.getsize(dst)
                        total_webp += webp_size
                        converted += 1
                except Exception as e:
                    pass

    print(f'Optimized {converted} images. WebP size: {total_webp/(1024*1024):.2f} MB (Orig: {total_orig/(1024*1024):.2f} MB)')

if __name__ == '__main__':
    public_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'public', 'images'))
    optimize_images(public_path)
