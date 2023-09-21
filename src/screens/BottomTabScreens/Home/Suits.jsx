import { View, FlatList } from "react-native";
import React from "react";
import { scale } from "../../../utils/scale";
import { HomeListComponentEmpty } from "../../../components/primary";
import { HomeRenderItems } from "../Renders/HomeRenderItems";

export const Suits = ({
  womenData,
  state,
  endPointData,
  updateEndPointData,
}) => {

  
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={womenData?.posts}
        renderItem={({ item, index }) => (
          <HomeRenderItems item={item} index={index} />
        )}
        columnWrapperStyle={{ gap: scale.pixelSizeHorizontal(17) }}
        keyExtractor={(item, index) => item.id}
        ListEmptyComponent={() => <HomeListComponentEmpty state={state} />}
        contentContainerStyle={{
          marginTop: scale.pixelSizeVertical(10),
          // width: "100%",
        }}
      />
      {/* <View style={{ height: scale.heightPixel(30) }} /> */}
    </View>
  );
};
