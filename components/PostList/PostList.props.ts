import IPost from '../../interfaces/post.interface'

export default interface PostListProps {
    posts: IPost[]
    onChangeFavorite?: (id: string, isFav: boolean) => void
}
