export default interface PostProps {
    title: string
    body: string
    isFav: boolean

    onTouch?: (isFav: boolean) => void
}
