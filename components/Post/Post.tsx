import React, { FC } from 'react'

import { Text, TouchableOpacity, View } from 'react-native'
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon'

import PostProps from './Post.props'
import style from './Post.styles'

const Post: FC<PostProps> = ({ title, body, isFav, onTouch }) => {
    const touchHandler = () => {
        onTouch && onTouch(!isFav)
    }

    return (
        <TouchableOpacity onPress={touchHandler}>
            <View style={style.Post}>
                <View style={style.Post__container}>
                    <Text style={style.Post__title}>{title}</Text>
                    <Text style={style.Post__body}>{body}</Text>
                    <FavoriteIcon isActive={isFav} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Post
