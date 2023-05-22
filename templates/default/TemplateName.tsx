import React, { FC } from 'react'
import { Text, View } from 'react-native'
import TemplateNameProps from './TemplateName.props'
import style from './TemplateName.styles'

const TemplateName: FC<TemplateNameProps> = ({}) => {
    return (
        <View style={style.TemplateName}>
            <View style={style.TemplateName__container}>
                <Text>TemplateName</Text>
            </View>
        </View>
    )
}

export default TemplateName
