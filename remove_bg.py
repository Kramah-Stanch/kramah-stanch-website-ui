from PIL import Image

def make_transparent(img_path):
    img = Image.open(img_path)
    img = img.convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # Check for white or near-white pixels to make transparent
        if item[0] > 235 and item[1] > 235 and item[2] > 235:
            newData.append((255, 255, 255, 0)) # transparent
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(img_path, "PNG")

if __name__ == "__main__":
    try:
        make_transparent("public/logo.png")
        print("Successfully made logo background transparent.")
    except Exception as e:
        print(f"Error processing image: {e}")
