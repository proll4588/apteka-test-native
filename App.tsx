import { useEffect, useState } from 'react'

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import PostList from './components/PostList/PostList'
import Search from './components/Search/Search'

import usePost from './hooks/post.hook'
import useDebounce from './hooks/debouce.hook'

const App = () => {
    const { posts, searchPost, changeFav } = usePost()
    const [search, setSearch] = useState('')
    const deb = useDebounce(search)

    useEffect(() => {
        searchPost(deb)
    }, [deb])

    return (
        <View style={styles.container}>
            <Search
                value={search}
                onChange={setSearch}
            />
            <PostList
                posts={posts}
                onChangeFavorite={changeFav}
            />
            <StatusBar style='auto' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 10,
        flex: 1,
        backgroundColor: '#fff',
    },
})

export default App
