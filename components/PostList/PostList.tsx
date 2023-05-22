import React, { FC } from 'react'

import { FlatList, View } from 'react-native'
import Post from '../Post/Post'

import PostListProps from './PostList.props'
import style from './PostList.styles'

const PostList: FC<PostListProps> = ({ posts, onChangeFavorite }) => {
    return (
        <View style={style.PostList}>
            <View style={style.PostList__container}>
                <FlatList
                    data={posts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Post
                            body={item.body}
                            title={item.title}
                            isFav={item.isFavorite}
                            onTouch={(isFavorite) => {
                                onChangeFavorite &&
                                    onChangeFavorite(item.id, isFavorite)
                            }}
                        />
                    )}
                />
            </View>
        </View>
    )
}

export default PostList
