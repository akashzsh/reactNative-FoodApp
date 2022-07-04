import {View, FlatList, StyleSheet} from 'react-native'
import MealItem from './MealItem'

export default function MealsList({items}) {
    function renderMealItem(itemData) {

        const item = itemData.item;

        const MealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
            // nav: pressHandler,
        }

        // experiment send props upside last

        return <MealItem {...MealItemProps} />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})