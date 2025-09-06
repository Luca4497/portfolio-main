import FeatureCard from "../components/main_component/FeatureCard/FeatureCard";

export function generateFeatureCards(data) {
    return data.map(function (item) {
        // console.log(item);
        return (
            <FeatureCard
                key={item.id}
                item={item}
            />
        );
    });
}