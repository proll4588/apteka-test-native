import { useEffect, useState } from 'react'
import useHttp from './http.hook'
import { IPost } from '../components/PostList/PostList.props'

const postUrl = 'https://646a0e6403bb12ac2098cd31.mockapi.io/posts'

const usePost = () => {
    const { request, loading } = useHttp()
    const [posts, setPosts] = useState<IPost[]>([])

    // Получение всех постов
    const getAllPosts = async () => {
        try {
            const res = await request(postUrl)
            setPosts(res)
        } catch (error) {
            // alert(error)
        }
    }

    // Получение постов с заданным поиском
    const searchPost = async (search: string) => {
        try {
            const res = await request(`${postUrl}?search=${search}`)
            setPosts(res)
        } catch (error) {
            // alert(error)
        }
    }

    // Добавление в избранное
    const addFavorite = async (postId: string) => {
        try {
            const ans = await request(`${postUrl}/${postId}`, 'PATCH', {
                isFavorite: true,
            })

            setPosts((prev) =>
                prev.map((post) => (post.id === postId ? ans : post))
            )
        } catch (error) {
            // alert(error)
        }
    }

    // Удаление из избранного
    const removeFavorite = async (postId: string) => {
        try {
            const ans = await request(`${postUrl}/${postId}`, 'PATCH', {
                isFavorite: false,
            })

            setPosts((prev) =>
                prev.map((post) => (post.id === postId ? ans : post))
            )
        } catch (error) {
            // alert(error)
        }
    }

    // Изменение состояния избранности поста
    const changeFav = async (id: string, newFav: boolean) => {
        newFav ? addFavorite(id) : removeFavorite(id)
    }

    // При первой загрузке получаем все посты
    useEffect(() => {
        getAllPosts()
    }, [])

    return { posts, getAllPosts, loading, searchPost, changeFav }
}

export default usePost
