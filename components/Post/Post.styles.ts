import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    Post: {
        minHeight: 80,
        marginVertical: 6,

        marginHorizontal: 6,

        flexDirection: 'row',

        padding: 10,

        backgroundColor: '#f7f8fc',
        borderRadius: 6,

        shadowOffset: {
            height: 0,
            width: 4,
        },
        shadowRadius: 3,
        shadowOpacity: 2,
        shadowColor: 'rgba(34, 60, 80, 0.2)',

        display: 'flex',
    },
    Post__container: {
        flex: 1,

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    Post__title: {
        width: '100%',

        flex: 1,
        fontWeight: 'bold',
        textAlign: 'left',

        overflow: 'hidden',
    },
    Post__body: {
        flex: 1,
    },
})

export default style
