export default function getImage(width: number, height: number, number: number): string
{
    return `https://picsum.photos/${width}/${height}.webp?random=${number}`;
}
// TODO:
/// MAKE THIS AN API CALL TO GET ALT AND STUFF