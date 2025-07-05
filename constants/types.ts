import {ImageSourcePropType} from "react-native";

export interface IOffer {
    id: number,
    title: string,
    image: ImageSourcePropType,
    color: string,
}