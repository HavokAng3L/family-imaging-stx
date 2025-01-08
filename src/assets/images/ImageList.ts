import getImage from "../../services/ImageAPI"

/*
    Returns an array of different image links
*/

const imageList  = (listLength: number): Array<string> => {
    const imageArray = new Array(listLength);

    for(let i = 0; i < imageArray.length; i++)
    {
        imageArray[i] = getImage(1920, 1080, i + 1);
    }

    return imageArray;
}

export default imageList;