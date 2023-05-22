import React, { FC } from 'react'

import { Text, View } from 'react-native'

import FavoriteIconProps from './FavoriteIcon.props'
import style from './FavoriteIcon.styles'

const FavoriteIcon: FC<FavoriteIconProps> = ({ isActive }) => {
    return (
        <View style={style.FavoriteIcon}>
            <Text
                style={{
                    ...style.FavoriteIcon__icon,
                    color: isActive ? '#ff0000' : '#aaaaaa',
                }}
            >
                ♥
            </Text>
        </View>
    )
}

export default FavoriteIcon
