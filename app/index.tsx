import "./global.css"
import {SafeAreaView} from "react-native-safe-area-context";
import {FlatList, Image, Pressable, Text, TouchableOpacity, View} from "react-native";
import {images, offers} from "@/constants";
import {Fragment} from "react";
import cn from "clsx";

export default function Index() {
  return (
    <SafeAreaView className={"flex-1 bg-white"}>
        <View className={"flex-between flex-row w-full my-5 px-5"}>
        <View className={"flex-start m-2"}>
            <text className={"text-sm text-amber-600"}>Devliver to</text>
            <TouchableOpacity className={"flex-row items-center h-4 "}>
            <text className={" text-black"}>Rijeka, Croatia</text>
            <Image source={images.arrowDown} className={"h-4"} resizeMode={"cover"} />
            </TouchableOpacity>
        </View>
            <Text>Card</Text>
        </View>

        <FlatList data={offers} renderItem={({item,index})=>{

            const isEven = index % 2 === 0
            return (
        <View>
            <Pressable  className={cn('offer-card',isEven  ? "flex-row-reverse":"flex-row")} style={{backgroundColor:item.color}} android_ripple={{color:"#ffffff"}}>
                {({pressed})=>(
                    <Fragment>
                        <View className={"h-full w-1/2"}>
                            <Image source={item.image} className={"h-full w-full"} resizeMode={"contain"}  />
                        </View>
                        <View className={"offer-card__info m-4"}>
                            <Text className={"text-3xl font-bold text-white leading-tight"}>{item.title}</Text>
                            <Image
                            source={images.arrowRight}
                            className={"w-10"}
                            resizeMode={"contain"}
                            tintColor={"#ffffff"}
                            />
                        </View>
                    </Fragment>
                )}
            </Pressable>
        </View>)}}
        />
    </SafeAreaView>
  );
}
