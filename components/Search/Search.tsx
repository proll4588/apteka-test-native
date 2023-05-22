import React, { FC, useCallback } from 'react'
import { TextInput } from 'react-native'
import SearchProps from './Search.props'
import style from './Search.styles'

const Search: FC<SearchProps> = ({ value, onChange }) => {
    const inputHandler = useCallback(
        (text: string) => {
            onChange && onChange(text)
        },
        [onChange]
    )

    return (
        <TextInput
            style={style.Search}
            value={value}
            onChangeText={inputHandler}
        />
    )
}

export default Search
