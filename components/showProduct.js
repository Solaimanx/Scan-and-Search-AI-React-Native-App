import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import {scanImage, uploadImage} from './utils';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";




const ImageFunction = ({route, navigation}) => {
  // const {base64Photo} = route.params;
  
  const base64Img = []

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const upload = async () => {
      const cloudUrl = await uploadImage(base64Img);
      console.log(cloudUrl);
      const searchTerms = await scanImage(cloudUrl);
      console.log(searchTerms);
      setIsLoading(false)

    };

    // upload()
    console.log('ok')
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView>
        <View style={styles.overView}>

          <SkeletonPlaceholder speed={900} >
      <View style={{ flexDirection: "row" ,justifyContent:'space-between' , marginBottom: 10,marginTop : 10}}>


          <View style={{ height:25,width : 100 ,marginRight: 20}} />
          <View style={{ height:25,width : 100 ,marginRight: 20}} />
          <View style={{ height:25,width : 100 ,marginRight: 20}} />
          <View style={{ height:25,width : 100}}/>

      </View>
    </SkeletonPlaceholder>



          <SkeletonPlaceholder speed={900} >





<View style={{ flexDirection: "row" , justifyContent: "space-between"}}>
      <View style={{flexDirection: "column", alignItems: "flex-start" ,marginTop: 10 }}>
      <View  style={{ width: 170, height: 160  ,borderRadius: 4}}/>
      <View  style={{ width: 95, height: 15 ,marginTop : 10 ,borderRadius: 4}}/>
      <View  style={{ width: 45, height: 15 ,marginTop : 10 ,borderRadius: 4}}/>
      </View>
      <View style={{flexDirection: "column", alignItems: "flex-start" ,marginTop: 10 }}>
      <View  style={{ width: 170, height: 160 ,borderRadius: 4}}/>
      <View  style={{ width: 95, height: 15 ,marginTop : 10 ,borderRadius: 4}}/>
      <View  style={{ width: 45, height: 15 ,marginTop : 10 ,borderRadius: 4}}/>
      </View>


      </View>
<View style={{ flexDirection: "row" , justifyContent: "space-between"}}>
      <View style={{flexDirection: "column", alignItems: "flex-start" ,marginTop: 10 }}>
      <View  style={{ width: 170, height: 160  ,borderRadius: 4}}/>
      <View  style={{ width: 95, height: 15 ,marginTop : 10 ,borderRadius: 4}}/>
      <View  style={{ width: 45, height: 15 ,marginTop : 10 ,borderRadius: 4}}/>
      </View>
      <View style={{flexDirection: "column", alignItems: "flex-start" ,marginTop: 16 }}>
      <View  style={{ width: 170, height: 160 ,borderRadius: 4}}/>
      <View  style={{ width: 95, height: 15 ,marginTop : 10 ,borderRadius: 4}}/>
      <View  style={{ width: 45, height: 15 ,marginTop : 10 ,borderRadius: 4}}/>
      </View>


      </View>
<View style={{ flexDirection: "row" , justifyContent: "space-between"}}>
      <View style={{flexDirection: "column", alignItems: "flex-start" ,marginTop: 10 }}>
      <View  style={{ width: 170, height: 160  ,borderRadius: 4}}/>
      <View  style={{ width: 95, height: 15 ,marginTop : 10 ,borderRadius: 4}}/>
      <View  style={{ width: 45, height: 15 ,marginTop : 10 ,borderRadius: 4}}/>
      </View>
      <View style={{flexDirection: "column", alignItems: "flex-start" ,marginTop: 16 }}>
      <View  style={{ width: 170, height: 160 ,borderRadius: 4}}/>
      <View  style={{ width: 95, height: 15 ,marginTop : 10 ,borderRadius: 4}}/>
      <View  style={{ width: 45, height: 15 ,marginTop : 10 ,borderRadius: 4}}/>
      </View>
      </View>


    </SkeletonPlaceholder>






        </View >
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <View>actual product</View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
overView: {
  padding: 15,

}
})



export default ImageFunction;
