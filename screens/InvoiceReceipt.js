import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, Padding, FontFamily, FontSize } from "../constants/GlobalStyles";

const InvoiceRecipt = () => {
  return (
    <View style={[styles.invoiceRecipt, styles.avatarIconLayout]}>
      <View style={styles.background}>
        {/* <Image
          style={[styles.avatarIcon, styles.text3Position]}
          contentFit="cover"
          source={require("../assets/avatar.png")}
        />
        <View style={[styles.profileBar, styles.shape12Layout]}>
          <Image
            style={styles.avatarIcon1}
            contentFit="cover"
            source={require("../assets/avatar1.png")}
          />
          <View style={styles.name}>
            <Text style={[styles.safnasKaldeen, styles.dotedLineClr]}>
              Safnas Kaldeen
            </Text>
            <Text style={styles.platinumMember}>{`Platinum Member `}</Text>
          </View>
          <Image
            style={styles.cogIcon}
            contentFit="cover"
            source={require("../assets/cog.png")}
          />
        </View> */}
      </View>
      <View style={styles.frameParent}>
        <View style={[styles.wrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>$ 4998</Text>
        </View>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Text style={[styles.button1, styles.button1Typo]}>PAY NOW</Text>
        </View>
      </View>
      <View style={[styles.frame, styles.framePosition2]}>
        {/* <Image
          style={styles.purpleHaze1}
          contentFit="cover"
          source={require("../assets/purple-haze-1.png")}
        /> */}
      </View>
      <ImageBackground
        style={[styles.invoiceReciptInner, styles.framePosition2]}
        resizeMode="cover"
        source={require("/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/Shadow_Realm.png")}
      >
        <LinearGradient
          style={styles.frameChild}
          locations={[0, 1]}
          colors={["rgba(4, 8, 19, 0.89)", "#000"]}
        />
      </ImageBackground>
      <View style={[styles.frame1, styles.framePosition2]}>
        <View style={styles.rectangleParent}>
          <View style={[styles.frameItem, styles.framePosition1]} />
          <Image
            style={[styles.shape12, styles.framePosition1]}
            contentFit="cover"
            source={require("/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/shape_2.png")}
          />
          <Image
            style={[styles.frameInner, styles.framePosition1]}
            contentFit="cover"
            source={require("/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/vector_3.png")}
          />
          <Image
            style={[styles.frameInner, styles.framePosition1]}
            contentFit="cover"
            source={require("/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/vector_4.png")}
          />
          <View style={[styles.frameGroup, styles.frameLayout]}>
            <View style={[styles.ja1943Wrapper, styles.wrapperFlexBox]}>
              <Text style={styles.pmTypo}>JA1943</Text>
            </View>
            <View style={[styles.textParent, styles.textParentFlexBox]}>
              <Text style={[styles.text1, styles.pmTypo]}>{` `}</Text>
              <Text style={styles.pmTypo}>2A</Text>
            </View>
            <View style={[styles.textParent, styles.textParentFlexBox]}>
              <Text style={styles.pmTypo}>Economy</Text>
            </View>
            <View style={[styles.ja1943Wrapper, styles.wrapperFlexBox]}>
              <Text style={styles.pmTypo}>$2499</Text>
            </View>
          </View>
          <View style={[styles.frameView, styles.frameLayout]} />
          <View style={[styles.lineView, styles.frameChildBorder]} />
          <Text style={styles.jetwingAirlines}>Jetwing Airlines</Text>
          <View style={[styles.frameChild1, styles.frameChildBorder]} />
          <View style={styles.seatbookingPageFlightDeta}>
            <Text style={[styles.fromBia, styles.text3Typo]}>FROM : BIA</Text>
            <Text style={[styles.toMx100, styles.text3Typo]}>
              TO : MX100 Region Mars
            </Text>
            <Text style={[styles.pm, styles.pmTypo]}>12.30 PM</Text>
            <Text style={[styles.text3, styles.text3Typo]}>2023 - 08 - 11</Text>
          </View>
          <Text style={[styles.bookingRates, styles.textTypo]}>
            Booking Rates
          </Text>
          <View style={[styles.frameChild2, styles.parentLayout]} />
          <View style={[styles.frameContainer, styles.framePosition]}>
            <View style={[styles.flightNoWrapper, styles.wrapperFlexBox]}>
              <Text style={styles.pmTypo}>Flight No.</Text>
            </View>
            <View style={[styles.seatIdWrapper, styles.textParentFlexBox]}>
              <Text style={styles.pmTypo}>Seat ID</Text>
            </View>
            <View style={[styles.seatIdWrapper, styles.textParentFlexBox]}>
              <Text style={styles.pmTypo}>Class</Text>
            </View>
            <View style={[styles.priceWrapper, styles.buttonPosition]}>
              <Text style={styles.pmTypo}>Price</Text>
            </View>
          </View>
          <View style={[styles.frameParent1, styles.framePosition]}>
            <View style={[styles.ja1943Wrapper, styles.wrapperFlexBox]}>
              <Text style={styles.pmTypo}>JA1943</Text>
            </View>
            <View style={[styles.textParent, styles.textParentFlexBox]}>
              <Text style={[styles.text1, styles.pmTypo]}>{` `}</Text>
              <Text style={styles.pmTypo}>1A</Text>
            </View>
            <View style={[styles.textParent, styles.textParentFlexBox]}>
              <Text style={styles.pmTypo}>Economy</Text>
            </View>
            <View style={[styles.ja1943Wrapper, styles.wrapperFlexBox]}>
              <Text style={styles.pmTypo}>$2499</Text>
            </View>
          </View>
          <View style={[styles.parent, styles.parentLayout]}>
            <Text style={styles.text6}>$ 4998</Text>
            <Image
              style={[styles.rectangleIcon, styles.rectanglePosition]}
              contentFit="cover"
              source={require("/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/rectangle_3.png")}
            />
            <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
              <View style={styles.rectangleView} />
              <Text style={[styles.enterCode, styles.button1Typo]}>
                Enter Code
              </Text>
            </View>
            <Text style={[styles.text7, styles.text7Typo]}>-$ 0.00</Text>
            <Text style={[styles.discount, styles.text7Typo]}>Discount</Text>
            <Text style={styles.text8}>$ 4998</Text>
            <Text style={[styles.promoCode, styles.promoCodeTypo]}>
              Promo Code
            </Text>
            <Text style={[styles.grandTotal, styles.promoCodeTypo]}>
              Grand Total
            </Text>
            <Text style={styles.total}>Total</Text>
          </View>
          <Image
            style={styles.nave1Icon}
            contentFit="cover"
            source={require("/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/nave_1.png")}
          />
          {/* <View style={styles.rectangleContainer}>
            <View style={styles.rectangleView} />
            <Text style={[styles.enterCode, styles.button1Typo]}>Download</Text>
          </View> */}
        </View>
      </View>
      <TouchableOpacity>
        <View style={[styles.frame2, styles.frameFlexBox]}>
            <View style={[styles.button2, styles.buttonFlexBox]}>
                <Text style={[styles.button1, styles.button1Typo]}>Download</Text>
            </View>
        </View>
      </TouchableOpacity>
      
      <View style={[styles.frame3, styles.framePosition2]}>
        <Image
          style={styles.pngegg1Icon}
          contentFit="cover"
          source={require("/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/pngegg_1.png")}
        />
      </View>
      <View style={[styles.frame4, styles.framePosition2]}>
        <Image
          style={styles.a770a6515b1e0ad75afe1Icon}
          contentFit="cover"
          source={require("/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/Hello_1.png")}
        />
      </View>
      <View style={[styles.frame5, styles.frameFlexBox]}>
        <Text style={[styles.dotedLine, styles.button1Typo]}>
          ...........................................................................................
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarIconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  text3Position: {
    left: "0%",
    top: "0%",
  },
  shape12Layout: {
    width: 378,
    borderRadius: Border.br_xl,
  },
  dotedLineClr: {
    color: Color.fff,
    lineHeight: 24,
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  textTypo: {
    fontFamily: FontFamily.h2,
    lineHeight: 28,
    fontSize: FontSize.h2_size,
    textAlign: "left",
    fontWeight: "500",
    color: "#ece4f2",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    backgroundColor: Color.deepskyblue_100,
    alignItems: "center",
    flexDirection: "row",
  },
  button1Typo: {
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: "#ece4f2",
  },
  framePosition2: {
    alignItems: "flex-end",
    left: -1547,
    position: "absolute",
  },
  framePosition1: {
    left: 0,
    top: 0,
    height: 604,
    position: "absolute",
  },
  frameLayout: {
    height: 37,
    position: "absolute",
  },
  textParentFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  pmTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.urbanistRegular,
    textAlign: "left",
    color: Color.fff,
  },
  frameChildBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(236, 228, 242, 0.53)",
    borderStyle: "solid",
  },
  text3Typo: {
    height: "36.59%",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.urbanistRegular,
    color: Color.fff,
    position: "absolute",
  },
  parentLayout: {
    width: 345,
    position: "absolute",
  },
  framePosition: {
    left: 22,
    height: 37,
    width: 339,
    flexDirection: "row",
    position: "absolute",
  },
  buttonPosition: {
    borderBottomRightRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
  },
  rectanglePosition: {
    height: 27,
    left: 249,
    position: "absolute",
  },
  text7Typo: {
    top: "33.93%",
    width: "37.97%",
    height: "8.93%",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.urbanistRegular,
    textAlign: "center",
    color: Color.fff,
    position: "absolute",
  },
  promoCodeTypo: {
    left: "-3.77%",
    width: "37.97%",
    height: "8.93%",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.urbanistRegular,
    textAlign: "center",
    color: Color.fff,
    position: "absolute",
  },
  frameFlexBox: {
    width: 1934,
    alignItems: "flex-end",
    left: -1547,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  avatarIcon: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  avatarIcon1: {
    top: 11,
    left: 33,
    width: 48,
    height: 48,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  safnasKaldeen: {
    fontSize: FontSize.bodyLSemiBold_size,
    fontWeight: "600",
    fontFamily: FontFamily.bodyLSemiBold,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.fff,
  },
  platinumMember: {
    fontSize: FontSize.bodySMedium_size,
    lineHeight: 18,
    fontFamily: FontFamily.bodySMedium,
    color: Color.stemGreen500,
    marginTop: 4,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0,
  },
  name: {
    top: 12,
    left: 92,
    position: "absolute",
  },
  cogIcon: {
    top: 23,
    left: 334,
    width: 24,
    height: 24,
    position: "absolute",
  },
  profileBar: {
    top: 156,
    left: 198,
    height: 67,
    backgroundColor: Color.primary,
    position: "absolute",
  },
  background: {
    top: -11,
    left: -175,
    width: 872,
    height: 974,
    display: "none",
    position: "absolute",
  },
  text: {
    textAlign: "left",
  },
  wrapper: {
    backgroundColor: Color.deepskyblue_200,
    borderBottomLeftRadius: Border.br_base,
    borderTopLeftRadius: Border.br_base,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
  },
  button1: {
    color: "#ece4f2",
    lineHeight: 24,
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_smi,
    flex: 1,
  },
  button: {
    width: 108,
    marginLeft: -20,
    justifyContent: "center",
    borderBottomRightRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    height: 33,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xl,
    color: "#ece4f2",
  },
  frameParent: {
    top: 764,
    left: 50,
    width: 325,
    alignItems: "center",
    flexDirection: "row",
    height: 33,
    display: "none",
    position: "absolute",
  },
  purpleHaze1: {
    width: 1774,
    height: 1729,
  },
  frame: {
    top: -30,
    width: 3290,
    justifyContent: "center",
    overflow: "hidden",
  },
  frameChild: {
    width: 468,
    height: 498,
    backgroundColor: Color.gradient,
  },
  invoiceReciptInner: {
    top: -1540,
    width: 3200,
    height: 2560,
    paddingHorizontal: 1203,
    paddingVertical: 3,
    justifyContent: "flex-end",
  },
  frameItem: {
    width: 376,
    opacity: 0,
    backgroundColor: Color.primary,
    borderRadius: Border.br_xl,
    display: "none",
  },
  shape12: {
    width: 378,
    borderRadius: Border.br_xl,
    display: "none",
  },
  frameInner: {
    width: 379,
    top: 0,
  },
  ja1943Wrapper: {
    backgroundColor: Color.lightslategray,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
  },
  text1: {
    opacity: 0.1,
  },
  textParent: {
    backgroundColor: Color.lightslategray,
  },
  frameGroup: {
    top: 328,
    width: 339,
    height: 37,
    left: 27,
    flexDirection: "row",
    display: "none",
  },
  frameView: {
    top: 288,
    left: 274,
    justifyContent: "center",
    alignItems: "center",
  },
  lineView: {
    top: 319,
    width: 354,
    left: 12,
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(236, 228, 242, 0.53)",
    borderStyle: "solid",
    position: "absolute",
  },
  jetwingAirlines: {
    top: 20,
    width: 159,
    height: 29,
    left: 27,
    textAlign: "left",
    fontFamily: FontFamily.h2,
    lineHeight: 28,
    fontSize: FontSize.h2_size,
    fontWeight: "500",
    color: Color.fff,
    position: "absolute",
  },
  frameChild1: {
    top: 63,
    width: 354,
    left: 12,
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(236, 228, 242, 0.53)",
    borderStyle: "solid",
    position: "absolute",
  },
  fromBia: {
    width: "37.64%",
    left: "49.44%",
    textAlign: "left",
    top: "0%",
    height: "36.59%",
  },
  toMx100: {
    width: "57.3%",
    top: "58.54%",
    left: "42.7%",
    textAlign: "center",
  },
  pm: {
    height: "43.9%",
    width: "28.09%",
    top: "56.1%",
    left: "6.74%",
    position: "absolute",
  },
  text3: {
    width: "36.8%",
    textAlign: "center",
    left: "0%",
    top: "0%",
  },
  seatbookingPageFlightDeta: {
    top: 333,
    left: 7,
    width: 356,
    height: 40,
    position: "absolute",
  },
  bookingRates: {
    top: 245,
    left: 125,
    width: 143,
    height: 29,
    textAlign: "left",
    display: "none",
    position: "absolute",
  },
  frameChild2: {
    top: 490,
    left: 17,
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(236, 228, 242, 0.53)",
    borderStyle: "solid",
    width: 345,
  },
  flightNoWrapper: {
    justifyContent: "center",
    backgroundColor: Color.deepskyblue_200,
    borderBottomLeftRadius: Border.br_base,
    borderTopLeftRadius: Border.br_base,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
  },
  seatIdWrapper: {
    backgroundColor: Color.deepskyblue_200,
  },
  priceWrapper: {
    justifyContent: "center",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    backgroundColor: Color.deepskyblue_200,
  },
  frameContainer: {
    top: 390,
    borderRadius: 21,
  },
  frameParent1: {
    top: 446,
  },
  text6: {
    width: "27.83%",
    left: "72.17%",
    top: "14.29%",
    height: "8.93%",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.urbanistRegular,
    textAlign: "center",
    color: Color.fff,
    position: "absolute",
  },
  rectangleIcon: {
    top: 123,
    width: 87,
    display: "none",
  },
  rectangleView: {
    borderRadius: Border.br_8xs,
    width: 82,
    height: 22,
    backgroundColor: Color.deepskyblue_100,
  },
  enterCode: {
    color: Color.maroon,
    marginTop: -19,
    width: 88,
    height: 24,
  },
  rectangleGroup: {
    top: 117,
    width: 88,
    justifyContent: "flex-end",
  },
  text7: {
    left: "65.51%",
  },
  discount: {
    left: "-7.25%",
  },
  text8: {
    width: "30.43%",
    left: "70.72%",
    top: "53.57%",
    height: "8.93%",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.urbanistRegular,
    textAlign: "center",
    color: Color.fff,
    position: "absolute",
  },
  promoCode: {
    top: "73.21%",
  },
  grandTotal: {
    top: "53.57%",
  },
  total: {
    left: "-10.43%",
    width: "37.97%",
    top: "14.29%",
    height: "8.93%",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.urbanistRegular,
    textAlign: "center",
    color: Color.fff,
    position: "absolute",
  },
  parent: {
    top: 378,
    left: 24,
    height: 166,
    display: "none",
    overflow: "hidden",
  },
  nave1Icon: {
    top: 91,
    left: 102,
    width: 175,
    height: 224,
    position: "absolute",
  },
  rectangleContainer: {
    top: 73,
    left: 275,
    width: 88,
    justifyContent: "flex-end",
    display: "none",
    position: "absolute",
  },
  rectangleParent: {
    height: 604,
    width: 379,
  },
  frame1: {
    top: 188,
    width: 1952,
    justifyContent: "center",
    overflow: "hidden",
  },
  button2: {
    borderRadius: Border.br_25xl,
    width: 110,
    height: 29,
    justifyContent: "center",
  },
  frame2: {
    top: 207,
  },
  pngegg1Icon: {
    width: 362,
    height: 105,
  },
  frame3: {
    top: 685,
    width: 1946,
    justifyContent: "center",
    overflow: "hidden",
  },
  a770a6515b1e0ad75afe1Icon: {
    width: 213,
    height: 60,
  },
  frame4: {
    top: 242,
    width: 1773,
    justifyContent: "center",
    overflow: "hidden",
  },
  dotedLine: {
    color: Color.fff,
    lineHeight: 24,
  },
  frame5: {
    top: 611,
  },
  invoiceRecipt: {
    borderRadius: Border.br_7xl,
    backgroundColor: Color.gray,
    height: 932,
    overflow: "hidden",
    flex: 1,
    width: "100%",
  },
});

export default InvoiceRecipt;